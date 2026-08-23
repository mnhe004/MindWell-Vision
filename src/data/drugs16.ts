import type { CatalogDrug } from './departments'

// 用药库扩容P：呼吸止咳化痰中成药 + 抗菌/抗真菌 + 经典中成药补充
export const extraDrugs: Record<string, CatalogDrug[]> = {
  cold: [
    { id: 'jizhi', generic: '急支糖浆', brand: '太极', origin: '国产', spec: '100ml/瓶', perDose: '20ml', times: ['早饭后', '晚饭后'] },
    { id: 'qiangli-pipa', generic: '强力枇杷露', brand: '国产', origin: '国产', spec: '100ml/瓶', perDose: '15ml', times: ['早饭后', '晚饭后'] },
    { id: 'nianci', generic: '蜜炼川贝枇杷膏', brand: '念慈菴', origin: '国产', spec: '150ml/瓶', perDose: '15ml', times: ['早饭后', '晚饭后'] },
    { id: 'fufang-xianzhuli', generic: '复方鲜竹沥液', brand: '国产', origin: '国产', spec: '20ml×6支/盒', perDose: '20ml', times: ['早饭后', '晚饭后'] }
  ],
  copd: [
    { id: 'qingre-tan', generic: '清气化痰丸', brand: '国产', origin: '国产', spec: '6g×10袋/盒', perDose: '6g', times: ['早饭后', '晚饭后'] }
  ],
  pneumonia: [
    { id: 'erythromycin', generic: '红霉素', brand: '国产', origin: '国产', spec: '0.25g×24片/盒', perDose: '0.5g', times: ['早饭后', '晚饭后'] }
  ],
  uti: [
    { id: 'ciprofloxacin', generic: '环丙沙星', brand: '国产', origin: '国产', spec: '0.25g×12片/盒', perDose: '0.5g', times: ['早饭后', '晚饭后'] },
    { id: 'norfloxacin', generic: '诺氟沙星', brand: '国产', origin: '国产', spec: '0.1g×24粒/盒', perDose: '0.4g', times: ['早饭后', '晚饭后'] },
    { id: 'tinidazole', generic: '替硝唑', brand: '国产', origin: '国产', spec: '0.5g×8片/盒', perDose: '1g', times: ['早饭后', '晚饭后'] }
  ],
  vaginitis: [
    { id: 'fluconazole', generic: '氟康唑', brand: '大扶康', origin: '进口', spec: '150mg×1粒/盒', perDose: '150mg', times: ['早饭后'] },
    { id: 'ornidazole', generic: '奥硝唑', brand: '国产', origin: '国产', spec: '0.25g×24片/盒', perDose: '0.5g', times: ['早饭后', '晚饭后'] }
  ],
  tinea: [
    { id: 'itraconazole', generic: '伊曲康唑', brand: '斯皮仁诺', origin: '进口', spec: '0.1g×14粒/盒', perDose: '0.2g', times: ['早饭后', '晚饭后'] }
  ],
  'irregular-menses': [
    { id: 'guizhi-fuling', generic: '桂枝茯苓丸', brand: '国产', origin: '国产', spec: '6g×10袋/盒', perDose: '6g', times: ['早饭后', '晚饭后'] },
    { id: 'bazhen-yimu', generic: '八珍益母丸', brand: '国产', origin: '国产', spec: '9g×10丸/盒', perDose: '9g', times: ['早饭后', '晚饭后'] }
  ],
  dyspepsia: [
    { id: 'sijunzi', generic: '四君子丸', brand: '国产', origin: '国产', spec: '6g×10袋/盒', perDose: '6g', times: ['早饭后', '晚饭后'] },
    { id: 'lizhong', generic: '理中丸', brand: '国产', origin: '国产', spec: '9g×10丸/盒', perDose: '9g', times: ['早饭后', '晚饭后'] }
  ],
  ckd: [
    { id: 'wuling-powder', generic: '五苓散', brand: '国产', origin: '国产', spec: '9g×10袋/盒', perDose: '9g', times: ['早饭后', '晚饭后'] }
  ],
  tinnitus: [
    { id: 'erlong-zuoci', generic: '耳聋左慈丸', brand: '国产', origin: '国产', spec: '9g×10丸/盒', perDose: '9g', times: ['早饭后', '晚饭后'] }
  ],
  oa: [
    { id: 'sanqi-shangyao', generic: '三七伤药片', brand: '国产', origin: '国产', spec: '0.4g×36片/盒', perDose: '1.2g', times: ['早饭后', '晚饭后'] },
    { id: 'dieda-wan', generic: '跌打丸', brand: '国产', origin: '国产', spec: '9g×10丸/盒', perDose: '9g', times: ['早饭后', '晚饭后'] }
  ],
  lumbar: [],
  'lumbar-hernia': [
    { id: 'shexiang-zhuifeng-lh', generic: '麝香追风膏', brand: '国产', origin: '国产', spec: '7cm×10cm×6贴/盒', perDose: '1贴', times: ['早饭后', '晚饭后'] }
  ]
}