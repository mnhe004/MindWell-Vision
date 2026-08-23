import type { Disease } from './departments'

// 子疾病：大类疾病下的具体分型（parentId 指向父疾病）
export const subDiseases: Disease[] = [
  // —— 肾内科：慢性肾小球肾炎 的 具体分型 ——
  { id: 'iga-nephritis', name: 'IGA肾病', deptId: 'nephro', parentId: 'cgn', aliases: ['IgA肾炎'],
    symptoms: ['感染后肉眼血尿', '泡沫尿', '血压升高', '腰痛'],
    diagnosis: ['尿常规（血尿/蛋白尿）', '肾穿刺活检（IgA免疫复合物沉积）'],
    tips: '避免上呼吸道感染；定期复查尿常规与肾功能。',
    drugs: [
      { id: 'vals-iga', generic: '缬沙坦', brand: '代文', origin: '进口', spec: '80mg×7粒/盒', perDose: '80mg', times: ['早饭后'] },
      { id: 'pred-iga', generic: '泼尼松', brand: '国产', origin: '国产', spec: '5mg×100片/盒', perDose: '按医嘱', times: ['早饭后'] }
    ] },
  { id: 'membranous-neph', name: '膜性肾病', deptId: 'nephro', parentId: 'cgn', aliases: ['膜性肾小球肾炎'],
    symptoms: ['大量蛋白尿', '全身水肿', '乏力'],
    diagnosis: ['24小时尿蛋白定量', '肾穿刺（抗磷脂酶A2受体抗体阳性）'],
    tips: '低盐优质蛋白饮食；监测尿量体重。',
    drugs: [
      { id: 'pred-mn', generic: '泼尼松', brand: '国产', origin: '国产', spec: '5mg×100片/盒', perDose: '按医嘱', times: ['早饭后'] },
      { id: 'cyc-mn', generic: '环磷酰胺', brand: '国产', origin: '国产', spec: '50mg×100片/盒', perDose: '按医嘱', times: ['早饭后'] }
    ] },
  { id: 'minimal-change', name: '微小病变型肾病', deptId: 'nephro', parentId: 'cgn', aliases: ['微小病变'],
    symptoms: ['大量蛋白尿', '高度水肿', '腹水'],
    diagnosis: ['24小时尿蛋白', '肾穿刺活检'],
    tips: '对激素敏感，规范治疗预后较好。',
    drugs: [
      { id: 'pred-mc', generic: '泼尼松', brand: '国产', origin: '国产', spec: '5mg×100片/盒', perDose: '按医嘱', times: ['早饭后'] }
    ] },
  { id: 'fsgs', name: '局灶节段性肾小球硬化', deptId: 'nephro', parentId: 'cgn', aliases: ['FSGS'],
    symptoms: ['蛋白尿', '水肿', '肾功能进行性下降'],
    diagnosis: ['肾穿刺活检', '肾功能监测'],
    tips: '控制血压、延缓进展，规范免疫治疗。',
    drugs: [
      { id: 'tacro', generic: '他克莫司', brand: '普乐可复', origin: '进口', spec: '0.5mg×50粒/盒', perDose: '按医嘱', times: ['早饭后', '晚饭后'] },
      { id: 'pred-fsgs', generic: '泼尼松', brand: '国产', origin: '国产', spec: '5mg×100片/盒', perDose: '按医嘱', times: ['早饭后'] }
    ] },
  { id: 'lupus-nephritis', name: '狼疮性肾炎', deptId: 'nephro', parentId: 'cgn', aliases: ['SLE肾病'],
    symptoms: ['面部蝶形红斑', '蛋白尿/血尿', '关节痛', '发热'],
    diagnosis: ['抗核抗体/抗dsDNA', '肾穿刺活检'],
    tips: '严格防晒、避免感染；风湿+肾内联合随访。',
    drugs: [
      { id: 'pred-ln', generic: '泼尼松', brand: '国产', origin: '国产', spec: '5mg×100片/盒', perDose: '按医嘱', times: ['早饭后'] },
      { id: 'mmf-ln', generic: '吗替麦考酚酯', brand: '骁悉', origin: '进口', spec: '250mg×40粒/盒', perDose: '500mg', times: ['早饭后', '晚饭后'] }
    ] },
  { id: 'henoch-nephritis', name: '紫癜性肾炎', deptId: 'nephro', parentId: 'cgn', aliases: ['过敏性紫癜肾炎'],
    symptoms: ['双下肢紫癜', '腹痛关节痛', '血尿蛋白尿'],
    diagnosis: ['临床+尿常规', '必要时肾穿刺'],
    tips: '卧床休息、避免过敏原；监测尿常规。',
    drugs: [
      { id: 'pred-hn', generic: '泼尼松', brand: '国产', origin: '国产', spec: '5mg×100片/盒', perDose: '按医嘱', times: ['早饭后'] }
    ] },
  { id: 'diabetic-nephropathy', name: '糖尿病肾病', deptId: 'nephro', parentId: 'cgn', aliases: ['DN'],
    symptoms: ['泡沫尿', '水肿', '血压升高', '夜尿增多'],
    diagnosis: ['尿微量白蛋白/肌酐比', '肾功能（eGFR）'],
    tips: '严格控制血糖血压；早期干预可延缓进展。',
    drugs: [
      { id: 'vals-dn', generic: '缬沙坦', brand: '代文', origin: '进口', spec: '80mg×7粒/盒', perDose: '80mg', times: ['早饭后'] },
      { id: 'dapa-dn', generic: '达格列净', brand: '安达唐', origin: '进口', spec: '10mg×14片/盒', perDose: '10mg', times: ['早饭前'] }
    ] },
  { id: 'hypertensive-nephropathy', name: '高血压肾损害', deptId: 'nephro', parentId: 'cgn', aliases: ['高血压肾病'],
    symptoms: ['夜尿增多', '泡沫尿', '血压长期偏高'],
    diagnosis: ['肾功能', '尿常规', '肾脏超声'],
    tips: '严格控制血压（<130/80），低盐饮食。',
    drugs: [
      { id: 'vals-hn', generic: '缬沙坦', brand: '代文', origin: '进口', spec: '80mg×7粒/盒', perDose: '80mg', times: ['早饭后'] },
      { id: 'amlod-hn', generic: '苯磺酸氨氯地平', brand: '络活喜', origin: '进口', spec: '5mg×7片/盒', perDose: '5mg', times: ['早饭后'] }
    ] },

  // —— 内分泌：糖尿病 / 甲减 的 分型 ——
  { id: 'lada', name: 'LADA（成人隐匿性自身免疫糖尿病）', deptId: 'endocrine', parentId: 't2dm', aliases: ['成人晚发1型糖尿病'],
    symptoms: ['起病年龄偏大（30-50岁）', '体型多不胖', '口服降糖药较快失效'],
    diagnosis: ['谷氨酸脱羧酶抗体(GADA)阳性', '胰岛功能（C肽偏低）'],
    tips: '早期评估胰岛功能，必要时尽早胰岛素治疗。',
    drugs: [
      { id: 'glar-lada', generic: '甘精胰岛素', brand: '来得时', origin: '进口', spec: '300IU/3ml预充笔', perDose: '按医嘱', times: ['睡前'] }
    ] },
  { id: 'hashimoto', name: '桥本甲状腺炎', deptId: 'endocrine', parentId: 'hypothy', aliases: ['桥本病'],
    symptoms: ['甲状腺弥漫性肿大', '乏力嗜睡', '甲减相关表现'],
    diagnosis: ['甲状腺过氧化物酶抗体(TPOAb)阳性', '甲状腺彩超'],
    tips: '定期复查甲功；必要时补充左甲状腺素。',
    drugs: [
      { id: 'lt4-hash', generic: '左甲状腺素钠', brand: '优甲乐', origin: '进口', spec: '50μg×100片/盒', perDose: '50μg', times: ['醒来'] }
    ] },
  { id: 'tophaceous-gout', name: '痛风石', deptId: 'endocrine', parentId: 'gout', aliases: ['痛风结节'],
    symptoms: ['关节周围皮下结节', '关节畸形', '反复关节痛'],
    diagnosis: ['关节超声', '关节液尿酸盐结晶'],
    tips: '长期降尿酸达标（<360μmol/L），结节可逐渐缩小。',
    drugs: [
      { id: 'febux-tg', generic: '非布司他', brand: '优立通', origin: '国产', spec: '40mg×14片/盒', perDose: '40mg', times: ['早饭后'] }
    ] },

  // —— 心血管：高血压 / 冠心病 的 分型 ——
  { id: 'renal-htn', name: '肾性高血压', deptId: 'cardio', parentId: 'htn', aliases: ['肾实质高血压'],
    symptoms: ['血压顽固升高', '夜尿多', '水肿', '泡沫尿'],
    diagnosis: ['肾功能+尿常规', '肾脏超声', '排除肾动脉狭窄'],
    tips: '控制血压同时治疗原发肾病；低盐饮食。',
    drugs: [
      { id: 'vals-rh', generic: '缬沙坦', brand: '代文', origin: '进口', spec: '80mg×7粒/盒', perDose: '80mg', times: ['早饭后'] },
      { id: 'amlod-rh', generic: '苯磺酸氨氯地平', brand: '络活喜', origin: '进口', spec: '5mg×7片/盒', perDose: '5mg', times: ['早饭后'] }
    ] },
  { id: 'endocrine-htn', name: '内分泌性高血压', deptId: 'cardio', parentId: 'htn', aliases: ['继发性高血压'],
    symptoms: ['难治性高血压', '低血钾', '心悸出汗', '阵发性血压升高'],
    diagnosis: ['醛固酮/肾素比值', '皮质醇/儿茶酚胺', '肾上腺CT'],
    tips: '明确病因后针对性治疗；年轻顽固高血压需排查。',
    drugs: [
      { id: 'spiron-eh', generic: '螺内酯', brand: '安体舒通', origin: '国产', spec: '20mg×100片/盒', perDose: '20mg', times: ['早饭后'] }
    ] },
  { id: 'pregnancy-htn', name: '妊娠期高血压', deptId: 'cardio', parentId: 'htn', aliases: ['妊高征'],
    symptoms: ['孕中晚期血压升高', '水肿', '蛋白尿'],
    diagnosis: ['血压监测', '尿蛋白', '产科评估'],
    tips: '规律产检、监测血压；遵产科医嘱用药。',
    drugs: [
      { id: 'methyldopa', generic: '甲基多巴', brand: '国产', origin: '国产', spec: '250mg×100片/盒', perDose: '250mg', times: ['早饭后', '晚饭后'] }
    ] },
  { id: 'stable-angina', name: '稳定型心绞痛', deptId: 'cardio', parentId: 'chd', aliases: ['劳力性心绞痛'],
    symptoms: ['活动后胸痛', '休息可缓解', '心前区压榨感'],
    diagnosis: ['心电图（运动负荷）', '冠脉CTA', '冠脉造影'],
    tips: '规律服药、避免剧烈活动；随身携带硝酸甘油。',
    drugs: [
      { id: 'asa-sa', generic: '阿司匹林', brand: '拜阿司匹灵', origin: '进口', spec: '100mg×30片/盒', perDose: '100mg', times: ['早饭后'] },
      { id: 'nitro-sa', generic: '硝酸甘油', brand: '国产', origin: '国产', spec: '0.5mg×100片/瓶', perDose: '0.5mg', times: ['早饭后'] },
      { id: 'metop-sa', generic: '美托洛尔', brand: '倍他乐克', origin: '进口', spec: '25mg×20片/盒', perDose: '25mg', times: ['早饭后'] }
    ] },
  { id: 'mi', name: '心肌梗死', deptId: 'cardio', parentId: 'chd', aliases: ['急性心梗'],
    symptoms: ['持续剧烈胸痛>30分钟', '大汗', '濒死感', '恶心'],
    diagnosis: ['心电图（ST段抬高）', '肌钙蛋白升高'],
    tips: '胸痛持续不缓解立即拨打120；黄金救治时间窗。',
    drugs: [
      { id: 'asa-mi', generic: '阿司匹林', brand: '拜阿司匹灵', origin: '进口', spec: '100mg×30片/盒', perDose: '300mg', times: ['早饭后'] },
      { id: 'clopid-mi', generic: '氯吡格雷', brand: '波立维', origin: '进口', spec: '75mg×7片/盒', perDose: '75mg', times: ['早饭后'] },
      { id: 'atorva-mi', generic: '阿托伐他汀', brand: '立普妥', origin: '进口', spec: '20mg×7片/盒', perDose: '20mg', times: ['睡前'] }
    ] },

  // —— 呼吸：肺炎 分型 ——
  { id: 'viral-pneumonia', name: '病毒性肺炎', deptId: 'resp', parentId: 'pneumonia', aliases: ['流感病毒肺炎'],
    symptoms: ['高热', '干咳', '肌痛乏力', '呼吸困难'],
    diagnosis: ['病毒核酸检测', '胸部CT'],
    tips: '休息、氧疗；抗病毒治疗（流感48小时内）。',
    drugs: [
      { id: 'oseltamivir-vp', generic: '奥司他韦', brand: '达菲', origin: '进口', spec: '75mg×10粒/盒', perDose: '75mg', times: ['早饭后', '晚饭后'] }
    ] },
  { id: 'fungal-pneumonia', name: '真菌性肺炎', deptId: 'resp', parentId: 'pneumonia', aliases: ['肺曲霉病'],
    symptoms: ['发热', '咳血丝痰', '胸闷', '免疫低下人群多见'],
    diagnosis: ['胸部CT', '真菌培养/血清学', '支气管镜'],
    tips: '规范抗真菌治疗（如伏立康唑）。',
    drugs: [
      { id: 'voriconazole', generic: '伏立康唑', brand: '威凡', origin: '进口', spec: '200mg×14片/盒', perDose: '200mg', times: ['早饭后', '晚饭后'] }
    ] },

  // —— 消化：胃炎 / 溃疡 分型 ——
  { id: 'atrophic-gastritis', name: '萎缩性胃炎', deptId: 'gastro', parentId: 'gastritis', aliases: ['慢性萎缩性胃炎'],
    symptoms: ['上腹隐痛', '食欲减退', '贫血', '消瘦'],
    diagnosis: ['胃镜+活检（萎缩/肠化）', '幽门螺杆菌检测'],
    tips: '定期胃镜随访；根除幽门螺杆菌。',
    drugs: [
      { id: 'omep-ag', generic: '奥美拉唑', brand: '洛赛克', origin: '进口', spec: '20mg×14片/盒', perDose: '20mg', times: ['早饭前'] },
      { id: 'b12-ag', generic: '甲钴胺', brand: '弥可保', origin: '进口', spec: '0.5mg×20片/盒', perDose: '0.5mg', times: ['早饭后'] }
    ] },
  { id: 'gastric-ulcer', name: '胃溃疡', deptId: 'gastro', parentId: 'pud', aliases: ['GU'],
    symptoms: ['餐后上腹痛', '反酸烧心', '黑便'],
    diagnosis: ['胃镜', '幽门螺杆菌检测'],
    tips: '规律三餐、戒烟酒；规范PPI疗程。',
    drugs: [
      { id: 'omep-gu', generic: '奥美拉唑', brand: '洛赛克', origin: '进口', spec: '20mg×14片/盒', perDose: '20mg', times: ['早饭前', '晚饭前'] },
      { id: 'hydrotal-gu', generic: '铝碳酸镁', brand: '达喜', origin: '进口', spec: '0.5g×20片/盒', perDose: '0.5g', times: ['早饭后', '晚饭后'] }
    ] },
  { id: 'duodenal-ulcer', name: '十二指肠溃疡', deptId: 'gastro', parentId: 'pud', aliases: ['DU'],
    symptoms: ['空腹痛/夜间痛', '进食后缓解', '反酸'],
    diagnosis: ['胃镜', '幽门螺杆菌检测'],
    tips: '规律用药、复查呼气试验。',
    drugs: [
      { id: 'rabe-du', generic: '雷贝拉唑', brand: '波利特', origin: '进口', spec: '10mg×7片/盒', perDose: '10mg', times: ['早饭前'] }
    ] },

  // —— 神经：头痛 分型 ——
  { id: 'tension-headache', name: '紧张型头痛', deptId: 'neuro', parentId: 'migraine', aliases: ['肌紧张性头痛'],
    symptoms: ['双侧压迫性头痛', '头部紧箍感', '颈肩紧张', '程度轻中度'],
    diagnosis: ['临床病史（头痛日记）', '排除器质性病变'],
    tips: '放松训练、规律作息；避免长时间低头。',
    drugs: [
      { id: 'ibu-th', generic: '布洛芬', brand: '芬必得', origin: '国产', spec: '0.3g×20粒/盒', perDose: '0.3g', times: ['早饭后'] },
      { id: 'eperisone-th', generic: '乙哌立松', brand: '妙纳', origin: '进口', spec: '50mg×20片/盒', perDose: '50mg', times: ['早饭后', '晚饭后'] }
    ] },
  { id: 'cluster-headache', name: '丛集性头痛', deptId: 'neuro', parentId: 'migraine', aliases: ['丛集头痛'],
    symptoms: ['单侧眼眶剧烈疼痛', '伴流泪流涕', '定时发作'],
    diagnosis: ['典型发作史', '头颅MRI排除'],
    tips: '发作期氧疗可缓解；避免饮酒。',
    drugs: [
      { id: 'sumatr-ch', generic: '舒马普坦', brand: '英明格', origin: '进口', spec: '50mg×2片/盒', perDose: '50mg', times: ['早饭后'] }
    ] },

  // —— 感染：肝炎 分型 ——
  { id: 'hcv', name: '丙型肝炎', deptId: 'inf', parentId: 'chb', aliases: ['丙肝'],
    symptoms: ['多无症状', '乏力', '转氨酶升高'],
    diagnosis: ['丙肝抗体', 'HCV-RNA'],
    tips: '口服抗病毒药物可治愈（DAA）。',
    drugs: [
      { id: 'sofosbuvir', generic: '索磷布韦', brand: '索华迪', origin: '进口', spec: '400mg×28片/盒', perDose: '400mg', times: ['早饭后'] }
    ] },
  { id: 'hav', name: '甲型肝炎', deptId: 'inf', parentId: 'chb', aliases: ['甲肝'],
    symptoms: ['发热', '乏力', '黄疸', '食欲减退'],
    diagnosis: ['甲肝抗体IgM', '肝功能'],
    tips: '注意饮食卫生；多为自限性，保肝治疗。',
    drugs: [
      { id: 'epl-hav', generic: '多烯磷脂酰胆碱', brand: '易善复', origin: '进口', spec: '228mg×24粒/盒', perDose: '228mg', times: ['早饭后', '晚饭后'] }
    ] },
  { id: 'aih', name: '自身免疫性肝炎', deptId: 'inf', parentId: 'chb', aliases: ['AIH'],
    symptoms: ['乏力', '黄疸', '转氨酶持续升高'],
    diagnosis: ['自身抗体（ANA/SMA）', '肝活检'],
    tips: '规范免疫抑制治疗、长期随访。',
    drugs: [
      { id: 'pred-aih', generic: '泼尼松', brand: '国产', origin: '国产', spec: '5mg×100片/盒', perDose: '按医嘱', times: ['早饭后'] },
      { id: 'azathioprine-aih', generic: '硫唑嘌呤', brand: '依木兰', origin: '进口', spec: '50mg×100片/盒', perDose: '50mg', times: ['早饭后'] }
    ] },

  // —— 骨科：骨关节炎 分型 ——
  { id: 'knee-oa', name: '膝关节骨关节炎', deptId: 'ortho', parentId: 'oa', aliases: ['膝骨关节病'],
    symptoms: ['膝痛（上下楼加重）', '晨僵<30分钟', '膝关节活动受限'],
    diagnosis: ['X线（关节间隙变窄）', '必要时MRI'],
    tips: '控制体重、股四头肌锻炼；避免深蹲爬山。',
    drugs: [
      { id: 'celecox-koa', generic: '塞来昔布', brand: '西乐葆', origin: '进口', spec: '0.2g×6粒/盒', perDose: '0.2g', times: ['早饭后', '晚饭后'] },
      { id: 'glucos-koa', generic: '硫酸氨基葡萄糖', brand: '维固力', origin: '进口', spec: '250mg×20粒/盒', perDose: '500mg', times: ['早饭后', '晚饭后'] }
    ] },

  // —— 皮肤：湿疹 分型 ——
  { id: 'contact-dermatitis', name: '接触性皮炎', deptId: 'derm', parentId: 'eczema', aliases: ['接触过敏'],
    symptoms: ['接触部位红斑', '水疱', '瘙痒灼热'],
    diagnosis: ['接触史+典型皮损', '斑贴试验'],
    tips: '避免接触过敏原；急性期冷湿敷。',
    drugs: [
      { id: 'desonide-cd', generic: '地奈德乳膏', brand: '力言卓', origin: '国产', spec: '0.05%×15g/支', perDose: '适量外用', times: ['早饭后', '晚饭后'] },
      { id: 'lorat-cd', generic: '氯雷他定', brand: '开瑞坦', origin: '进口', spec: '10mg×6片/盒', perDose: '10mg', times: ['睡前'] }
    ] }
]