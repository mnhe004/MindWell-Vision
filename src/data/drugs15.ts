import type { CatalogDrug } from './departments'

// 用药库扩容O：肿瘤 + 血液 常用药物（化疗/靶向/免疫/内分泌）
export const extraDrugs: Record<string, CatalogDrug[]> = {
  'lung-cancer': [
    { id: 'gefitinib', generic: '吉非替尼', brand: '易瑞沙', origin: '进口', spec: '0.25g×10片/盒', perDose: '0.25g', times: ['早饭前'] },
    { id: 'osimertinib', generic: '奥希替尼', brand: '泰瑞沙', origin: '进口', spec: '80mg×30片/盒', perDose: '80mg', times: ['早饭后'] },
    { id: 'erlotinib', generic: '厄洛替尼', brand: '特罗凯', origin: '进口', spec: '150mg×7片/盒', perDose: '150mg', times: ['早饭前'] },
    { id: 'pemetrexed', generic: '培美曲塞', brand: '力比泰', origin: '进口', spec: '500mg/支', perDose: '500mg', times: ['早饭后'] },
    { id: 'cisplatin', generic: '顺铂', brand: '国产', origin: '国产', spec: '10mg/支', perDose: '20mg', times: ['早饭后'] },
    { id: 'carboplatin', generic: '卡铂', brand: '国产', origin: '国产', spec: '50mg/支', perDose: '100mg', times: ['早饭后'] }
  ],
  'gastric-cancer': [
    { id: 'oxaliplatin', generic: '奥沙利铂', brand: '乐沙定', origin: '进口', spec: '50mg/支', perDose: '100mg', times: ['早饭后'] },
    { id: 'capecitabine', generic: '卡培他滨', brand: '希罗达', origin: '进口', spec: '0.5g×12片/盒', perDose: '1g', times: ['早饭后', '晚饭后'] },
    { id: 'trastuzumab', generic: '曲妥珠单抗', brand: '赫赛汀', origin: '进口', spec: '440mg/支', perDose: '440mg', times: ['早饭后'] }
  ],
  crc: [
    { id: 'oxaliplatin-crc', generic: '奥沙利铂', brand: '乐沙定', origin: '进口', spec: '50mg/支', perDose: '100mg', times: ['早饭后'] },
    { id: 'capecitabine-crc', generic: '卡培他滨', brand: '希罗达', origin: '进口', spec: '0.5g×12片/盒', perDose: '1g', times: ['早饭后', '晚饭后'] },
    { id: 'bevacizumab', generic: '贝伐珠单抗', brand: '安维汀', origin: '进口', spec: '100mg/支', perDose: '100mg', times: ['早饭后'] }
  ],
  lymphoma: [
    { id: 'cyclophosphamide-ly', generic: '环磷酰胺', brand: '国产', origin: '国产', spec: '50mg×100片/瓶', perDose: '50mg', times: ['早饭后'] },
    { id: 'rituximab', generic: '利妥昔单抗', brand: '美罗华', origin: '进口', spec: '100mg/支', perDose: '100mg', times: ['早饭后'] }
  ],
  leukemia: [
    { id: 'cytarabine', generic: '阿糖胞苷', brand: '国产', origin: '国产', spec: '100mg/支', perDose: '100mg', times: ['早饭后'] },
    { id: 'imatinib', generic: '伊马替尼', brand: '格列卫', origin: '进口', spec: '0.1g×60片/盒', perDose: '0.4g', times: ['早饭后'] }
  ],
  'breast-cancer': [
    { id: 'tamoxifen', generic: '他莫昔芬', brand: '国产', origin: '国产', spec: '10mg×60片/盒', perDose: '20mg', times: ['早饭后'] },
    { id: 'anastrozole', generic: '阿那曲唑', brand: '瑞宁得', origin: '进口', spec: '1mg×14片/盒', perDose: '1mg', times: ['早饭后'] },
    { id: 'letrozole', generic: '来曲唑', brand: '弗隆', origin: '进口', spec: '2.5mg×10片/盒', perDose: '2.5mg', times: ['早饭后'] }
  ],
  'esophageal-cancer': [
    { id: 'cisplatin-ec', generic: '顺铂', brand: '国产', origin: '国产', spec: '10mg/支', perDose: '20mg', times: ['早饭后'] },
    { id: 'paclitaxel', generic: '紫杉醇', brand: '国产', origin: '国产', spec: '30mg/支', perDose: '60mg', times: ['早饭后'] }
  ],
  aa: [
    { id: 'andriol', generic: '十一酸睾酮', brand: '安特尔', origin: '进口', spec: '40mg×16粒/盒', perDose: '80mg', times: ['早饭后'] }
  ],
  itp: [
    { id: 'rh-tpo', generic: '重组人血小板生成素', brand: '特比澳', origin: '国产', spec: '15000U/支', perDose: '15000U', times: ['早饭后'] }
  ]
}