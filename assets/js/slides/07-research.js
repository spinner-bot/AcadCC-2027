/* 第 7 部分 · 前期调研：布局与任务分配
   六个方向，每个方向统一按「Why → What → How → 交付物 → 判定标准」递进拆解。
   结构由生成器保证一致，内容各自展开。 */

var DIRS = [
  {
    key: 'A', tone: 'g', name: '市场与用户需求',
    goal: '确认问题是否真实存在、谁在为此付出代价、代价是否足够显著。',
    short: '问题是否真实存在，谁在为此付出代价',
    why: [
      '<strong>技术能做出来，不等于市场需要它。</strong>系统可以开发，并不能推断需求成立。',
      '需求强度决定这个方向是否值得投入——这是最早期的分叉点。',
      '早期否证的代价远低于后期返工：现在推翻假设，比做出原型后推翻便宜得多。'
    ],
    q1: [
      '谁会遇到这个问题？<span class="q">具体使用者、购买者、决策者分别是谁。</span>',
      '问题出现在哪个流程、什么条件下、频率如何？',
      '现在通常如何处理？<span class="q">人工、现有软件、外包流程各自怎么走。</span>'
    ],
    q2: [
      '现有处理方式的成本与局限分别是什么？',
      '问题的损失、风险、时间成本或合规影响是否足够显著？',
      '用户是否愿意尝试、采购或持续使用新方案？',
      '有哪些证据能支持需求？<span class="q">又有哪些反证？</span>'
    ],
    how: [
      { t: '访谈', d: '面向财务负责人、财务共享中心、会计师事务所，先做少量深访再决定是否扩样。' },
      { t: '问卷与量化', d: '把"多频繁""多大代价"变成可比较的数字，而不是定性印象。' },
      { t: '公开数据', d: '监管处罚公告、行业协会调查、上市公司年报中的相关披露。' },
      { t: '反证检索', d: '主动搜集"需求不成立""已被现有方案满足"的证据，而不是只找支持材料。' }
    ],
    sources: ['行业协会调查（注明赞助方）', '监管与执法公告', '上市公司年报与招股书', '访谈记录与转述', '招聘信息（侧面反映痛点）'],
    deliver: ['需求证据报告：每条结论含来源、日期、可信度', '使用者 / 购买者 / 决策者画像', '现有处理方式的成本结构', '专门的反证与不确定性一节'],
    criteria: ['能回答"谁、多频繁、现在怎么做、代价多大、是否愿意付费"', '每条结论可追溯到原始材料'],
    pitfalls: ['把"问题理论上存在"直接等同于"存在明确市场需求"', '只搜集支持当前假设的材料', '把单一案例推广为整个市场的规律']
  },
  {
    key: 'B', tone: '', name: 'AI 技术与学术研究',
    goal: '弄清技术发展到哪一步、哪些是成熟方案、哪些是可测量的缺口。',
    short: '技术到了哪一步，哪些是成熟方案、哪些是缺口',
    why: [
      '避免重复造轮子——先确认已有方案能做到什么程度。',
      '判断<strong>该环节是否真的需要使用 AI</strong>，是否存在更简单、更可靠的替代方案。',
      '为后续实验设计提供基线与评价口径。'
    ],
    q1: [
      '相关任务在学术研究中发展到什么程度？',
      '已有方法的任务定义、数据集、评价指标和实验结论分别是什么？',
      '哪些问题已有成熟方案，哪些仍存在可测量的缺口？'
    ],
    q2: [
      '大语言模型、传统机器学习、规则系统、文档解析、检索增强、Agent 分别适合哪些环节？',
      '拟议技术路线是否真的有必要使用 AI？',
      '怎样设计实验，才能区分技术贡献与普通工程集成？'
    ],
    how: [
      { t: '系统检索', d: '学术数据库与预印本站点，中英文并行；记录关键词、时间范围与检索日期。' },
      { t: '精读而非摘要', d: '逐篇核对任务定义、数据集构成、指标用法与消融实验。' },
      { t: '复现性检查', d: '代码与数据是否公开、结果是否可复现。' },
      { t: '来源分层', d: '严格区分论文实验结果、公开演示、商业宣传与真实部署效果，不混为一谈。' }
    ],
    sources: ['同行评审论文', '预印本（标注未经评审）', '会议与 workshop 论文', '技术报告与官方文档'],
    deliver: ['方法对照表：任务 / 数据 / 指标 / 结论 / 局限', '可测量的缺口清单', '可复现的基线候选', '实验设计草案（基线 / 指标 / 消融）'],
    criteria: ['能说清"已有方法在什么条件下有效、在什么条件下失效"', '每个"缺口"都有对应的证据，而不是感觉'],
    pitfalls: ['把模型生成的解释当作来源', '混淆论文结果与产品宣传', '只读摘要不读原文，据此下结论']
  },
  {
    key: 'C', tone: 'v', name: '竞品、开源项目与专利',
    goal: '摸清现有方案的能力边界，并在此基础上找到真实的差异点。',
    short: '现有方案能做到什么，差异点可能在哪里',
    why: [
      '企业应付账款、发票处理类软件中<strong>已经存在</strong>单据匹配与核验能力。',
      '差异点必须建立在能力核对之上，而不是建立在"我们不知道别人也能做"之上。',
      '专利检索可以避免方案撞车。'
    ],
    q1: [
      '市面上有哪些直接竞品、相邻产品和替代方案？',
      '现有财务软件、企业资源计划系统、发票与应付账款自动化工具已经能做什么？',
      '开源项目能提供哪些组件或基线？'
    ],
    q2: [
      '竞品的目标用户、工作流程、主要功能、价格模式、部署方式与已知限制是什么？',
      '现有专利或公开技术方案是否覆盖类似思路？',
      '我们可能在哪个细分场景、能力缺口、交互方式、可信性、成本或部署条件上形成差异？'
    ],
    how: [
      { t: '官方文档逐项核对', d: '只依据官方文档判断能力，不做推测；官网未提及的标注为"未见说明"。' },
      { t: '试用与演示', d: '能试用则试用，观察真实流程与限制。' },
      { t: '专利检索', d: '国家知识产权局、Espacenet、Google Patents，记录申请人与法律状态。' },
      { t: '开源仓库审查', d: '看 README、issue、提交活跃度与许可协议，判断是否可用作基线。' }
    ],
    sources: ['官方产品文档与白皮书', '专利数据库', '开源仓库与包管理页面', '第三方评测与用户反馈'],
    deliver: ['竞品能力矩阵（逐项标注证据来源与边界）', '差异点候选清单（附验证方式）', '可复用的开源组件清单'],
    criteria: ['每个"竞品不具备"的判断都有证据，否则明确标注为未确认', '差异点是可以被验证的，而不是一句主张'],
    pitfalls: ['仅凭官网未提及，就断言竞品不具备该功能', '把厂商自述的指标当作独立事实', '混淆相邻产品与本项目的目标场景']
  },
  {
    key: 'D', tone: 'm', name: '业务流程、政策与规范',
    goal: '弄清真实业务是怎么走的，以及在业务语境下什么才算异常。',
    short: '真实流程怎么走，什么才算异常',
    why: [
      '脱离真实业务，就很容易把字段差异简单判断为"异常"或"风险"。',
      '法规、财务制度与数据标准决定了系统的边界与约束。',
      '系统的输出最终要能被财务人员理解、复核并纳入现有工作流。'
    ],
    q1: [
      '真实业务从业务发生到单据产生、审批、支付、记账、归档，流程是什么？',
      '不同单据之间应当具有什么关联或一致性？',
      '哪些差异属于正常业务情况，哪些才可能是异常？'
    ],
    q2: [
      '涉及哪些法规、财务制度、行业规范或数据标准？',
      '不同企业规模、行业和系统环境下，流程是否不同？',
      '系统的结果如何被财务人员理解、复核和纳入现有工作流程？'
    ],
    how: [
      { t: '业务流程梳理', d: '以访谈为主，产出一张能逐环节标注单据与责任人的流程图。' },
      { t: '政策原文检索', d: '优先官方发布页，记录文件名称、文号、发布日期与链接。' },
      { t: '标准文本核对', d: '逐条核对数据标准与审计数据规范的适用范围与强制程度。' },
      { t: '场景分类', d: '把"正常差异"与"可能异常"分成两类，并说明判别依据。' }
    ],
    sources: ['官方政策文件（优先原文页）', '行业规范与会计制度', '数据标准文本', '业务访谈记录'],
    deliver: ['业务流程图（标注单据与责任人）', '单据一致性规则清单', '政策与标准摘要（含文号、日期与链接）'],
    criteria: ['能够判定"字段不同"属于正常业务差异还是可能异常', '引用的每一项政策都能落到原文页'],
    pitfalls: ['把字段不同简单判为异常或风险', '引用二手政策转述而不查原文', '用单一企业的流程代表整个行业']
  },
  {
    key: 'E', tone: 'r', name: '数据与实验可行性',
    goal: '确认能否拿到合法可用的数据，并设计出可复现的实验。',
    short: '数据能不能拿到，实验怎么设计才算数',
    why: [
      '数据可得性应当是<strong>早期决策门槛</strong>，而不是项目后期才解决的问题。',
      '合成数据上的高分很容易被误当成真实场景有效。',
      '没有可复现的实验，技术贡献就无法与工程集成区分开。'
    ],
    q1: [
      '是否能获得合法、合规、可用于研发的真实或脱敏数据？',
      '是否存在可用的公开数据集、合成数据方案或可复现基准？',
      '数据的规模、质量、标签、代表性和分布偏差如何？'
    ],
    q2: [
      '如何避免将合成数据上的高分误当成真实场景有效？',
      '如何定义基线、评价指标、消融实验、错误分析与人工复核流程？',
      '数据隐私、商业秘密、个人信息、财务安全和授权问题如何处理？'
    ],
    how: [
      { t: '数据来源盘点', d: '逐项确认来源、授权链路、可用范围与留存期限。' },
      { t: '合规评审', d: '脱敏方案与使用边界先在团队内确认，必要时咨询指导教师。' },
      { t: '基线搭建', d: '先做最简单可行的基线，再逐步引入复杂方法。' },
      { t: '双轨实验', d: '真实数据与合成数据分别实验、分别报告，不合并成单一数字。' }
    ],
    sources: ['公开数据集与基准', '企业脱敏数据（需授权）', '合成数据生成方案', '数据合规规范'],
    deliver: ['数据方案：来源 / 授权 / 脱敏 / 规模 / 偏差', '实验设计：基线 / 指标 / 消融 / 错误分析', '人工复核流程设计'],
    criteria: ['能说清"用什么数据、如何合规、凭什么证明有效"', '合成与真实结果分开报告'],
    pitfalls: ['把合成数据上的高分当作真实有效', '忽视分布偏差与类别不平衡', '在授权不明的情况下使用数据']
  },
  {
    key: 'F', tone: '', name: '竞赛适配与产品化',
    goal: '对齐评审标准，明确最终能交付什么、完成到什么程度。',
    short: '对齐评审标准，明确最终交付什么',
    why: [
      '评审标准决定工作重心——问题价值、创新性、技术深度、完成度、应用前景各占多少分量。',
      '交付形态决定资源分配：做原型、做验证、还是做报告，工作内容差别很大。',
      '需要横向比较其他候选方向，避免过早锁定。'
    ],
    q1: [
      '项目与 Acad.CC 2027 / "大挑"相关竞赛要求的匹配程度如何？',
      '评审可能如何判断问题价值、创新性、技术深度、完成度、应用前景和团队能力？',
      '最终可以展示什么：可运行原型、合规的演示数据、实验结果、用户验证、部署方案？'
    ],
    q2: [
      '项目在现有资源、时间与团队能力下能完成到什么程度？',
      '如何把技术结果转化为清晰的用户价值和可验证的应用路径？',
      '还有哪些可能比当前假设更适合团队的候选方向？'
    ],
    how: [
      { t: '查正式文件', d: '检索对应年份的官方竞赛规则与评审标准，不凭往年经验推定。' },
      { t: '拆解评审维度', d: '把评审标准拆成可对照的检查项，逐项评估当前准备程度。' },
      { t: '定义最小交付', d: '明确最小可交付原型与验证方式，再往上加。' },
      { t: '方向横向比较', d: '候选方向放在同一套评价标准下比较，而不是单独评价。' }
    ],
    sources: ['竞赛官方规则与评审标准文件', '往届作品（仅作参考，不作依据）', '指导教师意见', '团队资源与时间盘点'],
    deliver: ['竞赛适配矩阵（逐维度对照准备程度）', '交付物清单与里程碑', '候选方向比较表'],
    criteria: ['每个评审维度都有对应的准备与证据', '"可以展示什么"是可执行的清单，而不是愿望'],
    pitfalls: ['凭往年经验推定当年的规则与标准', '把演示效果当作完成度', '因已投入时间而拒绝比较其他方向']
  }
];

