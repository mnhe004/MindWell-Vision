// 上海医院库：三甲医院全覆盖 + 自定义类型
export interface Hospital {
  id: string
  name: string
  level: "三甲" | "三乙" | "二甲" | "社区医院" | "校医院" | "其他"
  district?: string   // 所在区（三甲医院填写）
  note?: string
}

export const SHANGHAI_HOSPITALS: Hospital[] = [
  // —— 黄浦区 ——
  { id: "rj", name: "上海交通大学医学院附属瑞金医院", level: "三甲", district: "黄浦区", note: "北部院区位于嘉定区" },
  { id: "rj_west", name: "上海交通大学医学院附属仁济医院（西院）", level: "三甲", district: "黄浦区" },
  { id: "jy9", name: "上海交通大学医学院附属第九人民医院", level: "三甲", district: "黄浦区", note: "北部院区位于宝山区" },
  { id: "cz", name: "上海长征医院", level: "三甲", district: "黄浦区" },
  { id: "hfz", name: "复旦大学附属妇产科医院（红房子医院）", level: "三甲", district: "黄浦区" },
  { id: "kq", name: "上海市口腔医院（复旦大学附属口腔医院）", level: "三甲", district: "黄浦区" },
  { id: "sg_west", name: "上海中医药大学附属曙光医院（西院）", level: "三甲", district: "黄浦区" },

  // —— 徐汇区 ——
  { id: "zs", name: "复旦大学附属中山医院", level: "三甲", district: "徐汇区" },
  { id: "ly6", name: "上海市第六人民医院", level: "三甲", district: "徐汇区", note: "临港院区位于浦东新区" },
  { id: "zl", name: "复旦大学附属肿瘤医院", level: "三甲", district: "徐汇区", note: "浦东院区位于浦东新区" },
  { id: "xk", name: "上海市胸科医院", level: "三甲", district: "徐汇区" },
  { id: "jsws", name: "上海市精神卫生中心", level: "三甲", district: "徐汇区" },
  { id: "yebh", name: "复旦大学附属眼耳鼻喉科医院", level: "三甲", district: "徐汇区", note: "浦江院区位于闵行区" },
  { id: "lh", name: "上海中医药大学附属龙华医院", level: "三甲", district: "徐汇区", note: "航头院区位于浦东新区" },
  { id: "gfyy", name: "中国福利会国际和平妇幼保健院", level: "三甲", district: "徐汇区" },

  // —— 静安区 ——
  { id: "hs", name: "复旦大学附属华山医院", level: "三甲", district: "静安区", note: "北院位于宝山区、虹桥院区位于闵行区" },
  { id: "hd", name: "华东医院", level: "三甲", district: "静安区" },
  { id: "sy10", name: "上海市第十人民医院", level: "三甲", district: "静安区" },
  { id: "zyyy", name: "上海市中医医院", level: "三甲", district: "静安区" },
  { id: "pf", name: "上海市皮肤病医院", level: "三甲", district: "静安区" },
  { id: "yfy", name: "上海市第一妇婴保健院", level: "三甲", district: "静安区", note: "东院位于浦东新区" },
  { id: "etyy_bjxl", name: "上海市儿童医院（北京西路院区）", level: "三甲", district: "静安区" },

  // —— 浦东新区 ——
  { id: "rj_east", name: "上海交通大学医学院附属仁济医院（东院）", level: "三甲", district: "浦东新区" },
  { id: "df", name: "上海市东方医院（同济大学附属）", level: "三甲", district: "浦东新区" },
  { id: "etyx", name: "上海交通大学医学院附属上海儿童医学中心", level: "三甲", district: "浦东新区" },
  { id: "sg", name: "上海中医药大学附属曙光医院（东院）", level: "三甲", district: "浦东新区" },
  { id: "yfy_east", name: "上海市第一妇婴保健院（东院）", level: "三甲", district: "浦东新区" },
  { id: "ly6_east", name: "上海市第六人民医院（临港院区）", level: "三甲", district: "浦东新区" },
  { id: "zl_pd", name: "复旦大学附属肿瘤医院（浦东院区）", level: "三甲", district: "浦东新区" },
  { id: "lh_ht", name: "上海中医药大学附属龙华医院（航头院区）", level: "三甲", district: "浦东新区" },
  { id: "gl", name: "上海市浦东新区公利医院", level: "三甲", district: "浦东新区" },
  { id: "qy7", name: "上海市第七人民医院（上海中医药大学附属）", level: "三甲", district: "浦东新区" },
  { id: "zlz", name: "上海市质子重离子医院（复旦大学附属）", level: "其他", district: "浦东新区", note: "质子重离子肿瘤专科医院" },

  // —— 杨浦区 ——
  { id: "xh", name: "上海交通大学医学院附属新华医院", level: "三甲", district: "杨浦区" },
  { id: "fk", name: "上海市肺科医院（同济大学附属）", level: "三甲", district: "杨浦区" },
  { id: "ch", name: "上海长海医院（海军军医大学第一附属医院）", level: "三甲", district: "杨浦区" },
  { id: "dykf", name: "上海市第一康复医院（同济大学附属康复医院）", level: "三甲", district: "杨浦区" },

  // —— 虹口区 ——
  { id: "sy1", name: "上海市第一人民医院", level: "三甲", district: "虹口区", note: "南部院区位于松江区" },
  { id: "yy", name: "上海中医药大学附属岳阳中西医结合医院", level: "三甲", district: "虹口区" },
  { id: "zxyjh", name: "上海市中西医结合医院（上海中医药大学附属）", level: "三甲", district: "虹口区" },

  // —— 普陀区 ——
  { id: "tj", name: "上海市同济医院（同济大学附属）", level: "三甲", district: "普陀区" },
  { id: "etyy", name: "上海市儿童医院（泸定路院区）", level: "三甲", district: "普陀区" },

  // —— 长宁区 ——
  { id: "tr", name: "上海交通大学医学院附属同仁医院", level: "三甲", district: "长宁区" },
  { id: "gh", name: "上海市光华中西医结合医院（上海中医药大学附属）", level: "三甲", district: "长宁区" },

  // —— 闵行区 ——
  { id: "ek", name: "复旦大学附属儿科医院", level: "三甲", district: "闵行区" },
  { id: "lnyx", name: "上海市老年医学中心（复旦大学附属）", level: "三甲", district: "闵行区" },
  { id: "hs_hq", name: "复旦大学附属华山医院（虹桥院区）", level: "三甲", district: "闵行区" },
  { id: "yebh_pj", name: "复旦大学附属眼耳鼻喉科医院（浦江院区）", level: "三甲", district: "闵行区" },

  // —— 嘉定区 ——
  { id: "dfgd", name: "海军军医大学第三附属医院（东方肝胆外科医院）", level: "三甲", district: "嘉定区" },
  { id: "rj_north", name: "上海交通大学医学院附属瑞金医院（北部院区）", level: "三甲", district: "嘉定区" },

  // —— 松江区 ——
  { id: "sy1_south", name: "上海市第一人民医院（南部院区）", level: "三甲", district: "松江区" },

  // —— 青浦区 ——
  { id: "zs_qp", name: "复旦大学附属中山医院青浦分院（上海市青浦区中心医院）", level: "三甲", district: "青浦区" },

  // —— 金山区 ——
  { id: "gwws", name: "上海市公共卫生临床中心（复旦大学附属）", level: "三甲", district: "金山区" },
  { id: "js", name: "复旦大学附属金山医院", level: "三甲", district: "金山区" },

  // —— 宝山区 ——
  { id: "jy9_north", name: "上海交通大学医学院附属第九人民医院（北部院区）", level: "三甲", district: "宝山区" },
  { id: "hs_north", name: "复旦大学附属华山医院（北院）", level: "三甲", district: "宝山区" },
]