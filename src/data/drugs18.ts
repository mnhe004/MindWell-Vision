import type { CatalogDrug } from './departments'

// 用药库扩容R：风湿免疫 + 皮肤 + 感染科
export const extraDrugs: Record<string, CatalogDrug[]> = {
  'sjogren-syndrome': [
    { id: 'hcq-sjogren2', generic: '羟氯喹', brand: '赛能', origin: '进口', spec: '200mg×10片/盒', perDose: '200mg', times: ['早饭后'] },
    { id: 'pilocarpine', generic: '毛果芸香碱', brand: '国产', origin: '国产', spec: '5mg×30片/盒', perDose: '5mg', times: ['早饭后', '晚饭后'] }
  ],
  scleroderma: [
    { id: 'pred-scle', generic: '泼尼松', brand: '国产', origin: '国产', spec: '5mg×100片/瓶', perDose: '15mg', times: ['早饭后'] },
    { id: 'bosentan', generic: '波生坦', brand: '全可利', origin: '进口', spec: '125mg×56片/盒', perDose: '125mg', times: ['早饭后', '晚饭后'] }
  ],
  dermatomyositis: [
    { id: 'pred-dm', generic: '泼尼松', brand: '国产', origin: '国产', spec: '5mg×100片/瓶', perDose: '40mg', times: ['早饭后'] },
    { id: 'mtx-dm', generic: '甲氨蝶呤', brand: '国产', origin: '国产', spec: '2.5mg×100片/盒', perDose: '10mg', times: ['早饭后'] }
  ],
  polymyositis: [
    { id: 'pred-pm', generic: '泼尼松', brand: '国产', origin: '国产', spec: '5mg×100片/瓶', perDose: '40mg', times: ['早饭后'] }
  ],
  'behcet-disease': [
    { id: 'colchicine-behcet', generic: '秋水仙碱', brand: '国产', origin: '国产', spec: '0.5mg×20片/盒', perDose: '0.5mg', times: ['早饭后'] },
    { id: 'pred-behcet', generic: '泼尼松', brand: '国产', origin: '国产', spec: '5mg×100片/瓶', perDose: '20mg', times: ['早饭后'] }
  ],
  'systemic-vasculitis': [
    { id: 'pred-sv', generic: '泼尼松', brand: '国产', origin: '国产', spec: '5mg×100片/瓶', perDose: '30mg', times: ['早饭后'] },
    { id: 'cyclophosphamide-sv', generic: '环磷酰胺', brand: '国产', origin: '国产', spec: '50mg×100片/瓶', perDose: '50mg', times: ['早饭后'] }
  ],
  'antiphospholipid-syndrome': [
    { id: 'warfarin-aps', generic: '华法林钠', brand: '国产', origin: '国产', spec: '2.5mg×60片/瓶', perDose: '2.5mg', times: ['晚饭后'] },
    { id: 'aspirin-aps', generic: '阿司匹林肠溶片', brand: '拜阿司匹灵', origin: '进口', spec: '100mg×30片/盒', perDose: '100mg', times: ['早饭后'] }
  ],
  'adult-onset-still-disease': [
    { id: 'pred-aosd', generic: '泼尼松', brand: '国产', origin: '国产', spec: '5mg×100片/瓶', perDose: '30mg', times: ['早饭后'] },
    { id: 'mtx-aosd', generic: '甲氨蝶呤', brand: '国产', origin: '国产', spec: '2.5mg×100片/盒', perDose: '10mg', times: ['早饭后'] }
  ],
  'herpes-zoster': [
    { id: 'acyclovir-hz', generic: '阿昔洛韦', brand: '国产', origin: '国产', spec: '0.2g×24片/盒', perDose: '0.4g', times: ['早饭后', '晚饭后'] },
    { id: 'valacyclovir', generic: '伐昔洛韦', brand: '国产', origin: '国产', spec: '0.3g×6片/盒', perDose: '0.3g', times: ['早饭后', '晚饭后'] },
    { id: 'gabapentin-hz', generic: '加巴喷丁', brand: '国产', origin: '国产', spec: '0.3g×24粒/盒', perDose: '0.3g', times: ['早饭后', '晚饭后'] }
  ],
  'herpes-simplex': [
    { id: 'acyclovir-hs2', generic: '阿昔洛韦', brand: '国产', origin: '国产', spec: '0.2g×24片/盒', perDose: '0.4g', times: ['早饭后', '晚饭后'] }
  ],
  'tinea-pedis': [
    { id: 'terbinafine-tp', generic: '盐酸特比萘芬', brand: '兰美抒', origin: '进口', spec: '0.25g×14片/盒', perDose: '0.25g', times: ['早饭后'] },
    { id: 'ketoconazole-tp', generic: '酮康唑乳膏', brand: '国产', origin: '国产', spec: '2%×15g/支', perDose: '适量外用', times: ['早饭后', '晚饭后'] }
  ],
  'seborrheic-dermatitis': [
    { id: 'ketoconazole-sd', generic: '酮康唑洗剂', brand: '采乐', origin: '国产', spec: '2%×50ml/瓶', perDose: '适量外洗', times: ['早饭后', '晚饭后'] }
  ],
  'hair-loss': [
    { id: 'minoxidil-hl', generic: '米诺地尔搽剂', brand: '蔓迪', origin: '国产', spec: '5%×60ml/瓶', perDose: '适量外涂', times: ['早饭后', '晚饭后'] },
    { id: 'finasteride-hl', generic: '非那雄胺', brand: '保法止', origin: '进口', spec: '1mg×28片/盒', perDose: '1mg', times: ['早饭后'] }
  ],
  melasma: [
    { id: 'tranexamic-mel', generic: '氨甲环酸片', brand: '国产', origin: '国产', spec: '0.25g×30片/盒', perDose: '0.25g', times: ['早饭后', '晚饭后'] }
  ],
  pruritus: [
    { id: 'loratadine-pr', generic: '氯雷他定', brand: '开瑞坦', origin: '进口', spec: '10mg×6片/盒', perDose: '10mg', times: ['睡前'] },
    { id: 'cetirizine-pr', generic: '西替利嗪', brand: '仙特明', origin: '进口', spec: '10mg×5片/盒', perDose: '10mg', times: ['睡前'] }
  ],
  'hiv-aids': [
    { id: 'dolutegravir', generic: '多替拉韦', brand: '国产', origin: '国产', spec: '50mg×30片/盒', perDose: '50mg', times: ['早饭后'] },
    { id: 'lamivudine', generic: '拉米夫定', brand: '国产', origin: '国产', spec: '0.1g×30片/盒', perDose: '0.3g', times: ['早饭后'] },
    { id: 'tenofovir-hiv', generic: '富马酸替诺福韦', brand: '韦瑞德', origin: '进口', spec: '300mg×30片/盒', perDose: '300mg', times: ['早饭后'] }
  ],
  malaria: [
    { id: 'artemisinin', generic: '青蒿素', brand: '国产', origin: '国产', spec: '100mg×30片/盒', perDose: '100mg', times: ['早饭后'] },
    { id: 'artemether', generic: '蒿甲醚', brand: '国产', origin: '国产', spec: '40mg×12粒/盒', perDose: '40mg', times: ['早饭后'] }
  ],
  typhoid: [
    { id: 'ciprofloxacin-ty', generic: '环丙沙星', brand: '国产', origin: '国产', spec: '0.25g×12片/盒', perDose: '0.5g', times: ['早饭后', '晚饭后'] },
    { id: 'ceftriaxone-ty', generic: '头孢曲松', brand: '罗氏芬', origin: '进口', spec: '1g×1支/盒', perDose: '1g', times: ['早饭后'] }
  ],
  'bacillary-dysentery': [
    { id: 'levofloxacin-bd2', generic: '左氧氟沙星', brand: '可乐必妥', origin: '进口', spec: '0.5g×4片/盒', perDose: '0.5g', times: ['早饭后'] }
  ],
  'meningococcal-meningitis': [
    { id: 'ceftriaxone-mm', generic: '头孢曲松', brand: '罗氏芬', origin: '进口', spec: '1g×1支/盒', perDose: '1g', times: ['早饭后'] },
    { id: 'penicillin', generic: '青霉素', brand: '国产', origin: '国产', spec: '80万U/支', perDose: '80万U', times: ['早饭后'] }
  ],
  'scarlet-fever': [
    { id: 'amoxicillin-sf', generic: '阿莫西林', brand: '国产', origin: '国产', spec: '0.25g×24粒/盒', perDose: '0.5g', times: ['早饭后', '晚饭后'] }
  ],
  'tuberculous-meningitis': [
    { id: 'isoniazid-tbm', generic: '异烟肼', brand: '国产', origin: '国产', spec: '0.1g×100片/瓶', perDose: '0.3g', times: ['早饭前'] },
    { id: 'rifampicin-tbm', generic: '利福平', brand: '国产', origin: '国产', spec: '0.15g×100粒/瓶', perDose: '0.45g', times: ['早饭前'] },
    { id: 'pyrazinamide-tbm', generic: '吡嗪酰胺', brand: '国产', origin: '国产', spec: '0.25g×100片/瓶', perDose: '0.5g', times: ['早饭后'] }
  ],
  'cryptococcal-meningitis': [
    { id: 'amphotericin-b', generic: '两性霉素B', brand: '国产', origin: '国产', spec: '25mg/支', perDose: '25mg', times: ['早饭后'] },
    { id: 'flucytosine', generic: '氟胞嘧啶', brand: '国产', origin: '国产', spec: '0.25g×100片/瓶', perDose: '0.5g', times: ['早饭后', '晚饭后'] }
  ],
  septicemia: [
    { id: 'imipenem', generic: '亚胺培南西司他丁', brand: '泰能', origin: '进口', spec: '0.5g/支', perDose: '0.5g', times: ['早饭后'] },
    { id: 'vancomycin', generic: '万古霉素', brand: '国产', origin: '国产', spec: '0.5g/支', perDose: '0.5g', times: ['早饭后'] }
  ]
}