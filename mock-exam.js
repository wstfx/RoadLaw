const mockExamConfig = {
  version: '2026.07',
  questionCount: 100,
  durationSeconds: 45 * 60,
  passScore: 90,
  maxWrong: 11,
  quotas: {
    foundation: { judgment: 2, single: 4 },
    signals: { judgment: 7, single: 9 },
    passage: { judgment: 10, single: 14 },
    driver: { judgment: 6, single: 7 },
    vehicle: { judgment: 5, single: 5 },
    violations: { judgment: 4, single: 14 },
    accident: { judgment: 3, single: 4 },
    civilized: { judgment: 3, single: 3 }
  }
};

function shuffleMockItems(items, random = Math.random) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function buildMockExamBank(courses) {
  return courses.flatMap(course => course.lessons.flatMap(lesson =>
    lesson.questions.map((question, questionIndex) => ({
      id: `${course.id}:${lesson.id}:${questionIndex}`,
      moduleId: course.moduleId,
      moduleNo: course.moduleNo,
      moduleTitle: course.title,
      lessonTitle: lesson.title,
      type: question.o.length === 2 ? 'judgment' : 'single',
      question: question.q,
      options: question.o,
      answer: question.a,
      explanation: question.e
    }))
  ));
}

function createMockExamPaper(courses, random = Math.random) {
  const bank = buildMockExamBank(courses);
  const selected = [];

  Object.entries(mockExamConfig.quotas).forEach(([moduleId, quota]) => {
    ['judgment', 'single'].forEach(type => {
      const candidates = bank.filter(item => item.moduleId === moduleId && item.type === type);
      if (candidates.length < quota[type]) {
        throw new Error(`模拟题库不足：${moduleId}/${type} 需要 ${quota[type]} 题，当前 ${candidates.length} 题`);
      }
      selected.push(...shuffleMockItems(candidates, random).slice(0, quota[type]));
    });
  });

  return shuffleMockItems(selected, random);
}

function formatMockTime(seconds) {
  const safe = Math.max(0, seconds);
  return `${String(Math.floor(safe / 60)).padStart(2, '0')}:${String(safe % 60).padStart(2, '0')}`;
}

function mockExamIntro(records = []) {
  const history = records.length ? `<div class="mock-history"><h3>最近模考</h3>${records.slice(0, 5).map(record => `<div><time>${record.date}</time><strong class="${record.passed ? 'pass' : 'fail'}">${record.score} 分</strong><span>${record.passed ? '合格' : '未合格'} · ${formatMockTime(record.durationSeconds)}</span></div>`).join('')}</div>` : '';
  return `<div class="mock-intro">
    <div class="mock-intro-copy">
      <p class="eyebrow">FULL-SCALE MOCK EXAM · C1 / C2</p>
      <h1>科目一全真模拟考试</h1>
      <p class="lede">一次完整、安静、不可暂停的机考演练。试卷从路律 423 道原创课程题中按知识模块与题型比例随机生成。</p>
      <div class="mock-standard-grid">
        <article><strong>100</strong><span>道试题</span><small>每题 1 分</small></article>
        <article><strong>45:00</strong><span>考试时限</span><small>到时自动交卷</small></article>
        <article><strong>90</strong><span>合格分数</span><small>满分 100 分</small></article>
        <article><strong>11</strong><span>错误上限</span><small>第 11 题错即结束</small></article>
      </div>
      <div class="mock-rules">
        <h3>进入考场前请确认</h3>
        <ul>
          <li>本模式固定抽取 <b>40 道判断题 + 60 道单项选择题</b>，覆盖八个学习模块。</li>
          <li>选择答案后须点击“确认答案”；确认后不可修改，可跳过未确定的题稍后作答。</li>
          <li>考试中刷新或关闭页面不会暂停计时，再次进入可继续当前试卷。</li>
          <li>这是依据现行考试规则制作的原创模拟题库，不是公安机关正式考试题库；地方题可能不同。</li>
        </ul>
      </div>
      <button class="primary-btn mock-start" data-mock-start>开始 45 分钟模拟考试 →</button>
    </div>
    <aside class="mock-intro-side">
      <div class="mock-paper-profile"><small>试卷结构</small><h3>八模块分层随机</h3>${Object.entries(mockExamConfig.quotas).map(([id, quota]) => { const titles = {foundation:'基础法理',signals:'交通信号',passage:'通行规则',driver:'驾驶证',vehicle:'车辆登记',violations:'违法记分',accident:'事故应急',civilized:'安全文明'}; return `<div><span>${titles[id]}</span><i><b style="width:${(quota.judgment + quota.single) / 24 * 100}%"></b></i><strong>${quota.judgment + quota.single}题</strong></div>`; }).join('')}</div>
      ${history}
    </aside>
  </div>`;
}

