import type { CatalogDrug } from './departments'

// 用药库扩容Q：肿瘤科剩余癌种 + 血液科
export const extraDrugs: Record<string, CatalogDrug[]> = {
  'pancreatic-cancer': [
    { id: 'gemcitabine', generic: '吉西他滨', brand: '健择', origin: '进口', spec: '200mg/支', perDose: '200mg', times: ['早饭后'] },
    { id: 'tegafur', generic: '替吉奥', brand: '维康达', origin: '国产', spec: '20mg×42粒/盒', perDose: '40mg', times: ['早饭后', '晚饭后'] }
  ],
  'gallbladder-cancer': [
    { id: 'gemcitabine-gbc', generic: '吉西他滨', brand: '健择', origin: '进口', spec: '200mg/支', perDose: '200mg', times: ['早饭后'] },
    { id: 'cisplatin-gbc', generic: '顺铂', brand: '国产', origin: '国产', spec: '10mg/支', perDose: '20mg', times: ['早饭后'] }
  ],
  cholangiocarcinoma: [
    { id: 'gemcitabine-cc', generic: '吉西他滨', brand: '健择', origin: '进口', spec: '200mg/支', perDose: '200mg', times: ['早饭后'] }
  ],
  'renal-cancer': [
    { id: 'sunitinib', generic: '舒尼替尼', brand: '索坦', origin: '进口', spec: '12.5mg×28粒/盒', perDose: '50mg', times: ['早饭后'] },
    { id: 'sorafenib', generic: '索拉非尼', brand: '多吉美', origin: '进口', spec: '0.2g×60片/盒', perDose: '0.4g', times: ['早饭后', '晚饭后'] }
  ],
  'bladder-cancer': [
    { id: 'pirarubicin', generic: '吡柔比星', brand: '国产', origin: '国产', spec: '10mg/支', perDose: '10mg', times: ['早饭后'] },
    { id: 'cisplatin-bc', generic: '顺铂', brand: '国产', origin: '国产', spec: '10mg/支', perDose: '20mg', times: ['早饭后'] }
  ],
  'endometrial-cancer': [
    { id: 'megestrol', generic: '醋酸甲地孕酮', brand: '国产', origin: '国产', spec: '160mg×10片/盒', perDose: '160mg', times: ['早饭后'] },
    { id: 'paclitaxel-ec', generic: '紫杉醇', brand: '国产', origin: '国产', spec: '30mg/支', perDose: '60mg', times: ['早饭后'] }
  ],
  'ovarian-cancer': [
    { id: 'carboplatin-oc', generic: '卡铂', brand: '国产', origin: '国产', spec: '50mg/支', perDose: '100mg', times: ['早饭后'] },
    { id: 'paclitaxel-oc', generic: '紫杉醇', brand: '国产', origin: '国产', spec: '30mg/支', perDose: '60mg', times: ['早饭后'] },
    { id: 'olaparib', generic: '奥拉帕利', brand: '利普卓', origin: '进口', spec: '150mg×56片/盒', perDose: '300mg', times: ['早饭后', '晚饭后'] }
  ],
  'aplastic-anemia': [
    { id: 'ciclosporin-apl', generic: '环孢素', brand: '新山地明', origin: '进口', spec: '25mg×50粒/盒', perDose: '50mg', times: ['早饭后', '晚饭后'] },
    { id: 'stanozolol-apl', generic: '司坦唑醇', brand: '国产', origin: '国产', spec: '2mg×100片/瓶', perDose: '2mg', times: ['早饭后'] }
  ],
  thalassemia: [
    { id: 'deferoxamine', generic: '去铁胺', brand: '国产', origin: '国产', spec: '0.5g/支', perDose: '0.5g', times: ['早饭后'] },
    { id: 'deferasirox', generic: '地拉罗司', brand: '国产', origin: '国产', spec: '125mg×28片/盒', perDose: '250mg', times: ['早饭后'] },
    { id: 'folic-thal', generic: '叶酸片', brand: '国产', origin: '国产', spec: '5mg×100片/瓶', perDose: '5mg', times: ['早饭后'] }
  ],
  'hemolytic-anemia': [
    { id: 'pred-ha', generic: '泼尼松', brand: '国产', origin: '国产', spec: '5mg×100片/瓶', perDose: '30mg', times: ['早饭后'] },
    { id: 'folic-ha', generic: '叶酸片', brand: '国产', origin: '国产', spec: '5mg×100片/瓶', perDose: '5mg', times: ['早饭后'] }
  ],
  thrombocytopenia: [
    { id: 'pred-tc', generic: '泼尼松', brand: '国产', origin: '国产', spec: '5mg×100片/瓶', perDose: '30mg', times: ['早饭后'] },
    { id: 'eltrombopag-tc', generic: '艾曲泊帕', brand: '瑞弗兰', origin: '进口', spec: '25mg×28片/盒', perDose: '25mg', times: ['早饭后'] }
  ],
  hemophilia: [
    { id: 'factor8', generic: '人凝血因子VIII', brand: '国产', origin: '国产', spec: '200IU/支', perDose: '200IU', times: ['早饭后'] }
  ],
  mds: [
    { id: 'azacitidine', generic: '阿扎胞苷', brand: '国产', origin: '国产', spec: '100mg/支', perDose: '100mg', times: ['早饭后'] },
    { id: 'lenalidomide', generic: '来那度胺', brand: '瑞复美', origin: '进口', spec: '10mg×21粒/盒', perDose: '10mg', times: ['早饭后'] }
  ],
  'multiple-myeloma': [
    { id: 'bortezomib', generic: '硼替佐米', brand: '万珂', origin: '进口', spec: '3.5mg/支', perDose: '3.5mg', times: ['早饭后'] },
    { id: 'lenalidomide-mm', generic: '来那度胺', brand: '瑞复美', origin: '进口', spec: '25mg×21粒/盒', perDose: '25mg', times: ['早饭后'] }
  ],
  'polycythemia-vera': [
    { id: 'hydroxyurea-pv', generic: '羟基脲', brand: '国产', origin: '国产', spec: '0.5g×100片/瓶', perDose: '0.5g', times: ['早饭后'] },
    { id: 'aspirin-pv', generic: '阿司匹林肠溶片', brand: '拜阿司匹灵', origin: '进口', spec: '100mg×30片/盒', perDose: '100mg', times: ['早饭后'] }
  ]
}