/* 第 8 部分 · 收尾
   只陈述已确定与尚未确定的边界，以及下一步动作；不做动员，不含时间安排。 */
DECK.registerSection({
  id: 'p8',
  title: '收尾',
  slides: [

    {
      id: 'p8-head',
      label: '收尾',
      html:
        '<div class="section-head">' +
          '<div class="no">08</div>' +
          '<div class="txt">' +
            '<div class="kicker">Part 08</div>' +
            '<h2 class="slide-title">收尾</h2>' +
            '<p class="slide-lead">本次会议确定了什么、没有确定什么，以及下一步要做的事。</p>' +
          '</div>' +
        '</div>'
    },

    /* ── 已确定 / 尚未确定 ── */
    {
      id: 'p8-state',
      label: '已确定与尚未确定',
      title: '已确定 与 尚未确定',
      html:
        '<div class="compare step">' +
          '<div class="side a"><h4>已确定</h4>' +
            '<ul class="bullets small">' +
              '<li>会议名称：<span class="code-inline">[6A14-02] Acad.CC 2027 Kick-off</span></li>' +
              '<li>团队 8 人与专业构成</li>' +
              '<li>技术能力较强，具备财务与管理基础</li>' +
              '<li>倾向交付有实际用途的产品或原型</li>' +
              '<li>先研究、汇总证据，再确定方向</li>' +
            '</ul></div>' +
          '<div class="vs">/</div>' +
          '<div class="side b"><h4>尚未确定</h4>' +
            '<ul class="bullets small g">' +
              '<li>最终项目方向与具体使用场景</li>' +
              '<li>正式项目标题、产品名称、项目代号</li>' +
              '<li>最终创新点</li>' +
              '<li>目标用户与实际需求是否充分成立</li>' +
              '<li>最终技术方案</li>' +
              '<li>数据来源、授权方式与实验数据集</li>' +
              '<li>竞品比较结论</li>' +
              '<li>商业模式或具体落地路径</li>' +
              '<li>最终功能范围与可交付程度</li>' +
            '</ul></div>' +
        '</div>',
      notes: '右栏都要念到。这一页的作用是防止会后把"讨论过的"当成"已经定下来的"。'
    },

    /* ── 待决问题 ── */
    {
      id: 'p8-open',
      label: '待决问题',
      title: '待决问题',
      lead: '以下问题在本轮调研之后才能回答，现在没有答案。',
      html:
        '<ul class="bullets stagger">' +
          '<li><strong>需求是否真实成立？</strong>' +
          '<span class="q">使用者的痛点强度、现有方案的覆盖程度、是否愿意为此付费。</span></li>' +
          '<li><strong>数据能不能拿到？</strong>' +
          '<span class="q">合法可用的真实或脱敏数据是否存在，授权链路是否走得通。</span></li>' +
          '<li><strong>差异点是否成立？</strong>' +
          '<span class="q">"归因与证据链"这一假定差异点，需要先完成竞品能力核对。</span></li>' +
          '<li><strong>本轮检索中"待复核"的来源是否属实？</strong>' +
          '<span class="q">多个官方页面无法直接抓取，需回原文逐条核对。</span></li>' +
          '<li><strong>当年的竞赛规则与评审标准是什么？</strong>' +
          '<span class="q">须查对应年份正式文件，不凭往年经验推定。</span></li>' +
        '</ul>'
    },

    /* ── 决策方式 ── */
    {
      id: 'p8-decision',
      label: '怎么从研究报告走到选题决定',
      title: '怎么从研究报告走到选题决定',
      html:
        '<div class="grid c2" style="margin-bottom:2px">' +
          '<div class="stack sm stagger">' +
            '<div class="box"><div class="label">八个比较维度</div>' +
              '<div class="body" style="line-height:2">' +
              '需求强度 · 创新空间 · 技术可行性 · 数据可得性<br>' +
              '团队匹配度 · 竞赛适配度 · 产品完成度 · 验证成本</div></div>' +
            '<div class="box r"><div class="label">不按什么排序</div>' +
              '<div class="body">不按"技术看起来有多先进"，也不按"演示效果有多炫"。</div></div>' +
          '</div>' +
          '<div class="stack sm stagger">' +
            '<div class="unit g"><h4>必须区分清楚的四件事</h4>' +
              '<p>① <b>有吸引力的方向</b><br>' +
              '② <b>有证据支持的需求</b><br>' +
              '③ <b>可实现的方案</b><br>' +
              '④ <b>已验证的成果</b></p>' +
              '<p style="margin-top:8px;color:var(--text-3)">四者常被混为一谈，' +
              '但它们之间隔着证据、工程与实验三道关。</p></div>' +
          '</div>' +
        '</div>' +
        '<div class="takeaway step"><span class="mk">流程</span>' +
        '<span class="tx">各方向独立成稿 → 汇总共识、分歧、关键风险与待决问题 → ' +
        '按同一套维度横向比较 → 收敛出更精确的选题。</span></div>'
    },

    /* ── 下一步 ── */
    {
      id: 'p8-next',
      label: '下一步',
      title: '下一步',
      html:
        '<ol class="timeline stagger">' +
          '<li><h4>认领六个调研方向</h4>' +
            '<p>按会后汇总的意向与可投入时间，确定各方向负责人与参与人。</p></li>' +
          '<li><h4>建立共享工作区</h4>' +
            '<p>资料、模板与进度统一放入团队仓库，统一存放与命名。</p></li>' +
          '<li><h4>下发统一模板</h4>' +
            '<p>按证据标准（结论 / 证据 / 来源质量 / 方法 / 反证 / 影响 / 下一步）做成模板。</p></li>' +
          '<li class="r"><h4>回原文核对"待复核"来源</h4>' +
            '<p>本轮检索中标注为待复核的条目，逐条回原文确认后再使用。</p></li>' +
          '<li class="r"><h4>汇总证据并比较方向</h4>' +
            '<p>各模块独立成稿后汇总共识、分歧、关键风险与待决问题，再讨论选题取舍。</p></li>' +
        '</ol>'
    },

    /* ── 结束页 ── */
    {
      id: 'p8-end',
      layout: 'solo',
      label: '结束',
      html:
        '<div class="stack lg" style="align-items:center">' +
          '<h1 class="display">谢谢</h1>' +
          '<div class="rule"></div>' +
          '<p class="slide-lead" style="text-align:center;max-width:46ch">' +
          '研究的价值不在于证明想法正确，<br>而在于在投入之前就知道它站不站得住。</p>' +
          '<div class="cover-meta">' +
          '<span>[6A14-02]</span><span>·</span><span>Acad.CC 2027 Kick-off</span>' +
          '</div>' +
        '</div>'
    }

  ]
});
