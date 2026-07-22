const modules = [
  {
    id: 'foundation', no: '01', icon: '法', title: '基础法理与道路秩序', category: '法规',
    summary: '先理解谁在管、管什么，以及道路使用者的基本权利义务。',
    tasks: [
      ['法律体系与效力层级', '法律、行政法规、部门规章、地方性规则的关系', '理解'],
      ['道路与交通参与者', '道路、机动车、非机动车、驾驶人、行人与乘车人的法定概念', '必考'],
      ['安全通行基本原则', '依法、安全、文明通行；右侧通行；服从交通信号', '必考'],
      ['交通管理主体与执法', '公安交管部门、交通警察的职责与执法边界', '理解']
    ]
  },
  {
    id: 'signals', no: '02', icon: '灯', title: '交通信号与道路设施', category: '信号',
    summary: '建立“信号灯—标志—标线—交警指挥”的识别体系。',
    tasks: [
      ['交通信号的法定构成', '信号灯、交通标志、交通标线和交通警察指挥', '必考'],
      ['信号冲突时的优先级', '交通警察现场指挥优先；结合临时交通管制判断', '必考'],
      ['禁令、警告、指示标志', '按形状、颜色、图形辨认含义与作用', '必考'],
      ['道路标线与路面文字', '实线、虚线、停止线、导向线、网状线等', '必考'],
      ['车辆灯光与手势信号', '转向、远近光、危险报警闪光灯及交警手势', '必考']
    ]
  },
  {
    id: 'passage', no: '03', icon: '行', title: '道路通行规则', category: '通行',
    summary: '科目一主体：速度、车道、路权、让行、超车、停车与特殊路段。',
    tasks: [
      ['车道与行驶位置', '分道通行、专用车道、变更车道与安全距离', '必考'],
      ['速度规则', '有/无中心线道路、特殊天气与特殊路段的限速逻辑', '必考'],
      ['交叉路口与让行', '有无信号、转弯让直行、右方来车、环岛通行', '必考'],
      ['超车、会车、掉头与倒车', '允许条件、禁止情形、操作顺序', '必考'],
      ['停车与临时停车', '禁止停车地点、距离类规则、故障停车', '必考'],
      ['高速公路与城市快速路', '驶入驶离、车道、速度、跟车、应急车道', '必考'],
      ['铁路道口、渡口与漫水路', '观察、停车、低速通过及禁行规则', '重点'],
      ['行人和非机动车保护', '人行横道礼让、盲人及特殊车辆优先', '必考']
    ]
  },
  {
    id: 'driver', no: '04', icon: '证', title: '驾驶证申领与使用', category: '证照',
    summary: '围绕“能不能申领、怎么考试、如何合法持续持证”学习。',
    tasks: [
      ['准驾车型与申请条件', 'C1/C2 等代号、年龄、身体条件与禁止申请情形', '必考'],
      ['考试与学习驾驶证明', '科目构成、预约、补考、有效期、考试纪律', '重点'],
      ['驾驶证有效期与换补证', '六年、十年、长期；期满、遗失、损毁处理', '必考'],
      ['实习期与审验', '实习标志、特定车型限制、审验和提交身体证明', '必考'],
      ['驾驶证状态管理', '扣留、暂扣、吊销、撤销、注销的区别', '必考'],
      ['信息变更与异地业务', '联系方式、地址备案与全国通办事项', '理解']
    ]
  },
  {
    id: 'vehicle', no: '05', icon: '车', title: '机动车与登记管理', category: '证照',
    summary: '看懂车辆从注册、检验、转让到注销的全生命周期。',
    tasks: [
      ['注册、变更与转让登记', '登记种类、申请时点与所需基本条件', '重点'],
      ['号牌、行驶证与检验标志', '悬挂、使用、补换领及禁止伪造变造', '必考'],
      ['安全技术检验', '检验义务、免检与逾期后果的基本逻辑', '必考'],
      ['强制报废与注销', '达到报废标准、灭失、不在境内使用等情形', '重点'],
      ['交强险与交通事故救助基金', '强制保险义务与基本救济机制', '理解']
    ]
  },
  {
    id: 'violations', no: '06', icon: '分', title: '违法、处罚与记分', category: '违法',
    summary: '把“违法行为—行政处罚—驾驶证记分”三条线分开记。',
    tasks: [
      ['行政处罚类型', '警告、罚款、暂扣或吊销驾驶证、拘留', '必考'],
      ['记分制度总则', '12个月周期、满分12分；12/9/6/3/1分档', '必考'],
      ['12分与9分行为', '酒驾、逃逸、伪造牌证、高速逆行等严重行为', '必考'],
      ['6分、3分与1分行为', '信号灯、应急车道、手机、安全带等分类', '必考'],
      ['满分学习与学法减分', '参加条件、考试处理、不得减分情形', '重点'],
      ['超速、超员与超载矩阵', '按车型、道路类型和超出比例判断', '难点'],
      ['酒驾与醉驾', '行政违法与危险驾驶罪的边界', '必考']
    ]
  },
  {
    id: 'accident', no: '07', icon: '护', title: '事故处理与应急避险', category: '事故',
    summary: '形成事故现场处置顺序，并掌握常见紧急情形的安全原则。',
    tasks: [
      ['事故现场法定义务', '立即停车、保护现场、抢救伤员、报警', '必考'],
      ['轻微事故快处快赔', '可自行协商情形与证据固定', '重点'],
      ['事故责任与逃逸后果', '责任认定基本逻辑、逃逸与二次事故风险', '必考'],
      ['车辆故障处置', '警示灯、警告标志、人员撤离与报警', '必考'],
      ['恶劣天气和复杂道路', '雨雾冰雪、山区、隧道、夜间的风险控制', '必考'],
      ['爆胎、制动失效等避险', '握稳方向、缓慢减速，避免错误操作', '重点'],
      ['伤员急救基本原则', '先救命、防二次伤害、不盲目移动', '理解']
    ]
  },
  {
    id: 'civilized', no: '08', icon: '礼', title: '安全文明与综合责任', category: '文明',
    summary: '把考试规则转化为长期驾驶习惯，理解民事与刑事责任。',
    tasks: [
      ['防御性驾驶', '预判风险、留有余地、避免路怒与争道抢行', '重点'],
      ['特殊群体与特种车辆', '校车、执行任务特种车辆、残障人士保护', '必考'],
      ['机动车交通事故民事责任', '侵权责任、保险赔付与责任分担框架', '理解'],
      ['交通肇事罪与危险驾驶罪', '严重事故、醉驾、追逐竞驶等刑责边界', '重点'],
      ['地方规则与动态更新', '限行、停车管理等因地而异，学会查官方来源', '理解']
    ]
  }
];

