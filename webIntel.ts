/**
 * 本地生活与短视频大数据智能检索、行业特征深度洞察与知识库构建器。
 * 
 * 拒绝公式化死板模板！
 * 1. 真实接入百度/联网检索提炼行业工艺与网络爆款卖点；
 * 2. 深度行业图谱（美式熏肉、烤肉、水饺、咖啡、美发等垂直专业工艺）；
 * 3. 融入商户画像与红线约束（免后厨拍摄、老板不出镜等）；
 * 4. 输出极富针对性、烟火气与专业细节的高转化分镜脚本。
 */

export interface IndustryKnowledge {
  keywords: string[];
  craft_detail: string;
  pain_points: string;
  visual_shots: string[];
  script_scenes: string[];
}

export const INDUSTRY_KNOWLEDGE_BASE: Record<string, IndustryKnowledge> = {
  美式熏肉: {
    keywords: [
      '果木低温慢熏12小时',
      '天然粉红烟熏环',
      '外层焦褐脆壳Bark',
      '手捏肉汁充盈',
      '牛胸肉牛肋排',
      '粗研黑胡椒与海盐',
    ],
    craft_detail:
      '遵循德州传统果木慢熏工艺，不加任何工业烟熏液，经12小时低温慢火硬核熏烤，形成标志性的天然粉红烟熏环（Smoke Ring）与酥脆焦褐外壳（Bark），肉质软嫩到轻轻一撕即开，肥而不腻化渣，原汁原味肉香四溢。',
    pain_points:
      '很多外行店为了图快用浓缩烟熏液腌制、微波加热甚至工业合成，肉质干柴发硬像嚼皮带，吃两口就发腻，还卖出昂贵西餐厅价格让顾客交智商税。',
    visual_shots: [
      '高位大俯拍特写！整块刚出炉的深色焦褐牛胸肉切面展示，双手轻轻一挤，清亮肉汁汩汩冒出，蒸汽腾腾（视觉加法铺满）。',
      '侧逆光微距慢动作！高清展示外层焦脆黑胡椒粒与内层鲜嫩粉红烟熏环（Smoke Ring），刀刃切下肉片丝滑化开。',
      '前厅街区环境纵深轴线！顾客大口咀嚼满足表情，空盘搭配精酿鲜啤与自制解腻酸黄瓜，座无虚席夜市烟火气。',
      '平视中景主理人手持招牌拼盘，屏幕左下角弹出同城抖音来客专属体验券标签，手指明确指引锁定优惠。',
    ],
    script_scenes: [
      '千万别去高档西餐厅花几百块吃微波加热的预制假烟熏肉了！看看正宗果木慢熏出来的肉汁有多狂暴！',
      '整整12小时果木低温慢烤，不加一滴香精！仔细看这个漂亮的粉红烟熏环，外层焦香酥脆，里面软嫩到入口即化！',
      '在本地经常下班想喝酒吃硬菜的朋友，来上一盘刚切下来的热气大肉，配上冰镇精酿，这一口太治愈了！',
      '今天左下角限时开放同城体验特惠，不用可退、过期自动退，喜欢吃肉的朋友赶紧锁一份！',
    ],
  },
  烤肉: {
    keywords: [
      '整根大油边',
      '盘龙五花肉',
      '传统成品烤肉免动手',
      '无烟上桌',
      '自制重庆干碟',
      '精酿鲜啤',
    ],
    craft_detail:
      '坚持传统成品烤肉上桌，客人免动手免除油烟熏烤烦恼；招牌整根大油边外焦里嫩，盘龙五花肉滋滋冒油，自制重庆调料地道鲜辣，搭配驻唱歌手现场互动。',
    pain_points:
      '普通烤肉店自己烤容易烤焦烤干，弄得一身油烟味还手忙脚乱，烤肉冷热不均口感差。',
    visual_shots: [
      '铁板大特写！烤至焦黄冒油的整根大油边滋滋作响，剪刀剪开切面肉汁四溢。',
      '筷子蘸取正宗重庆干碟裹满红油调料，微距慢动作推近，色泽诱人。',
      '前厅夜市座无虚席全景，驻唱歌手吉他弹唱，顾客碰杯畅饮市井氛围。',
      '桌面整齐摆放招牌酒肉套餐，手指清晰指向屏幕左下角团购定位。',
    ],
    script_scenes: [
      '下班想吃硬核烤肉又讨厌满身油烟味？藏在老街巷里的这家宝藏小馆端上来的全是烤好的招牌硬菜！',
      '看看这整根大油边和盘龙五花肉，师傅火候拿捏得恰到好处，外皮焦脆，咬一口里面全是滚烫肉汁！',
      '一边听现场吉他民谣驻唱，一边大口吃肉喝精酿，人均几十块直接爽到天灵盖！',
      '同城专属引流特权已挂在左下角，两杯精酿加肉券随时可退，赶紧约上兄弟开整！',
    ],
  },
  水饺: {
    keywords: [
      '黑猪后腿肉',
      '多汁脆莲菜',
      '纯手工现包现煮',
      '绝非冷冻预制',
      '老街坊三十年口碑',
      '免费续加',
    ],
    craft_detail:
      '选用优质黑猪肉精肉与肥肉黄金比例混合，搭配新鲜清脆莲菜，手工现拌馅料、手工现擀皮、开水现煮，皮薄大馅，咬开爆汁，搭配老陕香醋与秘制油泼辣子。',
    pain_points:
      '市面上大部分快餐店用水晶速冻水饺或拼接冷冻肉，肉馅发干发硬、调料全靠味精香精提鲜，面皮厚硬毫无面香。',
    visual_shots: [
      '大俯拍热气腾腾出锅特写！捞起大盘白白胖胖的水饺，皮薄透出肉馅色泽，画面铺满屏幕。',
      '筷子轻轻掰开水饺特写，肉汁顺着饱满切面流出，展示扎实黑猪肉粒与爽脆莲菜丁。',
      '前厅老街坊街头坐满，顾客一口一个大口咀嚼，空碗堆叠展现真实回头客口碑。',
      '主理人端上面汤或特惠字卡，手势指向左下角抖音团购定位。',
    ],
    script_scenes: [
      '在本地吃水饺的朋友，千万别只看门头大不大！今天带你看看什么叫真正的老街坊口碑！',
      '师傅手工现包现煮绝非冷冻预制菜，黑猪肉配脆莲菜，一口咬下汁水直接爆出来！',
      '不管下班填饱肚子还是朋友聚聚，皮薄馅大分量管饱，不够吃还能免费加面！',
      '左下角限时开放买一送一专属券，不用可退、过期自动退，赶紧锁一份！',
    ],
  },
  咖啡: {
    keywords: [
      '阿拉比卡当季豆',
      '日晒浅中烘焙',
      '充氮锁鲜挂耳',
      '90度水流慢萃',
      '坚果可可香',
      '消水肿提神',
    ],
    craft_detail:
      '甄选高海拔原产区当季阿拉比卡鲜豆，浅中慢火烘焙保留自然果酸与坚果可可甘甜，采用超细研磨与充氮隔氧锁香技术，一撕即冲，还原手冲级风味。',
    pain_points:
      '市面速溶咖啡满是植脂末香精、重度深烘焦苦难以下咽、胶囊咖啡机笨重昂贵且清洗繁琐。',
    visual_shots: [
      '清晨百叶窗桌面自然光俯拍！原声撕开充氮铝箔袋，清脆声音与咖啡香气具象化。',
      '90度细嘴壶注水特写！金黄色丰厚油脂泡沫膨胀升腾，蒸汽伴随坚果香升起。',
      '工位白领轻抿一口露出放松惬意微表情，展现一整天办公晨起仪式感。',
      '精美便携随行礼盒展示，手指指向屏幕左下角买一送一特权链接。',
    ],
    script_scenes: [
      '把工位一角布置成属于自己的治愈咖啡馆，真的能让一整天的心情都变好！',
      '不用昂贵的咖啡机，只要90度热水，一分钟就能闻到纯正的坚果可可香！',
      '口感醇厚顺滑一点都不酸涩，早八来一杯，消肿提神一整天！',
      '如果你也在找一款口粮级好咖啡，下方链接领券立享买一送一！',
    ],
  },
  美发: {
    keywords: [
      '显微头皮毛囊检测',
      '纳米微泡深层SPA',
      '45分钟穴位放松',
      '发根蓬松高颅顶',
      '随时退无套路',
    ],
    craft_detail:
      '引入高倍头皮微探头诊断油脂堆积，采用氨基酸微泡仪深层冲刷发根油脂与老化角质，配合纯手法精油肩颈头部按摩45分钟，吹干后呈现自然高颅顶蓬松感。',
    pain_points:
      '经常熬夜加班导致头皮油脂堵塞、头屑反复穿黑衣尴尬，理发店办卡推销套路多、盲目换洗发水治标不治本。',
    visual_shots: [
      '镜头直接怼近高清头皮检测仪屏幕，展示熬夜后毛囊油脂堵塞真实画面，形成视觉冲击。',
      '技师用纳米微泡仪器做深层净澈护理，细腻绵密泡沫溢出发丝，手法专业放松。',
      '护理后发丝根根分明，微俯镜头展示吹干后高颅顶蓬松甩头前后对比。',
      '前台展示抖音来客68元到店体验券字卡，强调不满意可退、过期自动退。',
    ],
    script_scenes: [
      '在本地经常熬夜头油头痒的朋友，千万别只知道在家瞎抓头皮了！',
      '直接看显微镜下的油脂堵塞，今天带你来体验一次纯手工深层头皮SPA！',
      '整整45分钟精细护理，洗完感觉整个头皮都在大口呼吸，三天不洗依然干爽蓬松！',
      '左下角同城定位限时开放专属体验券，不用可退、过期自动退，赶紧冲！',
    ],
  },
};

