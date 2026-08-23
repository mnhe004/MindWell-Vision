import type { CatalogDrug } from './departments'

// 用药库扩容AC：消化/呼吸/解痉/泻药/益生菌 等补充
export const extraDrugs: Record<string, CatalogDrug[]> = {
  dyspepsia: [
    { id: 'macrogol', generic: '聚乙二醇4000散', brand: '福松', origin: '进口', spec: '10g×10袋/盒', perDose: '10g', times: ['早饭前'] },
    { id: 'kaisailu', generic: '开塞露', brand: '国产', origin: '国产', spec: '20ml×6支/盒', perDose: '20ml', times: ['睡前'] },
    { id: 'bisacodyl', generic: '比沙可啶肠溶片', brand: '国产', origin: '国产', spec: '5mg×20片/盒', perDose: '5mg', times: ['睡前'] },
    { id: 'dashanzha', generic: '大山楂丸', brand: '国产', origin: '国产', spec: '9g×10丸/盒', perDose: '9g', times: ['早饭后', '晚饭后'] }
  ],
  'bact-diarrhea': [
    { id: 'loperamide', generic: '洛哌丁胺胶囊', brand: '易蒙停', origin: '进口', spec: '2mg×6粒/盒', perDose: '2mg', times: ['早饭后'] },
    { id: 'bacillus-subtilis', generic: '枯草杆菌二联活菌', brand: '妈咪爱', origin: '国产', spec: '0.5g×30袋/盒', perDose: '0.5g', times: ['早饭后', '晚饭后'] },
    { id: 'bacillus-licheniformis', generic: '地衣芽孢杆菌活菌', brand: '整肠生', origin: '国产', spec: '0.25g×24粒/盒', perDose: '0.5g', times: ['早饭后', '晚饭后'] }
  ],
  gastritis: [
    { id: 'anisdamine', generic: '消旋山莨菪碱片', brand: '654-2', origin: '国产', spec: '5mg×100片/瓶', perDose: '5mg', times: ['早饭后', '晚饭后'] },
    { id: 'drotaverine', generic: '盐酸屈他维林片', brand: '国产', origin: '国产', spec: '40mg×20片/盒', perDose: '40mg', times: ['早饭后', '晚饭后'] }
  ],
  cold: [
    { id: 'pentoxyverine', generic: '枸橼酸喷托维林片', brand: '咳必清', origin: '国产', spec: '25mg×100片/瓶', perDose: '25mg', times: ['早饭后', '晚饭后'] },
    { id: 'benproperine', generic: '磷酸苯丙哌林片', brand: '国产', origin: '国产', spec: '20mg×24片/盒', perDose: '20mg', times: ['早饭后', '晚饭后'] },
    { id: 'lingqiao', generic: '羚翘解毒丸', brand: '国产', origin: '国产', spec: '9g×10丸/盒', perDose: '9g', times: ['早饭后', '晚饭后'] }
  ],
  copd: [
    { id: 'bromhexine', generic: '盐酸溴己新片', brand: '国产', origin: '国产', spec: '8mg×100片/瓶', perDose: '16mg', times: ['早饭后', '晚饭后'] },
    { id: 'carbocisteine', generic: '羧甲司坦口服液', brand: '国产', origin: '国产', spec: '10ml×10支/盒', perDose: '10ml', times: ['早饭后', '晚饭后'] }
  ],
  asthma: [
    { id: 'diprophylline', generic: '二羟丙茶碱片', brand: '国产', origin: '国产', spec: '0.1g×100片/瓶', perDose: '0.2g', times: ['早饭后', '晚饭后'] }
  ],
  gerd: [
    { id: 'cimetidine', generic: '西咪替丁片', brand: '国产', origin: '国产', spec: '0.2g×100片/瓶', perDose: '0.4g', times: ['早饭后', '晚饭后'] }
  ],
  mci: [
    { id: 'guanxin-suhe', generic: '冠心苏合丸', brand: '国产', origin: '国产', spec: '3g×10丸/盒', perDose: '3g', times: ['早饭后', '晚饭后'] },
    { id: 'niuhuang-qingxin', generic: '牛黄清心丸', brand: '同仁堂', origin: '国产', spec: '3g×1丸/盒', perDose: '3g', times: ['早饭后'] }
  ],
  'qi-blood-def': [
    { id: 'huangqi-jing', generic: '黄芪精口服液', brand: '国产', origin: '国产', spec: '10ml×10支/盒', perDose: '10ml', times: ['早饭后', '晚饭后'] },
    { id: 'shenqi-kf', generic: '参芪口服液', brand: '国产', origin: '国产', spec: '10ml×10支/盒', perDose: '10ml', times: ['早饭后', '晚饭后'] }
  ]
}