const lawLayers = [
  { level: 'L1', name: '法律', laws: [
    ['《道路交通安全法》', '道路交通安全领域的核心法律：车辆与驾驶人、通行条件、事故处理、执法监督和法律责任。', '2021修正·有效', true],
    ['《刑法》相关条款', '交通肇事罪、危险驾驶罪等道路交通犯罪的入罪与刑罚依据。', '综合责任', false],
    ['《民法典》侵权责任编', '机动车交通事故造成民事损害时的责任承担与赔偿框架。', '综合责任', false]
  ]},
  { level: 'L2', name: '行政法规', laws: [
    ['《道路交通安全法实施条例》', '把法律原则细化为速度、让行、超车、停车、高速公路等具体通行规则。', '2017修订·有效', true],
    ['《机动车交通事故责任强制保险条例》', '规定交强险投保、赔付及道路交通事故社会救助机制。', '配套制度', false]
  ]},
  { level: 'L3', name: '部门规章', laws: [
    ['《机动车驾驶证申领和使用规定》', '驾驶证申请、考试、发证换证、审验和监督管理；现按公安部令第172号修改版。', '2025.01.01施行', true],
    ['《机动车登记规定》', '注册、变更、转让、抵押、注销登记以及牌证、检验标志管理。', '公安部令第164号', true],
    ['《道路交通安全违法行为记分管理办法》', '12、9、6、3、1分值体系，记分执行、满分处理与学法减分。', '公安部令第163号', true],
    ['《道路交通事故处理程序规定》', '事故报警、调查、认定、复核、处罚与损害赔偿调解程序。', '程序规则', false],
    ['《道路交通安全违法行为处理程序规定》', '现场与非现场违法处理、强制措施、行政处罚程序。', '程序规则', false]
  ]},
  { level: 'L4', name: '标准与地方规则', laws: [
    ['GA 1026—2022', '《机动车驾驶人考试内容和方法》，规范考试内容、方法和评判。', '现行行业标准', true],
    ['交通标志标线国家标准', 'GB 5768 系列等，统一道路交通标志与标线的设置和表达。', '技术标准', false],
    ['地方性法规与政府规章', '各地非机动车、停车、限行等规定；不得与上位法冲突。', '按所在地查询', false]
  ]}
];

const quizQuestions = [
  { q: '道路交通信号包括交通信号灯、交通标志、交通标线和什么？', options: ['交通警察的指挥', '道路隔离设施', '车辆喇叭信号', '导航软件提示'], answer: 0, exp: '《道路交通安全法》第二十五条规定，道路交通信号包括交通信号灯、交通标志、交通标线和交通警察的指挥。', source: '《道路交通安全法》第25条' },
  { q: '驾驶机动车在高速公路或者城市快速路上违法停车，一次记多少分？', options: ['12分', '9分', '6分', '3分'], answer: 1, exp: '现行记分办法将该行为列为一次记9分。注意“违法停车”和“违法占用应急车道行驶”（6分）不是同一行为。', source: '公安部令第163号第9条' },
  { q: '科目一考试满分100分，达到多少分为合格？', options: ['80分', '85分', '90分', '95分'], answer: 2, exp: '《机动车驾驶证申领和使用规定》第三十八条规定，科目一满分100分，成绩达到90分的为合格。', source: '公安部令第172号修改版第38条' },
  { q: '机动车驾驶证的记分周期为12个月，满分是多少分？', options: ['10分', '12分', '15分', '18分'], answer: 1, exp: '记分周期为十二个月，满分为12分，自初次领取驾驶证之日起连续计算。', source: '公安部令第163号第3条' },
  { q: '机动车通过没有交通信号灯、标志、标线或交警指挥的交叉路口，应当怎样做？', options: ['加速抢先通过', '减速慢行并让行人和优先通行车辆先行', '鸣笛后直接通过', '只让右侧机动车'], answer: 1, exp: '这种路口应减速慢行，并让行人和优先通行的车辆先行；具体机动车间让行还需依实施条例判断。', source: '《道路交通安全法》第44条' },
  { q: '发生仅造成轻微财产损失、基本事实清楚的交通事故，当事人首先应当怎样做？', options: ['留在原地等待交警', '先撤离现场再协商处理', '立即离开且不留信息', '必须由保险公司认定责任'], answer: 1, exp: '为避免妨碍交通，当事人应先撤离现场再协商处理；实践中应先确保安全并固定必要证据。', source: '《道路交通安全法》第70条' },
  { q: '以下哪项不属于道路交通安全违法行为的一次记分档位？', options: ['12分', '9分', '2分', '1分'], answer: 2, exp: '现行一次记分分值为12分、9分、6分、3分、1分，没有2分档。', source: '公安部令第163号第7条' },
  { q: '驾驶人发现前方道路拥堵时，正确做法是？', options: ['借对向车道超越排队车辆', '占用应急车道快速通过', '依次排队通行', '穿插等候车辆'], answer: 2, exp: '遇前方机动车停车排队或缓慢行驶，应依次排队，不得借道超车、占用对面车道或穿插等候车辆。', source: '《道路交通安全法》第45条' }
];

