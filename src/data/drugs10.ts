import type { CatalogDrug } from './departments'

// 用药库扩容J：神经/精神/肾/风湿/皮肤/眼科/耳鼻喉/妇产/泌尿/骨科/老年/全科 补充
export const extraDrugs: Record<string, CatalogDrug[]> = {
  insomnia: [
    { id: 'suanzaoren-tang', generic: '酸枣仁汤颗粒', brand: '国产', origin: '国产', spec: '10g×10袋/盒', perDose: '10g', times: ['睡前'] },
    { id: 'yexinshu', generic: '夜宁颗粒', brand: '国产', origin: '国产', spec: '15g×10袋/盒', perDose: '15g', times: ['睡前'] },
    { id: 'wuling-ye', generic: '养心安神丸', brand: '国产', origin: '国产', spec: '9g×10丸/盒', perDose: '9g', times: ['睡前'] }
  ],
  migraine: [
    { id: 'tianma-gouteng-m', generic: '天麻钩藤饮颗粒', brand: '国产', origin: '国产', spec: '10g×10袋/盒', perDose: '10g', times: ['早饭后', '晚饭后'] },
    { id: 'zhengtian-2', generic: '通天口服液', brand: '国产', origin: '国产', spec: '10ml×10支/盒', perDose: '10ml', times: ['早饭后', '晚饭后'] }
  ],
  anxiety: [
    { id: 'anshen-dingzhi-a', generic: '安神定志丸', brand: '国产', origin: '国产', spec: '9g×10丸/盒', perDose: '9g', times: ['早饭后', '晚饭后'] },
    { id: 'shenzhi', generic: '舒肝解郁胶囊', brand: '国产', origin: '国产', spec: '0.5g×24粒/盒', perDose: '1g', times: ['早饭后', '晚饭后'] }
  ],
  depression: [
    { id: 'juanbi', generic: '解郁丸', brand: '国产', origin: '国产', spec: '6g×10袋/盒', perDose: '6g', times: ['早饭后', '晚饭后'] },
    { id: 'yiqi', generic: '宁神补心片', brand: '国产', origin: '国产', spec: '0.5g×48片/盒', perDose: '1.5g', times: ['早饭后', '晚饭后'] }
  ],
  ckd: [
    { id: 'shenyan-kangfu', generic: '肾炎康复片', brand: '国产', origin: '国产', spec: '0.5g×60片/盒', perDose: '2.5g', times: ['早饭后', '晚饭后'] },
    { id: 'haikun', generic: '海昆肾喜胶囊', brand: '国产', origin: '国产', spec: '0.4g×36粒/盒', perDose: '0.8g', times: ['早饭后', '晚饭后'] }
  ],
  uti: [
    { id: 'ningmitai-u', generic: '宁泌泰胶囊', brand: '国产', origin: '国产', spec: '0.38g×36粒/盒', perDose: '1.52g', times: ['早饭后', '晚饭后'] },
    { id: 'fuyan', generic: '妇炎康片', brand: '国产', origin: '国产', spec: '0.3g×100片/瓶', perDose: '1.8g', times: ['早饭后', '晚饭后'] }
  ],
  ra: [
    { id: 'yishe', generic: '益肾蠲痹丸', brand: '国产', origin: '国产', spec: '8g×10袋/盒', perDose: '8g', times: ['早饭后', '晚饭后'] },
    { id: 'fengshi', generic: '风湿液', brand: '国产', origin: '国产', spec: '120ml/瓶', perDose: '20ml', times: ['早饭后', '晚饭后'] }
  ],
  eczema: [
    { id: 'xuangou', generic: '湿毒清胶囊', brand: '玉林', origin: '国产', spec: '0.5g×36粒/盒', perDose: '1.5g', times: ['早饭后', '晚饭后'] },
    { id: 'fushen', generic: '肤痒颗粒', brand: '国产', origin: '国产', spec: '9g×10袋/盒', perDose: '9g', times: ['早饭后', '晚饭后'] }
  ],
  urticaria: [
    { id: 'yupingfeng', generic: '玉屏风颗粒', brand: '国产', origin: '国产', spec: '5g×15袋/盒', perDose: '5g', times: ['早饭后', '晚饭后'] }
  ],
  dryeye: [
    { id: 'shihu-yeguang', generic: '石斛夜光丸', brand: '国产', origin: '国产', spec: '9g×10丸/盒', perDose: '9g', times: ['早饭后', '晚饭后'] }
  ],
  glaucoma: [
    { id: 'carteolol', generic: '卡替洛尔滴眼液', brand: '国产', origin: '国产', spec: '2%×5ml/支', perDose: '1滴', times: ['早饭后', '晚饭后'] }
  ],
  pharyngitis: [
    { id: 'qinghou', generic: '清喉利咽颗粒', brand: '国产', origin: '国产', spec: '5g×10袋/盒', perDose: '10g', times: ['早饭后', '晚饭后'] },
    { id: 'houzheng', generic: '喉症丸', brand: '国产', origin: '国产', spec: '0.3g×100丸/瓶', perDose: '0.9g', times: ['早饭后', '晚饭后'] }
  ],
  rhinitis: [
    { id: 'biyanshu', generic: '鼻炎舒口服液', brand: '国产', origin: '国产', spec: '10ml×10支/盒', perDose: '10ml', times: ['早饭后', '晚饭后'] }
  ],
  menopause: [
    { id: 'gengnian', generic: '更年乐片', brand: '国产', origin: '国产', spec: '0.4g×48片/盒', perDose: '1.6g', times: ['早饭后', '晚饭后'] },
    { id: 'kunbao', generic: '坤宝丸', brand: '同仁堂', origin: '国产', spec: '5g×10袋/盒', perDose: '5g', times: ['早饭后', '晚饭后'] }
  ],
  pcos: [
    { id: 'xiaoyao-pcos', generic: '加味逍遥丸', brand: '同仁堂', origin: '国产', spec: '6g×10袋/盒', perDose: '6g', times: ['早饭后', '晚饭后'] }
  ],
  bph: [
    { id: 'qianlie', generic: '前列安栓', brand: '国产', origin: '国产', spec: '2g×10枚/盒', perDose: '1枚', times: ['睡前'] },
    { id: 'zeqi', generic: '泽桂癃爽胶囊', brand: '国产', origin: '国产', spec: '0.4g×36粒/盒', perDose: '1.2g', times: ['早饭后', '晚饭后'] }
  ],
  stone: [
    { id: 'jinqiancao', generic: '金钱草颗粒', brand: '国产', origin: '国产', spec: '10g×12袋/盒', perDose: '20g', times: ['早饭后', '晚饭后'] },
    { id: 'paishi-2', generic: '石韦胶囊', brand: '国产', origin: '国产', spec: '0.4g×36粒/盒', perDose: '1.2g', times: ['早饭后', '晚饭后'] }
  ],
  oa: [
    { id: 'gukang', generic: '骨康胶囊', brand: '国产', origin: '国产', spec: '0.4g×36粒/盒', perDose: '1.2g', times: ['早饭后', '晚饭后'] },
    { id: 'shexiang-zhuifeng', generic: '麝香追风膏', brand: '国产', origin: '国产', spec: '7cm×10cm×6贴/盒', perDose: '1贴', times: ['早饭后', '晚饭后'] }
  ],
  cervical: [
    { id: 'biyuan', generic: '痹欣片', brand: '国产', origin: '国产', spec: '0.3g×48片/盒', perDose: '0.9g', times: ['早饭后', '晚饭后'] }
  ],
  mci: [
    { id: 'huanpian', generic: '银杏酮酯分散片', brand: '国产', origin: '国产', spec: '19.2mg×24片/盒', perDose: '38.4mg', times: ['早饭后', '晚饭后'] },
    { id: 'naoxin', generic: '脑心舒口服液', brand: '国产', origin: '国产', spec: '10ml×10支/盒', perDose: '10ml', times: ['早饭后', '晚饭后'] }
  ],
  sarcopenia: [
    { id: 'jianshen', generic: '健脾益肾颗粒', brand: '国产', origin: '国产', spec: '10g×10袋/盒', perDose: '10g', times: ['早饭后', '晚饭后'] }
  ],
  cold: [
    { id: 'xiaochaihu', generic: '小柴胡颗粒', brand: '国产', origin: '国产', spec: '10g×10袋/盒', perDose: '10g', times: ['早饭后', '晚饭后'] },
    { id: 'chuanxinlian', generic: '穿心莲内酯滴丸', brand: '国产', origin: '国产', spec: '0.15g×36丸/盒', perDose: '0.45g', times: ['早饭后', '晚饭后'] }
  ],
  ida: [
    { id: 'guiyuan', generic: '归脾颗粒', brand: '国产', origin: '国产', spec: '3g×10袋/盒', perDose: '3g', times: ['早饭后', '晚饭后'] },
    { id: 'shengxue', generic: '生血宁片', brand: '国产', origin: '国产', spec: '0.25g×60片/盒', perDose: '0.5g', times: ['早饭后', '晚饭后'] }
  ]
}