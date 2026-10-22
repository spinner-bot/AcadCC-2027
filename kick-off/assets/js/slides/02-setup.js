/* 第 2 部分 · 工程启动准备
   统一工具与仓库。删去一切"举手/做完示意"式动员，只留事实与操作步骤。 */
DECK.registerSection({
  id: 'p2',
  title: '工程启动准备',
  slides: [

    {
      id: 'p2-head',
      label: '工程启动准备',
      html:
        '<div class="section-head">' +
          '<div class="no">02</div>' +
          '<div class="txt">' +
            '<div class="kicker">Part 02</div>' +
            '<h2 class="slide-title">工程启动准备</h2>' +
            '<p class="slide-lead">统一工具与仓库。' +
            '后续所有材料、代码与文档都放在同一个仓库里。</p>' +
          '</div>' +
        '</div>'
    },

    {
      id: 'p2-why',
      label: '为什么用 Git 与 GitHub',
      title: '为什么用 Git 与 GitHub',
      html:
        '<div class="grid c3 stagger">' +
          '<div class="tile"><div class="ico">⎇</div><div>' +
            '<h4>版本管理</h4><p>每一次改动都留痕，可随时回退到任一历史版本。</p></div></div>' +
          '<div class="tile"><div class="ico v">⇄</div><div>' +
            '<h4>并行协作</h4><p>多人同时修改同一套材料不会互相覆盖，改动来源可追溯。</p></div></div>' +
          '<div class="tile"><div class="ico m">▤</div><div>' +
            '<h4>成果沉淀</h4><p>调研材料、代码、文档留在仓库，形成可交接、可复用的团队资产。</p></div></div>' +
        '</div>'
    },

    {
      id: 'p2-steps',
      label: '三步流程',
      title: '三步流程',
      lead: '顺序不能颠倒：先有工具，再有账号，最后才能进仓库。',
      html:
        '<div class="flow">' +
          '<div class="node step"><span class="n">STEP 01</span><h4>安装 Git</h4><p>本地工具，用于拉取与提交</p></div>' +
          '<span class="arrow step">→</span>' +
          '<div class="node step"><span class="n">STEP 02</span><h4>注册 GitHub</h4><p>在线账号，用于承载团队仓库</p></div>' +
          '<span class="arrow step">→</span>' +
          '<div class="node step"><span class="n">STEP 03</span><h4>加入仓库</h4><p>接受邀请，克隆到本地</p></div>' +
        '</div>'
    },

    {
      id: 'p2-git',
      label: '步骤 1 · 安装 Git',
      badge: 'STEP 01',
      title: '安装 Git',
      html:
        '<div class="split">' +
          '<ol class="timeline stagger">' +
            '<li><h4>下载安装包</h4><p>打开 git-scm.com，选择系统对应的版本下载。</p></li>' +
            '<li><h4>按默认选项安装</h4><p>一路默认即可；Windows 上确认勾选加入 PATH 的选项。</p></li>' +
            '<li><h4>验证</h4><p>打开终端（Windows 可用 Git Bash），输入右侧命令。</p></li>' +
          '</ol>' +
          '<div class="stack">' +
            '<div class="code-block"><span class="cm"># 能显示版本号即安装成功</span>\n' +
            '<span class="k">git</span> --version</div>' +
            '<div class="box m"><div class="label">判断标准</div>' +
            '<div class="body">出现类似 <span class="code-inline">git version 2.x.x</span> 的输出，即安装完成。</div></div>' +
          '</div>' +
        '</div>',
      notes: '常见问题：终端提示找不到 git 命令 —— 多为未重启终端，或安装时未加入 PATH。'
    },

    {
      id: 'p2-github',
      label: '步骤 2 · 注册 GitHub',
      badge: 'STEP 02',
      title: '注册 / 登录 GitHub',
      html:
        '<div class="grid c3 stagger">' +
          '<div class="numed"><span class="no">01</span><h4>注册账号</h4>' +
            '<p>访问 github.com，用常用邮箱注册。</p></div>' +
          '<div class="numed"><span class="no">02</span><h4>记录用户名</h4>' +
            '<p>用户名将用于被加入团队仓库，需准确记录。</p></div>' +
          '<div class="numed m"><span class="no">03</span><h4>两步验证</h4>' +
            '<p>建议开启（可选），并妥善保存恢复码。</p></div>' +
        '</div>' +
        '<div class="band m step"><strong>已有账号的，跳过注册，确认可正常登录即可。</strong></div>'
    },

    {
      id: 'p2-repo',
      label: '步骤 3 · 加入仓库',
      badge: 'STEP 03',
      title: '加入团队仓库',
      html:
        '<div class="split">' +
          '<ol class="timeline stagger">' +
            '<li class="r"><h4>提交用户名</h4><p>把 GitHub 用户名发给负责人，由负责人发出仓库邀请。</p></li>' +
            '<li class="r"><h4>接受邀请</h4><p>在 GitHub 通知或邮件中接受，也可直接打开仓库链接。</p></li>' +
            '<li class="r"><h4>克隆到本地</h4><p>在存放项目的文件夹中打开终端，执行右侧命令。</p></li>' +
          '</ol>' +
          '<div class="stack">' +
            '<div class="code-block"><span class="cm"># 把仓库复制到本地</span>\n' +
            '<span class="k">git</span> clone &lt;团队仓库地址&gt;</div>' +
            '<div class="box r"><div class="label">待补充</div>' +
            '<div class="body">团队仓库地址由负责人提供。' +
            '在此之前不要自行创建同名仓库，避免后续混淆。</div></div>' +
          '</div>' +
        '</div>'
    },

    {
      id: 'p2-concepts',
      label: 'Git 的四个核心概念',
      title: '先弄清四个概念',
      lead: '不要求会写复杂命令，但这四个词要能对上。',
      html:
        '<div class="grid c2 stagger">' +
          '<div class="numed"><span class="no">01</span><h4>仓库 Repository</h4>' +
            '<p>项目的<b>完整历史</b>——不只是当前的文件，还包括每一次改动。' +
            '仓库同时存在于 GitHub（远程）和你自己的电脑（本地）。</p></div>' +
          '<div class="numed"><span class="no">02</span><h4>提交 Commit</h4>' +
            '<p>一次<b>带说明的改动快照</b>，是历史的最小单位。' +
            '有了它，任何一次改动都能被回溯，也能被撤销。</p></div>' +
          '<div class="numed m"><span class="no">03</span><h4>分支 Branch</h4>' +
            '<p>从主线分出的<b>独立工作线</b>。多人同时改同一套材料时，' +
            '各自在分支上工作，不会互相覆盖。</p></div>' +
          '<div class="numed m"><span class="no">04</span><h4>远程 Remote</h4>' +
            '<p>托管在 GitHub 上的<b>共享副本</b>，是团队同步的枢纽。' +
            '把本地提交推送到远程，其他人才能看到。</p></div>' +
        '</div>' +
        '<div class="band step"><strong>本地改 → 提交 → 推送</strong>，' +
        '多人各自改同一份调研文档也不会打架。</div>'
    },

    {
      id: 'p2-commands',
      label: '日常命令速查',
      title: '日常会用到的命令',
      lead: '一共七条，覆盖九成日常操作。先记住前三条就够用。',
      html:
        '<table class="data step">' +
          '<thead><tr><th>命令</th><th>作用</th><th>什么时候用</th></tr></thead>' +
          '<tbody>' +
            '<tr><td class="k"><span class="code-inline">git clone &lt;地址&gt;</span></td><td>把远程仓库复制到本地</td><td>只需要做一次</td></tr>' +
            '<tr><td class="k"><span class="code-inline">git pull</span></td><td>拉取远程的最新改动</td><td>每次开始工作前</td></tr>' +
            '<tr><td class="k"><span class="code-inline">git status</span></td><td>查看当前有哪些改动</td><td>每次提交前</td></tr>' +
            '<tr><td class="k"><span class="code-inline">git add &lt;文件&gt;</span></td><td>把改动放入暂存区</td><td>准备提交时</td></tr>' +
            '<tr><td class="k"><span class="code-inline">git commit -m "说明"</span></td><td>把暂存区内容提交为一个版本</td><td>完成一小步后</td></tr>' +
            '<tr><td class="k"><span class="code-inline">git push</span></td><td>把本地提交推送到远程</td><td>提交之后</td></tr>' +
            '<tr><td class="k"><span class="code-inline">git log --oneline</span></td><td>查看提交历史</td><td>需要回溯时</td></tr>' +
          '</tbody>' +
        '</table>'
    },

    {
      id: 'p2-convention',
      label: '仓库目录与命名约定',
      title: '仓库怎么放文件',
      html:
        '<div class="grid c2" style="margin-bottom:2px">' +
          '<div class="stack sm stagger">' +
            '<div class="unit"><h4>建议的顶层目录</h4>' +
              '<p><span class="code-inline">docs/</span> 正式文档　' +
              '<span class="code-inline">research/</span> 调研材料<br>' +
              '<span class="code-inline">src/</span> 代码　' +
              '<span class="code-inline">meeting/</span> 会议纪要<br>' +
              '<span class="code-inline">assets/</span> 图表与素材</p></div>' +
            '<div class="unit m"><h4>调研材料按方向分目录</h4>' +
              '<p><span class="code-inline">research/A-市场与用户需求/</span><br>' +
              '<span class="code-inline">research/B-技术与学术/</span>　…… 与第 7 部分的六个方向一一对应</p></div>' +
          '</div>' +
          '<div class="stack sm stagger">' +
            '<div class="box m"><div class="label">文件命名</div>' +
              '<div class="body">日期前缀 + 主题，例如<br>' +
              '<span class="code-inline">2026-10-14-访谈提纲-财务负责人.md</span><br>' +
              '同一主题的多个版本靠提交历史区分，不靠文件名。</div></div>' +
            '<div class="box r"><div class="label">不要这样命名</div>' +
              '<div class="body">最终版、最新版、副本、终版2、v3改 —— ' +
              '这类命名会让"哪份是真的"永远说不清。</div></div>' +
          '</div>' +
        '</div>'
    },

    {
      id: 'p2-commit',
      label: '提交信息怎么写',
      title: '提交信息怎么写',
      lead: '一句话，让三个月后的自己也能看懂当时改了什么、为什么改。',
      html:
        '<div class="grid c2 stagger">' +
          '<div class="finding"><h4>格式</h4>' +
            '<p style="line-height:2"><span class="code-inline">类型 范围：说明</span><br>' +
            '类型：<b>docs</b> 文档 / <b>research</b> 调研 / <b>feat</b> 新功能 / ' +
            '<b>fix</b> 修正 / <b>chore</b> 杂项</p>' +
            '<p style="margin-top:10px;line-height:2">示例：<br>' +
            '<span class="code-inline">research 市场：补充三家竞品的定价与部署方式</span><br>' +
            '<span class="code-inline">docs 政策：核对电子凭证标准文号并更新来源链接</span></p></div>' +
          '<div class="finding g"><h4>三条原则</h4>' +
            '<p style="line-height:2">' +
            '· <b>一次提交只做一件事</b>——便于回溯与撤销<br>' +
            '· 说明写"<b>为什么改</b>"，而不只是"改了什么"<br>' +
            '· 拿不准就写清楚<b>信息来源</b>（谁说的、哪个页面）</p></div>' +
        '</div>'
    },

    {
      id: 'p2-checklist',
      label: '完成状态核对',
      title: '完成状态核对',
      html:
        '<ul class="checklist">' +
          '<li class="step"><span class="box-mark"></span><span>已安装 Git，终端执行 <span class="code">git --version</span> 能看到版本号</span></li>' +
          '<li class="step"><span class="box-mark"></span><span>已拥有 GitHub 账号，并能正常登录</span></li>' +
          '<li class="step"><span class="box-mark"></span><span>已把 GitHub 用户名提交给负责人</span></li>' +
          '<li class="step"><span class="box-mark"></span><span>已接受仓库邀请，能看到团队仓库页面</span></li>' +
          '<li class="step"><span class="box-mark"></span><span>已成功 <span class="code">git clone</span> 到本地，并能在文件夹中看到仓库内容</span></li>' +
        '</ul>',
      notes: '停留页。五项全部就绪后进入下一部分。'
    },

    {
      id: 'p2-trouble',
      label: '常见问题排查',
      title: '常见问题排查',
      lead: '按下面几条自查；仍未解决时当场提出，一起排查。',
      html:
        '<div class="grid c2 stagger">' +
          '<div class="tile"><div class="ico r">!</div><div>' +
            '<h4>提示“命令未找到”</h4><p>先重开终端；仍不行，多为安装时未加入 PATH，重装并勾选该项。</p></div></div>' +
          '<div class="tile"><div class="ico r">!</div><div>' +
            '<h4>连不上 GitHub</h4><p>确认网络环境，更换网络再试；校园网偶发不稳定时可稍后重试。</p></div></div>' +
          '<div class="tile"><div class="ico r">!</div><div>' +
            '<h4>收不到邀请</h4><p>核对提交的用户名拼写是否正确——这是最常见的原因。</p></div></div>' +
          '<div class="tile"><div class="ico r">!</div><div>' +
            '<h4>以上均不适用</h4><p>当场提出。十分钟能解决的事，不要拖成半小时。</p></div></div>' +
        '</div>'
    }

  ]
});