const sources = [
  ['法律', '中华人民共和国道路交通安全法', '国家法律法规数据库；2021年修正版，核心上位法。', 'https://flk.npc.gov.cn/detail?fileId=&id=ff8081817ab231eb017abd617ef70519&title=%E4%B8%AD%E5%8D%8E%E4%BA%BA%E6%B0%91%E5%85%B1%E5%92%8C%E5%9B%BD%E9%81%93%E8%B7%AF%E4%BA%A4%E9%80%9A%E5%AE%89%E5%85%A8%E6%B3%95&type='],
  ['行政法规', '道路交通安全法实施条例', '国家行政法规库；现行版本注明2017年修订。', 'https://xzfg.moj.gov.cn/front/law/detail?LawID=75'],
  ['部门规章', '机动车驾驶证申领和使用规定', '国务院公报刊载公安部第172号令修改后的现行文本，2025年1月1日起施行。', 'https://www.gov.cn/gongbao/2025/issue_11866/202502/content_7004031.html'],
  ['部门规章', '道路交通安全违法行为记分管理办法', '公安部令第163号；现行12/9/6/3/1分记分体系。', 'https://jtgl.beijing.gov.cn/jgj/jgxx/flfg/gabgz/11186803/index.html'],
  ['部门规章', '机动车登记规定', '公安部令第164号；自2022年5月1日起施行。', 'https://jtgl.beijing.gov.cn/jgj/jgxx/flfg/gabgz/11186809/index.html'],
  ['行业标准', 'GA 1026—2022 机动车驾驶人考试内容和方法', '全国标准信息公共服务平台显示为现行强制性公共安全行业标准。', 'https://std.samr.gov.cn/hb/search/stdHBDetailed?id=E424B54CA6246DD7E05397BE0A0A5C54'],
  ['国家标准', 'GB 5768.2—2022 道路交通标志', '现行强制性国家标准，规定道路交通标志。', 'https://std.samr.gov.cn/gb/search/gbDetailed?id=DAB6B92C0763FC96E05397BE0A0A5F84'],
  ['国家标准', 'GB 5768.3—2025 道路交通标线', '自2026年5月1日起实施的现行强制性国家标准。', 'https://std.samr.gov.cn/gb/search/gbDetailed?id=40C4523A3FB81115E06397BE0A0AE2D3'],
  ['国家标准', 'GB 17761—2024 电动自行车安全技术规范', '自2025年9月1日起实施，代替2018版。', 'https://std.samr.gov.cn/gb/search/gbDetailed?id=2B8C8FCCA01EF91FE06397BE0A0A56EE'],
  ['教学大纲', '机动车驾驶培训教学与考试大纲', '交通运输部、公安部联合发布，自2022年4月1日起施行。', 'https://xxgk.mot.gov.cn/jigou/ysfws/202203/t20220325_3647756.html'],
  ['政务指南', '初次申请驾驶证考试合格标准', '北京交管局公开答复：科目一100分，90分合格。', 'https://jtgl.beijing.gov.cn/jgj/qaknowledge/325750668/325750918/325730178/744063221/index.html']
];

const courseCatalog = [foundationCourse, signalsCourse, passageCourse, driverCourse, vehicleCourse, violationsCourse, accidentCourse, civilizedCourse];
const labels = { dashboard: '学习总览', course: '课程中心', quick: '考前速查', mock: '模拟考试', syllabus: '理论大纲', lawmap: '法规体系', quiz: '知识校验', sources: '权威资料' };
let progress = JSON.parse(localStorage.getItem('roadLawProgress') || '{}');
let quizState = { index: 0, score: 0, results: [], selected: null, checked: false };
let courseStates = JSON.parse(localStorage.getItem('roadLawCourseProgress') || '{}');
const legacyFoundationState = localStorage.getItem('foundationCourseProgress');
if (!courseStates[foundationCourse.id] && legacyFoundationState) courseStates[foundationCourse.id] = JSON.parse(legacyFoundationState);
let activeCourseId = null;
let quickReferenceActive = 'all';
const mockExamStorageKey = 'roadLawMockExam';
const mockExamRecordsKey = 'roadLawMockExamRecords';
const mockExamBank = buildMockExamBank(courseCatalog);
const mockExamBankMap = new Map(mockExamBank.map(question => [question.id, question]));
let mockExamState = loadMockExamState();
let mockExamRecords = loadMockExamRecords();
let mockExamTimer = null;

const totalTasks = () => modules.reduce((n, m) => n + m.tasks.length, 0);
const doneCount = () => Object.values(progress).filter(Boolean).length;
const moduleDone = id => modules.find(m => m.id === id).tasks.filter((_, i) => progress[`${id}-${i}`]).length;
const percent = () => Math.round(doneCount() / totalTasks() * 100);

function renderDashboard() {
  const pct = percent();
  document.querySelector('#dashboard').innerHTML = `
    <div class="hero-grid">
      <article class="hero-card">
        <p class="eyebrow">ROAD LAW LEARNING ATLAS · 2026</p>
        <h1>不只通过考试，<br>真正读懂道路规则。</h1>
        <p class="lede">从法律效力层级出发，把科目一的碎片知识放回完整体系。先建立地图，再逐项攻克，最终形成可迁移到真实驾驶中的判断力。</p>
        <div class="hero-actions"><button class="primary-btn" data-go="mock">开始全真模考 →</button><button class="secondary-btn" data-go="quick">考前速查清单</button></div>
      </article>
      <article class="progress-card">
        <small>YOUR PROGRESS · 总进度</small>
        <div class="progress-ring" style="--progress:${pct * 3.6}deg"><span>${pct}%<small>已掌握</small></span></div>
        <div class="progress-stats"><div><strong>${doneCount()}</strong><small>已完成</small></div><div><strong>${totalTasks() - doneCount()}</strong><small>待学习</small></div><div><strong>8</strong><small>模块</small></div></div>
      </article>
    </div>
    <div class="section-heading"><div><h2>八个学习模块</h2><p>按“理解制度 → 识别信号 → 掌握通行 → 承担责任”渐进</p></div><button class="text-button" data-go="syllabus">查看完整清单 →</button></div>
    <div class="module-grid">${modules.map(moduleCard).join('')}</div>
    <div class="section-heading"><div><h2>建议从这里开始</h2><p>先建立框架，再集中记忆容易混淆的数字规则</p></div></div>
    <div class="today-grid">
      <article class="focus-card"><div class="focus-index">08</div><div><h3>新课程：安全文明与综合责任</h3><p>9 节 · 54 道练习 · 防御性驾驶、弱者保护与民刑责任闭环</p></div><button class="primary-btn" data-open-course="civilized-course">进入课程</button></article>
      <article class="principle-card"><small>核心学习原则</small><blockquote>“先问为什么这样规定，<br>再记具体数字。”</blockquote></article>
    </div>
    <div class="section-heading community-heading"><div><h2>一起把它做得更可靠</h2><p>路律是公开维护的学习项目。发现法规版本、课程表述或界面问题，都可以直接反馈。</p></div></div>
    <div class="community-grid">
      <a href="https://github.com/wstfx/RoadLaw" target="_blank" rel="noopener"><span>☆</span><div><strong>在 GitHub 支持项目</strong><small>如果它帮到了你，欢迎留下一个 Star</small></div><b>打开仓库 →</b></a>
      <a href="https://github.com/wstfx/RoadLaw/issues/new?template=content-error.yml" target="_blank" rel="noopener"><span>校</span><div><strong>报告内容或法规问题</strong><small>请附上模块、原文来源和建议修改</small></div><b>提交纠错 →</b></a>
      <button data-share-site><span>享</span><div><strong>分享给正在备考的人</strong><small>复制链接或调用设备的系统分享</small></div><b>立即分享 →</b></button>
    </div>`;
}

