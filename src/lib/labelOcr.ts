// 标签文字识别：拍饮料/包装食品时读瓶身标签 → 匹配商品库（解决拍芬达识别成魔鬼蛋）
// 复用 PaddleOCR 管线（与药盒识别同引擎），在 WebView 已验证可运行
import { ocrImageDrugs } from '@/lib/drugOcr'
import { searchFoods, allFoods, type Food } from '@/data/foods'

export interface LabelMatch {
  food: Food
  text: string        // 识别到的标签文字
  matchedBy: string   // 匹配到的关键词
}

// 从 OCR 文本中提取关键信息并匹配商品库
export function matchFoodFromLabel(text: string): LabelMatch | null {
  if (!text.trim()) return null
  const norm = text.toLowerCase()
  // 计算两个字符串的最长公共连续子串长度（≥2 视为命中）
  function commonLen(a: string, b: string): number {
    if (a.length < 2 || b.length < 2) return 0
    let best = 0
    for (let i = 0; i < a.length; i++) {
      for (let j = a.length; j > i && j - i > best; j--) {
        const sub = a.slice(i, j)
        if (b.includes(sub)) { best = j - i; break }
      }
      if (a.length - i <= best) break
    }
    return best
  }
  // 归一化商品名：去括号内容、去单位
  function normName(n: string): string {
    return n.replace(/（[^）]*）|\([^)]*\)/g, '').replace(/[·\s]/g, '').toLowerCase()
  }
  // 1. 遍历所有商品，算 OCR 文本与商品名的公共子串长度，取最长
  let best: { food: Food; score: number; brandHit: boolean } | null = null
  for (const f of allFoods) {
    const key = normName(f.name)
    const brand = (f.brand ?? '').toLowerCase()
    let score = commonLen(norm, key)
    const brandHit = brand.length >= 2 && norm.includes(brand)
    if (brandHit) score = Math.max(score, brand.length)
    if (score >= 2) {
      const better = !best || score > best.score || (score === best.score && brandHit && !best.brandHit)
      if (better) best = { food: f, score, brandHit }
    }
  }
  // 2. 若 OCR 文本含「配料/营养成分表」且无品牌命中 → 视为营养标签而非品牌食品
  const isLabelTable = /配料|营养成分|能量|蛋白质|脂肪|碳水化合物/.test(text)
  if (best && !best.brandHit && isLabelTable) return null
  if (best) return { food: best.food, text, matchedBy: best.food.brand || best.food.name }
  return null
}

// 识别包装食品/饮料：OCR 优先，失败返回 null（调用方回退图像分类）
export async function recognizePackagedFood(dataUrl: string): Promise<{ text: string; match: LabelMatch | null }> {
  try {
    const r = await ocrImageDrugs(dataUrl)
    const text = r.text.trim()
    if (!text) return { text: '', match: null }
    const match = matchFoodFromLabel(text)
    return { text, match }
  } catch {
    return { text: '', match: null }
  }
}

// 检查商品库是否已有该饮品（供 UI 提示）
export function hasFood(query: string): boolean {
  return searchFoods(query, 3).length > 0
}