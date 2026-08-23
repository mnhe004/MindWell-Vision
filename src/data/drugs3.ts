import type { CatalogDrug } from './departments'

// 用药库扩容C：精神心理 + 神经 + 进食障碍（含中成药：疏肝解郁胶囊、乌灵胶囊等）
export const extraDrugs: Record<string, CatalogDrug[]> = {
  depression: [
    { id: 'shugan-jieyu', generic: '疏肝解郁胶囊', brand: '龙泰', origin: '国产', spec: '0.5g×36粒/盒', perDose: '1g', times: ['早饭后', '晚饭后'] },
    { id: 'wuling-capsule', generic: '乌灵胶囊', brand: '佐力', origin: '国产', spec: '0.33g×36粒/盒', perDose: '1g', times: ['早饭后', '晚饭后'] },
    { id: 'shugan-jieyu-2', generic: '舒肝解郁胶囊', brand: '国产', origin: '国产', spec: '0.5g×24粒/盒', perDose: '1g', times: ['早饭后', '晚饭后'] },
    { id: 'xiaoyao-wan', generic: '逍遥丸', brand: '仲景', origin: '国产', spec: '200丸/瓶', perDose: '8丸', times: ['早饭后', '晚饭后'] },
    { id: 'bajitian', generic: '巴戟天寡糖胶囊', brand: '国产', origin: '国产', spec: '0.24g×24粒/盒', perDose: '0.48g', times: ['早饭后'] },
    { id: 'duloxetine', generic: '度洛西汀', brand: '欣百达', origin: '进口', spec: '30mg×7粒/盒', perDose: '30mg', times: ['早饭后'] },
    { id: 'agomelatine', generic: '阿戈美拉汀', brand: '维度新', origin: '进口', spec: '25mg×14片/盒', perDose: '25mg', times: ['睡前'] },
    { id: 'citalopram', generic: '西酞普兰', brand: '喜普妙', origin: '进口', spec: '20mg×14片/盒', perDose: '20mg', times: ['早饭后'] }
  ],
  anxiety: [
    { id: 'wuling-anxiety', generic: '乌灵胶囊', brand: '佐力', origin: '国产', spec: '0.33g×36粒/盒', perDose: '1g', times: ['早饭后', '晚饭后'] },
    { id: 'shugan-anxiety', generic: '疏肝解郁胶囊', brand: '龙泰', origin: '国产', spec: '0.5g×36粒/盒', perDose: '1g', times: ['早饭后', '晚饭后'] },
    { id: 'jiuwei-zhenxin', generic: '九味镇心颗粒', brand: '国产', origin: '国产', spec: '3g×12袋/盒', perDose: '3g', times: ['早饭后', '晚饭后'] },
    { id: 'anxiolytic-xiaoyao', generic: '加味逍遥丸', brand: '同仁堂', origin: '国产', spec: '6g×10袋/盒', perDose: '6g', times: ['早饭后', '晚饭后'] },
    { id: 'venlafaxine-xr', generic: '文拉法辛缓释', brand: '怡诺思', origin: '进口', spec: '75mg×14粒/盒', perDose: '75mg', times: ['早饭后'] },
    { id: 'pregabalin', generic: '普瑞巴林', brand: '乐瑞卡', origin: '进口', spec: '75mg×14粒/盒', perDose: '75mg', times: ['早饭后', '晚饭后'] }
  ],
  insomnia: [
    { id: 'wuling-insomnia', generic: '乌灵胶囊', brand: '佐力', origin: '国产', spec: '0.33g×36粒/盒', perDose: '1g', times: ['早饭后', '晚饭后'] },
    { id: 'anshen-bunao', generic: '安神补脑液', brand: '敖东', origin: '国产', spec: '10ml×12支/盒', perDose: '10ml', times: ['睡前'] },
    { id: 'zaoren-anshen', generic: '枣仁安神胶囊', brand: '国产', origin: '国产', spec: '0.45g×30粒/盒', perDose: '2.25g', times: ['睡前'] },
    { id: 'bailemian', generic: '百乐眠胶囊', brand: '扬子江', origin: '国产', spec: '0.27g×24粒/盒', perDose: '1.08g', times: ['睡前'] },
    { id: 'tianmeng', generic: '甜梦胶囊', brand: '国产', origin: '国产', spec: '0.45g×36粒/盒', perDose: '1.8g', times: ['睡前'] },
    { id: 'tianwang-buxin', generic: '天王补心丸', brand: '同仁堂', origin: '国产', spec: '9g×10丸/盒', perDose: '9g', times: ['睡前'] },
    { id: 'doxepin', generic: '多塞平', brand: '国产', origin: '国产', spec: '25mg×100片/盒', perDose: '25mg', times: ['睡前'] }
  ],
  migraine: [
    { id: 'tianshu', generic: '天舒胶囊', brand: '国产', origin: '国产', spec: '0.36g×36粒/盒', perDose: '1.44g', times: ['早饭后', '晚饭后'] },
    { id: 'zhengtian', generic: '正天丸', brand: '三九', origin: '国产', spec: '6g×10袋/盒', perDose: '6g', times: ['早饭后', '晚饭后'] },
    { id: 'chuanxiong-chatiao', generic: '川芎茶调颗粒', brand: '国产', origin: '国产', spec: '7.8g×9袋/盒', perDose: '7.8g', times: ['早饭后', '晚饭后'] },
    { id: 'tou-tong-ning', generic: '头痛宁胶囊', brand: '步长', origin: '国产', spec: '0.4g×36粒/盒', perDose: '1.2g', times: ['早饭后', '晚饭后'] },
    { id: 'zolmitriptan', generic: '佐米曲普坦', brand: '佐米格', origin: '进口', spec: '2.5mg×2片/盒', perDose: '2.5mg', times: ['早饭后'] }
  ],
  parkinson: [
    { id: 'selegiline', generic: '司来吉兰', brand: '咪多吡', origin: '进口', spec: '5mg×100片/盒', perDose: '5mg', times: ['早饭后'] },
    { id: 'rasagiline', generic: '雷沙吉兰', brand: '安齐来', origin: '进口', spec: '1mg×14片/盒', perDose: '1mg', times: ['早饭后'] },
    { id: 'amantadine', generic: '金刚烷胺', brand: '国产', origin: '国产', spec: '100mg×100片/盒', perDose: '100mg', times: ['早饭后', '午饭后'] }
  ],
  'anorexia-nervosa': [
    { id: 'shugan-an', generic: '疏肝解郁胶囊', brand: '龙泰', origin: '国产', spec: '0.5g×36粒/盒', perDose: '1g', times: ['早饭后', '晚饭后'] },
    { id: 'wuling-an', generic: '乌灵胶囊', brand: '佐力', origin: '国产', spec: '0.33g×36粒/盒', perDose: '1g', times: ['早饭后', '晚饭后'] },
    { id: 'xiaoyao-an', generic: '逍遥丸', brand: '仲景', origin: '国产', spec: '200丸/瓶', perDose: '8丸', times: ['早饭后', '晚饭后'] }
  ],
  'bulimia-nervosa': [
    { id: 'shugan-bn', generic: '疏肝解郁胶囊', brand: '龙泰', origin: '国产', spec: '0.5g×36粒/盒', perDose: '1g', times: ['早饭后', '晚饭后'] },
    { id: 'wuling-bn', generic: '乌灵胶囊', brand: '佐力', origin: '国产', spec: '0.33g×36粒/盒', perDose: '1g', times: ['早饭后', '晚饭后'] },
    { id: 'xiaoyao-bn', generic: '加味逍遥丸', brand: '同仁堂', origin: '国产', spec: '6g×10袋/盒', perDose: '6g', times: ['早饭后', '晚饭后'] }
  ]
}