function moduleCard(m) {
  const done = moduleDone(m.id), pct = Math.round(done / m.tasks.length * 100);
  return `<article class="module-card" data-module="${m.id}"><div class="module-top"><span class="module-number">${m.no}</span><span class="module-icon">${m.icon}</span></div><h3>${m.title}</h3><p>${m.summary}</p><div class="mini-progress"><i style="width:${pct}%"></i></div><div class="module-meta"><span>${done}/${m.tasks.length} 项</span><span>${pct}%</span></div></article>`;
}

function renderSyllabus(filter = '全部') {
  const visible = filter === '全部' ? modules : modules.filter(m => m.category === filter);
  document.querySelector('#syllabus').innerHTML = `
    <div class="page-head"><div><p class="eyebrow">THE MASTER CHECKLIST</p><h1>科目一理论学习大纲</h1><p class="lede">共 ${totalTasks()} 个知识单元。勾选会保存在当前浏览器；“必考”代表科目一直接覆盖，“理解”用于搭建完整法律框架。</p></div><div class="head-stat"><strong>${doneCount()} / ${totalTasks()}</strong><small>知识单元已完成</small></div></div>
    <div class="filter-bar">${['全部','法规','信号','通行','证照','违法','事故','文明'].map(x => `<button class="filter-chip ${x === filter ? 'active' : ''}" data-filter="${x}">${x}</button>`).join('')}<button class="filter-chip" data-reset>重置进度</button></div>
    <div class="syllabus-list">${visible.map((m, index) => syllabusModule(m, index === 0)).join('')}</div>`;
}

function syllabusModule(m, open) {
  const done = moduleDone(m.id);
  const course = courseCatalog.find(c => c.moduleId === m.id);
  return `<article class="syllabus-module ${open ? 'open' : ''}" data-syllabus="${m.id}">
    <button class="syllabus-header"><span class="syllabus-num">${m.no}</span><div><h3>${m.title}</h3><p>${m.summary}</p></div><span class="syllabus-count">${done}/${m.tasks.length} 完成</span><span class="chevron">⌄</span></button>
    <div class="task-list">${course ? `<button class="course-entry" data-open-course="${course.id}"><span>完整课程 · ${course.lessons.length} 节 / ${course.lessons.reduce((n,l)=>n+l.questions.length,0)} 题</span><strong>进入「${course.title}」课程 →</strong></button>` : ''}${m.tasks.map((task, i) => `<label class="task-row ${progress[`${m.id}-${i}`] ? 'done' : ''}"><input class="task-check" type="checkbox" data-task="${m.id}-${i}" ${progress[`${m.id}-${i}`] ? 'checked' : ''}><span class="task-copy"><strong>${task[0]}</strong><small>${task[1]}</small></span><span class="task-tag ${task[2] === '必考' || task[2] === '难点' ? 'exam' : ''}">${task[2]}</span></label>`).join('')}</div>
  </article>`;
}

function getCourseState(course) {
  if (!courseStates[course.id]) courseStates[course.id] = { lesson:-1, completed:{}, answers:{} };
  return courseStates[course.id];
}
function courseCompletedCount(course, state = getCourseState(course)) { return course.lessons.filter(l => state.completed[l.id]).length; }
function coursePercent(course, state = getCourseState(course)) { return Math.round(courseCompletedCount(course, state) / course.lessons.length * 100); }
function saveCourseStates() { localStorage.setItem('roadLawCourseProgress', JSON.stringify(courseStates)); }
function questionKey(lesson, index) { return `${lesson.id}-${index}`; }
function correctInLesson(lesson, state) { return lesson.questions.filter((q, i) => state.answers[questionKey(lesson, i)] === q.a).length; }

function syncCourseTasks(course, state) {
  Object.entries(course.taskGroups).forEach(([taskIndex, lessonIds]) => {
    progress[`${course.moduleId}-${taskIndex}`] = lessonIds.every(id => Boolean(state.completed[id]));
  });
  localStorage.setItem('roadLawProgress', JSON.stringify(progress));
}

function renderCourse() {
  const root = document.querySelector('#course');
  if (!activeCourseId) { root.innerHTML = renderCourseLibrary(); return; }
  const course = courseCatalog.find(c => c.id === activeCourseId);
  const state = getCourseState(course);
  const pct = coursePercent(course, state);
  const current = state.lesson >= 0 ? course.lessons[state.lesson] : null;
  root.innerHTML = `
    <div class="course-topline"><div><button class="text-button" data-course-library>← 课程中心</button>${current ? '<button class="text-button" data-course-home>课程首页</button>' : ''}</div><span>模块 ${course.moduleNo} · C1/C2 科目一</span></div>
    ${current ? renderCourseLesson(course, state, current, state.lesson, pct) : renderCourseHome(course, state, pct)}`;
}

function renderCourseLibrary() {
  const completedLessons = courseCatalog.reduce((n,c) => n + courseCompletedCount(c), 0);
  const totalLessons = courseCatalog.reduce((n,c) => n + c.lessons.length, 0);
  return `<div class="page-head course-library-head"><div><p class="eyebrow">COURSE LIBRARY</p><h1>系统课程</h1><p class="lede">八个理论模块现已全部形成完整课程。进度独立保存，并同步回理论大纲中的知识清单。</p></div><div class="head-stat"><strong>${completedLessons} / ${totalLessons}</strong><small>课程章节已完成</small></div></div><div class="course-library-grid">${courseCatalog.map(courseLibraryCard).join('')}</div>`;
}

function courseLibraryCard(course) {
  const state = getCourseState(course), pct = coursePercent(course,state), questions = course.lessons.reduce((n,l)=>n+l.questions.length,0);
  return `<article class="course-library-card module-${course.moduleNo}"><div class="library-card-top"><span>${course.moduleNo}</span><em>${pct === 100 ? '已完成' : pct ? '学习中' : '未开始'}</em></div><h2>${course.title}</h2><p>${course.subtitle}</p><div class="library-stats"><span>${course.lessons.length} 节</span><span>${questions} 题</span><span>${course.duration}</span></div><div class="course-progress-line"><i style="width:${pct}%"></i></div><div class="library-card-footer"><small>${pct}% 完成</small><button class="primary-btn" data-open-course="${course.id}">${pct ? '继续学习' : '查看课程'} →</button></div></article>`;
}