/* 各方向的检索关键词与优先信息源（配合 §How 使用） */
var KW = {
  A: {
    kw: ['财务共享中心 痛点', '发票处理 人工成本', '应付账款 自动化 采纳率', '财务人员 AI 接受度 调查', '重复付款 比例', '支付舞弊 调查报告'],
    srcs: ['上海国家会计学院《中国企业财务智能化调查》', 'ACCA《中国共享服务领域调研报告》', 'AFP《支付舞弊与控制调查》', '上市公司年报"内部控制"章节', '财务岗招聘 JD（侧面反映工具栈）']
  },
  B: {
    kw: ['financial anomaly detection LLM', 'continuous auditing large language model', 'journal entry anomaly detection', 'invoice information extraction', 'document layout understanding', 'audit data standard'],
    srcs: ['arXiv', 'ACL Anthology', 'NeurIPS / AAAI', 'SSRN', 'ScienceDirect', 'CNKI']
  },
  C: {
    kw: ['SAP invoice matching tolerance', 'Oracle Payables match approval level', 'three-way match AP automation', '发票查验 API', '数电票 验签 OFD', 'invoice OCR open source'],
    srcs: ['SAP Help Portal', 'Oracle Docs', '用友 / 金蝶官方文档', '国家知识产权局 / Espacenet / Google Patents', 'GitHub', 'PyPI']
  },
  D: {
    kw: ['电子凭证会计数据标准', '会计信息化工作规范', '注册会计师审计数据规范', '会计档案管理办法', '电子会计凭证 报销入账归档'],
    srcs: ['财政部', '国家税务总局', '国家档案局', '中国注册会计师协会', '各省财政厅']
  },
  E: {
    kw: ['invoice dataset public', 'journal entry dataset', 'financial statement fraud dataset', 'AAER dataset', 'document layout dataset'],
    srcs: ['HuggingFace Datasets', 'Kaggle', 'Papers with Code', '企业脱敏数据（需授权）', 'MinerU / PaddleOCR（可构造合成样本）']
  },
  F: {
    kw: ['挑战杯 课外学术科技作品竞赛 评审标准', '大挑 作品申报 要求', '挑战杯 往届获奖作品'],
    srcs: ['竞赛官方文件（校级团委 / 团中央）', '往届获奖名单与作品简介', '指导教师意见']
  }
};

