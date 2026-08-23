import type { CatalogDrug } from './departments'

// 用药库扩容N：神经/肾/风湿/皮肤/眼科/耳鼻喉/精神/妇产/泌尿/骨科/老年/全科/神经外科/普外 补充
export const extraDrugs: Record<string, CatalogDrug[]> = {
  stroke: [
    { id: 'aspirin-stroke', generic: '阿司匹林肠溶片', brand: '拜阿司匹灵', origin: '进口', spec: '100mg×30片/盒', perDose: '100mg', times: ['早饭后'] },
    { id: 'clopidogrel-stroke', generic: '氯吡格雷', brand: '波立维', origin: '进口', spec: '75mg×7片/盒', perDose: '75mg', times: ['早饭后'] },
    { id: 'atorva-stroke', generic: '阿托伐他汀', brand: '立普妥', origin: '进口', spec: '20mg×7片/盒', perDose: '20mg', times: ['睡前'] }
  ],
  epilepsy: [
    { id: 'valproate', generic: '丙戊酸钠', brand: '德巴金', origin: '进口', spec: '0.5g×30片/盒', perDose: '0.5g', times: ['早饭后', '晚饭后'] },
    { id: 'carbamazepine', generic: '卡马西平', brand: '得理多', origin: '进口', spec: '0.2g×30片/盒', perDose: '0.2g', times: ['早饭后', '晚饭后'] },
    { id: 'levetiracetam', generic: '左乙拉西坦', brand: '开浦兰', origin: '进口', spec: '0.25g×30片/盒', perDose: '0.5g', times: ['早饭后', '晚饭后'] }
  ],
  trigeminal: [
    { id: 'carbamazepine-tri', generic: '卡马西平', brand: '得理多', origin: '进口', spec: '0.2g×30片/盒', perDose: '0.2g', times: ['早饭后', '晚饭后'] }
  ],
  'facial-palsy': [
    { id: 'pred-fp', generic: '泼尼松', brand: '国产', origin: '国产', spec: '5mg×100片/瓶', perDose: '30mg', times: ['早饭后'] },
    { id: 'mecobalamin-fp', generic: '甲钴胺', brand: '弥可保', origin: '进口', spec: '0.5mg×20片/盒', perDose: '0.5mg', times: ['早饭后', '晚饭后'] }
  ],
  meniere: [
    { id: 'betahistine', generic: '甲磺酸倍他司汀', brand: '敏使朗', origin: '进口', spec: '6mg×30片/盒', perDose: '12mg', times: ['早饭后', '晚饭后'] }
  ],
  cgn: [
    { id: 'losartan-cgn', generic: '氯沙坦', brand: '科素亚', origin: '进口', spec: '50mg×7片/盒', perDose: '50mg', times: ['早饭后'] }
  ],
  ns: [
    { id: 'pred-ns', generic: '泼尼松', brand: '国产', origin: '国产', spec: '5mg×100片/瓶', perDose: '30mg', times: ['早饭后'] },
    { id: 'cyclophosphamide', generic: '环磷酰胺', brand: '国产', origin: '国产', spec: '50mg×100片/瓶', perDose: '50mg', times: ['早饭后'] }
  ],
  as: [
    { id: 'celecoxib-as', generic: '塞来昔布', brand: '西乐葆', origin: '进口', spec: '0.2g×6粒/盒', perDose: '0.2g', times: ['早饭后', '晚饭后'] },
    { id: 'sulfasalazine-as', generic: '柳氮磺吡啶', brand: '国产', origin: '国产', spec: '0.25g×60片/盒', perDose: '1g', times: ['早饭后', '晚饭后'] }
  ],
  sjogren: [
    { id: 'hcq-sjogren', generic: '羟氯喹', brand: '赛能', origin: '进口', spec: '200mg×10片/盒', perDose: '200mg', times: ['早饭后'] }
  ],
  psa: [
    { id: 'mtx-psa', generic: '甲氨蝶呤', brand: '国产', origin: '国产', spec: '2.5mg×100片/盒', perDose: '10mg', times: ['早饭后'] }
  ],
  vasculitis: [
    { id: 'pred-vas', generic: '泼尼松', brand: '国产', origin: '国产', spec: '5mg×100片/瓶', perDose: '30mg', times: ['早饭后'] }
  ],
  psoriasis: [
    { id: 'calcipotriol', generic: '卡泊三醇软膏', brand: '达力士', origin: '进口', spec: '0.005%×15g/支', perDose: '适量外用', times: ['早饭后', '晚饭后'] },
    { id: 'acitretin', generic: '阿维A胶囊', brand: '国产', origin: '国产', spec: '10mg×30粒/盒', perDose: '20mg', times: ['晚饭后'] }
  ],
  tinea: [
    { id: 'terbinafine', generic: '盐酸特比萘芬', brand: '兰美抒', origin: '进口', spec: '0.25g×14片/盒', perDose: '0.25g', times: ['早饭后'] },
    { id: 'ketoconazole-tinea', generic: '酮康唑乳膏', brand: '国产', origin: '国产', spec: '2%×15g/支', perDose: '适量外用', times: ['早饭后', '晚饭后'] }
  ],
  chloasma: [
    { id: 'tranexamic', generic: '氨甲环酸片', brand: '国产', origin: '国产', spec: '0.25g×30片/盒', perDose: '0.25g', times: ['早饭后', '晚饭后'] }
  ],
  alopecia: [
    { id: 'minoxidil', generic: '米诺地尔搽剂', brand: '蔓迪', origin: '国产', spec: '5%×60ml/瓶', perDose: '适量外涂', times: ['早饭后', '晚饭后'] },
    { id: 'bantu', generic: '斑秃丸', brand: '国产', origin: '国产', spec: '9g×10丸/盒', perDose: '9g', times: ['早饭后', '晚饭后'] }
  ],
  conjunctivitis: [
    { id: 'levofloxacin-eye', generic: '左氧氟沙星滴眼液', brand: '可乐必妥', origin: '进口', spec: '0.5%×5ml/支', perDose: '1滴', times: ['早饭后', '晚饭后'] },
    { id: 'tobramycin-eye', generic: '妥布霉素滴眼液', brand: '托百士', origin: '进口', spec: '0.3%×5ml/支', perDose: '1滴', times: ['早饭后', '晚饭后'] }
  ],
  'otitis-media': [
    { id: 'ofloxacin-ear', generic: '氧氟沙星滴耳液', brand: '国产', origin: '国产', spec: '0.3%×5ml/支', perDose: '数滴', times: ['早饭后', '晚饭后'] }
  ],
  'sudden-deaf': [
    { id: 'pred-sd', generic: '泼尼松', brand: '国产', origin: '国产', spec: '5mg×100片/瓶', perDose: '30mg', times: ['早饭后'] },
    { id: 'ginkgo-sd', generic: '银杏叶提取物片', brand: '国产', origin: '国产', spec: '40mg×24片/盒', perDose: '40mg', times: ['早饭后', '晚饭后'] }
  ],
  tinnitus: [
    { id: 'mecobalamin-tin', generic: '甲钴胺', brand: '弥可保', origin: '进口', spec: '0.5mg×20片/盒', perDose: '0.5mg', times: ['早饭后', '晚饭后'] }
  ],
  tonsillitis: [
    { id: 'amoxicillin-ton', generic: '阿莫西林', brand: '国产', origin: '国产', spec: '0.25g×24粒/盒', perDose: '0.5g', times: ['早饭后', '晚饭后'] },
    { id: 'pudilan-ton', generic: '蒲地蓝消炎口服液', brand: '济川', origin: '国产', spec: '10ml×12支/盒', perDose: '10ml', times: ['早饭后', '午饭前', '晚饭后'] }
  ],
  bipolar: [
    { id: 'lithium', generic: '碳酸锂', brand: '国产', origin: '国产', spec: '0.25g×100片/瓶', perDose: '0.25g', times: ['早饭后', '晚饭后'] },
    { id: 'quetiapine', generic: '富马酸喹硫平', brand: '思瑞康', origin: '进口', spec: '0.2g×20片/盒', perDose: '0.1g', times: ['睡前'] },
    { id: 'olanzapine', generic: '奥氮平', brand: '再普乐', origin: '进口', spec: '5mg×28片/盒', perDose: '5mg', times: ['睡前'] }
  ],
  ocd: [
    { id: 'fluvoxamine', generic: '氟伏沙明', brand: '兰释', origin: '进口', spec: '50mg×30片/盒', perDose: '50mg', times: ['睡前'] },
    { id: 'clomipramine', generic: '氯米帕明', brand: '安拿芬尼', origin: '进口', spec: '25mg×50片/盒', perDose: '25mg', times: ['早饭后', '晚饭后'] }
  ],
  endometriosis: [
    { id: 'dienogest', generic: '地诺孕素', brand: '唯散宁', origin: '进口', spec: '2mg×28片/盒', perDose: '2mg', times: ['睡前'] }
  ],
  'irregular-menses': [
    { id: 'yimucao-im', generic: '益母草颗粒', brand: '国产', origin: '国产', spec: '15g×10袋/盒', perDose: '15g', times: ['早饭后', '晚饭后'] },
    { id: 'progesterone', generic: '黄体酮胶囊', brand: '国产', origin: '国产', spec: '100mg×10粒/盒', perDose: '100mg', times: ['睡前'] }
  ],
  vaginitis: [
    { id: 'clotrimazole', generic: '克霉唑栓', brand: '国产', origin: '国产', spec: '0.15g×10枚/盒', perDose: '1枚', times: ['睡前'] },
    { id: 'metronidazole-vg', generic: '甲硝唑栓', brand: '国产', origin: '国产', spec: '0.5g×10枚/盒', perDose: '1枚', times: ['睡前'] }
  ],
  prostatitis: [
    { id: 'levofloxacin-pro', generic: '左氧氟沙星', brand: '可乐必妥', origin: '进口', spec: '0.5g×4片/盒', perDose: '0.5g', times: ['早饭后'] },
    { id: 'tamsulosin-pro', generic: '坦索罗辛', brand: '哈乐', origin: '进口', spec: '0.2mg×10粒/盒', perDose: '0.2mg', times: ['睡前'] },
    { id: 'qianlieshu-pro', generic: '前列舒通胶囊', brand: '国产', origin: '国产', spec: '0.4g×36粒/盒', perDose: '1.2g', times: ['早饭后', '晚饭后'] }
  ],
  'lumbar-hernia': [
    { id: 'yaotongning', generic: '腰痛宁胶囊', brand: '国产', origin: '国产', spec: '0.3g×24粒/盒', perDose: '0.9g', times: ['睡前'] },
    { id: 'mecobalamin-lh', generic: '甲钴胺', brand: '弥可保', origin: '进口', spec: '0.5mg×20片/盒', perDose: '0.5mg', times: ['早饭后', '晚饭后'] }
  ],
  'frozen-shoulder': [
    { id: 'celecoxib-fs', generic: '塞来昔布', brand: '西乐葆', origin: '进口', spec: '0.2g×6粒/盒', perDose: '0.2g', times: ['早饭后', '晚饭后'] }
  ],
  tenosynovitis: [
    { id: 'diclofenac-ten', generic: '双氯芬酸二乙胺乳胶', brand: '扶他林', origin: '进口', spec: '1%×20g/支', perDose: '适量外涂', times: ['早饭后', '晚饭后'] }
  ],
  meniscus: [
    { id: 'glucosamine-men', generic: '硫酸氨基葡萄糖', brand: '维固力', origin: '进口', spec: '250mg×20粒/盒', perDose: '500mg', times: ['早饭后', '晚饭后'] }
  ],
  'senile-constipation': [
    { id: 'lactulose-sc', generic: '乳果糖口服液', brand: '国产', origin: '国产', spec: '10ml×10支/盒', perDose: '15ml', times: ['早饭前'] },
    { id: 'maren', generic: '麻仁润肠丸', brand: '同仁堂', origin: '国产', spec: '9g×10丸/盒', perDose: '9g', times: ['早饭后', '晚饭后'] }
  ],
  prediabetes: [
    { id: 'metformin-pre', generic: '二甲双胍', brand: '格华止', origin: '进口', spec: '0.5g×20片/盒', perDose: '0.5g', times: ['早饭前', '晚饭前'] },
    { id: 'acarbose-pre', generic: '阿卡波糖', brand: '拜唐苹', origin: '进口', spec: '50mg×30片/盒', perDose: '50mg', times: ['早饭前', '午饭前', '晚饭前'] }
  ],
  'hp-infection': [
    { id: 'omeprazole-hp', generic: '奥美拉唑', brand: '洛赛克', origin: '进口', spec: '20mg×14片/盒', perDose: '20mg', times: ['早饭前', '晚饭前'] },
    { id: 'amoxicillin-hp', generic: '阿莫西林', brand: '国产', origin: '国产', spec: '0.25g×24粒/盒', perDose: '1g', times: ['早饭后', '晚饭后'] },
    { id: 'clarithromycin-hp', generic: '克拉霉素', brand: '克拉仙', origin: '进口', spec: '0.25g×8片/盒', perDose: '0.5g', times: ['早饭后', '晚饭后'] },
    { id: 'bismuth-hp', generic: '枸橼酸铋钾', brand: '丽珠得乐', origin: '国产', spec: '0.3g×40粒/盒', perDose: '0.6g', times: ['早饭后', '晚饭后'] }
  ],
  'b12-def': [
    { id: 'mecobalamin-b12', generic: '甲钴胺', brand: '弥可保', origin: '进口', spec: '0.5mg×20片/盒', perDose: '0.5mg', times: ['早饭后', '晚饭后'] }
  ],
  hcy: [
    { id: 'folic-hcy', generic: '叶酸片', brand: '国产', origin: '国产', spec: '5mg×100片/瓶', perDose: '5mg', times: ['早饭后'] },
    { id: 'b6-hcy', generic: '维生素B6片', brand: '国产', origin: '国产', spec: '10mg×100片/瓶', perDose: '10mg', times: ['早饭后'] }
  ],
  'pituitary-adenoma': [
    { id: 'bromocriptine', generic: '溴隐亭', brand: '国产', origin: '国产', spec: '2.5mg×30片/盒', perDose: '2.5mg', times: ['早饭后', '晚饭后'] }
  ],
  'hemifacial-spasm': [
    { id: 'carbamazepine-hs', generic: '卡马西平', brand: '得理多', origin: '进口', spec: '0.2g×30片/盒', perDose: '0.1g', times: ['早饭后', '晚饭后'] }
  ],
  'tbi-sequela': [
    { id: 'naoxintong-tbi', generic: '脑心通胶囊', brand: '步长', origin: '国产', spec: '0.4g×36粒/盒', perDose: '1.2g', times: ['早饭后', '晚饭后'] }
  ],
  valvular: [
    { id: 'warfarin-val', generic: '华法林钠', brand: '国产', origin: '国产', spec: '2.5mg×60片/瓶', perDose: '2.5mg', times: ['晚饭后'] }
  ],
  appendicitis: [
    { id: 'cefuroxime-app', generic: '头孢呋辛酯', brand: '西力欣', origin: '进口', spec: '0.25g×12片/盒', perDose: '0.25g', times: ['早饭后', '晚饭后'] }
  ],
  hemorrhoids: [
    { id: 'mayinglong', generic: '马应龙麝香痔疮膏', brand: '马应龙', origin: '国产', spec: '10g/支', perDose: '适量外用', times: ['早饭后', '晚饭后'] },
    { id: 'diosmin-hem', generic: '地奥司明片', brand: '国产', origin: '国产', spec: '0.45g×20片/盒', perDose: '0.9g', times: ['早饭后', '晚饭后'] }
  ],
  'anal-fissure': [
    { id: 'maren-af', generic: '麻仁润肠丸', brand: '同仁堂', origin: '国产', spec: '9g×10丸/盒', perDose: '9g', times: ['早饭后', '晚饭后'] }
  ]
}