function renderCourseHome(course, state, pct) {
  const questionCount = course.lessons.reduce((n,l)=>n+l.questions.length,0);
  return `<div class="course-hero" data-module="${course.moduleNo}">
    <div><p class="eyebrow">SYSTEM COURSE · MODULE ${course.moduleNo}</p><h1>${course.title}</h1><p>${course.subtitle}</p><div class="course-hero-meta"><span>◷ ${course.duration}</span><span>▤ ${course.lessons.length} 节课程</span><span>✓ ${questionCount} 道对应练习</span></div><button class="primary-btn" data-course-start>${courseCompletedCount(course,state) ? '继续学习 →' : '开始第一节 →'}</button></div>
    <div class="course-roadmap-card"><small>COURSE PROGRESS</small><div class="course-progress-number"><strong>${pct}%</strong><span>${courseCompletedCount(course,state)} / ${course.lessons.length} 节完成</span></div><div class="course-progress-line"><i style="width:${pct}%"></i></div><p>每节练习全部答对后，才可标记本节完成。</p></div>
  </div>
  <div class="course-home-grid"><div><div class="section-heading"><div><h2>学习路线</h2><p>逐节完成讲解和对应练习</p></div></div><div class="course-chapter-list">${course.lessons.map((l,i) => `<button class="course-chapter ${state.completed[l.id] ? 'completed' : ''}" data-course-lesson="${i}"><span class="chapter-state">${state.completed[l.id] ? '✓' : l.no}</span><span><strong>${l.title}</strong><small>${l.summary}</small></span><em>${l.time}　→</em></button>`).join('')}</div></div>
  <aside><div class="outcome-card"><small>学完你能够</small><ul>${course.outcomes.map(x => `<li>${x}</li>`).join('')}</ul></div><div class="source-note"><b>内容依据</b><p>课程按现行法律、行政法规和国家标准组织；具体来源列在每节末尾。</p></div></aside></div>`;
}

function renderCourseLesson(course, state, lesson, index, pct) {
  const correct = correctInLesson(lesson,state), allCorrect = correct === lesson.questions.length;
  return `<div class="course-layout">
    <aside class="course-toc"><div class="toc-progress"><span>课程进度</span><strong>${pct}%</strong><div><i style="width:${pct}%"></i></div></div><nav>${course.lessons.map((l,i) => `<button class="toc-item ${i === index ? 'active' : ''} ${state.completed[l.id] ? 'done' : ''}" data-course-lesson="${i}"><span>${state.completed[l.id] ? '✓' : l.no}</span><div><strong>${l.title}</strong><small>${l.time}</small></div></button>`).join('')}</nav></aside>
    <article class="lesson-page">
      <header class="lesson-head"><div><p class="eyebrow">LESSON ${lesson.no}</p><h1>${lesson.title}</h1><p>${lesson.summary}</p></div><span class="lesson-time">◷ ${lesson.time}</span></header>
      <div class="lesson-objective"><b>本节重点</b><span>${lesson.summary}</span></div>
      <div class="lesson-body">${lesson.content}</div>
      <section class="lesson-exercises"><div class="exercise-head"><div><p class="eyebrow">PRACTICE</p><h2>本节校验</h2><p>已答对 ${correct} / ${lesson.questions.length} 题；答错后可以重新选择。</p></div><span>${allCorrect ? '全部掌握 ✓' : '全部答对后完成本节'}</span></div>${lesson.questions.map((q,i) => renderCourseQuestion(state,lesson,q,i)).join('')}</section>
      <div class="lesson-complete"><div><strong>${state.completed[lesson.id] ? '本节已经完成' : allCorrect ? '练习全部正确，可以完成本节' : '还有知识点需要确认'}</strong><small>${state.completed[lesson.id] ? '你仍可随时回来复习。' : `当前正确率 ${Math.round(correct / lesson.questions.length * 100)}%`}</small></div><button class="primary-btn" data-complete-lesson ${!allCorrect ? 'disabled' : ''}>${state.completed[lesson.id] ? '已完成 ✓' : index === course.lessons.length - 1 ? '完成课程' : '完成并进入下一节 →'}</button></div>
      <footer class="lesson-sources"><b>本课程的主要官方依据</b>${course.sources.map(s => `<a href="${s[2]}" target="_blank" rel="noopener">${s[0]} · ${s[1]} ↗</a>`).join('')}</footer>
    </article>
  </div>`;
}

function renderCourseQuestion(state, lesson, q, index) {
  const key = questionKey(lesson, index), selected = state.answers[key];
  const answered = Number.isInteger(selected), isCorrect = selected === q.a;
  return `<article class="course-question"><div class="question-number">${String(index + 1).padStart(2,'0')}</div><div><h3>${q.q}</h3><div class="course-options">${q.o.map((o,i) => `<button data-course-answer="${key}" data-answer-index="${i}" class="${answered && i === q.a ? 'correct' : answered && i === selected ? 'wrong' : ''}"><span>${String.fromCharCode(65+i)}</span>${o}</button>`).join('')}</div>${answered ? `<div class="course-feedback ${isCorrect ? 'right' : 'retry'}"><b>${isCorrect ? '正确。' : '还不对，可以重新选择。'}</b> ${q.e}</div>` : ''}</div></article>`;
}

function renderLawMap() {
  document.querySelector('#lawmap').innerHTML = `
    <div class="page-head"><div><p class="eyebrow">LEGAL HIERARCHY</p><h1>中国大陆道路交通法规体系</h1><p class="lede">用“效力层级 + 调整对象”理解规则来源。下位规范不能与上位规范冲突；同层级还需结合特别法、后法及适用范围判断。</p></div></div>
    <div class="law-intro"><p><strong>一条主线：</strong>《道路交通安全法》确立基本制度，实施条例细化通行规则，公安部规章管理驾驶证、车辆登记、记分与处理程序，技术标准统一信号和考试。</p><div><strong>4</strong><small>个学习层级</small></div></div>
    <div class="law-layers">${lawLayers.map(layer => `<div class="law-layer"><div class="layer-label"><span>${layer.level}</span><strong>${layer.name}</strong></div><div class="layer-cards">${layer.laws.map(l => `<article class="law-card ${l[3] ? 'core' : ''}"><h3>${l[0]}</h3><p>${l[1]}</p><span class="law-status">● ${l[2]}</span></article>`).join('')}</div></div>`).join('')}</div>
    <div class="relation-note"><strong>考试与法律学习的关系：</strong> 科目一不是一部单独的“考试法”，而是从上述规范中抽取最基础的道路通行、信号、违法事故、驾驶证和车辆登记知识。题库表述用于测验，发生疑义时应回到现行法条、规章和官方考试标准，而不是依赖非官方口诀。</div>`;
}

