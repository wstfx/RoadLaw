const violationsCourse = {
  id: 'violations-course', moduleId: 'violations', moduleNo: '06',
  title: '违法、处罚与记分',
  subtitle: '把“行为违法—行政处罚—驾驶证记分—满分教育—刑事责任”分层判断，再攻克分值与比例矩阵。',
  duration: '约 9 小时',
  taskGroups: {
    0: ['liability-layers'],
    1: ['scoring-system'],
    2: ['twelve-points', 'nine-points'],
    3: ['six-points', 'three-points', 'one-point'],
    4: ['full-score-reduction'],
    5: ['speeding-matrix', 'occupancy-overload'],
    6: ['alcohol-driving']
  },
  outcomes: [
    '区分行政处罚、行政强制措施、驾驶证记分与刑事责任，不再把扣车、扣证和扣分混为一谈',
    '掌握12个月周期、12分满分、五档分值、累积与周期清分规则',
    '完整识别现行12分、9分、6分、3分、1分行为及高频易混组',
    '依据满12、24、36分判断学习和科目一、科目二、科目三考试要求',
    '理解学法减分的准入条件、三种方式和每周期最高6分上限',
    '用车型、道路、比例三变量判断超速、超员与货车超载分值',
    '区分饮酒驾驶、醉酒驾驶、营运车辆、再次酒驾和重大事故的不同后果'
  ],
  sources: [
    ['《道路交通安全违法行为记分管理办法》', '公安部令第163号；现行12、9、6、3、1分体系及满分、减免规则', 'https://jtgl.beijing.gov.cn/jgj/jgxx/flfg/gabgz/11186803/index.html'],
    ['《道路交通安全法》', '第87—110条：交通违法处罚、酒驾、伪造牌证、超速与无证驾驶等', 'https://www.samr.gov.cn/zw/zfxxgk/fdzdgknr/bgt/art/2023/art_79dc72ea621f4a9b8adec327abf5d0e1.html'],
    ['《行政处罚法》', '2021年修订文本；行政处罚种类、程序与救济原则', 'https://www.npc.gov.cn/npc/c2/c30834/202101/t20210122_309857.html'],
    ['《中华人民共和国刑法》', '第133条及第133条之一：交通肇事罪与危险驾驶罪', 'https://www.lbca.gov.cn/page120?article_id=208'],
    ['GB 19522—2024', '车辆驾驶人员血液、呼气酒精含量阈值与检验；2024年8月1日起实施', 'https://openstd.samr.gov.cn/bzgk/std/newGbInfo?hcno=7758DED7DB2C251F9F43092150D9EC15']
  ],
  lessons: [
    {
      id:'liability-layers', no:'06.1', title:'一项违法可能有几条后果：处罚、记分与犯罪分层读', time:'50 分钟', task:0,
      summary:'处罚和记分可以同时发生；扣留是临时控制，暂扣、吊销才是对驾驶许可的处罚。',
      content:`
        <section class="lesson-block"><h3>1. 从行为到后果的四层结构</h3><div class="liability-stack"><div><b>交通违法行为</b><span>事实起点：闯灯、酒驾、超速等</span></div><i>可能同时触发</i><div><b>行政处罚</b><span>警告、罚款、暂扣／吊销驾驶证、拘留</span></div><div><b>驾驶证记分</b><span>12、9、6、3、1分；管理教育制度</span></div><div><b>行政强制措施</b><span>扣留车辆／驾驶证、拖移等临时控制</span></div><div><b>刑事责任</b><span>达到犯罪构成时追究，不得用行政处罚替代</span></div></div><p>公安交管部门对驾驶人的交通违法行为，通常在作出行政处罚决定的同时予以记分。因此“罚款了就不扣分”或“扣分就是处罚的全部”都不成立。</p></section>
        <section class="lesson-block"><h3>2. 道路交通安全法的四类处罚</h3><div class="penalty-four"><div><strong>警告</strong><span>申诫性处罚；与情节轻微、未影响通行时的口头警告注意区分</span></div><div><strong>罚款</strong><span>财产罚；罚款决定与收缴原则上分离</span></div><div><strong>暂扣／吊销驾驶证</strong><span>暂时停止或终止驾驶许可</span></div><div><strong>拘留</strong><span>限制人身自由的行政处罚</span></div></div></section>
        <section class="lesson-block"><h3>3. “扣留、暂扣、吊销”不是近义词</h3><div class="status-rail"><article><b>扣留</b><p>行政强制措施，为调查或促使补办手续临时控制证件或车辆；如满12分依法扣留驾驶证。</p></article><i>≠</i><article><b>暂扣</b><p>有确定期限的行政处罚，期限内不得驾驶；期满仍要满足法定发还条件。</p></article><i>≠</i><article><b>吊销</b><p>撤销已取得的驾驶许可，是较重处罚；重新申领须等待法定期限，特定情形终生禁驾。</p></article></div></section>
        <section class="lesson-block"><h3>4. 民事、行政、刑事可以并行</h3><p>违法造成他人损害，可能承担民事赔偿；行政机关仍可处罚并记分；构成危险驾驶罪、交通肇事罪等，还要承担刑事责任。刑事责任不会当然吞并民事责任，行政处罚也不能替代刑罚。</p><details class="decision-case"><summary>醉驾被吊销驾驶证，吊销本身就是全部刑事处罚吗？</summary><p><b>不是。</b>吊销是行政处罚；醉酒驾驶机动车依法还可能构成危险驾驶罪，被追究刑事责任。</p></details></section>`,
      questions:[
        {q:'交通违法受到罚款后，是否还可能同时记分？',o:['可能','不可能'],a:0,e:'行政处罚与累积记分是并行制度。'},
        {q:'下列哪项属于道路交通安全违法行为的处罚种类？',o:['记满12分','吊销机动车驾驶证','扣留车辆','满分学习'],a:1,e:'警告、罚款、暂扣或吊销驾驶证、拘留属于处罚；其余属于管理或强制措施。'},
        {q:'满12分后公安交管部门扣留驾驶证，这里的“扣留”主要属于？',o:['刑罚','行政强制措施','民事责任','驾驶证注销'],a:1,e:'扣留是临时控制证件的强制措施。'},
        {q:'暂扣与吊销的核心区别是？',o:['没有区别','暂扣有期限，吊销终止现有许可','吊销更轻','暂扣只针对车辆'],a:1,e:'暂扣是有期停止，吊销是终止既有驾驶许可。'},
        {q:'违法构成犯罪时，可以仅用行政处罚代替刑事处罚吗？',o:['可以','不可以'],a:1,e:'构成犯罪应依法追究刑事责任。'},
        {q:'交通违法造成他人损害，承担行政责任后是否当然免除民事赔偿？',o:['是','否'],a:1,e:'不同责任可并行承担。'}
      ]
    },
    {
      id:'scoring-system', no:'06.2', title:'记分系统总则：周期、累积、清分和异议', time:'50 分钟', task:1,
      summary:'周期从初次领证日连续计算；未满12分不代表有未缴罚款时也能自动清零。',
      content:`
        <section class="lesson-block"><h3>1. 三个基础数字</h3><div class="score-basics"><div><strong>12个月</strong><span>一个记分周期</span></div><div><strong>12分</strong><span>周期满分</span></div><div><strong>5档</strong><span>12／9／6／3／1分</span></div></div><p>记分周期自初次领取机动车驾驶证之日起连续计算，不是统一按自然年，也不是每年1月1日开始。一次违法按对应分值记分，多起应记分违法累积计算。</p></section>
        <section class="lesson-block"><h3>2. 处罚决定与记分同步</h3><div class="score-flow"><span><b>查明交通违法</b></span><i>→</i><span><b>处罚前告知</b><small>同时告知拟处罚和记分分值</small></span><i>→</i><span><b>作出处罚决定</b><small>决定书载明记分</small></span><i>→</i><span><b>分值累积</b></span></div><p>行政处罚决定被依法变更或撤销的，相应记分也应变更或撤销。驾驶人对违法事实、处罚或记分有异议，应依法申请行政复议、提起行政诉讼或按程序申诉，而不是私下“找人消分”。</p></section>
        <section class="lesson-block"><h3>3. 周期届满怎么清分</h3><div class="clear-decision"><article><b>累积未满12分＋罚款已缴</b><span>本周期记分予以清除</span></article><article><b>累积未满12分＋存在逾期未缴罚款</b><span>对应未缴罚款违法的记分转入下一周期</span></article><article><b>累积达到12分</b><span>进入满分学习、考试，不是等周期届满自动清零</span></article></div></section>
        <section class="lesson-block"><h3>4. 处理多车违法的边界</h3><p>驾驶人可以一次处理同一辆机动车的多起违法，分值累积。累积未满12分时，可以继续处理其驾驶的其他机动车违法记录；累积满12分后，不得再处理其他机动车的违法记录。</p><div class="exam-callout"><b>警告与记分</b><p>交通违法情节轻微，依法给予警告处罚的，免予记分。注意这不等于所有“警告”都可由驾驶人自行认定，须有依法作出的处理。</p></div></section>`,
      questions:[
        {q:'机动车驾驶证记分周期从何时开始连续计算？',o:['每年1月1日','初次领取驾驶证之日','每次换证之日','第一次违法之日'],a:1,e:'周期起点是初次领证日。'},
        {q:'现行一次记分档位不包括？',o:['12分','9分','2分','1分'],a:2,e:'现行档位为12、9、6、3、1分。'},
        {q:'一个周期累积10分，但一项罚款逾期未缴，周期届满是否全部清零？',o:['是','否，对应记分转入下一周期'],a:1,e:'未缴罚款对应违法记分不清除。'},
        {q:'行政处罚决定被依法撤销，相应记分应当？',o:['保持不变','一并撤销','加倍','转下一周期'],a:1,e:'记分随处罚决定依法变更或撤销。'},
        {q:'累积满12分后，还可继续处理其他机动车的违法记录吗？',o:['可以','不可以'],a:1,e:'满12分后不得再处理其他机动车违法。'},
        {q:'交通违法依法仅给予警告处罚时，记分如何处理？',o:['仍记1分','仍记3分','免予记分','统一记6分'],a:2,e:'第163号令规定给予警告处罚的免予记分。'}
      ]
    },
    {
      id:'twelve-points', no:'06.3', title:'一次记12分：七类最高风险行为', time:'55 分钟', task:2,
      summary:'12分共七类，核心是酒驾、较重逃逸、假牌套牌、严重超员超速、高快倒逆掉和卖分。',
      content:`
        <section class="lesson-block"><h3>1. 七类12分完整清单</h3><div class="points-catalog p12"><article><b>酒</b><span>饮酒后驾驶机动车</span></article><article><b>逃</b><span>造成致人轻伤以上或死亡事故后逃逸，尚不构成犯罪</span></article><article><b>假／套</b><span>使用伪造、变造的号牌、行驶证、驾驶证、校车标牌，或使用其他机动车号牌、行驶证</span></article><article><b>严重超员</b><span>校车、公路／旅游客运≥20%；其他载客汽车≥100%</span></article><article><b>严重超速</b><span>重点车辆在高速／快速路≥20%；其他机动车在高速／快速路≥50%</span></article><article><b>高快倒逆掉</b><span>高速／城市快速路倒车、逆行、穿越中央分隔带掉头</span></article><article><b>卖分</b><span>代替实际驾驶人接受处罚和记分并牟取经济利益</span></article></div></section>
        <section class="lesson-block"><h3>2. 逃逸分值看事故后果</h3><div class="escape-scale"><div><strong>轻微伤／财产损失</strong><span>逃逸尚不构成犯罪：6分</span></div><i>后果升级</i><div><strong>轻伤以上／死亡</strong><span>逃逸尚不构成犯罪：12分</span></div><i>构成犯罪</i><div><strong>刑事责任</strong><span>不只讨论记分；吊销且终生不得重新取得驾驶证</span></div></div><p>题目会利用“轻微伤”和“轻伤”一字之差。轻微伤或财损对应6分；轻伤以上或死亡且尚不构成犯罪对应12分。</p></section>
        <section class="lesson-block"><h3>3. 伪造与套用的边界</h3><ul class="course-list"><li><b>12分：</b>伪造／变造或使用伪造／变造的号牌、行驶证、驾驶证、校车标牌；使用他车号牌、行驶证。</li><li><b>9分：</b>未悬挂号牌，或故意遮挡、污损号牌。</li><li><b>3分：</b>号牌存在但未按规定安装。</li><li>登记证书、检验标志、保险标志等违法也有行政处罚，但记分清单须严格按第163号令具体列项作答。</li></ul></section>
        <section class="lesson-block"><h3>4. 买分与卖分都不是“帮忙”</h3><p>代替实际驾驶人接受处罚和记分并牟利，一次记12分，还可被处违法所得三倍以下罚款（最高5万元）。请他人代扣并支付利益的一方，也可被处所支付利益三倍以下、最高5万元罚款，原违法仍依法处罚。</p><details class="decision-case"><summary>在高速公路违法停车属于12分吗？</summary><p><b>不是，记9分。</b>高速／快速路倒车、逆行或穿越中央分隔带掉头才属于该组12分。</p></details></section>`,
      questions:[
        {q:'饮酒后驾驶机动车一次记多少分？',o:['6分','9分','12分','不记分'],a:2,e:'饮酒驾驶一次记12分，并另受行政处罚。'},
        {q:'造成致人轻伤以上事故后逃逸，尚不构成犯罪，一次记？',o:['3分','6分','9分','12分'],a:3,e:'轻伤以上或死亡事故逃逸尚不构罪记12分。'},
        {q:'驾驶机动车在高速公路逆行，一次记？',o:['6分','9分','12分','3分'],a:2,e:'高速或城市快速路倒车、逆行、穿越分隔带掉头记12分。'},
        {q:'故意遮挡机动车号牌一次记？',o:['3分','6分','9分','12分'],a:2,e:'遮挡、污损或未悬挂号牌记9分，不是12分。'},
        {q:'使用其他机动车号牌一次记？',o:['3分','6分','9分','12分'],a:3,e:'套用他车号牌属于12分行为。'},
        {q:'代替实际驾驶人接受处罚记分并牟利，一次记？',o:['1分','3分','6分','12分'],a:3,e:'卖分牟利一次记12分，并有额外罚款责任。'}
      ]
    },
    {
      id:'nine-points', no:'06.4', title:'一次记9分：牌照、车型、高快停车和重点疲劳驾驶', time:'45 分钟', task:2,
      summary:'9分共七类，重点抓“7座50%—100%”“重点车普通路超速50%”“高速违法停车”。',
      content:`
        <section class="lesson-block"><h3>1. 七类9分完整清单</h3><div class="points-catalog p9"><article><b>7座超员</b><span>7座以上载客汽车超员≥50%且＜100%</span></article><article><b>重点车超速</b><span>校车、中型以上客货车、危险品车在高速／快速路以外道路超速≥50%</span></article><article><b>高快停车</b><span>高速公路或城市快速路违法停车</span></article><article><b>无牌遮污</b><span>未悬挂号牌或故意遮挡、污损号牌</span></article><article><b>准驾不符</b><span>驾驶与驾驶证准驾车型不符的机动车</span></article><article><b>无校车资格</b><span>未取得校车驾驶资格驾驶校车</span></article><article><b>重点疲劳</b><span>连续驾驶中型以上载客汽车、危险品车超过4小时，休息少于20分钟</span></article></div></section>
        <section class="lesson-block"><h3>2. 同一关键词，分值会因场景变化</h3><div class="confusion-lanes"><div><b>高速／快速路违法停车</b><strong>9分</strong><span>停在不允许停车的位置</span></div><div><b>高速／快速路违法占用应急车道行驶</b><strong>6分</strong><span>“行驶”而非停车</span></div><div><b>高速／快速路不按规定车道行驶</b><strong>3分</strong><span>车道选择违法</span></div></div></section>
        <section class="lesson-block"><h3>3. 号牌行为的三级阶梯</h3><div class="plate-stair"><div><strong>12</strong><span>伪造、变造、套牌</span></div><div><strong>9</strong><span>未悬挂、故意遮挡或污损</span></div><div><strong>3</strong><span>不按规定安装</span></div></div><p>“车上有牌但位置、方式不合规”通常是3分；“故意遮挡”强调主观故意和识别受阻，是9分；使用假牌或他车号牌则升到12分。</p></section>
        <section class="lesson-block"><h3>4. 疲劳驾驶看车辆类型</h3><p>连续驾驶中型以上载客汽车、危险物品运输车辆超过4小时未休息或休息不足20分钟，记9分；连续驾驶载货汽车满足相同时间条件，记3分。题目中的车辆类型决定分值。</p></section>`,
      questions:[
        {q:'在高速公路违法停车，一次记？',o:['3分','6分','9分','12分'],a:2,e:'高速或城市快速路违法停车记9分。'},
        {q:'驾驶未悬挂号牌的机动车上路，一次记？',o:['3分','6分','9分','12分'],a:2,e:'未悬挂号牌记9分。'},
        {q:'驾驶与准驾车型不符的机动车，一次记？',o:['3分','6分','9分','12分'],a:2,e:'准驾车型不符记9分。'},
        {q:'未取得校车驾驶资格驾驶校车，一次记？',o:['6分','9分','12分','不记分'],a:1,e:'该行为列入9分。'},
        {q:'连续驾驶危险品运输车超过4小时，休息不足20分钟，一次记？',o:['3分','6分','9分','12分'],a:2,e:'危险品运输车该类疲劳驾驶记9分。'},
        {q:'高速公路违法占用应急车道行驶与违法停车分别记？',o:['均9分','6分与9分','9分与6分','均6分'],a:1,e:'应急车道行驶6分，高快违法停车9分。'}
      ]
    },
    {
      id:'six-points', no:'06.5', title:'一次记6分：闯灯、应急车道与中度比例违法', time:'55 分钟', task:3,
      summary:'6分共十一类；超员超速是矩阵题，其余以信号、证件状态、逃逸和危险运输为主。',
      content:`
        <section class="lesson-block"><h3>1. 十一类6分行为</h3><div class="compact-list"><span>校车／公路旅游客运超员＜20%</span><span>7座以上载客车超员≥20%＜50%</span><span>其他载客车超员≥50%＜100%</span><span>重点车辆特定超速档</span><span>其他机动车特定超速档</span><span>货车超载≥50%</span><span>危险物品未按指定时、路、速或未警示防护</span><span>超限不可解体物品未按指定要求行驶／警示</span><span>危化品车未经批准进限行区</span><span>不按交通信号灯通行</span><span>驾驶证暂扣或扣留期间驾驶</span><span>轻微伤／财损事故逃逸未构罪</span><span>高快违法占用应急车道行驶</span></div><p>条文实际按十一项列举，其中部分项目包含多个并列场景。学习时按“比例类”和“非比例类”拆开更稳。</p></section>
        <section class="lesson-block"><h3>2. 三个最常考的独立6分点</h3><div class="score-triad"><div><b>闯红灯等</b><strong>不按交通信号灯指示通行</strong></div><div><b>应急车道</b><strong>高速／快速路违法占用应急车道行驶</strong></div><div><b>证件状态</b><strong>驾驶证被暂扣或扣留期间仍驾驶</strong></div></div></section>
        <section class="lesson-block"><h3>3. 逃逸6分与12分再次对照</h3><div class="binary-choice"><article><small>6分</small><h4>轻微伤或财产损失</h4><p>事故后逃逸，尚不构成犯罪。</p></article><article><small>12分</small><h4>轻伤以上或死亡</h4><p>事故后逃逸，尚不构成犯罪。</p></article></div><p>一旦题干明确“构成犯罪”，重点转向刑事责任、吊销和终生禁驾，不应只套记分题。</p></section>
        <section class="lesson-block"><h3>4. 危险运输的共同判断式</h3><div class="formula-card"><span>6分危险运输</span><strong>特殊危险／超限货物 ＋ 未按指定时间、路线、速度通行，或未悬挂警示、采取安全措施</strong></div><p>运输危险化学品未经批准进入限制通行区域，也单列为6分。普通货物长度、宽度、高度超过规定则是1分，不要仅凭“货物不合规”统一选6分。</p></section>`,
      questions:[
        {q:'驾驶机动车不按交通信号灯指示通行，一次记？',o:['1分','3分','6分','9分'],a:2,e:'不按交通信号灯指示通行记6分。'},
        {q:'在高速公路违法占用应急车道行驶，一次记？',o:['3分','6分','9分','12分'],a:1,e:'违法占用应急车道行驶记6分。'},
        {q:'驾驶证被暂扣期间驾驶机动车，一次记？',o:['3分','6分','9分','12分'],a:1,e:'暂扣或扣留期间驾驶记6分，并另有行政处罚。'},
        {q:'造成仅有财产损失的事故后逃逸，尚不构罪，一次记？',o:['3分','6分','9分','12分'],a:1,e:'轻微伤或财损事故逃逸未构罪记6分。'},
        {q:'驾驶载货汽车载物超过最大允许总质量50%以上，一次记？',o:['1分','3分','6分','9分'],a:2,e:'货车超载50%以上记6分。'},
        {q:'普通货物长度超过规定，一律记6分吗？',o:['是','否，通常是1分项目'],a:1,e:'普通载货长度、宽度、高度超过规定列入1分。'}
      ]
    },
    {
      id:'three-points', no:'06.6', title:'一次记3分：日常通行与安全操作高频组', time:'55 分钟', task:3,
      summary:'3分共十五类，手机、人行横道、排队穿插、故障警示和普通道路逆行都在这里。',
      content:`
        <section class="lesson-block"><h3>1. 十五类3分行为分组记</h3><div class="point-groups"><article><b>比例类</b><span>一般载客车超员20%—50%；普通机动车普通路超速20%—50%；货车超载30%—50%或违规载客</span></article><article><b>高快秩序</b><span>高速／快速路不按规定车道；高速低于最低时速</span></article><article><b>通行规则</b><span>不按规定超车、让行；普通路逆行；排队时借道／占对向／穿插</span></article><article><b>注意义务</b><span>手持电话；人行横道未减速停车避让；不避让校车</span></article><article><b>车辆与现场</b><span>号牌未按规定安装；故障事故停车未用灯光或警告标志</span></article><article><b>重点运营安全</b><span>特定重点车辆逾期未检；校车出发前未检查或带隐患上路；货车连续驾驶超4小时休息不足20分钟</span></article></div></section>
        <section class="lesson-block"><h3>2. 手机题看“妨碍安全驾驶”</h3><p>驾驶机动车有拨打、接听<b>手持电话</b>等妨碍安全驾驶行为，一次记3分。法规表述不只覆盖通话，也以是否妨碍安全驾驶判断；停车等红灯仍处于道路驾驶过程，不应借机手持操作。</p></section>
        <section class="lesson-block"><h3>3. 逆行分值由道路等级决定</h3><div class="road-level-choice"><div><b>高速／城市快速路逆行</b><strong>12分</strong></div><div><b>高速／城市快速路以外道路逆行</b><strong>3分</strong></div></div><p>同样，“高速违法停车9分”“高速违法占应急车道行驶6分”“高速不按规定车道3分”，一定要把动作读完整。</p></section>
        <section class="lesson-block"><h3>4. 故障停车不是打开双闪就结束</h3><p>道路上车辆发生故障或事故停车后，不按规定使用灯光<b>或者</b>设置警告标志，记3分。真实处置还包括将车辆移至不妨碍交通处、人员安全撤离和报警；高速公路警告标志应设在来车方向150米以外。</p><details class="decision-case"><summary>普通道路逆行与高速逆行分别记多少分？</summary><p><b>3分和12分。</b>道路等级改变了行为风险和记分档位。</p></details></section>`,
      questions:[
        {q:'驾驶时拨打、接听手持电话，一次记？',o:['1分','3分','6分','9分'],a:1,e:'妨碍安全驾驶的手持电话行为记3分。'},
        {q:'行经人行横道不按规定避让行人，一次记？',o:['1分','3分','6分','12分'],a:1,e:'未按规定减速、停车、避让行人记3分。'},
        {q:'在高速、快速路以外道路逆行，一次记？',o:['1分','3分','6分','12分'],a:1,e:'普通道路逆行记3分。'},
        {q:'机动车号牌未按规定安装，一次记？',o:['1分','3分','6分','9分'],a:1,e:'不按规定安装号牌记3分。'},
        {q:'车辆故障停车后未按规定设置警告标志，一次记？',o:['1分','3分','6分','9分'],a:1,e:'故障、事故停车未按规定警示记3分。'},
        {q:'高速公路行驶低于规定最低时速，一次记？',o:['1分','3分','6分','9分'],a:1,e:'低于高速最低时速列为3分。'}
      ]
    },
    {
      id:'one-point', no:'06.7', title:'一次记1分：基础操作与车辆合规底线', time:'45 分钟', task:3,
      summary:'1分不等于不重要；灯光、安全带、头盔、禁令标线和逾期检验都直接影响安全。',
      content:`
        <section class="lesson-block"><h3>1. 十类1分完整清单</h3><div class="points-catalog p1"><article><b>重点车普通路轻度超速</b><span>超速≥10%＜20%</span></article><article><b>会倒掉</b><span>不按规定会车；普通路不按规定倒车、掉头</span></article><article><b>灯光</b><span>不按规定使用灯光</span></article><article><b>禁令标线</b><span>违反禁令标志、禁止标线</span></article><article><b>货物外廓</b><span>载货长度、宽度、高度超过规定</span></article><article><b>货车轻度超载</b><span>超过最大允许总质量但＜30%</span></article><article><b>一般车逾期未检</b><span>重点运营车辆以外机动车未定期检验上路</span></article><article><b>货车非法改装</b><span>驾驶擅改登记结构构造特征的载货汽车上路</span></article><article><b>安全带</b><span>驾驶人在道路行驶时未按规定系安全带</span></article><article><b>摩托头盔</b><span>驾驶摩托车不戴安全头盔</span></article></div></section>
        <section class="lesson-block"><h3>2. 标志、标线与信号灯的分值差</h3><div class="signal-score"><div><b>违反禁令标志／禁止标线</b><strong>1分</strong><span>如压禁止标线、驶入禁行方向</span></div><div><b>不按交通信号灯指示</b><strong>6分</strong><span>如闯红灯</span></div></div><p>“交通信号”是上位总称，考试必须识别题目具体说的是信号灯、标志还是标线。</p></section>
        <section class="lesson-block"><h3>3. 安全带题精确读主体</h3><p>记分办法明确列举的是<b>机动车驾驶人</b>在道路上行驶时未按规定系安全带，记1分。乘车人不系安全带同样违法并有安全风险，但对驾驶证记分题应按列举主体判断。</p></section>
        <section class="lesson-block"><h3>4. 逾期检验也分车型</h3><div class="binary-choice"><article><small>3分</small><h4>重点运营车辆</h4><p>公路客运、旅游客运、危险物品运输车辆逾期未检上路。</p></article><article><small>1分</small><h4>其他机动车</h4><p>未按规定定期安全技术检验上路。</p></article></div></section>`,
      questions:[
        {q:'驾驶机动车违反禁止标线指示，一次记？',o:['1分','3分','6分','9分'],a:0,e:'违反禁令标志、禁止标线记1分。'},
        {q:'驾驶人未按规定系安全带，一次记？',o:['1分','3分','6分','不记分'],a:0,e:'驾驶人未系安全带记1分。'},
        {q:'驾驶摩托车不戴安全头盔，一次记？',o:['1分','3分','6分','9分'],a:0,e:'摩托车驾驶人不戴安全头盔记1分。'},
        {q:'驾驶机动车不按规定使用灯光，一次记？',o:['1分','3分','6分','9分'],a:0,e:'不按规定使用灯光记1分。'},
        {q:'一般机动车逾期未检仍上路，一次记？',o:['1分','3分','6分','12分'],a:0,e:'重点运营车辆以外机动车该行为记1分。'},
        {q:'闯红灯与压禁止标线通常分别记？',o:['均1分','6分与1分','1分与6分','均6分'],a:1,e:'不按信号灯6分，违反禁止标线1分。'}
      ]
    },
    {
      id:'full-score-reduction', no:'06.8', title:'满分处理与学法减分：不是“花钱消分”', time:'60 分钟', task:4,
      summary:'满12分扣证学习考试；24和36分逐级增加技能考试；学法减分只在未满12分时申请。',
      content:`
        <section class="lesson-block"><h3>1. 满分后的基本路径</h3><div class="fullscore-path"><span><b>周期累积满12分</b><small>公安交管扣留驾驶证并通知</small></span><i>→</i><span><b>参加满分学习</b><small>一般驾驶人7天</small></span><i>→</i><span><b>科目一道路交通安全考试</b><small>不合格10日后重新预约</small></span><i>→</i><span><b>考试合格＋罚款已缴</b><small>清分并依法发还驾驶证</small></span></div><p>A1、A2、A3、B1、B2驾驶人首次满分学习为30天；一般驾驶人现场＋网络累计不少于5天，其中现场不少于2天。</p></section>
        <section class="lesson-block"><h3>2. 12、24、36分对应考试阶梯</h3><div class="exam-ladder"><div><strong>满12分</strong><span>法律法规和相关知识考试（通常理解为科目一）</span></div><div><strong>二次满12或累计24＜36</strong><span>科目一合格后，再考道路驾驶技能（科目三道路）</span></div><div><strong>三次以上满12或累计≥36</strong><span>科目一合格后，再考场地驾驶技能和道路驾驶技能（科目二＋科目三道路）</span></div></div><p>每增加一次满分教育或累积每增加12分，普通驾驶人的学习时间增加7天，每次最多60天；大中型客货车驾驶人每次增加30天，每次最多120天。</p></section>
        <section class="lesson-block"><h3>3. 学法减分的三种方式</h3><div class="reduction-methods"><div><b>网上学习</b><strong>3日内累计30分钟＋考试合格</strong><span>一次减1分</span></div><div><b>现场学习</b><strong>满1小时＋考试合格</strong><span>一次减2分</span></div><div><b>交通安全公益活动</b><strong>满1小时为一次</strong><span>一次减1分</span></div></div><p>前提是交通违法记录已处理、现有累积记分<b>未满12分</b>；一个周期累计最高减6分。它是在现有分值中扣减，不是给驾驶证预存“18分”。</p></section>
        <section class="lesson-block"><h3>4. 哪些情形不受理学法减分</h3><ul class="course-list"><li>本周期或上一周期有两次以上满分教育记录。</li><li>最近3周期内因事故逃逸、饮酒驾驶、假牌假证／套牌套证、买分卖分受过处罚。</li><li>驾驶证在实习期、逾期未审验，或被扣留、暂扣期间。</li><li>名下有逾期未检或应注销未注销的机动车。</li><li>最近3周期在学法减分、满分教育或审验教育中有弄虚作假、冒名顶替记录。</li></ul><details class="decision-case"><summary>当前已经12分，能先学法减6分避免满分教育吗？</summary><p><b>不能。</b>学法减分要求处理记录后累积记分未满12分；满12分应进入满分处理。</p></details></section>`,
      questions:[
        {q:'一个记分周期累积满12分，公安交管部门应当？',o:['自动清零','扣留驾驶证并通知满分学习考试','直接终生禁驾','仅罚款'],a:1,e:'满12分进入扣证、学习和考试程序。'},
        {q:'一般驾驶人首次满12分应参加几天学习？',o:['3天','5天','7天','30天'],a:2,e:'一般驾驶人为7天；大中型客货车驾驶人为30天。'},
        {q:'累计24分未满36分，科目一合格后还应参加？',o:['无需考试','道路驾驶技能考试','仅场地考试','安全文明常识'],a:1,e:'该档还需道路驾驶技能考试。'},
        {q:'累计36分以上，除科目一外还应参加？',o:['仅科目二','仅科目三','科目二和科目三道路驾驶技能','无需技能考试'],a:2,e:'36分以上进入场地和道路技能两项考试。'},
        {q:'一个记分周期学法减分最高可减？',o:['3分','6分','9分','12分'],a:1,e:'每周期累计最高扣减6分。'},
        {q:'累积已满12分是否可申请学法减分？',o:['可以','不可以'],a:1,e:'准入条件是当前累积记分未满12分。'}
      ]
    },
    {
      id:'speeding-matrix', no:'06.9', title:'超速矩阵：先分车辆，再分道路，最后看比例', time:'60 分钟', task:5,
      summary:'重点车辆标准更严；普通机动车普通路超速50%以上为6分，高快路则升到12分。',
      content:`
        <section class="lesson-block"><h3>1. 三步判断器</h3><div class="matrix-steps"><div><strong>① 车辆</strong><span>重点车辆还是其他机动车</span></div><i>→</i><div><strong>② 道路</strong><span>高速／城市快速路还是其他道路</span></div><i>→</i><div><strong>③ 比例</strong><span>10%、20%、50%边界</span></div></div><p><b>重点车辆</b>指校车、中型以上载客载货汽车、危险物品运输车辆。区间使用“以上”包含本数、“未达到”不含本数。</p></section>
        <section class="lesson-block"><h3>2. 现行超速记分总表</h3><div class="points-speed-matrix"><div class="matrix-head"><b>车辆／道路</b><b>10%—20%</b><b>20%—50%</b><b>≥50%</b></div><div><strong>重点车·高速／快速路</strong><span>6分</span><span class="hot">12分（≥20%）</span><span class="hot">12分</span></div><div><strong>重点车·其他道路</strong><span>1分</span><span>6分</span><span class="warm">9分</span></div><div><strong>其他车·高速／快速路</strong><span>未列记分</span><span>6分</span><span class="hot">12分</span></div><div><strong>其他车·其他道路</strong><span>未列记分</span><span>3分</span><span>6分</span></div></div><p>重点车辆在高速／快速路只要超速但未达到20%即记6分，达到20%就升为12分。“未列记分”仅表示第163号令未在相应区间列出记分，不等于行为合法或免于处罚。</p></section>
        <section class="lesson-block"><h3>3. 边界数字怎么归档</h3><div class="boundary-examples"><div><b>恰好20%</b><span>进入“20%以上”档，不属于“未达到20%”</span></div><div><b>恰好50%</b><span>进入“50%以上”档，不属于“未达到50%”</span></div><div><b>超过50%</b><span>道路交通安全法还规定200—2000元罚款，并可并处吊销驾驶证</span></div></div></section>
        <section class="lesson-block"><h3>4. 四个C1常见例子</h3><ul class="course-list"><li>普通小客车在普通道路超速25%：3分。</li><li>普通小客车在高速公路超速25%：6分。</li><li>普通小客车在普通道路超速50%：6分。</li><li>普通小客车在高速公路超速50%：12分。</li></ul><details class="decision-case"><summary>普通小客车在普通道路超速55%，是否因为不在高速就不记分？</summary><p><b>仍记6分。</b>同一行为还可能受到道路交通安全法规定的罚款，并可并处吊销驾驶证。</p></details></section>`,
      questions:[
        {q:'普通小客车在普通道路超速25%，一次记？',o:['1分','3分','6分','12分'],a:1,e:'其他机动车普通路超速20%—50%记3分。'},
        {q:'普通小客车在高速公路超速25%，一次记？',o:['3分','6分','9分','12分'],a:1,e:'其他机动车高快路超速20%—50%记6分。'},
        {q:'普通小客车在高速公路超速50%，一次记？',o:['3分','6分','9分','12分'],a:3,e:'达到50%进入12分档。'},
        {q:'重点车辆在普通道路超速15%，一次记？',o:['1分','3分','6分','9分'],a:0,e:'重点车普通路超速10%—20%记1分。'},
        {q:'重点车辆在普通道路超速50%，一次记？',o:['3分','6分','9分','12分'],a:2,e:'重点车普通路达到50%记9分。'},
        {q:'重点车辆在高速公路超速15%，一次记？',o:['1分','3分','6分','12分'],a:2,e:'重点车辆在高速、快速路超速未达到20%记6分。'}
      ]
    },
    {
      id:'occupancy-overload', no:'06.10', title:'超员与超载矩阵：人数、座位和总质量分别算', time:'60 分钟', task:5,
      summary:'载客看核定人数，货车看最大允许总质量；儿童同样按人数占用核载名额。',
      content:`
        <section class="lesson-block"><h3>1. 先区分两个计算对象</h3><div class="definition-pair"><article><h4>超员</h4><p>载客人数超过行驶证核定人数。儿童也按人数计算，不因怀抱或身材小而不计入。</p><small>超出比例＝超出人数 ÷ 核定人数</small></article><article><h4>货车超载</h4><p>实际总质量超过最大允许总质量；不是只看货物重量，更不能套用载客人数算法。</p><small>超出比例＝超出质量 ÷ 最大允许总质量</small></article></div></section>
        <section class="lesson-block"><h3>2. 载客汽车超员记分表</h3><div class="occupancy-matrix"><div class="matrix-head"><b>车辆</b><b>＜20%</b><b>20%—50%</b><b>50%—100%</b><b>≥100%</b></div><div><strong>校车／公路旅游客运</strong><span>6分</span><span class="hot">12分</span><span class="hot">12分</span><span class="hot">12分</span></div><div><strong>7座以上其他载客汽车</strong><span>按其他适用规则</span><span>6分</span><span class="warm">9分</span><span class="hot">12分</span></div><div><strong>其他载客汽车</strong><span>未列记分</span><span>3分</span><span>6分</span><span class="hot">12分</span></div></div><p>7座以上载客汽车在超员20%—50%时记6分，50%—100%时记9分；达到100%后同时落入“其他载客汽车超员100%以上”的12分规则。</p></section>
        <section class="lesson-block"><h3>3. 货车超载三档</h3><div class="load-bands"><div><strong>＜30%</strong><span>1分</span></div><div><strong>30%—50%</strong><span>3分</span></div><div><strong>≥50%</strong><span>6分</span></div></div><p>货车违反规定载客也记3分。道路交通安全法另规定罚款，并可扣留机动车至违法状态消除；记分不是全部法律后果。</p></section>
        <section class="lesson-block"><h3>4. 计算例题</h3><div class="calculation-cases"><article><b>5座车坐6人</b><span>超1人 ÷ 核定5人＝20%</span><strong>其他载客车20%—50%：3分</strong></article><article><b>7座车坐9人</b><span>超2人 ÷ 7≈28.6%</span><strong>7座以上20%—50%：6分</strong></article><article><b>7座车坐11人</b><span>超4人 ÷ 7≈57.1%</span><strong>7座以上50%—100%：9分</strong></article></div><details class="decision-case"><summary>5座车坐5名成人和1名婴儿，婴儿不占座所以不算超员吗？</summary><p><b>错误。</b>核载按人数计算，婴儿也计入；共6人，超员20%，属于3分档。</p></details></section>`,
      questions:[
        {q:'5座小客车载6人，超员比例是？',o:['10%','20%','25%','50%'],a:1,e:'超1人除以核定5人，等于20%。'},
        {q:'5座普通小客车载6人，一次记？',o:['1分','3分','6分','9分'],a:1,e:'其他载客车超员20%—50%记3分。'},
        {q:'7座车载11人，超员约57%，一次记？',o:['3分','6分','9分','12分'],a:2,e:'7座以上载客车超员50%—100%记9分。'},
        {q:'校车超员恰好20%，一次记？',o:['6分','9分','12分','不记分'],a:2,e:'校车、公路旅游客运达到20%即进入12分。'},
        {q:'货车超过最大允许总质量35%，一次记？',o:['1分','3分','6分','9分'],a:1,e:'30%—50%记3分。'},
        {q:'婴儿是否计入机动车核载人数？',o:['计入','不计入'],a:0,e:'超员按实际人数计算，儿童和婴儿同样计入。'}
      ]
    },
    {
      id:'alcohol-driving', no:'06.11', title:'酒驾与醉驾：数值、车辆性质和事故后果三重判断', time:'60 分钟', task:6,
      summary:'20与80毫克是认定边界；饮酒驾驶是行政违法，醉酒驾驶通常进入危险驾驶罪评价。',
      content:`
        <section class="lesson-block"><h3>1. 先按酒精含量分界</h3><div class="alcohol-gauge"><div><strong>＜20 mg/100mL</strong><span>未达到饮酒驾驶阈值</span></div><div class="drink"><strong>≥20 且＜80</strong><span>饮酒后驾驶</span></div><div class="drunk"><strong>≥80 mg/100mL</strong><span>醉酒驾驶</span></div></div><p>现行GB 19522—2024规定血液、呼气酒精含量阈值与检验规则。考试中“喝了几杯”“休息了多久”不能替代法定检测；最安全原则始终是饮酒后不驾驶。</p></section>
        <section class="lesson-block"><h3>2. 非营运机动车处罚阶梯</h3><div class="dui-consequences"><article><b>首次饮酒驾驶</b><p>暂扣6个月驾驶证＋1000—2000元罚款；一次记12分。</p></article><article><b>再次饮酒驾驶</b><p>10日以下拘留＋1000—2000元罚款＋吊销驾驶证。</p></article><article><b>醉酒驾驶</b><p>约束至酒醒＋吊销驾驶证＋依法追究刑事责任；5年内不得重新取得。</p></article></div></section>
        <section class="lesson-block"><h3>3. 营运机动车标准更严</h3><div class="dui-consequences commercial"><article><b>饮酒驾驶营运车</b><p>15日拘留＋5000元罚款＋吊销；5年内不得重新取得。</p></article><article><b>醉酒驾驶营运车</b><p>约束至酒醒＋吊销＋刑责；10年内不得重新取得，重新取得后也不得驾驶营运机动车。</p></article><article><b>重大事故构罪</b><p>无论饮酒或醉酒：刑责＋吊销＋终生不得重新取得驾驶证。</p></article></div></section>
        <section class="lesson-block"><h3>4. 行政违法与犯罪的边界</h3><p>刑法规定，在道路上醉酒驾驶机动车，构成危险驾驶罪的，处拘役并处罚金。若违反交通运输管理法规发生重大事故，致人重伤、死亡或造成重大财产损失，可能构成交通肇事罪；同时构成其他犯罪的，依处罚较重的规定定罪处罚。</p><div class="exam-callout"><b>拒绝“隔夜酒”误区</b><p>是否达到阈值取决于检测值，不取决于饮酒发生在当天还是前夜；感觉清醒不代表酒精含量已低于标准。</p></div><details class="decision-case"><summary>血液酒精含量正好80mg/100mL，属于饮酒还是醉酒驾驶？</summary><p><b>醉酒驾驶。</b>80是“醉酒驾驶”下限，包含本数。</p></details></section>`,
      questions:[
        {q:'血液酒精含量达到20但低于80mg/100mL，属于？',o:['正常驾驶','饮酒驾驶','醉酒驾驶','疲劳驾驶'],a:1,e:'20以上、80以下属于饮酒驾驶。'},
        {q:'血液酒精含量正好80mg/100mL，属于？',o:['饮酒驾驶','醉酒驾驶','不违法','仅警告'],a:1,e:'80以上含本数属于醉酒驾驶。'},
        {q:'首次饮酒驾驶非营运机动车，驾驶证处罚是？',o:['暂扣6个月','吊销且5年禁申','终生禁驾','仅口头警告'],a:0,e:'首次饮酒驾驶一般暂扣6个月，并处罚款、记12分。'},
        {q:'醉酒驾驶非营运机动车，多久内不得重新取得驾驶证？',o:['2年','3年','5年','10年'],a:2,e:'醉驾非营运机动车为5年。'},
        {q:'醉酒驾驶营运机动车，多久内不得重新取得驾驶证？',o:['3年','5年','10年','终生'],a:2,e:'醉驾营运机动车为10年，重新取得后也不得驾驶营运车。'},
        {q:'饮酒或醉酒驾驶发生重大事故构成犯罪，驾驶资格后果是？',o:['5年禁申','10年禁申','终生不得重新取得','只记12分'],a:2,e:'重大事故构罪时吊销并终生禁驾。'}
      ]
    }
  ]
};
