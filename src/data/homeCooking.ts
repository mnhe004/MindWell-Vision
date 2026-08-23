// 家常做法（炒菜/焖菜/烫菜/西餐）：丰富食材库（55+ 种），按 肉类/海鲜/蛋/蔬菜/菌菇/豆制品/主食/水果/坚果 分类
import type { BuildItem } from '@/components/BuildYourOwn'

export interface CookRecipe {
  label: string
  emoji: string
  flavor: { name: string; kcal: number }[]
  items: BuildItem[]
}

// —— 食材库（每份约一掌肉 / 一把菜 / 1个蛋）——
const 肉类: BuildItem[] = [
  { id: 'beef', name: '牛肉', emoji: '🥩', kcal: 150, grams: 80, group: '肉类', portion: '掌', protein: 16, carbs: 0, fat: 9 },
  { id: 'pork', name: '猪瘦肉', emoji: '🥓', kcal: 115, grams: 80, group: '肉类', portion: '掌', protein: 16, carbs: 0, fat: 5 },
  { id: 'chicken', name: '鸡胸肉', emoji: '🍗', kcal: 132, grams: 80, group: '肉类', portion: '掌', protein: 25, carbs: 0, fat: 3 },
  { id: 'chicken-leg', name: '鸡腿肉', emoji: '🍗', kcal: 150, grams: 80, group: '肉类', portion: '掌', protein: 16, carbs: 0, fat: 9 },
  { id: 'duck', name: '鸭肉', emoji: '🦆', kcal: 240, grams: 80, group: '肉类', portion: '掌', protein: 15, carbs: 0, fat: 19 },
  { id: 'lamb', name: '羊肉', emoji: '🐑', kcal: 203, grams: 80, group: '肉类', portion: '掌', protein: 19, carbs: 0, fat: 14 },
  { id: 'bacon', name: '培根', emoji: '🥓', kcal: 180, grams: 40, group: '肉类', portion: '片', protein: 9, carbs: 1, fat: 15 },
  { id: 'sausage', name: '香肠', emoji: '🌭', kcal: 200, grams: 60, group: '肉类', portion: '根', protein: 8, carbs: 2, fat: 17 },
  { id: 'pork-liver', name: '猪肝', emoji: '🫘', kcal: 130, grams: 80, group: '肉类', portion: '掌', protein: 19, carbs: 4, fat: 4 }
]
const 海鲜: BuildItem[] = [
  { id: 'shrimp', name: '虾仁', emoji: '🦐', kcal: 80, grams: 80, group: '海鲜', portion: '掌', protein: 17, carbs: 0, fat: 1 },
  { id: 'fish', name: '鱼片', emoji: '🐟', kcal: 110, grams: 80, group: '海鲜', portion: '掌', protein: 18, carbs: 0, fat: 4 },
  { id: 'salmon', name: '三文鱼', emoji: '🍣', kcal: 208, grams: 100, group: '海鲜', portion: '份', protein: 20, carbs: 0, fat: 13 },
  { id: 'hairtail', name: '带鱼', emoji: '🐟', kcal: 140, grams: 100, group: '海鲜', portion: '段', protein: 17, carbs: 0, fat: 8 },
  { id: 'squid', name: '鱿鱼', emoji: '🦑', kcal: 92, grams: 80, group: '海鲜', portion: '掌', protein: 16, carbs: 1, fat: 1.5 },
  { id: 'clam', name: '蛤蜊', emoji: '🦪', kcal: 62, grams: 100, group: '海鲜', portion: '份', protein: 10, carbs: 2, fat: 1 },
  { id: 'scallop', name: '扇贝', emoji: '🐚', kcal: 88, grams: 80, group: '海鲜', portion: '份', protein: 13, carbs: 2, fat: 2 }
]
const 蛋类: BuildItem[] = [
  { id: 'egg', name: '鸡蛋', emoji: '🥚', kcal: 72, grams: 50, group: '蛋类', portion: '个', protein: 6.5, carbs: 1, fat: 5 },
  { id: 'quail-egg', name: '鹌鹑蛋', emoji: '🥚', kcal: 40, grams: 40, group: '蛋类', portion: '份', protein: 3, carbs: 0.5, fat: 3 }
]
const 蔬菜: BuildItem[] = [
  { id: 'spinach', name: '菠菜', emoji: '🥬', kcal: 23, grams: 100, group: '蔬菜', portion: '把', protein: 2.9, carbs: 3.6, fat: 0.4 },
  { id: 'carrot', name: '胡萝卜', emoji: '🥕', kcal: 41, grams: 100, group: '蔬菜', portion: '把', protein: 0.9, carbs: 9.6, fat: 0.2 },
  { id: 'onion', name: '洋葱', emoji: '🧅', kcal: 40, grams: 100, group: '蔬菜', portion: '把', protein: 1.1, carbs: 9.3, fat: 0.1 },
  { id: 'pepper', name: '青椒', emoji: '🫑', kcal: 22, grams: 100, group: '蔬菜', portion: '把', protein: 1, carbs: 5, fat: 0.2 },
  { id: 'cabbage', name: '大白菜', emoji: '🥬', kcal: 20, grams: 100, group: '蔬菜', portion: '把', protein: 1.5, carbs: 3.4, fat: 0.2 },
  { id: 'broccoli', name: '西兰花', emoji: '🥦', kcal: 34, grams: 100, group: '蔬菜', portion: '把', protein: 2.8, carbs: 6.6, fat: 0.4 },
  { id: 'potato', name: '土豆', emoji: '🥔', kcal: 77, grams: 100, group: '蔬菜', portion: '把', protein: 2, carbs: 17.5, fat: 0.1 },
  { id: 'tomato', name: '番茄', emoji: '🍅', kcal: 18, grams: 100, group: '蔬菜', portion: '把', protein: 0.9, carbs: 3.9, fat: 0.2 },
  { id: 'celery', name: '芹菜', emoji: '🥬', kcal: 16, grams: 100, group: '蔬菜', portion: '把', protein: 1.2, carbs: 3, fat: 0.2 },
  { id: 'leek', name: '韭菜', emoji: '🌱', kcal: 25, grams: 100, group: '蔬菜', portion: '把', protein: 2.4, carbs: 4.5, fat: 0.4 },
  { id: 'green-bean', name: '豆角', emoji: '🫛', kcal: 34, grams: 100, group: '蔬菜', portion: '把', protein: 2.5, carbs: 6.7, fat: 0.2 },
  { id: 'eggplant', name: '茄子', emoji: '🍆', kcal: 25, grams: 100, group: '蔬菜', portion: '把', protein: 1, carbs: 5.9, fat: 0.2 },
  { id: 'zucchini', name: '西葫芦', emoji: '🥒', kcal: 17, grams: 100, group: '蔬菜', portion: '把', protein: 1.2, carbs: 3.1, fat: 0.2 },
  { id: 'bitter-melon', name: '苦瓜', emoji: '🥒', kcal: 19, grams: 100, group: '蔬菜', portion: '把', protein: 1, carbs: 4.2, fat: 0.2 },
  { id: 'winter-melon', name: '冬瓜', emoji: '🍈', kcal: 12, grams: 100, group: '蔬菜', portion: '把', protein: 0.4, carbs: 2.6, fat: 0.1 },
  { id: 'pumpkin', name: '南瓜', emoji: '🎃', kcal: 26, grams: 100, group: '蔬菜', portion: '把', protein: 1, carbs: 6.5, fat: 0.1 },
  { id: 'yam', name: '山药', emoji: '🍠', kcal: 57, grams: 100, group: '蔬菜', portion: '把', protein: 1.9, carbs: 12.4, fat: 0.2 },
  { id: 'lotus', name: '莲藕', emoji: '🪷', kcal: 74, grams: 100, group: '蔬菜', portion: '把', protein: 1.9, carbs: 17, fat: 0.1 },
  { id: 'cucumber', name: '黄瓜', emoji: '🥒', kcal: 16, grams: 100, group: '蔬菜', portion: '把', protein: 0.8, carbs: 2.9, fat: 0.2 },
  { id: 'asparagus', name: '芦笋', emoji: '🌿', kcal: 20, grams: 100, group: '蔬菜', portion: '把', protein: 2.2, carbs: 3.9, fat: 0.2 },
  { id: 'corn', name: '玉米粒', emoji: '🌽', kcal: 112, grams: 100, group: '蔬菜', portion: '把', protein: 4, carbs: 22.8, fat: 1.2 }
]
const 菌菇: BuildItem[] = [
  { id: 'mushroom', name: '香菇', emoji: '🍄', kcal: 26, grams: 100, group: '菌菇', portion: '把', protein: 2.2, carbs: 5.2, fat: 0.3 },
  { id: 'enoki', name: '金针菇', emoji: '🍄', kcal: 26, grams: 100, group: '菌菇', portion: '把', protein: 2.2, carbs: 5.2, fat: 0.3 },
  { id: 'king-oyster', name: '杏鲍菇', emoji: '🍄', kcal: 31, grams: 100, group: '菌菇', portion: '把', protein: 3, carbs: 6, fat: 0.4 },
  { id: 'wood-ear', name: '木耳', emoji: '🍄', kcal: 27, grams: 50, group: '菌菇', portion: '把', protein: 1.5, carbs: 6, fat: 0.2 },
  { id: 'kelp', name: '海带', emoji: '🌊', kcal: 13, grams: 50, group: '菌菇', portion: '把', protein: 1.2, carbs: 2.1, fat: 0.1 }
]
const 豆制品: BuildItem[] = [
  { id: 'tofu', name: '豆腐', emoji: '🧈', kcal: 82, grams: 100, group: '豆制品', portion: '块', protein: 8.1, carbs: 2.4, fat: 4.8 },
  { id: 'dried-tofu', name: '豆干', emoji: '🟫', kcal: 140, grams: 50, group: '豆制品', portion: '块', protein: 16, carbs: 2, fat: 8 },
  { id: 'tofu-skin', name: '腐竹', emoji: '🥡', kcal: 90, grams: 40, group: '豆制品', portion: '把', protein: 13, carbs: 2, fat: 4 },
  { id: 'qianzhang', name: '千张', emoji: '🥡', kcal: 130, grams: 50, group: '豆制品', portion: '张', protein: 15, carbs: 2, fat: 7 }
]
const 主食: BuildItem[] = [
  { id: 'rice', name: '米饭', emoji: '🍚', kcal: 174, grams: 150, group: '主食', portion: '碗', protein: 3.9, carbs: 38.9, fat: 0.5 },
  { id: 'noodle', name: '面条', emoji: '🍜', kcal: 137, grams: 100, group: '主食', portion: '碗', protein: 4.5, carbs: 27, fat: 0.6 },
  { id: 'vermicelli', name: '粉丝', emoji: '🍜', kcal: 160, grams: 100, group: '主食', portion: '把', protein: 0.8, carbs: 39, fat: 0.1 },
  { id: 'rice-noodle', name: '米粉', emoji: '🍜', kcal: 150, grams: 100, group: '主食', portion: '碗', protein: 2, carbs: 33, fat: 0.5 },
  { id: 'steamed-bun', name: '馒头', emoji: '🥟', kcal: 223, grams: 100, group: '主食', portion: '个', protein: 7, carbs: 47, fat: 1.1 },
  { id: 'pasta', name: '意大利面', emoji: '🍝', kcal: 157, grams: 100, group: '主食', portion: '份', protein: 5.8, carbs: 30, fat: 0.9 }
]
const 水果: BuildItem[] = [
  { id: 'apple', name: '苹果', emoji: '🍎', kcal: 52, grams: 100, group: '水果', portion: '个', protein: 0.3, carbs: 13.8, fat: 0.2 },
  { id: 'banana', name: '香蕉', emoji: '🍌', kcal: 89, grams: 100, group: '水果', portion: '根', protein: 1.1, carbs: 22.8, fat: 0.3 },
  { id: 'strawberry', name: '草莓', emoji: '🍓', kcal: 32, grams: 100, group: '水果', portion: '份', protein: 0.7, carbs: 7.7, fat: 0.3 },
  { id: 'blueberry', name: '蓝莓', emoji: '🫐', kcal: 57, grams: 100, group: '水果', portion: '份', protein: 0.7, carbs: 14.5, fat: 0.3 },
  { id: 'mango', name: '芒果', emoji: '🥭', kcal: 60, grams: 100, group: '水果', portion: '份', protein: 0.8, carbs: 15, fat: 0.4 },
  { id: 'kiwi', name: '猕猴桃', emoji: '🥝', kcal: 61, grams: 80, group: '水果', portion: '个', protein: 1.1, carbs: 14.7, fat: 0.5 },
  { id: 'orange', name: '橙子', emoji: '🍊', kcal: 47, grams: 100, group: '水果', portion: '个', protein: 0.9, carbs: 11.8, fat: 0.1 },
  { id: 'dragon-fruit', name: '火龙果', emoji: '🐉', kcal: 55, grams: 100, group: '水果', portion: '份', protein: 1.1, carbs: 13, fat: 0.4 },
  { id: 'avocado', name: '牛油果', emoji: '🥑', kcal: 160, grams: 100, group: '水果', portion: '份', protein: 2, carbs: 8.5, fat: 14.7 }
]
const 坚果: BuildItem[] = [
  { id: 'peanut', name: '花生', emoji: '🥜', kcal: 150, grams: 25, group: '坚果', portion: '把', protein: 6, carbs: 5, fat: 12 },
  { id: 'walnut', name: '核桃', emoji: '🌰', kcal: 160, grams: 25, group: '坚果', portion: '把', protein: 3.5, carbs: 3, fat: 15 },
  { id: 'cashew', name: '腰果', emoji: '🌰', kcal: 140, grams: 25, group: '坚果', portion: '把', protein: 4, carbs: 8, fat: 11 },
  { id: 'sesame', name: '芝麻', emoji: '⚫', kcal: 45, grams: 8, group: '坚果', portion: '勺', protein: 1.5, carbs: 1.5, fat: 3.5 }
]