function renderQuiz() {
  const s = quizState, q = quizQuestions[s.index];
  document.querySelector('#quiz').innerHTML = `
    <div class="page-head"><div><p class="eyebrow">KNOWLEDGE CHECK</p><h1>用判断验证理解</h1><p class="lede">这是一组结构示例题，不替代当地正式考试题库。每题作答后都会显示规则依据。</p></div></div>
    <div class="quiz-layout"><article class="quiz-card">
      <div class="quiz-kicker"><span>${q.source}</span><span>${String(s.index + 1).padStart(2,'0')} / ${String(quizQuestions.length).padStart(2,'0')}</span></div>
      <h2>${q.q}</h2><div class="option-list">${q.options.map((o,i) => `<button class="option ${s.checked ? (i === q.answer ? 'correct' : i === s.selected ? 'wrong' : '') : i === s.selected ? 'selected' : ''}" data-option="${i}">${String.fromCharCode(65+i)}　${o}</button>`).join('')}</div>
      <div class="explanation ${s.checked ? 'show' : ''}"><strong>${s.selected === q.answer ? '回答正确。' : '需要再看一下。'}</strong> ${q.exp}</div>
      <div class="quiz-footer"><button class="text-button" data-restart>重新开始</button>${s.checked ? `<button class="primary-btn" data-next>${s.index === quizQuestions.length - 1 ? '查看结果' : '下一题 →'}</button>` : `<button class="primary-btn" data-check ${s.selected === null ? 'disabled' : ''}>确认答案</button>`}</div>
    </article><aside class="quiz-side"><div class="side-card"><h3>本轮得分</h3><div class="score-big">${s.score}<small> / ${quizQuestions.length}</small></div><div class="quiz-dots">${quizQuestions.map((_,i) => `<span class="quiz-dot ${s.results[i] === true ? 'correct' : s.results[i] === false ? 'wrong' : ''}">${i+1}</span>`).join('')}</div></div><div class="rule-strip"><strong>正式科目一</strong><br>满分 100 分，90 分合格。法定考试范围全国统一，但具体题目由考试系统抽取。</div></aside></div>`;
}

function renderSources() {
  document.querySelector('#sources').innerHTML = `<div class="page-head"><div><p class="eyebrow">PRIMARY SOURCES</p><h1>权威资料与版本说明</h1><p class="lede">优先使用国家法律法规数据库、国务院公报、司法部、公安交管和国家标准平台。点击可打开原始页面。</p></div></div><div class="source-grid">${sources.map(s => `<article class="source-card"><span class="source-type">${s[0]}</span><div><h3>${s[1]}</h3><p>${s[2]}</p></div><a href="${s[3]}" target="_blank" rel="noopener" aria-label="打开${s[1]}">↗</a></article>`).join('')}</div><div class="disclaimer"><strong>使用提示：</strong>本系统用于学习导航，不构成法律意见，也不复制任何商业题库。法律、规章、国家标准和地方管理措施可能更新；临近考试时请同时查看所在地车管所或“交管12123”的最新考试通知。若题库答案与现行官方规则明显冲突，以主管机关发布的有效文本和考试要求为准。<a href="https://github.com/wstfx/RoadLaw/issues/new?template=content-error.yml" target="_blank" rel="noopener">发现内容问题？提交纠错 ↗</a></div>`;
}

function renderQuick() { document.querySelector('#quick').innerHTML = renderQuickReference(quickReferenceActive); }

function loadMockExamState() {
  try {
    const saved = JSON.parse(localStorage.getItem(mockExamStorageKey) || 'null');
    if (!saved || saved.version !== mockExamConfig.version || !Array.isArray(saved.paperIds) || saved.paperIds.length !== mockExamConfig.questionCount) return null;
    const paper = saved.paperIds.map(id => mockExamBankMap.get(id));
    if (paper.some(item => !item)) return null;
    return { ...saved, paper };
  } catch (_) { return null; }
}

function loadMockExamRecords() {
  try {
    const records = JSON.parse(localStorage.getItem(mockExamRecordsKey) || '[]');
    return Array.isArray(records) ? records : [];
  } catch (_) { return []; }
}

function saveMockExamState() {
  if (!mockExamState) { localStorage.removeItem(mockExamStorageKey); return; }
  const { paper, ...saved } = mockExamState;
  localStorage.setItem(mockExamStorageKey, JSON.stringify({ ...saved, paperIds: paper.map(item => item.id) }));
}

function mockRemainingSeconds() {
  return mockExamState?.status === 'running' ? Math.max(0, Math.ceil((mockExamState.endsAt - Date.now()) / 1000)) : 0;
}

function renderMock() {
  const root = document.querySelector('#mock');
  if (!mockExamState) root.innerHTML = mockExamIntro(mockExamRecords);
  else if (mockExamState.status === 'running') root.innerHTML = mockExamRunning(mockExamState, mockExamState.paper[mockExamState.current], mockRemainingSeconds());
  else root.innerHTML = mockExamResult(mockExamState);
  syncMockExamTimer();
}

function startMockExam() {
  const now = Date.now();
  mockExamState = { version: mockExamConfig.version, status: 'running', startedAt: now, endsAt: now + mockExamConfig.durationSeconds * 1000, current: 0, answers: {}, locked: {}, paper: createMockExamPaper(courseCatalog) };
  saveMockExamState();
  renderMock(); bindDynamic(); window.scrollTo({ top: 0, behavior: 'smooth' });
}

function mockWrongCount() {
  return mockExamState.paper.reduce((count, item) => count + (mockExamState.locked[item.id] && mockExamState.answers[item.id] !== item.answer ? 1 : 0), 0);
}

function findNextMockQuestion(from) {
  for (let offset = 1; offset <= mockExamState.paper.length; offset++) {
    const index = (from + offset) % mockExamState.paper.length;
    if (!mockExamState.locked[mockExamState.paper[index].id]) return index;
  }
  return Math.min(from + 1, mockExamState.paper.length - 1);
}

function confirmMockAnswer() {
  const question = mockExamState.paper[mockExamState.current];
  if (mockExamState.answers[question.id] === undefined) return;
  mockExamState.locked[question.id] = true;
  saveMockExamState();
  if (mockWrongCount() >= mockExamConfig.maxWrong) { finishMockExam('too-many-wrong'); return; }
  renderMock(); bindDynamic();
}

