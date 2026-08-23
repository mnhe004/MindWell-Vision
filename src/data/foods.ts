export interface Food {
  id: string
  name: string
  category: string
  emoji: string
  /** 每 100g（或每 100ml）营养值——保留用于换算，展示时优先用 portion */
  kcal: number
  water: number
  carbs: number
  protein: number
  fat: number
  fiber: number
  vitamins: string[]
  goodFor: string[]
  caution: string[]
  store?: string
  brand?: string
  spec?: string
  isFruit?: boolean
  kind?: '超市' | '便利店' | '快餐外卖' | '咖啡' | '奶茶' | '甜点'
  /**
   * 真实生活份量（重点）：用生活化量词 + 对应克数 + 该份量卡路里
   * 例：玉米 { label: '1根', grams: 200, kcal: 224 }
   * 例：米饭 { label: '1碗（约一掌）', grams: 150, kcal: 174 }
   */
  portion?: { label: string; grams: number; kcal: number }
}

export const foods: Food[] = [
  { id: 'cherry-tomato', name: '圣女果（小番茄）', category: '水果', emoji: '🍅', kcal: 22, water: 94, carbs: 4.9, protein: 1.0, fat: 0.2, fiber: 1.2, vitamins: ['维生素C', '番茄红素'], goodFor: ['控糖', '减脂'], caution: ['腹泻期少食'], portion: { label: '1把', grams: 100, kcal: 22 } },
  { id: 'cucumber', name: '黄瓜', category: '蔬菜沙拉', emoji: '🥒', kcal: 16, water: 96, carbs: 2.9, protein: 0.8, fat: 0.2, fiber: 0.5, vitamins: ['维生素K'], goodFor: ['补水', '减脂'], caution: ['性凉，脾胃虚寒者少食'], portion: { label: '1根', grams: 150, kcal: 24 } },
  { id: 'apple', name: '苹果', category: '水果', emoji: '🍎', kcal: 52, water: 86, carbs: 13.8, protein: 0.3, fat: 0.2, fiber: 2.4, vitamins: ['维生素C', '膳食纤维'], goodFor: ['通便', '控糖(带皮)'], caution: ['腹泻期蒸熟再吃'], portion: { label: '1个（约一拳）', grams: 200, kcal: 104 } },
  { id: 'banana', name: '香蕉', category: '水果', emoji: '🍌', kcal: 89, water: 75, carbs: 22.8, protein: 1.1, fat: 0.3, fiber: 2.6, vitamins: ['钾', '维生素B6'], goodFor: ['补钾', '运动后'], caution: ['糖尿病人适量'], portion: { label: '1根（约一掌）', grams: 120, kcal: 107 } },
  { id: 'blueberry', name: '蓝莓', category: '水果', emoji: '🫐', kcal: 57, water: 84, carbs: 14.5, protein: 0.7, fat: 0.3, fiber: 2.4, vitamins: ['花青素', '维生素C'], goodFor: ['护眼', '抗氧化'], caution: ['一次不宜过多'], portion: { label: '1盒', grams: 125, kcal: 71 } },
  { id: 'salad', name: '生菜沙拉', category: '蔬菜沙拉', emoji: '🥗', kcal: 30, water: 95, carbs: 4.0, protein: 1.5, fat: 0.5, fiber: 1.8, vitamins: ['叶酸', '维生素A'], goodFor: ['减脂', '补水'], caution: ['腹泻期忌生食'], portion: { label: '1份', grams: 100, kcal: 30 } },
  { id: 'broccoli', name: '西兰花', category: '蔬菜', emoji: '🥦', kcal: 34, water: 89, carbs: 6.6, protein: 2.8, fat: 0.4, fiber: 2.6, vitamins: ['维生素C', '维生素K'], goodFor: ['控糖', '防癌'], caution: ['甲状腺功能减退者勿过量'], portion: { label: '1颗', grams: 300, kcal: 102 } },
  { id: 'carrot', name: '胡萝卜', category: '蔬菜', emoji: '🥕', kcal: 41, water: 88, carbs: 9.6, protein: 0.9, fat: 0.2, fiber: 2.8, vitamins: ['β-胡萝卜素'], goodFor: ['护眼'], caution: ['生吃吸收率低'], portion: { label: '1根', grams: 100, kcal: 41 } },
  { id: 'spinach', name: '菠菜', category: '蔬菜', emoji: '🥬', kcal: 23, water: 91, carbs: 3.6, protein: 2.9, fat: 0.4, fiber: 2.2, vitamins: ['铁', '叶酸'], goodFor: ['补铁', '控糖'], caution: ['痛风急性期少食'], portion: { label: '1把', grams: 200, kcal: 46 } },
  { id: 'mushroom', name: '蘑菇', category: '蔬菜', emoji: '🍄', kcal: 22, water: 92, carbs: 3.3, protein: 3.1, fat: 0.3, fiber: 1.0, vitamins: ['维生素D', 'B族'], goodFor: ['增强免疫'], caution: ['野生菌需谨慎'], portion: { label: '1盒', grams: 100, kcal: 22 } },
  { id: 'hericium', name: '猴头菇', category: '菌菇', emoji: '🍄🟫', kcal: 30, water: 90, carbs: 5.0, protein: 2.6, fat: 0.2, fiber: 4.0, vitamins: ['多糖', 'B族'], goodFor: ['养胃', '腹泻后调养'], caution: ['过敏体质者注意'], portion: { label: '1个', grams: 100, kcal: 30 } },
  { id: 'millet-porridge', name: '小米粥', category: '主食', emoji: '🥣', kcal: 46, water: 88, carbs: 9.0, protein: 1.4, fat: 0.5, fiber: 0.4, vitamins: ['B族', '镁'], goodFor: ['养胃', '腹泻期'], caution: ['糖尿病人控量'], portion: { label: '1碗', grams: 250, kcal: 115 } },
  { id: 'chicken-breast', name: '鸡胸肉', category: '蛋白质', emoji: '🍗', kcal: 165, water: 72, carbs: 0, protein: 31, fat: 3.6, fiber: 0, vitamins: ['烟酸', 'B6'], goodFor: ['增肌', '减脂'], caution: ['肾病患者控蛋白'], portion: { label: '1块（约一掌）', grams: 150, kcal: 248 } },
  { id: 'salmon', name: '三文鱼', category: '蛋白质', emoji: '🐟', kcal: 208, water: 68, carbs: 0, protein: 20, fat: 13, fiber: 0, vitamins: ['Omega-3', '维生素D'], goodFor: ['护心', '抗炎'], caution: ['痛风急性期少食'], portion: { label: '1块', grams: 120, kcal: 250 } },
  { id: 'egg', name: '鸡蛋', category: '蛋白质', emoji: '🥚', kcal: 144, water: 75, carbs: 1.0, protein: 13, fat: 9.5, fiber: 0, vitamins: ['卵磷脂', '维生素A'], goodFor: ['优质蛋白'], caution: ['高胆固醇者适量'], portion: { label: '1个', grams: 50, kcal: 72 } },
  { id: 'oat', name: '燕麦', category: '主食', emoji: '🌾', kcal: 389, water: 9, carbs: 66, protein: 16.9, fat: 6.9, fiber: 10.6, vitamins: ['β-葡聚糖'], goodFor: ['控糖', '降脂'], caution: ['干重热量高，注意份量'], portion: { label: '1份（约40g干）（约一捧）', grams: 40, kcal: 156 } },
  { id: 'rice', name: '白米饭', category: '主食', emoji: '🍚', kcal: 116, water: 70, carbs: 25.9, protein: 2.6, fat: 0.3, fiber: 0.3, vitamins: ['碳水化合物'], goodFor: ['快速供能'], caution: ['糖尿病人适量'], portion: { label: '1碗（约一掌）', grams: 150, kcal: 174 } },
  { id: 'wholewheat', name: '全麦面包', category: '主食', emoji: '🍞', kcal: 246, water: 38, carbs: 41, protein: 13, fat: 3.4, fiber: 7, vitamins: ['膳食纤维', 'B族'], goodFor: ['控糖', '饱腹'], caution: ['挑选注意配料表'], portion: { label: '1片', grams: 35, kcal: 86 } },
  { id: 'yogurt', name: '酸奶', category: '乳制品', emoji: '🥛', kcal: 72, water: 85, carbs: 9.3, protein: 3.5, fat: 2.7, fiber: 0, vitamins: ['钙', '益生菌'], goodFor: ['肠道健康'], caution: ['乳糖不耐受选无乳糖'], portion: { label: '1杯', grams: 150, kcal: 108 } },
  { id: 'milk', name: '牛奶', category: '乳制品', emoji: '🥛', kcal: 54, water: 89, carbs: 4.9, protein: 3.0, fat: 3.2, fiber: 0, vitamins: ['钙', '维生素D'], goodFor: ['补钙'], caution: ['乳糖不耐受慎用'], portion: { label: '1杯（约250ml）', grams: 250, kcal: 135 } },
  { id: 'soy-milk', name: '豆浆', category: '饮品', emoji: '🥤', kcal: 31, water: 93, carbs: 1.8, protein: 3.0, fat: 1.6, fiber: 0.4, vitamins: ['大豆异黄酮'], goodFor: ['控糖', '护心'], caution: ['痛风急性期少食'], portion: { label: '1杯（约250ml）', grams: 250, kcal: 78 } },
  { id: 'tofu', name: '豆腐', category: '蛋白质', emoji: '🧈', kcal: 82, water: 83, carbs: 2.4, protein: 8.1, fat: 4.8, fiber: 0.4, vitamins: ['钙', '大豆蛋白'], goodFor: ['植物蛋白'], caution: ['痛风急性期少食'], portion: { label: '1盒', grams: 300, kcal: 246 } },
  { id: 'corn', name: '玉米', category: '主食', emoji: '🌽', kcal: 112, water: 73, carbs: 22.8, protein: 4.0, fat: 1.2, fiber: 2.9, vitamins: ['维生素B1'], goodFor: ['控糖', '粗粮'], caution: ['糖尿病人算主食'], portion: { label: '1根（约一掌）', grams: 200, kcal: 224 } },
  { id: 'sweet-potato', name: '红薯', category: '主食', emoji: '🍠', kcal: 86, water: 73, carbs: 20.1, protein: 1.6, fat: 0.1, fiber: 3.0, vitamins: ['β-胡萝卜素', '膳食纤维'], goodFor: ['通便', '控糖'], caution: ['糖尿病人算主食'], portion: { label: '1个（约一掌）', grams: 200, kcal: 172 } },
  { id: 'potato', name: '土豆', category: '主食', emoji: '🥔', kcal: 77, water: 79, carbs: 17.5, protein: 2.0, fat: 0.1, fiber: 2.2, vitamins: ['维生素C', '钾'], goodFor: ['饱腹'], caution: ['油炸则热量大增'], portion: { label: '1个（约一拳）', grams: 150, kcal: 116 } },
  { id: 'avocado', name: '牛油果', category: '水果', emoji: '🥑', kcal: 160, water: 73, carbs: 8.5, protein: 2.0, fat: 14.7, fiber: 6.7, vitamins: ['单不饱和脂肪', '维生素E'], goodFor: ['护心', '优质脂肪'], caution: ['热量高，减脂期控量'], portion: { label: '1个', grams: 150, kcal: 240 } },
  { id: 'orange', name: '橙子', category: '水果', emoji: '🍊', kcal: 47, water: 87, carbs: 11.8, protein: 0.9, fat: 0.1, fiber: 2.4, vitamins: ['维生素C'], goodFor: ['增强免疫'], caution: ['胃酸过多者少食'], portion: { label: '1个', grams: 200, kcal: 94 } },
  { id: 'kiwi', name: '猕猴桃', category: '水果', emoji: '🥝', kcal: 61, water: 83, carbs: 14.7, protein: 1.1, fat: 0.5, fiber: 3.0, vitamins: ['维生素C', '膳食纤维'], goodFor: ['通便', '免疫'], caution: ['腹泻期少食'], portion: { label: '1个', grams: 80, kcal: 49 } },
  { id: 'watermelon', name: '西瓜', category: '水果', emoji: '🍉', kcal: 30, water: 91, carbs: 7.6, protein: 0.6, fat: 0.2, fiber: 0.4, vitamins: ['水分', '番茄红素'], goodFor: ['补水', '利尿'], caution: ['糖尿病人适量', '腹泻期忌食'], portion: { label: '1牙', grams: 200, kcal: 60 } },
  { id: 'grapes', name: '葡萄', category: '水果', emoji: '🍇', kcal: 69, water: 81, carbs: 18.1, protein: 0.7, fat: 0.2, fiber: 0.9, vitamins: ['花青素', '钾'], goodFor: ['抗氧化'], caution: ['糖尿病人适量'], portion: { label: '1串', grams: 150, kcal: 104 } }
]

