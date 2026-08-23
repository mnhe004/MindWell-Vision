import type { CatalogDrug } from './departments'

// 用药库扩容X：开源药物库补充（原研药 + 常见中成药，含真实商品名便于 OCR 识别）
export const extraDrugs: Record<string, CatalogDrug[]> = {
  chd: [
    { id: 'atorva-rosuva', generic: '阿托伐他汀钙片', brand: '立普妥', origin: '进口', spec: '20mg×7片/盒', perDose: '20mg', times: ['睡前'] },
    { id: 'rosuva-cn', generic: '瑞舒伐他汀钙片', brand: '可定', origin: '进口', spec: '10mg×7片/盒', perDose: '10mg', times: ['睡前'] },
    { id: 'bisoprolol-cn', generic: '富马酸比索洛尔', brand: '康忻', origin: '进口', spec: '5mg×10片/盒', perDose: '5mg', times: ['早饭后'] }
  ],
  htn: [
    { id: 'amlodipine-cn', generic: '苯磺酸氨氯地平片', brand: '络活喜', origin: '进口', spec: '5mg×7片/盒', perDose: '5mg', times: ['早饭后'] },
    { id: 'valsartan-cn', generic: '缬沙坦胶囊', brand: '代文', origin: '进口', spec: '80mg×7粒/盒', perDose: '80mg', times: ['早饭后'] },
    { id: 'losartan-cn', generic: '氯沙坦钾片', brand: '科素亚', origin: '进口', spec: '50mg×7片/盒', perDose: '50mg', times: ['早饭后'] },
    { id: 'nifedipine-cn', generic: '硝苯地平控释片', brand: '拜新同', origin: '进口', spec: '30mg×7片/盒', perDose: '30mg', times: ['早饭后'] },
    { id: 'metoprolol-cn', generic: '琥珀酸美托洛尔缓释片', brand: '倍他乐克', origin: '进口', spec: '47.5mg×7片/盒', perDose: '47.5mg', times: ['早饭后'] }
  ],
  t2dm: [
    { id: 'metformin-cn', generic: '盐酸二甲双胍片', brand: '格华止', origin: '进口', spec: '0.5g×20片/盒', perDose: '0.5g', times: ['早饭前', '晚饭前'] },
    { id: 'acarbose-cn', generic: '阿卡波糖片', brand: '拜唐苹', origin: '进口', spec: '50mg×30片/盒', perDose: '50mg', times: ['早饭前', '午饭前', '晚饭前'] },
    { id: 'glimepiride-cn', generic: '格列美脲片', brand: '亚莫利', origin: '进口', spec: '2mg×15片/盒', perDose: '2mg', times: ['早饭前'] },
    { id: 'sitagliptin-cn', generic: '磷酸西格列汀片', brand: '捷诺维', origin: '进口', spec: '100mg×7片/盒', perDose: '100mg', times: ['早饭前'] },
    { id: 'dapagliflozin-cn', generic: '达格列净片', brand: '安达唐', origin: '进口', spec: '10mg×14片/盒', perDose: '10mg', times: ['早饭前'] },
    { id: 'liraglutide-cn', generic: '利拉鲁肽注射液', brand: '诺和力', origin: '进口', spec: '18mg/3ml预充笔', perDose: '0.6mg起', times: ['早饭前'] },
    { id: 'insulin-glargine-cn', generic: '甘精胰岛素注射液', brand: '来得时', origin: '进口', spec: '300IU/3ml预充笔', perDose: '10IU', times: ['睡前'] }
  ],
  hyperlipid: [
    { id: 'ezetimibe-cn', generic: '依折麦布片', brand: '益适纯', origin: '进口', spec: '10mg×10片/盒', perDose: '10mg', times: ['晚饭后'] },
    { id: 'fenofibrate-cn', generic: '非诺贝特胶囊', brand: '力平之', origin: '进口', spec: '200mg×10粒/盒', perDose: '200mg', times: ['晚饭后'] }
  ],
  gerd: [
    { id: 'omeprazole-cn', generic: '奥美拉唑肠溶胶囊', brand: '洛赛克', origin: '进口', spec: '20mg×14粒/盒', perDose: '20mg', times: ['早饭前'] },
    { id: 'rabeprazole-cn', generic: '雷贝拉唑钠肠溶片', brand: '波利特', origin: '进口', spec: '10mg×7片/盒', perDose: '10mg', times: ['早饭前'] },
    { id: 'esomeprazole-cn', generic: '艾司奥美拉唑镁肠溶片', brand: '耐信', origin: '进口', spec: '20mg×7片/盒', perDose: '20mg', times: ['早饭前'] }
  ],
  asthma: [
    { id: 'salmeterol-fluticasone', generic: '沙美特罗替卡松吸入剂', brand: '舒利迭', origin: '进口', spec: '50/250μg×60吸', perDose: '1吸', times: ['早饭后', '晚饭后'] },
    { id: 'budesonide-formoterol', generic: '布地奈德福莫特罗吸入剂', brand: '信必可都保', origin: '进口', spec: '160/4.5μg×60吸', perDose: '1吸', times: ['早饭后', '晚饭后'] }
  ],
  insomnia: [
    { id: 'zopiclone-cn', generic: '佐匹克隆片', brand: '忆梦返', origin: '进口', spec: '7.5mg×7片/盒', perDose: '7.5mg', times: ['睡前'] },
    { id: 'eszopiclone-cn', generic: '右佐匹克隆片', brand: '文飞', origin: '国产', spec: '3mg×7片/盒', perDose: '3mg', times: ['睡前'] },
    { id: 'zolpidem-cn', generic: '酒石酸唑吡坦片', brand: '思诺思', origin: '进口', spec: '10mg×7片/盒', perDose: '10mg', times: ['睡前'] }
  ],
  depression: [
    { id: 'sertraline-cn', generic: '盐酸舍曲林片', brand: '左洛复', origin: '进口', spec: '50mg×14片/盒', perDose: '50mg', times: ['早饭后'] },
    { id: 'fluoxetine-cn', generic: '盐酸氟西汀胶囊', brand: '百优解', origin: '进口', spec: '20mg×28粒/盒', perDose: '20mg', times: ['早饭后'] },
    { id: 'paroxetine-cn', generic: '盐酸帕罗西汀片', brand: '赛乐特', origin: '进口', spec: '20mg×14片/盒', perDose: '20mg', times: ['早饭后'] },
    { id: 'escitalopram-cn', generic: '草酸艾司西酞普兰片', brand: '来士普', origin: '进口', spec: '10mg×7片/盒', perDose: '10mg', times: ['早饭后'] }
  ],
  anxiety: [
    { id: 'alprazolam-cn', generic: '阿普唑仑片', brand: '国产', origin: '国产', spec: '0.4mg×20片/盒', perDose: '0.4mg', times: ['睡前'] },
    { id: 'lorazepam-cn', generic: '劳拉西泮片', brand: '国产', origin: '国产', spec: '0.5mg×20片/盒', perDose: '0.5mg', times: ['睡前'] }
  ],
  gout: [
    { id: 'febuxostat-cn', generic: '非布司他片', brand: '优立通', origin: '国产', spec: '40mg×14片/盒', perDose: '40mg', times: ['早饭后'] },
    { id: 'allopurinol-cn', generic: '别嘌醇片', brand: '国产', origin: '国产', spec: '100mg×100片/盒', perDose: '100mg', times: ['早饭后'] }
  ],
  osteoporosis: [
    { id: 'alendronate-cn', generic: '阿仑膦酸钠片', brand: '福善美', origin: '进口', spec: '70mg×4片/盒', perDose: '70mg', times: ['醒来'] },
    { id: 'caltrate-cn', generic: '碳酸钙D3片', brand: '钙尔奇D', origin: '进口', spec: '600mg×60片/盒', perDose: '600mg', times: ['早饭后'] }
  ],
  bph: [
    { id: 'tamsulosin-cn', generic: '盐酸坦索罗辛缓释胶囊', brand: '哈乐', origin: '进口', spec: '0.2mg×10粒/盒', perDose: '0.2mg', times: ['睡前'] },
    { id: 'finasteride-cn', generic: '非那雄胺片', brand: '保列治', origin: '进口', spec: '5mg×10片/盒', perDose: '5mg', times: ['早饭后'] }
  ],
  hypothy: [
    { id: 'levothyroxine-cn', generic: '左甲状腺素钠片', brand: '优甲乐', origin: '进口', spec: '50μg×100片/盒', perDose: '50μg', times: ['醒来'] }
  ],
  hyperthy: [
    { id: 'methimazole-cn', generic: '甲巯咪唑片', brand: '赛治', origin: '进口', spec: '10mg×50片/盒', perDose: '10mg', times: ['早饭前'] },
    { id: 'propylthiouracil-cn', generic: '丙硫氧嘧啶片', brand: '国产', origin: '国产', spec: '50mg×100片/盒', perDose: '50mg', times: ['早饭前', '午饭前', '晚饭前'] }
  ]
}