var TONE = function (t) { return t ? ' ' + t : ''; };

function dirSlides(d) {
  var s = [];

  /* 1 · 方向头 */
  s.push({
    id: 'p7-' + d.key + '-head',
    label: d.key + ' · ' + d.name,
    html:
      '<div class="section-head">' +
        '<div class="no">' + d.key + '</div>' +
        '<div class="txt">' +
          '<div class="kicker">调研方向 ' + d.key + '</div>' +
          '<h2 class="slide-title">' + d.name + '</h2>' +
          '<p class="slide-lead">' + d.goal + '</p>' +
        '</div>' +
      '</div>'
  });

  /* 2 · Why */
  s.push({
    id: 'p7-' + d.key + '-why',
    label: d.key + ' · Why 必要性',
    badge: 'WHY',
    badgeTone: d.tone,
    title: 'Why｜为什么必须做这个调研',
    html: '<ul class="bullets' + TONE(d.tone) + ' stagger">' +
      d.why.map(function (x) { return '<li>' + x + '</li>'; }).join('') +
      '</ul>'
  });

  /* 3 · What（一） */
  s.push({
    id: 'p7-' + d.key + '-what1',
    label: d.key + ' · What 核心问题（一）',
    badge: 'WHAT · 1/2',
    badgeTone: d.tone,
    title: 'What｜要回答的核心问题（一）',
    html: '<div class="grid c3 stagger">' +
      d.q1.map(function (x, i) {
        return '<div class="numed' + TONE(d.tone) + '"><span class="no">0' + (i + 1) + '</span>' +
          '<p>' + x + '</p></div>';
      }).join('') +
      '</div>'
  });

  /* 4 · What（二） */
  s.push({
    id: 'p7-' + d.key + '-what2',
    label: d.key + ' · What 核心问题（二）',
    badge: 'WHAT · 2/2',
    badgeTone: d.tone,
    title: 'What｜要回答的核心问题（二）',
    html: '<div class="grid c2 stagger">' +
      d.q2.map(function (x, i) {
        return '<div class="numed' + TONE(d.tone) + '"><span class="no">0' + (i + 4) + '</span>' +
          '<p>' + x + '</p></div>';
      }).join('') +
      '</div>'
  });

  /* 5 · How 方法 */
  s.push({
    id: 'p7-' + d.key + '-how',
    label: d.key + ' · How 做法',
    badge: 'HOW',
    badgeTone: d.tone,
    title: 'How｜怎么做',
    html: '<div class="grid c2 stagger">' +
      d.how.map(function (h) {
        return '<div class="tile"><div class="ico' + TONE(d.tone) + '">→</div><div>' +
          '<h4>' + h.t + '</h4><p>' + h.d + '</p></div></div>';
      }).join('') +
      '</div>'
  });

  /* 6 · How 来源 */
  s.push({
    id: 'p7-' + d.key + '-src',
    label: d.key + ' · How 信息来源',
    badge: 'HOW · 来源',
    badgeTone: d.tone,
    title: 'How｜信息来源与检索策略',
    html: '<div class="chip-row stagger" style="margin-bottom:4px">' +
      d.sources.map(function (x) {
        return '<span class="chip' + TONE(d.tone) + '">' + x + '</span>';
      }).join('') +
      '</div>' +
      '<div class="box' + TONE(d.tone) + ' step"><div class="label">检索纪律</div>' +
      '<div class="body">记录关键词、检索范围、时间范围与检索日期；' +
      '优先追溯原始材料；<strong>引用产品功能时优先官方文档，引用政策时优先官方发布页。</strong></div></div>'
  });

  /* 6b · 检索关键词与信息源 */
  var k = KW[d.key] || { kw: [], srcs: [] };
  s.push({
    id: 'p7-' + d.key + '-kw',
    label: d.key + ' · 检索关键词与信息源',
    badge: 'HOW · 关键词',
    badgeTone: d.tone,
    title: 'How｜检索关键词与优先信息源',
    lead: '直接把这一页当作检索清单用，不要临场想词。',
    html:
      '<div class="chip-row stagger" style="margin-bottom:6px">' +
        k.kw.map(function (x) {
          return '<span class="chip' + TONE(d.tone) + '">' + x + '</span>';
        }).join('') +
      '</div>' +
      '<div class="box' + TONE(d.tone) + ' step"><div class="label">优先信息源</div>' +
      '<div class="body" style="line-height:2">' +
        k.srcs.map(function (x) { return '· ' + x; }).join('<br>') +
      '</div></div>' +
      '<div class="src step"><b>记录要求</b> 每次检索都要留下：关键词 · 检索范围 · 检索日期 · 命中数 · ' +
      '以及哪些命中的结果被排除、为什么。</div>'
  });

  /* 7 · 交付物 */
  s.push({
    id: 'p7-' + d.key + '-out',
    label: d.key + ' · 交付物',
    badge: '交付物',
    badgeTone: d.tone,
    title: '交付物｜这个方向应产出什么',
    html: '<ul class="checklist">' +
      d.deliver.map(function (x) {
        return '<li class="step"><span class="box-mark"></span><span>' + x + '</span></li>';
      }).join('') +
      '</ul>'
  });

  /* 8 · 判定标准与常见坑 */
  s.push({
    id: 'p7-' + d.key + '-crit',
    label: d.key + ' · 判定标准与常见坑',
    badge: '判定标准',
    badgeTone: d.tone,
    title: '判定标准｜什么算合格，哪些坑要避开',
    html: '<div class="grid c2">' +
      '<div class="stack sm stagger">' +
        '<div class="box m"><div class="label">合格的标准</div><div class="body">' +
          d.criteria.map(function (x) { return '· ' + x; }).join('<br>') + '</div></div>' +
      '</div>' +
      '<div class="stack sm stagger">' +
        '<div class="box r"><div class="label">要避开的坑</div><div class="body">' +
          d.pitfalls.map(function (x) { return '· ' + x; }).join('<br>') + '</div></div>' +
      '</div>' +
      '</div>'
  });

  return s;
}