import { foods2 } from './foods2'
import { foods3 } from './foods3'
import { foods4 } from './foods4'
import { foods5 } from './foods5'
import { foods6 } from './foods6'
import { foods7 } from './foods7'
import { foods8 } from './foods8'
import { foods9 } from './foods9'
import { foods10 } from './foods10'
import { foods11 } from './foods11'
import { foods12 } from './foods12'
import { foods13 } from './foods13'
import { foods14 } from './foods14'
import { foods15 } from './foods15'
import { foods16 } from './foods16'
import { foods17 } from './foods17'
import { foods18 } from './foods18'
import { foods19 } from './foods19'
import { foods20 } from './foods20'
import { foods21 } from './foods21'
import { foods22 } from './foods22'
import { foods23 } from './foods23'
import { foods24 } from './foods24'
import { foods25 } from './foods25'
import { foods26 } from './foods26'
import { foods27 } from './foods27'
import { foods28 } from './foods28'
import { foods29 } from './foods29'
import { foods30 } from './foods30'
import { foods31 } from './foods31'
import { foods32 } from './foods32'

export type FoodKind = '超市' | '便利店' | '快餐外卖' | '咖啡' | '奶茶' | '甜点'

export const KIND_LABELS: { key: FoodKind; label: string; emoji: string }[] = [
  { key: '超市', label: '超市/生鲜', emoji: '🛒' },
  { key: '便利店', label: '便利店', emoji: '🏪' },
  { key: '快餐外卖', label: '快餐/外卖', emoji: '🍔' },
  { key: '咖啡', label: '咖啡', emoji: '☕' },
  { key: '奶茶', label: '奶茶果茶', emoji: '🧋' },
  { key: '甜点', label: '烘焙甜点', emoji: '🍰' }
]

