// 拍配料表/营养标签 → 解析营养成分 → 计算热量（每100g及每份）
// 复用 PaddleOCR 读营养标签文字，解析「能量/蛋白质/脂肪/碳水化合物」数值
import { ocrImageDrugs } from '@/lib/drugOcr'

export interface NutritionLabel {
  per100gKcal: number | null
  protein: number | null   // g/100g
  carbs: number | null
  fat: number | null
  fiber: number | null
  sodium: number | null    // mg/100g
  raw: string
}

// 全角→半角、统一标点，提升 OCR 解析容错
export function normalizeLabelText(text: string): string {
  return (text ?? '')
    .replace(/[０-９]/g, (c) => String.fromCharCode(c.charCodeAt(0) - 0xfee0))
    .replace(/[ａ-ｚＡ-Ｚ]/g, (c) => String.fromCharCode(c.charCodeAt(0) - 0xfee0))
    .replace(/[：．·]|[\uFF1A\uFF0E]/g, ':')
    .replace(/／/g, '/')
    .replace(/[　\s]+/g, ' ')
}

export function parseNutritionLabel(text: string): NutritionLabel | null {
  const t = normalizeLabelText(text)
  if (!t.trim()) return null
  const out: NutritionLabel = { per100gKcal: null, protein: null, carbs: null, fat: null, fiber: null, sodium: null, raw: text }

  // 能量：支持 能量/热量/Energy + kJ/千焦/千卡/kcal；数值与单位可分开
  const en = t.match(/(?:能量|热量|能量值|Energy)\s*[:：]?\s*(\d+(?:\.\d+)?)\s*(千焦|kJ|kj|千卡|kcal|大卡|卡路里|卡)?/i)
  if (en) {
    const v = parseFloat(en[1])
    let unit = (en[2] ?? '').toLowerCase()
    if (!unit) unit = /千焦|kj/i.test(t) ? 'kj' : /千卡|kcal|大卡|卡路里/i.test(t) ? 'kcal' : 'kj'
    out.per100gKcal = unit.includes('千焦') || unit === 'kj' ? Math.round(v / 4.184) : Math.round(v)
  }

  const grab = (label: RegExp): number | null => {
    const m = t.match(label)
    return m ? parseFloat(m[1]) : null
  }
  out.protein = grab(/蛋白质\s*[:：]?\s*(\d+(?:\.\d+)?)\s*(?:g|克)?/i)
  out.fat = grab(/脂肪\s*[:：]?\s*(\d+(?:\.\d+)?)\s*(?:g|克)?/i)
  out.carbs = grab(/碳水(?:化合物)?\s*[:：]?\s*(\d+(?:\.\d+)?)\s*(?:g|克)?/i)
  out.fiber = grab(/膳食纤维\s*[:：]?\s*(\d+(?:\.\d+)?)\s*(?:g|克)?/i)
  out.sodium = grab(/钠\s*[:：]?\s*(\d+(?:\.\d+)?)\s*(?:mg|毫克)?/i)

  if (out.per100gKcal !== null || out.protein !== null || out.carbs !== null || out.fat !== null) return out
  return null
}

// 识别营养标签图片；即使解析失败也返回原始 OCR 文本供展示/手动填写
export async function recognizeNutritionLabel(dataUrl: string): Promise<{ label: NutritionLabel | null; raw: string }> {
  try {
    const r = await ocrImageDrugs(dataUrl)
    return { label: parseNutritionLabel(r.text), raw: r.text }
  } catch (e) {
    return { label: null, raw: String(e) }
  }
}

// 按份量计算热量（克数 × 每100g）
export function kcalForPortion(label: NutritionLabel, grams: number): number {
  const base = label.per100gKcal ?? (label.protein !== null && label.carbs !== null && label.fat !== null
    ? Math.round(label.protein * 4 + label.carbs * 4 + label.fat * 9)
    : 0)
  return Math.round((base * grams) / 100)
}