/* ── 组装 ── */
var P7 = [];

P7.push({
  id: 'p7-head',
  label: '前期调研：布局与任务分配',
  html:
    '<div class="section-head">' +
      '<div class="no">07</div>' +
      '<div class="txt">' +
        '<div class="kicker">Part 07 · 重点</div>' +
        '<h2 class="slide-title">前期调研：布局与任务分配</h2>' +
        '<p class="slide-lead">六个方向，统一按 Why → What → How → 交付物 → 判定标准 拆解。</p>' +
      '</div>' +
    '</div>'
});

P7.push({
  id: 'p7-necessity',
  label: '为什么要先调研再决策',
  title: '为什么要先调研再决策',
  html:
    '<div class="grid c2 stagger">' +
      '<div class="box"><div class="label">跳过研究会发生什么</div>' +
        '<div class="body" style="line-height:2">' +
        '· 需求未被验证，做出来的东西没人用<br>' +
        '· 竞品已覆盖，创新点经不起追问<br>' +
        '· 数据拿不到，实验无法完成<br>' +
        '· 结论缺乏来源，评审一问即破</div></div>' +
      '<div class="box m"><div class="label">先研究会得到什么</div>' +
        '<div class="body" style="line-height:2">' +
        '· 需求强度有据可查<br>' +
        '· 差异点建立在能力核对之上<br>' +
        '· 数据可得性提前明确<br>' +
        '· 每条结论都能追溯到原始材料</div></div>' +
    '</div>' +
    '<div class="takeaway step"><span class="mk">核心</span>' +
    '<span class="tx">研究的作用不是"证明我们的想法对"，而是<b>在投入之前就知道它站不站得住</b>。</span></div>'
});