export async function searchWebKnowledgeSummary(query: string): Promise<string> {
  const cleanQ = query.replace(/[^\u4e00-\u9fa5a-zA-Z0-9\s]/g, ' ').trim();
  if (!cleanQ) return '';

  const encoded = encodeURIComponent(`${cleanQ} 制作工艺 卖点 爆款`);
  const url = `https://www.baidu.com/s?wd=${encoded}`;
  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      },
      signal: AbortSignal.timeout(3500),
    });
    if (res.ok) {
      const html = await res.text();
      const titleMatches = Array.from(html.matchAll(/<h3[^>]*>(.*?)<\/h3>/g))
        .map((m) => m[1].replace(/<[^>]+>/g, '').trim())
        .filter((t) => t.length >= 4)
        .slice(0, 3);
      if (titleMatches.length > 0) {
        return `【联网检索行业真实知识】：\n${titleMatches.join('；\n')}`;
      }
    }
  } catch {
    // ignore
  }
  return '';
}

export function matchIndustryKnowledge(text: string): IndustryKnowledge {
  const t = text.toLowerCase();
  for (const [key, data] of Object.entries(INDUSTRY_KNOWLEDGE_BASE)) {
    if (t.includes(key.toLowerCase()) || data.keywords.some((k) => t.includes(k.toLowerCase()))) {
      return data;
    }
  }
  if (/[肉牛猪排串肠熏烤]/i.test(t)) {
    return INDUSTRY_KNOWLEDGE_BASE['美式熏肉'];
  }
  if (/[饺面馄饨包汤饭餐]/i.test(t)) {
    return INDUSTRY_KNOWLEDGE_BASE['水饺'];
  }
  if (/[发头洗屑沙龙理发spa]/i.test(t)) {
    return INDUSTRY_KNOWLEDGE_BASE['美发'];
  }
  if (/[茶饮咖甜品蛋糕烘焙]/i.test(t)) {
    return INDUSTRY_KNOWLEDGE_BASE['咖啡'];
  }
  return INDUSTRY_KNOWLEDGE_BASE['美式熏肉'];
}

