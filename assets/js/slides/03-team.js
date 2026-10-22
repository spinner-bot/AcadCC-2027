/* 第 3 部分 · 团队成员专业比例
   一页只讲一件事：构成 → 明细 → 两侧对比 → 互补 → 缺口 → 要避免的偏差
   版式：章节头 / 环形图 / 表格 / 对照+指标 / 对照 / 时间轴 / 双卡 */
DECK.registerSection({
  id: 'p3',
  title: '团队成员专业比例',
  slides: [

    {
      id: 'p3-head',
      label: '团队构成',
      html:
        '<div class="section-head">' +
          '<div class="no">03</div>' +
          '<div class="txt">' +
            '<div class="kicker">Part 03</div>' +
            '<h2 class="slide-title">团队构成与能力结构</h2>' +
            '<p class="slide-lead">先看清我们手里有什么牌，再决定怎么出牌。</p>' +
          '</div>' +
        '</div>'
    },

    /* ── 环形图 ── */
    {
      id: 'p3-donut',
      label: '专业构成（环形图）',
      title: '8 人，5 个专业',
      lead: '按人数占比：技术类占多数，财务与管理类构成另一半。',
      html:
        '<div class="donut-wrap step zoom">' +
          '<div class="donut">' +
            '<svg width="248" height="248" viewBox="0 0 220 220" role="img" aria-label="团队专业构成环形图">' +
              '<circle cx="110" cy="110" r="88" fill="none" stroke="rgba(255,255,255,.05)" stroke-width="26"/>' +
              '<circle class="seg" cx="110" cy="110" r="88" fill="none" stroke="#38bdf8" stroke-width="26" stroke-dasharray="204.35 348.57" transform="rotate(-90 110 110)"/>' +
              '<circle class="seg" cx="110" cy="110" r="88" fill="none" stroke="#a78bfa" stroke-width="26" stroke-dasharray="66.12 486.80" transform="rotate(45 110 110)"/>' +
              '<circle class="seg" cx="110" cy="110" r="88" fill="none" stroke="#22d3a0" stroke-width="26" stroke-dasharray="66.12 486.80" transform="rotate(90 110 110)"/>' +
              '<circle class="seg" cx="110" cy="110" r="88" fill="none" stroke="#fbbf24" stroke-width="26" stroke-dasharray="66.12 486.80" transform="rotate(135 110 110)"/>' +
              '<circle class="seg" cx="110" cy="110" r="88" fill="none" stroke="#fb7185" stroke-width="26" stroke-dasharray="135.23 417.69" transform="rotate(180 110 110)"/>' +
            '</svg>' +
            '<div class="center"><span class="big" data-count="8">0</span><span class="sub">团队总人数</span></div>' +
          '</div>' +
          '<ul class="legend stagger">' +
            '<li><span class="dot" style="background:#38bdf8;color:#38bdf8"></span><span class="name">智能科学与技术</span><span class="val">3 人 · 37.5%</span></li>' +
            '<li><span class="dot" style="background:#a78bfa;color:#a78bfa"></span><span class="name">软件工程</span><span class="val">1 人 · 12.5%</span></li>' +
            '<li><span class="dot" style="background:#22d3a0;color:#22d3a0"></span><span class="name">自动化</span><span class="val">1 人 · 12.5%</span></li>' +
            '<li><span class="dot" style="background:#fbbf24;color:#fbbf24"></span><span class="name">会计学</span><span class="val">1 人 · 12.5%</span></li>' +
            '<li><span class="dot" style="background:#fb7185;color:#fb7185"></span><span class="name">财务管理</span><span class="val">2 人 · 25%</span></li>' +
          '</ul>' +
        '</div>',
      notes: '数字来自已确认的团队构成，不要改动比例。'
    },

    /* ── 明细表 ── */
    {
      id: 'p3-table',
      label: '构成明细表',
      title: '构成明细',
      html:
        '<table class="data step rise">' +
          '<thead><tr><th>专业</th><th>人数</th><th>占比</th><th>归属侧</th></tr></thead>' +
          '<tbody>' +
            '<tr><td class="k">智能科学与技术</td><td>3</td><td>37.5%</td><td>技术侧</td></tr>' +
            '<tr><td class="k">软件工程</td><td>1</td><td>12.5%</td><td>技术侧</td></tr>' +
            '<tr><td class="k">自动化</td><td>1</td><td>12.5%</td><td>技术侧</td></tr>' +
            '<tr><td class="k">会计学</td><td>1</td><td>12.5%</td><td>商科侧</td></tr>' +
            '<tr><td class="k">财务管理</td><td>2</td><td>25.0%</td><td>商科侧</td></tr>' +
            '<tr><td class="k" style="border-top:1px solid rgba(56,189,248,.3)">合计</td>' +
              '<td class="k" style="border-top:1px solid rgba(56,189,248,.3)">8</td>' +
              '<td class="k" style="border-top:1px solid rgba(56,189,248,.3)">100%</td>' +
              '<td style="border-top:1px solid rgba(56,189,248,.3)">—</td></tr>' +
          '</tbody>' +
        '</table>'
    },

    /* ── 两侧对比 ── */
    {
      id: 'p3-sides',
      label: '商科侧 vs 技术侧',
      title: '商科侧 与 技术侧',
      html:
        '<div class="stack lg">' +
          '<div class="metrics step">' +
            '<div class="metric b"><span class="v" data-count="5">0</span><span class="l">技术侧 · 人</span></div>' +
            '<div class="metric g"><span class="v" data-count="3">0</span><span class="l">商科侧 · 人</span></div>' +
          '</div>' +
          '<div class="compare step">' +
            '<div class="side a">' +
              '<h4>技术侧（5 人）</h4>' +
              '<ul class="bullets">' +
                '<li>智能科学与技术 · 3 人</li>' +
                '<li>软件工程 · 1 人</li>' +
                '<li>自动化 · 1 人</li>' +
              '</ul>' +
            '</div>' +
            '<div class="vs">:</div>' +
            '<div class="side b">' +
              '<h4>商科侧（3 人）</h4>' +
              '<ul class="bullets g">' +
                '<li>会计学 · 1 人</li>' +
                '<li>财务管理 · 2 人</li>' +
              '</ul>' +
            '</div>' +
          '</div>' +
        '</div>'
    },

    /* ── 能力互补 ── */
    {
      id: 'p3-complement',
      label: '能力互补',
      title: '能力互补：两边各自擅长什么',
      html:
        '<div class="compare step">' +
          '<div class="side a">' +
            '<h4>技术侧的优势</h4>' +
            '<ul class="bullets">' +
              '<li>算法与人工智能</li>' +
              '<li>软件工程与系统实现</li>' +
              '<li>数据处理与工程化落地</li>' +
            '</ul>' +
          '</div>' +
          '<div class="vs">+</div>' +
          '<div class="side b">' +
            '<h4>商科侧的优势</h4>' +
            '<ul class="bullets g">' +
              '<li>财务与会计语言</li>' +
              '<li>成本、管理与商业判断</li>' +
              '<li>制度与合规的基本语感</li>' +
            '</ul>' +
          '</div>' +
        '</div>' +
        '<div class="takeaway step"><span class="mk">结论</span>' +
        '<span class="tx">技术能力与财务视角在团队内部是互补的——' +
        '但“互补”不等于“已经够用”，中间的缺口还得靠研究去补。</span></div>'
    },

    /* ── 缺口 ── */
    {
      id: 'p3-gap',
      label: '需要主动补足的认知',
      title: '我们目前还缺什么',
      lead: '团队有技术底子，但不能默认已经具备成熟的行业领域知识。',
      html:
        '<ol class="timeline stagger">' +
          '<li><h4>真实业务流程</h4><p>一件事从发生到入账、归档，中间到底经过谁、看哪张单。</p></li>' +
          '<li><h4>真实用户需求</h4><p>谁真的为此头疼，疼到什么程度，愿意为此付出什么。</p></li>' +
          '<li><h4>行业规范与制度</h4><p>有哪些法规、财务制度和数据标准在约束这类工作。</p></li>' +
          '<li><h4>数据来源与合规</h4><p>能不能拿到合法、合规、可用的数据——这是条硬门槛。</p></li>' +
          '<li><h4>实际使用环境</h4><p>结果最终交给谁看、他凭什么信、怎么接进现有流程。</p></li>' +
        '</ol>'
    },

    /* ── 能力覆盖矩阵 ── */
    {
      id: 'p3-matrix',
      label: '能力覆盖矩阵',
      title: '各环节需要什么能力，我们覆盖到哪',
      lead: '按专业构成做的初步判断，不是对个人的评价。',
      html:
        '<table class="data step">' +
          '<thead><tr><th>环节</th><th>所需能力</th><th>团队覆盖</th></tr></thead>' +
          '<tbody>' +
            '<tr><td class="k">需求与市场调研</td><td>访谈、问卷、行业理解</td><td>商科侧有基础，<b>行业流程知识待补</b></td></tr>' +
            '<tr><td class="k">业务流程与政策</td><td>财务会计制度、法规检索</td><td>商科侧可承担，<b>数据标准待熟悉</b></td></tr>' +
            '<tr><td class="k">文档解析与字段抽取</td><td>视觉 / 语言模型、工程实现</td><td>技术侧较强，且有开源可复用</td></tr>' +
            '<tr><td class="k">匹配与核验逻辑</td><td>规则建模、数据建模</td><td>技术侧可覆盖，<b>需业务规则输入</b></td></tr>' +
            '<tr><td class="k">实验与评测</td><td>机器学习、统计与实验设计</td><td>技术侧较强，<b>受数据可得性制约</b></td></tr>' +
            '<tr><td class="k">产品化与交付</td><td>前后端实现、部署运维</td><td style="color:var(--rose)">需要补充——目前无明确的产品与设计角色</td></tr>' +
            '<tr><td class="k">商业与落地路径</td><td>商业模式、成本测算</td><td>商科侧可覆盖，待方向确定后展开</td></tr>' +
          '</tbody>' +
        '</table>' +
        '<div class="src step"><b>说明</b> 覆盖程度按专业构成推断，属<b>初步判断</b>，需在首次分工后按实际情况修正。</div>'
    },

    /* ── 角色与分工原则 ── */
    {
      id: 'p3-roles',
      label: '角色与分工原则',
      title: '角色怎么分',
      html:
        '<div class="grid c2 stagger">' +
          '<div class="tile"><div class="ico">◎</div><div><h4>每个方向设负责人 1 名</h4>' +
            '<p>另配参与人 1–2 名，负责该方向的检索、核对与成稿。</p></div></div>' +
          '<div class="tile"><div class="ico v">⇄</div><div><h4>方向内跨专业组合</h4>' +
            '<p>每个方向尽量至少含 1 名技术侧与 1 名商科侧，避免单一视角得出偏颇结论。</p></div></div>' +
          '<div class="tile"><div class="ico m">▤</div><div><h4>两个横向角色</h4>' +
            '<p><b>工具与仓库维护</b>：负责仓库结构、模板与权限；' +
            '<b>来源核对</b>：抽查各方向的引用是否真的可追溯到原始材料。</p></div></div>' +
          '<div class="tile"><div class="ico g">↻</div><div><h4>负责人可轮换</h4>' +
            '<p>研究进展到新阶段时，可按方向重新分配，不设固定层级。</p></div></div>' +
        '</div>' +
        '<div class="takeaway step"><span class="mk">原则</span>' +
        '<span class="tx">分工不是凭印象分，而是凭<b>意向与可投入时间</b>；' +
        '每个方向都要有人能说清"这条结论的证据从哪来"。</span></div>'
    },

    /* ── 两个极端 ── */
    {
      id: 'p3-two-extremes',
      label: '要避免的两个极端',
      title: '做材料时要避免的两个极端',
      html:
        '<div class="grid c2 stagger">' +
          '<div class="box r"><div class="label">不要低估</div>' +
            '<div class="body">不要把项目的设想，写成“做一个简单信息系统”。' +
            '团队具备的是真正的算法与工程能力，这一点应当被如实呈现。</div></div>' +
          '<div class="box g"><div class="label">不要夸大</div>' +
            '<div class="body">不要把尚未验证的业务理解，当作已经掌握的事实。' +
            '行业经验需要通过调研获得，而不是靠推测补上。</div></div>' +
        '</div>' +
        '<div class="band step"><strong>一句话：技术能力不谦虚，行业认知不吹牛。</strong></div>'
    }

  ]
});
