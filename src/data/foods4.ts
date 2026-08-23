// 连锁餐饮/外卖/咖啡/奶茶/甜点店 常见商品（份量按门店常见规格，kcal 为每100g换算）
import type { Food } from './foods'

export const foods4: Food[] = [
  // —— 沙县小吃 ——
  { id: 'sx-steamed-dumpling', name: '沙县蒸饺', category: '主食', emoji: '🥟', store: '沙县小吃', kind: '快餐外卖', spec: '1笼/约200g', kcal: 235, water: 55, carbs: 32, protein: 9, fat: 8, fiber: 1.5, vitamins: [], goodFor: [], caution: [], portion: { label: '1笼', grams: 200, kcal: 470 }},
  { id: 'sx-mixed-noodle', name: '沙县拌面（花生酱）', category: '主食', emoji: '🍜', store: '沙县小吃', kind: '快餐外卖', spec: '1份/约250g', kcal: 190, water: 55, carbs: 32, protein: 7, fat: 5, fiber: 1.5, vitamins: [], goodFor: [], caution: ['花生酱热量高'], portion: { label: '1份', grams: 250, kcal: 475 }},
  { id: 'sx-dun-tang', name: '沙县炖罐（排骨汤）', category: '汤类', emoji: '🍲', store: '沙县小吃', kind: '快餐外卖', spec: '1盅/约250g', kcal: 45, water: 92, carbs: 3, protein: 5, fat: 2, fiber: 0, vitamins: [], goodFor: ['清淡'], caution: ['钠偏高'], portion: { label: '1盅', grams: 250, kcal: 113 }},
  { id: 'sx-wonton', name: '沙县扁肉（馄饨）', category: '主食', emoji: '🥟', store: '沙县小吃', kind: '快餐外卖', spec: '1碗/约250g', kcal: 90, water: 80, carbs: 12, protein: 5, fat: 2, fiber: 0.5, vitamins: [], goodFor: [], caution: [], portion: { label: '1碗', grams: 250, kcal: 225 }},
  // —— 兰州拉面 ——
  { id: 'lz-beef-noodle', name: '兰州牛肉拉面', category: '主食', emoji: '🍜', store: '兰州拉面', kind: '快餐外卖', spec: '1碗/约500g', kcal: 88, water: 78, carbs: 14, protein: 5, fat: 1.5, fiber: 0.5, vitamins: ['B族'], goodFor: [], caution: ['汤底钠高'], portion: { label: '1碗', grams: 500, kcal: 440 }},
  { id: 'lz-stir-noodle', name: '兰州炒面片', category: '主食', emoji: '🍜', store: '兰州拉面', kind: '快餐外卖', spec: '1份/约400g', kcal: 160, water: 60, carbs: 25, protein: 7, fat: 4, fiber: 1.5, vitamins: [], goodFor: [], caution: ['油稍多'], portion: { label: '1份', grams: 400, kcal: 640 }},
  // —— 沙野轻食（外卖） ——
  { id: 'sy-chicken-salad', name: '沙野轻食·鸡胸肉沙拉', category: '轻食沙拉', emoji: '🥗', store: '沙野轻食', kind: '快餐外卖', spec: '1份/约400g', kcal: 85, water: 85, carbs: 6, protein: 10, fat: 2.5, fiber: 2.5, vitamins: ['维生素C', '叶酸'], goodFor: ['减脂'], caution: ['酱汁热量另计'], portion: { label: '1份', grams: 400, kcal: 340 }},
  { id: 'sy-beef-quinoa', name: '沙野轻食·牛肉藜麦碗', category: '轻食沙拉', emoji: '🥙', store: '沙野轻食', kind: '快餐外卖', spec: '1份/约450g', kcal: 120, water: 70, carbs: 14, protein: 11, fat: 3, fiber: 3, vitamins: ['铁', '锌'], goodFor: ['增肌减脂'], caution: [], portion: { label: '1份', grams: 450, kcal: 540 }},
  { id: 'sy-purple-sweet', name: '沙野轻食·紫薯泥', category: '主食', emoji: '🍠', store: '沙野轻食', kind: '快餐外卖', spec: '1份/约120g', kcal: 86, water: 73, carbs: 20, protein: 1.6, fat: 0.1, fiber: 3, vitamins: ['β-胡萝卜素'], goodFor: ['控糖粗粮'], caution: [], portion: { label: '1份', grams: 120, kcal: 103 }},
  // —— 必胜客 ——
  { id: 'pizzahut-pizza', name: '必胜客·超级至尊披萨（1块）', category: '主食', emoji: '🍕', store: '必胜客', kind: '快餐外卖', spec: '1块/约120g', kcal: 230, water: 45, carbs: 27, protein: 11, fat: 9, fiber: 2, vitamins: ['钙'], goodFor: [], caution: ['芝士高脂'], portion: { label: '1块', grams: 120, kcal: 276 }},
  { id: 'pizzahut-spaghetti', name: '必胜客·肉酱意面', category: '主食', emoji: '🍝', store: '必胜客', kind: '快餐外卖', spec: '1份/约350g', kcal: 130, water: 65, carbs: 18, protein: 6, fat: 4, fiber: 1.5, vitamins: [], goodFor: [], caution: [], portion: { label: '1份', grams: 350, kcal: 455 }},
  { id: 'pizzahut-wings', name: '必胜客·新奥尔良烤翅（1对）', category: '小食', emoji: '🍗', store: '必胜客', kind: '快餐外卖', spec: '1对/约100g', kcal: 220, water: 60, carbs: 8, protein: 18, fat: 14, fiber: 0, vitamins: [], goodFor: [], caution: ['盐分偏高'], portion: { label: '1对', grams: 100, kcal: 220 }},
  // —— 麦当劳 ——
  { id: 'mcd-bigmac', name: '麦当劳·巨无霸', category: '汉堡', emoji: '🍔', store: '麦当劳', kind: '快餐外卖', spec: '1个/约215g', kcal: 251, water: 55, carbs: 26, protein: 11, fat: 12, fiber: 1.5, vitamins: ['钙'], goodFor: [], caution: ['热量较高'], portion: { label: '1个', grams: 215, kcal: 540 }},
  { id: 'mcd-spicy-chicken', name: '麦当劳·麦辣鸡腿堡', category: '汉堡', emoji: '🍔', store: '麦当劳', kind: '快餐外卖', spec: '1个/约200g', kcal: 250, water: 50, carbs: 27, protein: 12, fat: 11, fiber: 1.5, vitamins: [], goodFor: [], caution: ['油炸'], portion: { label: '1个', grams: 200, kcal: 500 }},
  { id: 'mcd-fries', name: '麦当劳·薯条（中）', category: '小食', emoji: '🍟', store: '麦当劳', kind: '快餐外卖', spec: '1份/约110g', kcal: 310, water: 40, carbs: 41, protein: 3, fat: 15, fiber: 4, vitamins: [], goodFor: [], caution: ['高油高盐'], portion: { label: '1份', grams: 110, kcal: 341 }},
  { id: 'mcd-cone', name: '麦当劳·新地/圆筒冰淇淋', category: '甜点', emoji: '🍦', store: '麦当劳', kind: '快餐外卖', spec: '1个/约90g', kcal: 180, water: 62, carbs: 25, protein: 3, fat: 8, fiber: 0, vitamins: ['钙'], goodFor: [], caution: ['高糖'], portion: { label: '1个', grams: 90, kcal: 162 }},
  // —— 肯德基 ——
  { id: 'kfc-original', name: '肯德基·原味鸡（1块）', category: '小食', emoji: '🍗', store: '肯德基', kind: '快餐外卖', spec: '1块/约120g', kcal: 250, water: 55, carbs: 10, protein: 18, fat: 16, fiber: 0.5, vitamins: [], goodFor: [], caution: ['油炸高脂'], portion: { label: '1块', grams: 120, kcal: 300 }},
  { id: 'kfc-burger', name: '肯德基·香辣鸡腿堡', category: '汉堡', emoji: '🍔', store: '肯德基', kind: '快餐外卖', spec: '1个/约190g', kcal: 250, water: 52, carbs: 27, protein: 13, fat: 11, fiber: 1.5, vitamins: [], goodFor: [], caution: ['油炸'], portion: { label: '1个', grams: 190, kcal: 475 }},
  { id: 'kfc-eggtart', name: '肯德基·葡式蛋挞', category: '甜点', emoji: '🥧', store: '肯德基', kind: '快餐外卖', spec: '1个/约50g', kcal: 300, water: 40, carbs: 32, protein: 5, fat: 17, fiber: 0.5, vitamins: [], goodFor: [], caution: ['高脂高糖'], portion: { label: '1个', grams: 50, kcal: 150 }},
  // —— 星巴克 ——
  { id: 'sbux-americano', name: '星巴克·美式咖啡（大杯）', category: '咖啡', emoji: '☕', store: '星巴克', kind: '咖啡', spec: '1杯/约480ml', kcal: 2, water: 99, carbs: 0.4, protein: 0.2, fat: 0, fiber: 0, vitamins: [], goodFor: ['低卡'], caution: ['咖啡因'], portion: { label: '1杯', grams: 480, kcal: 10 }},
  { id: 'sbux-latte', name: '星巴克·拿铁（大杯全脂）', category: '咖啡', emoji: '☕', store: '星巴克', kind: '咖啡', spec: '1杯/约480ml', kcal: 38, water: 95, carbs: 3.4, protein: 2, fat: 1.7, fiber: 0, vitamins: ['钙'], goodFor: [], caution: ['含奶'], portion: { label: '1杯', grams: 480, kcal: 182 }},
  { id: 'sbux-mocha', name: '星巴克·摩卡（大杯）', category: '咖啡', emoji: '☕', store: '星巴克', kind: '咖啡', spec: '1杯/约480ml', kcal: 55, water: 92, carbs: 7, protein: 2, fat: 2, fiber: 0.5, vitamins: [], goodFor: [], caution: ['含巧克力高糖'], portion: { label: '1杯', grams: 480, kcal: 264 }},
  { id: 'sbux-fw', name: '星巴克·馥芮白（大杯）', category: '咖啡', emoji: '☕', store: '星巴克', kind: '咖啡', spec: '1杯/约480ml', kcal: 35, water: 95, carbs: 3.2, protein: 2, fat: 1.6, fiber: 0, vitamins: ['钙'], goodFor: [], caution: [], portion: { label: '1杯', grams: 480, kcal: 168 }},
  // —— 瑞幸 ——
  { id: 'luckin-coconut', name: '瑞幸·生椰拿铁（大杯）', category: '咖啡', emoji: '🥥', store: '瑞幸咖啡', kind: '咖啡', spec: '1杯/约480ml', kcal: 55, water: 92, carbs: 6, protein: 1.5, fat: 3, fiber: 0.3, vitamins: [], goodFor: [], caution: ['椰浆含脂'], portion: { label: '1杯', grams: 480, kcal: 264 }},
  { id: 'luckin-americano', name: '瑞幸·冰美式（大杯）', category: '咖啡', emoji: '☕', store: '瑞幸咖啡', kind: '咖啡', spec: '1杯/约480ml', kcal: 2, water: 99, carbs: 0.4, protein: 0.2, fat: 0, fiber: 0, vitamins: [], goodFor: ['低卡'], caution: ['咖啡因'], portion: { label: '1杯', grams: 480, kcal: 10 }},
  { id: 'luckin-thick-latte', name: '瑞幸·厚乳拿铁（大杯）', category: '咖啡', emoji: '☕', store: '瑞幸咖啡', kind: '咖啡', spec: '1杯/约480ml', kcal: 50, water: 93, carbs: 5, protein: 2.2, fat: 2.5, fiber: 0, vitamins: ['钙'], goodFor: [], caution: [], portion: { label: '1杯', grams: 480, kcal: 240 }},
  // —— 喜茶 ——
  { id: 'heyttea-berry', name: '喜茶·芝芝莓莓（大杯）', category: '奶茶果茶', emoji: '🍓', store: '喜茶', kind: '奶茶', spec: '1杯/约500ml', kcal: 45, water: 92, carbs: 8, protein: 0.8, fat: 1.2, fiber: 0.8, vitamins: ['维生素C'], goodFor: [], caution: ['含糖'], portion: { label: '1杯', grams: 500, kcal: 225 }},
  { id: 'heyttea-grape', name: '喜茶·多肉葡萄（大杯）', category: '奶茶果茶', emoji: '🍇', store: '喜茶', kind: '奶茶', spec: '1杯/约500ml', kcal: 48, water: 91, carbs: 9, protein: 0.6, fat: 1, fiber: 0.6, vitamins: ['维生素C'], goodFor: [], caution: ['含糖'], portion: { label: '1杯', grams: 500, kcal: 240 }},
  // —— 蜜雪冰城 ——
  { id: 'mixue-lemon', name: '蜜雪冰城·柠檬水（中杯）', category: '奶茶果茶', emoji: '🍋', store: '蜜雪冰城', kind: '奶茶', spec: '1杯/约500ml', kcal: 35, water: 93, carbs: 8.5, protein: 0, fat: 0, fiber: 0, vitamins: ['维生素C'], goodFor: [], caution: ['高糖'], portion: { label: '1杯', grams: 500, kcal: 175 }},
  { id: 'mixue-shake', name: '蜜雪冰城·摇摇奶昔（草莓）', category: '奶茶果茶', emoji: '🥤', store: '蜜雪冰城', kind: '奶茶', spec: '1杯/约500ml', kcal: 80, water: 85, carbs: 15, protein: 1.5, fat: 2, fiber: 0.5, vitamins: [], goodFor: [], caution: ['高糖'], portion: { label: '1杯', grams: 500, kcal: 400 }},
  // —— 一点点 ——
  { id: 'yidiandian-boba', name: '一点点·波霸奶茶（中杯）', category: '奶茶果茶', emoji: '🧋', store: '一点点', kind: '奶茶', spec: '1杯/约450ml', kcal: 70, water: 88, carbs: 12, protein: 1, fat: 2, fiber: 0.3, vitamins: [], goodFor: [], caution: ['高糖'], portion: { label: '1杯', grams: 450, kcal: 315 }},
  // —— 霸王茶姬 ——
  { id: 'bwj-boya', name: '霸王茶姬·伯牙绝弦（中杯）', category: '奶茶果茶', emoji: '🍵', store: '霸王茶姬', kind: '奶茶', spec: '1杯/约500ml', kcal: 55, water: 90, carbs: 10, protein: 1.5, fat: 1.5, fiber: 0.3, vitamins: [], goodFor: [], caution: ['含糖'], portion: { label: '1杯', grams: 500, kcal: 275 }},
  // —— 罗森（便利店） ——
  { id: 'lawson-ball', name: '罗森·冰皮月亮蛋糕', category: '甜点', emoji: '🍰', store: '罗森', kind: '便利店', spec: '1个/约70g', kcal: 200, water: 45, carbs: 30, protein: 3, fat: 8, fiber: 0.5, vitamins: [], goodFor: [], caution: ['高糖'], portion: { label: '1个', grams: 70, kcal: 140 }},
  { id: 'lawson-riceball', name: '罗森·饭团（照烧鸡肉）', category: '主食', emoji: '🍙', store: '罗森', kind: '便利店', spec: '1个/约110g', kcal: 185, water: 60, carbs: 32, protein: 6, fat: 3.5, fiber: 1, vitamins: [], goodFor: [], caution: [], portion: { label: '1个', grams: 110, kcal: 204 }},
  { id: 'lawson-oden', name: '罗森·关东煮（昆布/豆腐）', category: '熟食', emoji: '🍢', store: '罗森', kind: '便利店', spec: '1串/约50g', kcal: 30, water: 90, carbs: 5, protein: 2, fat: 0.5, fiber: 1, vitamins: [], goodFor: ['低热量'], caution: ['汤底钠高'], portion: { label: '1串', grams: 50, kcal: 15 }},
  { id: 'lawson-sandwich', name: '罗森·三明治（鸡蛋培根）', category: '主食', emoji: '🥪', store: '罗森', kind: '便利店', spec: '1个/约140g', kcal: 280, water: 55, carbs: 28, protein: 11, fat: 13, fiber: 2, vitamins: [], goodFor: [], caution: [], portion: { label: '1个', grams: 140, kcal: 392 }},
  { id: 'lawson-milk', name: '罗森·牛奶（盒装）', category: '乳制品', emoji: '🥛', store: '罗森', kind: '便利店', spec: '1盒/约250ml', kcal: 135, water: 89, carbs: 12, protein: 7.5, fat: 8, fiber: 0, vitamins: ['钙'], goodFor: ['补钙'], caution: [], portion: { label: '1盒', grams: 250, kcal: 338 }},
  // —— 开市客 Costco ——
  { id: 'costco-hotdog', name: '开市客·热狗套餐', category: '主食', emoji: '🌭', store: '开市客', kind: '超市', spec: '1套/约250g', kcal: 300, water: 55, carbs: 35, protein: 12, fat: 13, fiber: 2, vitamins: [], goodFor: [], caution: ['钠高'], portion: { label: '1套', grams: 250, kcal: 750 }},
  { id: 'costco-chicken', name: '开市客·烤鸡（整只）', category: '肉蛋类', emoji: '🍗', store: '开市客', kind: '超市', spec: '1/4只/约250g', kcal: 240, water: 60, carbs: 2, protein: 25, fat: 15, fiber: 0, vitamins: [], goodFor: [], caution: ['盐分偏高'], portion: { label: '1/4只', grams: 250, kcal: 600 }},
  { id: 'costco-roll', name: '开市客·肉桂卷（1个）', category: '甜点', emoji: '🥐', store: '开市客', kind: '超市', spec: '1个/约90g', kcal: 300, water: 35, carbs: 42, protein: 5, fat: 13, fiber: 1.5, vitamins: [], goodFor: [], caution: ['高糖高脂'], portion: { label: '1个', grams: 90, kcal: 270 }},
  { id: 'costco-salmon', name: '开市客·挪威三文鱼', category: '肉蛋类', emoji: '🐟', store: '开市客', kind: '超市', spec: '100g', kcal: 208, water: 68, carbs: 0, protein: 20, fat: 13, fiber: 0, vitamins: ['Omega-3'], goodFor: ['护心'], caution: [], portion: { label: '1份(约100g)', grams: 100, kcal: 208 }},
  { id: 'costco-blueberry', name: '开市客·蓝莓（大盒）', category: '瓜果类', emoji: '🫐', store: '开市客', kind: '超市', spec: '100g', kcal: 57, water: 84, carbs: 14.5, protein: 0.7, fat: 0.3, fiber: 2.4, vitamins: ['花青素'], goodFor: ['护眼'], caution: [], isFruit: true, portion: { label: '1份(约100g)', grams: 100, kcal: 57 }},
  // —— 巴黎贝甜 ——
  { id: 'paris-baguette-cake', name: '巴黎贝甜·奶油蛋糕（1块）', category: '甜点', emoji: '🍰', store: '巴黎贝甜', kind: '甜点', spec: '1块/约100g', kcal: 320, water: 40, carbs: 35, protein: 5, fat: 18, fiber: 0.5, vitamins: [], goodFor: [], caution: ['高糖高脂'], portion: { label: '1块', grams: 100, kcal: 320 }},
  { id: 'paris-baguette-bread', name: '巴黎贝甜·蒜香法棍（1段）', category: '甜点', emoji: '🥖', store: '巴黎贝甜', kind: '甜点', spec: '1段/约80g', kcal: 260, water: 35, carbs: 40, protein: 8, fat: 8, fiber: 2, vitamins: [], goodFor: [], caution: ['黄油较多'], portion: { label: '1段', grams: 80, kcal: 208 }},
  // —— 好利来 ——
  { id: 'holiland-half', name: '好利来·半熟芝士（1枚）', category: '甜点', emoji: '🧀', store: '好利来', kind: '甜点', spec: '1枚/约45g', kcal: 180, water: 40, carbs: 15, protein: 5, fat: 12, fiber: 0, vitamins: ['钙'], goodFor: [], caution: ['高脂'], portion: { label: '1枚', grams: 45, kcal: 81 }},
  { id: 'holiland-eggroll', name: '好利来·蛋挞（1个）', category: '甜点', emoji: '🥧', store: '好利来', kind: '甜点', spec: '1个/约60g', kcal: 250, water: 40, carbs: 25, protein: 5, fat: 14, fiber: 0.5, vitamins: [], goodFor: [], caution: ['高糖高脂'], portion: { label: '1个', grams: 60, kcal: 150 }},
  // —— 85度C ——
  { id: 'c85-bread', name: '85度C·凯撒大帝（1个）', category: '甜点', emoji: '🥐', store: '85度C', kind: '甜点', spec: '1个/约100g', kcal: 300, water: 40, carbs: 38, protein: 8, fat: 13, fiber: 1.5, vitamins: [], goodFor: [], caution: ['高脂'], portion: { label: '1个', grams: 100, kcal: 300 }},
  { id: 'c85-coffee', name: '85度C·美式咖啡（中杯）', category: '咖啡', emoji: '☕', store: '85度C', kind: '咖啡', spec: '1杯/约400ml', kcal: 3, water: 99, carbs: 0.5, protein: 0.2, fat: 0, fiber: 0, vitamins: [], goodFor: ['低卡'], caution: ['咖啡因'], portion: { label: '1杯', grams: 400, kcal: 12 }}
]
