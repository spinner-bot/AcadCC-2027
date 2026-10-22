/* 第 4 部分 · 团队成员自我介绍
   本部分作为环节的背景页使用：不讲内容，只为成员发言时提供画面。
   已删去"自我介绍讲什么""八个席位""轮流发言"等指示性与铺陈性内容。 */
DECK.registerSection({
  id: 'p4',
  title: '团队成员自我介绍',
  slides: [

    {
      id: 'p4-head',
      label: '团队成员自我介绍',
      html:
        '<div class="section-head">' +
          '<div class="no">04</div>' +
          '<div class="txt">' +
            '<div class="kicker">Part 04</div>' +
            '<h2 class="slide-title">团队成员自我介绍</h2>' +
            '<p class="slide-lead">按座位顺序，每人 1–2 分钟。</p>' +
          '</div>' +
        '</div>'
    },

    {
      id: 'p4-collect',
      label: '会后汇总项',
      title: '会后汇总项',
      html:
        '<div class="grid c3 stagger">' +
          '<div class="numed"><span class="no">01</span><h4>个人简介</h4>' +
            '<p>专业、年级、技能关键词。</p></div>' +
          '<div class="numed g"><span class="no">02</span><h4>意向模块</h4>' +
            '<p>第一意向与第二意向。</p></div>' +
          '<div class="numed m"><span class="no">03</span><h4>可投入时间</h4>' +
            '<p>每周可投入小时数，以及已知的时间冲突。</p></div>' +
        '</div>' +
        '<div class="takeaway step"><span class="mk">用途</span>' +
        '<span class="tx">作为模块分工与排期的依据。</span></div>'
    }

  ]
});
