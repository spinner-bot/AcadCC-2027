/* 第 5 部分 · 会议流程与主旨目标
   只保留流程与工作方式本身，删去"希望大家理解…"一类表态页。
   不出现时长、休息页或时间安排。 */
DECK.registerSection({
  id: 'p5',
  title: '会议流程与主旨目标',
  slides: [

    {
      id: 'p5-head',
      label: '会议流程与主旨',
      html:
        '<div class="section-head">' +
          '<div class="no">05</div>' +
          '<div class="txt">' +
            '<div class="kicker">Part 05</div>' +
            '<h2 class="slide-title">会议流程与主旨目标</h2>' +
            '<p class="slide-lead">本次会议的推进顺序，以及贯穿全程的工作方式。</p>' +
          '</div>' +
        '</div>'
    },

    {
      id: 'p5-agenda',
      label: '会议流程',
      title: '会议流程',
      html:
        '<ol class="agenda stagger">' +
          '<li><span class="t">会议封面与欢迎</span><span class="d">开场</span></li>' +
          '<li><span class="t">工程启动准备</span><span class="d">工具与仓库</span></li>' +
          '<li><span class="t">团队成员专业比例</span><span class="d">能力结构</span></li>' +
          '<li><span class="t">团队成员自我介绍</span><span class="d">成员</span></li>' +
          '<li><span class="t">会议流程与主旨目标</span><span class="d">即本部分</span></li>' +
          '<li><span class="t">选题引入与背景</span><span class="d">重点</span></li>' +
          '<li><span class="t">前期调研：布局与任务分配</span><span class="d">重点</span></li>' +
          '<li><span class="t">收尾</span><span class="d">结束</span></li>' +
        '</ol>',
      notes: '只讲顺序，不涉及时长。'
    },

    {
      id: 'p5-thesis',
      layout: 'solo',
      label: '本次会议的主旨',
      html:
        '<div class="stack lg" style="align-items:center">' +
          '<div class="chip-row"><span class="chip g">主旨</span></div>' +
          '<h2 class="statement" style="text-align:center;max-width:30ch">' +
          '本次会议确定的是<span class="hl">研究方式</span>，<br>不是<span class="hl r">选题结论</span></h2>' +
          '<div class="rule"></div>' +
          '<p class="slide-lead" style="text-align:center;max-width:52ch">' +
          '先分模块把证据找齐，再基于证据比较、收敛方向。</p>' +
        '</div>'
    },

    {
      id: 'p5-flow',
      label: '工作方式',
      title: '工作方式：先分头研究，再一起收敛',
      html:
        '<div class="flow step">' +
          '<div class="node"><span class="n">01</span><h4>分模块研究</h4>' +
            '<p>六个方向各自独立展开，独立得出结论</p></div>' +
          '<span class="arrow">→</span>' +
          '<div class="node"><span class="n">02</span><h4>汇总比较</h4>' +
            '<p>证据集中比对，保留共识，也保留分歧</p></div>' +
          '<span class="arrow">→</span>' +
          '<div class="node"><span class="n">03</span><h4>收敛方向</h4>' +
            '<p>基于证据比较，确定更精确的选题</p></div>' +
        '</div>' +
        '<div class="grid c2 step" style="margin-top:4px">' +
          '<div class="box m"><div class="label">研究结果的形式</div>' +
            '<div class="body">研究可能支持初始假设，也可能暴露需求不足、竞品强大、数据不可得。' +
            '这些结果都属于研究正常发挥作用。</div></div>' +
          '<div class="box g"><div class="label">方向的调整</div>' +
            '<div class="body">初始假设可以被推翻。' +
            '不因已投入时间或已对外描述过某个想法，而拒绝修正方向。</div></div>' +
        '</div>'
    },

    {
      id: 'p5-evidence',
      label: '成果的证据标准',
      title: '研究成果的证据标准',
      lead: '每一条关键结论，都应能拆解为以下几项。',
      html:
        '<div class="grid c2">' +
          '<div class="stack sm stagger">' +
            '<div class="unit"><h4>① 结论</h4><p>用简明语言说明发现了什么。</p></div>' +
            '<div class="unit"><h4>② 证据</h4><p>原始来源、可访问链接、发布日期或检索日期。</p></div>' +
            '<div class="unit"><h4>③ 来源质量</h4><p>官方文件 / 同行评审论文 / 产品文档 / 访谈 / 媒体 / 个人观点。</p></div>' +
            '<div class="unit"><h4>④ 方法</h4><p>检索方式、筛选标准与比较口径。</p></div>' +
          '</div>' +
          '<div class="stack sm stagger">' +
            '<div class="unit r"><h4>⑤ 反证与局限</h4><p>相反证据、信息缺口，以及不能据此推出的结论。</p></div>' +
            '<div class="unit g"><h4>⑥ 对项目的影响</h4><p>该发现如何影响需求、技术路线、创新点或选题判断。</p></div>' +
            '<div class="unit m"><h4>⑦ 下一步</h4><p>还需验证什么，以何种方式验证。</p></div>' +
          '</div>' +
        '</div>',
      notes: '第 6 部分按此标准展开。'
    },

    /* ── 合格结论实例 ── */
    {
      id: 'p5-good',
      label: '一条合格结论长什么样',
      title: '一条合格结论长什么样',
      lead: '用本报告中的一条真实结论，按七要素逐项拆开。',
      html:
        '<div class="grid c2" style="margin-bottom:2px">' +
          '<div class="stack sm stagger">' +
            '<div class="unit"><h4>① 结论</h4><p>电子凭证会计数据标准已自 2025 年 5 月起全国推广，' +
              '但<b>三单匹配</b>与<b>凭证真实性验证</b>不在该标准的强制范围内。</p></div>' +
            '<div class="unit"><h4>② 证据</h4><p>《关于推广应用电子凭证会计数据标准的通知》，' +
              '财政部等九部门，印发 2025-05-09<br>' +
              '<span class="src" style="border:none;padding:0;margin-top:4px">gov.cn/zhengce/zhengceku/202505/content_7024318.htm</span></p></div>' +
            '<div class="unit r"><h4>⑤ 反证与局限</h4><p>"不在强制范围内"属<b>分析性推断</b>，非文件明文；' +
              '官方页面本轮无法直接抓取，仅见摘要。</p></div>' +
          '</div>' +
          '<div class="stack sm stagger">' +
            '<div class="unit"><h4>③ 来源质量</h4><p>官方文件——但本轮为<b>经转述</b>，未读原文。</p></div>' +
            '<div class="unit"><h4>④ 方法</h4><p>官方域名定向检索 + 多个转述源交叉比对。</p></div>' +
            '<div class="unit g"><h4>⑥ 对项目的影响</h4><p>说明"交叉核验"存在空间，' +
              '但需先确认现有产品的覆盖程度。</p></div>' +
            '<div class="unit m"><h4>⑦ 下一步</h4><p>回原文核对文号与条款；' +
              '检索是否已有第三方工具实现同一能力。</p></div>' +
          '</div>' +
        '</div>'
    },

    /* ── 不合格写法 ── */
    {
      id: 'p5-bad',
      label: '三种不合格写法',
      title: '三种不合格写法',
      html:
        '<div class="grid c3 stagger">' +
          '<div class="finding r"><h4>只有结论，没有来源</h4>' +
            '<p><i>"市场上存在强烈需求。"</i></p>' +
            '<p style="margin-top:8px;color:var(--gold)">缺：谁的需求？多强？频率如何？依据在哪？</p></div>' +
          '<div class="finding r"><h4>把厂商宣传当事实</h4>' +
            '<p><i>"某产品准确率 99.8%。"</i></p>' +
            '<p style="margin-top:8px;color:var(--gold)">缺：来源是厂商官网，无第三方复核——' +
            '只能写作"厂商自述"。</p></div>' +
          '<div class="finding r"><h4>把"没搜到"写成"不存在"</h4>' +
            '<p><i>"没有竞品做这件事。"</i></p>' +
            '<p style="margin-top:8px;color:var(--gold)">应写："本次检索范围内<b>未发现</b>公开产品"。' +
            '没有搜到 ≠ 不存在。</p></div>' +
        '</div>' +
        '<div class="takeaway step"><span class="mk">共同点</span>' +
        '<span class="tx">三种写法都把<b>推断</b>说成了<b>事实</b>。' +
        '改正的方法只有一个：把"我们知道什么、不知道什么"分开写。</span></div>'
    }

  ]
});