function finishMockExam(reason = 'manual') {
  if (!mockExamState || mockExamState.status !== 'running') return;
  const lockedCount = Object.keys(mockExamState.locked).length;
  const confirmedWrong = mockWrongCount();
  const confirmedCorrect = lockedCount - confirmedWrong;
  const unanswered = mockExamConfig.questionCount - lockedCount;
  const wrong = reason === 'too-many-wrong' ? confirmedWrong : confirmedWrong + unanswered;
  const score = reason === 'too-many-wrong' ? mockExamConfig.questionCount - confirmedWrong : confirmedCorrect;
  const durationSeconds = Math.min(mockExamConfig.durationSeconds, Math.max(0, Math.round((Date.now() - mockExamState.startedAt) / 1000)));
  mockExamState.status = 'submitted';
  const passed = reason !== 'too-many-wrong' && score >= mockExamConfig.passScore;
  mockExamState.result = { reason, score, correct: confirmedCorrect, wrong, unanswered, durationSeconds, passed };
  const record = { date: new Intl.DateTimeFormat('zh-CN', { month:'2-digit', day:'2-digit', hour:'2-digit', minute:'2-digit' }).format(new Date()), score, passed, durationSeconds };
  mockExamRecords = [record, ...mockExamRecords].slice(0, 10);
  localStorage.setItem(mockExamRecordsKey, JSON.stringify(mockExamRecords));
  saveMockExamState();
  renderMock(); bindDynamic(); window.scrollTo({ top: 0, behavior: 'smooth' });
}

function syncMockExamTimer() {
  if (mockExamTimer) { clearInterval(mockExamTimer); mockExamTimer = null; }
  if (mockExamState?.status !== 'running') return;
  if (mockRemainingSeconds() <= 0) { finishMockExam('timeout'); return; }
  mockExamTimer = setInterval(() => {
    const remaining = mockRemainingSeconds();
    const timer = document.querySelector('[data-mock-timer]');
    if (timer) { timer.textContent = formatMockTime(remaining); timer.classList.toggle('warning', remaining <= 600); timer.classList.toggle('danger', remaining <= 300); }
    if (remaining <= 0) finishMockExam('timeout');
  }, 1000);
}

function renderAll() { renderDashboard(); renderCourse(); renderQuick(); renderMock(); renderSyllabus(); renderLawMap(); renderQuiz(); renderSources(); bindDynamic(); }

function switchView(id) {
  document.querySelectorAll('.view').forEach(v => v.classList.toggle('active', v.id === id));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.toggle('active', n.dataset.view === id));
  document.querySelector('#currentSection').textContent = labels[id];
  document.querySelector('.sidebar').classList.remove('open');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function bindDynamic() {
  document.querySelectorAll('[data-go]').forEach(b => b.onclick = () => switchView(b.dataset.go));
  document.querySelectorAll('[data-open-course]').forEach(b => b.onclick = () => openCourse(b.dataset.openCourse));
  document.querySelectorAll('.module-card').forEach(c => c.onclick = () => { const course = courseCatalog.find(x => x.moduleId === c.dataset.module); if (course) { openCourse(course.id); return; } switchView('syllabus'); setTimeout(() => { const el = document.querySelector(`[data-syllabus="${c.dataset.module}"]`); el.classList.add('open'); el.scrollIntoView({behavior:'smooth', block:'center'}); }, 50); });
  document.querySelectorAll('.syllabus-header').forEach(h => h.onclick = () => h.parentElement.classList.toggle('open'));
  document.querySelectorAll('.task-check').forEach(c => c.onchange = () => { progress[c.dataset.task] = c.checked; localStorage.setItem('roadLawProgress', JSON.stringify(progress)); renderDashboard(); renderSyllabus(document.querySelector('.filter-chip.active')?.dataset.filter || '全部'); bindDynamic(); showToast(c.checked ? '已记录完成' : '已取消完成'); });
  document.querySelectorAll('[data-filter]').forEach(b => b.onclick = () => { renderSyllabus(b.dataset.filter); bindDynamic(); });
  document.querySelectorAll('[data-quick-filter]').forEach(b => b.onclick = () => { quickReferenceActive = b.dataset.quickFilter; renderQuick(); bindDynamic(); window.scrollTo({top:0, behavior:'smooth'}); });
  document.querySelector('[data-quick-print]')?.addEventListener('click', () => window.print());
  document.querySelectorAll('[data-share-site]').forEach(b => b.onclick = shareSite);
  document.querySelector('[data-mock-start]')?.addEventListener('click', startMockExam);
  document.querySelectorAll('[data-mock-answer]').forEach(b => b.onclick = () => { const question = mockExamState.paper[mockExamState.current]; if (mockExamState.locked[question.id]) return; mockExamState.answers[question.id] = Number(b.dataset.mockAnswer); saveMockExamState(); renderMock(); bindDynamic(); });
  document.querySelector('[data-mock-confirm]')?.addEventListener('click', confirmMockAnswer);
  document.querySelectorAll('[data-mock-move]').forEach(b => b.onclick = () => { mockExamState.current = Number(b.dataset.mockMove); saveMockExamState(); renderMock(); bindDynamic(); window.scrollTo({ top: 0, behavior: 'smooth' }); });
  document.querySelector('[data-mock-next]')?.addEventListener('click', () => { mockExamState.current = findNextMockQuestion(mockExamState.current); saveMockExamState(); renderMock(); bindDynamic(); window.scrollTo({ top: 0, behavior: 'smooth' }); });
  document.querySelector('[data-mock-submit]')?.addEventListener('click', () => { const unanswered = mockExamConfig.questionCount - Object.keys(mockExamState.locked).length; if (confirm(`确认交卷？${unanswered ? `还有 ${unanswered} 题未确认，未答题按错误计分。` : '所有题目均已确认。'}`)) finishMockExam('manual'); });
  document.querySelector('[data-mock-abort]')?.addEventListener('click', () => { if (confirm('退出并作废本次模拟考试？本次成绩不会记录。')) { mockExamState = null; saveMockExamState(); renderMock(); bindDynamic(); } });
  document.querySelector('[data-mock-restart]')?.addEventListener('click', () => { mockExamState = null; saveMockExamState(); startMockExam(); });
  document.querySelector('[data-reset]')?.addEventListener('click', () => { if (confirm('确认清空所有学习进度？')) { progress = {}; courseStates = {}; activeCourseId = null; localStorage.removeItem('roadLawProgress'); localStorage.removeItem('roadLawCourseProgress'); localStorage.removeItem('foundationCourseProgress'); renderAll(); showToast('学习进度已重置'); } });
  document.querySelectorAll('[data-option]').forEach(b => b.onclick = () => { if (!quizState.checked) { quizState.selected = Number(b.dataset.option); renderQuiz(); bindDynamic(); } });
  document.querySelector('[data-check]')?.addEventListener('click', () => { if (quizState.selected === null) return; quizState.checked = true; const ok = quizState.selected === quizQuestions[quizState.index].answer; quizState.results[quizState.index] = ok; if (ok) quizState.score++; renderQuiz(); bindDynamic(); });
  document.querySelector('[data-next]')?.addEventListener('click', () => { if (quizState.index === quizQuestions.length - 1) { showToast(`本轮完成：答对 ${quizState.score} / ${quizQuestions.length} 题`); return; } quizState.index++; quizState.selected = null; quizState.checked = false; renderQuiz(); bindDynamic(); });
  document.querySelector('[data-restart]')?.addEventListener('click', () => { quizState = { index:0, score:0, results:[], selected:null, checked:false }; renderQuiz(); bindDynamic(); });
  document.querySelector('[data-course-library]')?.addEventListener('click', () => { activeCourseId = null; renderCourse(); bindDynamic(); window.scrollTo({top:0,behavior:'smooth'}); });
  document.querySelector('[data-course-home]')?.addEventListener('click', () => { const state = getCourseState(courseCatalog.find(c => c.id === activeCourseId)); state.lesson = -1; saveCourseStates(); renderCourse(); bindDynamic(); window.scrollTo({top:0,behavior:'smooth'}); });
  document.querySelector('[data-course-start]')?.addEventListener('click', () => { const course = courseCatalog.find(c => c.id === activeCourseId), state = getCourseState(course); const firstOpen = course.lessons.findIndex(l => !state.completed[l.id]); state.lesson = firstOpen < 0 ? 0 : firstOpen; saveCourseStates(); renderCourse(); bindDynamic(); window.scrollTo({top:0,behavior:'smooth'}); });
  document.querySelectorAll('[data-course-lesson]').forEach(b => b.onclick = () => { const state = getCourseState(courseCatalog.find(c => c.id === activeCourseId)); state.lesson = Number(b.dataset.courseLesson); saveCourseStates(); renderCourse(); bindDynamic(); window.scrollTo({top:0,behavior:'smooth'}); });
  document.querySelectorAll('[data-course-answer]').forEach(b => b.onclick = () => { const state = getCourseState(courseCatalog.find(c => c.id === activeCourseId)); state.answers[b.dataset.courseAnswer] = Number(b.dataset.answerIndex); saveCourseStates(); renderCourse(); bindDynamic(); });
  document.querySelector('[data-complete-lesson]')?.addEventListener('click', () => { const course = courseCatalog.find(c => c.id === activeCourseId), state = getCourseState(course), lesson = course.lessons[state.lesson]; if (correctInLesson(lesson,state) !== lesson.questions.length) return; state.completed[lesson.id] = true; syncCourseTasks(course,state); const finished = courseCompletedCount(course,state) === course.lessons.length; if (state.lesson < course.lessons.length - 1) state.lesson++; saveCourseStates(); renderAll(); switchView('course'); showToast(finished ? `课程 ${course.moduleNo} 已全部完成` : '本节已完成，继续下一节'); });
}