const SUPERMARKET_STORES = new Set(['山姆', '盒马', '叮咚买菜', '胖东来', '开市客', '超市通用'])
const CONVENIENCE_STORES = new Set(['全家', '711', '罗森'])

export function foodKind(f: Food): FoodKind {
  if (f.kind) return f.kind
  const s = f.store ?? '超市通用'
  if (CONVENIENCE_STORES.has(s)) return '便利店'
  if (SUPERMARKET_STORES.has(s)) return '超市'
  // 无归属的散装食材/家常菜归入超市
  return '超市'
}

export const allFoods: Food[] = [...foods, ...foods2, ...foods3, ...foods4, ...foods5, ...foods6, ...foods7, ...foods8, ...foods9, ...foods10, ...foods11, ...foods12, ...foods13, ...foods14, ...foods15, ...foods16, ...foods17, ...foods18, ...foods19, ...foods20, ...foods21, ...foods22, ...foods23, ...foods24, ...foods25, ...foods26, ...foods27, ...foods28, ...foods29, ...foods30, ...foods31, ...foods32]

export function findFood(id: string): Food | undefined {
  return allFoods.find((f) => f.id === id)
}

export function searchFoods(query: string, limit = 12): Food[] {
  const q = query.trim().toLowerCase()
  if (!q) return []
  const hits = allFoods.filter((f) =>
    f.name.toLowerCase().includes(q) ||
    (f.brand ?? '').toLowerCase().includes(q) ||
    (f.store ?? '').includes(q) ||
    f.category.includes(q) ||
    f.name.split(/[（）()]/).some((part) => part.toLowerCase().includes(q))
  )
  return hits.slice(0, limit)
}

export function listStores(kind?: FoodKind | '全部'): string[] {
  const pool = !kind || kind === '全部' ? allFoods : allFoods.filter((f) => foodKind(f) === kind)
  return Array.from(new Set(pool.map((f) => f.store ?? '超市通用'))).sort((a, b) => a.localeCompare(b, 'zh'))
}

export function listCategories(store?: string): string[] {
  const pool = store && store !== '全部' ? allFoods.filter((f) => (f.store ?? '超市通用') === store) : allFoods
  return Array.from(new Set(pool.map((f) => f.category)))
}