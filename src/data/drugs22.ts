import type { CatalogDrug } from './departments'

// 用药库扩容V：儿科中成药 + 妇科/男科 + 心脑 + 止咳 补充
export const extraDrugs: Record<string, CatalogDrug[]> = {
  cold: [
    { id: 'kangbingdu', generic: '抗病毒口服液', brand: '国产', origin: '国产', spec: '10ml×10支/盒', perDose: '10ml', times: ['早饭后', '晚饭后'] },
    { id: 'siji', generic: '四季抗病毒合剂', brand: '国产', origin: '国产', spec: '10ml×10支/盒', perDose: '10ml', times: ['早饭后', '晚饭后'] },
    { id: 'zhikebao', generic: '止咳宝片', brand: '国产', origin: '国产', spec: '0.25g×48片/盒', perDose: '1g', times: ['早饭后', '晚饭后'] }
  ],
  hfmd: [
    { id: 'xiaoer-chiqiao', generic: '小儿豉翘清热颗粒', brand: '国产', origin: '国产', spec: '2g×6袋/盒', perDose: '2g', times: ['早饭后', '晚饭后'] }
  ],
  'ped-diarrhea': [
    { id: 'xingpi-yanger', generic: '醒脾养儿颗粒', brand: '国产', origin: '国产', spec: '2g×12袋/盒', perDose: '2g', times: ['早饭后', '晚饭后'] }
  ],
  chd: [
    { id: 'guanxin-danshen', generic: '冠心丹参滴丸', brand: '国产', origin: '国产', spec: '40mg×180丸/瓶', perDose: '80mg', times: ['早饭后', '晚饭后'] },
    { id: 'yixinshu', generic: '益心舒胶囊', brand: '国产', origin: '国产', spec: '0.4g×36粒/盒', perDose: '1.2g', times: ['早饭后', '晚饭后'] },
    { id: 'tongmai-yangxin', generic: '通脉养心丸', brand: '国产', origin: '国产', spec: '6g×10袋/盒', perDose: '6g', times: ['早饭后', '晚饭后'] }
  ],
  'irregular-menses': [
    { id: 'fuke-tiaojing', generic: '妇科调经片', brand: '国产', origin: '国产', spec: '0.3g×100片/瓶', perDose: '1.2g', times: ['早饭后', '晚饭后'] },
    { id: 'dingkun', generic: '定坤丹', brand: '国产', origin: '国产', spec: '9g×1丸/盒', perDose: '9g', times: ['早饭后', '晚饭后'] }
  ],
  prostatitis: [
    { id: 'qianlie-huichun', generic: '前列回春胶囊', brand: '国产', origin: '国产', spec: '0.3g×36粒/盒', perDose: '0.9g', times: ['早饭后', '晚饭后'] }
  ],
  'senile-constipation': [
    { id: 'maren-ruanjiao', generic: '麻仁软胶囊', brand: '国产', origin: '国产', spec: '0.6g×20粒/盒', perDose: '1.2g', times: ['早饭后', '晚饭后'] },
    { id: 'congrong', generic: '苁蓉通便口服液', brand: '国产', origin: '国产', spec: '10ml×10支/盒', perDose: '10ml', times: ['早饭后', '晚饭后'] }
  ],
  dyspepsia: [
    { id: 'fufang-huanglian', generic: '复方黄连素片', brand: '国产', origin: '国产', spec: '30mg×100片/瓶', perDose: '120mg', times: ['早饭后', '晚饭后'] },
    { id: 'xianglian', generic: '香连丸', brand: '国产', origin: '国产', spec: '6g×10袋/盒', perDose: '6g', times: ['早饭后', '晚饭后'] },
    { id: 'shenshen', generic: '四神丸', brand: '国产', origin: '国产', spec: '9g×10丸/盒', perDose: '9g', times: ['早饭后', '晚饭后'] }
  ],
  anxiety: [
    { id: 'danzhi-xiaoyao', generic: '丹栀逍遥丸', brand: '国产', origin: '国产', spec: '6g×10袋/盒', perDose: '6g', times: ['早饭后', '晚饭后'] }
  ],
  'liver-stag': [
    { id: 'xiaojianzhong', generic: '小建中颗粒', brand: '国产', origin: '国产', spec: '15g×10袋/盒', perDose: '15g', times: ['早饭后', '晚饭后'] }
  ],
  nafld: [
    { id: 'yinzhihuang', generic: '茵栀黄口服液', brand: '国产', origin: '国产', spec: '10ml×10支/盒', perDose: '10ml', times: ['早饭后', '晚饭后'] }
  ]
}