async function shareSite() {
  const shareData = { title:'路律 · 科目一交通法规学习地图', text:'免费的科目一系统课程、记分矩阵和考前速查清单', url:'https://wstfx.github.io/RoadLaw/' };
  try {
    if (navigator.share) { await navigator.share(shareData); return; }
    await navigator.clipboard.writeText(shareData.url);
    showToast('链接已复制，可以分享给朋友');
  } catch (error) {
    if (error?.name !== 'AbortError') showToast('分享未完成，请复制浏览器地址');
  }
}

function openCourse(courseId) {
  activeCourseId = courseId;
  const state = getCourseState(courseCatalog.find(c => c.id === courseId));
  state.lesson = -1;
  saveCourseStates();
  renderCourse();
  bindDynamic();
  switchView('course');
}

function openSearch() { document.querySelector('.search-overlay').classList.add('open'); document.querySelector('.search-overlay').setAttribute('aria-hidden','false'); setTimeout(() => document.querySelector('#globalSearch').focus(), 50); renderSearch(''); }
function closeSearch() { document.querySelector('.search-overlay').classList.remove('open'); document.querySelector('.search-overlay').setAttribute('aria-hidden','true'); }
function renderSearch(query) {
  const flat = modules.flatMap(m => m.tasks.map((t,i) => ({ module:m, task:t, index:i })));
  const results = query.trim() ? flat.filter(x => `${x.module.title}${x.task.join('')}`.includes(query.trim())).slice(0,12) : flat.slice(0,7);
  document.querySelector('#searchResults').innerHTML = results.length ? results.map(r => `<button class="search-result" data-search-module="${r.module.id}"><span><strong>${r.task[0]}</strong><small>${r.module.title} · ${r.task[1]}</small></span><span>→</span></button>`).join('') : '<div class="search-empty">没有找到对应知识点，试试更短的关键词。</div>';
  document.querySelectorAll('[data-search-module]').forEach(b => b.onclick = () => { closeSearch(); switchView('syllabus'); const el = document.querySelector(`[data-syllabus="${b.dataset.searchModule}"]`); el.classList.add('open'); setTimeout(() => el.scrollIntoView({behavior:'smooth', block:'center'}), 60); });
}
function showToast(msg) { const t = document.querySelector('.toast'); t.textContent = msg; t.classList.add('show'); clearTimeout(window.toastTimer); window.toastTimer = setTimeout(() => t.classList.remove('show'), 1900); }

document.querySelector('#todayDate').textContent = new Intl.DateTimeFormat('zh-CN', {month:'2-digit', day:'2-digit'}).format(new Date());
document.querySelectorAll('.nav-item').forEach(n => n.onclick = () => { if (n.dataset.view === 'course') { activeCourseId = null; renderCourse(); bindDynamic(); } switchView(n.dataset.view); });
document.querySelector('.mobile-menu').onclick = () => document.querySelector('.sidebar').classList.toggle('open');
document.querySelector('.search-trigger').onclick = openSearch;
document.querySelector('.close-search').onclick = closeSearch;
document.querySelector('.search-overlay').onclick = e => { if (e.target.classList.contains('search-overlay')) closeSearch(); };
document.querySelector('#globalSearch').oninput = e => renderSearch(e.target.value);
document.addEventListener('keydown', e => { if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); openSearch(); } if (e.key === 'Escape') closeSearch(); });

renderAll();
