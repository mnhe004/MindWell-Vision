import type { CatalogDrug } from './departments'

// 用药库扩容S：营养 + 眼科 + 耳鼻喉 + 内分泌 + 老年
export const extraDrugs: Record<string, CatalogDrug[]> = {
  'vitamin-a-deficiency': [
    { id: 'vitamin-a', generic: '维生素A软胶囊', brand: '国产', origin: '国产', spec: '5000IU×100粒/瓶', perDose: '5000IU', times: ['早饭后'] },
    { id: 'cod-liver-oil', generic: '鱼肝油', brand: '国产', origin: '国产', spec: '500ml/瓶', perDose: '10ml', times: ['早饭后'] }
  ],
  'vitamin-b12-deficiency-b': [
    { id: 'mecobalamin-b12b', generic: '甲钴胺', brand: '弥可保', origin: '进口', spec: '0.5mg×20片/盒', perDose: '0.5mg', times: ['早饭后', '晚饭后'] },
    { id: 'b12-b', generic: '维生素B12片', brand: '国产', origin: '国产', spec: '25μg×100片/瓶', perDose: '50μg', times: ['早饭后'] }
  ],
  'folate-deficiency': [
    { id: 'folic-fd', generic: '叶酸片', brand: '国产', origin: '国产', spec: '5mg×100片/瓶', perDose: '5mg', times: ['早饭后'] }
  ],
  'zinc-deficiency': [
    { id: 'zinc-gluconate', generic: '葡萄糖酸锌口服液', brand: '国产', origin: '国产', spec: '10ml×10支/盒', perDose: '10ml', times: ['早饭后'] },
    { id: 'zinc-glycyrrhiza', generic: '甘草锌颗粒', brand: '国产', origin: '国产', spec: '5g×15袋/盒', perDose: '5g', times: ['早饭后'] }
  ],
  'iodine-deficiency': [
    { id: 'potassium-iodide', generic: '碘化钾片', brand: '国产', origin: '国产', spec: '200μg×100片/瓶', perDose: '200μg', times: ['早饭后'] }
  ],
  'protein-energy-malnutrition': [
    { id: 'whey-pem', generic: '乳清蛋白粉', brand: '国产', origin: '国产', spec: '400g/罐', perDose: '30g', times: ['早饭后'] },
    { id: 'enteral-pem', generic: '肠内营养粉剂', brand: '安素', origin: '进口', spec: '400g/罐', perDose: '55g冲服', times: ['早饭后', '晚饭后'] }
  ],
  'vitamin-c-deficiency': [
    { id: 'vitamin-c', generic: '维生素C片', brand: '国产', origin: '国产', spec: '0.1g×100片/瓶', perDose: '0.1g', times: ['早饭后'] }
  ],
  emaciation: [
    { id: 'whey-emac', generic: '乳清蛋白粉', brand: '国产', origin: '国产', spec: '400g/罐', perDose: '30g', times: ['早饭后'] }
  ],
  'micronutrient-deficiency': [
    { id: 'multivitamin', generic: '复合维生素片', brand: '善存', origin: '进口', spec: '30片/瓶', perDose: '1片', times: ['早饭后'] }
  ],
  'hyperhomocysteinemia-b': [
    { id: 'folic-hh', generic: '叶酸片', brand: '国产', origin: '国产', spec: '5mg×100片/瓶', perDose: '5mg', times: ['早饭后'] },
    { id: 'b6-hh', generic: '维生素B6片', brand: '国产', origin: '国产', spec: '10mg×100片/瓶', perDose: '10mg', times: ['早饭后'] },
    { id: 'b12-hh', generic: '维生素B12片', brand: '国产', origin: '国产', spec: '25μg×100片/瓶', perDose: '50μg', times: ['早饭后'] }
  ],
  'macular-degeneration': [
    { id: 'ranibizumab', generic: '雷珠单抗', brand: '诺适得', origin: '进口', spec: '10mg/支', perDose: '玻璃体注射', times: ['早饭后'] },
    { id: 'conbercept', generic: '康柏西普', brand: '朗沐', origin: '国产', spec: '10mg/支', perDose: '玻璃体注射', times: ['早饭后'] },
    { id: 'lutein', generic: '叶黄素软胶囊', brand: '国产', origin: '国产', spec: '20mg×60粒/盒', perDose: '20mg', times: ['早饭后'] }
  ],
  myopia: [
    { id: 'atropine-eye', generic: '低浓度阿托品滴眼液', brand: '国产', origin: '国产', spec: '0.01%×5ml/支', perDose: '1滴', times: ['睡前'] }
  ],
  'otitis-media-acute': [
    { id: 'ofloxacin-ear2', generic: '氧氟沙星滴耳液', brand: '国产', origin: '国产', spec: '0.3%×5ml/支', perDose: '数滴', times: ['早饭后', '晚饭后'] },
    { id: 'amoxicillin-oma', generic: '阿莫西林', brand: '国产', origin: '国产', spec: '0.25g×24粒/盒', perDose: '0.5g', times: ['早饭后', '晚饭后'] }
  ],
  'tinnitus-chronic': [
    { id: 'mecobalamin-tc2', generic: '甲钴胺', brand: '弥可保', origin: '进口', spec: '0.5mg×20片/盒', perDose: '0.5mg', times: ['早饭后', '晚饭后'] },
    { id: 'ginkgo-tc2', generic: '银杏叶提取物片', brand: '国产', origin: '国产', spec: '40mg×24片/盒', perDose: '40mg', times: ['早饭后', '晚饭后'] }
  ],
  'sudden-deafness': [
    { id: 'pred-sd2', generic: '泼尼松', brand: '国产', origin: '国产', spec: '5mg×100片/瓶', perDose: '30mg', times: ['早饭后'] },
    { id: 'ginkgo-sd2', generic: '银杏叶提取物片', brand: '国产', origin: '国产', spec: '40mg×24片/盒', perDose: '40mg', times: ['早饭后', '晚饭后'] }
  ],
  sinusitis: [
    { id: 'amoxicillin-clav-sin', generic: '阿莫西林克拉维酸钾', brand: '阿莫仙', origin: '国产', spec: '0.375g×12片/盒', perDose: '0.375g', times: ['早饭后', '晚饭后'] },
    { id: 'budesonide-nasal', generic: '布地奈德鼻喷', brand: '雷诺考特', origin: '进口', spec: '64μg/揿×120揿', perDose: '2揿', times: ['早饭后', '晚饭后'] }
  ],
  'nasal-polyp': [
    { id: 'mometasone-nasal', generic: '糠酸莫米松鼻喷', brand: '内舒拿', origin: '进口', spec: '50μg/揿×140揿', perDose: '2揿', times: ['早饭后', '晚饭后'] }
  ],
  'thyroid-nodule': [
    { id: 'lt4-tn', generic: '左甲状腺素钠', brand: '优甲乐', origin: '进口', spec: '50μg×100片/盒', perDose: '50μg', times: ['醒来'] },
    { id: 'xiakucao-tn', generic: '夏枯草口服液', brand: '国产', origin: '国产', spec: '10ml×12支/盒', perDose: '10ml', times: ['早饭后', '晚饭后'] }
  ],
  hypotension: [
    { id: 'shengmai', generic: '生脉饮口服液', brand: '同仁堂', origin: '国产', spec: '10ml×10支/盒', perDose: '10ml', times: ['早饭后', '晚饭后'] },
    { id: 'buzhong-hypo', generic: '补中益气丸', brand: '仲景', origin: '国产', spec: '200丸/瓶', perDose: '8丸', times: ['早饭后', '晚饭后'] }
  ],
  'geriatric-dehydration': [
    { id: 'ors-gd', generic: '口服补液盐III', brand: '国产', origin: '国产', spec: '5.125g×6袋/盒', perDose: '1袋冲水', times: ['早饭后', '晚饭后'] }
  ]
}