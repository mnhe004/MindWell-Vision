import type { CatalogDrug } from './departments'

// 用药库扩容F：更多中成药 + 常用西药（覆盖主要慢病的第二/第三线选择）
export const extraDrugs: Record<string, CatalogDrug[]> = {
  t2dm: [
    { id: 'jinlida', generic: '津力达颗粒', brand: '以岭', origin: '国产', spec: '9g×15袋/盒', perDose: '9g', times: ['早饭前', '午饭前', '晚饭前'] },
    { id: 'tianmai', generic: '天麦消渴片', brand: '国产', origin: '国产', spec: '0.4g×60片/盒', perDose: '0.8g', times: ['早饭前', '晚饭前'] },
    { id: 'gliclazide', generic: '格列齐特', brand: '达美康', origin: '进口', spec: '60mg×15片/盒', perDose: '60mg', times: ['早饭前'] },
    { id: 'glipizide', generic: '格列吡嗪', brand: '国产', origin: '国产', spec: '5mg×60片/盒', perDose: '5mg', times: ['早饭前'] },
    { id: 'nateglinide', generic: '那格列奈', brand: '唐力', origin: '进口', spec: '120mg×12片/盒', perDose: '120mg', times: ['早饭前', '午饭前', '晚饭前'] }
  ],
  htn: [
    { id: 'candesartan', generic: '坎地沙坦', brand: '维尔亚', origin: '进口', spec: '8mg×7片/盒', perDose: '8mg', times: ['早饭后'] },
    { id: 'levamlodipine', generic: '苯磺酸左氨氯地平', brand: '施慧达', origin: '国产', spec: '2.5mg×14片/盒', perDose: '2.5mg', times: ['早饭后'] },
    { id: 'fufang-lixueping', generic: '复方利血平氨苯蝶啶', brand: '国产', origin: '国产', spec: '复方×20片/盒', perDose: '1片', times: ['早饭前'] },
    { id: 'ebastine-htn', generic: '贝凡洛尔', brand: '国产', origin: '国产', spec: '50mg×14片/盒', perDose: '50mg', times: ['早饭后', '晚饭后'] }
  ],
  chd: [
    { id: 'shexiang-tongxin', generic: '麝香通心滴丸', brand: '国产', origin: '国产', spec: '40mg×180丸/瓶', perDose: '80mg', times: ['早饭后', '晚饭后'] },
    { id: 'xinkeshu', generic: '心可舒片', brand: '国产', origin: '国产', spec: '0.31g×48片/盒', perDose: '1.24g', times: ['早饭后', '晚饭后'] },
    { id: 'xuesaitong', generic: '血塞通软胶囊', brand: '昆药', origin: '国产', spec: '50mg×24粒/盒', perDose: '100mg', times: ['早饭后', '晚饭后'] },
    { id: 'yinxingye-chd', generic: '银杏叶提取物片', brand: '国产', origin: '国产', spec: '40mg×24片/盒', perDose: '40mg', times: ['早饭后', '晚饭后'] }
  ],
  hyperlipid: [
    { id: 'probucol', generic: '普罗布考', brand: '国产', origin: '国产', spec: '250mg×24片/盒', perDose: '500mg', times: ['早饭后', '晚饭后'] },
    { id: 'acipimox', generic: '阿昔莫司', brand: '国产', origin: '国产', spec: '250mg×24粒/盒', perDose: '250mg', times: ['早饭后', '晚饭后'] }
  ],
  gastritis: [
    { id: 'xiangsha-pingwei', generic: '香砂平胃颗粒', brand: '国产', origin: '国产', spec: '10g×10袋/盒', perDose: '10g', times: ['早饭后', '晚饭后'] },
    { id: 'wenweishu', generic: '温胃舒颗粒', brand: '国产', origin: '国产', spec: '10g×10袋/盒', perDose: '10g', times: ['早饭后', '晚饭后'] },
    { id: 'yangweishu', generic: '养胃舒颗粒', brand: '国产', origin: '国产', spec: '10g×10袋/盒', perDose: '10g', times: ['早饭后', '晚饭后'] }
  ],
  dyspepsia: [
    { id: 'zhishi-dao', generic: '枳实导滞丸', brand: '国产', origin: '国产', spec: '6g×10袋/盒', perDose: '6g', times: ['早饭后', '晚饭后'] },
    { id: 'kaiwei-xiaoshi', generic: '开胃健脾丸', brand: '国产', origin: '国产', spec: '9g×10丸/盒', perDose: '9g', times: ['早饭后', '晚饭后'] }
  ],
  insomnia: [
    { id: 'zhusha-anshen', generic: '朱砂安神丸', brand: '同仁堂', origin: '国产', spec: '6g×10丸/盒', perDose: '6g', times: ['睡前'] },
    { id: 'naoxinshu', generic: '脑心舒口服液', brand: '国产', origin: '国产', spec: '10ml×10支/盒', perDose: '10ml', times: ['睡前'] },
    { id: 'anshen-dingzhi', generic: '安神定志丸', brand: '国产', origin: '国产', spec: '9g×10丸/盒', perDose: '9g', times: ['睡前'] }
  ],
  migraine: [
    { id: 'yangxue-qingnao', generic: '养血清脑颗粒', brand: '天士力', origin: '国产', spec: '4g×15袋/盒', perDose: '4g', times: ['早饭后', '晚饭后'] },
    { id: 'dangdian', generic: '都梁滴丸', brand: '国产', origin: '国产', spec: '30mg×30丸/盒', perDose: '120mg', times: ['早饭后', '晚饭后'] }
  ],
  cold: [
    { id: 'ganmaoling', generic: '感冒灵颗粒', brand: '三九', origin: '国产', spec: '10g×9袋/盒', perDose: '10g', times: ['早饭后', '晚饭后'] },
    { id: 'jingfang', generic: '荆防颗粒', brand: '国产', origin: '国产', spec: '15g×10袋/盒', perDose: '15g', times: ['早饭后', '晚饭后'] },
    { id: 'jiuwei-qianghuo', generic: '九味羌活丸', brand: '国产', origin: '国产', spec: '6g×10袋/盒', perDose: '6g', times: ['早饭后', '晚饭后'] },
    { id: 'qingkailing', generic: '清开灵颗粒', brand: '国产', origin: '国产', spec: '3g×12袋/盒', perDose: '3g', times: ['早饭后', '晚饭后'] }
  ],
  pharyngitis: [
    { id: 'banlangen-keli', generic: '板蓝根颗粒', brand: '国产', origin: '国产', spec: '10g×20袋/包', perDose: '10g', times: ['早饭后', '晚饭后'] },
    { id: 'kouchuang', generic: '口炎清颗粒', brand: '国产', origin: '国产', spec: '10g×12袋/盒', perDose: '10g', times: ['早饭后', '晚饭后'] }
  ],
  uti: [
    { id: 'wuling-san', generic: '五淋化石丸', brand: '国产', origin: '国产', spec: '0.25g×60丸/瓶', perDose: '1.25g', times: ['早饭后', '晚饭后'] },
    { id: 'ningmitai', generic: '宁泌泰胶囊', brand: '国产', origin: '国产', spec: '0.38g×36粒/盒', perDose: '1.52g', times: ['早饭后', '晚饭后'] }
  ],
  oa: [
    { id: 'zhuanggu', generic: '壮骨关节丸', brand: '国产', origin: '国产', spec: '6g×10袋/盒', perDose: '6g', times: ['早饭后', '晚饭后'] },
    { id: 'gushang', generic: '骨伤愈合丸', brand: '国产', origin: '国产', spec: '0.5g×60粒/盒', perDose: '1.5g', times: ['早饭后', '晚饭后'] }
  ],
  cervical: [
    { id: 'bizhen', generic: '痹痛宁胶囊', brand: '国产', origin: '国产', spec: '0.25g×36粒/盒', perDose: '0.75g', times: ['早饭后', '晚饭后'] }
  ],
  mci: [
    { id: 'naoxinshu-zhi', generic: '脑心通胶囊', brand: '步长', origin: '国产', spec: '0.4g×36粒/盒', perDose: '1.2g', times: ['早饭后', '晚饭后'] },
    { id: 'shenshu', generic: '健脑补肾丸', brand: '国产', origin: '国产', spec: '6g×10袋/盒', perDose: '6g', times: ['早饭后', '晚饭后'] }
  ],
  bph: [
    { id: 'wulin', generic: '五淋化石丸', brand: '国产', origin: '国产', spec: '0.25g×60丸/瓶', perDose: '1.25g', times: ['早饭后', '晚饭后'] },
    { id: 'longqing', generic: '癃清片', brand: '国产', origin: '国产', spec: '0.6g×48片/盒', perDose: '1.8g', times: ['早饭后', '晚饭后'] }
  ],
  ida: [
    { id: 'shengxuebao', generic: '生血宝合剂', brand: '国产', origin: '国产', spec: '100ml/瓶', perDose: '15ml', times: ['早饭后', '晚饭后'] },
    { id: 'ferrous-succ', generic: '琥珀酸亚铁', brand: '国产', origin: '国产', spec: '0.1g×24片/盒', perDose: '0.2g', times: ['早饭后'] }
  ],
  gerd: [
    { id: 'zhishi-xiaopi', generic: '枳实消痞丸', brand: '国产', origin: '国产', spec: '6g×10袋/盒', perDose: '6g', times: ['早饭后', '晚饭后'] }
  ],
  ra: [
    { id: 'fuzheng', generic: '风湿骨痛胶囊', brand: '国产', origin: '国产', spec: '0.4g×36粒/盒', perDose: '1.2g', times: ['早饭后', '晚饭后'] },
    { id: 'duhuo', generic: '独活寄生丸', brand: '国产', origin: '国产', spec: '9g×10丸/盒', perDose: '9g', times: ['早饭后', '晚饭后'] }
  ],
  copd: [
    { id: 'buchang', generic: '补肺活血胶囊', brand: '国产', origin: '国产', spec: '0.35g×36粒/盒', perDose: '1.4g', times: ['早饭后', '晚饭后'] }
  ],
  anxiety: [
    { id: 'wuling-plus', generic: '舒眠胶囊', brand: '国产', origin: '国产', spec: '0.5g×36粒/盒', perDose: '1.5g', times: ['睡前'] },
    { id: 'suhe', generic: '苏合香丸', brand: '国产', origin: '国产', spec: '3g×6丸/盒', perDose: '3g', times: ['早饭后'] }
  ],
  depression: [
    { id: 'chaihu-longgu', generic: '柴胡加龙骨牡蛎汤颗粒', brand: '国产', origin: '国产', spec: '10g×10袋/盒', perDose: '10g', times: ['早饭后', '晚饭后'] }
  ]
}