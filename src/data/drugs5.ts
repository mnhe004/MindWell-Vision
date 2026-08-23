import type { CatalogDrug } from './departments'

// 用药库扩容E：肾内 + 风湿 + 皮肤 + 眼科 + 耳鼻喉 + 妇产 + 泌尿 + 骨科 + 老年 + 全科（西药补充 + 中成药）
export const extraDrugs: Record<string, CatalogDrug[]> = {
  ckd: [
    { id: 'huangkui', generic: '黄葵胶囊', brand: '苏中', origin: '国产', spec: '0.5g×30粒/盒', perDose: '2.5g', times: ['早饭后', '晚饭后'] },
    { id: 'niaoduqing', generic: '尿毒清颗粒', brand: '康臣', origin: '国产', spec: '5g×15袋/盒', perDose: '5g', times: ['早饭后', '午饭前', '晚饭后'] },
    { id: 'jinshuibao-ckd', generic: '金水宝胶囊', brand: '济民可信', origin: '国产', spec: '0.33g×60粒/盒', perDose: '1.98g', times: ['早饭后', '晚饭后'] },
    { id: 'bailing-ckd', generic: '百令胶囊', brand: '中美华东', origin: '国产', spec: '0.5g×60粒/盒', perDose: '2.5g', times: ['早饭后', '晚饭后'] },
    { id: 'shenyankangfu', generic: '肾炎康复片', brand: '国产', origin: '国产', spec: '0.5g×60片/盒', perDose: '2.5g', times: ['早饭后', '晚饭后'] }
  ],
  uti: [
    { id: 'sanjin', generic: '三金片', brand: '桂林三金', origin: '国产', spec: '0.5g×54片/盒', perDose: '1.5g', times: ['早饭后', '午饭后', '晚饭后'] },
    { id: 'relinqing', generic: '热淋清颗粒', brand: '国产', origin: '国产', spec: '8g×12袋/盒', perDose: '16g', times: ['早饭后', '晚饭后'] },
    { id: 'yinhua-miyanling', generic: '银花泌炎灵片', brand: '国产', origin: '国产', spec: '0.5g×60片/盒', perDose: '2g', times: ['早饭后', '晚饭后'] },
    { id: 'bazheng', generic: '八正合剂', brand: '国产', origin: '国产', spec: '120ml/瓶', perDose: '20ml', times: ['早饭后', '晚饭后'] }
  ],
  ra: [
    { id: 'leigongteng', generic: '雷公藤多苷片', brand: '国产', origin: '国产', spec: '10mg×100片/瓶', perDose: '20mg', times: ['早饭后', '晚饭后'] },
    { id: 'wangbi', generic: '尪痹片', brand: '国产', origin: '国产', spec: '0.5g×48片/盒', perDose: '2g', times: ['早饭后', '晚饭后'] },
    { id: 'zhengqing', generic: '正清风痛宁缓释片', brand: '国产', origin: '国产', spec: '60mg×12片/盒', perDose: '60mg', times: ['早饭后', '晚饭后'] },
    { id: 'iguratimod', generic: '艾拉莫德', brand: '艾得辛', origin: '国产', spec: '25mg×14片/盒', perDose: '25mg', times: ['早饭后', '晚饭后'] }
  ],
  sle: [
    { id: 'kunming', generic: '昆明山海棠片', brand: '国产', origin: '国产', spec: '0.28g×100片/瓶', perDose: '0.84g', times: ['早饭后', '晚饭后'] },
    { id: 'hydroxychloroquine', generic: '羟氯喹', brand: '赛能', origin: '进口', spec: '200mg×10片/盒', perDose: '200mg', times: ['早饭后'] }
  ],
  eczema: [
    { id: 'xiaofeng', generic: '消风止痒颗粒', brand: '国产', origin: '国产', spec: '10g×12袋/盒', perDose: '10g', times: ['早饭后', '晚饭后'] },
    { id: 'shiduqing', generic: '湿毒清胶囊', brand: '玉林', origin: '国产', spec: '0.5g×36粒/盒', perDose: '1.5g', times: ['早饭后', '晚饭后'] },
    { id: 'jinchan', generic: '金蝉止痒胶囊', brand: '国产', origin: '国产', spec: '0.5g×24粒/盒', perDose: '1g', times: ['早饭后', '晚饭后'] },
    { id: 'fufang-huangbai', generic: '复方黄柏液涂剂', brand: '国产', origin: '国产', spec: '100ml/瓶', perDose: '适量外涂', times: ['早饭后', '晚饭后'] }
  ],
  urticaria: [
    { id: 'fangfeng', generic: '防风通圣丸', brand: '同仁堂', origin: '国产', spec: '6g×10袋/盒', perDose: '6g', times: ['早饭后', '晚饭后'] },
    { id: 'xiaofeng-urt', generic: '消风止痒颗粒', brand: '国产', origin: '国产', spec: '10g×12袋/盒', perDose: '10g', times: ['早饭后', '晚饭后'] }
  ],
  acne: [
    { id: 'danggui-kushen', generic: '当归苦参丸', brand: '国产', origin: '国产', spec: '6g×10袋/盒', perDose: '6g', times: ['早饭后', '晚饭后'] },
    { id: 'danshentong', generic: '丹参酮胶囊', brand: '国产', origin: '国产', spec: '0.25g×24粒/盒', perDose: '0.5g', times: ['早饭后', '晚饭后'] }
  ],
  dryeye: [
    { id: 'qiju-dihuang', generic: '杞菊地黄丸', brand: '仲景', origin: '国产', spec: '200丸/瓶', perDose: '8丸', times: ['早饭后', '晚饭后'] },
    { id: 'mingmu-dihuang', generic: '明目地黄丸', brand: '同仁堂', origin: '国产', spec: '9g×10丸/盒', perDose: '9g', times: ['早饭后', '晚饭后'] },
    { id: 'zhenzhu-mingmu', generic: '珍珠明目滴眼液', brand: '国产', origin: '国产', spec: '8ml/支', perDose: '1-2滴', times: ['早饭后', '午饭后', '晚饭后', '睡前'] }
  ],
  glaucoma: [
    { id: 'dorzolamide', generic: '多佐胺滴眼液', brand: '国产', origin: '国产', spec: '2%×5ml/支', perDose: '1滴', times: ['早饭后', '晚饭后'] },
    { id: 'brimonidine', generic: '溴莫尼定滴眼液', brand: '阿法根', origin: '进口', spec: '0.2%×5ml/支', perDose: '1滴', times: ['早饭后', '晚饭后'] }
  ],
  rhinitis: [
    { id: 'cangerzi-diwan', generic: '苍耳子鼻炎滴丸', brand: '国产', origin: '国产', spec: '1.5g×6袋/盒', perDose: '1.5g', times: ['早饭后', '晚饭后'] },
    { id: 'biyuantongqiao', generic: '鼻渊通窍颗粒', brand: '国产', origin: '国产', spec: '15g×10袋/盒', perDose: '15g', times: ['早饭后', '晚饭后'] }
  ],
  pharyngitis: [
    { id: 'pudilan', generic: '蒲地蓝消炎口服液', brand: '济川', origin: '国产', spec: '10ml×12支/盒', perDose: '10ml', times: ['早饭后', '午饭前', '晚饭后'] },
    { id: 'lanqin', generic: '蓝芩口服液', brand: '扬子江', origin: '国产', spec: '10ml×12支/盒', perDose: '10ml', times: ['早饭后', '晚饭后'] },
    { id: 'jinsangzi', generic: '金嗓子喉片', brand: '金嗓子', origin: '国产', spec: '2g×12片/盒', perDose: '含化', times: ['早饭后', '午饭后', '晚饭后'] },
    { id: 'liuwei-wan', generic: '六神丸', brand: '国产', origin: '国产', spec: '0.003g×120丸/盒', perDose: '10丸', times: ['早饭后', '晚饭后'] },
    { id: 'xiguashuang', generic: '西瓜霜润喉片', brand: '三金', origin: '国产', spec: '1.2g×24片/盒', perDose: '含化', times: ['早饭后', '午饭后', '晚饭后'] }
  ],
  menopause: [
    { id: 'gengnianan', generic: '更年安片', brand: '国产', origin: '国产', spec: '0.3g×60片/盒', perDose: '1.8g', times: ['早饭后', '晚饭后'] },
    { id: 'liuwei-dihuang', generic: '六味地黄丸', brand: '仲景', origin: '国产', spec: '200丸/瓶', perDose: '8丸', times: ['早饭后', '晚饭后'] },
    { id: 'nvzhen', generic: '女珍颗粒', brand: '国产', origin: '国产', spec: '10g×10袋/盒', perDose: '10g', times: ['早饭后', '晚饭后'] }
  ],
  pcos: [
    { id: 'guishao-dihuang', generic: '归芍地黄丸', brand: '国产', origin: '国产', spec: '200丸/瓶', perDose: '8丸', times: ['早饭后', '晚饭后'] }
  ],
  bph: [
    { id: 'qianliekang', generic: '普乐安片（前列康）', brand: '康恩贝', origin: '国产', spec: '0.57g×60片/盒', perDose: '1.71g', times: ['早饭后', '晚饭后'] },
    { id: 'qianlie-shule', generic: '前列舒乐胶囊', brand: '国产', origin: '国产', spec: '0.4g×36粒/盒', perDose: '1.6g', times: ['早饭后', '晚饭后'] },
    { id: 'longbishu', generic: '癃闭舒胶囊', brand: '国产', origin: '国产', spec: '0.3g×36粒/盒', perDose: '0.9g', times: ['早饭后', '晚饭后'] },
    { id: 'dutasteride', generic: '度他雄胺', brand: '安福达', origin: '进口', spec: '0.5mg×10粒/盒', perDose: '0.5mg', times: ['早饭后'] }
  ],
  stone: [
    { id: 'shilintong', generic: '石淋通颗粒', brand: '国产', origin: '国产', spec: '15g×10袋/盒', perDose: '15g', times: ['早饭后', '晚饭后'] },
    { id: 'niaoshitong', generic: '尿石通丸', brand: '国产', origin: '国产', spec: '4g×10袋/盒', perDose: '4g', times: ['早饭后', '晚饭后'] },
    { id: 'fufang-jinqiancao', generic: '复方金钱草颗粒', brand: '国产', origin: '国产', spec: '10g×12袋/盒', perDose: '20g', times: ['早饭后', '晚饭后'] }
  ],
  oa: [
    { id: 'kanggu-zengsheng', generic: '抗骨增生丸', brand: '国产', origin: '国产', spec: '6g×10袋/盒', perDose: '6g', times: ['早饭后', '晚饭后'] },
    { id: 'tenghuang-jian', generic: '藤黄健骨丸', brand: '国产', origin: '国产', spec: '9g×10丸/盒', perDose: '9g', times: ['早饭后', '晚饭后'] },
    { id: 'biqi', generic: '痹祺胶囊', brand: '国产', origin: '国产', spec: '0.3g×36粒/盒', perDose: '1.2g', times: ['早饭后', '晚饭后'] }
  ],
  cervical: [
    { id: 'jingfukang', generic: '颈复康颗粒', brand: '颈复康', origin: '国产', spec: '5g×10袋/盒', perDose: '10g', times: ['早饭后', '晚饭后'] },
    { id: 'gentongping', generic: '根痛平胶囊', brand: '国产', origin: '国产', spec: '0.5g×36粒/盒', perDose: '1.5g', times: ['早饭后', '晚饭后'] }
  ],
  mci: [
    { id: 'yinxingye', generic: '银杏叶片', brand: '国产', origin: '国产', spec: '19.2mg×24片/盒', perDose: '38.4mg', times: ['早饭后', '晚饭后'] },
    { id: 'fufang-congrong', generic: '复方苁蓉益智胶囊', brand: '国产', origin: '国产', spec: '0.3g×24粒/盒', perDose: '1.2g', times: ['早饭后', '晚饭后'] },
    { id: 'tianzhi', generic: '天智颗粒', brand: '国产', origin: '国产', spec: '5g×20袋/盒', perDose: '5g', times: ['早饭后', '晚饭后'] }
  ],
  sarcopenia: [
    { id: 'buzhong-yiqi', generic: '补中益气丸', brand: '仲景', origin: '国产', spec: '200丸/瓶', perDose: '8丸', times: ['早饭后', '晚饭后'] }
  ],
  cold: [
    { id: 'lianhua-qingwen', generic: '连花清瘟胶囊', brand: '以岭', origin: '国产', spec: '0.35g×24粒/盒', perDose: '1.4g', times: ['早饭后', '午饭后', '晚饭后'] },
    { id: 'ganmao-qingre', generic: '感冒清热颗粒', brand: '同仁堂', origin: '国产', spec: '12g×10袋/盒', perDose: '12g', times: ['早饭后', '晚饭后'] },
    { id: 'shuanghuanglian', generic: '双黄连口服液', brand: '三精', origin: '国产', spec: '10ml×10支/盒', perDose: '20ml', times: ['早饭后', '午饭后', '晚饭后'] },
    { id: 'huoxiang-zhengqi', generic: '藿香正气口服液', brand: '太极', origin: '国产', spec: '10ml×10支/盒', perDose: '10ml', times: ['早饭后', '晚饭后'] },
    { id: 'banlangen', generic: '板蓝根颗粒', brand: '国产', origin: '国产', spec: '10g×20袋/包', perDose: '10g', times: ['早饭后', '晚饭后'] }
  ],
  ida: [
    { id: 'ejiao', generic: '复方阿胶浆', brand: '东阿', origin: '国产', spec: '20ml×12支/盒', perDose: '20ml', times: ['早饭后', '晚饭后'] },
    { id: 'yiqi-weixue', generic: '益气维血颗粒', brand: '国产', origin: '国产', spec: '10g×12袋/盒', perDose: '10g', times: ['早饭后', '晚饭后'] },
    { id: 'polysac-iron-cap', generic: '多糖铁复合物胶囊', brand: '力蜚能', origin: '进口', spec: '150mg×10粒/盒', perDose: '150mg', times: ['早饭后'] }
  ]
}