function mockExamRunning(state, question, remainingSeconds) {
  const index = state.current;
  const answer = state.answers[question.id];
  const locked = Boolean(state.locked[question.id]);
  const answered = Object.keys(state.locked).length;
  const wrong = state.paper.reduce((count, item) => count + (state.locked[item.id] && state.answers[item.id] !== item.answer ? 1 : 0), 0);
  const timeClass = remainingSeconds <= 300 ? ' danger' : remainingSeconds <= 600 ? ' warning' : '';
  const result = locked ? `<div class="mock-answer-result ${answer === question.answer ? 'correct' : 'wrong'}"><strong>${answer === question.answer ? '回答正确' : `回答错误 · 正确答案 ${String.fromCharCode(65 + question.answer)}`}</strong>${answer === question.answer ? '' : `<p>${question.explanation}</p>`}</div>` : '';

  return `<div class="mock-exam-shell">
    <header class="mock-exam-bar">
      <div><small>C1 / C2 科目一</small><strong>全真模拟考试</strong></div>
      <div class="mock-live-stats"><span>已确认 <b>${answered}</b>/100</span><span>已错 <b class="${wrong >= 8 ? 'danger-text' : ''}">${wrong}</b>/10</span><time class="mock-timer${timeClass}" data-mock-timer>${formatMockTime(remainingSeconds)}</time></div>
      <button class="mock-submit" data-mock-submit>交卷</button>
    </header>
    <div class="mock-exam-grid">
      <main class="mock-question-panel">
        <div class="mock-question-meta"><span>第 ${index + 1} 题 / 100</span><b>${question.type === 'judgment' ? '判断题' : '单项选择题'}</b><small>${question.moduleNo} · ${question.moduleTitle}</small></div>
        <h2>${question.question}</h2>
        <div class="mock-options">${question.options.map((option, optionIndex) => `<button class="${answer === optionIndex ? 'selected' : ''} ${locked && optionIndex === question.answer ? 'correct' : ''} ${locked && answer === optionIndex && answer !== question.answer ? 'wrong' : ''}" data-mock-answer="${optionIndex}" ${locked ? 'disabled' : ''}><i>${String.fromCharCode(65 + optionIndex)}</i><span>${option}</span></button>`).join('')}</div>
        ${result}
        <div class="mock-question-actions">
          <button class="secondary-btn" data-mock-move="${Math.max(0, index - 1)}" ${index === 0 ? 'disabled' : ''}>← 上一题</button>
          ${locked ? `<button class="primary-btn" data-mock-next>${index === 99 ? '查看答题卡 →' : '下一题 →'}</button>` : `<button class="primary-btn" data-mock-confirm ${answer === undefined ? 'disabled' : ''}>确认答案${index === 99 ? '' : '并继续'} →</button>`}
        </div>
      </main>
      <aside class="mock-answer-sheet">
        <div class="mock-sheet-head"><div><small>ANSWER SHEET</small><h3>答题卡</h3></div><button data-mock-abort>退出</button></div>
        <div class="mock-sheet-legend"><span><i class="done"></i>已确认</span><span><i class="current"></i>当前</span><span><i></i>未作答</span></div>
        <div class="mock-sheet-grid">${state.paper.map((item, itemIndex) => `<button class="${state.locked[item.id] ? 'done' : ''} ${itemIndex === index ? 'current' : ''}" data-mock-move="${itemIndex}">${itemIndex + 1}</button>`).join('')}</div>
        <div class="mock-sheet-foot"><span>未确认 <b>${100 - answered}</b></span><span>最多还可错 <b>${Math.max(0, 10 - wrong)}</b></span></div>
      </aside>
    </div>
  </div>`;
}

