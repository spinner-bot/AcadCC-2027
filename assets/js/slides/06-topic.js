/* 第 6 部分 · 选题引入与背景
   内容全部来自联网检索（检索日期 2026-10-14）。每条发现均标注来源、链接与把握程度。
   把握程度约定：🟢 已核验原文 · 🟡 仅见转述/摘要，待复核 · 🔴 厂商自述或来源可信度低
   本轮检索中多数中文官方页面与部分海外站点无法直接抓取，故以 🟡 为主——
   这不是缺陷，而是研究现状的如实反映。 */

var CONF = {
  ok: '<span class="conf ok">已核验原文</span>',
  part: '<span class="conf partial">仅见转述·待复核</span>',
  low: '<span class="conf low">厂商自述·可信度低</span>'
};

function src(label, text, url, conf) {
  return '<div class="src"><b>' + label + '</b> ' + text +
    (url ? ' <span class="u">' + url + '</span>' : '') + (conf || '') + '</div>';
}

DECK.registerSection({
  id: 'p6',
  title: '选题引入与背景',
  slides: [

    /* ── 章节头 ── */
    {
      id: 'p6-head',
      label: '选题引入与背景',
      html:
        '<div class="section-head">' +
          '<div class="no">06</div>' +
          '<div class="txt">' +
            '<div class="kicker">Part 06 · 重点</div>' +
            '<h2 class="slide-title">选题引入与背景</h2>' +
            '<p class="slide-lead">初始方向假设是什么、它从哪来、' +
            '相关研究与实践已经走到哪一步、哪些地方仍然模糊。</p>' +
          '</div>' +
        '</div>'
    },

    /* ── 一句话定义 ── */
    {
      id: 'p6-oneline',
      layout: 'solo',
      label: '一句话选题定义',
      html:
        '<div class="stack lg" style="align-items:center">' +
          '<div class="chip-row"><span class="chip r">待验证的初始假设</span></div>' +
          '<h2 class="statement" style="text-align:center;max-width:26ch">' +
          'AI 辅助的<span class="hl">财务凭证</span>与<span class="hl">业务数据</span>交叉核验系统</h2>' +
          '<div class="rule"></div>' +
          '<p class="slide-lead" style="text-align:center;max-width:54ch">' +
          '这是为前期研究提供一个<b>可讨论、可证伪的起点</b>。' +
          '研究结果可以支持它、缩小它、重构它，也可以否定它。</p>' +
        '</div>',
      notes: '务必强调"假设"二字。这是全场最容易被误读为"已经定了题目"的一页。'
    },

    /* ── 选题引入：问题从哪来 ── */
    {
      id: 'p6-origin',
      label: '选题引入：问题从哪来',
      title: '选题引入：问题从哪来',
      html:
        '<div class="poster">' +
          '<div class="stack">' +
            '<p class="slide-lead">一笔业务从发生到入账归档，通常会在不同系统与环节留下多份材料：</p>' +
            '<div class="chip-row">' +
              '<span class="chip ghost">合同 / 订单</span>' +
              '<span class="chip ghost">收货 / 验收单</span>' +
              '<span class="chip ghost">发票</span>' +
              '<span class="chip ghost">收付款记录</span>' +
              '<span class="chip ghost">银行流水</span>' +
              '<span class="chip ghost">会计凭证</span>' +
              '<span class="chip ghost">账簿 / 报表</span>' +
            '</div>' +
          '</div>' +
          '<aside class="aside">' +
            '<div class="box g"><div class="label">待验证的问题</div>' +
            '<div class="body">这些材料彼此之间应满足什么一致性？' +
            '目前主要由人工比对，成本与可靠性如何？</div></div>' +
            '<div class="box r"><div class="label">注意</div>' +
            '<div class="body">以上是<b>候选问题空间</b>。' +
            '在没有研究证据之前，不能把它写成已确认的用户需求。</div></div>' +
          '</aside>' +
        '</div>'
    },

    /* ── 本部分结构 ── */
    {
      id: 'p6-frame',
      label: '本部分的展开结构',
      title: '本部分的展开结构',
      html:
        '<div class="flow step">' +
          '<div class="node"><span class="n">A</span><h4>研究与实践现状</h4>' +
            '<p>学术 · 政策标准 · 商用产品 · 开源</p></div>' +
          '<span class="arrow">→</span>' +
          '<div class="node"><span class="n">B</span><h4>可参考之处</h4>' +
            '<p>已有成果中能直接借用的部分</p></div>' +
          '<span class="arrow">→</span>' +
          '<div class="node"><span class="n">C</span><h4>空缺与反证</h4>' +
            '<p>尚未被覆盖的地方，以及相反的证据</p></div>' +
        '</div>' +
        '<div class="flow step" style="margin-top:6px">' +
          '<div class="node"><span class="n">D</span><h4>仍然模糊之处</h4>' +
            '<p>必须由前期调研确认的问题</p></div>' +
          '<span class="arrow">→</span>' +
          '<div class="node"><span class="n">E</span><h4>选题意义评价</h4>' +
            '<p>想解决什么，前提是什么</p></div>' +
          '<span class="arrow">→</span>' +
          '<div class="node"><span class="n">F</span><h4>来源清单</h4>' +
            '<p>逐条可追溯</p></div>' +
        '</div>'
    },

    /* ── 证据强度说明 ── */
    {
      id: 'p6-confkey',
      label: '证据强度标注说明',
      title: '本部分证据强度的标注方式',
      html:
        '<div class="grid c3 stagger">' +
          '<div class="box m"><div class="label">已核验原文 ' + CONF.ok + '</div>' +
            '<div class="body">本次检索中<b>直接读到</b>的官方文档或开源仓库内容。</div></div>' +
          '<div class="box g"><div class="label">仅见转述·待复核 ' + CONF.part + '</div>' +
            '<div class="body">只看到页面<b>摘要或二手转述</b>，未读到全文。引用前需回原文核对。</div></div>' +
          '<div class="box r"><div class="label">厂商自述·可信度低 ' + CONF.low + '</div>' +
            '<div class="body">来自<b>产品官网或营销材料</b>，无独立第三方复核。</div></div>' +
        '</div>' +
        '<div class="takeaway step"><span class="mk">说明</span>' +
        '<span class="tx">本轮检索中，多数中文官方页面与部分海外站点无法直接抓取，' +
        '因此以下结论以<b>待复核</b>为主。所有链接与日期均已记录，可在正式材料中回原文核验。</span></div>'
    },

    /* ── 学术一 ── */
    {
      id: 'p6-acad1',
      label: '学术现状 · 连续审计与实时核验',
      badge: 'A · 学术研究',
      badgeTone: '',
      title: '学术现状（一）：连续审计中的实时交叉核验',
      html:
        '<div class="finding step">' +
          '<h4>LLM 辅助的连续审计与会计信息实时交叉核验已有实证研究</h4>' +
          '<p>在巴西州政府薪资系统的实测中，解析审计证据平均准确率约 ' +
          '<span class="metric-inline">97%</span>，单条核验耗时最多下降 ' +
          '<span class="metric-inline">83%</span>。</p>' +
          src('来源', 'Li, Machado de Freitas, Lee, Vasarhelyi，Enhancing Continuous Auditing with Large Language Models（SSRN 4692960；Int. J. of Accounting Information Systems）',
              'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4692960', CONF.part) +
        '</div>' +
        '<div class="box g step"><div class="label">对本项目的意义</div>' +
        '<div class="body">"凭证核验"在学术上已有明确的<b>任务框架</b>与<b>评价方式</b>可参照，' +
        '不必从零定义问题。</div></div>',
      notes: '多来源互证存在此文，但未读到全文，数字以摘要为准。'
    },

    /* ── 学术二 ── */
    {
      id: 'p6-acad2',
      label: '学术现状 · 日记账异常检测',
      badge: 'A · 学术研究',
      title: '学术现状（二）：日记账级异常检测',
      html:
        '<div class="grid c2 stagger">' +
          '<div class="finding">' +
            '<h4>AuditCopilot · 复式记账日记账异常检测</h4>' +
            '<p>合成数据集：Mistral-8B，精确率 0.90 / 召回 0.98 / F1 0.94。<br>' +
            '真实脱敏数据集：Gemma-7B，精确率 0.89 / 召回 0.78 / F1 0.83。</p>' +
            src('来源', 'Kadir 等（DFKI / 奥登堡大学 / 萨尔大学），NeurIPS 2025 GenAI in Finance Workshop',
                'arxiv.org/abs/2512.02726', CONF.part) +
          '</div>' +
          '<div class="box r">' +
            '<div class="label">需要注意</div>' +
            '<div class="body">该工作合成标签由规则基线生成，' +
            '存在<b>标签泄漏</b>的可能；仅在<b>一个</b>真实数据集上验证；' +
            '未评估解释中的幻觉。这些质疑本身也是研究现状的一部分。</div>' +
          '</div>' +
        '</div>',
      notes: '真实集指标明显低于合成集——这是很有说服力的一条：合成数据上的高分不等于真实场景有效。'
    },

    /* ── 学术三：那条存疑的说法 ── */
    {
      id: 'p6-acad3',
      label: '学术现状 · 一条待核实的说法',
      badge: 'A · 学术研究',
      badgeTone: 'r',
      title: '一条需要先核实的说法',
      html:
        '<div class="box r step"><div class="label">待核实</div>' +
        '<div class="body">前期讨论中提到"已有 2024 年研究探索过基于大语言模型的多文档财务异常检测"。' +
        '本次检索确实找到一篇<i>标题相符</i>的论文，但 ——</div></div>' +
        '<ul class="bullets r stagger">' +
          '<li><strong>年份</strong>无法确认（搜索摘要一度标为 2024，页面无法验证）</li>' +
          '<li><strong>作者</strong>未能查到</li>' +
          '<li><strong>同行评审状态</strong>不明，出版方知名度低</li>' +
        '</ul>' +
        '<div class="takeaway step"><span class="mk">结论</span>' +
        '<span class="tx">在取得原文核对之前，<b>不把这条作为核心引用</b>，也不据此宣称"已有同类研究"。</span></div>',
      notes: '这一页很重要：它示范了"没有核验就不能写成事实"这条标准。'
    },

    /* ── 学术四：任务与数据 ── */
    {
      id: 'p6-acad4',
      label: '学术现状 · 任务定义与数据困境',
      badge: 'A · 学术研究',
      title: '学术现状（四）：任务定义与数据困境',
      html:
        '<div class="band step"><strong>常见任务链</strong>：非结构化文档解析 → 字段抽取 → 多源交叉核验 → 异常识别 → 证据链构建</div>' +
        '<div class="grid c2 stagger" style="margin-top:4px">' +
          '<div class="finding"><h4>标注数据稀缺</h4>' +
            '<p>没有单一公开的"日记账级标注"基准。常用替代：SEC AAER 库（正类约 1%）、' +
            'Enron 语料、合成日记账数据集。企业内部账套通常无公开 ground truth。</p>' +
            src('来源', '汇总自多篇论文摘要', '', CONF.part) + '</div>' +
          '<div class="finding"><h4>类别极度不平衡</h4>' +
            '<p>异常正类占比常在 1% 量级，评价指标以 P/R/F1 为主，' +
            '部分研究额外报告<b>误报绝对数</b>与 Top-k——说明仅看 F1 不足以说明可用性。</p>' +
            src('来源', '同上', '', CONF.part) + '</div>' +
        '</div>'
    },

    /* ── 学术五：反证 ── */
    {
      id: 'p6-acad5',
      label: '反证 · LLM 的已知弱点',
      badge: 'A · 学术研究 · 反证',
      badgeTone: 'r',
      title: '反证：LLM 在这类任务上的已知弱点',
      html:
        '<div class="grid c2 stagger">' +
          '<div class="finding r"><h4>数值幻觉有机制性来源</h4>' +
            '<p>预训练语料的数字分布偏斜会训练出"数字偏见"，并在模型内部定位到特定神经元。</p>' +
            src('来源', 'Benford\'s Curse，NeurIPS 2025', 'neurips.cc/virtual/2025/loc/san-diego/poster/119464', CONF.part) + '</div>' +
          '<div class="finding r"><h4>领域微调可能加剧幻觉</h4>' +
            '<p>有记录称基础模型幻觉率约 5.4%，领域微调后升至 82.5%–98%。' +
            '<b>此条未能核验，仅作线索。</b></p>' +
            src('来源', 'Zenodo 记录（预印本）', '', CONF.low) + '</div>' +
          '<div class="finding r"><h4>实测中做不了审计判断</h4>' +
            '<p>2025 年 9 月的实测显示，多家模型均无法像人类审计师那样完成风险评估、' +
            '同比变化取整，也无法区分报表层与认定层风险。</p>' +
            src('来源', 'ICAEW 行业实测报告', 'icaew.com/insights/viewpoints-on-the-news/2025/sep-2025', CONF.part) + '</div>' +
          '<div class="box r"><div class="label">对本项目的意义</div>' +
            '<div class="body">审计与财务场景对错误的容忍度极低。' +
            '技术路线必须包含<b>可解释性</b>与<b>人工复核</b>的设计，而不能只追求自动化率。</div></div>' +
        '</div>'
    },

    /* ═══ 重点详读 · 学术（插入在学术概要之后） ═══ */

    {
      id: 'p6-li-1',
      label: '详读 · 连续审计（一）方法与框架',
      badge: '重点详读 · 学术',
      title: '详读：连续审计中的实时交叉核验（一）',
      lead: 'Li, Machado de Freitas, Lee & Vasarhelyi — LLM 辅助的连续审计框架',
      html:
        '<div class="box g step"><div class="label">研究问题</div>' +
        '<div class="body">连续审计难以<b>实时解析持续生成的文本证据</b>。既有文本挖掘方法各有局限：' +
        '情感与主题分析只能做聚合、正则对表述变化敏感、词典与 NER 的条目覆盖有限——' +
        '结果是效率低、审计质量受影响。</div></div>' +
        '<ol class="timeline stagger">' +
          '<li><h4>① 获取与预处理</h4><p>用爬虫与 RPA 抓取实时文本，转换为机器可读格式。</p></li>' +
          '<li><h4>② LLM 抽取审计证据</h4><p>由审计师目标、解析 schema 与提示工程（指令微调、few-shot、思维链）引导，' +
            '经 API 与 RPA 自动化，抽取关键证据。</p></li>' +
          '<li class="r"><h4>③ 规则式交叉核验</h4><p>将<b>账务记录</b>与<b>解析出的证据</b>勾稽比对、标记异常。' +
            '审计师保留实质控制权——模型不直接下结论。</p></li>' +
        '</ol>' +
        src('来源', 'SSRN abstract_id=4692960；后发表于 Int. J. of Accounting Information Systems',
            'papers.ssrn.com/sol3/papers.cfm?abstract_id=4692960', CONF.part)
    },

    {
      id: 'p6-li-2',
      label: '详读 · 连续审计（二）案例与结果',
      badge: '重点详读 · 学术',
      title: '详读：连续审计中的实时交叉核验（二）',
      lead: '案例场景与实测结果',
      html:
        '<div class="grid c2" style="margin-bottom:2px">' +
          '<div class="stack sm stagger">' +
            '<div class="unit g"><h4>案例：巴西圣卡塔琳娜州行政分支</h4>' +
              '<p>文本源：每日官方公报（DOE）<br>' +
              '账务源：州人力资源管理信息系统（SIGRH）<br>' +
              '执行方：内部审计团队 GAPES</p></div>' +
            '<div class="unit"><h4>规模（截至 2023-11）</h4>' +
              '<p>SIGRH 管理超 <b>16 万名雇员</b>与 <b>1.5 万名退休人员</b>，' +
              '月支出超 <b>5 亿美元</b>。</p></div>' +
          '</div>' +
          '<div class="stack sm stagger">' +
            '<div class="box"><div class="label">目标风险</div>' +
              '<div class="body">幽灵雇员（公报中从未任命却在册）· 薪酬与公报所载职级不符 · ' +
              '受处罚公务员仍在领薪 · 无薪休假者仍在领薪。</div></div>' +
            '<div class="box m"><div class="label">实测结果</div>' +
              '<div class="body">解析审计证据平均准确率 <b>96–97%</b>；' +
              '单条核验耗时最多降低 <b>83%</b>；' +
              '由随机抽样转为<b>全量测试</b>而不显著增加成本。</div></div>' +
          '</div>' +
        '</div>' +
        '<div class="src step"><b>注意</b> 准确率在两版出处中分别为 96%（SSRN）与 97%（期刊版），' +
        '属版本差异 · 作者自述局限：<b>仅在单一政府薪资系统上演示，泛化性未验证</b>' + CONF.part + '</div>'
    },

    {
      id: 'p6-ac-1',
      label: '详读 · AuditCopilot（一）方法',
      badge: '重点详读 · 学术',
      title: '详读：AuditCopilot（一）方法与设计',
      lead: 'DFKI · NeurIPS 2025 GenAI in Finance Workshop',
      html:
        '<div class="box r step"><div class="label">动机</div>' +
        '<div class="body">审计师依赖 <b>JET 规则</b>（午夜后入账、整数金额、异常科目组合、冷门用户入账）筛选异常。' +
        '规则法<b>假阳性泛滥</b>，审计师大部分时间在排除噪声，且难以捕捉细微异常。</div></div>' +
        '<div class="grid c2 stagger" style="margin-top:4px">' +
          '<div class="finding"><h4>输入与输出</h4>' +
            '<p>每条日记账结构化为类 JSON 文本（入账与交易日期时间、借贷标志、税率、科目 ID、' +
            '预计算的二元异常标志）。模型输出<b>二元异常标签 + 自然语言解释</b>。</p></div>' +
          '<div class="finding"><h4>提示策略</h4>' +
            '<p>基础提示外，"full" 提示额外加入簿记启发式、会计准则、' +
            '汇总统计（均值 / 中位数 / 95 与 99 分位），以及<b>逐行预计算的 Isolation Forest 分数</b>。</p></div>' +
        '</div>' +
        '<div class="band step"><strong>不做微调</strong>：全部采用 zero-shot 提示工程；' +
        '偏好开源权重模型，以保护机密账务数据的隐私。</div>'
    },

    {
      id: 'p6-ac-2',
      label: '详读 · AuditCopilot（二）结果',
      badge: '重点详读 · 学术',
      title: '详读：AuditCopilot（二）结果对照',
      lead: '合成数据集上各方法的精确率 / 召回 / F1 与假阳性数量',
      html:
        '<table class="data step">' +
          '<thead><tr><th>方法</th><th>精确率</th><th>召回</th><th>F1</th><th>假阳性</th></tr></thead>' +
          '<tbody>' +
            '<tr><td class="k">JET 规则基线</td><td>0.53</td><td>0.90</td><td>0.50</td><td>942</td></tr>' +
            '<tr><td class="k">Isolation Forest</td><td>0.61</td><td>0.98</td><td>0.68</td><td>169</td></tr>' +
            '<tr><td class="k">Gemma-2B</td><td>0.53</td><td>0.92</td><td>0.53</td><td>—</td></tr>' +
            '<tr><td class="k">Llama-3.1-8B</td><td>0.67</td><td>0.88</td><td>0.73</td><td>—</td></tr>' +
            '<tr><td class="k">Mistral-8B</td><td style="color:var(--mint)">0.90</td><td>0.98</td><td style="color:var(--mint)">0.94</td><td style="color:var(--mint)">12</td></tr>' +
            '<tr><td class="k">GPT-5-mini</td><td>—</td><td>高</td><td>—</td><td style="color:var(--rose)">466</td></tr>' +
          '</tbody>' +
        '</table>' +
        '<div class="src step"><b>数据构成</b> 合成集随机抽取 <b>5,000 条 posting ID</b>，原始异常率约 1%（50 条），' +
        '经 JET 伪标注后升至约 6% · <b>真实集</b>（行业合作方脱敏数据）上，' +
        'Gemma-7B + full 提示取得 P 0.89 / R 0.78 / F1 0.83' +
        ' · 数字见摘要，未逐一核对原表' + CONF.part + '</div>'
    },

    {
      id: 'p6-ac-3',
      label: '详读 · AuditCopilot（三）消融与批评',
      badge: '重点详读 · 学术 · 反证',
      badgeTone: 'r',
      title: '详读：AuditCopilot（三）消融与批评',
      html:
        '<div class="grid c2 stagger">' +
          '<div class="finding"><h4>消融：去掉关键提示会怎样</h4>' +
            '<p>移除 Isolation Forest 分数后，真实集<b>精确率崩至约 0.14</b>，F1 由 0.83 降至约 0.24；' +
            '移除汇总统计则<b>召回崩塌</b>。结论：统计量保召回，Isolation Forest 保精确。</p></div>' +
          '<div class="finding r"><h4>第三方批评</h4>' +
            '<p>① 合成集真值标签本身由 JET 规则生成，属<b>标签泄漏</b>——' +
            '"LLM 胜过 JET"可能只是在模仿规则；② 消融显示模型更像搭在 IF 信号上的<b>可调阈值层</b>，' +
            '而非独立检测器；③ 仅一个行业、单一真实数据集；④ 基线只有 JET 与 IF；' +
            '⑤ <b>未评估解释文本本身的幻觉</b>。</p></div>' +
        '</div>' +
        '<div class="takeaway step"><span class="mk">对本项目的意义</span>' +
        '<span class="tx">"用 LLM 判异常"这条路，已有工作证明<b>能提高指标</b>，' +
        '但也暴露了标签泄漏、解释不可信、泛化未验证三个问题。' +
        '这恰好说明：<b>可解释性与证据链</b>不是装饰，而是这类系统的成败关键。</span></div>'
    },

    {
      id: 'p6-bf',
      label: '详读 · 数值幻觉的机制',
      badge: '重点详读 · 学术 · 反证',
      badgeTone: 'r',
      title: '详读：数值幻觉从哪里来',
      lead: 'Benford\'s Curse — NeurIPS 2025',
      html:
        '<div class="box r step"><div class="label">核心命题</div>' +
        '<div class="body">LLM 的数值幻觉源于预训练语料中<b>符合本福特定律</b>的数字首位分布被模型内化，' +
        '而算术任务恰恰要求数字均匀分布——两者的错配产生了系统性偏差。</div></div>' +
        '<div class="grid c2 stagger" style="margin-top:4px">' +
          '<div class="finding"><h4>观测到的偏斜</h4>' +
            '<p>预训练语料 OLMo-Mix-1124 中，数字 1 作首位约 <b>30%</b>，数字 9 仅约 <b>5%</b>。' +
            '基准含 7 类数值任务、每题逾 1000 例、正确答案数字均匀分布约 10%，' +
            '但模型输出仍呈本福特式偏斜。</p></div>' +
          '<div class="finding r"><h4>机制定位与因果验证</h4>' +
            '<p>偏斜集中在深层（约第 20–27 层）少量高度"数字选择性"的 FFN 神经元。' +
            '剪除对数字 1 最偏斜的<b>前 0.01% FFN 神经元</b>，可修正 1.36–3.49% 的错误预测；' +
            'LLaMA2-7B 的数字 1 频率由 16.26% 降至 11.17%（目标 10%）。</p></div>' +
        '</div>' +
        src('来源', 'Shao, Lu & Yang，arXiv:2506.01734；代码 github.com/shamy28/Benford-Curse',
            'neurips.cc/virtual/2025/loc/san-diego/poster/119464', CONF.part) +
        '<div class="takeaway step"><span class="mk">对财务场景</span>' +
        '<span class="tx">财务数字天然接近本福特分布，模型对首位数字的先验偏置会<b>系统性污染金额的生成与校验</b>。' +
        '该缺陷属生成层，<b>提示工程与思维链无法根治</b>。</span></div>'
    },

    {
      id: 'p6-icaew',
      label: '详读 · 三家模型实测审计工作',
      badge: '重点详读 · 学术 · 反证',
      badgeTone: 'r',
      title: '详读：三家模型实测"能不能做审计"',
      lead: 'ICAEW，2025-09-24 — 用虚构公司 Majestique Limited 的财务数据实测',
      html:
        '<table class="data step">' +
          '<thead><tr><th>测试项</th><th>Copilot</th><th>Claude Sonnet 4</th><th>Grok 3</th></tr></thead>' +
          '<tbody>' +
            '<tr><td class="k">同比百分比变化取整</td><td style="color:var(--rose)">最差</td><td>未能正确</td><td>未能正确</td></tr>' +
            '<tr><td class="k">按人工审计方式做风险评估</td><td>否</td><td>否</td><td>否</td></tr>' +
            '<tr><td class="k">区分报表层 / 认定层风险</td><td>否</td><td>否</td><td>否</td></tr>' +
            '<tr><td class="k">列示收入确认的推定舞弊风险</td><td style="color:var(--rose)">完全未列</td><td>引用但未解释显著性</td><td>—</td></tr>' +
            '<tr><td class="k">响应时间</td><td>&lt; 20 秒</td><td>约 3.5 分钟</td><td>约 1 分 15 秒</td></tr>' +
          '</tbody>' +
        '</table>' +
        '<div class="grid c2 step" style="margin-top:4px">' +
          '<div class="box r"><div class="label">三个具体的失败点</div>' +
            '<div class="body">无任何模型能正确且一致地取整；三者都引用了 ISA 315，' +
            '但<b>无一区分报表层风险与认定层风险</b>；按 ISA 240，收入确认应被推定为重大舞弊风险，' +
            'Copilot 完全未将其列入。</div></div>' +
          '<div class="quote"><div class="q">"用 Copilot、ChatGPT、Grok 或 Claude 来支持识别重大错报风险' +
            '或计算重要性水平的<b>用例尚未成立</b>。"</div>' +
            '<div class="src">原文：the case ... has not been made · ICAEW 2025-09-24' + CONF.part + '</div></div>' +
        '</div>'
    },

    {
      id: 'p6-bench',
      label: '详读 · 其他公开基准',
      badge: '重点详读 · 学术',
      title: '详读：其他公开基准给出的量级',
      html:
        '<div class="grid c3 stagger">' +
          '<div class="finding r"><h4>FinAuditing</h4>' +
            '<p>13 个前沿 LLM 零样本测评。处理<b>层级化多文档</b>结构时准确率下降达 <b>60–90%</b>；' +
            '最难的数值一致性任务，最强模型也仅 <b>13.86%</b>。</p>' +
            src('来源', 'arXiv:2510.08886，建自真实 US-GAAP XBRL 申报', '', CONF.part) + '</div>' +
          '<div class="finding r"><h4>FinMaster</h4>' +
            '<p>183 项任务的财务工作流基准。基础财务素养 &gt; 90–96%，' +
            '<b>复杂多步推理跌至约 40%</b>，完整财报生成低至约 <b>3%</b>。</p>' +
            src('来源', 'arXiv:2505.13533，ACL Findings 2026', '', CONF.part) + '</div>' +
          '<div class="finding r"><h4>AuditBench</h4>' +
            '<p>结构化输入下能识别数值错报；但要求"用会计术语解释错误"或' +
            '"引用具体 IFRS / US GAAP 条款"时失败——被概括为' +
            '<b>高覆盖、低可解释性</b>的 "confident-but-wrong" 风险。</p>' +
            src('来源', '经综述转述', '', CONF.low) + '</div>' +
        '</div>' +
        '<div class="takeaway step"><span class="mk">归纳</span>' +
        '<span class="tx">多来源的一致结论是：LLM 目前应定位为<b>概率性的认知增强工具</b>，' +
        '而不是自主审计师——持续的幻觉与缺乏可审计的推理链是主要障碍。</span></div>'
    },

    /* ── 政策一 ── */
    {
      id: 'p6-pol1',
      label: '政策 · 电子凭证会计数据标准',
      badge: 'A · 政策与标准',
      badgeTone: 'g',
      title: '政策（一）：电子凭证会计数据标准',
      html:
        '<div class="finding step g"><h4>九部门联合印发，2025 年 5 月起全国推广</h4>' +
          '<p>电子凭证以 XML、XBRL 等<b>结构化数据</b>形式，无需转换即可完成接收、' +
          '报销、入账、归档全流程。已覆盖数电发票、财政电子票据、非税收入缴款书、' +
          '国库集中支付凭证、银行电子回单与对账单等。</p>' +
          src('来源', '《关于推广应用电子凭证会计数据标准的通知》，财政部等九部门，成文 2025-05-09，网站发布 2025-05-19',
              'gov.cn/zhengce/zhengceku/202505/content_7024318.htm', CONF.part) +
        '</div>' +
        '<div class="box g step"><div class="label">配套要求</div>' +
        '<div class="body">《会计信息化工作规范》与《会计软件基本功能和服务规范》' +
        '要求会计软件在施行之日起 <b>3 年内完成升级</b>以适配标准。</div></div>',
      notes: '文号（财会〔2025〕9号）仅见于搜索摘要，未从原文逐字核验，引用前需复核。'
    },

    /* ── 政策二 ── */
    {
      id: 'p6-pol2',
      label: '政策 · 数电票与归档',
      badge: 'A · 政策与标准',
      badgeTone: 'g',
      title: '政策（二）：数电票与电子凭证归档',
      html:
        '<div class="grid c2 stagger">' +
          '<div class="finding g"><h4>数电票已全国推广</h4>' +
            '<p>国家税务总局公告 2024 年第 11 号，自 <b>2024-12-01</b> 起在全国正式推广' +
            '全面数字化的电子发票，与纸质发票具有同等法律效力。</p>' +
            src('来源', '国家税务总局公告 2024 年第 11 号', 'gov.cn/zhengce/zhengceku/202411/content_6989164.htm', CONF.part) + '</div>' +
          '<div class="finding g"><h4>归档规则</h4>' +
            '<p>电子会计凭证与纸质具有同等法律效力；' +
            '以纸质打印件报销入账归档的，<b>必须同时保存</b>该电子会计凭证。</p>' +
            src('来源', '财政部、国家档案局，财会〔2020〕6号', 'gov.cn/zhengce/zhengceku/2020-04/03/content_5498598.htm', CONF.part) + '</div>' +
        '</div>' +
        '<div class="box r step"><div class="label">不要引用</div>' +
        '<div class="body">检索到的"2025 年全国开具数电发票 190 亿份、占比 91%""纳税人 6100 万户"等数字' +
        '<b>均来自媒体转述</b>，未见税务部门原始统计公报，不作为引用依据。</div></div>'
    },

    /* ── 政策三：边界 ── */
    {
      id: 'p6-pol3',
      label: '政策 · 标准化的边界与缺口',
      badge: 'A · 政策与标准',
      badgeTone: 'g',
      title: '政策（三）：标准已经覆盖了什么，没有覆盖什么',
      html:
        '<div class="compare step">' +
          '<div class="side a"><h4>已被标准覆盖</h4>' +
            '<ul class="bullets">' +
              '<li>电子凭证的<b>结构与元数据</b></li>' +
              '<li>中注协审计数据标准：2023 年首批（公共基础、总账、销售、银行流水）</li>' +
              '<li>2024-12 新增采购、应收、应付、电子商务共 4 项</li>' +
              '<li>凭证数据与被审计单位账套在<b>数据元层面</b>可机器对接</li>' +
            '</ul></div>' +
          '<div class="vs">/</div>' +
          '<div class="side b"><h4>不在标准强制范围内</h4>' +
            '<ul class="bullets g">' +
              '<li>合同–订单–发票–收付款的<b>三单匹配</b></li>' +
              '<li>去重与防重复入账</li>' +
              '<li>凭证<b>真实性</b>与是否被篡改的独立验证</li>' +
              '<li>两套标准均为<b>推荐性</b>，落地程度参差</li>' +
            '</ul></div>' +
        '</div>' +
        '<div class="src step"><b>来源</b> 中注协《注册会计师审计数据规范 采购》等 4 项通知，2024-12-09 ' +
        '<span class="u">cicpa.org.cn/xxfb/tzgg/202412/t20241210_65178.html</span>' + CONF.part +
        ' · 右侧为<b>分析性推断</b>，非文件明文</div>'
    },

    /* ═══ 重点详读 · 政策（插入在政策概要之后） ═══ */

    {
      id: 'p6-std-1',
      label: '详读 · 电子凭证标准（一）覆盖与格式',
      badge: '重点详读 · 政策',
      badgeTone: 'g',
      title: '详读：电子凭证会计数据标准（一）',
      lead: '财会〔2025〕9号 · 财政部等九部门 · 印发 2025-05-09',
      html:
        '<div class="band step"><strong>发布形式</strong>：财政部会计司另发《电子凭证会计数据标准（推广应用版）》，' +
        '每类凭证以电子文件包发布，内含 <b>指南 + 元素清单 + 实例文档</b> 三件套。</div>' +
        '<div class="grid c2" style="margin-top:4px">' +
          '<div class="stack sm stagger">' +
            '<div class="unit g"><h4>覆盖的 9 类凭证</h4>' +
              '<p>① 数电发票　② 铁路电子客票　③ 航空运输电子客票行程单<br>' +
              '④ 增值税电子发票（专票 / 普票）　⑤ 财政电子票据<br>' +
              '⑥ 电子非税收入一般缴款书　⑦ 国库集中支付电子凭证<br>' +
              '⑧ 银行电子回单　⑨ 银行电子对账单</p></div>' +
          '</div>' +
          '<div class="stack sm stagger">' +
            '<div class="unit g"><h4>格式与语法映射</h4>' +
              '<p>数电发票 → <b>XML</b>；数电发票（OFD）→ 内嵌 <b>XBRL</b> 的 OFD；<br>' +
              '财政电子票据 → 内嵌 XML 的 PDF；非税收入缴款书 → 内嵌 XBRL 的 PDF；<br>' +
              '国库集中支付凭证 → 内嵌 XML 的 PDF / OFD；<br>' +
              '银行电子回单与对账单 → 内嵌 <b>XBRL</b> 的 OFD</p></div>' +
          '</div>' +
        '</div>' +
        '<div class="src step"><b>来源</b> 《电子凭证会计数据标准（推广应用版）》' +
        '<span class="u">kjs.mof.gov.cn/zt/kuaijixinxihuajianshe/dzpzkjsjbzshsd/sjbz/202505/t20250519_3964020.htm</span>' +
        ' · 官方站点本轮无法直接抓取，文号与格式映射来自多源一致的转述' + CONF.part + '</div>'
    },

    {
      id: 'p6-std-2',
      label: '详读 · 电子凭证标准（二）流程与时限',
      badge: '重点详读 · 政策',
      badgeTone: 'g',
      title: '详读：电子凭证会计数据标准（二）',
      lead: '全流程环节、配套规范与升级时限',
      html:
        '<div class="flow step">' +
          '<div class="node"><span class="n">01</span><h4>接收</h4><p>验签或验真、解析</p></div>' +
          '<span class="arrow">→</span>' +
          '<div class="node"><span class="n">02</span><h4>报销</h4><p>无需格式转换</p></div>' +
          '<span class="arrow">→</span>' +
          '<div class="node"><span class="n">03</span><h4>入账</h4><p>结构化数据直接入账</p></div>' +
          '<span class="arrow">→</span>' +
          '<div class="node"><span class="n">04</span><h4>归档</h4><p>与《会计档案管理办法》衔接</p></div>' +
        '</div>' +
        '<div class="grid c3 stagger" style="margin-top:4px">' +
          '<div class="numed g"><span class="no">11</span><h4>会计信息化工作规范</h4>' +
            '<p>财会〔2024〕11号，六章 50 条。</p></div>' +
          '<div class="numed g"><span class="no">12</span><h4>会计软件基本功能和服务规范</h4>' +
            '<p>财会〔2024〕12号，八章 47 条。</p></div>' +
          '<div class="box g"><div class="label">施行与时限</div>' +
            '<div class="body">两项规范均自 <b>2025-01-01</b> 起施行，废止财会字〔1996〕17号与财会〔2013〕20号。' +
            '会计软件须自施行之日起 <b>3 年内完成升级</b>，即截止 <b>2027-12-31</b>。</div></div>' +
        '</div>' +
        '<div class="src step"><b>未覆盖</b> 其他凭证种类（如海关、通行费、完税证明等未点名）' +
        '按<b>"成熟一个、推进一个"</b>原则适时制定 · 引文属媒体转述，未逐字核对原文' + CONF.part + '</div>'
    },

    {
      id: 'p6-cicpa',
      label: '详读 · 中注协审计数据规范',
      badge: '重点详读 · 政策',
      badgeTone: 'g',
      title: '详读：中注协审计数据规范',
      lead: '推荐性团体标准 · 供审计执行与软件厂商参考',
      html:
        '<table class="data step">' +
          '<thead><tr><th>批次</th><th>发布</th><th>项目</th><th>规模</th></tr></thead>' +
          '<tbody>' +
            '<tr><td class="k">首批 4 项</td><td>2023-03-27</td>' +
              '<td>公共基础 · 总账 · 销售 · 银行流水</td>' +
              '<td>公共基础 23 实体 / 251 数据元<br>总账 9 / 144　销售 16 / 382　银行流水 21 / 203</td></tr>' +
            '<tr><td class="k">新增 4 项</td><td>2024-12-09</td>' +
              '<td>采购 · 应收 · 应付 · 电子商务</td>' +
              '<td>采购含 18 个实体（申请单、合同、订单、发票、入库单、报关单、采购返利、进口完税凭证等），' +
              '并附 XML 输出格式与实例；电子商务新增<b>风控模块</b></td></tr>' +
          '</tbody>' +
        '</table>' +
        '<div class="metrics step" style="margin-top:2px">' +
          '<div class="metric g"><span class="v" data-count="980">0</span><span class="l">数据元（首批合计）</span></div>' +
          '<div class="metric g"><span class="v" data-count="69">0</span><span class="l">实体（首批合计）</span></div>' +
          '<div class="metric"><span class="v" data-count="8">0</span><span class="l">累计标准项数</span></div>' +
        '</div>' +
        '<div class="src step"><b>性质</b> 推荐性<b>团体标准</b>（非强制），编号转述为 T/CICPA 0101–0108；' +
        '已被《会计信息化工作规范》与《会计软件基本功能和服务规范》<b>采信引用</b>' + CONF.part + '</div>'
    },

    /* ── 产品一：国际 ── */
    {
      id: 'p6-prod1',
      label: '产品现状 · 国际',
      badge: 'A · 商用产品',
      title: '产品现状（一）：国际厂商已相当成熟',
      html:
        '<table class="data step">' +
          '<thead><tr><th>产品</th><th>公开的匹配能力</th><th>来源把握</th></tr></thead>' +
          '<tbody>' +
            '<tr><td class="k">SAP</td><td>Central Invoice Management 支持三单匹配（订单 + 收货 / 服务入库单参与自动匹配）</td><td>官方文档 ' + CONF.ok + '</td></tr>' +
            '<tr><td class="k">Oracle</td><td>Payables 执行 2 / 3 / 4 方匹配，按容差将数量、价格、质量差异挂起待审</td><td>官方文档 ' + CONF.ok + '</td></tr>' +
            '<tr><td class="k">Basware</td><td>Invoice Matching 支持 1–4 方及<b>行级</b>匹配，异常转人工复核</td><td>官方文档 ' + CONF.ok + '</td></tr>' +
            '<tr><td class="k">Coupa / Tungsten / Tipalti</td><td>自动匹配已批准订单、可配置容差、自动审批、重复票与欺诈标记</td><td>厂商页面 ' + CONF.low + '</td></tr>' +
          '</tbody>' +
        '</table>' +
        '<div class="src step"><b>注意</b> 厂商自述的"首次匹配率 95%–97%"等指标无第三方独立复核，' +
        '引用时须标明为厂商口径。</div>'
    },

    /* ── 产品二：国内 ── */
    {
      id: 'p6-prod2',
      label: '产品现状 · 国内',
      badge: 'A · 商用产品',
      title: '产品现状（二）：国内厂商同样覆盖广泛',
      html:
        '<div class="grid c2 stagger">' +
          '<div class="finding"><h4>用友</h4><p>税务云直连税务平台实现增值税发票验真与下载；' +
            'U8+ 采购三单匹配（发票–入库单–订单）；NC Cloud 财务共享含自动三单匹配与自动对账。</p>' +
            src('来源', '用友官方产品页', 'yonyou.com', CONF.low) + '</div>' +
          '<div class="finding"><h4>金蝶</h4><p>发票云直连税务平台，支持真伪查验、红冲预警、重复校验等，' +
            '并与 ERP 报销模块实现订单 / 收货单 / 发票三单自动匹配。</p>' +
            src('来源', '金蝶官方产品页', 'kingdee.com', CONF.low) + '</div>' +
          '<div class="finding"><h4>汇联易 / 每刻 / 合思</h4><p>数电票自动归集、纸质票识别、' +
            '真伪与重复与拆单预警、XML 验签。<b>官网未见明确说明</b>是否支持四方匹配、行级匹配或私有化部署。</p>' +
            src('来源', '各家官网', '', CONF.low) + '</div>' +
          '<div class="finding"><h4>云砺 / 甄零</h4><p>覆盖订单–对账–结算–票税–资金协同；' +
            '合同与收付款台账、智能数据校验。</p>' +
            src('来源', '各家官网', '', CONF.low) + '</div>' +
        '</div>' +
        '<div class="src step"><b>证据边界</b> 官网未提及某项功能，<b>不能</b>据此判断该产品不具备该功能。</div>'
    },

    /* ═══ 重点详读 · 产品机制（插入在产品概要之后） ═══ */

    {
      id: 'p6-match-1',
      label: '详读 · 三单匹配（一）匹配到几方',
      badge: '重点详读 · 产品机制',
      title: '详读：三单匹配到底匹配什么（一）',
      lead: '以 Oracle 与 SAP 的官方文档口径为准',
      html:
        '<div class="compare step">' +
          '<div class="side a"><h4>匹配到第几方</h4>' +
            '<ul class="bullets small">' +
              '<li><strong>2 方</strong>：发票 ↔ 采购订单<br><span class="q">只比对订购量与开票量</span></li>' +
              '<li><strong>3 方</strong>：+ 收货 / 入库单<br><span class="q">增加比对实收量</span></li>' +
              '<li><strong>4 方</strong>：+ 检验 / 验收单<br><span class="q">增加比对验收合格量</span></li>' +
            '</ul></div>' +
          '<div class="vs">/</div>' +
          '<div class="side b"><h4>Oracle 用开关控制</h4>' +
            '<ul class="bullets small g">' +
              '<li><span class="code-inline">RECEIPT_REQUIRED_FLAG = Y</span> 才做 3 方匹配，校验已收数量</li>' +
              '<li><span class="code-inline">INSPECTION_REQUIRED_FLAG = Y</span> 才做 4 方匹配，校验验收数量</li>' +
              '<li>2 方匹配只校验：订购量 = 开票量</li>' +
            '</ul></div>' +
        '</div>' +
        '<div class="grid c2 step" style="margin-top:4px">' +
          '<div class="box"><div class="label">匹配的层级</div>' +
            '<div class="body"><b>抬头级</b>：按订单总额整体比对。' +
            '<b>行级</b>：发票行可匹配单个订单行，也可匹配多个订单行（称为 container invoice）。</div></div>' +
          '<div class="box m"><div class="label">为什么层级重要</div>' +
            '<div class="body">只做抬头级匹配会漏掉"总额对、明细错"的情形；' +
            '行级匹配才能定位到具体是哪一条货物对不上。</div></div>' +
        '</div>' +
        src('来源', 'Oracle Payables 官方文档；SAP Help Portal（S4HANA 发票校验与容差配置）',
            'docs.oracle.com/cd/A60725_05/html/comnls/us/ap/pomatc04.htm', CONF.part)
    },

    {
      id: 'p6-match-2',
      label: '详读 · 三单匹配（二）容差与挂起',
      badge: '重点详读 · 产品机制',
      title: '详读：三单匹配到底匹配什么（二）',
      lead: '差异如何被判定、如何挂起、如何回到人工',
      html:
        '<div class="grid c2" style="margin-bottom:2px">' +
          '<div class="stack sm stagger">' +
            '<div class="unit"><h4>Oracle 的挂起类型（写入 AP_HOLDS）</h4>' +
              '<p><b>Qty Ord</b> 开票量 &gt; 订购量　·　<b>Price</b> 单价 &gt; 价格上限<br>' +
              '<b>Qty Rec</b> 开票量 &gt; 收货量　·　<b>Quality</b> 开票量 &gt; 验收量<br>' +
              '<b>Tax Difference</b> 税额差异<br>' +
              '仅当<b>超出容差</b>才挂起；调整发票或订单使之满足条件后<b>自动释放</b>。</p></div>' +
          '</div>' +
          '<div class="stack sm stagger">' +
            '<div class="unit"><h4>SAP 的四类差异与分级</h4>' +
              '<p>差异分四类：数量差异、价格差异、数量 + 价格差异、订单价格数量差异。<br>' +
              '容差按场景配置，每个容差最多含<b>四个限值</b>（百分比 + 绝对值）。</p></div>' +
          '</div>' +
        '</div>' +
        '<div class="flow step">' +
          '<div class="node"><span class="n">容差内</span><h4>直接过账</h4><p>无需人工介入</p></div>' +
          '<span class="arrow">→</span>' +
          '<div class="node"><span class="n">超上限</span><h4>可过账但冻结付款</h4><p>须单独释放</p></div>' +
          '<span class="arrow">→</span>' +
          '<div class="node"><span class="n">超特定限值</span><h4>无法过账</h4><p>必须人工处理</p></div>' +
        '</div>' +
        '<div class="src step"><b>人工环节</b> SAP 会创建"澄清供应商发票异常"任务（中等优先级），' +
        '进入待办收件箱由人工处理 · 典型链路归纳：' +
        '单据采集 → 按层级比对数量与价格 → 容差判定 → 生成差异挂起 → 转人工复核 → 修正后释放付款' + CONF.part + '</div>'
    },

    /* ── 产品三：开源 ── */
    {
      id: 'p6-prod3',
      label: '开源与可复用组件',
      badge: 'A · 开源项目',
      badgeTone: 'm',
      title: '开源现状：底层组件成熟，上层工具空缺',
      html:
        '<div class="grid c2" style="margin-bottom:2px">' +
          '<div class="stack sm stagger">' +
            '<div class="unit m"><h4>文档解析与版面抽取</h4>' +
              '<p>PaddleOCR（PP-StructureV3 / PaddleOCR-VL，含表格级抽取）、MinerU、docTR、unstructured、LayoutLMv3 均已可用且持续维护。</p></div>' +
            '<div class="unit m"><h4>可直接复现的基线</h4>' +
              '<p>发票字段抽取已有公开数据集与微调模型（如 LayoutLMv3 发票微调，F1 约 0.895）。</p></div>' +
          '</div>' +
          '<div class="stack sm stagger">' +
            '<div class="unit r"><h4>开源三单匹配工具：基本空缺</h4>' +
              '<p>检索到的相关仓库多为<b>教学 / 演示级</b>（命令行小工具、Streamlit 演示），' +
              '未见生产级、被广泛采用的开源财务对账工具。</p></div>' +
            '<div class="box r"><div class="label">这本身是一个信号</div>' +
              '<div class="body">底层能力开源充分、上层业务整合开源稀缺——' +
              '但"开源缺口"不等于"市场需求"，这一点仍待验证。</div></div>' +
          '</div>' +
        '</div>' +
        '<div class="src step"><b>来源</b> GitHub 仓库与 PyPI 页面' + CONF.ok +
        ' · 星标数与更新时间来自二手来源，未逐一核验</div>'
    },

    /* ═══ 重点详读 · 开源（插入在开源概要之后） ═══ */

    {
      id: 'p6-oss-1',
      label: '详读 · PaddleOCR 系能力',
      badge: '重点详读 · 开源',
      badgeTone: 'm',
      title: '详读：PaddleOCR 系的文档解析能力',
      html:
        '<div class="grid c2 stagger">' +
          '<div class="finding m"><h4>PP-StructureV3</h4>' +
            '<p>强化版面区域检测（<b>17 类区域</b>）、表格结构识别（SLANet / SLANet_plus）、公式识别；' +
            '新增图表理解、<b>多栏阅读顺序恢复</b>，可直接导出 Markdown。公式结果转 LaTeX。</p>' +
            '<p style="margin-top:8px">许可：<b>Apache-2.0</b></p></div>' +
          '<div class="finding m"><h4>PaddleOCR-VL（0.9B）</h4>' +
            '<p>NaViT 动态分辨率视觉编码器 + ERNIE-4.5-0.3B。两阶段流程：' +
            'PP-DocLayoutV2 做版面分析与阅读顺序 → 0.9B 模型识别 → 后处理合并；' +
            '输出 Markdown / JSON，支持 <b>109 种语言</b>。</p>' +
            '<p style="margin-top:8px">许可：<b>Apache-2.0</b>　·　2025-10-16 开源</p></div>' +
        '</div>' +
        '<div class="box m step"><div class="label">为什么对这个项目重要</div>' +
        '<div class="body">中文原生、体积小、<b>许可对商用友好</b>，且两阶段"版面 + 识别"的流程' +
        '对中文发票与票据类版式更直接——底层解析可以不自研。</div></div>' +
        src('来源', 'github.com/PaddlePaddle/PaddleOCR；huggingface.co/PaddlePaddle/PaddleOCR-VL',
            '', CONF.part)
    },

    {
      id: 'p6-oss-2',
      label: '详读 · MinerU 与解析选型',
      badge: '重点详读 · 开源',
      badgeTone: 'm',
      title: '详读：MinerU 与解析方案选型',
      html:
        '<table class="data step">' +
          '<thead><tr><th>引擎</th><th>特点</th><th>代价</th></tr></thead>' +
          '<tbody>' +
            '<tr><td class="k">pipeline</td><td>规则驱动，速度快，<b>不产生幻觉</b></td><td>精度有限，可纯 CPU 运行</td></tr>' +
            '<tr><td class="k">vlm-engine</td><td>精度最高</td><td>需 GPU 与 vLLM / LMDeploy 等推理框架</td></tr>' +
            '<tr><td class="k">hybrid-engine</td><td>原生文本提取 + 按需调用 VLM，<b>低幻觉</b></td><td>有 GPU 时综合表现最佳</td></tr>' +
          '</tbody>' +
        '</table>' +
        '<div class="grid c2 step" style="margin-top:4px">' +
          '<div class="box m"><div class="label">选型对照（分析性判断，非官方基准）</div>' +
            '<div class="body">中文原生、商用友好、体积紧凑 → <b>PaddleOCR-VL</b>；' +
            '长版面文档、低幻觉优先 → <b>MinerU hybrid</b>。</div></div>' +
          '<div class="box r"><div class="label">两个必须注意的点</div>' +
            '<div class="body">① 两库均<b>无官方"中文发票"专项准确率</b>数据；' +
            '② MinerU 自 3.1.0 起许可由 AGPLv3 改为<b>基于 Apache-2.0 的附加条款许可</b>，' +
            '并非纯 Apache-2.0，采用前须读 LICENSE。</div></div>' +
        '</div>' +
        '<div class="src step"><b>输出格式</b> MinerU 输出 Markdown、按阅读顺序的 JSON 与中间格式，' +
        '支持 109 种语言 OCR · github.com/opendatalab/MinerU' + CONF.part + '</div>'
    },

    /* ── 现状小结 ── */
    {
      id: 'p6-stage',
      label: '现状小结 · 走到哪一步',
      title: '现状小结：各环节的成熟度',
      html:
        '<table class="data step">' +
          '<thead><tr><th>环节</th><th>现状</th><th>成熟度</th></tr></thead>' +
          '<tbody>' +
            '<tr><td class="k">文档解析与字段抽取</td><td>商用与开源方案均可用</td>' +
              '<td><span class="maturity hi" style="width:78px"></span></td></tr>' +
            '<tr><td class="k">单据匹配（2/3/4 方）与容差</td><td>主流产品已成熟</td>' +
              '<td><span class="maturity hi" style="width:86px"></span></td></tr>' +
            '<tr><td class="k">异常挂起与人工复核流程</td><td>产品普遍具备</td>' +
              '<td><span class="maturity hi" style="width:72px"></span></td></tr>' +
            '<tr><td class="k">中文数电票验签与归档</td><td>有产品，标准在推进，落地参差</td>' +
              '<td><span class="maturity mid" style="width:52px"></span></td></tr>' +
            '<tr><td class="k">异常的<b>归因</b>与证据链展示</td><td>普遍薄弱</td>' +
              '<td><span class="maturity lo" style="width:26px"></span></td></tr>' +
            '<tr><td class="k">凭证真实性 / 篡改的独立验证</td><td>非标准强制项</td>' +
              '<td><span class="maturity lo" style="width:22px"></span></td></tr>' +
          '</tbody>' +
        '</table>' +
        '<div class="src step"><b>说明</b> 成熟度为基于上述来源的<b>综合判断</b>，非单一来源数据。</div>'
    },

    /* ── 可参考 ── */
    {
      id: 'p6-reference',
      label: '我们可以参考什么',
      title: '我们可以参考什么',
      html:
        '<div class="grid c2 stagger">' +
          '<div class="tile"><div class="ico">A</div><div><h4>学术：任务框架与评价方式</h4>' +
            '<p>任务链定义、指标选择、以及"合成数据高分≠真实有效"的教训，可直接沿用。</p></div></div>' +
          '<div class="tile"><div class="ico g">B</div><div><h4>标准：数据元层面的对接基础</h4>' +
            '<p>电子凭证会计数据标准与审计数据标准，使凭证与账套数据可机器对接。</p></div></div>' +
          '<div class="tile"><div class="ico v">C</div><div><h4>产品：匹配规则与异常处理交互</h4>' +
            '<p>容差设计、差异挂起、转人工复核的流程，是经过验证的成熟做法。</p></div></div>' +
          '<div class="tile"><div class="ico m">D</div><div><h4>开源：底层解析与抽取</h4>' +
            '<p>版面分析与字段抽取无需自研，可把精力集中在核验与归因逻辑上。</p></div></div>' +
        '</div>'
    },

    /* ── 空缺一 ── */
    {
      id: 'p6-gap1',
      label: '空缺（一）',
      badge: 'C · 空缺',
      badgeTone: 'r',
      title: '空缺（一）：能力集中在"判过了没有"，少在"为什么"',
      html:
        '<div class="compare step">' +
          '<div class="side a"><h4>现有能力重心</h4>' +
            '<ul class="bullets">' +
              '<li>这笔是否匹配上</li>' +
              '<li>差异是否在容差内</li>' +
              '<li>是否自动审批通过</li>' +
              '<li>是否标记为重复或欺诈</li>' +
            '</ul></div>' +
          '<div class="vs">/</div>' +
          '<div class="side b"><h4>相对薄弱的部分</h4>' +
            '<ul class="bullets g">' +
              '<li>异常<b>为什么</b>异常、属于哪一类业务情形</li>' +
              '<li>判断依据如何<b>追溯到具体证据</b></li>' +
              '<li>不确定性与证据链如何呈现给财务人员</li>' +
              '<li>开源侧尚无生产级对账工具</li>' +
            '</ul></div>' +
        '</div>' +
        '<div class="src step"><b>来源</b> 综合上述产品文档与开源检索 · 属<b>分析性判断</b>，需在第 7 部分调研中验证</div>'
    },

    /* ── 空缺二：反证 ── */
    {
      id: 'p6-gap2',
      label: '空缺（二）· 但空缺不等于需求',
      badge: 'C · 空缺 · 反证',
      badgeTone: 'r',
      title: '空缺（二）：但"有空缺"不等于"有需求"',
      html:
        '<div class="grid c3 stagger">' +
          '<div class="finding r"><h4>自动化落地明显不及预期</h4>' +
            '<p>有厂商调研称 76% 应付团队自动化率不足 50%，仅 3% 超过 70% 直通，' +
            '71% 准确率低于 90%。</p>' +
            src('来源', '厂商博客引述 SSON 等', 'go-springtime.com/insights', CONF.low) + '</div>' +
          '<div class="finding r"><h4>已有方案被认为部分满足</h4>' +
            '<p>有评论认为企业早已自建电子发票与 EDI 通道，' +
            '并引数据称推行电子发票二十年后仅少数财务团队实现全自动。</p>' +
            src('来源', '媒体评论（法国 / 西班牙）', '', CONF.low) + '</div>' +
          '<div class="finding r"><h4>合规强制未必带来降本</h4>' +
            '<p>有报道称某国强制电子发票一年后，仅少数企业认为省钱，' +
            '相当比例认为成本反而更高。</p>' +
            src('来源', '商业媒体报道', '', CONF.low) + '</div>' +
        '</div>' +
        '<div class="takeaway step"><span class="mk">推论</span>' +
        '<span class="tx">空缺存在，但<b>"空缺 = 未被满足的需求"这一步尚未验证</b>。' +
        '这正是第 7 部分市场与用户调研要回答的首要问题。</span></div>'
    },

    /* ── 需求侧证据 ── */
    {
      id: 'p6-demand',
      label: '需求侧证据',
      badge: 'A · 需求证据',
      title: '需求侧证据：有，但要看清口径',
      html:
        '<div class="grid c3 stagger">' +
          '<div class="finding"><h4>支付舞弊普遍存在</h4>' +
            '<p>79% 的受访企业遭遇过实际或未遂的支付舞弊；发票舞弊由 14% 升至 24%；' +
            '供应商冒名由 34% 升至 45%。</p>' +
            src('来源', 'AFP《2025 支付舞弊与控制调查》（521 份回复）', 'financialprofessionals.org', CONF.part) + '</div>' +
          '<div class="finding"><h4>重复付款比例</h4>' +
            '<p>行业协会口径称重复付款约占发票的 1%–2%，' +
            '中位数约为付款额的 1.5%。</p>' +
            src('来源', 'IOFM / APQC（经二手转述）', '', CONF.part) + '</div>' +
          '<div class="finding r"><h4>成本口径不可靠</h4>' +
            '<p>常见引用为单张发票手工约 $9.40、最佳约 $2.78。' +
            '但有厂商指出流通数据相差约 5 倍，原始报告在付费墙后。</p>' +
            src('来源', 'Ardent Partners（经转述）', 'wexinc.com/resources/blog', CONF.low) + '</div>' +
        '</div>' +
        '<div class="src step"><b>说明</b> 左侧两条为行业协会调查，仍有赞助方利益；右侧为厂商转述，<b>不可直接引用为定论</b>。</div>'
    },

    /* ── 监管处罚 ── */
    {
      id: 'p6-enforce',
      label: '监管处罚案例',
      badge: 'A · 监管案例',
      title: '监管处罚案例：单据造假确有真实后果',
      html:
        '<div class="grid c2 stagger">' +
          '<div class="finding"><h4>中国 · 财政部 2025 年多起"伪造单据"处罚</h4>' +
            '<p>涉及伪造货运单与出库单虚增收入、虚构采购虚增成本、' +
            '虚假签收入库资料虚增存货等，相关审计机构亦被处罚。' +
            '2023 年执业质量检查处罚会计师事务所 8 家、注册会计师 84 名。</p>' +
            src('来源', '财政部财监法〔2025〕149 号 / 244 号 / 372 号', 'mof.gov.cn', CONF.part) + '</div>' +
          '<div class="finding"><h4>美国 · SEC 执法行动</h4>' +
            '<p>American Renal Associates 前高管利用收入"饼干罐"造假，' +
            '2017 年净利虚增超 30%；Pareteum 虚构收入金额与比例极高。</p>' +
            src('来源', 'SEC Litigation Releases LR-26250 / LR-26334', 'sec.gov', CONF.part) + '</div>' +
        '</div>' +
        '<div class="src step"><b>说明</b> 以上均为二手转述，未从官方原文页逐条核验。' +
        '引用到正式材料前需回原文核对文号与金额。</div>'
    },

    /* ── 模糊一 ── */
    {
      id: 'p6-fuzzy1',
      label: '尚模糊（一）· 需求',
      badge: 'D · 尚模糊',
      badgeTone: 'g',
      title: '尚模糊（一）：需求是否真实成立',
      html:
        '<ul class="bullets g stagger">' +
          '<li><strong>谁是使用者、谁是购买者、谁是决策者？</strong>' +
          '<span class="q">财务负责人 / 财务共享中心 / 会计师事务所，三者的诉求并不相同。</span></li>' +
          '<li><strong>问题出现在哪个流程、多频繁？</strong>' +
          '<span class="q">日常对账、月末结账、审计抽查，场景强度差异很大。</span></li>' +
          '<li><strong>现有方案已经覆盖到什么程度？</strong>' +
          '<span class="q">若商用产品已足够，缺口就不成立。</span></li>' +
          '<li><strong>愿意为"归因与证据链"额外付费吗？</strong>' +
          '<span class="q">这是本项目假定的差异点，但假设尚未被验证。</span></li>' +
          '<li><strong>问题的损失或合规影响是否足够显著？</strong>' +
          '<span class="q">需要量化的证据，而非直觉。</span></li>' +
        '</ul>',
      notes: '这些问句直接对应第 7 部分模块 A。'
    },

    /* ── 模糊二 ── */
    {
      id: 'p6-fuzzy2',
      label: '尚模糊（二）· 数据',
      badge: 'D · 尚模糊',
      badgeTone: 'g',
      title: '尚模糊（二）：数据能否拿到、能否合法使用',
      html:
        '<div class="grid c2 stagger">' +
          '<div class="box g"><div class="label">可得性</div>' +
            '<div class="body">能否取得合法、合规、可用于研发的真实或脱敏数据？' +
            '公开数据集、合成数据方案、可复现基准是否足够支撑实验？</div></div>' +
          '<div class="box g"><div class="label">合规边界</div>' +
            '<div class="body">财务数据涉及商业秘密与个人信息。' +
            '数据授权、脱敏标准、使用范围与留存期限，都需要在项目早期确定。</div></div>' +
          '<div class="box r"><div class="label">已被识别的方法论风险</div>' +
            '<div class="body">合成数据上的高分<b>不能</b>当作真实场景有效的证据——' +
            '前文 AuditCopilot 的合成集与真实集指标差距即为实例。</div></div>' +
          '<div class="box"><div class="label">对进度的影响</div>' +
            '<div class="body">数据可得性应当是<b>早期决策门槛</b>，' +
            '而不是留到项目后期才解决的问题。</div></div>' +
        '</div>',
      notes: '对应第 7 部分模块 E。'
    },

    /* ── 模糊三 ── */
    {
      id: 'p6-fuzzy3',
      label: '尚模糊（三）· 技术',
      badge: 'D · 尚模糊',
      badgeTone: 'g',
      title: '尚模糊（三）：技术方案与创新点在哪',
      html:
        '<ul class="bullets g stagger">' +
          '<li><strong>与现有商用能力的差异究竟在哪里？</strong>' +
          '<span class="q">需要先完成竞品能力核对，才能谈差异。</span></li>' +
          '<li><strong>该环节是否真的必须使用 AI？</strong>' +
          '<span class="q">是否存在更简单、更可靠的替代方案（规则、约束校验等）。</span></li>' +
          '<li><strong>"用了大模型 / 多模态 / Agent"本身不构成创新。</strong>' +
          '<span class="q">技术必须对应清晰的问题、可验证的效果与具体的使用价值。</span></li>' +
          '<li><strong>如何设计实验，区分技术贡献与普通工程集成？</strong>' +
          '<span class="q">需要定义基线、指标、消融与错误分析。</span></li>' +
          '<li><strong>可解释性与人工复核如何设计？</strong>' +
          '<span class="q">在错误容忍度极低的财务场景中，这是必要项而非加分项。</span></li>' +
        '</ul>',
      notes: '对应第 7 部分模块 B 与 F。'
    },

    /* ── 模糊四 ── */
    {
      id: 'p6-fuzzy4',
      label: '尚模糊（四）· 竞赛适配',
      badge: 'D · 尚模糊',
      badgeTone: 'g',
      title: '尚模糊（四）：竞赛适配与最终交付',
      html:
        '<div class="grid c2 stagger">' +
          '<div class="box g"><div class="label">需要确认</div>' +
            '<div class="body">评审可能如何判断问题价值、创新性、技术深度、完成度、应用前景与团队能力。' +
            '<b>具体规则与评审标准应查对应年份的正式文件</b>，不能仅凭往年经验推定。</div></div>' +
          '<div class="box g"><div class="label">需要明确</div>' +
            '<div class="body">最终可以展示什么：可运行原型、合规的演示数据、实验结果、' +
            '用户验证、部署方案——以及这些在现有资源与时间下能完成到什么程度。</div></div>' +
          '<div class="box"><div class="label">还需要比较</div>' +
            '<div class="body">是否还有其他比当前假设更适合本团队能力的候选方向。' +
            '方向可以调整，不应因为已经投入时间而拒绝修正。</div></div>' +
          '<div class="box m"><div class="label">交付形态</div>' +
            '<div class="body">团队倾向交付有实际用途的产品或原型，而不是只提交一份报告。' +
            '但"产品化优先"不意味着跳过研究或预先锁死需求。</div></div>' +
        '</div>',
      notes: '对应第 7 部分模块 F。'
    },

    /* ── 意义评价 ── */
    {
      id: 'p6-significance',
      label: '选题意义评价',
      badge: 'E · 意义评价',
      title: '选题意义评价',
      html:
        '<div class="grid c2 stagger">' +
          '<div class="box"><div class="label">想解决的问题</div>' +
            '<div class="body">多份业务材料之间的交叉核验目前主要依靠人工，' +
            '成本高、覆盖有限；而异常一旦发生，后果涉及资金与合规。</div></div>' +
          '<div class="box"><div class="label">如果成立，价值在哪里</div>' +
            '<div class="body">把"是否匹配"推进到"为什么异常、依据是什么"，' +
            '让判断可追溯、可复核，而不是一个黑箱结论。</div></div>' +
          '<div class="box"><div class="label">可能的贡献方向</div>' +
            '<div class="body">异常归因与证据链的可解释呈现；' +
            '中文数电票场景下的核验链路；开源侧的工程化缺口。</div></div>' +
          '<div class="box r"><div class="label">前提</div>' +
            '<div class="body">以上评价均以<b>研究结论</b>为前提。' +
            '若调研发现需求不足、竞品已覆盖或数据不可得，' +
            '这一选题的意义判断也随之改变。</div></div>' +
        '</div>',
      notes: '不要把这页讲成"我们已经确定了一个有价值的题目"，而是"如果前提成立，价值在此"。'
    },

    /* ── 来源清单 ── */
    {
      id: 'p6-sources',
      label: '来源清单',
      title: '来源清单（检索日期 2026-10-14）',
      html:
        '<div class="grid c2">' +
          '<div class="stack sm stagger">' +
            '<div class="unit"><h4>学术</h4><p>SSRN 4692960（连续审计）· arXiv 2512.02726（AuditCopilot）· NeurIPS 2025 Benford\'s Curse · ICAEW 2025-09 实测报告</p></div>' +
            '<div class="unit g"><h4>政策与标准</h4><p>财政部等九部门电子凭证会计数据标准通知（2025-05）· 国家税务总局公告 2024 年第 11 号 · 财会〔2020〕6号 · 中注协审计数据规范（2024-12）</p></div>' +
          '</div>' +
          '<div class="stack sm stagger">' +
            '<div class="unit"><h4>产品与开源</h4><p>SAP Help Portal · Oracle Docs · Basware · Coupa · Tungsten · Tipalti · 用友 / 金蝶 / 汇联易 / 每刻 / 合思 / 云砺官网 · PaddleOCR · MinerU · docTR · LayoutLMv3</p></div>' +
            '<div class="unit r"><h4>需求与监管</h4><p>AFP《2025 支付舞弊与控制调查》· Ardent Partners（经转述）· 财政部财监法〔2025〕149 / 244 / 372 号 · SEC LR-26250 / LR-26334</p></div>' +
          '</div>' +
        '</div>' +
        '<div class="takeaway step"><span class="mk">下一步</span>' +
        '<span class="tx">以上来源中标注为"待复核"的条目，需在正式引用前回原文核对；' +
        '标注为"厂商自述"的，不得作为独立事实使用。</span></div>'
    }

  ]
});
