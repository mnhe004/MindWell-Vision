export interface Nutrition {
  zh: string
  emoji: string
  kcal: number
  protein: number
  carbs: number
  fat: number
  fiber: number
  A: number
  C: number
  D: number
  E: number
  B1: number
  B2: number
  B6: number
  B12: number
  folate: number
  Ca: number
  Fe: number
  Zn: number
  K: number
}

// Food-101 分类 -> 中文名与每 100g 营养（近似值）
export const FOOD101: Record<string, Nutrition> = {
  'apple_pie': { zh: '苹果派', emoji: '🥧', kcal: 237, protein: 2.4, carbs: 34, fat: 11, fiber: 1.6, A: 20, C: 3, D: 0, E: 0.6, B1: 0.03, B2: 0.02, B6: 0.04, B12: 0.1, folate: 8, Ca: 11, Fe: 0.5, Zn: 0.3, K: 60 },
  'baby_back_ribs': { zh: '烤排骨', emoji: '🍖', kcal: 295, protein: 22, carbs: 5, fat: 21, fiber: 0, A: 12, C: 0, D: 0.5, E: 0.4, B1: 0.3, B2: 0.2, B6: 0.4, B12: 1.6, folate: 5, Ca: 40, Fe: 1.8, Zn: 4.5, K: 300 },
  'baklava': { zh: '果仁蜜饼', emoji: '🍯', kcal: 450, protein: 5, carbs: 42, fat: 29, fiber: 3, A: 0, C: 0, D: 0, E: 5, B1: 0.1, B2: 0.1, B6: 0.1, B12: 0.2, folate: 20, Ca: 30, Fe: 1.2, Zn: 1.5, K: 180 },
  'beef_carpaccio': { zh: '生牛肉片', emoji: '🥩', kcal: 160, protein: 24, carbs: 1, fat: 7, fiber: 0, A: 0, C: 0, D: 0, E: 0.3, B1: 0.05, B2: 0.2, B6: 0.3, B12: 2.5, folate: 8, Ca: 8, Fe: 2.5, Zn: 4, K: 340 },
  'beef_tartare': { zh: '鞑靼牛肉', emoji: '🥩', kcal: 155, protein: 23, carbs: 2, fat: 6, fiber: 0.5, A: 0, C: 2, D: 0, E: 0.4, B1: 0.05, B2: 0.2, B6: 0.3, B12: 2.6, folate: 10, Ca: 10, Fe: 2.6, Zn: 4.2, K: 350 },
  'beet_salad': { zh: '甜菜沙拉', emoji: '🥗', kcal: 80, protein: 2, carbs: 15, fat: 2, fiber: 3, A: 40, C: 6, D: 0, E: 0.2, B1: 0.05, B2: 0.06, B6: 0.1, B12: 0, folate: 90, Ca: 25, Fe: 1, Zn: 0.5, K: 350 },
  'beignets': { zh: '贝涅饼（炸面圈）', emoji: '🍩', kcal: 320, protein: 5, carbs: 45, fat: 14, fiber: 1.5, A: 30, C: 0, D: 0, E: 1, B1: 0.1, B2: 0.1, B6: 0.05, B12: 0.2, folate: 30, Ca: 30, Fe: 1.5, Zn: 0.6, K: 90 },
  'bibimbap': { zh: '石锅拌饭', emoji: '🍚', kcal: 180, protein: 6, carbs: 28, fat: 5, fiber: 2, A: 100, C: 10, D: 0.2, E: 1, B1: 0.1, B2: 0.1, B6: 0.15, B12: 0.3, folate: 40, Ca: 40, Fe: 1.5, Zn: 1.2, K: 250 },
  'bread_pudding': { zh: '面包布丁', emoji: '🍮', kcal: 250, protein: 6, carbs: 32, fat: 11, fiber: 1, A: 80, C: 1, D: 1, E: 0.6, B1: 0.1, B2: 0.2, B6: 0.06, B12: 0.5, folate: 25, Ca: 90, Fe: 1.2, Zn: 0.7, K: 120 },
  'breakfast_burrito': { zh: '早餐卷饼', emoji: '🌯', kcal: 250, protein: 11, carbs: 24, fat: 12, fiber: 3, A: 120, C: 5, D: 0.5, E: 1.2, B1: 0.15, B2: 0.25, B6: 0.15, B12: 0.6, folate: 40, Ca: 120, Fe: 1.8, Zn: 1.5, K: 250 },
  'bruschetta': { zh: '烤面包配番茄', emoji: '🍞', kcal: 140, protein: 4, carbs: 18, fat: 6, fiber: 2, A: 50, C: 10, D: 0, E: 1, B1: 0.1, B2: 0.06, B6: 0.08, B12: 0, folate: 30, Ca: 30, Fe: 1, Zn: 0.6, K: 200 },
  'caesar_salad': { zh: '凯撒沙拉', emoji: '🥗', kcal: 130, protein: 6, carbs: 6, fat: 9, fiber: 2, A: 300, C: 15, D: 0.3, E: 1.5, B1: 0.08, B2: 0.15, B6: 0.1, B12: 0.5, folate: 60, Ca: 100, Fe: 1.2, Zn: 1, K: 300 },
  'cannoli': { zh: '奶油卷（卡诺里）', emoji: '🍰', kcal: 320, protein: 7, carbs: 30, fat: 19, fiber: 1, A: 60, C: 1, D: 0.3, E: 1, B1: 0.05, B2: 0.15, B6: 0.05, B12: 0.4, folate: 15, Ca: 70, Fe: 0.8, Zn: 0.8, K: 100 },
  'caprese_salad': { zh: '番茄马苏里拉沙拉', emoji: '🍅', kcal: 150, protein: 7, carbs: 5, fat: 12, fiber: 1.5, A: 180, C: 15, D: 0.2, E: 1, B1: 0.05, B2: 0.15, B6: 0.08, B12: 0.6, folate: 20, Ca: 250, Fe: 0.5, Zn: 1.5, K: 250 },
  'carrot_cake': { zh: '胡萝卜蛋糕', emoji: '🥕', kcal: 290, protein: 4, carbs: 40, fat: 14, fiber: 2, A: 200, C: 2, D: 0.2, E: 1.5, B1: 0.08, B2: 0.1, B6: 0.1, B12: 0.2, folate: 20, Ca: 60, Fe: 1.2, Zn: 0.6, K: 150 },
  'ceviche': { zh: '酸橘汁腌鱼', emoji: '🐟', kcal: 110, protein: 18, carbs: 5, fat: 2, fiber: 0.5, A: 30, C: 15, D: 5, E: 0.5, B1: 0.05, B2: 0.08, B6: 0.2, B12: 2, folate: 15, Ca: 30, Fe: 0.8, Zn: 0.8, K: 300 },
  'cheesecake': { zh: '芝士蛋糕', emoji: '🍰', kcal: 320, protein: 6, carbs: 30, fat: 20, fiber: 0.5, A: 100, C: 1, D: 0.3, E: 0.8, B1: 0.04, B2: 0.2, B6: 0.05, B12: 0.5, folate: 15, Ca: 90, Fe: 0.7, Zn: 0.9, K: 130 },
  'cheese_plate': { zh: '芝士拼盘', emoji: '🧀', kcal: 350, protein: 22, carbs: 2, fat: 28, fiber: 0, A: 250, C: 0, D: 0.5, E: 0.6, B1: 0.02, B2: 0.3, B6: 0.06, B12: 1.5, folate: 10, Ca: 600, Fe: 0.3, Zn: 3, K: 80 },
  'chicken_curry': { zh: '咖喱鸡', emoji: '🍛', kcal: 180, protein: 18, carbs: 8, fat: 9, fiber: 2, A: 60, C: 3, D: 0.1, E: 0.8, B1: 0.08, B2: 0.15, B6: 0.4, B12: 0.3, folate: 15, Ca: 30, Fe: 1.5, Zn: 1.5, K: 320 },
  'chicken_quesadilla': { zh: '鸡肉墨西哥卷', emoji: '🌮', kcal: 280, protein: 18, carbs: 26, fat: 12, fiber: 2, A: 100, C: 4, D: 0.2, E: 1, B1: 0.1, B2: 0.2, B6: 0.3, B12: 0.4, folate: 30, Ca: 180, Fe: 1.6, Zn: 1.8, K: 250 },
  'chicken_wings': { zh: '炸鸡翅', emoji: '🍗', kcal: 260, protein: 22, carbs: 6, fat: 17, fiber: 0.3, A: 40, C: 0, D: 0.2, E: 0.7, B1: 0.05, B2: 0.15, B6: 0.35, B12: 0.4, folate: 6, Ca: 15, Fe: 1.2, Zn: 2, K: 220 },
  'chocolate_cake': { zh: '巧克力蛋糕', emoji: '🍫', kcal: 360, protein: 5, carbs: 48, fat: 18, fiber: 2, A: 40, C: 0, D: 0.2, E: 1, B1: 0.06, B2: 0.1, B6: 0.05, B12: 0.2, folate: 15, Ca: 60, Fe: 1.5, Zn: 0.8, K: 140 },
  'chocolate_mousse': { zh: '巧克力慕斯', emoji: '🍮', kcal: 280, protein: 5, carbs: 25, fat: 19, fiber: 1.5, A: 50, C: 0, D: 0.3, E: 0.9, B1: 0.03, B2: 0.1, B6: 0.04, B12: 0.3, folate: 10, Ca: 50, Fe: 1.6, Zn: 0.7, K: 150 },
  'churros': { zh: '吉事果（炸油条）', emoji: '🥖', kcal: 310, protein: 5, carbs: 42, fat: 14, fiber: 2, A: 20, C: 0, D: 0, E: 1.2, B1: 0.08, B2: 0.06, B6: 0.05, B12: 0.1, folate: 25, Ca: 25, Fe: 1.3, Zn: 0.6, K: 80 },
  'clam_chowder': { zh: '蛤蜊浓汤', emoji: '🍲', kcal: 120, protein: 7, carbs: 15, fat: 4, fiber: 1, A: 60, C: 5, D: 0.1, E: 0.4, B1: 0.06, B2: 0.1, B6: 0.08, B12: 8, folate: 15, Ca: 60, Fe: 2, Zn: 1, K: 250 },
  'club_sandwich': { zh: '俱乐部三明治', emoji: '🥪', kcal: 250, protein: 14, carbs: 22, fat: 12, fiber: 2, A: 100, C: 5, D: 0.2, E: 1, B1: 0.15, B2: 0.15, B6: 0.15, B12: 0.4, folate: 30, Ca: 80, Fe: 1.8, Zn: 1.5, K: 250 },
  'crab_cakes': { zh: '蟹饼', emoji: '🦀', kcal: 230, protein: 18, carbs: 15, fat: 11, fiber: 0.5, A: 60, C: 2, D: 0.2, E: 1, B1: 0.06, B2: 0.1, B6: 0.15, B12: 3, folate: 25, Ca: 80, Fe: 1.2, Zn: 3, K: 280 },
  'creme_brulee': { zh: '焦糖布丁', emoji: '🍮', kcal: 280, protein: 4, carbs: 28, fat: 17, fiber: 0, A: 90, C: 1, D: 0.4, E: 0.7, B1: 0.04, B2: 0.2, B6: 0.05, B12: 0.6, folate: 15, Ca: 90, Fe: 0.6, Zn: 0.8, K: 130 },
  'croque_madame': { zh: '火腿芝士吐司', emoji: '🥪', kcal: 280, protein: 14, carbs: 24, fat: 15, fiber: 1.5, A: 120, C: 3, D: 0.4, E: 1, B1: 0.15, B2: 0.25, B6: 0.12, B12: 0.8, folate: 25, Ca: 200, Fe: 1.2, Zn: 1.8, K: 200 },
  'cup_cakes': { zh: '纸杯蛋糕', emoji: '🧁', kcal: 320, protein: 4, carbs: 45, fat: 14, fiber: 1, A: 60, C: 0, D: 0.2, E: 1, B1: 0.06, B2: 0.1, B6: 0.04, B12: 0.2, folate: 15, Ca: 50, Fe: 1, Zn: 0.6, K: 90 },
  'deviled_eggs': { zh: '魔鬼蛋', emoji: '🥚', kcal: 180, protein: 10, carbs: 2, fat: 15, fiber: 0, A: 150, C: 0, D: 1, E: 1, B1: 0.04, B2: 0.25, B6: 0.1, B12: 0.8, folate: 30, Ca: 40, Fe: 1, Zn: 1, K: 120 },
  'donuts': { zh: '甜甜圈', emoji: '🍩', kcal: 380, protein: 5, carbs: 48, fat: 20, fiber: 1.5, A: 30, C: 0, D: 0, E: 1.5, B1: 0.1, B2: 0.1, B6: 0.05, B12: 0.2, folate: 25, Ca: 40, Fe: 1.5, Zn: 0.7, K: 90 },
  'dumplings': { zh: '饺子', emoji: '🥟', kcal: 200, protein: 9, carbs: 25, fat: 7, fiber: 1.5, A: 30, C: 3, D: 0.1, E: 0.6, B1: 0.1, B2: 0.1, B6: 0.1, B12: 0.3, folate: 15, Ca: 30, Fe: 1.5, Zn: 1.2, K: 150 },
  'edamame': { zh: '毛豆', emoji: '🫛', kcal: 120, protein: 11, carbs: 9, fat: 5, fiber: 5, A: 30, C: 10, D: 0, E: 0.7, B1: 0.2, B2: 0.15, B6: 0.1, B12: 0, folate: 200, Ca: 60, Fe: 2, Zn: 1.4, K: 480 },
  'eggs_benedict': { zh: '班尼迪克蛋', emoji: '🍳', kcal: 240, protein: 13, carbs: 14, fat: 15, fiber: 1, A: 200, C: 5, D: 1, E: 1.2, B1: 0.15, B2: 0.3, B6: 0.15, B12: 1, folate: 60, Ca: 90, Fe: 1.8, Zn: 1.5, K: 200 },
  'escargots': { zh: '焗蜗牛', emoji: '🐌', kcal: 130, protein: 16, carbs: 2, fat: 6, fiber: 0, A: 30, C: 0, D: 0, E: 0.5, B1: 0.05, B2: 0.1, B6: 0.1, B12: 0.5, folate: 10, Ca: 80, Fe: 3.5, Zn: 1.8, K: 250 },
  'falafel': { zh: '炸鹰嘴豆丸', emoji: '🧆', kcal: 280, protein: 13, carbs: 32, fat: 12, fiber: 6, A: 20, C: 3, D: 0, E: 1, B1: 0.15, B2: 0.1, B6: 0.2, B12: 0, folate: 120, Ca: 50, Fe: 2.5, Zn: 1.4, K: 350 },
  'filet_mignon': { zh: '菲力牛排', emoji: '🥩', kcal: 210, protein: 26, carbs: 0, fat: 11, fiber: 0, A: 0, C: 0, D: 0, E: 0.3, B1: 0.06, B2: 0.2, B6: 0.4, B12: 2.6, folate: 6, Ca: 8, Fe: 2.8, Zn: 5, K: 320 },
  'fish_and_chips': { zh: '炸鱼薯条', emoji: '🍟', kcal: 280, protein: 13, carbs: 30, fat: 13, fiber: 2, A: 20, C: 5, D: 2, E: 1.2, B1: 0.1, B2: 0.1, B6: 0.2, B12: 2, folate: 15, Ca: 30, Fe: 1, Zn: 0.8, K: 350 },
  'foie_gras': { zh: '鹅肝', emoji: '🍽️', kcal: 460, protein: 8, carbs: 2, fat: 46, fiber: 0, A: 900, C: 2, D: 0.5, E: 1.5, B1: 0.05, B2: 0.3, B6: 0.2, B12: 4, folate: 70, Ca: 10, Fe: 5, Zn: 2, K: 100 },
  'french_fries': { zh: '炸薯条', emoji: '🍟', kcal: 310, protein: 3, carbs: 41, fat: 15, fiber: 4, A: 0, C: 10, D: 0, E: 1.5, B1: 0.1, B2: 0.05, B6: 0.2, B12: 0, folate: 25, Ca: 15, Fe: 0.8, Zn: 0.5, K: 450 },
  'french_onion_soup': { zh: '法式洋葱汤', emoji: '🍲', kcal: 60, protein: 4, carbs: 8, fat: 2, fiber: 1, A: 0, C: 5, D: 0.1, E: 0.1, B1: 0.04, B2: 0.05, B6: 0.1, B12: 0.4, folate: 20, Ca: 50, Fe: 0.6, Zn: 0.5, K: 150 },
  'french_toast': { zh: '法式吐司', emoji: '🍞', kcal: 230, protein: 8, carbs: 28, fat: 10, fiber: 1.5, A: 100, C: 1, D: 0.8, E: 0.9, B1: 0.1, B2: 0.2, B6: 0.08, B12: 0.6, folate: 30, Ca: 90, Fe: 1.5, Zn: 1, K: 140 },
  'fried_calamari': { zh: '炸鱿鱼圈', emoji: '🦑', kcal: 220, protein: 15, carbs: 20, fat: 9, fiber: 1, A: 20, C: 3, D: 0.2, E: 1, B1: 0.06, B2: 0.1, B6: 0.1, B12: 1.5, folate: 12, Ca: 40, Fe: 1, Zn: 1.8, K: 250 },
  'fried_rice': { zh: '炒饭', emoji: '🍚', kcal: 170, protein: 5, carbs: 26, fat: 5, fiber: 1, A: 60, C: 4, D: 0.2, E: 1, B1: 0.08, B2: 0.08, B6: 0.1, B12: 0.3, folate: 20, Ca: 30, Fe: 1.2, Zn: 1, K: 150 },
  'frozen_yogurt': { zh: '冻酸奶', emoji: '🍦', kcal: 130, protein: 5, carbs: 24, fat: 2, fiber: 0, A: 20, C: 1, D: 0, E: 0.1, B1: 0.05, B2: 0.15, B6: 0.04, B12: 0.5, folate: 8, Ca: 130, Fe: 0.3, Zn: 0.8, K: 150 },
  'garlic_bread': { zh: '蒜香面包', emoji: '🥖', kcal: 260, protein: 6, carbs: 34, fat: 11, fiber: 2, A: 40, C: 1, D: 0, E: 1.5, B1: 0.1, B2: 0.08, B6: 0.06, B12: 0.1, folate: 40, Ca: 40, Fe: 1.8, Zn: 0.8, K: 120 },
  'gnocchi': { zh: '意式土豆面疙瘩', emoji: '🥔', kcal: 210, protein: 6, carbs: 40, fat: 3, fiber: 3, A: 0, C: 8, D: 0, E: 0.3, B1: 0.15, B2: 0.05, B6: 0.2, B12: 0.1, folate: 20, Ca: 15, Fe: 1, Zn: 0.6, K: 300 },
  'greek_salad': { zh: '希腊沙拉', emoji: '🥗', kcal: 110, protein: 4, carbs: 6, fat: 8, fiber: 2, A: 150, C: 15, D: 0.1, E: 1.5, B1: 0.05, B2: 0.1, B6: 0.1, B12: 0.2, folate: 40, Ca: 100, Fe: 0.8, Zn: 0.7, K: 250 },
  'grilled_cheese_sandwich': { zh: '烤芝士三明治', emoji: '🥪', kcal: 300, protein: 12, carbs: 30, fat: 15, fiber: 2, A: 150, C: 2, D: 0.3, E: 1, B1: 0.15, B2: 0.25, B6: 0.1, B12: 0.8, folate: 30, Ca: 250, Fe: 1.5, Zn: 1.8, K: 150 },
  'grilled_salmon': { zh: '烤三文鱼', emoji: '🐟', kcal: 210, protein: 20, carbs: 0, fat: 13, fiber: 0, A: 40, C: 0, D: 15, E: 1, B1: 0.2, B2: 0.2, B6: 0.6, B12: 3, folate: 20, Ca: 10, Fe: 0.6, Zn: 0.6, K: 350 },
  'guacamole': { zh: '牛油果酱', emoji: '🥑', kcal: 160, protein: 2, carbs: 9, fat: 15, fiber: 7, A: 30, C: 12, D: 0, E: 2, B1: 0.07, B2: 0.1, B6: 0.25, B12: 0, folate: 80, Ca: 12, Fe: 0.6, Zn: 0.6, K: 480 },
  'gyoza': { zh: '日式煎饺', emoji: '🥟', kcal: 210, protein: 9, carbs: 24, fat: 9, fiber: 2, A: 40, C: 5, D: 0.1, E: 1, B1: 0.1, B2: 0.1, B6: 0.12, B12: 0.3, folate: 20, Ca: 30, Fe: 1.5, Zn: 1.2, K: 150 },
  'hamburger': { zh: '汉堡', emoji: '🍔', kcal: 260, protein: 13, carbs: 28, fat: 11, fiber: 2, A: 50, C: 4, D: 0.2, E: 1, B1: 0.15, B2: 0.15, B6: 0.2, B12: 1, folate: 30, Ca: 60, Fe: 2.5, Zn: 3, K: 230 },
  'hot_and_sour_soup': { zh: '酸辣汤', emoji: '🍲', kcal: 60, protein: 4, carbs: 6, fat: 2.5, fiber: 1, A: 60, C: 5, D: 0.2, E: 0.5, B1: 0.05, B2: 0.1, B6: 0.1, B12: 0.4, folate: 15, Ca: 40, Fe: 1.2, Zn: 0.8, K: 200 },
  'hot_dog': { zh: '热狗', emoji: '🌭', kcal: 250, protein: 10, carbs: 22, fat: 14, fiber: 1, A: 30, C: 1, D: 0.2, E: 0.8, B1: 0.15, B2: 0.15, B6: 0.1, B12: 0.8, folate: 20, Ca: 40, Fe: 1.5, Zn: 1.8, K: 150 },
  'huevos_rancheros': { zh: '墨西哥煎蛋', emoji: '🍳', kcal: 180, protein: 10, carbs: 12, fat: 10, fiber: 3, A: 200, C: 10, D: 0.8, E: 1.5, B1: 0.1, B2: 0.25, B6: 0.15, B12: 0.6, folate: 40, Ca: 90, Fe: 1.8, Zn: 1.3, K: 300 },
  'hummus': { zh: '鹰嘴豆泥', emoji: '🥣', kcal: 170, protein: 8, carbs: 14, fat: 10, fiber: 6, A: 10, C: 5, D: 0, E: 1.5, B1: 0.1, B2: 0.08, B6: 0.2, B12: 0, folate: 80, Ca: 40, Fe: 1.5, Zn: 1.2, K: 230 },
  'ice_cream': { zh: '冰淇淋', emoji: '🍦', kcal: 200, protein: 3, carbs: 24, fat: 11, fiber: 0, A: 80, C: 1, D: 0.2, E: 0.4, B1: 0.04, B2: 0.2, B6: 0.05, B12: 0.4, folate: 8, Ca: 130, Fe: 0.1, Zn: 0.6, K: 160 },
  'pad_thai': { zh: '泰式炒河粉', emoji: '🍜', kcal: 220, protein: 10, carbs: 30, fat: 7, fiber: 2, A: 80, C: 6, D: 0.3, E: 1.2, B1: 0.15, B2: 0.15, B6: 0.2, B12: 0.8, folate: 40, Ca: 40, Fe: 1.8, Zn: 1.2, K: 250 },
  'paella': { zh: '西班牙海鲜饭', emoji: '🥘', kcal: 180, protein: 10, carbs: 26, fat: 4, fiber: 1, A: 60, C: 5, D: 0.5, E: 0.8, B1: 0.1, B2: 0.1, B6: 0.15, B12: 1.5, folate: 30, Ca: 40, Fe: 1.5, Zn: 1.5, K: 250 },
  'pancakes': { zh: '松饼', emoji: '🥞', kcal: 230, protein: 6, carbs: 32, fat: 9, fiber: 1.5, A: 70, C: 1, D: 0.5, E: 0.9, B1: 0.15, B2: 0.2, B6: 0.08, B12: 0.4, folate: 35, Ca: 120, Fe: 1.5, Zn: 0.9, K: 120 },
  'panna_cotta': { zh: '意式奶冻', emoji: '🍮', kcal: 250, protein: 5, carbs: 20, fat: 17, fiber: 0, A: 100, C: 1, D: 0.3, E: 0.7, B1: 0.04, B2: 0.2, B6: 0.05, B12: 0.6, folate: 12, Ca: 100, Fe: 0.4, Zn: 0.7, K: 120 },
  'peking_duck': { zh: '北京烤鸭', emoji: '🦆', kcal: 240, protein: 18, carbs: 6, fat: 16, fiber: 0.5, A: 40, C: 2, D: 0.3, E: 0.5, B1: 0.1, B2: 0.2, B6: 0.2, B12: 0.5, folate: 10, Ca: 15, Fe: 2.5, Zn: 2, K: 200 },
  'pho': { zh: '越南河粉', emoji: '🍜', kcal: 120, protein: 8, carbs: 18, fat: 2.5, fiber: 1, A: 30, C: 3, D: 0.1, E: 0.4, B1: 0.1, B2: 0.1, B6: 0.12, B12: 1, folate: 25, Ca: 30, Fe: 1.5, Zn: 1.5, K: 300 },
  'pizza': { zh: '披萨', emoji: '🍕', kcal: 266, protein: 11, carbs: 33, fat: 10, fiber: 2, A: 80, C: 4, D: 0.2, E: 1.2, B1: 0.15, B2: 0.2, B6: 0.1, B12: 0.7, folate: 40, Ca: 150, Fe: 1.8, Zn: 1.5, K: 200 },
  'pork_chop': { zh: '猪排', emoji: '🥩', kcal: 230, protein: 26, carbs: 0, fat: 14, fiber: 0, A: 10, C: 0, D: 0.3, E: 0.4, B1: 0.8, B2: 0.25, B6: 0.4, B12: 1, folate: 5, Ca: 10, Fe: 1.2, Zn: 3, K: 300 },
  'poutine': { zh: '肉汁奶酪薯条', emoji: '🍟', kcal: 300, protein: 8, carbs: 35, fat: 15, fiber: 3, A: 40, C: 10, D: 0.1, E: 1.2, B1: 0.12, B2: 0.12, B6: 0.2, B12: 0.4, folate: 25, Ca: 120, Fe: 1, Zn: 1.2, K: 450 }, 'pulled_pork_sandwich': { zh: '手撕猪肉', emoji: '🍖', kcal: 250, protein: 24, carbs: 4, fat: 15, fiber: 0.5, A: 10, C: 1, D: 0.3, E: 0.5, B1: 0.6, B2: 0.25, B6: 0.4, B12: 1, folate: 5, Ca: 20, Fe: 1.5, Zn: 3.5, K: 350 },
  'ravioli': { zh: '意大利饺子', emoji: '🥟', kcal: 220, protein: 10, carbs: 30, fat: 7, fiber: 2, A: 60, C: 2, D: 0.3, E: 0.8, B1: 0.15, B2: 0.15, B6: 0.1, B12: 0.6, folate: 30, Ca: 60, Fe: 1.5, Zn: 1.5, K: 180 },
  'red_velvet_cake': { zh: '红丝绒蛋糕', emoji: '🍰', kcal: 340, protein: 4, carbs: 45, fat: 16, fiber: 1, A: 60, C: 0, D: 0.3, E: 1, B1: 0.06, B2: 0.1, B6: 0.04, B12: 0.2, folate: 15, Ca: 60, Fe: 1.2, Zn: 0.7, K: 110 },
  'risotto': { zh: '意大利烩饭', emoji: '🍚', kcal: 190, protein: 6, carbs: 32, fat: 5, fiber: 1, A: 50, C: 3, D: 0.2, E: 0.7, B1: 0.1, B2: 0.08, B6: 0.1, B12: 0.3, folate: 20, Ca: 30, Fe: 1, Zn: 1, K: 120 },
  'samosa': { zh: '印度三角饺', emoji: '🥟', kcal: 260, protein: 6, carbs: 30, fat: 13, fiber: 3, A: 20, C: 3, D: 0, E: 1.5, B1: 0.1, B2: 0.08, B6: 0.15, B12: 0.1, folate: 40, Ca: 30, Fe: 1.5, Zn: 0.8, K: 250 },
  'sashimi': { zh: '生鱼片', emoji: '🍣', kcal: 130, protein: 20, carbs: 0, fat: 5, fiber: 0, A: 30, C: 1, D: 10, E: 0.8, B1: 0.05, B2: 0.1, B6: 0.3, B12: 3, folate: 10, Ca: 20, Fe: 0.8, Zn: 0.6, K: 300 },
  'scallops': { zh: '扇贝', emoji: '🦪', kcal: 110, protein: 20, carbs: 4, fat: 1, fiber: 0, A: 30, C: 0, D: 0.2, E: 0.4, B1: 0.04, B2: 0.1, B6: 0.1, B12: 2, folate: 25, Ca: 40, Fe: 0.5, Zn: 2, K: 400 },
  'seaweed_salad': { zh: '海藻沙拉', emoji: '🥗', kcal: 60, protein: 2, carbs: 10, fat: 2, fiber: 3, A: 20, C: 3, D: 0, E: 0.3, B1: 0.02, B2: 0.06, B6: 0.05, B12: 0.3, folate: 20, Ca: 50, Fe: 1, Zn: 0.5, K: 200 },
  'shrimp_and_grits': { zh: '虾仁玉米粥', emoji: '🍤', kcal: 160, protein: 15, carbs: 18, fat: 4, fiber: 1, A: 100, C: 3, D: 0.3, E: 0.8, B1: 0.1, B2: 0.1, B6: 0.15, B12: 1.2, folate: 20, Ca: 60, Fe: 1.2, Zn: 1.5, K: 250 },
  'spaghetti_bolognese': { zh: '肉酱意面', emoji: '🍝', kcal: 180, protein: 10, carbs: 25, fat: 5, fiber: 2, A: 50, C: 5, D: 0.1, E: 1, B1: 0.12, B2: 0.12, B6: 0.15, B12: 0.8, folate: 25, Ca: 30, Fe: 1.8, Zn: 1.8, K: 250 },
  'spaghetti_carbonara': { zh: '培根蛋酱意面', emoji: '🍝', kcal: 250, protein: 12, carbs: 28, fat: 10, fiber: 1.5, A: 80, C: 2, D: 0.6, E: 0.9, B1: 0.15, B2: 0.2, B6: 0.1, B12: 0.7, folate: 25, Ca: 50, Fe: 1.5, Zn: 1.6, K: 150 },
  'spring_rolls': { zh: '春卷', emoji: '🌯', kcal: 180, protein: 4, carbs: 25, fat: 8, fiber: 2, A: 60, C: 6, D: 0, E: 1.2, B1: 0.08, B2: 0.08, B6: 0.1, B12: 0.1, folate: 30, Ca: 30, Fe: 1.2, Zn: 0.6, K: 200 },
  'steak': { zh: '牛排', emoji: '🥩', kcal: 250, protein: 25, carbs: 0, fat: 16, fiber: 0, A: 0, C: 0, D: 0, E: 0.3, B1: 0.06, B2: 0.2, B6: 0.4, B12: 2.5, folate: 6, Ca: 10, Fe: 2.6, Zn: 5, K: 320 },
  'strawberry_shortcake': { zh: '草莓奶油蛋糕', emoji: '🍰', kcal: 280, protein: 4, carbs: 38, fat: 13, fiber: 1.5, A: 60, C: 25, D: 0.2, E: 1, B1: 0.05, B2: 0.12, B6: 0.05, B12: 0.2, folate: 20, Ca: 60, Fe: 0.8, Zn: 0.5, K: 120 },
  'sushi': { zh: '寿司', emoji: '🍣', kcal: 140, protein: 7, carbs: 24, fat: 2, fiber: 0.5, A: 30, C: 1, D: 3, E: 0.8, B1: 0.05, B2: 0.08, B6: 0.15, B12: 1.5, folate: 15, Ca: 20, Fe: 0.8, Zn: 0.8, K: 150 },
  'tacos': { zh: '墨西哥塔可', emoji: '🌮', kcal: 220, protein: 12, carbs: 22, fat: 10, fiber: 3, A: 80, C: 8, D: 0.1, E: 1, B1: 0.1, B2: 0.12, B6: 0.15, B12: 0.8, folate: 30, Ca: 80, Fe: 1.8, Zn: 1.8, K: 250 },
  'takoyaki': { zh: '章鱼小丸子', emoji: '🐙', kcal: 190, protein: 7, carbs: 26, fat: 7, fiber: 1, A: 30, C: 3, D: 0.1, E: 1, B1: 0.06, B2: 0.08, B6: 0.1, B12: 0.8, folate: 15, Ca: 40, Fe: 1, Zn: 1, K: 150 },
  'tiramisu': { zh: '提拉米苏', emoji: '🍰', kcal: 320, protein: 5, carbs: 32, fat: 19, fiber: 1, A: 90, C: 1, D: 0.3, E: 1, B1: 0.05, B2: 0.2, B6: 0.05, B12: 0.5, folate: 15, Ca: 80, Fe: 0.8, Zn: 0.8, K: 130 },
  'tuna_tartare': { zh: '金枪鱼塔塔', emoji: '🐟', kcal: 150, protein: 24, carbs: 3, fat: 4, fiber: 0.5, A: 20, C: 4, D: 8, E: 0.6, B1: 0.06, B2: 0.1, B6: 0.4, B12: 3, folate: 10, Ca: 20, Fe: 1, Zn: 0.7, K: 350 },
  'waffles': { zh: '华夫饼', emoji: '🧇', kcal: 290, protein: 7, carbs: 38, fat: 12, fiber: 1.5, A: 80, C: 1, D: 0.5, E: 1, B1: 0.15, B2: 0.2, B6: 0.08, B12: 0.4, folate: 30, Ca: 140, Fe: 1.8, Zn: 0.9, K: 130 },
  'lasagna': { zh: '千层面', emoji: '🍝', kcal: 160, protein: 11, carbs: 16, fat: 6, fiber: 2, A: 100, C: 4, D: 0.2, E: 0.6, B1: 0.1, B2: 0.15, B6: 0.15, B12: 0.5, folate: 25, Ca: 120, Fe: 1.2, Zn: 1.5, K: 250 },
  'lobster_bisque': { zh: '龙虾浓汤', emoji: '🦞', kcal: 120, protein: 8, carbs: 10, fat: 6, fiber: 0.5, A: 80, C: 3, D: 0.2, E: 0.6, B1: 0.05, B2: 0.1, B6: 0.1, B12: 3, folate: 10, Ca: 60, Fe: 0.8, Zn: 1.5, K: 250 },
  'lobster_roll_sandwich': { zh: '龙虾卷', emoji: '🥪', kcal: 250, protein: 14, carbs: 24, fat: 11, fiber: 1, A: 60, C: 2, D: 0.2, E: 0.8, B1: 0.1, B2: 0.1, B6: 0.15, B12: 1.5, folate: 20, Ca: 60, Fe: 1, Zn: 1.5, K: 200 },
  'macaroni_and_cheese': { zh: '芝士通心粉', emoji: '🧀', kcal: 200, protein: 8, carbs: 24, fat: 8, fiber: 1.5, A: 100, C: 0, D: 0.3, E: 0.6, B1: 0.1, B2: 0.15, B6: 0.08, B12: 0.4, folate: 20, Ca: 150, Fe: 1, Zn: 1.5, K: 120 },
  'macarons': { zh: '马卡龙', emoji: '🍬', kcal: 330, protein: 5, carbs: 42, fat: 16, fiber: 1.5, A: 40, C: 0, D: 0.2, E: 0.8, B1: 0.03, B2: 0.08, B6: 0.03, B12: 0.2, folate: 8, Ca: 40, Fe: 0.9, Zn: 0.5, K: 80 },
  'miso_soup': { zh: '味噌汤', emoji: '🍜', kcal: 35, protein: 2.5, carbs: 4, fat: 1, fiber: 0.8, A: 10, C: 1, D: 0, E: 0.2, B1: 0.03, B2: 0.05, B6: 0.05, B12: 0.2, folate: 20, Ca: 20, Fe: 0.6, Zn: 0.5, K: 100 },
  'mussels': { zh: '贻贝', emoji: '🦪', kcal: 90, protein: 12, carbs: 4, fat: 2.5, fiber: 0, A: 30, C: 8, D: 0, E: 0.6, B1: 0.15, B2: 0.2, B6: 0.1, B12: 8, folate: 30, Ca: 30, Fe: 3, Zn: 2, K: 250 },
  'nachos': { zh: '玉米片', emoji: '🌮', kcal: 300, protein: 6, carbs: 35, fat: 15, fiber: 4, A: 50, C: 4, D: 0, E: 1, B1: 0.1, B2: 0.1, B6: 0.1, B12: 0.2, folate: 15, Ca: 100, Fe: 1.5, Zn: 1.5, K: 200 },
  'omelette': { zh: '煎蛋卷', emoji: '🍳', kcal: 150, protein: 10, carbs: 2, fat: 11, fiber: 0, A: 200, C: 0, D: 1, E: 1, B1: 0.05, B2: 0.3, B6: 0.1, B12: 1, folate: 30, Ca: 50, Fe: 1.5, Zn: 1.2, K: 130 },
  'onion_rings': { zh: '洋葱圈', emoji: '🧅', kcal: 280, protein: 3, carbs: 34, fat: 15, fiber: 2, A: 0, C: 4, D: 0, E: 1.5, B1: 0.1, B2: 0.05, B6: 0.1, B12: 0, folate: 20, Ca: 20, Fe: 0.8, Zn: 0.6, K: 150 },
  'oysters': { zh: '生蚝', emoji: '🦪', kcal: 70, protein: 7, carbs: 4, fat: 2.5, fiber: 0, A: 30, C: 0, D: 0, E: 0.5, B1: 0.05, B2: 0.1, B6: 0.05, B12: 10, folate: 10, Ca: 40, Fe: 5, Zn: 30, K: 150 },
  'prime_rib': { zh: '烤肋排牛排', emoji: '🥩', kcal: 280, protein: 25, carbs: 0, fat: 20, fiber: 0, A: 0, C: 0, D: 0, E: 0.3, B1: 0.06, B2: 0.2, B6: 0.4, B12: 2.5, folate: 6, Ca: 10, Fe: 2.6, Zn: 5, K: 320 },
  'ramen': { zh: '拉面', emoji: '🍜', kcal: 140, protein: 6, carbs: 20, fat: 4, fiber: 1, A: 30, C: 2, D: 0.1, E: 0.5, B1: 0.15, B2: 0.1, B6: 0.1, B12: 0.5, folate: 15, Ca: 20, Fe: 1.2, Zn: 1, K: 150 }
}