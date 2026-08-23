export interface CatalogDrug {
  id: string
  generic: string
  brand: string
  origin: '国产' | '进口'
  spec: string
  specs?: string[]
  perDose: string
  times: string[]
}

export interface Disease {
  id: string
  name: string
  deptId: string
  parentId?: string
  aliases: string[]
  symptoms: string[]
  diagnosis: string[]
  tips: string
  drugs: CatalogDrug[]
}

export interface Department {
  id: string
  name: string
  color: string
  emoji: string
  diseases: Disease[]
}

export const departments: Department[] = [
  {
    id: 'endocrine', name: '内分泌科', color: '#1DB39F', emoji: '🫀',
    diseases: [
      {
        id: 't2dm', name: '2型糖尿病', deptId: 'endocrine', aliases: ['糖尿病', 'T2DM'],
        symptoms: ['多饮、多尿、多食', '无明显诱因的体重下降', '乏力、易疲劳', '视物模糊', '伤口愈合缓慢', '手脚麻木或刺痛'],
        diagnosis: ['空腹血糖 ≥ 7.0 mmol/L', '口服葡萄糖耐量试验(OGTT)2小时血糖 ≥ 11.1 mmol/L', '糖化血红蛋白(HbA1c) ≥ 6.5%', '随机血糖 ≥ 11.1 mmol/L 伴典型症状'],
        tips: '低GI饮食、规律运动、监测血糖；每3个月复查糖化血红蛋白。',
        drugs: [
          { id: 'met-xr', generic: '二甲双胍', brand: '格华止', origin: '进口', spec: '0.5g×20片/盒', perDose: '0.5g', times: ['早饭前', '晚饭前'] },
          { id: 'met-cn', generic: '二甲双胍缓释片', brand: '国产普通', origin: '国产', spec: '0.5g×30片/盒', perDose: '0.5g', times: ['早饭前', '晚饭前'] },
          { id: 'glime', generic: '格列美脲', brand: '亚莫利', origin: '进口', spec: '2mg×15片/盒', perDose: '2mg', times: ['早饭前'] },
          { id: 'acar', generic: '阿卡波糖', brand: '拜唐苹', origin: '进口', spec: '50mg×30片/盒', perDose: '50mg', times: ['早饭前', '午饭前', '晚饭前'] },
          { id: 'dapa', generic: '达格列净', brand: '安达唐', origin: '进口', spec: '10mg×14片/盒', perDose: '10mg', times: ['早饭前'] },
          { id: 'empa', generic: '恩格列净', brand: '欧唐静', origin: '进口', spec: '10mg×10片/盒', perDose: '10mg', times: ['早饭前'] },
          { id: 'sita', generic: '西格列汀', brand: '捷诺维', origin: '进口', spec: '100mg×7片/盒', perDose: '100mg', times: ['早饭前'] },
          { id: 'lira', generic: '利拉鲁肽', brand: '诺和力', origin: '进口', spec: '18mg/3ml预充笔', perDose: '0.6mg起', times: ['早饭前'] },
          { id: 'glar', generic: '甘精胰岛素', brand: '来得时', origin: '进口', spec: '300IU/3ml预充笔', perDose: '10IU', times: ['睡前'] },
          { id: 'aspart', generic: '门冬胰岛素', brand: '诺和锐', origin: '进口', spec: '300IU/3ml预充笔', perDose: '4IU', times: ['早饭后', '午饭后', '晚饭后'] }
        ]
      },
      {
        id: 'hypothy', name: '甲状腺功能减退', deptId: 'endocrine', aliases: ['甲减'],
        symptoms: ['畏寒、怕冷', '乏力、嗜睡', '体重增加、水肿', '皮肤干燥、脱发', '记忆力下降', '便秘'],
        diagnosis: ['血清TSH升高、FT4降低', '甲状腺过氧化物酶抗体(TPOAb)阳性提示桥本'],
        tips: '优甲乐需清晨空腹服用，与早餐间隔30分钟以上；定期复查甲功。',
        drugs: [
          { id: 'lt4-euthyrox', generic: '左甲状腺素钠', brand: '优甲乐', origin: '进口', spec: '50μg×100片/盒', perDose: '50μg', times: ['醒来'] },
          { id: 'lt4-letrox', generic: '左甲状腺素钠', brand: '雷替斯', origin: '国产', spec: '50μg×100片/盒', perDose: '50μg', times: ['醒来'] },
          { id: 'thyroid-tab', generic: '甲状腺片', brand: '国产', origin: '国产', spec: '40mg×100片/盒', perDose: '40mg', times: ['早饭前'] }
        ]
      },
      {
        id: 'hyperthy', name: '甲状腺功能亢进', deptId: 'endocrine', aliases: ['甲亢'],
        symptoms: ['怕热、多汗', '心悸、手抖', '食欲亢进但体重下降', '情绪易激动、失眠', '眼球突出'],
        diagnosis: ['血清TSH降低、FT3/FT4升高', '甲状腺自身抗体与甲状腺彩超'],
        tips: '低碘饮食，避免海带紫菜；定期复查血常规与肝功能。',
        drugs: [
          { id: 'mmi', generic: '甲巯咪唑', brand: '赛治', origin: '进口', spec: '10mg×50片/盒', perDose: '10mg', times: ['早饭前', '晚饭前'] },
          { id: 'ptu', generic: '丙硫氧嘧啶', brand: '国产', origin: '国产', spec: '50mg×100片/盒', perDose: '50mg', times: ['早饭前', '午饭前', '晚饭前'] },
          { id: 'prop-hyper', generic: '普萘洛尔', brand: '心得安', origin: '国产', spec: '10mg×100片/盒', perDose: '10mg', times: ['早饭后', '午饭后', '晚饭后'] }
        ]
      },
      {
        id: 'hyperlipid', name: '高脂血症', deptId: 'endocrine', aliases: ['血脂异常'],
        symptoms: ['通常无明显症状', '头晕、乏力', '眼睑黄色瘤', '体检发现血脂升高'],
        diagnosis: ['空腹血脂：总胆固醇、甘油三酯、LDL-C升高', '动脉粥样硬化风险评估'],
        tips: '低脂饮食、增加膳食纤维；他汀类通常晚间服用。',
        drugs: [
          { id: 'atorva', generic: '阿托伐他汀', brand: '立普妥', origin: '进口', spec: '20mg×7片/盒', perDose: '20mg', times: ['睡前'] },
          { id: 'rosuva', generic: '瑞舒伐他汀', brand: '可定', origin: '进口', spec: '10mg×7片/盒', perDose: '10mg', times: ['睡前'] },
          { id: 'simva', generic: '辛伐他汀', brand: '舒降之', origin: '进口', spec: '20mg×7片/盒', perDose: '20mg', times: ['睡前'] },
          { id: 'fenof', generic: '非诺贝特', brand: '力平之', origin: '进口', spec: '200mg×10粒/盒', perDose: '200mg', times: ['晚饭后'] },
          { id: 'ezetim', generic: '依折麦布', brand: '益适纯', origin: '进口', spec: '10mg×10片/盒', perDose: '10mg', times: ['晚饭后'] },
          { id: 'prava', generic: '普伐他汀', brand: '普拉固', origin: '进口', spec: '20mg×7片/盒', perDose: '20mg', times: ['睡前'] }
        ]
      },
      {
        id: 'gout', name: '痛风 / 高尿酸血症', deptId: 'endocrine', aliases: ['痛风'],
        symptoms: ['关节红肿热痛（常见大脚趾）', '夜间突发剧痛', '关节活动受限', '血尿酸升高'],
        diagnosis: ['血尿酸 > 420 μmol/L', '关节液中发现尿酸盐结晶', '典型发作史与影像学'],
        tips: '低嘌呤饮食、戒酒、多饮水（每日2000ml以上）。',
        drugs: [
          { id: 'febux', generic: '非布司他', brand: '优立通', origin: '国产', spec: '40mg×14片/盒', perDose: '40mg', times: ['早饭后'] },
          { id: 'allop', generic: '别嘌醇', brand: '国产', origin: '国产', spec: '100mg×100片/盒', perDose: '100mg', times: ['早饭后'] },
          { id: 'benzbr', generic: '苯溴马隆', brand: '立加利仙', origin: '进口', spec: '50mg×10片/盒', perDose: '50mg', times: ['早饭后'] },
          { id: 'colch', generic: '秋水仙碱', brand: '国产', origin: '国产', spec: '0.5mg×20片/盒', perDose: '0.5mg', times: ['早饭后', '晚饭后'] }
        ]
      },
      {
        id: 'osteoporosis', name: '骨质疏松', deptId: 'endocrine', aliases: ['骨量减少'],
        symptoms: ['腰背酸痛', '身高变矮、驼背', '轻微外力即骨折', '抽筋'],
        diagnosis: ['双能X线骨密度(DXA) T值 ≤ -2.5', '骨代谢标志物检查'],
        tips: '补钙 + 维生素D，负重运动，防跌倒。',
        drugs: [
          { id: 'alend', generic: '阿仑膦酸钠', brand: '福善美', origin: '进口', spec: '70mg×4片/盒', perDose: '70mg', times: ['醒来'] },
          { id: 'caltrate', generic: '碳酸钙D3', brand: '钙尔奇D', origin: '进口', spec: '600mg×60片/盒', perDose: '600mg', times: ['早饭后', '晚饭后'] },
          { id: 'calcitriol', generic: '骨化三醇', brand: '罗盖全', origin: '进口', spec: '0.25μg×10粒/盒', perDose: '0.25μg', times: ['早饭前'] },
          { id: 'zoled', generic: '唑来膦酸', brand: '密固达', origin: '进口', spec: '5mg/100ml注射液', perDose: '5mg', times: ['早饭后'] }
        ]
      }
    ]
  },
  {
    id: 'cardio', name: '心血管内科', color: '#F78F6E', emoji: '❤️',
    diseases: [
      {
        id: 'htn', name: '高血压', deptId: 'cardio', aliases: ['原发性高血压'],
        symptoms: ['头晕、头痛', '后颈部僵硬感', '心悸', '耳鸣', '多数患者可无明显症状'],
        diagnosis: ['非同日3次诊室血压 ≥ 140/90 mmHg', '24小时动态血压监测', '排除继发性高血压'],
        tips: '低盐饮食（<5g/日）、规律作息、家庭自测血压并记录。',
        drugs: [
          { id: 'amlod', generic: '苯磺酸氨氯地平', brand: '络活喜', origin: '进口', spec: '5mg×7片/盒', perDose: '5mg', times: ['早饭后'] },
          { id: 'nifed', generic: '硝苯地平控释片', brand: '拜新同', origin: '进口', spec: '30mg×7片/盒', perDose: '30mg', times: ['早饭后'] },
          { id: 'vals', generic: '缬沙坦', brand: '代文', origin: '进口', spec: '80mg×7粒/盒', perDose: '80mg', times: ['早饭后'] },
          { id: 'irbe', generic: '厄贝沙坦', brand: '安博维', origin: '进口', spec: '150mg×7片/盒', perDose: '150mg', times: ['早饭后'] },
          { id: 'metop', generic: '美托洛尔缓释片', brand: '倍他乐克', origin: '进口', spec: '47.5mg×7片/盒', perDose: '47.5mg', times: ['早饭后'] },
          { id: 'bisop', generic: '比索洛尔', brand: '康忻', origin: '进口', spec: '5mg×10片/盒', perDose: '5mg', times: ['早饭后'] },
          { id: 'hctz', generic: '氢氯噻嗪', brand: '国产', origin: '国产', spec: '25mg×100片/盒', perDose: '25mg', times: ['早饭后'] },
          { id: 'perind', generic: '培哚普利', brand: '雅施达', origin: '进口', spec: '4mg×30片/盒', perDose: '4mg', times: ['早饭后'] },
          { id: 'benaz', generic: '贝那普利', brand: '洛汀新', origin: '进口', spec: '10mg×14片/盒', perDose: '10mg', times: ['早饭后'] },
          { id: 'lacid', generic: '拉西地平', brand: '乐息平', origin: '进口', spec: '4mg×7片/盒', perDose: '4mg', times: ['早饭后'] }
        ]
      },
      {
        id: 'chd', name: '冠心病', deptId: 'cardio', aliases: ['冠状动脉粥样硬化性心脏病'],
        symptoms: ['活动后胸闷、胸痛', '心前区压榨感', '气短、乏力', '心绞痛可放射至左肩'],
        diagnosis: ['心电图(静息/运动/动态)', '冠脉CTA或冠脉造影', '心肌酶与肌钙蛋白'],
        tips: '规律服药、控制危险因素；胸痛持续不缓解立即就医。',
        drugs: [
          { id: 'asa', generic: '阿司匹林', brand: '拜阿司匹灵', origin: '进口', spec: '100mg×30片/盒', perDose: '100mg', times: ['早饭后'] },
          { id: 'clopid', generic: '氯吡格雷', brand: '波立维', origin: '进口', spec: '75mg×7片/盒', perDose: '75mg', times: ['早饭后'] },
          { id: 'atorva2', generic: '阿托伐他汀', brand: '立普妥', origin: '进口', spec: '20mg×7片/盒', perDose: '20mg', times: ['睡前'] },
          { id: 'metop2', generic: '美托洛尔', brand: '倍他乐克', origin: '进口', spec: '25mg×20片/盒', perDose: '25mg', times: ['早饭后'] },
          { id: 'nitro', generic: '硝酸甘油', brand: '国产', origin: '国产', spec: '0.5mg×100片/瓶', perDose: '0.5mg', times: ['早饭后'] },
          { id: 'isosorb', generic: '单硝酸异山梨酯', brand: '欣康', origin: '国产', spec: '20mg×48片/盒', perDose: '20mg', times: ['早饭后', '晚饭后'] }
        ]
      },
      {
        id: 'af', name: '心律失常（房颤）', deptId: 'cardio', aliases: ['房颤'],
        symptoms: ['心悸、心慌', '胸闷、气短', '头晕', '脉搏不齐'],
        diagnosis: ['心电图(ECG)', '24小时动态心电图(Holter)', '心脏彩超'],
        tips: '戒烟酒、避免浓茶咖啡；抗凝药物不可擅自停药。',
        drugs: [
          { id: 'metop3', generic: '美托洛尔', brand: '倍他乐克', origin: '进口', spec: '25mg×20片/盒', perDose: '25mg', times: ['早饭后'] },
          { id: 'amiod', generic: '胺碘酮', brand: '可达龙', origin: '进口', spec: '200mg×10片/盒', perDose: '200mg', times: ['早饭后'] },
          { id: 'propaf', generic: '普罗帕酮', brand: '心律平', origin: '国产', spec: '50mg×50片/盒', perDose: '50mg', times: ['早饭后', '晚饭后'] },
          { id: 'rivar', generic: '利伐沙班', brand: '拜瑞妥', origin: '进口', spec: '20mg×7片/盒', perDose: '20mg', times: ['晚饭后'] },
          { id: 'dabig', generic: '达比加群', brand: '泰毕全', origin: '进口', spec: '110mg×10粒/盒', perDose: '110mg', times: ['早饭后', '晚饭后'] }
        ]
      },
      {
        id: 'hf', name: '心力衰竭', deptId: 'cardio', aliases: ['心衰'],
        symptoms: ['活动后呼吸困难', '夜间阵发性呼吸困难', '下肢水肿', '乏力、食欲下降'],
        diagnosis: ['心脏彩超(射血分数)', 'BNP/NT-proBNP升高', '胸部X线'],
        tips: '限盐限水、每日称体重；体重短期内快速增加需就医。',
        drugs: [
          { id: 'sacub', generic: '沙库巴曲缬沙坦', brand: '诺欣妥', origin: '进口', spec: '100mg×14片/盒', perDose: '100mg', times: ['早饭后', '晚饭后'] },
          { id: 'furos', generic: '呋塞米', brand: '速尿', origin: '国产', spec: '20mg×100片/盒', perDose: '20mg', times: ['早饭后'] },
          { id: 'spiron', generic: '螺内酯', brand: '安体舒通', origin: '国产', spec: '20mg×100片/盒', perDose: '20mg', times: ['早饭后'] },
          { id: 'metop4', generic: '美托洛尔', brand: '倍他乐克', origin: '进口', spec: '25mg×20片/盒', perDose: '25mg', times: ['早饭后'] },
          { id: 'digoxin', generic: '地高辛', brand: '国产', origin: '国产', spec: '0.25mg×100片/盒', perDose: '0.25mg', times: ['早饭后'] }
        ]
      }
    ]
  },
  {
    id: 'resp', name: '呼吸内科', color: '#3FB7E0', emoji: '🫁',
    diseases: [
      {
        id: 'asthma', name: '支气管哮喘', deptId: 'resp', aliases: ['哮喘'],
        symptoms: ['反复发作性喘息', '胸闷、气促', '夜间或凌晨咳嗽加重', '呼气性呼吸困难'],
        diagnosis: ['肺功能检查(支气管舒张试验)', '呼出气一氧化氮(FeNO)', '过敏原检测'],
        tips: '随身携带急救吸入剂；规律使用控制药物，避免诱发因素。',
        drugs: [
          { id: 'salbut', generic: '沙丁胺醇', brand: '万托林', origin: '进口', spec: '100μg/揿×200揿', perDose: '1-2揿', times: ['早饭后', '睡前'] },
          { id: 'budes', generic: '布地奈德', brand: '普米克令舒', origin: '进口', spec: '0.5mg/2ml×10支', perDose: '1支', times: ['早饭后', '晚饭后'] },
          { id: 'montel', generic: '孟鲁司特', brand: '顺尔宁', origin: '进口', spec: '10mg×5片/盒', perDose: '10mg', times: ['睡前'] },
          { id: 'flutic', generic: '氟替卡松', brand: '辅舒酮', origin: '进口', spec: '125μg/揿×120揿', perDose: '2揿', times: ['早饭后', '晚饭后'] },
          { id: 'salmflut', generic: '沙美特罗替卡松', brand: '舒利迭', origin: '进口', spec: '50/250μg×60吸', perDose: '1吸', times: ['早饭后', '晚饭后'] }
        ]
      },
      {
        id: 'copd', name: '慢性阻塞性肺疾病', deptId: 'resp', aliases: ['慢阻肺', 'COPD'],
        symptoms: ['慢性咳嗽、咳痰', '活动后气短', '喘息', '反复呼吸道感染'],
        diagnosis: ['肺功能检查(FEV1/FVC<0.7)', '胸部CT', '血气分析'],
        tips: '戒烟是关键；接种流感/肺炎疫苗；肺康复锻炼。',
        drugs: [
          { id: 'tiotrop', generic: '噻托溴铵', brand: '思力华', origin: '进口', spec: '18μg×30粒', perDose: '1粒', times: ['早饭后'] },
          { id: 'salmflut2', generic: '沙美特罗替卡松', brand: '舒利迭', origin: '进口', spec: '50/250μg×60吸', perDose: '1吸', times: ['早饭后', '晚饭后'] },
          { id: 'ambrox', generic: '氨溴索', brand: '沐舒坦', origin: '进口', spec: '30mg×20片/盒', perDose: '30mg', times: ['早饭后', '晚饭后'] },
          { id: 'theophy', generic: '茶碱缓释片', brand: '国产', origin: '国产', spec: '0.1g×24片/盒', perDose: '0.1g', times: ['早饭后', '晚饭后'] }
        ]
      },
      {
        id: 'ar', name: '过敏性鼻炎', deptId: 'resp', aliases: ['变应性鼻炎'],
        symptoms: ['阵发性喷嚏', '清水样鼻涕', '鼻痒、鼻塞', '眼痒、流泪'],
        diagnosis: ['症状与体征', '过敏原皮肤点刺试验', '血清特异性IgE'],
        tips: '避开花粉/尘螨；生理盐水洗鼻；规范用药。',
        drugs: [
          { id: 'lorat', generic: '氯雷他定', brand: '开瑞坦', origin: '进口', spec: '10mg×6片/盒', perDose: '10mg', times: ['睡前'] },
          { id: 'cetir', generic: '西替利嗪', brand: '仙特明', origin: '进口', spec: '10mg×5片/盒', perDose: '10mg', times: ['睡前'] },
          { id: 'momet', generic: '糠酸莫米松鼻喷', brand: '内舒拿', origin: '进口', spec: '50μg/揿×140揿', perDose: '2揿', times: ['早饭后', '晚饭后'] },
          { id: 'montel2', generic: '孟鲁司特', brand: '顺尔宁', origin: '进口', spec: '10mg×5片/盒', perDose: '10mg', times: ['睡前'] }
        ]
      }
    ]
  },
  {
    id: 'gastro', name: '消化内科', color: '#F7B731', emoji: '🍚',
    diseases: [
      {
        id: 'gastritis', name: '慢性胃炎', deptId: 'gastro', aliases: ['胃炎'],
        symptoms: ['上腹隐痛、胀满', '嗳气、反酸', '食欲不振', '恶心'],
        diagnosis: ['胃镜 + 活检', '幽门螺杆菌检测(C13/C14呼气试验)'],
        tips: '规律饮食、细嚼慢咽；如幽门螺杆菌阳性需规范根除。',
        drugs: [
          { id: 'omep', generic: '奥美拉唑', brand: '洛赛克', origin: '进口', spec: '20mg×14片/盒', perDose: '20mg', times: ['早饭前'] },
          { id: 'rabe', generic: '雷贝拉唑', brand: '波利特', origin: '进口', spec: '10mg×7片/盒', perDose: '10mg', times: ['早饭前'] },
          { id: 'hydrotal', generic: '铝碳酸镁', brand: '达喜', origin: '进口', spec: '0.5g×20片/盒', perDose: '0.5g', times: ['早饭后', '午饭后', '晚饭后'] },
          { id: 'domper', generic: '多潘立酮', brand: '吗丁啉', origin: '国产', spec: '10mg×30片/盒', perDose: '10mg', times: ['早饭后', '午饭后', '晚饭后'] },
          { id: 'bismuth', generic: '枸橼酸铋钾', brand: '丽珠得乐', origin: '国产', spec: '0.3g×40粒/盒', perDose: '0.3g', times: ['早饭后', '晚饭后'] }
        ]
      },
      {
        id: 'gerd', name: '胃食管反流病', deptId: 'gastro', aliases: ['反流性食管炎'],
        symptoms: ['反酸、烧心', '胸骨后灼痛', '慢性咳嗽', '咽部异物感'],
        diagnosis: ['胃镜', '24小时食管pH监测', 'PPI试验性治疗'],
        tips: '睡前3小时勿进食、抬高床头；少食多餐。',
        drugs: [
          { id: 'omep2', generic: '奥美拉唑', brand: '洛赛克', origin: '进口', spec: '20mg×14片/盒', perDose: '20mg', times: ['早饭前', '晚饭前'] },
          { id: 'rabe2', generic: '雷贝拉唑', brand: '波利特', origin: '进口', spec: '10mg×7片/盒', perDose: '10mg', times: ['早饭前'] },
          { id: 'mosap', generic: '莫沙必利', brand: '加斯清', origin: '进口', spec: '5mg×10片/盒', perDose: '5mg', times: ['早饭后', '午饭后', '晚饭后'] },
          { id: 'hydrotal2', generic: '铝碳酸镁', brand: '达喜', origin: '进口', spec: '0.5g×20片/盒', perDose: '0.5g', times: ['早饭后', '午饭后', '晚饭后'] }
        ]
      },
      {
        id: 'nafld', name: '脂肪肝', deptId: 'gastro', aliases: ['非酒精性脂肪肝'],
        symptoms: ['多无明显症状', '右上腹隐胀', '乏力', '体检发现肝酶/脂肪肝'],
        diagnosis: ['腹部超声', '肝功能检查', 'FibroScan肝脏弹性检测'],
        tips: '减重5-10%、控制碳水；戒酒、规律运动。',
        drugs: [
          { id: 'silybin', generic: '水飞蓟宾', brand: '益肝灵', origin: '国产', spec: '35mg×60片/盒', perDose: '70mg', times: ['早饭后', '晚饭后'] },
          { id: 'epl', generic: '多烯磷脂酰胆碱', brand: '易善复', origin: '进口', spec: '228mg×24粒/盒', perDose: '228mg', times: ['早饭后', '晚饭后'] },
          { id: 'bicyclol', generic: '双环醇', brand: '百赛诺', origin: '国产', spec: '25mg×18片/盒', perDose: '25mg', times: ['早饭后', '晚饭后'] }
        ]
      },
      {
        id: 'dyspepsia', name: '功能性消化不良', deptId: 'gastro', aliases: ['消化不良'],
        symptoms: ['餐后饱胀', '早饱感', '上腹痛', '嗳气'],
        diagnosis: ['胃镜排除器质性病变', '症状学诊断(罗马标准)'],
        tips: '细嚼慢咽、避免过饱；情绪放松。',
        drugs: [
          { id: 'domper2', generic: '多潘立酮', brand: '吗丁啉', origin: '国产', spec: '10mg×30片/盒', perDose: '10mg', times: ['早饭后', '午饭后', '晚饭后'] },
          { id: 'mosap2', generic: '莫沙必利', brand: '加斯清', origin: '进口', spec: '5mg×10片/盒', perDose: '5mg', times: ['早饭后', '午饭后', '晚饭后'] },
          { id: 'enzyme', generic: '复方消化酶', brand: '达吉', origin: '进口', spec: '复方×20粒/盒', perDose: '1粒', times: ['早饭后', '午饭后', '晚饭后'] },
          { id: 'hydrotal3', generic: '铝碳酸镁', brand: '达喜', origin: '进口', spec: '0.5g×20片/盒', perDose: '0.5g', times: ['早饭后', '午饭后', '晚饭后'] }
        ]
      }
    ]
  },
  {
    id: 'neuro', name: '神经内科', color: '#8B7CF6', emoji: '🧠',
    diseases: [
      {
        id: 'migraine', name: '偏头痛', deptId: 'neuro', aliases: ['头痛'],
        symptoms: ['单侧搏动性头痛', '伴恶心、呕吐', '畏光、畏声', '发作前可有视觉先兆'],
        diagnosis: ['临床病史与头痛日记', '头颅MRI排除器质性病变'],
        tips: '记录头痛日记找诱因；规律作息，避免熬夜。',
        drugs: [
          { id: 'ibu', generic: '布洛芬', brand: '芬必得', origin: '国产', spec: '0.3g×20粒/盒', perDose: '0.3g', times: ['早饭后'] },
          { id: 'sumatr', generic: '舒马普坦', brand: '英明格', origin: '进口', spec: '50mg×2片/盒', perDose: '50mg', times: ['早饭后'] },
          { id: 'flunar', generic: '氟桂利嗪', brand: '西比灵', origin: '进口', spec: '5mg×20粒/盒', perDose: '5mg', times: ['睡前'] },
          { id: 'prop-mig', generic: '普萘洛尔', brand: '心得安', origin: '国产', spec: '10mg×100片/盒', perDose: '10mg', times: ['早饭后', '晚饭后'] }
        ]
      },
      {
        id: 'insomnia', name: '失眠', deptId: 'neuro', aliases: ['睡眠障碍'],
        symptoms: ['入睡困难', '易醒、早醒', '睡眠浅、多梦', '日间疲劳、注意力下降'],
        diagnosis: ['临床评估与睡眠日记', '必要时多导睡眠监测(PSG)'],
        tips: '固定作息、睡前远离电子屏；下午后避免咖啡因。',
        drugs: [
          { id: 'eszop', generic: '右佐匹克隆', brand: '文飞', origin: '国产', spec: '3mg×7片/盒', perDose: '3mg', times: ['睡前'] },
          { id: 'zop', generic: '佐匹克隆', brand: '忆梦返', origin: '进口', spec: '7.5mg×7片/盒', perDose: '7.5mg', times: ['睡前'] },
          { id: 'alpraz', generic: '阿普唑仑', brand: '国产', origin: '国产', spec: '0.4mg×20片/盒', perDose: '0.4mg', times: ['睡前'] },
          { id: 'melatonin', generic: '褪黑素', brand: '国产', origin: '国产', spec: '3mg×60片/盒', perDose: '3mg', times: ['睡前'] }
        ]
      },
      {
        id: 'parkinson', name: '帕金森病', deptId: 'neuro', aliases: ['震颤麻痹'],
        symptoms: ['静止性震颤', '动作迟缓', '肌肉僵硬', '姿势步态异常'],
        diagnosis: ['神经科专科查体', '对左旋多巴的反应', '头颅MRI/多巴胺转运体PET'],
        tips: '规律服药、坚持康复锻炼；防跌倒。',
        drugs: [
          { id: 'madopar', generic: '多巴丝肼', brand: '美多芭', origin: '进口', spec: '250mg×40片/盒', perDose: '250mg', times: ['早饭后', '午饭后', '晚饭后'] },
          { id: 'pramip', generic: '普拉克索', brand: '森福罗', origin: '进口', spec: '0.25mg×30片/盒', perDose: '0.25mg', times: ['早饭后', '午饭后', '晚饭后'] },
          { id: 'entacap', generic: '恩他卡朋', brand: '珂丹', origin: '进口', spec: '200mg×30片/盒', perDose: '200mg', times: ['早饭后', '午饭后', '晚饭后'] }
        ]
      }
    ]
  },
  {
    id: 'nephro', name: '肾内科', color: '#4CA6A0', emoji: '🫘',
    diseases: [
      {
        id: 'ckd', name: '慢性肾脏病', deptId: 'nephro', aliases: ['CKD'],
        symptoms: ['乏力、食欲减退', '夜尿增多', '水肿', '泡沫尿', '血压升高'],
        diagnosis: ['血肌酐/估算肾小球滤过率(eGFR)', '尿蛋白/尿微量白蛋白', '肾脏超声'],
        tips: '低盐优质低蛋白饮食；避免肾毒性药物；定期复查肾功能。',
        drugs: [
          { id: 'keto', generic: '复方α-酮酸', brand: '开同', origin: '进口', spec: '0.63g×100片/盒', perDose: '4片', times: ['早饭后', '午饭后', '晚饭后'] },
          { id: 'charcoal', generic: '药用炭', brand: '爱西特', origin: '国产', spec: '0.3g×100片/盒', perDose: '1.2g', times: ['早饭后', '晚饭后'] },
          { id: 'calcitriol2', generic: '骨化三醇', brand: '罗盖全', origin: '进口', spec: '0.25μg×10粒/盒', perDose: '0.25μg', times: ['早饭前'] },
          { id: 'nahco3', generic: '碳酸氢钠', brand: '国产', origin: '国产', spec: '0.5g×100片/盒', perDose: '0.5g', times: ['早饭后', '晚饭后'] }
        ]
      },
      {
        id: 'uti', name: '尿路感染', deptId: 'nephro', aliases: ['泌尿系感染'],
        symptoms: ['尿频、尿急、尿痛', '下腹坠胀', '尿液浑浊', '可伴发热'],
        diagnosis: ['尿常规 + 尿培养', '泌尿系超声'],
        tips: '多饮水、勤排尿；不憋尿。',
        drugs: [
          { id: 'levo', generic: '左氧氟沙星', brand: '可乐必妥', origin: '进口', spec: '0.5g×4片/盒', perDose: '0.5g', times: ['早饭后'] },
          { id: 'cefix', generic: '头孢克肟', brand: '世福素', origin: '进口', spec: '100mg×6片/盒', perDose: '100mg', times: ['早饭后', '晚饭后'] },
          { id: 'nitrofur', generic: '呋喃妥因', brand: '国产', origin: '国产', spec: '50mg×100片/盒', perDose: '50mg', times: ['早饭后', '午饭后', '晚饭后', '睡前'] }
        ]
      }
    ]
  },
  {
    id: 'rheum', name: '风湿免疫科', color: '#E06A6A', emoji: '🦴',
    diseases: [
      {
        id: 'ra', name: '类风湿关节炎', deptId: 'rheum', aliases: ['RA'],
        symptoms: ['对称性多关节肿痛', '晨僵 > 1小时', '关节活动受限', '乏力、低热'],
        diagnosis: ['类风湿因子(RF)/抗CCP抗体', '血沉、C反应蛋白', '关节超声/磁共振'],
        tips: '规律服用改善病情抗风湿药(DMARDs)；关节功能锻炼。',
        drugs: [
          { id: 'mtx', generic: '甲氨蝶呤', brand: '国产', origin: '国产', spec: '2.5mg×100片/盒', perDose: '10mg', times: ['早饭后'] },
          { id: 'leflu', generic: '来氟米特', brand: '爱若华', origin: '国产', spec: '10mg×16片/盒', perDose: '10mg', times: ['早饭后'] },
          { id: 'celecox', generic: '塞来昔布', brand: '西乐葆', origin: '进口', spec: '0.2g×6粒/盒', perDose: '0.2g', times: ['早饭后', '晚饭后'] },
          { id: 'pred', generic: '泼尼松', brand: '国产', origin: '国产', spec: '5mg×100片/盒', perDose: '5mg', times: ['早饭后'] },
          { id: 'hcq', generic: '羟氯喹', brand: '赛能', origin: '进口', spec: '200mg×10片/盒', perDose: '200mg', times: ['早饭后'] }
        ]
      },
      {
        id: 'sle', name: '系统性红斑狼疮', deptId: 'rheum', aliases: ['SLE'],
        symptoms: ['面部蝶形红斑', '光敏感', '关节痛', '乏力、发热', '口腔溃疡'],
        diagnosis: ['抗核抗体(ANA)/抗dsDNA抗体', '补体C3/C4降低', '血尿常规及脏器评估'],
        tips: '严格防晒、避免感染；遵医嘱长期随访。',
        drugs: [
          { id: 'hcq2', generic: '羟氯喹', brand: '赛能', origin: '进口', spec: '200mg×10片/盒', perDose: '200mg', times: ['早饭后'] },
          { id: 'pred2', generic: '泼尼松', brand: '国产', origin: '国产', spec: '5mg×100片/盒', perDose: '5mg', times: ['早饭后'] },
          { id: 'mmf', generic: '吗替麦考酚酯', brand: '骁悉', origin: '进口', spec: '250mg×40粒/盒', perDose: '500mg', times: ['早饭后', '晚饭后'] }
        ]
      }
    ]
  },
  {
    id: 'derm', name: '皮肤科', color: '#F08CA8', emoji: '🧴',
    diseases: [
      {
        id: 'eczema', name: '湿疹', deptId: 'derm', aliases: ['特应性皮炎'],
        symptoms: ['皮肤红斑、丘疹', '剧烈瘙痒', '皮肤干燥、脱屑', '反复发作'],
        diagnosis: ['典型皮损与病史', '必要时皮肤点刺/斑贴试验'],
        tips: '保湿是基础；避免搔抓与热水烫洗。',
        drugs: [
          { id: 'lorat2', generic: '氯雷他定', brand: '开瑞坦', origin: '进口', spec: '10mg×6片/盒', perDose: '10mg', times: ['睡前'] },
          { id: 'desonide', generic: '地奈德乳膏', brand: '力言卓', origin: '国产', spec: '0.05%×15g/支', perDose: '适量外用', times: ['早饭后', '晚饭后'] },
          { id: 'calamine', generic: '炉甘石洗剂', brand: '国产', origin: '国产', spec: '100ml/瓶', perDose: '适量外用', times: ['早饭后', '晚饭后'] },
          { id: 'momet2', generic: '糠酸莫米松乳膏', brand: '艾洛松', origin: '进口', spec: '0.1%×10g/支', perDose: '适量外用', times: ['早饭后', '晚饭后'] }
        ]
      },
      {
        id: 'urticaria', name: '荨麻疹', deptId: 'derm', aliases: ['风疹块'],
        symptoms: ['皮肤风团、瘙痒', '风团此起彼伏', '可伴血管性水肿'],
        diagnosis: ['典型皮损', '必要时过敏原与激发试验'],
        tips: '寻找并避免诱因；避免辛辣、饮酒。',
        drugs: [
          { id: 'lorat3', generic: '氯雷他定', brand: '开瑞坦', origin: '进口', spec: '10mg×6片/盒', perDose: '10mg', times: ['睡前'] },
          { id: 'cetir2', generic: '西替利嗪', brand: '仙特明', origin: '进口', spec: '10mg×5片/盒', perDose: '10mg', times: ['睡前'] },
          { id: 'ebast', generic: '依巴斯汀', brand: '开思亭', origin: '进口', spec: '10mg×10片/盒', perDose: '10mg', times: ['早饭后'] }
        ]
      },
      {
        id: 'acne', name: '痤疮', deptId: 'derm', aliases: ['青春痘'],
        symptoms: ['粉刺、丘疹', '脓疱', '结节、囊肿', '面部、胸背部多见'],
        diagnosis: ['典型皮损', '必要时激素水平检查'],
        tips: '温和清洁、避免挤压；异维A酸需在医生指导下使用。',
        drugs: [
          { id: 'adap', generic: '阿达帕林凝胶', brand: '达芙文', origin: '进口', spec: '0.1%×30g/支', perDose: '适量外用', times: ['睡前'] },
          { id: 'bpo', generic: '过氧苯甲酰', brand: '班赛', origin: '进口', spec: '5%×15g/支', perDose: '适量外用', times: ['早饭后', '晚饭后'] },
          { id: 'isotret', generic: '异维A酸', brand: '泰尔丝', origin: '国产', spec: '10mg×20粒/盒', perDose: '10mg', times: ['早饭后', '晚饭后'] },
          { id: 'clinda', generic: '克林霉素', brand: '国产', origin: '国产', spec: '1%×30ml/瓶', perDose: '适量外用', times: ['早饭后', '晚饭后'] }
        ]
      }
    ]
  },
  {
    id: 'ophth', name: '眼科', color: '#5FB8C9', emoji: '👁️',
    diseases: [
      {
        id: 'dryeye', name: '干眼症', deptId: 'ophth', aliases: ['干眼'],
        symptoms: ['眼干涩、异物感', '视物模糊', '畏光', '眼疲劳'],
        diagnosis: ['泪膜破裂时间(BUT)', '角膜荧光素染色', '泪液分泌试验'],
        tips: '减少屏幕时间、多眨眼；热敷眼部。',
        drugs: [
          { id: 'hyal', generic: '玻璃酸钠滴眼液', brand: '海露', origin: '进口', spec: '0.1%×10ml/瓶', perDose: '1滴', times: ['早饭后', '午饭后', '晚饭后', '睡前'] },
          { id: 'pva', generic: '聚乙烯醇滴眼液', brand: '国产', origin: '国产', spec: '1.4%×0.8ml×10支', perDose: '1支', times: ['早饭后', '午饭后', '晚饭后'] },
          { id: 'escin', generic: '七叶洋地黄双苷滴眼液', brand: '施图伦', origin: '进口', spec: '0.4ml×10支', perDose: '1支', times: ['早饭后', '晚饭后'] }
        ]
      },
      {
        id: 'glaucoma', name: '青光眼', deptId: 'ophth', aliases: ['开角型青光眼'],
        symptoms: ['视野缺损', '眼胀', '视力下降', '虹视(看灯有光圈)'],
        diagnosis: ['眼压测量', '眼底检查(视盘)', '视野检查', '房角镜检查'],
        tips: '遵医嘱规律滴眼、终身随访；避免长时间低头。',
        drugs: [
          { id: 'timolol', generic: '噻吗洛尔滴眼液', brand: '国产', origin: '国产', spec: '0.5%×5ml/支', perDose: '1滴', times: ['早饭后', '晚饭后'] },
          { id: 'latan', generic: '拉坦前列素', brand: '适利达', origin: '进口', spec: '0.005%×2.5ml/支', perDose: '1滴', times: ['睡前'] },
          { id: 'brinz', generic: '布林佐胺', brand: '派立明', origin: '进口', spec: '1%×5ml/支', perDose: '1滴', times: ['早饭后', '晚饭后'] }
        ]
      }
    ]
  },
  {
    id: 'ent', name: '耳鼻咽喉科', color: '#7BA8C9', emoji: '👂',
    diseases: [
      {
        id: 'rhinitis', name: '慢性鼻炎', deptId: 'ent', aliases: ['鼻炎'],
        symptoms: ['鼻塞、流涕', '嗅觉减退', '头痛', '张口呼吸'],
        diagnosis: ['前鼻镜/鼻内镜检查', '必要时鼻窦CT'],
        tips: '生理盐水洗鼻；避免粉尘与刺激性气体。',
        drugs: [
          { id: 'momet3', generic: '糠酸莫米松鼻喷', brand: '内舒拿', origin: '进口', spec: '50μg/揿×140揿', perDose: '2揿', times: ['早饭后', '晚饭后'] },
          { id: 'budes-nasal', generic: '布地奈德鼻喷', brand: '雷诺考特', origin: '进口', spec: '64μg/揿×120揿', perDose: '2揿', times: ['早饭后', '晚饭后'] },
          { id: 'seawater', generic: '生理性海水', brand: '国产', origin: '国产', spec: '50ml/瓶', perDose: '适量喷鼻', times: ['早饭后', '晚饭后'] }
        ]
      },
      {
        id: 'pharyngitis', name: '慢性咽炎', deptId: 'ent', aliases: ['咽炎'],
        symptoms: ['咽干、咽痒', '咽部异物感', '刺激性干咳', '晨起恶心'],
        diagnosis: ['咽喉部检查', '必要时喉镜'],
        tips: '多饮水、少辛辣；戒烟酒。',
        drugs: [
          { id: 'cetyl', generic: '西地碘含片', brand: '华素片', origin: '国产', spec: '1.5mg×24片/盒', perDose: '1片', times: ['早饭后', '午饭后', '晚饭后'] },
          { id: 'borax', generic: '复方硼砂溶液', brand: '国产', origin: '国产', spec: '250ml/瓶', perDose: '含漱', times: ['早饭后', '晚饭后'] },
          { id: 'qingyan', generic: '清咽滴丸', brand: '国产', origin: '国产', spec: '20mg×60丸/盒', perDose: '4-6丸', times: ['早饭后', '午饭后', '晚饭后'] }
        ]
      }
    ]
  },
  {
    id: 'psych', name: '精神心理科', color: '#A78BFA', emoji: '🌿',
    diseases: [
      {
        id: 'anxiety', name: '焦虑症', deptId: 'psych', aliases: ['广泛性焦虑障碍'],
        symptoms: ['过度担忧、紧张', '心慌、出汗', '坐立不安', '失眠', '注意力难集中'],
        diagnosis: ['精神科临床访谈', '焦虑量表(GAD-7)', '排除躯体疾病'],
        tips: '规律运动、正念放松；必要时心理治疗。',
        drugs: [
          { id: 'sert', generic: '舍曲林', brand: '左洛复', origin: '进口', spec: '50mg×14片/盒', perDose: '50mg', times: ['早饭后'] },
          { id: 'escit', generic: '艾司西酞普兰', brand: '来士普', origin: '进口', spec: '10mg×7片/盒', perDose: '10mg', times: ['早饭后'] },
          { id: 'loraz', generic: '劳拉西泮', brand: '国产', origin: '国产', spec: '0.5mg×20片/盒', perDose: '0.5mg', times: ['睡前'] },
          { id: 'busp', generic: '丁螺环酮', brand: '国产', origin: '国产', spec: '5mg×20片/盒', perDose: '5mg', times: ['早饭后', '晚饭后'] }
        ]
      },
      {
        id: 'depression', name: '抑郁症', deptId: 'psych', aliases: ['抑郁障碍'],
        symptoms: ['情绪持续低落', '兴趣减退', '睡眠与食欲改变', '疲乏无力', '自责、注意力下降'],
        diagnosis: ['精神科临床访谈', '抑郁量表(PHQ-9)', '排除器质性因素'],
        tips: '寻求专业帮助不是软弱；坚持治疗、家人陪伴很重要。',
        drugs: [
          { id: 'sert2', generic: '舍曲林', brand: '左洛复', origin: '进口', spec: '50mg×14片/盒', perDose: '50mg', times: ['早饭后'] },
          { id: 'fluox', generic: '氟西汀', brand: '百优解', origin: '进口', spec: '20mg×28粒/盒', perDose: '20mg', times: ['早饭后'] },
          { id: 'venlaf', generic: '文拉法辛', brand: '怡诺思', origin: '进口', spec: '75mg×14粒/盒', perDose: '75mg', times: ['早饭后', '晚饭后'] },
          { id: 'mirtaz', generic: '米氮平', brand: '瑞美隆', origin: '进口', spec: '30mg×10片/盒', perDose: '30mg', times: ['睡前'] }
        ]
      }
    ]
  },
  {
    id: 'gyn', name: '妇产科', color: '#EE8FA3', emoji: '🌺',
    diseases: [
      {
        id: 'gdm', name: '妊娠期糖尿病', deptId: 'gyn', aliases: ['GDM'],
        symptoms: ['多无明显症状', '产检发现血糖升高', '羊水过多', '胎儿偏大'],
        diagnosis: ['75g口服葡萄糖耐量试验(OGTT)', '空腹及餐后血糖监测'],
        tips: '孕期控糖饮食、适量运动；多数产后可恢复，需复查。',
        drugs: [
          { id: 'aspart2', generic: '门冬胰岛素', brand: '诺和锐', origin: '进口', spec: '300IU/3ml预充笔', perDose: '4IU', times: ['早饭后', '午饭后', '晚饭后'] },
          { id: 'detemir', generic: '地特胰岛素', brand: '诺和平', origin: '进口', spec: '300IU/3ml预充笔', perDose: '6IU', times: ['睡前'] }
        ]
      },
      {
        id: 'pcos', name: '多囊卵巢综合征', deptId: 'gyn', aliases: ['PCOS'],
        symptoms: ['月经稀发或闭经', '多毛、痤疮', '肥胖', '不孕'],
        diagnosis: ['高雄激素临床表现/生化', '超声见卵巢多囊样改变', '排除其他疾病'],
        tips: '减重、规律运动可显著改善；定期随访。',
        drugs: [
          { id: 'met-pcos', generic: '二甲双胍', brand: '格华止', origin: '进口', spec: '0.5g×20片/盒', perDose: '0.5g', times: ['早饭前', '晚饭前'] },
          { id: 'diane', generic: '炔雌醇环丙孕酮', brand: '达英-35', origin: '进口', spec: '2mg×21片/盒', perDose: '1片', times: ['睡前'] },
          { id: 'dydro', generic: '地屈孕酮', brand: '达芙通', origin: '进口', spec: '10mg×20片/盒', perDose: '10mg', times: ['早饭后'] }
        ]
      },
      {
        id: 'menopause', name: '更年期综合征', deptId: 'gyn', aliases: ['围绝经期综合征'],
        symptoms: ['潮热、出汗', '情绪波动', '失眠', '心悸', '骨关节痛'],
        diagnosis: ['症状评估(Kupperman评分)', '性激素六项(FSH/E2)'],
        tips: '补钙防骨质疏松；激素替代需医生评估。',
        drugs: [
          { id: 'estradiol', generic: '雌二醇', brand: '芬吗通', origin: '进口', spec: '1mg×28片/盒', perDose: '1mg', times: ['睡前'] },
          { id: 'dydro2', generic: '地屈孕酮', brand: '达芙通', origin: '进口', spec: '10mg×20片/盒', perDose: '10mg', times: ['早饭后'] },
          { id: 'kuntai', generic: '坤泰胶囊', brand: '国产', origin: '国产', spec: '0.5g×48粒/盒', perDose: '4粒', times: ['早饭后', '晚饭后'] }
        ]
      }
    ]
  },
  {
    id: 'uro', name: '泌尿外科', color: '#6FA8DC', emoji: '💧',
    diseases: [
      {
        id: 'bph', name: '前列腺增生', deptId: 'uro', aliases: ['良性前列腺增生'],
        symptoms: ['尿频、夜尿增多', '尿急', '排尿困难、尿线变细', '尿不尽感'],
        diagnosis: ['直肠指诊', '前列腺超声', 'PSA检查', '尿流率测定'],
        tips: '避免久坐、忌辛辣与饮酒；睡前少饮水。',
        drugs: [
          { id: 'tamsul', generic: '坦索罗辛', brand: '哈乐', origin: '进口', spec: '0.2mg×10粒/盒', perDose: '0.2mg', times: ['睡前'] },
          { id: 'finast', generic: '非那雄胺', brand: '保列治', origin: '进口', spec: '5mg×10片/盒', perDose: '5mg', times: ['早饭后'] },
          { id: 'dutast', generic: '度他雄胺', brand: '安福达', origin: '进口', spec: '0.5mg×10粒/盒', perDose: '0.5mg', times: ['早饭后'] },
          { id: 'teraz', generic: '特拉唑嗪', brand: '高特灵', origin: '进口', spec: '2mg×14片/盒', perDose: '2mg', times: ['睡前'] }
        ]
      },
      {
        id: 'stone', name: '泌尿系结石', deptId: 'uro', aliases: ['肾结石'],
        symptoms: ['腰腹部绞痛', '血尿', '恶心、呕吐', '尿频尿急'],
        diagnosis: ['泌尿系超声', '尿常规', '腹部CT(平扫)'],
        tips: '多饮水（每日2500ml以上）；限制高草酸食物。',
        drugs: [
          { id: 'paishi', generic: '排石颗粒', brand: '国产', origin: '国产', spec: '20g×10袋/盒', perDose: '20g', times: ['早饭后', '晚饭后'] },
          { id: 'tamsul2', generic: '坦索罗辛', brand: '哈乐', origin: '进口', spec: '0.2mg×10粒/盒', perDose: '0.2mg', times: ['睡前'] },
          { id: 'diclof', generic: '双氯芬酸', brand: '扶他林', origin: '进口', spec: '75mg×10片/盒', perDose: '75mg', times: ['早饭后'] }
        ]
      }
    ]
  },
  {
    id: 'ortho', name: '骨科', color: '#C98A6B', emoji: '🦴',
    diseases: [
      {
        id: 'oa', name: '骨关节炎', deptId: 'ortho', aliases: ['退行性关节炎'],
        symptoms: ['关节疼痛（活动后加重）', '晨僵 < 30分钟', '关节肿胀', '活动受限'],
        diagnosis: ['X线(关节间隙变窄)', '临床表现', '必要时MRI'],
        tips: '控制体重、适度锻炼股四头肌；避免爬山深蹲。',
        drugs: [
          { id: 'celecox2', generic: '塞来昔布', brand: '西乐葆', origin: '进口', spec: '0.2g×6粒/盒', perDose: '0.2g', times: ['早饭后', '晚饭后'] },
          { id: 'glucos', generic: '硫酸氨基葡萄糖', brand: '维固力', origin: '进口', spec: '250mg×20粒/盒', perDose: '500mg', times: ['早饭后', '晚饭后'] },
          { id: 'diclof2', generic: '双氯芬酸', brand: '扶他林', origin: '进口', spec: '75mg×10片/盒', perDose: '75mg', times: ['早饭后'] },
          { id: 'hyal-inj', generic: '玻璃酸钠注射液', brand: '施沛特', origin: '国产', spec: '25mg/2.5ml/支', perDose: '2.5ml', times: ['早饭后'] }
        ]
      },
      {
        id: 'cervical', name: '颈椎病', deptId: 'ortho', aliases: ['颈椎退行性变'],
        symptoms: ['颈肩酸痛', '上肢麻木', '头晕', '手部精细动作下降'],
        diagnosis: ['颈椎X线/MRI', '神经系统查体'],
        tips: '避免长时间低头；颈部功能锻炼。',
        drugs: [
          { id: 'celecox3', generic: '塞来昔布', brand: '西乐葆', origin: '进口', spec: '0.2g×6粒/盒', perDose: '0.2g', times: ['早饭后', '晚饭后'] },
          { id: 'mecobal', generic: '甲钴胺', brand: '弥可保', origin: '进口', spec: '0.5mg×20片/盒', perDose: '0.5mg', times: ['早饭后', '晚饭后'] },
          { id: 'aescin', generic: '迈之灵', brand: '马栗种子提取物', origin: '进口', spec: '150mg×20片/盒', perDose: '300mg', times: ['早饭后', '晚饭后'] }
        ]
      }
    ]
  },
  {
    id: 'geri', name: '老年医学科', color: '#8FA6B2', emoji: '🌳',
    diseases: [
      {
        id: 'mci', name: '认知障碍（阿尔茨海默病）', deptId: 'geri', aliases: ['老年痴呆'],
        symptoms: ['近记忆力减退', '语言/定向力下降', '性格改变', '日常生活能力下降'],
        diagnosis: ['认知量表(MMSE/MoCA)', '头颅MRI', '排除其他原因'],
        tips: '多社交、多用脑；家人照护与安全防护。',
        drugs: [
          { id: 'donepezil', generic: '多奈哌齐', brand: '安理申', origin: '进口', spec: '5mg×7片/盒', perDose: '5mg', times: ['睡前'] },
          { id: 'memant', generic: '美金刚', brand: '易倍申', origin: '进口', spec: '10mg×28片/盒', perDose: '10mg', times: ['早饭后'] }
        ]
      },
      {
        id: 'sarcopenia', name: '肌少症', deptId: 'geri', aliases: ['肌肉减少症'],
        symptoms: ['肌力下降、易疲劳', '步速变慢', '体重/肌肉量减少', '易跌倒'],
        diagnosis: ['握力测试', '体成分分析(肌肉量)', '步速测定'],
        tips: '补充优质蛋白、抗阻运动；晒太阳补充维生素D。',
        drugs: [
          { id: 'whey', generic: '乳清蛋白粉', brand: '国产', origin: '国产', spec: '400g/罐', perDose: '30g', times: ['早饭后'] },
          { id: 'vd', generic: '维生素D', brand: '国产', origin: '国产', spec: '400IU×30粒/盒', perDose: '400IU', times: ['早饭后'] },
          { id: 'caltrate2', generic: '碳酸钙D3', brand: '钙尔奇D', origin: '进口', spec: '600mg×60片/盒', perDose: '600mg', times: ['早饭后'] }
        ]
      }
    ]
  },
  {
    id: 'gp', name: '全科医学科', color: '#7BB08A', emoji: '🩺',
    diseases: [
      {
        id: 'cold', name: '普通感冒', deptId: 'gp', aliases: ['上呼吸道感染'],
        symptoms: ['鼻塞、流涕', '咽痛', '咳嗽', '低热', '乏力'],
        diagnosis: ['症状与体格检查', '排除流感/新冠等'],
        tips: '多休息、多饮水；一般对症治疗即可自愈。',
        drugs: [
          { id: 'parac', generic: '对乙酰氨基酚', brand: '泰诺林', origin: '进口', spec: '0.5g×10片/盒', perDose: '0.5g', times: ['早饭后', '晚饭后'] },
          { id: 'parac-comp', generic: '复方氨酚烷胺', brand: '快克', origin: '国产', spec: '复方×10粒/盒', perDose: '1粒', times: ['早饭后', '晚饭后'] },
          { id: 'lianhua', generic: '连花清瘟', brand: '国产', origin: '国产', spec: '0.35g×48粒/盒', perDose: '4粒', times: ['早饭后', '午饭后', '晚饭后'] }
        ]
      },
      {
        id: 'ida', name: '缺铁性贫血', deptId: 'gp', aliases: ['贫血'],
        symptoms: ['面色苍白', '头晕、乏力', '心慌气短', '注意力下降', '异食癖'],
        diagnosis: ['血常规(血红蛋白降低)', '血清铁/铁蛋白降低'],
        tips: '多食红肉、动物肝脏；维生素C促进铁吸收。',
        drugs: [
          { id: 'ferrous', generic: '硫酸亚铁', brand: '国产', origin: '国产', spec: '0.3g×100片/盒', perDose: '0.3g', times: ['早饭后'] },
          { id: 'ferrous-fum', generic: '富马酸亚铁', brand: '国产', origin: '国产', spec: '0.2g×60片/盒', perDose: '0.2g', times: ['早饭后'] },
          { id: 'polysac-iron', generic: '多糖铁复合物', brand: '力蜚能', origin: '进口', spec: '150mg×10粒/盒', perDose: '150mg', times: ['早饭后'] }
        ]
      }
    ]
  }
]