function mockExamResult(state) {
  const result = state.result;
  const wrongItems = state.paper.filter(item => state.answers[item.id] !== item.answer && (result.reason !== 'too-many-wrong' || state.locked[item.id]));
  const reviewTitle = result.reason === 'too-many-wrong' ? '已确认错题复盘' : '错题与未答题复盘';
  const moduleStats = state.paper.reduce((stats, item) => {
    stats[item.moduleId] ||= { title: item.moduleTitle, total: 0, correct: 0 };
    stats[item.moduleId].total++;
    if (state.locked[item.id] && state.answers[item.id] === item.answer) stats[item.moduleId].correct++;
    return stats;
  }, {});
  const reasonText = result.reason === 'timeout' ? '考试时间已到，系统自动交卷。' : result.reason === 'too-many-wrong' ? '已确认 11 道错题，系统按真实失败线提前结束。' : '试卷已提交并完成评分。';

  return `<div class="mock-result-page">
    <section class="mock-score-card ${result.passed ? 'pass' : 'fail'}">
      <div><p class="eyebrow">EXAM RESULT</p><h1>${result.passed ? '模拟考试合格' : '本次未达到合格线'}</h1><p>${reasonText}</p></div>
      <div class="mock-score-ring"><strong>${result.score}</strong><span>分</span><small>${result.reason === 'too-many-wrong' ? '判定分' : result.passed ? '合格' : '未合格'}</small></div>
    </section>
    <div class="mock-result-summary">
      <article><small>正确</small><strong>${result.correct}</strong><span>题</span></article>
      <article><small>错误</small><strong>${result.wrong}</strong><span>题</span></article>
      <article><small>未答</small><strong>${result.unanswered}</strong><span>题</span></article>
      <article><small>用时</small><strong>${formatMockTime(result.durationSeconds)}</strong></article>
    </div>
    <section class="mock-module-review"><div class="section-heading"><div><h2>模块表现</h2><p>先补正确率最低的模块，再重新模考</p></div></div><div class="mock-module-bars">${Object.entries(moduleStats).map(([id, stat]) => { const pct = Math.round(stat.correct / stat.total * 100); return `<div><span>${stat.title}</span><i><b style="width:${pct}%"></b></i><strong>${stat.correct}/${stat.total}</strong></div>`; }).join('')}</div></section>
    <section class="mock-wrong-review"><div class="section-heading"><div><h2>${wrongItems.length ? reviewTitle : '满分完成'}</h2><p>${wrongItems.length ? '展开查看规则解释；这些题不会自动写入正式题库或云端。' : '本次没有错题，继续保持。'}</p></div></div>${wrongItems.map((item, i) => { const given = state.answers[item.id]; return `<details><summary><span>${i + 1}</span><strong>${item.question}</strong><b>${given === undefined ? '未作答' : `你的答案 ${String.fromCharCode(65 + given)}`}</b></summary><div><p><em>正确答案</em>${String.fromCharCode(65 + item.answer)}．${item.options[item.answer]}</p><p>${item.explanation}</p><small>${item.moduleTitle} · ${item.lessonTitle}</small></div></details>`; }).join('')}</section>
    <div class="mock-result-actions"><button class="primary-btn" data-mock-restart>再生成一套试卷</button><button class="secondary-btn" data-go="quick">返回考前速查</button></div>
  </div>`;
}