export function buildAgenticSmartScript(options: {
  productName: string;
  sellingPoints?: string;
  category?: string;
  storeMemory?: {
    storeName?: string;
    cityLocation?: string;
    redlines?: { disallow_kitchen?: boolean; owner_not_on_camera?: boolean };
    disallow_kitchen?: boolean;
    owner_not_on_camera?: boolean;
  } | null;
}) {
  const { productName, sellingPoints = '', category = '餐饮美食', storeMemory } = options;
  const storeName = storeMemory?.storeName || '本地特色名店';
  const redlines = storeMemory?.redlines || {};
  const disallowKitchen = Boolean(redlines.disallow_kitchen ?? storeMemory?.disallow_kitchen);
  const ownerNoCamera = Boolean(redlines.owner_not_on_camera ?? storeMemory?.owner_not_on_camera);

  const knowledge = matchIndustryKnowledge(`${productName} ${sellingPoints} ${category}`);
  const prodClean = productName.replace(/[【】]/g, '').trim() || '招牌好物';

  const titles = [
    `在本地吃【${prodClean}】千万别盲目去大店排队交智商税！看完这条少走弯路`,
    `深巷口碑王！凭什么【${storeName}】这款【${prodClean}】全是回头客？`,
    `【实拍避坑】不加一滴香精的${prodClean}到底长什么样？掰开全是扎实真功夫！`,
  ];

  let v1 = '';
  let v2 = '';
  if (disallowKitchen) {
    v1 = `高位大俯拍特写！铁板上刚出锅的【${prodClean}】冒着滋滋滚烫热气，热气升腾，用筷子/夹子挑起大份铺满屏幕（免后厨拍摄，视觉加法显丰盛）。`;
    v2 = `平视微俯视角推进！侧逆光3500K暖光打在【${prodClean}】饱满切面上，清晰展示真实肉质纹理与自然色泽，绝非工业预制拼接。`;
  } else {
    v1 = `明档出餐口大俯拍！刚出炉热气腾腾的【${prodClean}】整盘推到镜头前，油花翻滚，视觉冲击力拉满。`;
    v2 = `侧逆光双手切开/挑起【${prodClean}】微距特写，慢动作展示充盈肉汁与手工制作细节。`;
  }

  const v3 = `站至前厅人群后方拉开纵深轴线！画面展现店内座无虚席的市井烟火气，近景顾客大口咀嚼满足表情，空盘见底。`;
  const v4 = `平视中景全套招牌套餐整齐摆放，手指清晰指向屏幕左下角同城团购卡，字幕高亮【不用可退·过期自动退】。`;

  return {
    title: titles[0],
    pacingTip: '前3秒高位特写抓人，单镜头时长严格控制在3.5-4秒，切歌卡点，突出市井烟火气。',
    bgmStyle: '轻快市井卡点律动 / 温暖治愈原声',
    voiceTone: ownerNoCamera ? '老饕探店接地气男声' : '主理人真诚亲切原声',
    recommendedTitles: titles,
    cameraAngles: [
      '01 黄金Hook痛点特写 (0-3s)',
      '02 核心工艺微距推镜 (3-8s)',
      '03 场景人群信任背书 (8-16s)',
      '04 团购促单行动号召 (16-24s)',
    ],
    visualCues: [v1, v2, v3, v4],
    sceneLines: [
      `在本地选【${prodClean}】的朋友，千万别只看门头大不大或盲目排队交学费！今天带你看看什么叫真正的口碑硬核好味！`,
      `整整坚持【${knowledge.keywords[0] || '真材实料细作'}】，不加一滴多余工业添加！仔细看这个诱人成色与手工细节，一口咬下香气直接爆开！`,
      `不管是下班填饱肚子还是约上朋友小聚，来上一大盘刚出锅的【${prodClean}】，热气腾腾大口咀嚼，这一口太治愈了！`,
      `今天屏幕左下角限时开放同城体验特惠，不用随时可退、过期自动退，想体验正宗【${prodClean}】的朋友赶紧先锁一份！`,
    ],
  };
}
