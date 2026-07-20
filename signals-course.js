const signalsCourse = {
  id: 'signals-course', moduleId: 'signals', moduleNo: '02',
  title: '交通信号与道路设施',
  subtitle: '把颜色、形状和动作翻译成路权、义务与风险，而不是只背图。',
  duration: '约 5 小时',
  taskGroups: {
    0: ['system'],
    1: ['priority'],
    2: ['signs'],
    3: ['markings'],
    4: ['gestures', 'lights'],
  },
  outcomes: [
    '完整说出道路交通信号的法定构成和冲突处理顺序',
    '区分圆形灯、方向指示灯、车道灯、闪光灯和铁路道口灯',
    '按功能识别七类交通标志，并理解形状、颜色和辅助标志',
    '区分指示、警告、禁止标线以及常见实线、虚线和路面文字',
    '识别八种交通警察手势及其面向的交通流',
    '掌握转向灯、远近光灯、雾灯和危险报警闪光灯的使用条件',
    '判断“电动车／电瓶车”应当服从机动车还是非机动车信号'
  ],
  sources: [
    ['《道路交通安全法》', '第25—38条及相关通行条款', 'https://www.samr.gov.cn/zw/zfxxgk/fdzdgknr/bgt/art/2023/art_79dc72ea621f4a9b8adec327abf5d0e1.html'],
    ['《道路交通安全法实施条例》', '第29—43、51、57—59、68—70条', 'https://xzfg.moj.gov.cn/front/law/detail?LawID=75'],
    ['GB 5768.2—2022', '道路交通标志', 'https://std.samr.gov.cn/gb/search/gbDetailed?id=DAB6B92C0763FC96E05397BE0A0A5F84'],
    ['GB 5768.3—2025', '道路交通标线；2026-05-01实施', 'https://std.samr.gov.cn/gb/search/gbDetailed?id=40C4523A3FB81115E06397BE0A0AE2D3'],
    ['GB 17761—2024', '电动自行车安全技术规范', 'https://std.samr.gov.cn/gb/search/gbDetailed?id=2B8C8FCCA01EF91FE06397BE0A0A56EE']
  ],
  lessons: [
    {
      id:'system', no:'02.1', title:'先建立系统：什么才是交通信号', time:'30 分钟', task:0,
      summary:'信号不只有红绿灯；先认清法定构成、法律效力和设施边界。',
      content:`
        <section class="lesson-block"><h3>1. 四类法定道路交通信号</h3><p>《道路交通安全法》第25条规定，全国实行统一的道路交通信号。法定构成是：<b>交通信号灯、交通标志、交通标线、交通警察的指挥</b>。护栏、减速带、隔离墩、路灯、反光道钉等可能属于交通安全或道路附属设施，但不因此自动成为上述四类“交通信号”。</p><div class="memory-grid signal-four"><div><strong>灯</strong><small>以灯色／箭头控制</small></div><div><strong>标志</strong><small>竖立或悬挂的图形文字</small></div><div><strong>标线</strong><small>路面线条、箭头、文字、图形</small></div><div><strong>指挥</strong><small>交警手势或器具信号</small></div></div></section>
        <section class="lesson-block"><h3>2. 为什么强调“全国统一”</h3><p>交通参与者跨地区通行，必须能稳定理解同一种信号。信号灯、标志和标线的设置要符合安全、畅通要求和国家标准，并保持<b>清晰、醒目、准确、完好</b>。任何单位和个人不得擅自设置、移动、占用或损毁。</p><div class="exam-callout"><b>题目中的偷换</b><p>“小区物业可自行在城市道路设置禁行标志”“商户可以移动遮挡店门的交通标志”均错误。道路管理需要法定权限和规范设置。</p></div></section>
        <section class="lesson-block"><h3>3. 信号与道路设施怎么区分</h3><div class="course-table"><div class="table-row table-head"><span>对象</span><span>主要功能</span><span>是否属于法定交通信号</span><span>例子</span></div><div class="table-row"><span><b>信号灯</b></span><span>按时间或交通状态分配通行权</span><span>是</span><span>圆形灯、箭头灯、车道灯</span></div><div class="table-row"><span><b>标志／标线</b></span><span>传递警告、禁止、指示、指路信息</span><span>是</span><span>限速标志、停止线</span></div><div class="table-row"><span><b>安全防护设施</b></span><span>隔离、防撞、引导轮廓</span><span>通常不是四类信号本身</span><span>护栏、隔离墩、防撞桶</span></div><div class="table-row"><span><b>道路附属设施</b></span><span>照明、排水、服务等</span><span>视具体对象而定</span><span>路灯、排水设施</span></div></div></section>
        <section class="lesson-block"><h3>4. 新增或调整限制性信号</h3><p>根据通行需要，管理部门应及时增设、调换、更新信号。新增、调换、更新<b>限制性</b>道路交通信号，应提前向社会公告并广泛宣传。限制性信号会减少原本可通行的范围，例如新增禁行、限速或禁止停车要求。</p></section>
        <section class="lesson-block"><h3>5. 信号损毁或不规范怎么办</h3><p>道路或交通设施养护、管理部门应设置警示并及时修复。交管部门发现危及安全而尚未警示的，应采取安全措施、疏导交通并通知责任部门。标志标线不规范、容易造成误认的，主管部门应及时改善。驾驶人发现异常时仍应减速观察，不能把设施缺陷理解成可以冒险通行。</p></section>`,
      questions:[
        {q:'下列哪项不属于道路交通信号的法定四类构成？',o:['交通信号灯','交通标志','交通标线','道路护栏'],a:3,e:'护栏是交通安全设施，但法定交通信号四类是灯、标志、标线和交通警察指挥。'},
        {q:'道路交通信号在全国范围内应当？',o:['由各驾校自行设计','实行统一','仅城市统一','由驾驶人自行理解'],a:1,e:'全国实行统一的道路交通信号，保障跨地区通行时表达一致。'},
        {q:'任何单位和个人是否可以为方便经营而移动交通标志？',o:['可以','经顾客同意即可','不可以擅自移动','夜间可以'],a:2,e:'不得擅自设置、移动、占用或损毁交通信号设施。'},
        {q:'限制性道路交通信号新增或调整时，应当？',o:['保密实施','提前向社会公告并宣传','仅通知驾校','实施后一年再公告'],a:1,e:'涉及公众通行限制，应提前公告并广泛宣传。'},
        {q:'标志标线不规范、易使驾驶人辨认错误时，应由谁及时改善？',o:['任意驾驶人','标志标线主管部门','附近商户','保险公司'],a:1,e:'主管部门负有改善不规范信号的职责。'},
        {q:'信号设施损坏意味着驾驶人可以不顾安全继续通行，对吗？',o:['对','错'],a:1,e:'设施异常不消除安全义务，应减速观察并按现场指挥、其他信号和安全原则通行。'}
      ]
    },
    {
      id:'priority', no:'02.2', title:'信号灯与优先顺序：颜色背后的路权', time:'45 分钟', task:1,
      summary:'掌握七类信号灯、停止位置与容易被“一概而论”的例外。',
      content:`
        <section class="lesson-block"><h3>1. 红、绿、黄的法律含义</h3><div class="traffic-light-rule"><div class="green"><i></i><b>绿灯：准许通行</b><p>转弯车辆仍不得妨碍被放行的直行车辆和行人。</p></div><div class="yellow"><i></i><b>黄灯：警示</b><p>已越过停止线的车辆可以继续通行；未越线不应抢行。</p></div><div class="red"><i></i><b>红灯：禁止通行</b><p>依次停在停止线外；无停止线时停在路口外。</p></div></div><p>绿灯不是“绝对路权”。前方拥堵无法通过路口时，即使绿灯也不得驶入路口形成阻塞。</p></section>
        <section class="lesson-block"><h3>2. 红灯能否右转，不能只背“可以”</h3><p>圆形红灯亮时，右转车辆在<b>没有禁止右转的箭头灯、标志标线或其他限制</b>，且<b>不妨碍被放行车辆和行人</b>的条件下可以通行。若是红色右转箭头、设置禁止右转标志、现场交警禁止，或者右转会妨碍行人车辆，就不能转。</p><div class="formula-card"><span>圆形红灯右转</span><strong>无专门禁止 ＋ 不妨碍被放行交通流 ＝ 可以谨慎右转</strong></div></section>
        <section class="lesson-block"><h3>3. 七类信号灯：外观与道路场景</h3><p>下面是用于建立视觉印象的教学示意。实际设备可能采用横向或竖向排列、不同尺寸和安装方式；判断时仍要看灯色、图形、安装车道及其控制对象。</p><div class="signal-example-gallery">
          <article class="signal-example"><div class="signal-visual" aria-label="竖向机动车红黄绿信号灯示意"><div class="signal-housing vertical"><i class="lamp red dim"></i><i class="lamp amber dim"></i><i class="lamp green lit"></i></div><span class="signal-pole"></span></div><div><small>01 · MOTOR VEHICLE</small><h4>机动车信号灯</h4><p><b>你会看到：</b>通常是无图案的红、黄、绿圆灯，可竖排或横排。</p><p><b>控制谁：</b>面向该信号的机动车交通流。</p><p><b>场景：</b>普通十字路口绿灯亮。车辆可以依次通行，但转弯仍要避让被放行的直行车辆和行人。</p></div></article>
          <article class="signal-example"><div class="signal-visual" aria-label="带自行车图案的非机动车信号灯示意"><div class="signal-housing vertical pictogram-housing"><i class="lamp red dim"><span>骑</span></i><i class="lamp amber dim"><span>骑</span></i><i class="lamp green lit"><span>骑</span></i></div><span class="signal-pole"></span></div><div><small>02 · NON-MOTOR VEHICLE</small><h4>非机动车信号灯</h4><p><b>你会看到：</b>灯面带自行车等非机动车图案，以红黄绿显示。</p><p><b>控制谁：</b>自行车、电动自行车等非机动车。</p><p><b>场景：</b>机动车灯为绿、非机动车灯为红时，电动自行车仍须停车；不能跟随汽车通过。</p></div></article>
          <article class="signal-example"><div class="signal-visual" aria-label="人行横道红绿信号灯示意"><div class="pedestrian-housing"><div class="ped red-person">人</div><div class="ped green-person active">人</div></div><span class="signal-pole"></span></div><div><small>03 · PEDESTRIAN</small><h4>人行横道信号灯</h4><p><b>你会看到：</b>站立红人和行走绿人图案，常设在人行横道两端。</p><p><b>控制谁：</b>进入人行横道的行人。</p><p><b>场景：</b>红灯亮后不得新进入人行横道；已经进入的，可以继续通过或在道路中心线处等候。</p></div></article>
          <article class="signal-example wide"><div class="lane-signal-scene" aria-label="车道上方红色叉形灯和绿色箭头灯示意"><span class="lane-signal closed">×</span><span class="lane-signal open">↓</span><div class="lane-road"><i></i><i></i></div></div><div><small>04 · LANE CONTROL</small><h4>车道信号灯</h4><p><b>你会看到：</b>安装在某条车道正上方的红色叉形灯／红色箭头，或绿色向下箭头。</p><p><b>控制谁：</b>该灯正下方的单条车道，不是整个路口。</p><p><b>场景：</b>隧道、潮汐车道或收费通道上方出现红叉，表示不得驶入或继续占用该车道；绿色箭头表示该车道可按指示通行。</p></div></article>
          <article class="signal-example wide"><div class="direction-signal-scene" aria-label="左转直行右转方向指示灯示意"><span class="arrow-lamp left active">←</span><span class="arrow-lamp up">↑</span><span class="arrow-lamp right active">→</span></div><div><small>05 · DIRECTION</small><h4>方向指示信号灯</h4><p><b>你会看到：</b>灯面出现向左、向上、向右箭头，分别控制左转、直行、右转。</p><p><b>控制谁：</b>对应行驶方向的交通流；一个方向被放行，不代表另外两个方向也被放行。</p><p><b>场景：</b>圆形绿灯亮但左转箭头为红，左转车辆仍须停车；不能用圆形绿灯推翻专门方向限制。</p></div></article>
          <article class="signal-example"><div class="signal-visual flashing-scene" aria-label="持续闪烁黄色警告灯示意"><div class="single-warning"><i class="lamp amber lit flash"></i></div><span class="warning-rays">•••</span></div><div><small>06 · FLASHING WARNING</small><h4>闪光警告信号灯</h4><p><b>你会看到：</b>一个持续闪烁的黄色灯，有时设在危险路口、路段或信号控制异常处。</p><p><b>含义：</b>注意瞭望，确认安全后通过。</p><p><b>不是：</b>绿灯、绝对优先权，也不是要求停车后才能通过的红灯。</p></div></article>
          <article class="signal-example"><div class="signal-visual rail-scene" aria-label="铁路道口两个红灯交替闪烁示意"><div class="crossbuck"><i></i><i></i></div><div class="rail-lamps"><span class="lit"></span><span></span></div><div class="rail-track">║</div></div><div><small>07 · RAILWAY CROSSING</small><h4>道路与铁路平面交叉道口信号灯</h4><p><b>你会看到：</b>两个红灯交替闪烁，或者一个红灯亮，通常配合道口标志、栏杆和警铃。</p><p><b>含义：</b>车辆、行人禁止通行。红灯熄灭后，还应确认栏杆状态和道口安全再通过。</p><p><b>场景：</b>即使未看到列车，也不得绕过已关闭栏杆或闯过闪烁红灯。</p></div></article>
        </div><div class="signal-gallery-note"><b>数清“七类”的方法：</b>机动车灯、非机动车灯是两类，不要像日常口语那样合并成一类；再加人行横道、车道、方向指示、闪光警告、铁路道口，共七类。</div></section>
        <section class="lesson-block"><h3>4. 谁优先：不要背成僵硬口诀</h3><div class="priority-stack"><div><b>交通警察现场指挥</b><small>优先服从即时指挥</small></div><div><b>专门方向／车道信号</b><small>控制具体方向或车道</small></div><div><b>一般信号灯、标志、标线</b><small>共同读取，不互相割裂</small></div><div><b>无信号时的法定让行规则</b><small>确保安全畅通</small></div></div><p>所谓“优先顺序”是理解工具，不代表可以忽略同时存在的限制。例如绿灯放行仍要遵守禁止掉头标志、导向车道标线和行人优先规则。</p></section>
        <section class="lesson-block"><h3>5. 非机动车信号的特殊点</h3><ul class="course-list"><li>转弯的非机动车让直行车辆、行人优先。</li><li>前方路口阻塞时不得进入。</li><li>左转时靠路口中心点<b>右侧</b>转弯，与机动车左转靠中心点左侧不同。</li><li>停止信号时停在停止线外；无停止线停在路口外。</li><li>右转遇同方向前车等候：本车道能够转弯可通行；不能转弯则依次等候，不得挤占。</li></ul></section>`,
      questions:[
        {q:'黄灯亮起时，车辆已经越过停止线，可以？',o:['继续通行','必须立即倒车','原地停车','任意掉头'],a:0,e:'已越过停止线的车辆可以继续通行；未越线车辆不得抢行。'},
        {q:'绿灯亮时，转弯车辆可以不避让直行车辆和行人吗？',o:['可以','不可以'],a:1,e:'绿灯准许通行，但转弯不得妨碍被放行的直行车辆、行人。'},
        {q:'圆形红灯亮时，右转车辆在何种条件下可以通行？',o:['任何情况下','无专门禁止且不妨碍被放行车辆行人','只要鸣笛','跟随前车即可'],a:1,e:'红灯右转是附条件通行，不是绝对权利。'},
        {q:'持续闪烁的黄色警告灯表示？',o:['必须加速','注意瞭望，确认安全后通过','绝对优先','道路完全封闭'],a:1,e:'闪光黄灯是警告信号，核心是观察并确认安全。'},
        {q:'车道上方显示红色叉形灯表示？',o:['本车道禁止通行','本车道可加速','仅摩托车可通行','可以临时停车'],a:0,e:'红色叉形灯或箭头表示禁止本车道车辆通行。'},
        {q:'信号灯绿灯但前方路口已经堵死，正确做法是？',o:['驶入路口等待','停在路口外等候','鸣笛挤入','借对向车道'],a:1,e:'不得驶入阻塞路口，绿灯也不赋予堵塞路口的权利。'}
      ]
    },
    {
      id:'signs', no:'02.3', title:'交通标志：形状、颜色与七大功能', time:'50 分钟', task:2,
      summary:'先判功能，再读图形和文字；辅助标志必须与主标志合并理解。',
      content:`
        <section class="lesson-block"><h3>1. 法定七类交通标志</h3><div class="sign-family"><article><span class="sign-demo warn">!</span><b>警告标志</b><p>警告前方危险或需要注意；不是直接命令，但要求提前防范。</p></article><article><span class="sign-demo ban">40</span><b>禁令标志</b><p>禁止或限制某种交通行为，例如限速、禁停、禁行。</p></article><article><span class="sign-demo order">→</span><b>指示标志</b><p>指示车辆、行人按规定方向、路线或方式通行。</p></article><article><span class="sign-demo guide">地名</span><b>指路标志</b><p>传递方向、地点、距离、道路编号和服务信息。</p></article><article><span class="sign-demo tour">★</span><b>旅游区标志</b><p>提供旅游景点方向、距离等信息。</p></article><article><span class="sign-demo work">人</span><b>道路施工安全标志</b><p>施工区域警告、绕行和作业交通组织。</p></article><article><span class="sign-demo aux">↓</span><b>辅助标志</b><p>说明主标志的时间、范围、距离、车型、方向等，不能脱离主标志单独解释。</p></article></div></section>
        <section class="lesson-block"><h3>2. 形状和颜色是提示，不是唯一答案</h3><div class="course-table"><div class="table-row table-head"><span>常见外观</span><span>通常功能</span><span>典型理解</span><span>重要例外／提醒</span></div><div class="table-row"><span>三角形、黄底黑边</span><span>警告</span><span>前方危险，提前减速观察</span><span>具体以图案和现行标准为准</span></div><div class="table-row"><span>圆形、红边或红斜杠</span><span>禁止／限制</span><span>禁行、限速、禁止某动作</span><span>“停车让行”是特殊八角形</span></div><div class="table-row"><span>圆形、蓝底白图</span><span>指示</span><span>按规定方向或方式通行</span><span>不是“可选建议”</span></div><div class="table-row"><span>矩形／方形</span><span>指路、指示或信息</span><span>结合颜色、图形、文字读</span><span>不可只凭形状断定类别</span></div></div></section>
        <section class="lesson-block"><h3>3. 最常混淆的概念组</h3><div class="confusion-list"><article><b>警告 ≠ 禁止</b><p>“注意落石”提醒风险；“禁止驶入”直接禁止行为。看到危险图形不代表道路必然封闭。</p></article><article><b>指示 ≠ 指路</b><p>“直行”要求按方向通行；“前方某地20km”提供路线信息。</p></article><article><b>停车让行 ≠ 减速让行</b><p>停车让行要求在停止线前停车观察；减速让行要求减速、必要时停车，让优先交通流先行。</p></article><article><b>禁止通行 ≠ 禁止驶入</b><p>禁止通行通常禁止各类交通参与者按标志范围通行；禁止驶入主要针对车辆从该方向进入。</p></article><article><b>禁止停车 ≠ 禁止长时停车</b><p>红叉通常禁止临时和长时停车；红色单斜杠通常禁止长时停车，临时停车还须不妨碍交通并服从其他规则。</p></article><article><b>解除限制 ≠ 新的最高值</b><p>解除限速表示相应路段的该项限制结束，之后继续按新的标志或一般法定规则行驶。</p></article></div></section>
        <section class="lesson-block"><h3>4. 辅助标志是完整规则的一部分</h3><p>主标志下方写有“7:00—9:00”“货车”“前方200m”“学校区域”等辅助信息时，它会限定主标志的<b>时间、车型、范围、距离或原因</b>。读题时要把二者拼成一句完整命令，例如：“每日7—9时，货车禁止驶入”。</p></section>
        <section class="lesson-block"><h3>5. 可变信息标志和临时标志</h3><p>电子可变信息标志可以随交通、天气或事件状态显示限速、车道关闭、拥堵、绕行等内容。施工临时交通组织同样具有实际约束力，不能因为“和平时不一样”就忽略。遇现场交警指挥仍服从现场指挥。</p></section>`,
      questions:[
        {q:'用于提醒前方危险、要求提高警觉的标志属于？',o:['警告标志','禁令标志','指路标志','旅游标志'],a:0,e:'警告标志传递风险信息，提示提前采取防范措施。'},
        {q:'蓝底白色直行箭头通常属于？',o:['指路标志','指示标志','警告标志','辅助标志'],a:1,e:'它要求车辆按指定方向通行，属于指示标志。'},
        {q:'辅助标志可以脱离主标志独立理解吗？',o:['可以','不可以，应与主标志合并读取'],a:1,e:'辅助标志用于限定或说明主标志。'},
        {q:'“停车让行”与“减速让行”最主要的区别是？',o:['颜色完全相同','前者原则上要求停车观察，后者要求减速并视情停车','后者优先通行','没有区别'],a:1,e:'停车让行的动作要求更明确，不能把两者视为同义。'},
        {q:'看到施工临时限速标志，因为平时没有该标志，可以忽略吗？',o:['可以','不可以'],a:1,e:'临时交通组织和可变信息同样应当服从。'},
        {q:'禁止长时停车标志是否等于任何短暂停靠都合法？',o:['是','否，临时停车仍须符合其他停车和安全规则'],a:1,e:'允许某类临时停车不代表可以妨碍通行或违反其他禁止条件。'}
      ]
    },
    {
      id:'markings', no:'02.4', title:'道路标线：把路面当成一张语法图', time:'50 分钟', task:3,
      summary:'颜色只是线索；线型、位置和场景共同决定能否跨越、停车或转向。',
      content:`
        <section class="lesson-block"><h3>1. 三类法定标线</h3><div class="definition-pair three"><article><h4>指示标线</h4><p>指示车行道、行驶方向、路缘、停车位、人行横道等，组织正常通行。</p></article><article><h4>警告标线</h4><p>促使驾驶人了解特殊道路状况，提高警觉并准备防范。</p></article><article><h4>禁止标线</h4><p>告示必须严格遵守的禁止、限制或遵行要求。</p></article></div></section>
        <section class="lesson-block"><h3>2. 白线、黄线、虚线、实线怎样读</h3><ul class="course-list"><li><b>先看位置：</b>道路中心、同向车道之间、车道边缘、路口停止位置的作用不同。</li><li><b>再看线型：</b>虚线通常表示在安全和规则允许时可以跨越；实线通常表示不得跨越或压线。</li><li><b>再看颜色：</b>白色常用于同向车道或道路边缘等；黄色常用于分隔对向交通、禁止停车路缘等。颜色不能脱离位置和线型单独背。</li><li><b>最后看组合：</b>一侧实线一侧虚线时，必须从<b>本车所在一侧</b>读取；虚线一侧在条件允许时可跨越，实线一侧不得跨越。</li></ul>
          <p class="diagram-note">以下均为俯视教学示意。箭头表示车流方向；“可以跨越”始终附带观察、让行、不得妨碍其他车辆等条件。</p>
          <div class="marking-gallery">
            <article class="marking-card"><header><span class="decision allow">有条件可跨</span><b>白色虚线 · 同向车道</b></header><div class="road-scene same-flow" role="img" aria-label="两条同向车道由白色虚线分隔，车辆确认安全后可以变道"><i class="divider white dashed"></i><span class="flow top">→</span><span class="flow bottom">→</span><span class="mini-car car-a">本车</span><span class="move-arrow">↘</span></div><p><b>场景：</b>两条车道都向前。本车打转向灯、观察后方与侧方、确认安全，才可越过虚线变道。</p><small>错误理解：虚线不是“拥有优先权”，也不是可以连续随意穿插。</small></article>
            <article class="marking-card"><header><span class="decision stop">禁止跨压</span><b>白色实线 · 同向分界</b></header><div class="road-scene same-flow" role="img" aria-label="两条同向车道由白色实线分隔，车辆不得压线变道"><i class="divider white solid"></i><span class="flow top">→</span><span class="flow bottom">→</span><span class="mini-car car-b">本车</span><span class="forbid-mark">×</span></div><p><b>场景：</b>临近路口、隧道或需要固定车流路径的位置。即使旁边车道空，也不得压线、跨线变道。</p><small>注意：白色实线若位于道路边缘，功能是标示车行道边缘；仍要结合位置读取。</small></article>
            <article class="marking-card"><header><span class="decision allow">有条件可跨</span><b>黄色虚线 · 对向中心线</b></header><div class="road-scene opposite-flow" role="img" aria-label="对向车流之间为黄色虚线，在安全且规则允许时可以跨越"><i class="divider yellow dashed"></i><span class="flow top">→</span><span class="flow bottom">←</span><span class="mini-car car-a">本车</span><span class="mini-car oncoming">来车</span></div><p><b>场景：</b>中心线两侧方向相反。超车、转弯时只有在视线良好、无对向来车且其他规则允许时才可越线。</p><small>黄色虚线不等于“借对向车道通行”；必须尽快、安全地完成动作。</small></article>
            <article class="marking-card"><header><span class="decision stop">两侧禁跨</span><b>黄色实线／双实线 · 对向中心线</b></header><div class="road-scene opposite-flow double-line" role="img" aria-label="对向车流由黄色双实线分隔，两侧车辆均不得跨越"><i class="divider yellow solid first"></i><i class="divider yellow solid second"></i><span class="flow top">→</span><span class="flow bottom">←</span><span class="mini-car car-b">本车</span><span class="forbid-mark">×</span></div><p><b>场景：</b>禁止双向车辆跨越中心线。前车慢、对向无车，都不能成为越双黄实线超车的理由。</p><small>单黄实线与双黄实线在“不得跨越”这一考点上相同；双线更强调双向隔离。</small></article>
            <article class="marking-card wide"><header><span class="decision mixed">分侧读取</span><b>黄色实线 + 黄色虚线 · 一边能跨、一边不能</b></header><div class="road-scene combo-line" role="img" aria-label="黄色实虚组合中心线，靠虚线一侧在条件允许时可跨越，靠实线一侧禁止跨越"><i class="divider yellow solid combo-solid"></i><i class="divider yellow dashed combo-dash"></i><span class="side-label solid-side">实线侧：禁止 ↗</span><span class="side-label dash-side">虚线侧：安全时可 ↙</span><span class="mini-car combo-top">A车</span><span class="mini-car combo-bottom">B车</span></div><div class="side-answer"><span><b>A车靠实线：</b>不得跨越</span><span><b>B车靠虚线：</b>符合条件时可跨越</span></div><small>解题关键：不要问“这条线能不能跨”，要问“本车贴着的是实线还是虚线”。</small></article>
            <article class="marking-card wide edge-example"><header><span class="decision context">看位置</span><b>同是白色实线：车道分界线 ≠ 车行道边缘线</b></header><div class="edge-compare"><div class="road-scene same-flow"><i class="divider white solid"></i><span class="mini-car center-car">车</span><em>两条行驶车道之间</em></div><div class="road-scene road-edge"><i class="edge-line"></i><span class="mini-car center-car">车</span><em>线外是路肩／道路边缘</em></div></div><p>前者主要限制车道间跨越，后者标出车行道边界。题目若只给“白色实线”却不看它画在哪里，就无法准确判断。</p></article>
          </div>
        </section>
        <section class="lesson-block"><h3>3. 路口常见标线：把车放进场景里</h3><p class="diagram-note">判断顺序：先找车辆行驶方向，再找最先遇到的横向标线，最后看信号、标志、行人和出口是否畅通。</p>
          <div class="intersection-gallery">
            <article class="intersection-card"><div class="intersection-demo stop-demo" role="img" aria-label="车辆在停止线前停车，停止线前方是人行横道"><span class="approach-arrow">↑</span><span class="demo-car">本车</span><i class="stop-line"></i><i class="zebra"></i><span class="safe-label">停在这里</span></div><div><h4>① 停止线：车头停在线外</h4><p>遇红灯、停车让行标志或交警停止指挥时，应在线外停车。不能让车轮、车头压线，更不能把车停在人行横道上。</p><small>图中顺序：本车 → 停止线 → 人行横道 → 路口。</small></div></article>
            <article class="intersection-card"><div class="intersection-demo yield-demo" role="img" aria-label="车辆接近一排白色倒三角形组成的减速让行线"><span class="approach-arrow">↑</span><span class="demo-car">本车</span><i class="yield-teeth">▼ ▼ ▼ ▼</i><span class="cross-traffic">← 优先车流 ←</span></div><div><h4>② 减速让行线：三角“齿尖”朝向来车</h4><p>一排白色倒三角通常配合减速让行标志。驾驶人必须减速观察，让优先通行一方先走；必要时要停车，但它不等于每次都必须完全停车。</p><small>对比：停车让行要求停车观察；减速让行是减速，必要时停车。</small></div></article>
            <article class="intersection-card"><div class="intersection-demo crosswalk-demo" role="img" aria-label="行人正在人行横道上通行，机动车停在人行横道前"><span class="demo-car">本车</span><i class="zebra"></i><span class="pedestrian">🚶</span><span class="safe-label">停车让行</span></div><div><h4>③ 人行横道线：减速，行人通过时停车</h4><p>接近人行横道应减速；遇行人正在通过，应停车让行。不能鸣笛催促、从行人前后抢行，也不能因绿灯就忽视正在通行的行人。</p><small>无交通信号的道路，遇行人横过道路也应避让。</small></div></article>
            <article class="intersection-card"><div class="intersection-demo arrow-demo" role="img" aria-label="三条导向车道分别标有左转、直行和右转箭头"><span class="lane-arrow left">↰</span><span class="lane-arrow straight">↑</span><span class="lane-arrow right">↱</span><i class="lane-sep one"></i><i class="lane-sep two"></i><span class="lane-caption">左转　直行　右转</span></div><div><h4>④ 导向箭头：进实线段前选好车道</h4><p>箭头表示该车道允许的行驶方向。应提前进入所需车道；进入路口导向车道的实线段后，不能为“赶出口”压实线临时变道。</p><small>例：直行车误入仅左转车道，应按车道箭头行驶，不能在停止线前强行并线。</small></div></article>
            <article class="intersection-card"><div class="intersection-demo box-demo" role="img" aria-label="路口黄色网状线前方出口拥堵，车辆停在网状线区域外"><i class="yellow-box"></i><span class="queue">出口拥堵 ■ ■ ■</span><span class="demo-car">本车</span><span class="safe-label">在网格外等</span></div><div><h4>⑤ 黄色网状线：可以通过，不能停在里面</h4><p>即使前方是绿灯，如果出口没有空间容纳本车，也不能驶入网状区域等待。应停在区域外，待出口腾空后一次通过。</p><small>常设于路口、单位出入口、消防通道等需要保持畅通的位置。</small></div></article>
            <article class="intersection-card"><div class="intersection-demo channel-demo" role="img" aria-label="车辆沿导流线两侧规定路径通行，不进入斜纹导流区域"><i class="channel-island"></i><span class="route left-route">↖</span><span class="route right-route">↗</span><span class="forbid-mark">×</span></div><div><h4>⑥ 导流线：斜纹区域不是“空出来的车道”</h4><p>导流线把车流引向规定路径。车辆应沿边界通过，不得压线、越线，不得驶入导流区域停车、排队或临时上下客。</p><small>高速公路匝道口常考：错过出口应继续行驶，不能压导流线突然变道或倒车。</small></div></article>
          </div>
          <div class="exam-callout"><b>一眼区分三条“横线”</b><p><b>粗白横线</b>：停止线，在线外停；<b>一排白色倒三角</b>：减速让行线，减速并让行；<b>多条宽白条</b>：人行横道，给行人通过。三者经常相邻出现，必须分别履行义务。</p></div>
        </section>
        <section class="lesson-block"><h3>4. 停车标线和路缘颜色</h3><p>停车位标线说明允许停车的位置和方式，但仍要看车型、时间、方向等附加规定。路缘黄色实线通常表示禁止停放车辆；黄色虚线通常表示禁止长时停车。不同道路可能结合标志、文字和地方规则管理，必须整体读取。</p></section>
        <section class="lesson-block"><h3>5. 文字、图形和突起路标也是信息</h3><p>路面速度数字、公交专用文字、自行车图案、菱形预告、人行横道预告等都在传递规则或警示。突起路标、轮廓标和反光设施可增强夜间、雨雾条件下的车道边界识别；它们的物理存在不能代替驾驶人减速和观察。</p><div class="exam-callout"><b>2026版本提醒</b><p>现行标线技术标准为GB 5768.3—2025，自2026年5月1日起实施并替代2009版。考试学习应避免继续引用已废止旧标准中的绝对化总结。</p></div></section>`,
      questions:[
        {q:'道路交通标线按功能分为？',o:['红黄绿三类','指示、警告、禁止三类','城市、公路两类','文字、图形两类'],a:1,e:'实施条例规定标线分为指示、警告和禁止标线。'},
        {q:'一侧实线、一侧虚线的中心线，通常怎样跨越？',o:['两侧都可跨越','两侧都不可跨越','虚线一侧在条件允许时可跨越，实线一侧不可','只看车辆大小'],a:2,e:'组合线必须从本车所在一侧读取。'},
        {q:'前方绿灯但路口网状线内已经拥堵，应当？',o:['进入网状线等待','停在区域外等候','鸣笛进入','逆向绕行'],a:1,e:'网状线区域禁止停车等候，且拥堵时不得进入路口。'},
        {q:'停止信号时，车辆应停在哪里？',o:['越过停止线','停止线以外；无停止线停路口外','人行横道上','路口中心'],a:1,e:'不得压占停止线、人行横道或路口。'},
        {q:'黄色虚线路缘通常表示？',o:['禁止长时停车','任何车辆可长期停车','高速车道','人行横道'],a:0,e:'通常用于禁止长时停车，临时停车仍须符合其他条件。'},
        {q:'判断标线含义只看颜色就足够，对吗？',o:['对','错'],a:1,e:'还必须结合线型、位置、组合及标志文字等信息。'}
      ]
    },
    {
      id:'gestures', no:'02.5', title:'交通警察手势：先判断他在指挥谁', time:'45 分钟', task:4,
      summary:'八种手势不靠“左右手口诀”死记，而靠身体朝向和交通流理解。',
      content:`
        <section class="lesson-block"><h3>1. 手势为什么优先</h3><p>现场交警能根据事故、施工、拥堵、信号故障等即时状态分配通行。即使信号灯显示不同，也应服从交警指挥。夜间或低能见度时，交警可使用指挥棒按手势信号指挥，其法律效力不因使用器具而降低。</p></section>
        <section class="lesson-block"><h3>2. 先做三步观察</h3><div class="final-framework"><div><b>① 看身体朝向</b><span>交警面向、背向或侧向哪股交通流</span></div><div><b>② 看主要手臂</b><span>水平伸出、向上、摆动还是向身体前方</span></div><div><b>③ 看摆动方向</b><span>是在放行、要求转弯、减速、变道还是靠边</span></div><div><b>④ 再联系自己位置</b><span>题图常从驾驶人视角拍摄，不要把交警的左右手当成你的左右</span></div></div></section>
        <section class="lesson-block"><h3>3. 全国统一的八种手势</h3><div class="gesture-list"><article><span>停</span><b>停止信号</b><p>左臂向前上方直伸、掌心向前，交警前方车辆停止。</p></article><article><span>直</span><b>直行信号</b><p>双臂形成横向放行通道，允许交警左右方向的直行交通通过。</p></article><article><span>左</span><b>左转弯信号</b><p>右臂向前平伸，左手摆动，允许交警右方车辆左转。</p></article><article><span>待</span><b>左转弯待转信号</b><p>左臂向左下方伸出并摆动，示意交警左方左转车辆进入待转区。</p></article><article><span>右</span><b>右转弯信号</b><p>左臂向前平伸，右手摆动，允许交警左方车辆右转。</p></article><article><span>变</span><b>变道信号</b><p>右臂向前平伸并向左水平摆动，示意面向车辆腾空指定车道、变更车道。</p></article><article><span>慢</span><b>减速慢行信号</b><p>右臂向右前方伸出，掌心向下并向下摆动，示意右方来车减速。</p></article><article><span>靠</span><b>示意车辆靠边停车</b><p>左臂上举停止，右臂向前下方摆动，指令特定车辆靠边停车。</p></article></div></section>
        <section class="lesson-block"><h3>4. 最容易混淆的三组</h3><ul class="course-list"><li><b>停止 vs 靠边停车：</b>停止是控制一股交通流停下；靠边停车通常针对具体车辆，并包含向路边移动后停车的指令。</li><li><b>左转 vs 右转：</b>不要只背哪只手动，先看交警的身体朝向以及哪一侧来车被放行。</li><li><b>变道 vs 减速：</b>变道为水平摆动，引导横向移动；减速为掌心向下的下压摆动。</li></ul></section>
        <section class="lesson-block"><h3>5. 图题策略</h3><p>先在草稿中写“交警的左／右”，再标出车辆位于交警哪一侧；最后匹配动作。不要根据车辆自己的左转灯或画面构图猜答案。若现场手势明确，与固定灯、标志、标线不一致时仍按手势通行。</p></section>`,
      questions:[
        {q:'交通警察现场手势与信号灯不一致时，应当？',o:['按信号灯','按交警指挥','按导航','跟前车'],a:1,e:'现场指挥针对即时路况，应优先服从。'},
        {q:'全国统一的交通警察手势共有多少种？',o:['6种','8种','10种','11种'],a:1,e:'现行统一手势为八种。'},
        {q:'掌心向下反复下压摆动，通常表示？',o:['加速','减速慢行','立即掉头','直行'],a:1,e:'下压动作表达降低速度。'},
        {q:'“停止信号”和“靠边停车信号”完全相同吗？',o:['相同','不同，后者通常指令特定车辆移向路边停车'],a:1,e:'一个控制停止，一个包含靠边移动的具体指令。'},
        {q:'判断交警左右手时，应以谁的左右为准？',o:['驾驶人的左右','交警自身的左右','摄像机的左右','前车的左右'],a:1,e:'动作定义以交警自身方向为基准。'},
        {q:'低能见度下交警使用指挥棒作出规范手势，驾驶人可以忽略吗？',o:['可以','不可以'],a:1,e:'使用器具的交通指挥信号同样属于交警指挥。'}
      ]
    },
    {
      id:'lights', no:'02.6', title:'车辆发出的信号：灯光、喇叭与危险警示', time:'45 分钟', task:4,
      summary:'灯光不是为了“照得最亮”，而是让自己看清并让他人正确预判。',
      content:`
        <section class="lesson-block"><h3>1. 转向灯是一种意图沟通</h3><div class="definition-pair"><article><h4>开启左转向灯</h4><p>左转弯、向左变更车道、准备超车、驶离停车地点、掉头。</p></article><article><h4>开启右转向灯</h4><p>右转弯、向右变更车道、超车完毕驶回原车道、靠路边停车。</p></article></div><p>转向灯只表达意图，不产生优先权。开启转向灯后仍须观察、让行和确认安全，不能强行变道。</p></section>
        <section class="lesson-block"><h3>2. 远光灯与近光灯</h3><ul class="course-list"><li>夜间无路灯、照明不良时开启前照灯、示廓灯和后位灯。</li><li>同方向后车近距离跟车，不得使用远光灯。</li><li>夜间会车在距相对方向来车150米以外改用近光灯；窄路、窄桥与非机动车会车也用近光灯。</li><li>夜间通过急弯、坡路、拱桥、人行横道或无信号灯路口，交替使用远近光灯示意。</li><li>超车时可变换远近光灯或鸣喇叭发出信号，但仍要满足允许超车的全部条件。</li></ul></section>
        <section class="lesson-block"><h3>3. 雾、雨、雪等低能见度灯光</h3><p>夜间或雾、雨、雪、沙尘、冰雹等低能见度情况下，应开启前照灯、示廓灯和后位灯。雾天还应开启<b>雾灯和危险报警闪光灯</b>。不要用远光灯对抗浓雾，强反射会降低辨识效果。</p></section>
        <section class="lesson-block"><h3>4. 危险报警闪光灯什么时候用</h3><p>危险报警闪光灯用于向其他交通参与者提示车辆处于异常或高风险状态，例如故障、事故难以移动、雾天行驶、牵引故障车辆等法定情形。它不具有以下功能：</p><div class="word-traps"><span>不能赋予违法停车权</span><span>不能代替转向灯完成变道</span><span>不能让车辆获得优先通行</span><span>不能代替警告标志和人员撤离</span></div></section>
        <section class="lesson-block"><h3>5. 喇叭与“灯语”</h3><p>机动车驶近急弯、坡道顶端等影响安全视距路段，或超车、遇紧急情况时，应减速慢行并鸣喇叭示意；在禁止鸣喇叭区域或路段不得鸣笛。闪灯、鸣笛都只是警示沟通，不能替代法定让行义务。</p><div class="exam-callout"><b>日常误区</b><p>“开双闪可以临停任何地方”“打了转向灯别人必须让我”“远光越亮越安全”都是错误的权利扩张。</p></div></section>`,
      questions:[
        {q:'超车完毕驶回原车道，应开启？',o:['左转向灯','右转向灯','危险报警闪光灯','雾灯'],a:1,e:'超车完毕向右驶回原车道，应提前开启右转向灯。'},
        {q:'开启转向灯是否意味着自动取得变道优先权？',o:['是','否'],a:1,e:'转向灯表达意图，变道仍不得影响相关车道车辆正常行驶。'},
        {q:'夜间近距离跟随前车时，应使用？',o:['远光灯','近光灯','关闭所有灯','持续双闪'],a:1,e:'近距离跟车使用远光会眩目，依法不得使用。'},
        {q:'雾天行驶除相应照明灯外，还应开启？',o:['雾灯和危险报警闪光灯','仅左转向灯','仅远光灯','车内灯'],a:0,e:'实施条例明确雾天开启雾灯和危险报警闪光灯。'},
        {q:'打开危险报警闪光灯后，可以在任何禁止停车地点停车吗？',o:['可以','不可以'],a:1,e:'双闪只提示危险，不消除停车禁令。'},
        {q:'夜间通过没有信号灯控制的路口，应如何示意？',o:['持续远光','交替使用远近光灯','关闭前照灯','只按喇叭'],a:1,e:'规定要求交替使用远近光灯示意。'}
      ]
    },
    {
      id:'terms', no:'02.7', title:'名词拆解：“电动车”“电瓶车”到底是什么车', time:'45 分钟', task:0,
      summary:'日常叫法不决定法律属性；车辆属性决定信号、车道、证照和头盔义务。',
      content:`
        <section class="lesson-block"><h3>1. “电动车”是日常总称，不是单一法律类别</h3><p>日常说“电动车”，可能指电动自行车、电动轻便摩托车、电动摩托车、电动三轮车、低速四轮车，甚至电动汽车。它们不能统一按非机动车处理。科目一和真实通行中要先确定车辆的<b>法定属性</b>。</p><div class="ev-spectrum"><article><span>非机动车</span><b>电动自行车</b><p>符合GB 17761—2024等要求及本地登记管理。通常走非机动车道、服从非机动车信号。</p></article><article><span>机动车</span><b>电动轻便摩托车／电动摩托车</b><p>属于摩托车，需要相应机动车登记、号牌和驾驶资格，服从机动车规则。</p></article><article><span>视产品与公告属性</span><b>电动三轮／低速四轮</b><p>不能因“速度慢”“老人代步”自动视为非机动车；需查产品类别、公告、登记及地方管理。</p></article><article><span>机动车</span><b>纯电动汽车</b><p>动力来源不改变其汽车和机动车属性。</p></article></div></section>
        <section class="lesson-block"><h3>2. “电瓶车”是什么</h3><p>“电瓶车”是口语或行业旧称，通常强调蓄电池供电，可能指电动自行车，也可能指厂区观光车、搬运车或电动摩托车。<b>法律答题不要把“电瓶车”直接等同于非机动车。</b>应查看合格证、产品名称、车辆铭牌、CCC认证、机动车产品公告、号牌登记类别和地方规定。</p></section>
        <section class="lesson-block"><h3>3. 电动自行车的两个速度不要混</h3><div class="compare-cards"><article><small>产品标准</small><h4>最高设计车速 ≤ 25 km/h</h4><p>GB 17761—2024继续限定具有电驱动功能的电动自行车最高设计车速不超过25km/h，超过时电机应停止动力输出。</p></article><article><small>道路通行规则</small><h4>非机动车道内最高 15 km/h</h4><p>《道路交通安全法》第58条规定，电动自行车在非机动车道内行驶时最高时速不得超过15km/h。</p></article></div><p><b>25</b>是产品设计分类指标，<b>15</b>是特定道路场景下的实际通行限速。题目问什么条件，就回答哪一个。</p></section>
        <section class="lesson-block"><h3>4. 新国标的版本意识</h3><p>GB 17761—2024已于2025年9月1日实施并替代2018版。新标准仍坚持电动自行车的非机动车属性和25km/h设计速度上限，同时强化防篡改、电池与控制器协同、防火阻燃等要求；铅蓄电池车型质量上限调整至63kg，并不再要求所有车型必须配置脚踏骑行装置。因此，“没有脚踏一定不是新国标电动自行车”已是过时判断。</p></section>
        <section class="lesson-block"><h3>5. 属性决定怎样看信号</h3><div class="formula-card"><span>判断路径</span><strong>确认产品类别／登记属性 → 确认应走车道 → 服从对应信号和通行规则</strong></div><ul class="course-list"><li>电动自行车属于非机动车：有非机动车信号时按其通行；未设时按机动车信号表示并遵守非机动车具体规则。</li><li>电动摩托车属于机动车：不得因为外形像电动自行车就走非机动车道或按非机动车信号通行。</li><li>横过机动车道的自行车、电动自行车、三轮车原则上应下车推行，按人行横道或过街设施规则通过。</li></ul></section>
        <section class="lesson-block"><h3>6. 几个同样容易混淆的设施名词</h3><div class="term-grid"><article><b>车行道 vs 车道</b><p>车行道是供车辆通行的道路部分；车道是其中供一列车辆行驶的纵向带状部分。</p></article><article><b>应急车道 vs 紧急停车带</b><p>应急车道连续设置；紧急停车带通常是局部供紧急停车的区域，均不可作为正常行驶或休息停车区域。</p></article><article><b>导流线 vs 导向箭头</b><p>导流线划分、引导交通流路径；导向箭头指示车道行驶方向。</p></article><article><b>安全岛 vs 导流岛</b><p>安全岛主要保护行人分段过街；导流岛组织车辆交通流，两者功能和使用者不同。</p></article></div></section>`,
      questions:[
        {q:'日常称“电动车”的车辆是否一律属于非机动车？',o:['是','否，应确认法定产品和登记属性'],a:1,e:'电动车可能是电动自行车、摩托车、汽车或其他类别。'},
        {q:'“电瓶车”是全国道路交通法中统一、单一的车辆分类吗？',o:['是','不是，属于口语称呼'],a:1,e:'口语名称不能替代产品和登记属性。'},
        {q:'电动自行车最高设计车速25km/h与非机动车道内最高15km/h是否矛盾？',o:['矛盾','不矛盾，前者是产品指标，后者是道路通行规则'],a:1,e:'适用对象和场景不同。'},
        {q:'符合现行GB 17761—2024的电动自行车没有脚踏装置，就一定不合格吗？',o:['一定不合格','不能这样判断，新标准不再要求所有车型必须配脚踏'],a:1,e:'这是新旧标准变化带来的典型过时概念。'},
        {q:'电动摩托车应当按照哪类车辆规则管理？',o:['行人','非机动车','机动车','畜力车'],a:2,e:'电动摩托车属于机动车，需要相应登记和驾驶资格。'},
        {q:'确定一辆“电动车”应服从哪类信号，首要步骤是？',o:['看车身颜色','确认产品类别和登记属性','看驾驶人年龄','听商家口头介绍'],a:1,e:'法律属性决定车道、信号、证照和通行规则。'}
      ]
    },
    {
      id:'scenarios', no:'02.8', title:'综合场景：把多个信号读成一条完整规则', time:'50 分钟', task:1,
      summary:'真实道路从来不只出现一个信号；训练叠加读取和风险优先。',
      content:`
        <section class="lesson-block"><h3>1. 五步语义读取法</h3><div class="final-framework signal-steps"><div><b>① 我是谁</b><span>机动车、非机动车、行人；车型和车道是否匹配</span></div><div><b>② 控制谁</b><span>灯、箭头、标志、标线分别作用于哪方向和对象</span></div><div><b>③ 是否有现场指挥</b><span>有交警时优先服从其即时指挥</span></div><div><b>④ 限制能否叠加</b><span>绿灯不解除禁转标志，箭头灯不解除让行义务</span></div><div><b>⑤ 能否安全完成</b><span>路口拥堵、行人、盲区等仍可能要求停止或让行</span></div></div></section>
        <section class="lesson-block"><h3>2. 场景A：绿灯 + 禁止左转</h3><p>绿灯允许符合条件的交通流通行，但禁止左转标志仍限制左转。驾驶人可以按允许方向通行，不能以“绿灯”为由左转。若现场交警明确指挥左转，则按现场指挥。</p></section>
        <section class="lesson-block"><h3>3. 场景B：右转箭头绿灯 + 人行横道行人</h3><p>箭头绿灯放行右转方向，但转弯车辆仍不得妨碍被放行行人。应减速观察、停车让行，不能把方向放行理解成对行人的绝对优先权。</p></section>
        <section class="lesson-block"><h3>4. 场景C：导向车道错误</h3><p>已经进入直行导向车道并进入实线区，却发现需要左转。正确做法通常是按当前车道方向直行，到后续允许地点重新规划；不得压实线、强行并线或在路口倒车。导航错过路线不是违法变道理由。</p></section>
        <section class="lesson-block"><h3>5. 场景D：闪光黄灯 + 无交警</h3><p>闪光黄灯不分配绝对通行权，车辆行人都应注意瞭望、确认安全。进入路口还要适用标志标线和无信号控制路口的让行规则。</p></section>
        <section class="lesson-block"><h3>6. 场景E：“电瓶车”停在机动车左转车道</h3><p>先判断车辆属性。若为电动自行车，应按非机动车道和非机动车转弯规则通行；若为依法登记的电动摩托车，则按机动车、准驾车型和机动车车道信号通行。仅凭外形或口头称呼无法直接作答。</p></section>
        <section class="lesson-block"><h3>7. 考前检查表</h3><ul class="course-list"><li>能否完整说出四类交通信号、七类信号灯、七类交通标志、三类交通标线和八种交警手势。</li><li>能否解释黄灯、圆形红灯右转、闪光黄灯、车道红叉的条件。</li><li>能否区分警告／禁止、指示／指路、停车让行／减速让行、停止／靠边停车。</li><li>能否解释转向灯不产生优先权、双闪不产生违法停车权。</li><li>能否区分电动自行车、电动摩托车和口语“电动车／电瓶车”。</li></ul><div class="exam-callout"><b>最后原则</b><p>不要问“我能不能抢过去”，而要问“哪个信号控制我、还有哪些限制、是否会妨碍已获放行或优先通行的人”。</p></div></section>`,
      questions:[
        {q:'绿灯亮且路口有禁止左转标志，驾驶人可以左转吗？',o:['可以，绿灯优先','不可以，绿灯不解除禁止左转限制'],a:1,e:'同时存在的信号要叠加读取。'},
        {q:'右转箭头绿灯时遇行人正在通过人行横道，应当？',o:['加速通过','停车让行','鸣笛要求行人让路','占用对向车道'],a:1,e:'转弯车辆不得妨碍被放行的行人。'},
        {q:'进入直行导向车道实线区后发现需要左转，应当？',o:['压实线强行左转','按车道方向行驶后重新规划','倒车回去','停在路口等候'],a:1,e:'路线错误不能成为违反标线和妨碍交通的理由。'},
        {q:'闪光黄灯路口意味着自己享有绝对优先权吗？',o:['是','否，应观察并适用其他让行规则'],a:1,e:'闪光黄灯是警告，不分配绝对路权。'},
        {q:'看到外形像踏板摩托的“电瓶车”，能否直接断定它是非机动车？',o:['能','不能，应确认产品和登记属性'],a:1,e:'日常外形和称呼不是法律分类依据。'},
        {q:'综合读取道路信号时，最先应确认？',o:['车辆价格','自己的交通参与者身份和信号控制对象','导航剩余时间','前车品牌'],a:1,e:'先确定主体和控制对象，才能正确适用信号。'}
      ]
    }
  ]
};
