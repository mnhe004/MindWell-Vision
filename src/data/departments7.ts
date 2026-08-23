// 疾病库扩容C：肿瘤/血液/免疫/其他 新增疾病
import type { Department } from './departments'

export const moreDepartments5: Department[] = [
  { id: 'oncology', name: '肿瘤科', color: '#9B59B6', emoji: '🎗️', diseases: [
    { id: 'esophageal-ca', name: '食管癌', deptId: 'oncology', aliases: ['食道癌'], symptoms: ['进行性吞咽困难', '胸骨后疼痛或烧灼感', '体重下降', '进食后呕吐'], diagnosis: ['胃镜检查+病理活检', '上消化道钡餐造影', '胸部增强CT'], tips: '吞咽不适持续两周以上应做胃镜检查；戒烟限酒，避免过烫饮食；术后定期复查并加强营养支持', drugs: [] },
    { id: 'pancreatic-cancer', name: '胰腺癌', deptId: 'oncology', aliases: ['胰头癌'], symptoms: ['上腹或腰背部隐痛', '进行性黄疸', '体重显著下降', '新发血糖异常'], diagnosis: ['腹部增强CT', 'CA19-9肿瘤标志物', '超声内镜+活检'], tips: '早期症状隐匿，高危人群应定期筛查；出现黄疸需及时就医；治疗期间注意营养支持', drugs: [] },
    { id: 'gallbladder-cancer', name: '胆囊癌', deptId: 'oncology', aliases: ['胆囊恶性肿瘤'], symptoms: ['右上腹持续疼痛', '黄疸', '恶心呕吐', '消瘦乏力'], diagnosis: ['腹部超声', '增强CT或MRI', 'CA19-9、CEA等肿瘤标志物'], tips: '胆囊结石长期不处理者应定期随访；发现胆囊壁增厚或肿块及时手术评估；术后规范随访', drugs: [] },
    { id: 'cholangiocarcinoma', name: '胆管癌', deptId: 'oncology', aliases: ['肝外胆管癌', '胆管细胞癌'], symptoms: ['进行性梗阻性黄疸', '皮肤瘙痒', '陶土样大便', '右上腹胀痛'], diagnosis: ['MRCP磁共振胰胆管成像', '增强CT', 'ERCP+细胞学或活检'], tips: '黄疸进行性加重需尽快就诊；注意观察大便颜色变化；规范治疗可改善生存质量', drugs: [] },
    { id: 'renal-cancer', name: '肾癌', deptId: 'oncology', aliases: ['肾细胞癌', '肾脏肿瘤'], symptoms: ['无痛性血尿', '腰部或腹部肿块', '腰痛', '不明原因发热消瘦'], diagnosis: ['肾脏彩超', '腹部增强CT', '尿常规与肾功能检查'], tips: '无痛性血尿需高度警惕；戒烟、控制体重可降低发病风险；术后定期复查肾功能与影像', drugs: [] },
    { id: 'bladder-cancer', name: '膀胱癌', deptId: 'oncology', aliases: ['膀胱肿瘤'], symptoms: ['间歇性无痛性血尿', '尿频尿急', '排尿疼痛', '下腹坠胀'], diagnosis: ['尿常规+尿脱落细胞学', '膀胱镜检查+活检', '泌尿系CT'], tips: '血尿是重要信号，即使自行消失也应检查；吸烟是主要危险因素，应戒烟；术后需定期膀胱镜复查', drugs: [] },
    { id: 'endometrial-cancer', name: '子宫内膜癌', deptId: 'oncology', aliases: ['子宫体癌', '子宫内膜腺癌'], symptoms: ['绝经后阴道出血', '月经量增多或经期延长', '阴道异常排液', '下腹疼痛'], diagnosis: ['妇科B超（子宫内膜厚度）', '诊断性刮宫+病理', '盆腔MRI'], tips: '绝经后出血需及时就诊；肥胖、高血压、糖尿病为高危因素；规范治疗早期预后较好', drugs: [] },
    { id: 'ovarian-cancer', name: '卵巢癌', deptId: 'oncology', aliases: ['卵巢恶性肿瘤'], symptoms: ['腹胀、腹部包块', '腹痛', '月经紊乱', '消瘦乏力'], diagnosis: ['妇科B超', 'CA125肿瘤标志物', '盆腔增强CT或MRI'], tips: '腹胀伴盆腔包块需警惕；有家族史者应定期妇科检查；规范手术+化疗可改善预后', drugs: [] }
  ] },
  { id: 'hemato', name: '血液科', color: '#E74C3C', emoji: '🩸', diseases: [
    { id: 'aplastic-anemia', name: '再生障碍性贫血', deptId: 'hemato', aliases: ['再障', 'AA'], symptoms: ['贫血乏力', '皮肤瘀斑出血', '反复感染发热', '面色苍白'], diagnosis: ['血常规（全血细胞减少）', '骨髓穿刺+活检', '网织红细胞计数'], tips: '避免接触苯等化学毒物；注意预防感染、避免磕碰；规范免疫抑制或移植治疗', drugs: [] },
    { id: 'thalassemia', name: '地中海贫血', deptId: 'hemato', aliases: ['珠蛋白生成障碍性贫血', '地贫'], symptoms: ['自幼贫血', '面色苍白', '脾肿大', '发育迟缓'], diagnosis: ['血常规+血红蛋白电泳', '地贫基因检测', '铁蛋白评估'], tips: '婚前及产前筛查可预防重型地贫；轻中型患者定期随访；重型需规律输血并祛铁治疗', drugs: [] },
    { id: 'hemolytic-anemia', name: '溶血性贫血', deptId: 'hemato', aliases: ['溶血性贫血'], symptoms: ['皮肤巩膜黄染', '贫血乏力', '尿色加深呈酱油色', '脾肿大'], diagnosis: ['血常规+网织红细胞计数', '血清胆红素（间接胆红素升高）', 'Coombs试验等溶血相关检查'], tips: '明确病因后对症治疗；急性溶血需及时就医；避免感染、药物等诱发因素', drugs: [] },
    { id: 'thrombocytopenia', name: '血小板减少症', deptId: 'hemato', aliases: ['血小板减少', '免疫性血小板减少症'], symptoms: ['皮肤瘀点瘀斑', '牙龈出血', '鼻出血', '月经量多'], diagnosis: ['血常规（血小板计数降低）', '骨髓穿刺', '血小板相关抗体'], tips: '避免磕碰和剧烈运动；避免使用阿司匹林等影响血小板的药物；规律复查血常规', drugs: [] },
    { id: 'hemophilia', name: '血友病', deptId: 'hemato', aliases: ['血友病A', '血友病B'], symptoms: ['关节反复出血肿胀', '肌肉血肿', '轻微外伤后出血不止', '皮肤瘀斑'], diagnosis: ['凝血因子活性测定', 'APTT延长及纠正试验', '家族史评估'], tips: '避免创伤和剧烈运动；出血时及时补充凝血因子；就医时主动告知病史', drugs: [] },
    { id: 'mds', name: '骨髓增生异常综合征', deptId: 'hemato', aliases: ['MDS', '骨髓增生异常'], symptoms: ['贫血乏力', '反复感染', '出血倾向', '发热'], diagnosis: ['血常规+血涂片', '骨髓穿刺+活检', '染色体及基因突变检测'], tips: '定期监测血象变化；警惕向急性白血病转化；规范治疗改善生存质量', drugs: [] },
    { id: 'multiple-myeloma', name: '多发性骨髓瘤', deptId: 'hemato', aliases: ['骨髓瘤', 'MM'], symptoms: ['骨痛（腰背部常见）', '病理性骨折', '贫血乏力', '肾功能异常、反复感染'], diagnosis: ['血清蛋白电泳+免疫固定电泳', '骨髓穿刺（浆细胞比例）', '影像学检查（骨质破坏）'], tips: '骨痛持续不缓解需排查本病；注意保护骨骼避免摔倒；新型药物联合治疗显著改善预后', drugs: [] },
    { id: 'polycythemia-vera', name: '真性红细胞增多症', deptId: 'hemato', aliases: ['真红', 'PV'], symptoms: ['面红、结膜充血', '头痛头晕', '皮肤瘙痒（遇水加重）', '血压升高'], diagnosis: ['血常规（红细胞、血红蛋白显著升高）', 'JAK2基因突变检测', '促红细胞生成素水平'], tips: '定期放血治疗控制血细胞比容；警惕血栓形成风险；监测血压并预防血栓', drugs: [] }
  ] },
  { id: 'rheum', name: '风湿免疫科', color: '#E06A6A', emoji: '🦴', diseases: [
    { id: 'sjogren-syndrome', name: '干燥综合征', deptId: 'rheum', aliases: ['舍格伦综合征'], symptoms: ['口干眼干', '腮腺反复肿大', '关节痛', '猖獗性龋齿'], diagnosis: ['抗SSA/抗SSB抗体', '唇腺活检', '泪液及唾液分泌功能检查'], tips: '多饮水、使用人工泪液；注意口腔护理；定期随访排查内脏受累', drugs: [] },
    { id: 'scleroderma', name: '硬皮病', deptId: 'rheum', aliases: ['系统性硬化症'], symptoms: ['皮肤变硬紧绷', '雷诺现象（手指遇冷变白变紫）', '手指肿胀', '吞咽困难'], diagnosis: ['抗Scl-70抗体或抗着丝点抗体', '皮肤活检', '肺功能及高分辨CT'], tips: '注意保暖、避免寒冷刺激；戒烟；定期监测肺功能和肾功能', drugs: [] },
    { id: 'dermatomyositis', name: '皮肌炎', deptId: 'rheum', aliases: ['DM'], symptoms: ['眼睑紫红色皮疹（向阳疹）', '四肢近端肌无力', '颈肩部肌痛', '吞咽困难'], diagnosis: ['肌酸激酶等肌酶升高', '肌电图', '肌肉活检或肌炎抗体'], tips: '注意防晒；需排查合并肿瘤风险；规范激素及免疫抑制治疗', drugs: [] },
    { id: 'polymyositis', name: '多发性肌炎', deptId: 'rheum', aliases: ['PM'], symptoms: ['对称性四肢近端肌无力', '肌肉疼痛', '上楼及梳头困难', '吞咽困难'], diagnosis: ['肌酸激酶升高', '肌电图（肌源性损害）', '肌肉活检'], tips: '尽早规范治疗避免肌萎缩；坚持康复锻炼；定期复查肌酶', drugs: [] },
    { id: 'behcet-disease', name: '白塞病', deptId: 'rheum', aliases: ['贝赫切特综合征'], symptoms: ['反复口腔溃疡', '外阴溃疡', '眼炎（葡萄膜炎）', '皮肤结节红斑'], diagnosis: ['针刺反应试验', '临床诊断标准', '眼底检查'], tips: '口腔溃疡反复发作需警惕；眼炎需及时治疗以防失明；规范随访控制复发', drugs: [] },
    { id: 'systemic-vasculitis', name: '血管炎', deptId: 'rheum', aliases: ['系统性血管炎', 'ANCA相关性血管炎'], symptoms: ['不明原因发热', '关节肌肉疼痛', '皮肤紫癜或网状青斑', '多系统受累表现'], diagnosis: ['ANCA抗体检测', '血管影像学检查', '受累组织活检'], tips: '多系统症状需尽早就诊；规范免疫抑制治疗；定期监测脏器功能', drugs: [] },
    { id: 'antiphospholipid-syndrome', name: '抗磷脂综合征', deptId: 'rheum', aliases: ['APS', '抗磷脂抗体综合征'], symptoms: ['反复血栓形成', '反复流产', '血小板减少', '网状青斑'], diagnosis: ['抗心磷脂抗体/狼疮抗凝物', 'β2糖蛋白I抗体', '血栓影像学检查'], tips: '有血栓史者需长期抗凝治疗；育龄女性备孕前应咨询医生；避免久坐以降低血栓风险', drugs: [] },
    { id: 'adult-onset-still-disease', name: '成人斯蒂尔病', deptId: 'rheum', aliases: ['成人Still病', 'AOSD'], symptoms: ['每日弛张高热', '橙红色皮疹', '关节痛', '咽痛、淋巴结肿大'], diagnosis: ['血常规（白细胞升高）', '血清铁蛋白显著升高', '排除感染与肿瘤后诊断'], tips: '高热伴皮疹需及时就诊；规范抗炎治疗；长期随访监测复发', drugs: [] }
  ] },
  { id: 'derm', name: '皮肤科', color: '#F08CA8', emoji: '🧴', diseases: [
    { id: 'herpes-zoster', name: '带状疱疹', deptId: 'derm', aliases: ['缠腰龙', '蛇串疮'], symptoms: ['单侧带状簇集水疱', '剧烈灼痛或刺痛', '低热乏力', '皮疹沿神经分布'], diagnosis: ['典型皮损分布', '必要时疱液病毒核酸检测'], tips: '发病72小时内抗病毒效果最佳；避免抓破水疱以防感染；老年人注意防范带状疱疹后神经痛', drugs: [] },
    { id: 'herpes-simplex', name: '单纯疱疹', deptId: 'derm', aliases: ['口唇疱疹', '热疮'], symptoms: ['口唇周围簇集小水疱', '局部灼热刺痛', '水疱破溃结痂'], diagnosis: ['典型皮损', '必要时疱液PCR检测'], tips: '避免抠抓，注意隔离防止传播；发作期注意休息、避免劳累；反复发作可咨询医生预防用药', drugs: [] },
    { id: 'tinea-pedis', name: '足癣（脚气）', deptId: 'derm', aliases: ['脚气', '香港脚'], symptoms: ['足趾间脱皮浸渍', '水疱瘙痒', '足底皮肤增厚脱屑', '异味'], diagnosis: ['真菌镜检（皮屑）', '真菌培养'], tips: '保持足部干燥通风；袜子毛巾煮沸消毒；坚持足疗程用药以防复发', drugs: [] },
    { id: 'seborrheic-dermatitis', name: '脂溢性皮炎', deptId: 'derm', aliases: ['脂溢性湿疹'], symptoms: ['头皮屑增多', '头皮红斑瘙痒', '面颊鼻翼油脂性脱屑', '胸背部红疹'], diagnosis: ['典型临床表现', '必要时真菌镜检排除马拉色菌感染'], tips: '使用温和去屑洗发水；避免熬夜和精神紧张；少食辛辣油腻食物', drugs: [] },
    { id: 'hair-loss', name: '脱发', deptId: 'derm', aliases: ['斑秃', '雄激素性脱发', '脂溢性脱发'], symptoms: ['头发进行性稀疏', '斑片状脱发区', '发际线后移', '头皮油腻'], diagnosis: ['皮肤镜检查', '拉发试验', '性激素及甲状腺功能检查'], tips: '规律作息、减轻精神压力；避免过度烫染；遵医嘱使用米诺地尔等药物', drugs: [] },
    { id: 'melasma', name: '黄褐斑', deptId: 'derm', aliases: ['肝斑', '妊娠斑'], symptoms: ['面颊部对称黄褐色斑片', '日晒后加重', '边界不清'], diagnosis: ['典型临床表现', 'Wood灯检查评估色素深度'], tips: '严格防晒（物理防晒+防晒霜）；避免口服避孕药等诱发因素；激光治疗需选择正规机构', drugs: [] },
    { id: 'seborrheic-keratosis', name: '老年斑', deptId: 'derm', aliases: ['脂溢性角化病', '基底细胞乳头瘤'], symptoms: ['面颈手部淡褐色丘疹', '表面粗糙呈疣状', '缓慢增大增多'], diagnosis: ['皮肤镜检查', '必要时病理活检'], tips: '多为良性，无需过度担心；短期内迅速增大或破溃需就医；避免抠抓刺激', drugs: [] },
    { id: 'pruritus', name: '皮肤瘙痒症', deptId: 'derm', aliases: ['瘙痒症'], symptoms: ['全身或局部皮肤瘙痒', '夜间加重', '抓痕、皮肤干燥'], diagnosis: ['体格检查', '血常规/肝肾功能排查内科疾病'], tips: '洗澡水温不宜过高；加强皮肤保湿护理；瘙痒持续不缓解需排查内科疾病', drugs: [] }
  ] },
  { id: 'ophth', name: '眼科', color: '#5FB8C9', emoji: '👁️', diseases: [
    { id: 'myopia', name: '近视', deptId: 'ophth', aliases: ['近视眼', '屈光不正'], symptoms: ['看远模糊', '看近清晰', '眯眼视物', '眼疲劳'], diagnosis: ['视力检查', '散瞳验光', '眼轴测量'], tips: '保持正确读写姿势和充足照明；每日户外活动2小时；定期复查视力', drugs: [] },
    { id: 'hyperopia', name: '远视', deptId: 'ophth', aliases: ['远视眼'], symptoms: ['看近疲劳', '眼胀头痛', '儿童可伴内斜视'], diagnosis: ['散瞳验光', '视力检查'], tips: '儿童远视需定期复查；视疲劳明显需配镜矫正；老年轻度远视可表现为老花加重', drugs: [] },
    { id: 'astigmatism', name: '散光', deptId: 'ophth', aliases: ['规则散光'], symptoms: ['视物模糊变形', '看东西有重影', '眼疲劳头痛', '夜间视力差'], diagnosis: ['散瞳验光', '角膜地形图'], tips: '规范验光配镜；避免眯眼视物；度数稳定后可考虑手术矫正', drugs: [] },
    { id: 'presbyopia', name: '老花眼', deptId: 'ophth', aliases: ['老花', '老视'], symptoms: ['近距离阅读困难', '看近需移远', '阅读后眼疲劳', '光线暗时加重'], diagnosis: ['视力及验光检查', '调节功能检查'], tips: '配戴合适的老花镜；保证充足阅读照明；定期眼科检查排除其他眼病', drugs: [] },
    { id: 'retinal-detachment', name: '视网膜脱离', deptId: 'ophth', aliases: ['视网膜脱落', '网脱'], symptoms: ['眼前闪光感', '飞蚊突然增多', '视野缺损（黑影遮挡）', '视力骤降'], diagnosis: ['散瞳眼底检查', '眼部B超', 'OCT检查'], tips: '突然闪光伴黑影增多需立即就医；高度近视人群需定期查眼底；及时手术可挽救视力', drugs: [] },
    { id: 'macular-degeneration', name: '黄斑变性', deptId: 'ophth', aliases: ['年龄相关性黄斑变性', 'AMD'], symptoms: ['中心视力下降', '视物变形', '中心暗点', '色觉异常'], diagnosis: ['眼底检查', 'OCT（光学相干断层扫描）', '荧光血管造影'], tips: '戒烟、控制血压血脂；补充叶黄素等营养素；湿性黄斑变性需及时抗VEGF治疗', drugs: [] }
  ] },
  { id: 'ent', name: '耳鼻咽喉科', color: '#7BA8C9', emoji: '👂', diseases: [
    { id: 'otitis-media-acute', name: '中耳炎', deptId: 'ent', aliases: ['急性中耳炎', '分泌性中耳炎'], symptoms: ['耳痛', '耳闷塞感', '听力下降', '耳流脓'], diagnosis: ['耳镜检查（鼓膜表现）', '纯音听阈测定', '鼓室导抗图'], tips: '感冒后耳痛需及时就诊；避免用力擤鼻涕；游泳洗澡时注意耳道防水', drugs: [] },
    { id: 'tinnitus-chronic', name: '耳鸣', deptId: 'ent', aliases: ['神经性耳鸣'], symptoms: ['耳内鸣响（蝉鸣声或嗡嗡声）', '听力下降', '耳闷', '伴头晕'], diagnosis: ['纯音测听', '耳鸣匹配检查', '必要时影像学排除听神经瘤'], tips: '避免长时间戴耳机和噪音暴露；保证充足睡眠、缓解焦虑；持续耳鸣需专科评估', drugs: [] },
    { id: 'sudden-deafness', name: '突发性耳聋', deptId: 'ent', aliases: ['突发性听力下降', '特发性突聋'], symptoms: ['突然听力下降', '耳鸣', '眩晕', '耳闷胀感'], diagnosis: ['纯音测听（相邻频率下降）', '影像学排除颅内病变'], tips: '72小时内就诊效果最好；避免熬夜和过度劳累；规范激素及改善循环治疗', drugs: [] },
    { id: 'sinusitis', name: '鼻窦炎', deptId: 'ent', aliases: ['急性鼻窦炎', '慢性鼻窦炎'], symptoms: ['鼻塞流脓涕', '头痛面颊痛', '嗅觉减退', '鼻涕倒流'], diagnosis: ['鼻内镜检查', '鼻窦CT', '鼻腔分泌物检查'], tips: '感冒后症状迁延不愈需排查；生理盐水洗鼻有助恢复；规范抗炎治疗防止慢性化', drugs: [] },
    { id: 'nasal-polyp', name: '鼻息肉', deptId: 'ent', aliases: ['鼻息肉病'], symptoms: ['持续性鼻塞', '嗅觉减退或丧失', '流大量清涕或脓涕', '打鼾张口呼吸'], diagnosis: ['鼻内镜检查', '鼻窦CT', '过敏原检测（常合并哮喘）'], tips: '规范药物治疗控制复发；较大息肉需手术切除；合并哮喘者需综合管理', drugs: [] },
    { id: 'vocal-nodules', name: '声带小结', deptId: 'ent', aliases: ['声带息肉样变', '教师小结'], symptoms: ['声音嘶哑', '发声易疲劳', '音调变低', '高音上不去'], diagnosis: ['电子喉镜检查', '嗓音功能评估'], tips: '充分声休、少说话；避免清嗓和大声喊叫；科学发声训练以防复发', drugs: [] }
  ] },
  { id: 'psych', name: '精神心理科', color: '#A78BFA', emoji: '🌿', diseases: [
    { id: 'obsessive-compulsive-disorder', name: '强迫症', deptId: 'psych', aliases: ['强迫性障碍', 'OCD'], symptoms: ['反复强迫思维', '反复洗手检查等强迫行为', '明知不必要却无法控制', '明显焦虑痛苦'], diagnosis: ['精神科临床访谈', 'Y-BOCS量表评估'], tips: '尽早寻求专业治疗；药物联合认知行为治疗效果较好；家人应给予理解支持而非指责', drugs: [] },
    { id: 'panic-disorder', name: '惊恐障碍', deptId: 'psych', aliases: ['急性焦虑发作', '惊恐发作'], symptoms: ['突发心悸胸闷', '濒死感或失控感', '呼吸困难、出汗', '发作后担心再次发作'], diagnosis: ['精神科评估', '心电图等检查排除心脏疾病'], tips: '发作时缓慢深呼吸放松；规律作息，避免咖啡浓茶；规范治疗可显著减少发作', drugs: [] },
    { id: 'social-phobia', name: '社交恐惧症', deptId: 'psych', aliases: ['社交焦虑障碍', '社交恐怖症'], symptoms: ['害怕当众讲话或社交场合', '脸红手抖出汗', '回避社交活动', '过度担心被评价'], diagnosis: ['精神科临床访谈', '社交焦虑量表评估'], tips: '循序渐进进行暴露练习；认知行为治疗改善明显；必要时药物辅助治疗', drugs: [] },
    { id: 'post-traumatic-stress-disorder', name: '创伤后应激障碍', deptId: 'psych', aliases: ['PTSD', '创伤后应激反应'], symptoms: ['创伤事件反复闪回', '噩梦惊醒', '回避相关场景', '警觉性增高易受惊'], diagnosis: ['精神科临床访谈', 'PCL-5等量表评估'], tips: '及时心理干预非常重要；家人多倾听陪伴；规范治疗可显著改善症状', drugs: [] },
    { id: 'eating-disorder', name: '进食障碍', deptId: 'psych', aliases: ['饮食障碍'], symptoms: ['进食行为异常', '体重明显改变', '对体重体型过度关注', '影响日常功能'], diagnosis: ['精神科评估+营养状态评估', '区分厌食型与贪食型'], tips: '先分清是厌食型还是贪食型，再针对性治疗；营养+心理联合治疗；家人给予支持而非施压', drugs: [] },
    { id: 'anorexia-nervosa', name: '神经性厌食症', deptId: 'psych', parentId: 'eating-disorder', aliases: ['厌食症'], symptoms: ['刻意严格限制进食', '体重明显低于正常', '对发胖极度恐惧', '女性可伴闭经'], diagnosis: ['体重/BMI评估', '营养状态与电解质检查', '精神科访谈'], tips: '提醒：每周固定称重，体重过低需尽快就医；先恢复营养再心理治疗；家人勿强迫进食', drugs: [] },
    { id: 'bulimia-nervosa', name: '神经性贪食症', deptId: 'psych', parentId: 'eating-disorder', aliases: ['贪食症', '暴食症'], symptoms: ['反复暴食发作', '暴食后催吐或滥用泻药', '体重多正常或波动', '强烈自责与内疚'], diagnosis: ['精神科访谈', '口腔/牙齿与电解质检查', '排除消化道损伤'], tips: '提醒：规律三餐减少暴食诱因；暴食后催吐很伤身体；定期查电解质与牙齿', drugs: [] },
    { id: 'adhd', name: '注意缺陷多动障碍', deptId: 'psych', aliases: ['多动症', 'ADHD'], symptoms: ['注意力不集中', '做事粗心丢三落四', '多动冲动', '难以安静等待'], diagnosis: ['精神科或儿科临床评估', '家长/教师版行为量表', '排除学习障碍等共病'], tips: '儿童期早干预效果较好；家庭与学校配合行为管理；必要时药物规范治疗', drugs: [] }
  ] },
  { id: 'gyn', name: '妇产科', color: '#EE8FA3', emoji: '🌺', diseases: [
    { id: 'uterine-fibroid', name: '子宫肌瘤', deptId: 'gyn', aliases: ['子宫平滑肌瘤', '肌瘤'], symptoms: ['月经量增多经期延长', '经期腹痛', '下腹包块', '贫血乏力'], diagnosis: ['妇科B超', '必要时宫腔镜或MRI'], tips: '无症状者定期随访即可；月经量多伴贫血需及时处理；备孕前咨询医生评估', drugs: [] },
    { id: 'endometriosis-2', name: '子宫内膜异位症', deptId: 'gyn', aliases: ['内异症', '巧克力囊肿'], symptoms: ['进行性痛经', '慢性盆腔痛', '性交痛', '不孕'], diagnosis: ['妇科B超', 'CA125', '腹腔镜检查（确诊金标准）'], tips: '痛经进行性加重需警惕；有生育需求者尽早规划；规范药物或手术治疗缓解症状', drugs: [] },
    { id: 'ovarian-cyst', name: '卵巢囊肿', deptId: 'gyn', aliases: ['卵巢囊性肿物'], symptoms: ['多无明显症状', '下腹隐痛或坠胀', '月经紊乱', '囊肿较大时可触及包块'], diagnosis: ['妇科B超', 'CA125等肿瘤标志物', '必要时MRI'], tips: '多数为良性，定期复查即可；突发剧烈腹痛需警惕囊肿破裂或扭转；绝经后新发囊肿需警惕', drugs: [] },
    { id: 'vaginitis-2', name: '阴道炎', deptId: 'gyn', aliases: ['霉菌性阴道炎', '细菌性阴道病', '滴虫性阴道炎'], symptoms: ['白带增多异常', '外阴瘙痒灼痛', '异味', '性交痛'], diagnosis: ['白带常规检查', '阴道微生态检测', '病原体培养'], tips: '避免自行冲洗阴道；保持外阴清洁干燥；性伴侣同治防止交叉感染', drugs: [] },
    { id: 'pelvic-inflammatory-disease', name: '盆腔炎', deptId: 'gyn', aliases: ['PID', '盆腔炎性疾病'], symptoms: ['下腹持续疼痛', '发热', '白带增多', '腰骶酸痛'], diagnosis: ['妇科双合诊检查', '血常规/CRP', '盆腔B超'], tips: '急性期规范足疗程抗感染治疗；注意经期卫生；反复发作可能影响生育，需重视', drugs: [] }
  ] },
  { id: 'uro', name: '泌尿外科', color: '#6FA8DC', emoji: '💧', diseases: [
    { id: 'balanitis', name: '包皮龟头炎', deptId: 'uro', aliases: ['龟头炎', '包皮炎'], symptoms: ['包皮龟头红肿', '瘙痒灼痛', '分泌物增多', '排尿不适'], diagnosis: ['体格检查', '分泌物涂片或培养'], tips: '保持局部清洁干燥；反复发作可考虑包皮环切；注意排查血糖（糖尿病患者易发）', drugs: [] },
    { id: 'orchitis', name: '睾丸炎', deptId: 'uro', aliases: ['急性睾丸炎'], symptoms: ['睾丸肿痛', '阴囊红肿发热', '发热畏寒', '下腹牵拉痛'], diagnosis: ['体格检查', '阴囊彩超', '血常规'], tips: '急性期卧床休息并托高阴囊；规范抗感染治疗；腮腺炎后睾丸炎需及时就医', drugs: [] },
    { id: 'epididymitis', name: '附睾炎', deptId: 'uro', aliases: ['附睾炎'], symptoms: ['附睾肿大疼痛', '阴囊坠胀', '发热', '尿频尿急'], diagnosis: ['体格检查（附睾压痛）', '阴囊彩超', '尿常规'], tips: '急性期休息并托高阴囊；足疗程抗感染防止慢性化；慢性附睾炎需长期管理', drugs: [] },
    { id: 'varicocele-2', name: '精索静脉曲张', deptId: 'uro', aliases: ['精索静脉曲张'], symptoms: ['阴囊坠胀隐痛', '久站后加重', '阴囊蚯蚓状团块', '可伴精液质量下降'], diagnosis: ['体格检查', '阴囊彩超', '精液分析（备孕评估）'], tips: '避免久站久坐；穿紧身内裤托高阴囊；影响生育者需手术评估', drugs: [] },
    { id: 'erectile-dysfunction', name: '男性勃起功能障碍', deptId: 'uro', aliases: ['ED', '阳痿', '勃起障碍'], symptoms: ['勃起硬度不足', '难以维持勃起', '性欲减退', '晨勃减少'], diagnosis: ['病史评估（IIEF-5量表）', '性激素检查', '夜间勃起监测或阴茎血管超声'], tips: '戒烟限酒、控制三高；规律运动改善血管功能；规范就医，避免滥用保健品', drugs: [] }
  ] }
]