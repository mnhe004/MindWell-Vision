// 自选配料数据：海底捞拌饭/烫菜、麻辣烫、自选沙拉等（点外卖式累加热量）
import type { BuildItem } from '@/components/BuildYourOwn'

// —— 海底捞·烫菜（选味道 + 选配料） ——
export const HAIDILAO_TANGCAI: { label: string; flavor: { name: string; kcal: number }[]; items: BuildItem[] } = {
  label: '海底捞·烫菜（自选配料）',
  flavor: [
    { name: '麻辣味', kcal: 80 },
    { name: '番茄味', kcal: 30 },
    { name: '菌汤味', kcal: 25 },
    { name: '清汤味', kcal: 15 }
  ],
  items: [
    { id: 'hdlt-base', name: '粉丝', emoji: '🍜', kcal: 160, grams: 100, group: '基底' },
    { id: 'hdlt-base2', name: '米饭', emoji: '🍚', kcal: 174, grams: 150, group: '基底' },
    { id: 'hdlt-meat1', name: '肥牛', emoji: '🥩', kcal: 125, grams: 50, group: '肉' },
    { id: 'hdlt-meat2', name: '午餐肉', emoji: '🥫', kcal: 114, grams: 50, group: '肉' },
    { id: 'hdlt-meat3', name: '虾滑', emoji: '🦐', kcal: 60, grams: 50, group: '肉' },
    { id: 'hdlt-meat4', name: '鱼豆腐', emoji: '🐟', kcal: 65, grams: 50, group: '肉' },
    { id: 'hdlt-veg1', name: '娃娃菜', emoji: '🥬', kcal: 13, grams: 50, group: '蔬菜' },
    { id: 'hdlt-veg2', name: '金针菇', emoji: '🍄', kcal: 16, grams: 50, group: '蔬菜' },
    { id: 'hdlt-veg3', name: '土豆片', emoji: '🥔', kcal: 39, grams: 50, group: '蔬菜' },
    { id: 'hdlt-veg4', name: '藕片', emoji: '🪷', kcal: 35, grams: 50, group: '蔬菜' },
    { id: 'hdlt-veg5', name: '豆皮', emoji: '🥡', kcal: 90, grams: 50, group: '蔬菜' },
    { id: 'hdlt-egg', name: '鹌鹑蛋', emoji: '🥚', kcal: 40, grams: 40, group: '蛋类' },
    { id: 'hdlt-extra', name: '芝士年糕', emoji: '🧀', kcal: 80, grams: 50, group: '主食' }
  ]
}

// —— 麻辣烫（自选配料） ——
export const MALATANG: { label: string; flavor: { name: string; kcal: number }[]; items: BuildItem[] } = {
  label: '麻辣烫（自选配料）',
  flavor: [
    { name: '清汤（不辣）', kcal: 20 },
    { name: '微辣', kcal: 45 },
    { name: '中辣', kcal: 70 },
    { name: '重辣', kcal: 100 }
  ],
  items: [
    { id: 'mlt-base1', name: '方便面', emoji: '🍜', kcal: 235, grams: 50, group: '主食' },
    { id: 'mlt-base2', name: '粉丝', emoji: '🍜', kcal: 160, grams: 100, group: '主食' },
    { id: 'mlt-base3', name: '宽粉', emoji: '🍜', kcal: 180, grams: 100, group: '主食' },
    { id: 'mlt-meat1', name: '肥牛卷', emoji: '🥩', kcal: 125, grams: 50, group: '肉' },
    { id: 'mlt-meat2', name: '午餐肉', emoji: '🥫', kcal: 114, grams: 50, group: '肉' },
    { id: 'mlt-meat3', name: '鱼丸', emoji: '🐟', kcal: 60, grams: 50, group: '肉' },
    { id: 'mlt-meat4', name: '蟹棒', emoji: '🦀', kcal: 50, grams: 50, group: '肉' },
    { id: 'mlt-meat5', name: '培根', emoji: '🥓', kcal: 180, grams: 40, group: '肉' },
    { id: 'mlt-veg1', name: '娃娃菜', emoji: '🥬', kcal: 13, grams: 50, group: '蔬菜' },
    { id: 'mlt-veg2', name: '金针菇', emoji: '🍄', kcal: 16, grams: 50, group: '蔬菜' },
    { id: 'mlt-veg3', name: '土豆片', emoji: '🥔', kcal: 39, grams: 50, group: '蔬菜' },
    { id: 'mlt-veg4', name: '藕片', emoji: '🪷', kcal: 35, grams: 50, group: '蔬菜' },
    { id: 'mlt-veg5', name: '海带结', emoji: '🌊', kcal: 10, grams: 50, group: '蔬菜' },
    { id: 'mlt-veg6', name: '木耳', emoji: '🍄', kcal: 12, grams: 40, group: '蔬菜' },
    { id: 'mlt-veg7', name: '腐竹', emoji: '🥡', kcal: 90, grams: 40, group: '蔬菜' },
    { id: 'mlt-egg', name: '鹌鹑蛋', emoji: '🥚', kcal: 40, grams: 40, group: '蛋类' },
    { id: 'mlt-sauce1', name: '芝麻酱', emoji: '🥣', kcal: 60, grams: 15, group: '酱料', max: 2 },
    { id: 'mlt-sauce2', name: '辣油', emoji: '🌶️', kcal: 90, grams: 10, group: '酱料', max: 2 }
  ]
}

// —— 自选沙拉（轻食） ——
export const SALAD: { label: string; flavor: { name: string; kcal: number }[]; items: BuildItem[] } = {
  label: '自选沙拉碗',
  flavor: [
    { name: '油醋汁', kcal: 45 },
    { name: '芝麻酱', kcal: 90 },
    { name: '凯撒酱', kcal: 120 },
    { name: '不放酱', kcal: 0 }
  ],
  items: [
    { id: 'salad-base1', name: '生菜底', emoji: '🥬', kcal: 15, grams: 100, group: '基底' },
    { id: 'salad-base2', name: '藜麦饭', emoji: '🌾', kcal: 180, grams: 100, group: '基底' },
    { id: 'salad-pro1', name: '鸡胸肉', emoji: '🍗', kcal: 165, grams: 100, group: '蛋白质' },
    { id: 'salad-pro2', name: '牛肉粒', emoji: '🥩', kcal: 150, grams: 80, group: '蛋白质' },
    { id: 'salad-pro3', name: '虾仁', emoji: '🦐', kcal: 80, grams: 80, group: '蛋白质' },
    { id: 'salad-pro4', name: '三文鱼', emoji: '🐟', kcal: 160, grams: 80, group: '蛋白质' },
    { id: 'salad-veg1', name: '玉米粒', emoji: '🌽', kcal: 56, grams: 50, group: '蔬菜' },
    { id: 'salad-veg2', name: '圣女果', emoji: '🍅', kcal: 11, grams: 50, group: '蔬菜' },
    { id: 'salad-veg3', name: '黄瓜', emoji: '🥒', kcal: 8, grams: 50, group: '蔬菜' },
    { id: 'salad-veg4', name: '牛油果', emoji: '🥑', kcal: 80, grams: 50, group: '蔬菜' },
    { id: 'salad-extra', name: '溏心蛋', emoji: '🥚', kcal: 72, grams: 50, group: '蛋白质' },
    { id: 'salad-nut', name: '每日坚果', emoji: '🥜', kcal: 150, grams: 25, group: '坚果' }
  ]
}