P7.push({
  id: 'p7-map',
  label: '六个方向总览',
  title: '六个方向总览',
  html:
    '<div class="grid c3 stagger">' +
      DIRS.map(function (d) {
        return '<div class="tile"><div class="ico' + TONE(d.tone) + '">' + d.key + '</div><div>' +
          '<h4>' + d.name + '</h4><p>' + d.short + '</p></div></div>';
      }).join('') +
    '</div>'
});

P7.push({
  id: 'p7-method',
  label: '统一的拆解方法',
  title: '统一的拆解方法',
  lead: '每个方向都按同一套结构展开，保证八个模块的输出可比。',
  html:
    '<div class="flow step">' +
      '<div class="node"><span class="n">WHY</span><h4>为什么做</h4><p>不做会付出什么代价</p></div>' +
      '<span class="arrow">→</span>' +
      '<div class="node"><span class="n">WHAT</span><h4>回答什么</h4><p>要回答的核心问题清单</p></div>' +
      '<span class="arrow">→</span>' +
      '<div class="node"><span class="n">HOW</span><h4>怎么做</h4><p>方法、信息来源与检索策略</p></div>' +
      '<span class="arrow">→</span>' +
      '<div class="node"><span class="n">OUT</span><h4>产出什么</h4><p>交付物与合格判定标准</p></div>' +
    '</div>' +
    '<div class="box g step"><div class="label">统一遵守的证据标准</div>' +
    '<div class="body">结论 · 证据（来源 / 日期 / 链接）· 来源质量 · 方法 · <b>反证与局限</b> · ' +
    '对项目的影响 · 下一步。</div></div>'
});