const OIL = [
  { name: '少油（锅底薄薄一层）', kcal: 80 },
  { name: '正常油（锅底一掌大小）', kcal: 160 },
  { name: '多油（油快浸没食材）', kcal: 320 }
]

export const COOKING: Record<'chao' | 'men' | 'tang' | 'xican', CookRecipe> = {
  chao: {
    label: '家常炒菜（选食材）',
    emoji: '🍳',
    flavor: OIL,
    items: [...肉类, ...海鲜, ...蛋类, ...蔬菜, ...菌菇, ...豆制品, ...主食.slice(0, 3)]
  },
  men: {
    label: '家常焖菜（选食材）',
    emoji: '🍲',
    flavor: OIL,
    items: [...肉类.slice(0, 6), ...蛋类.slice(0, 1), ...蔬菜.slice(0, 12), ...菌菇, ...豆制品, ...主食.slice(0, 3)]
  },
  tang: {
    label: '家常烫菜（选食材）',
    emoji: '♨️',
    flavor: [
      { name: '清汤', kcal: 15 },
      { name: '番茄汤', kcal: 30 },
      { name: '麻辣汤', kcal: 80 }
    ],
    items: [...肉类.slice(0, 5), ...海鲜.slice(0, 4), ...蛋类, ...蔬菜.slice(0, 14), ...菌菇, ...豆制品, ...主食.slice(2, 4)]
  },
  xican: {
    label: '简餐西餐（选食材）',
    emoji: '🍽️',
    flavor: [
      { name: '橄榄油', kcal: 45 },
      { name: '黄油', kcal: 90 }
    ],
    items: [...肉类.slice(2, 4), ...海鲜.slice(2, 3), ...蛋类.slice(0, 1), ...蔬菜.filter((x) => ['broccoli', 'tomato', 'corn', 'potato', 'asparagus', 'cucumber'].includes(x.id)), ...主食.filter((x) => ['pasta', 'rice'].includes(x.id)), ...水果, ...坚果]
  }
}