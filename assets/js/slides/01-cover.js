/* 第 1 部分 · 会议封面与欢迎
   版式：封面（居中大字） / 海报式（左主张 + 右侧栏） / 左右对照
   原则：陈述事实与范围，不做面向听众的动员。 */
DECK.registerSection({
  id: 'p1',
  title: '会议封面与欢迎',
  slides: [

    /* ── 封面 ── */
    {
      id: 'p1-cover',
      layout: 'solo',
      label: '会议封面',
      html:
        '<div class="stack lg" style="align-items:center">' +
          '<div class="chip-row"><span class="chip">启动会 · Kick-off</span></div>' +
          '<h1 class="display">Acad.CC 2027<br>Kick-off</h1>' +
          '<div class="rule"></div>' +
          '<p class="slide-lead" style="text-align:center;max-width:44ch">' +
          '项目启动 · 研究组织 · 团队协作</p>' +
          '<div class="cover-meta">' +
          '<span>[6A14-02]</span><span>·</span><span>河海大学</span><span>·</span><span>团队 8 人</span>' +
          '</div>' +
        '</div>',
      notes: '会议全称是 [6A14-02] Acad.CC 2027 Kick-off —— 这是会议名称，不是项目名。'
    },

    /* ── 欢迎 ── */
    {
      id: 'p1-welcome',
      label: '团队与交付倾向',
      html:
        '<div class="poster">' +
          '<div class="stack lg">' +
            '<div class="kicker">欢迎</div>' +
            '<h2 class="statement">欢迎加入<br><span class="hl">Acad.CC 2027</span> 团队</h2>' +
          '</div>' +
          '<aside class="aside">' +
            '<div class="tile"><div class="ico">◎</div><div>' +
              '<h4>团队 8 人</h4><p>技术侧 5 人、商科侧 3 人</p></div></div>' +
            '<div class="tile"><div class="ico v">◇</div><div>' +
              '<h4>会议性质</h4><p>启动会，不是立项定案会</p></div></div>' +
            '<div class="tile"><div class="ico m">▣</div><div>' +
              '<h4>交付倾向</h4><p>做出有实际用途的产品或原型，而不是只交一份报告</p></div></div>' +
          '</aside>' +
        '</div>'
    },

    /* ── 会议范围 ── */
    {
      id: 'p1-not-decision',
      label: '本次会议的范围',
      title: '本次会议的范围',
      html:
        '<div class="compare">' +
          '<div class="side a step left">' +
            '<h4>本次会议覆盖</h4>' +
            '<ul class="bullets">' +
              '<li>项目当前所处阶段</li>' +
              '<li>前期研究要回答的问题</li>' +
              '<li>研究方式与证据标准</li>' +
              '<li>分工与协作流程</li>' +
            '</ul>' +
          '</div>' +
          '<div class="vs">/</div>' +
          '<div class="side b step right">' +
            '<h4>本次会议不涉及</h4>' +
            '<ul class="bullets g">' +
              '<li>最终选题方向的锁定</li>' +
              '<li>正式项目名或产品名的确定</li>' +
              '<li>最终技术方案的预设</li>' +
              '<li>尚未验证的需求与市场判断</li>' +
            '</ul>' +
          '</div>' +
        '</div>',
      notes: '右侧四条是本次会议不产生的结论。后续若有人想跳过研究直接定题，回到这一页。'
    }

  ]
});
