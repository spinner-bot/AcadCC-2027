/* ============================================================
   Acad.CC 2027 · Kick-off —— 轻量演示引擎（无外部依赖）
   功能：步进翻页 / 逐步显现 / 章节导航 / 总览 / 备注 / 进度 / URL 定位
   ============================================================ */
(function () {
  'use strict';

  var DECK = { sections: [], slides: [], i: 0 };
  window.DECK = DECK;

  /* 查看/导出模式：URL 加 ?reveal=all，所有"逐步显现"内容一次性显示。
     便于总览、截图与打印，不影响正常放映。 */
  var REVEAL_ALL = /(\?|&)reveal=all(&|$)/.test(location.search);

  /* ---------- 注册接口：各 slides/*.js 调用 ---------- */
  DECK.registerSection = function (sec) {
    if (!sec || !Array.isArray(sec.slides) || !sec.slides.length) return;
    DECK.sections.push(sec);
  };

  /* ---------- DOM 辅助 ---------- */
  function h(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }

  /* ---------- 构建 ---------- */
  var deckEl, chList, ovGrid, notesBody, hudPart, pageInd, barEl;
  var cur = null;        // 当前 slide 对象
  var stepEls = [];      // 当前页可逐步显现的元素
  var shown = 0;         // 已显现数量

  function build() {
    deckEl = document.getElementById('deck');
    chList = document.getElementById('chapters-list');
    ovGrid = document.getElementById('overview-grid');
    notesBody = document.getElementById('notes-body');
    hudPart = document.getElementById('hud-part');
    pageInd = document.getElementById('page-indicator');
    barEl = document.getElementById('progress-bar');

    var total = 0, partNo = 0;

    DECK.sections.forEach(function (sec) {
      partNo++;
      sec._no = partNo;

      var startN = total;

      sec.slides.forEach(function (s) {
        s._part = partNo;
        s._partTitle = sec.title;
        s._idx = total++;
        DECK.slides.push(s);
      });

      var endN = total;

      /* 章节导航项 */
      var li = h('li');
      li.innerHTML = '<span class="cnum">' + pad(partNo) + '</span>' +
        '<span class="cname">' + esc(sec.title) + '</span>' +
        '<span class="crange">' + (startN + 1) + '–' + endN + '</span>';
      li.addEventListener('click', function () { go(startN); closePanels(); });
      chList.appendChild(li);
      sec._navEl = li;
    });

    /* 渲染每页 */
    DECK.slides.forEach(function (s) {
      var node = h('section', 'slide');
      node.id = s.id || ('slide-' + s._idx);
      node.dataset.idx = s._idx;
      if (s.layout) node.classList.add(s.layout);

      var inner = h('div', 'slide-inner');
      if (s.badge) {
        inner.appendChild(h('div', 'chip-row',
          '<span class="chip ' + (s.badgeTone || '') + '">' + esc(s.badge) + '</span>'));
      }
      if (s.kicker) inner.appendChild(h('div', 'kicker', esc(s.kicker)));
      if (s.title) inner.appendChild(h('h2', 'slide-title', s.title));
      if (s.lead) inner.appendChild(h('p', 'slide-lead', s.lead));
      if (s.html != null) {
        var body = h('div', 'slide-body');
        body.innerHTML = s.html;
        inner.appendChild(body);
      }
      node.appendChild(inner);
      deckEl.appendChild(node);
      s._el = node;
    });

    buildOverview();
    bindKeys();
    bindButtons();
    routeFromHash(true);
    showHintOnce();
  }

  /* ---------- 总览 ---------- */
  function buildOverview() {
    var lastPart = null;
    DECK.slides.forEach(function (s) {
      if (s._part !== lastPart) {
        ovGrid.appendChild(h('div', 'ov-group',
          pad(s._part) + ' · ' + esc(s._partTitle)));
        lastPart = s._part;
      }
      var c = h('div', 'ov-card');
      c.innerHTML = '<span class="ov-num">' + (s._idx + 1) + '</span>' +
        '<span class="ov-title">' + esc(stripTags(s.label || s.title || s.kicker || '(无标题)')) + '</span>';
      c.addEventListener('click', function () { go(s._idx); closePanels(); });
      ovGrid.appendChild(c);
      s._ovEl = c;
    });
  }

  /* ---------- 导航核心 ---------- */
  function enter(idx, revealAll) {
    idx = Math.max(0, Math.min(DECK.slides.length - 1, idx));
    var s = DECK.slides[idx];

    if (cur && cur._el) {
      cur._el.classList.remove('is-active');
      cur._el.classList.add('was-active');
      (function (old) { setTimeout(function () { old.classList.remove('was-active'); }, 520); })(cur._el);
      resetDynamic(cur);
    }

    cur = s;
    DECK.i = idx;
    s._el.classList.remove('was-active');
    s._el.classList.add('is-active');

    stepEls = Array.prototype.slice.call(s._el.querySelectorAll('.step, .stagger'));
    shown = 0;

    if (revealAll) {
      stepEls.forEach(function (n) { n.classList.add('on'); });
      shown = stepEls.length;
      onReveal(s._el);   /* 让 step 内的计数器 / 比例条也跑起来 */
    } else {
      stepEls.forEach(function (n) { n.classList.remove('on'); });
    }

    playDynamic(s);
    syncChrome();
    setHash(idx);
  }

  function next() {
    if (shown < stepEls.length) {
      stepEls[shown].classList.add('on');
      onReveal(stepEls[shown]);
      shown++;
      syncChrome();
      return;
    }
    if (DECK.i < DECK.slides.length - 1) enter(DECK.i + 1, false);
  }

  function prev() {
    if (shown > 0) {
      shown--;
      stepEls[shown].classList.remove('on');
      syncChrome();
      return;
    }
    if (DECK.i > 0) enter(DECK.i - 1, true);
  }

  function go(idx) { enter(idx, true); }

  /* ---------- 当前页动态元素 ---------- */
  /* 位于 .step / .stagger 内部、尚未显现的元素，交给 onReveal 处理，
     避免"还没出场就先动了一遍"。 */
  function inStep(node) {
    return !!(node.closest && node.closest('.step, .stagger'));
  }

  function playDynamic(s) {
    /* 比例条 */
    Array.prototype.forEach.call(s._el.querySelectorAll('.bar-fill[data-val]'), function (b) {
      b.style.width = '0%';
      if (inStep(b)) return;
      requestAnimationFrame(function () {
        setTimeout(function () { b.style.width = b.dataset.val + '%'; }, 120);
      });
    });
    /* 数值滚动 */
    Array.prototype.forEach.call(s._el.querySelectorAll('[data-count]'), function (n) {
      if (inStep(n)) { n.textContent = '0' + (n.dataset.suffix || ''); return; }
      countTo(n, parseFloat(n.dataset.count), n.dataset.suffix || '');
    });
  }

  function resetDynamic(s) {
    Array.prototype.forEach.call(s._el.querySelectorAll('.bar-fill[data-val]'), function (b) {
      b.style.width = '0%';
    });
  }

  function onReveal(node) {
    Array.prototype.forEach.call(node.querySelectorAll('.bar-fill[data-val]'), function (b) {
      b.style.width = b.dataset.val + '%';
    });
    Array.prototype.forEach.call(node.querySelectorAll('[data-count]'), function (n) {
      countTo(n, parseFloat(n.dataset.count), n.dataset.suffix || '');
    });
  }

  function countTo(node, target, suffix) {
    if (node._raf) cancelAnimationFrame(node._raf);
    var dur = 700, t0 = null, isFloat = (target % 1 !== 0);
    node.textContent = '0' + suffix;
    function tick(ts) {
      if (t0 === null) t0 = ts;
      var p = Math.min(1, (ts - t0) / dur);
      var e = 1 - Math.pow(1 - p, 3);
      var v = target * e;
      node.textContent = (isFloat ? v.toFixed(1) : Math.round(v)) + suffix;
      if (p < 1) node._raf = requestAnimationFrame(tick);
      else node.textContent = (isFloat ? target.toFixed(1) : target) + suffix;
    }
    node._raf = requestAnimationFrame(tick);
  }

  /* ---------- 界面同步 ---------- */
  function syncChrome() {
    var n = DECK.i + 1, t = DECK.slides.length;
    if (hudPart) hudPart.textContent = pad(cur._part) + ' · ' + cur._partTitle;
    var extra = stepEls.length ? ' · ' + Math.min(shown + 1, stepEls.length) + '/' + stepEls.length : '';
    if (pageInd) pageInd.textContent = n + ' / ' + t + extra;
    if (barEl) barEl.style.width = ((n - 1 + (stepEls.length ? shown / stepEls.length : 0)) / t * 100).toFixed(2) + '%';

    DECK.sections.forEach(function (sec) {
      if (sec._navEl) sec._navEl.classList.toggle('here', sec._no === cur._part);
    });
    DECK.slides.forEach(function (s) {
      if (s._ovEl) s._ovEl.classList.toggle('here', s === cur);
    });
    if (notesBody) notesBody.textContent = cur.notes || '';

    var bp = document.getElementById('btn-prev'), bn = document.getElementById('btn-next');
    if (bp) bp.disabled = (DECK.i === 0 && shown === 0);
    if (bn) bn.disabled = (DECK.i === DECK.slides.length - 1 && shown >= stepEls.length);

    var ov = document.getElementById('overview');
    if (ov && ov.classList.contains('open') && cur._ovEl) {
      cur._ovEl.scrollIntoView({ block: 'nearest' });
    }
  }

  /* ---------- 面板 ---------- */
  function togglePanel(id, force) {
    var p = document.getElementById(id);
    if (!p) return;
    var open = (typeof force === 'boolean') ? force : !p.classList.contains('open');
    ['chapters', 'overview', 'notes'].forEach(function (x) {
      if (x !== id) document.getElementById(x).classList.remove('open');
    });
    p.classList.toggle('open', open);
    p.setAttribute('aria-hidden', String(!open));
    if (open && p.querySelector('.panel-head')) {
      /* 打开总览时把当前页滚动到可见 */
      if (id === 'overview' && cur._ovEl) {
        setTimeout(function () { cur._ovEl.scrollIntoView({ block: 'center' }); }, 60);
      }
    }
  }
  function closePanels() {
    ['chapters', 'overview', 'notes'].forEach(function (x) {
      var el = document.getElementById(x);
      el.classList.remove('open'); el.setAttribute('aria-hidden', 'true');
    });
  }
  function anyPanelOpen() {
    return ['chapters', 'overview', 'notes'].some(function (x) {
      return document.getElementById(x).classList.contains('open');
    });
  }

  /* ---------- 键盘 ---------- */
  function bindKeys() {
    document.addEventListener('keydown', function (e) {
      var tag = (e.target.tagName || '').toLowerCase();
      if (tag === 'input' || tag === 'textarea') return;
      /* 焦点在按钮上时，Enter / 空格交给按钮自身，避免"点一次走两页" */
      if (tag === 'button' && (e.key === 'Enter' || e.key === ' ')) return;

      switch (e.key) {
        case 'ArrowRight': case 'PageDown': case ' ': case 'Enter': case 'l': case 'j':
          e.preventDefault(); closePanels(); next(); break;
        case 'ArrowLeft': case 'PageUp': case 'h': case 'k':
          e.preventDefault(); closePanels(); prev(); break;
        case 'Home': e.preventDefault(); go(0); break;
        case 'End': e.preventDefault(); go(DECK.slides.length - 1); break;
        case 'c': case 'C': e.preventDefault(); togglePanel('chapters'); break;
        case 'o': case 'O': e.preventDefault(); togglePanel('overview'); break;
        case 'n': case 'N': e.preventDefault(); togglePanel('notes'); break;
        case 'f': case 'F': e.preventDefault(); toggleFullscreen(); break;
        case 'g': case 'G': e.preventDefault(); gotoPrompt(); break;
        case 'Escape':
          if (anyPanelOpen()) {
            e.preventDefault();
            if (document.getElementById('overview').classList.contains('open')) togglePanel('overview', false);
            else closePanels();
          } else if (document.fullscreenElement) {
            document.exitFullscreen();
          }
          break;
      }
    });
  }

  function bindButtons() {
    on('btn-next', next);
    on('btn-prev', prev);
    on('btn-chapters', function () { togglePanel('chapters'); });
    on('btn-overview', function () { togglePanel('overview'); });
    on('btn-notes', function () { togglePanel('notes'); });
    on('btn-full', toggleFullscreen);
    function on(id, fn) { var b = document.getElementById(id); if (b) b.addEventListener('click', fn); }
  }

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      (document.documentElement.requestFullscreen || function () {}).call(document.documentElement);
    } else {
      document.exitFullscreen();
    }
  }

  function gotoPrompt() {
    var v = window.prompt('跳到第几页？(1–' + DECK.slides.length + ')');
    if (!v) return;
    var n = parseInt(v, 10);
    if (!isNaN(n)) go(n - 1);
  }

  /* ---------- URL 定位 ---------- */
  var suppressHash = false;
  function setHash(i) {
    suppressHash = true;
    var target = '#/' + (i + 1);
    if (location.hash !== target) location.hash = target;
    setTimeout(function () { suppressHash = false; }, 0);
  }
  function routeFromHash(init) {
    var m = /^#\/(\d+)/.exec(location.hash || '');
    var idx = m ? parseInt(m[1], 10) - 1 : 0;
    if (idx < 0 || idx >= DECK.slides.length) idx = 0;
    enter(idx, REVEAL_ALL ? true : !init);
  }
  window.addEventListener('hashchange', function () {
    if (suppressHash) return;
    routeFromHash(false);
  });

  /* ---------- 首次提示 ---------- */
  function showHintOnce() {
    var t = document.getElementById('hint-toast');
    if (!t) return;
    t.textContent = '← → 翻页　·　C 章节　·　O 总览　·　N 备注　·　F 全屏';
    t.classList.add('show');
    t.setAttribute('aria-hidden', 'false');
    setTimeout(function () { t.classList.remove('show'); t.setAttribute('aria-hidden', 'true'); }, 4200);
  }

  /* ---------- 工具 ---------- */
  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]; }); }
  function stripTags(s) { return String(s).replace(/<[^>]*>/g, ''); }

  /* ---------- 启动 ---------- */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', build);
  } else {
    build();
  }
})();
