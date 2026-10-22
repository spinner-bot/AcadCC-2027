/* 背景氛围层：缓慢漂移的粒子环。
   设计约束：极淡、极慢 —— 只作底纹，不与内容争注意力。
   尊重 prefers-reduced-motion；标签页隐藏时暂停。 */
(function () {
  'use strict';

  var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  if (reduced) { canvas.style.display = 'none'; return; }

  var ctx = canvas.getContext('2d');
  var W = 0, H = 0, DPR = 1;

  function resize() {
    DPR = Math.min(window.devicePixelRatio || 1, 2);
    W = canvas.width = Math.floor(window.innerWidth * DPR);
    H = canvas.height = Math.floor(window.innerHeight * DPR);
    canvas.style.width = window.innerWidth + 'px';
    canvas.style.height = window.innerHeight + 'px';
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    W = window.innerWidth;
    H = window.innerHeight;
    ctx.clearRect(0, 0, W, H);
  }
  window.addEventListener('resize', resize);

  // 三组粒子环：围绕不同中心缓慢反向漂移
  var RINGS = [
    { cx: 0.34, cy: 0.42, n: 34, rBase: 0.20, rSway: 0.045, spin: 0.055, squash: 0.62, size: 1.35, color: [56, 189, 248], a0: 0.16 },
    { cx: 0.68, cy: 0.56, n: 28, rBase: 0.17, rSway: 0.038, spin: -0.042, squash: 0.58, size: 1.15, color: [251, 113, 133], a0: 0.13 },
    { cx: 0.50, cy: 0.50, n: 16, rBase: 0.30, rSway: 0.030, spin: 0.024, squash: 0.55, size: 0.95, color: [251, 191, 36], a0: 0.085 }
  ];

  function draw(t) {
    // 半透明覆盖形成轻微拖尾，使运动柔和
    ctx.fillStyle = 'rgba(2,0,16,0.16)';
    ctx.fillRect(0, 0, W, H);

    for (var r = 0; r < RINGS.length; r++) {
      var ring = RINGS[r];
      for (var i = 0; i < ring.n; i++) {
        var ph = i / ring.n;
        var ang = ph * Math.PI * 2 + t * ring.spin;
        var rad = W * ring.rBase + Math.sin(t * 0.9 + i * 0.7) * W * ring.rSway;
        var px = ring.cx * W + Math.cos(ang) * rad;
        var py = ring.cy * H + Math.sin(ang) * rad * ring.squash;
        var tw = 0.5 + 0.5 * Math.sin(t * 1.4 + i * 1.1);       // 缓慢明灭
        var a = ring.a0 * (0.55 + 0.45 * tw);
        var s = ring.size * (0.8 + 0.4 * tw);
        var c = ring.color;
        ctx.beginPath();
        ctx.arc(px, py, s, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(' + c[0] + ',' + c[1] + ',' + c[2] + ',' + a.toFixed(3) + ')';
        ctx.fill();
      }
    }
  }

  var start = null, raf = null, running = false;

  function loop(ts) {
    if (start === null) start = ts;
    draw((ts - start) / 1000 * 0.5);   // 整体速度系数：慢
    raf = requestAnimationFrame(loop);
  }

  function play() { if (!running) { running = true; raf = requestAnimationFrame(loop); } }
  function pause() { running = false; if (raf) cancelAnimationFrame(raf); raf = null; start = null; }

  document.addEventListener('visibilitychange', function () {
    document.hidden ? pause() : play();
  });

  resize();
  play();
})();
