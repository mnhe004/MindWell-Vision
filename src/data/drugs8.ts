import type { CatalogDrug } from './departments'

// 用药库扩容H：第三批扩容（更多中成药经典 + 常用西药 + 抗感染）
export const extraDrugs: Record<string, CatalogDrug[]> = {
  oa: [
    { id: 'yuanhu', generic: '元胡止痛片', brand: '国产', origin: '国产', spec: '0.25g×100片/瓶', perDose: '1g', times: ['早饭后', '晚饭后'] },
    { id: 'shujin', generic: '舒筋活血片', brand: '国产', origin: '国产', spec: '0.3g×60片/盒', perDose: '1.5g', times: ['早饭后', '晚饭后'] },
    { id: 'yunnanbaiyao', generic: '云南白药气雾剂', brand: '云南白药', origin: '国产', spec: '85g/瓶', perDose: '适量外用', times: ['早饭后', '晚饭后'] }
  ],
  cervical: [
    { id: 'huoxue-zhitong', generic: '活血止痛胶囊', brand: '国产', origin: '国产', spec: '0.25g×36粒/盒', perDose: '1g', times: ['早饭后', '晚饭后'] }
  ],
  nafld: [
    { id: 'xiaoyan-lidan', generic: '消炎利胆片', brand: '国产', origin: '国产', spec: '0.5g×100片/瓶', perDose: '1.5g', times: ['早饭后', '晚饭后'] },
    { id: 'danshu', generic: '胆舒胶囊', brand: '国产', origin: '国产', spec: '0.45g×30粒/盒', perDose: '0.9g', times: ['早饭后', '晚饭后'] }
  ],
  pcos: [
    { id: 'fuke-qianjin', generic: '妇科千金片', brand: '千金', origin: '国产', spec: '0.32g×144片/盒', perDose: '1.92g', times: ['早饭后', '晚饭后'] },
    { id: 'yimucao', generic: '益母草颗粒', brand: '国产', origin: '国产', spec: '15g×10袋/盒', perDose: '15g', times: ['早饭后', '晚饭后'] },
    { id: 'wuji-baifeng', generic: '乌鸡白凤丸', brand: '同仁堂', origin: '国产', spec: '9g×10丸/盒', perDose: '9g', times: ['早饭后', '晚饭后'] }
  ],
  menopause: [
    { id: 'wuji-baifeng-m', generic: '乌鸡白凤丸', brand: '同仁堂', origin: '国产', spec: '9g×10丸/盒', perDose: '9g', times: ['早饭后', '晚饭后'] },
    { id: 'maiwei-dihuang', generic: '麦味地黄丸', brand: '仲景', origin: '国产', spec: '200丸/瓶', perDose: '8丸', times: ['早饭后', '晚饭后'] },
    { id: 'jinkui-shenqi', generic: '金匮肾气丸', brand: '仲景', origin: '国产', spec: '200丸/瓶', perDose: '8丸', times: ['早饭后', '晚饭后'] }
  ],
  cold: [
    { id: 'oseltamivir', generic: '磷酸奥司他韦', brand: '达菲', origin: '进口', spec: '75mg×10粒/盒', perDose: '75mg', times: ['早饭后', '晚饭后'] },
    { id: 'cefaclor', generic: '头孢克洛', brand: '希刻劳', origin: '进口', spec: '0.25g×12粒/盒', perDose: '0.25g', times: ['早饭后', '晚饭后'] },
    { id: 'amoxicillin-clav', generic: '阿莫西林克拉维酸钾', brand: '阿莫仙', origin: '国产', spec: '0.375g×12片/盒', perDose: '0.375g', times: ['早饭后', '晚饭后'] },
    { id: 'dextromethorphan', generic: '氢溴酸右美沙芬', brand: '国产', origin: '国产', spec: '15mg×20片/盒', perDose: '15mg', times: ['早饭后', '晚饭后'] },
    { id: 'yinqiao', generic: '银翘解毒片', brand: '国产', origin: '国产', spec: '0.5g×48片/盒', perDose: '1.5g', times: ['早饭后', '晚饭后'] },
    { id: 'fengre', generic: '桑菊感冒颗粒', brand: '国产', origin: '国产', spec: '10g×10袋/盒', perDose: '10g', times: ['早饭后', '晚饭后'] }
  ],
  uti: [
    { id: 'cefdinir', generic: '头孢地尼', brand: '国产', origin: '国产', spec: '100mg×10粒/盒', perDose: '100mg', times: ['早饭后', '晚饭后'] },
    { id: 'fosfomycin', generic: '磷霉素氨丁三醇', brand: '国产', origin: '国产', spec: '3g×1袋/盒', perDose: '3g', times: ['睡前'] }
  ],
  pharyngitis: [
    { id: 'ganmao-tuire', generic: '感冒退热颗粒', brand: '国产', origin: '国产', spec: '10g×10袋/盒', perDose: '10g', times: ['早饭后', '晚饭后'] }
  ],
  mci: [
    { id: 'jinkui-shenqi-m', generic: '金匮肾气丸', brand: '仲景', origin: '国产', spec: '200丸/瓶', perDose: '8丸', times: ['早饭后', '晚饭后'] }
  ],
  sarcopenia: [
    { id: 'shiquan-s', generic: '十全大补丸', brand: '仲景', origin: '国产', spec: '200丸/瓶', perDose: '8丸', times: ['早饭后', '晚饭后'] }
  ],
  hyperlipid: [
    { id: 'muzetai', generic: '血脂灵片', brand: '国产', origin: '国产', spec: '0.4g×60片/盒', perDose: '1.2g', times: ['早饭后', '晚饭后'] }
  ],
  chd: [
    { id: 'danshen-pian', generic: '复方丹参片', brand: '国产', origin: '国产', spec: '0.32g×100片/瓶', perDose: '0.96g', times: ['早饭后', '晚饭后'] },
    { id: 'ginkgo', generic: '银杏叶片', brand: '国产', origin: '国产', spec: '19.2mg×24片/盒', perDose: '38.4mg', times: ['早饭后', '晚饭后'] }
  ],
  af: [
    { id: 'shensong-2', generic: '参松养心胶囊', brand: '以岭', origin: '国产', spec: '0.4g×36粒/盒', perDose: '1.2g', times: ['早饭后', '晚饭后'] }
  ],
  gerd: [
    { id: 'weishu-pian', generic: '胃舒宁片', brand: '国产', origin: '国产', spec: '0.5g×48片/盒', perDose: '1.5g', times: ['早饭后', '晚饭后'] }
  ],
  insomnia: [
    { id: 'anshen-buxin', generic: '安神补心丸', brand: '同仁堂', origin: '国产', spec: '9g×10丸/盒', perDose: '9g', times: ['睡前'] }
  ],
  depression: [
    { id: 'ganmai-dazao', generic: '甘麦大枣汤颗粒', brand: '国产', origin: '国产', spec: '10g×10袋/盒', perDose: '10g', times: ['早饭后', '晚饭后'] }
  ]
}