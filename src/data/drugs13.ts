import type { CatalogDrug } from './departments'

// 用药库扩容M：肿瘤/营养/康复/血液/内分泌/心血管/呼吸/消化 补充
export const extraDrugs: Record<string, CatalogDrug[]> = {
  obesity: [
    { id: 'orlistat', generic: '奥利司他', brand: '雅塑', origin: '国产', spec: '0.12g×21粒/盒', perDose: '0.12g', times: ['早饭后', '午饭前', '晚饭后'] }
  ],
  malnutrition: [
    { id: 'enteral', generic: '肠内营养粉剂', brand: '安素', origin: '进口', spec: '400g/罐', perDose: '55g冲服', times: ['早饭后', '晚饭后'] },
    { id: 'whey-mal', generic: '乳清蛋白粉', brand: '国产', origin: '国产', spec: '400g/罐', perDose: '30g', times: ['早饭后'] }
  ],
  'met-syndrome': [
    { id: 'metformin-ms', generic: '二甲双胍', brand: '格华止', origin: '进口', spec: '0.5g×20片/盒', perDose: '0.5g', times: ['早饭前', '晚饭前'] },
    { id: 'atorva-ms', generic: '阿托伐他汀', brand: '立普妥', origin: '进口', spec: '20mg×7片/盒', perDose: '20mg', times: ['睡前'] }
  ],
  'vitd-def': [
    { id: 'vd-drop', generic: '维生素D滴剂', brand: '国产', origin: '国产', spec: '400IU×30粒/盒', perDose: '800IU', times: ['早饭后'] },
    { id: 'caltrate-vd', generic: '碳酸钙D3', brand: '钙尔奇D', origin: '进口', spec: '600mg×60片/盒', perDose: '600mg', times: ['早饭后'] }
  ],
  'anemia-nutr': [
    { id: 'folic-acid', generic: '叶酸片', brand: '国产', origin: '国产', spec: '5mg×100片/瓶', perDose: '5mg', times: ['早饭后'] },
    { id: 'b12-tab', generic: '维生素B12片', brand: '国产', origin: '国产', spec: '25μg×100片/瓶', perDose: '50μg', times: ['早饭后'] }
  ],
  'stroke-rehab': [
    { id: 'naoluotong', generic: '脑络通胶囊', brand: '国产', origin: '国产', spec: '0.4g×36粒/盒', perDose: '1.2g', times: ['早饭后', '晚饭后'] }
  ],
  aa: [
    { id: 'ciclosporin-aa', generic: '环孢素', brand: '新山地明', origin: '进口', spec: '25mg×50粒/盒', perDose: '50mg', times: ['早饭后', '晚饭后'] },
    { id: 'stanozolol', generic: '司坦唑醇', brand: '国产', origin: '国产', spec: '2mg×100片/瓶', perDose: '2mg', times: ['早饭后'] }
  ],
  itp: [
    { id: 'pred-itp', generic: '泼尼松', brand: '国产', origin: '国产', spec: '5mg×100片/瓶', perDose: '20mg', times: ['早饭后'] },
    { id: 'eltrombopag', generic: '艾曲泊帕', brand: '瑞弗兰', origin: '进口', spec: '25mg×28片/盒', perDose: '25mg', times: ['早饭后'] }
  ],
  thrombocytosis: [
    { id: 'hydroxyurea', generic: '羟基脲', brand: '国产', origin: '国产', spec: '0.5g×100片/瓶', perDose: '0.5g', times: ['早饭后'] }
  ],
  'subclinical-hypo': [
    { id: 'lt4-sub', generic: '左甲状腺素钠', brand: '优甲乐', origin: '进口', spec: '50μg×100片/盒', perDose: '25μg', times: ['醒来'] }
  ],
  hyperaldosteronism: [
    { id: 'spironolactone-ha', generic: '螺内酯', brand: '安体舒通', origin: '国产', spec: '20mg×100片/盒', perDose: '20mg', times: ['早饭后'] }
  ],
  hyperparathy: [
    { id: 'cinacalcet', generic: '西那卡塞', brand: '国产', origin: '国产', spec: '25mg×10片/盒', perDose: '25mg', times: ['早饭后'] }
  ],
  myocarditis: [
    { id: 'coenzyme-q10', generic: '辅酶Q10', brand: '能气朗', origin: '进口', spec: '10mg×30粒/盒', perDose: '10mg', times: ['早饭后', '晚饭后'] },
    { id: 'trimetazidine-my', generic: '曲美他嗪', brand: '万爽力', origin: '进口', spec: '20mg×30片/盒', perDose: '20mg', times: ['早饭后', '晚饭后'] }
  ],
  pericarditis: [
    { id: 'ibuprofen-pe', generic: '布洛芬', brand: '芬必得', origin: '国产', spec: '0.3g×20粒/盒', perDose: '0.3g', times: ['早饭后'] },
    { id: 'colchicine-pe', generic: '秋水仙碱', brand: '国产', origin: '国产', spec: '0.5mg×20片/盒', perDose: '0.5mg', times: ['早饭后'] }
  ],
  atherosclerosis: [
    { id: 'atorva-athero', generic: '阿托伐他汀', brand: '立普妥', origin: '进口', spec: '20mg×7片/盒', perDose: '20mg', times: ['睡前'] },
    { id: 'aspirin-athero', generic: '阿司匹林肠溶片', brand: '拜阿司匹灵', origin: '进口', spec: '100mg×30片/盒', perDose: '100mg', times: ['早饭后'] }
  ],
  hhd: [
    { id: 'perindopril-hhd', generic: '培哚普利', brand: '雅施达', origin: '进口', spec: '4mg×30片/盒', perDose: '4mg', times: ['早饭后'] }
  ],
  pneumonia: [
    { id: 'ceftriaxone', generic: '头孢曲松', brand: '罗氏芬', origin: '进口', spec: '1g×1支/盒', perDose: '1g', times: ['早饭后'] },
    { id: 'moxifloxacin', generic: '莫西沙星', brand: '拜复乐', origin: '进口', spec: '400mg×3片/盒', perDose: '400mg', times: ['早饭后'] }
  ],
  bronchiectasis: [
    { id: 'acetylcysteine', generic: '乙酰半胱氨酸泡腾片', brand: '国产', origin: '国产', spec: '0.6g×6片/盒', perDose: '0.6g', times: ['早饭后', '晚饭后'] }
  ],
  pleurisy: [
    { id: 'amoxicillin-ple', generic: '阿莫西林', brand: '国产', origin: '国产', spec: '0.25g×24粒/盒', perDose: '0.5g', times: ['早饭后', '晚饭后'] }
  ],
  pud: [
    { id: 'omeprazole-pud', generic: '奥美拉唑', brand: '洛赛克', origin: '进口', spec: '20mg×14片/盒', perDose: '20mg', times: ['早饭前'] },
    { id: 'clarithromycin', generic: '克拉霉素', brand: '克拉仙', origin: '进口', spec: '0.25g×8片/盒', perDose: '0.5g', times: ['早饭后', '晚饭后'] }
  ],
  ibs: [
    { id: 'pinaverium', generic: '匹维溴铵', brand: '得舒特', origin: '进口', spec: '50mg×15片/盒', perDose: '50mg', times: ['早饭后', '晚饭后'] },
    { id: 'bifid-ibs', generic: '双歧杆菌三联活菌', brand: '培菲康', origin: '国产', spec: '0.21g×24粒/盒', perDose: '0.42g', times: ['早饭后', '晚饭后'] }
  ],
  uc: [
    { id: 'mesalazine', generic: '美沙拉嗪', brand: '颇得斯安', origin: '进口', spec: '0.5g×40片/盒', perDose: '1g', times: ['早饭后', '晚饭后'] }
  ],
  crohn: [
    { id: 'sulfasalazine', generic: '柳氮磺吡啶', brand: '国产', origin: '国产', spec: '0.25g×60片/盒', perDose: '1g', times: ['早饭后', '晚饭后'] }
  ],
  'acute-gastroenteritis': [
    { id: 'montmorillonite-ag', generic: '蒙脱石散', brand: '思密达', origin: '进口', spec: '3g×10袋/盒', perDose: '3g', times: ['早饭后', '晚饭后'] },
    { id: 'ors-ag', generic: '口服补液盐III', brand: '国产', origin: '国产', spec: '5.125g×6袋/盒', perDose: '1袋冲水', times: ['早饭后', '晚饭后'] }
  ]
}