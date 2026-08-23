import type { CatalogDrug } from './departments'

// 用药库扩容K：跨科室常用药补充（中成药经典 + 常用西药）
export const extraDrugs: Record<string, CatalogDrug[]> = {
  cold: [
    { id: 'zhongganling', generic: '重感灵片', brand: '国产', origin: '国产', spec: '0.5g×48片/盒', perDose: '1.5g', times: ['早饭后', '晚饭后'] },
    { id: 'ganmao-zhike', generic: '感冒止咳颗粒', brand: '国产', origin: '国产', spec: '10g×10袋/盒', perDose: '10g', times: ['早饭后', '晚饭后'] },
    { id: 'kanggan', generic: '抗感颗粒', brand: '国产', origin: '国产', spec: '10g×10袋/盒', perDose: '10g', times: ['早饭后', '晚饭后'] }
  ],
  pharyngitis: [
    { id: 'houyan', generic: '咽炎片', brand: '国产', origin: '国产', spec: '0.5g×36片/盒', perDose: '1.5g', times: ['早饭后', '晚饭后'] },
    { id: 'jinsang', generic: '金嗓清音丸', brand: '国产', origin: '国产', spec: '6g×10袋/盒', perDose: '6g', times: ['早饭后', '晚饭后'] }
  ],
  cough: [],
  gastritis: [
    { id: 'weitai', generic: '胃泰胶囊', brand: '国产', origin: '国产', spec: '0.5g×36粒/盒', perDose: '1.5g', times: ['早饭后', '晚饭后'] },
    { id: 'henzhong', generic: '胃乐新颗粒', brand: '国产', origin: '国产', spec: '10g×10袋/盒', perDose: '10g', times: ['早饭后', '晚饭后'] }
  ],
  htn: [
    { id: 'benazepril', generic: '贝那普利', brand: '洛汀新', origin: '进口', spec: '10mg×14片/盒', perDose: '10mg', times: ['早饭后'] },
    { id: 'trandolapril', generic: '群多普利', brand: '国产', origin: '国产', spec: '2mg×14片/盒', perDose: '2mg', times: ['早饭后'] }
  ],
  t2dm: [
    { id: 'alogliptin', generic: '阿格列汀', brand: '尼欣那', origin: '进口', spec: '25mg×7片/盒', perDose: '25mg', times: ['早饭前'] },
    { id: 'canagliflozin', generic: '卡格列净', brand: '怡可安', origin: '进口', spec: '100mg×10片/盒', perDose: '100mg', times: ['早饭前'] }
  ],
  hyperlipid: [
    { id: 'omega3', generic: '多烯酸乙酯', brand: '国产', origin: '国产', spec: '0.25g×60粒/盒', perDose: '1g', times: ['早饭后', '晚饭后'] },
    { id: 'nicotinate', generic: '烟酸缓释片', brand: '国产', origin: '国产', spec: '0.5g×30片/盒', perDose: '0.5g', times: ['晚饭后'] }
  ],
  insomnia: [
    { id: 'anshen-jiannao', generic: '安神健脑液', brand: '国产', origin: '国产', spec: '10ml×10支/盒', perDose: '10ml', times: ['睡前'] }
  ],
  anxiety: [
    { id: 'wuling-jiaonang', generic: '舒肝颗粒', brand: '国产', origin: '国产', spec: '3g×10袋/盒', perDose: '3g', times: ['早饭后', '晚饭后'] }
  ],
  depression: [
    { id: 'buxue', generic: '天王补心丹', brand: '同仁堂', origin: '国产', spec: '9g×10丸/盒', perDose: '9g', times: ['睡前'] }
  ],
  migraine: [
    { id: 'baizhi', generic: '白芷丸', brand: '国产', origin: '国产', spec: '6g×10袋/盒', perDose: '6g', times: ['早饭后', '晚饭后'] }
  ],
  oa: [
    { id: 'guchong', generic: '骨痛灵酊', brand: '国产', origin: '国产', spec: '100ml/瓶', perDose: '适量外涂', times: ['早饭后', '晚饭后'] },
    { id: 'shexiang-zhuanggu', generic: '麝香壮骨膏', brand: '国产', origin: '国产', spec: '7cm×10cm×8贴/盒', perDose: '1贴', times: ['早饭后', '晚饭后'] }
  ],
  cervical: [
    { id: 'jingyao', generic: '颈腰康胶囊', brand: '国产', origin: '国产', spec: '0.5g×36粒/盒', perDose: '1.5g', times: ['早饭后', '晚饭后'] }
  ],
  bph: [
    { id: 'qianliexin', generic: '前列欣胶囊', brand: '国产', origin: '国产', spec: '0.4g×48粒/盒', perDose: '1.6g', times: ['早饭后', '晚饭后'] }
  ],
  uti: [
    { id: 'baotaili', generic: '复方石韦片', brand: '国产', origin: '国产', spec: '0.4g×48片/盒', perDose: '2g', times: ['早饭后', '晚饭后'] }
  ],
  menopause: [
    { id: 'nuankun', generic: '坤宁安', brand: '国产', origin: '国产', spec: '0.5g×36粒/盒', perDose: '1g', times: ['早饭后', '晚饭后'] }
  ],
  ida: [
    { id: 'fufang-zaofan', generic: '复方皂矾丸', brand: '国产', origin: '国产', spec: '0.2g×72丸/盒', perDose: '1.2g', times: ['早饭后', '晚饭后'] }
  ],
  ckd: [
    { id: 'shenshuaining', generic: '肾衰宁胶囊', brand: '国产', origin: '国产', spec: '0.35g×36粒/盒', perDose: '1.4g', times: ['早饭后', '晚饭后'] }
  ],
  copd: [
    { id: 'buyi', generic: '补益肺气丸', brand: '国产', origin: '国产', spec: '9g×10丸/盒', perDose: '9g', times: ['早饭后', '晚饭后'] }
  ],
  ar: [
    { id: 'yupingfeng-ar', generic: '玉屏风散', brand: '国产', origin: '国产', spec: '6g×10袋/盒', perDose: '6g', times: ['早饭后', '晚饭后'] }
  ],
  dryeye: [
    { id: 'mingmu', generic: '复明片', brand: '国产', origin: '国产', spec: '0.3g×60片/盒', perDose: '1.2g', times: ['早饭后', '晚饭后'] }
  ],
  eczema: [
    { id: 'kangfu', generic: '皮肤康洗液', brand: '国产', origin: '国产', spec: '120ml/瓶', perDose: '适量外用', times: ['早饭后', '晚饭后'] }
  ],
  ra: [
    { id: 'fengshitong', generic: '风湿痛药酒', brand: '国产', origin: '国产', spec: '250ml/瓶', perDose: '10ml', times: ['早饭后', '晚饭后'] }
  ]
}