P7.push({
  id: 'p7-alloc',
  label: '分工与协作机制',
  title: '分工与协作机制',
  html:
    '<div class="grid c2 stagger">' +
      '<div class="numed"><span class="no">01</span><h4>认领与配比</h4>' +
        '<p>每个方向设负责人 1 名、参与人 1–2 名，按会后汇总的意向与可投入时间确定。</p></div>' +
      '<div class="numed"><span class="no">02</span><h4>独立结论</h4>' +
        '<p>各方向独立得出结论，减少为支持某个预设选题而选择性搜集材料。</p></div>' +
      '<div class="numed g"><span class="no">03</span><h4>统一模板</h4>' +
        '<p>按证据标准做成统一模板，保证输出格式一致、可交叉比较。</p></div>' +
      '<div class="numed g"><span class="no">04</span><h4>汇总比较</h4>' +
        '<p>报告完成后汇总共识、分歧、关键风险与待决问题，供团队进一步讨论。</p></div>' +
      '<div class="numed m" style="grid-column:1/-1"><span class="no">05</span><h4>分歧处理</h4>' +
        '<p>出现分歧时，优先回到定义、证据、比较标准和可执行验证方案，而不是只比较个人直觉。</p></div>' +
    '</div>'
});

DIRS.forEach(function (d) {
  dirSlides(d).forEach(function (x) { P7.push(x); });
});

DECK.registerSection({
  id: 'p7',
  title: '前期调研：布局与任务分配',
  slides: P7
});
