const quickReferenceSections = [
  {
    id: 'exam', label: '考试与答题', icon: '考', title: '先稳住基本盘：考试规则与题干读法',
    html: `
      <div class="quick-exam-strip"><div><strong>100题</strong><span>初学／增驾科目一</span></div><div><strong>45分钟</strong><span>平均每题约27秒</span></div><div><strong>90分</strong><span>合格线，最多错10题</span></div></div>
      <div class="quick-two-col"><div><h3>题干先圈四件事</h3><ul><li><b>主体：</b>普通小客车、校车、货车、驾驶人还是乘车人。</li><li><b>道路：</b>普通道路、高速公路或城市快速路。</li><li><b>动作：</b>停车、行驶、倒车、占道，不能只抓一个关键词。</li><li><b>程度：</b>未达到、以上、以下、超过、轻微伤与轻伤。</li></ul></div><div><h3>高概率排错原则</h3><ul><li>出现“加速抢行、紧急猛打方向、立即拉紧手刹”通常违背安全原则。</li><li>“可以不管、无需观察、一律、任何情况下”这类绝对表述要格外核对。</li><li>涉及人命先救人和防二次事故；涉及通行先减速、观察、让行。</li><li>记分、罚款、扣留、暂扣、吊销、刑罚不是同一条责任线。</li></ul></div></div>
      <div class="quick-mixup"><b>最后检查：</b><span>题目问“正确做法”还是“错误做法”？</span><span>问记几分，还是问罚多少钱？</span><span>百分比边界是否包含本数？</span></div>`
  },
  {
    id: 'signals', label: '信号标志', icon: '灯', title: '信号、标志、标线：先认家族，再读具体含义',
    html: `
      <div class="quick-priority-chain"><span><b>交通警察现场指挥</b><small>优先服从</small></span><i>→</i><span><b>交通信号灯</b></span><i>→</i><span><b>交通标志／标线</b></span><i>→</i><span><b>无信号时通行规则</b></span></div>
      <div class="quick-sign-family">
        <div><span class="quick-sign warning">!</span><b>警告标志</b><small>黄底黑边三角形：前方有危险，提前减速</small></div>
        <div><span class="quick-sign prohibition">×</span><b>禁令标志</b><small>白底红圈为主：禁止或限制某种行为</small></div>
        <div><span class="quick-sign instruction">↑</span><b>指示标志</b><small>蓝底圆形为主：指示必须或允许的通行方式</small></div>
        <div><span class="quick-sign guide">出口</span><b>指路标志</b><small>矩形／方形：方向、地点、距离和道路信息</small></div>
      </div>
      <div class="quick-sign-pairs"><div><span>停</span><b>停车让行</b><small>八角形；必须停车观察后再让行</small></div><div><span>让</span><b>减速让行</b><small>倒三角；减速，必要时停车</small></div><div><span>×</span><b>禁止停车</b><small>蓝底红圈红叉：临时停车也不允许</small></div><div><span>／</span><b>禁止长时停车</b><small>蓝底红圈单斜线：允许临时停车但不得长停</small></div><div><span>限</span><b>最高限速</b><small>红圈内数字；解除限速为灰色斜线</small></div><div><span>低</span><b>最低限速</b><small>蓝色圆形内数字，常见于高速车道</small></div></div>
      <div class="quick-two-col"><div><h3>灯光速记</h3><ul><li><b>圆形绿灯：</b>准许通行，但转弯不得妨碍直行车辆、行人。</li><li><b>黄灯：</b>已越过停止线可继续；未越线应停车，不是“加速抢黄”。</li><li><b>红灯：</b>禁止通行；无右转箭头等限制时，右转不得妨碍被放行交通。</li><li><b>绿色箭头／红色箭头：</b>只控制箭头方向；红叉控制本车道禁止通行。</li><li><b>黄灯持续闪烁：</b>警告，确认安全后通过。</li></ul></div><div><h3>标线速记</h3><ul><li><b>白线：</b>常分隔同向交通或标示边缘；<b>黄线：</b>常分隔对向交通。</li><li><b>虚线：</b>规则和安全允许时可跨；<b>实线：</b>不得压越。</li><li><b>一实一虚：</b>虚线一侧可在条件允许时跨越，实线一侧不得跨。</li><li><b>网状线／导流线：</b>不得停车；导流线区域还不得随意压越。</li><li><b>停止线：</b>车应停在线外；压线、越线都不规范。</li></ul></div></div>
      <div class="quick-marking-row"><span><i class="line white-dash"></i>白色虚线：同向可跨</span><span><i class="line white-solid"></i>白色实线：禁止跨越／边缘</span><span><i class="line yellow-dash"></i>黄色虚线：对向可跨中心线</span><span><i class="line yellow-solid"></i>黄色实线：禁止跨越中心线</span></div>
      <details class="quick-detail"><summary>展开：八类交警手势快速辨认</summary><div class="quick-gesture-grid"><span><b>停止</b>左臂向前上方直伸，掌心向前</span><span><b>直行</b>双臂分别向两侧平伸，右臂向左摆动</span><span><b>左转弯</b>右臂向前平伸，左臂向右前方摆动</span><span><b>右转弯</b>左臂向前平伸，右臂向左前方摆动</span><span><b>左转弯待转</b>左臂向左下方平伸并上下摆动</span><span><b>变道</b>右臂向前平伸，掌心向左并向左水平摆动</span><span><b>减速慢行</b>右臂向右前方平伸，掌心向下并向下摆动</span><span><b>靠边停车</b>左臂向前上方直伸，右臂向前下方摆动</span></div><p>始终按交通警察面对的方向判断左右，不按驾驶人自己的左右猜。</p></details>`
  },
  {
    id: 'priority', label: '让行通行', icon: '让', title: '路权判断：有信号看信号，无信号按冲突顺序',
    html: `
      <div class="quick-rule-ladder"><div><strong>① 有交警</strong><span>服从现场指挥</span></div><div><strong>② 有信号</strong><span>按灯、标志、标线</span></div><div><strong>③ 无信号</strong><span>减速观察，套让行规则</span></div><div><strong>④ 仍有危险</strong><span>有优先权也要避免事故</span></div></div>
      <div class="quick-three-col"><div><h3>无信号交叉路口</h3><ul><li>有标志、标线控制：让优先通行一方先行。</li><li>无控制：让<b>右方道路来车</b>先行。</li><li><b>转弯让直行</b>。</li><li>相对方向：<b>右转弯让左转弯</b>。</li></ul></div><div><h3>特殊会车</h3><ul><li>有障碍一方让无障碍一方；但有障碍一方已进入障碍路段时可先行。</li><li>狭窄坡路：一般<b>上坡让行权优先</b>；下坡车已到中途而上坡车未上坡时，下坡先行。</li><li>狭窄山路：<b>不靠山体一方</b>先行。</li></ul></div><div><h3>保护对象</h3><ul><li>人行横道：提前减速；行人正在通过时停车让行。</li><li>无信号道路遇行人横过：避让。</li><li>盲人在道路上通行：车辆应避让。</li><li>执行紧急任务的警车、消防车、救护车、工程救险车：安全让行。</li></ul></div></div>
      <div class="quick-mixup"><b>易混：</b><span>环岛：准备进入的车让已在环岛内的车。</span><span>公交车驶离站点并非在所有道路都当然拥有绝对优先权。</span><span>“让行”不等于突然猛打方向制造新危险。</span></div>`
  },
  {
    id: 'numbers', label: '速度距离', icon: '数', title: '高频数字：速度、距离、停车与恶劣天气',
    html: `
      <h3 class="quick-subtitle">无道路中心线／同方向只有1条机动车道</h3>
      <div class="quick-speed-table"><div class="head"><b>道路条件</b><b>城市道路</b><b>公路</b></div><div><span>无道路中心线</span><strong>30 km/h</strong><strong>40 km/h</strong></div><div><span>同方向只有1条机动车道</span><strong>50 km/h</strong><strong>70 km/h</strong></div></div>
      <div class="quick-number-grid"><div><strong>30</strong><b>特殊路段最高时速</b><span>进出非机动车道、铁路道口、急弯、窄路窄桥、掉头转弯陡坡、能见度不足50米、冰雪泥泞、牵引故障车等</span></div><div><strong>30m</strong><b>禁止停车范围</b><span>公交站、急救站、加油站、消防栓或消防队门前及上述地点30米内</span></div><div><strong>50m</strong><b>禁止停车范围</b><span>交叉路口、铁路道口、急弯、宽度不足4米窄路／桥、陡坡、隧道及上述地点50米内</span></div><div><strong>50—100m</strong><b>普通道路故障警告</b><span>难以移动车辆，在来车方向设置</span></div><div><strong>150m以外</strong><b>高速故障警告</b><span>人员迅速转移并报警</span></div><div><strong>100m</strong><b>高速跟车</b><span>车速超过100km/h，与同车道前车保持100米以上；低于100km/h可缩短但不得少于50米</span></div></div>
      <div class="quick-highway-lanes"><div><small>高速总规则</small><b>最高120／最低60</b><span>小型载客汽车最高120，其他机动车100，摩托车80；标志更低时从标志</span></div><div><small>同方向2车道</small><b>左侧最低100</b><span>右侧车道不低于60</span></div><div><small>同方向3车道以上</small><b>最左最低110／中间最低90</b><span>最右车道不低于60；道路标志另有规定从其规定</span></div></div>
      <h3 class="quick-subtitle">高速低能见度“261、145、52离”</h3>
      <div class="quick-visibility"><div><b>能见度＜200m</b><strong>≤60 km/h</strong><span>车距≥100m</span></div><div><b>能见度＜100m</b><strong>≤40 km/h</strong><span>车距≥50m</span></div><div><b>能见度＜50m</b><strong>≤20 km/h</strong><span>尽快从最近出口驶离</span></div></div>
      <div class="quick-mixup"><b>边界：</b><span>“超过100km/h”才套高速100米跟车；不是所有车速都固定100米。</span><span>高速故障是150米<b>以外</b>，普通道路是50—100米。</span></div>`
  },
  {
    id: 'points', label: '记分规则', icon: '分', title: '记分总表：先记独立行为，再算超速超员矩阵',
    html: `
      <div class="quick-point-columns">
        <div class="p12"><strong>12分</strong><ul><li>饮酒驾驶</li><li>轻伤以上／死亡事故逃逸未构罪</li><li>伪造变造牌证、校车牌或套用他车号牌／行驶证</li><li>高快倒车、逆行、穿越中央分隔带掉头</li><li>校车／公路旅游客运超员≥20%；其他客车≥100%</li><li>重点车高快超速≥20%；其他车高快超速≥50%</li><li>卖分牟利</li></ul></div>
        <div class="p9"><strong>9分</strong><ul><li>高快违法停车</li><li>无牌、故意遮挡或污损号牌</li><li>准驾车型不符</li><li>无校车驾驶资格驾驶校车</li><li>7座以上客车超员≥50%＜100%</li><li>重点车普通路超速≥50%</li><li>中型以上客车／危化品车疲劳驾驶</li></ul></div>
        <div class="p6"><strong>6分</strong><ul><li>不按交通信号灯通行</li><li>高快违法占用应急车道<b>行驶</b></li><li>驾驶证暂扣／扣留期间驾驶</li><li>轻微伤／财损事故逃逸未构罪</li><li>货车超载≥50%</li><li>危险／超限运输违规</li><li>超员、超速中度比例档</li></ul></div>
        <div class="p3"><strong>3分</strong><ul><li>手持电话</li><li>不让行人／校车，不按规定超车让行</li><li>普通道路逆行；高快不按车道或低于最低时速</li><li>排队穿插、借道、占对向</li><li>故障停车未按规定示警</li><li>号牌未按规定安装</li><li>其他载客车相应超员档、普通车普通路超速20%—50%</li></ul></div>
        <div class="p1"><strong>1分</strong><ul><li>违反禁令标志／禁止标线</li><li>不按规定使用灯光、会车</li><li>普通道路不按规定倒车／掉头</li><li>驾驶人未系安全带、摩托驾驶人未戴头盔</li><li>一般机动车逾期未检</li><li>货车超载＜30%、货物外廓超限</li></ul></div>
      </div>
      <h3 class="quick-subtitle">四组最容易串档</h3>
      <div class="quick-confusion-table"><div class="head"><b>关键词</b><b>低档</b><b>高档</b></div><div><span>逃逸未构罪</span><span>轻微伤／财损：6分</span><strong>轻伤以上／死亡：12分</strong></div><div><span>号牌</span><span>安装不规范3；无遮污9</span><strong>假牌／套牌12</strong></div><div><span>高速／快速路</span><span>不按车道3；占应急车道行驶6</span><strong>违法停车9；倒逆掉12</strong></div><div><span>信号</span><span>禁令标志／禁止标线1</span><strong>不按信号灯6</strong></div></div>
      <details class="quick-detail"><summary>展开：超速记分矩阵</summary><div class="quick-matrix speed"><div class="head"><b>车辆／道路</b><b>＜20%</b><b>20%—50%</b><b>≥50%</b></div><div><span>重点车·高快</span><span>6</span><strong>12</strong><strong>12</strong></div><div><span>重点车·普通路</span><span>10%起记1</span><span>6</span><strong>9</strong></div><div><span>其他车·高快</span><span>未列记分</span><span>6</span><strong>12</strong></div><div><span>其他车·普通路</span><span>未列记分</span><span>3</span><span>6</span></div></div><p>重点车＝校车、中型以上客货车、危险物品运输车。重点车在高快路只要超速但未达20%即记6分；重点车普通路从10%起记1分。“未列记分”不等于合法或免处罚。</p></details>
      <details class="quick-detail"><summary>展开：超员／超载矩阵</summary><div class="quick-matrix occupancy"><div class="head"><b>车辆</b><b>＜20%</b><b>20%—50%</b><b>50%—100%</b><b>≥100%</b></div><div><span>校车／公路旅游客运</span><span>6</span><strong>12</strong><strong>12</strong><strong>12</strong></div><div><span>7座以上其他客车</span><span>按规则</span><span>6</span><strong>9</strong><strong>12</strong></div><div><span>其他客车</span><span>未列记分</span><span>3</span><span>6</span><strong>12</strong></div></div><div class="quick-load"><span>货车超载＜30%：<b>1分</b></span><span>30%—50%：<b>3分</b></span><span>≥50%：<b>6分</b></span></div></details>`
  },
  {
    id: 'license', label: '证照车辆', icon: '证', title: '驾驶证与车辆：期限、状态和证件行为',
    html: `
      <div class="quick-three-col"><div><h3>驾驶证时间轴</h3><ul><li>有效期：<b>6年 → 10年 → 长期</b>；每个周期均未记满12分，换发更长期限。</li><li>期满换证：有效期届满前<b>90日内</b>申请。</li><li>联系方式等信息变化：<b>30日内</b>备案。</li><li>学习驾驶证明有效期：<b>3年</b>，不得超过申请年龄上限。</li></ul></div><div><h3>状态不要混</h3><ul><li><b>扣留：</b>调查或促办手续的临时强制措施。</li><li><b>暂扣：</b>有期限的行政处罚，期间不得驾驶。</li><li><b>吊销：</b>驾驶许可被取消，重新申领受期限限制。</li><li><b>撤销：</b>以欺骗、贿赂等不正当手段取得许可。</li><li><b>注销：</b>登记管理上的终止状态，不等于处罚。</li></ul></div><div><h3>实习和考试</h3><ul><li>初次取得汽车类／摩托车类准驾车型后的<b>12个月</b>为实习期。</li><li>实习期驾驶机动车，应按规定粘贴或悬挂实习标志。</li><li>科目二、科目三道路驾驶技能考试预约次数各不得超过<b>5次</b>；第5次仍不合格，已合格科目成绩作废。</li><li>每个科目考试一次；不合格可当场补考一次。</li></ul></div></div>
      <div class="quick-confusion-table"><div class="head"><b>牌证行为</b><b>记分</b><b>关键词</b></div><div><span>假牌／假证、套牌</span><strong>12分</strong><span>伪造、变造、使用他车牌证</span></div><div><span>无牌／遮挡／污损</span><strong>9分</strong><span>没有悬挂或故意使其无法识别</span></div><div><span>未按规定安装号牌</span><strong>3分</strong><span>有真实号牌但安装方式不合规</span></div></div>
      <div class="quick-mixup"><b>证件：</b><span>驾驶证证明“人能开什么车”。</span><span>行驶证证明“这辆车的登记和上路身份”。</span><span>登记证书更像车辆产权和登记变动档案，通常不要求随车携带。</span></div>`
  },
  {
    id: 'accident', label: '事故应急', icon: '护', title: '事故与故障：先防二次事故，再救人和固定证据',
    html: `
      <div class="quick-emergency-chain"><span><b>立即停车</b></span><i>→</i><span><b>开启示警</b></span><i>→</i><span><b>人员安全</b></span><i>→</i><span><b>抢救伤员</b></span><i>→</i><span><b>报警／固定证据</b></span></div>
      <div class="quick-three-col"><div><h3>保护现场立即报警</h3><ul><li>死亡、受伤事故。</li><li>无有效驾驶资格、酒药嫌疑。</li><li>严重超员超速嫌疑、无号牌／假牌。</li><li>车辆不能移动、一方离场、疑似故意造成。</li><li>危险物品运输车辆事故。</li></ul></div><div><h3>轻微财损快处</h3><ul><li>无人伤、事实清楚且无必须立即报警异常。</li><li>先确保安全，拍全景、相对位置、碰撞部位和号牌。</li><li>立即撤离到不妨碍交通处，再协商或线上快处。</li><li>不能把车留在车道中央长时间争论。</li></ul></div><div><h3>高速三句口令</h3><ul><li><b>车靠边：</b>能动则驶入应急车道。</li><li><b>人撤离：</b>从远离车流一侧下车，转移到护栏外等安全处。</li><li><b>即报警：</b>说明方向、里程、人员和车辆情况。</li><li>警告标志在来车方向<b>150米以外</b>。</li></ul></div></div>
      <div class="quick-emergency-grid"><div><b>爆胎</b><span>握稳方向、松油、保持直线、逐渐减速；不急刹猛转。</span></div><div><b>侧滑</b><span>松油，不急刹；后轮侧滑通常向车尾侧滑方向适度修正并及时回正。</span></div><div><b>制动失效</b><span>反复踩制动、逐级降挡、缓用驻车制动、寻找避险车道；不熄火空挡。</span></div><div><b>车辆起火</b><span>停车断电、全员撤离、报警；发动机舱冒烟不要猛然完全打开机盖。</span></div><div><b>车辆落水</b><span>立即解带，尽早开窗／门；失败击碎侧窗，不等待完全下沉。</span></div><div><b>伤员救护</b><span>先确认环境安全；呼叫120；严重出血直接压迫；疑似脊柱伤不随意搬动。</span></div></div>`
  },
  {
    id: 'alcohol', label: '酒驾责任', icon: '责', title: '酒驾、事故责任与刑事后果：四条线分开答',
    html: `
      <div class="quick-alcohol-bands"><div><strong>≥20，＜80</strong><span>mg/100mL</span><b>饮酒驾驶</b></div><div><strong>≥80</strong><span>mg/100mL</span><b>醉酒驾驶</b></div></div>
      <div class="quick-three-col"><div><h3>非营运机动车</h3><ul><li>首次饮酒：暂扣驾驶证<b>6个月</b>＋1000—2000元罚款＋记12分。</li><li>再次饮酒：10日以下拘留＋1000—2000元罚款＋吊销。</li><li>醉酒：约束至酒醒＋吊销＋刑事责任＋<b>5年</b>不得重新取得。</li></ul></div><div><h3>营运机动车</h3><ul><li>饮酒：15日拘留＋5000元罚款＋吊销＋<b>5年</b>禁申。</li><li>醉酒：吊销＋刑事责任＋<b>10年</b>禁申；重新取得后不得驾驶营运车。</li><li>饮酒／醉酒造成重大事故构罪：吊销并<b>终生禁驾</b>。</li></ul></div><div><h3>交通犯罪</h3><ul><li>交通肇事罪一般：3年以下有期徒刑或拘役。</li><li>肇事后逃逸等：3—7年。</li><li>因逃逸致人死亡：7年以上。</li><li>危险驾驶罪：追逐竞驶情节恶劣、醉驾、校客运严重超员超速、违规危化运输危及公共安全。</li></ul></div></div>
      <div class="quick-payment"><span><b>交强险</b><small>责任限额内先赔</small></span><i>→</i><span><b>商业险</b><small>按合同赔</small></span><i>→</i><span><b>侵权人</b><small>仍不足部分</small></span></div>
      <div class="quick-mixup"><b>不要混：</b><span>饮酒驾驶是行政法概念且记12分；醉酒驾驶还可能构成危险驾驶罪。</span><span>保险赔偿不免除行政处罚或刑事责任。</span></div>`
  },
  {
    id: 'last', label: '最后扫盲', icon: '查', title: '考前最后5分钟：二十组一眼排错',
    html: `
      <div class="quick-final-grid">
        <div><b>高速违法停车</b><strong>9分</strong><span>不是应急车道行驶6分</span></div><div><b>高速倒车／逆行／穿越掉头</b><strong>12分</strong></div>
        <div><b>普通道路逆行</b><strong>3分</strong></div><div><b>闯信号灯</b><strong>6分</strong><span>压禁止标线通常1分</span></div>
        <div><b>轻微伤 vs 轻伤逃逸</b><strong>6 vs 12</strong></div><div><b>号牌安装／遮挡／假套</b><strong>3／9／12</strong></div>
        <div><b>普通／高速故障警告</b><strong>50—100／150m外</strong></div><div><b>公交站／路口禁停距离</b><strong>30／50m</strong></div>
        <div><b>雾天高速</b><strong>200-60-100；100-40-50；50-20-离</strong></div><div><b>无中心线城市／公路</b><strong>30／40</strong></div>
        <div><b>同向一车道城市／公路</b><strong>50／70</strong></div><div><b>驾驶证有效期</b><strong>6年／10年／长期</strong></div>
        <div><b>换证／信息变化</b><strong>前90日／30日内</strong></div><div><b>疲劳驾驶判断</b><strong>连续4小时；休息≥20分钟</strong></div>
        <div><b>记分周期</b><strong>12个月／满分12</strong><span>不是自然年</span></div><div><b>学法减分</b><strong>每周期最多6分</strong><span>已满12分不能申请</span></div>
        <div><b>转弯冲突</b><strong>转弯让直行；右转让左转</strong></div><div><b>无控制路口</b><strong>让右方来车</strong></div>
        <div><b>黄灯</b><strong>越线可继续，未越线停车</strong></div><div><b>事故现场</b><strong>救人优先，必要移动要标明位置</strong></div>
      </div>
      <div class="quick-ready"><strong>上考场前只记一条：</strong><span>当数字拿不准时，先用主体、道路、动作、程度四个条件排除；当动作拿不准时，选择能减速、观察、让行并保护生命的方案。</span></div>`
  }
];

function renderQuickReference(active = 'all') {
  const visible = active === 'all' ? quickReferenceSections : quickReferenceSections.filter(section => section.id === active);
  return `<div class="page-head quick-head"><div><p class="eyebrow">PRE-EXAM QUICK RECALL</p><h1>科目一考前速查清单</h1><p class="lede">用于完成系统学习后的快速唤醒，不替代课程理解。建议考前按“记分 → 信号 → 数字 → 让行 → 事故”顺序扫一遍。</p></div><div class="head-stat"><strong>20 min</strong><small>建议完整速查时间</small></div></div>
    <div class="quick-route"><span><b>8分钟</b>记分矩阵</span><i>→</i><span><b>4分钟</b>信号标线</span><i>→</i><span><b>5分钟</b>数字让行</span><i>→</i><span><b>3分钟</b>事故责任</span></div>
    <div class="quick-toolbar" aria-label="速查分类">${[{id:'all',label:'全部'}].concat(quickReferenceSections.map(s => ({id:s.id,label:s.label}))).map(item => `<button class="filter-chip ${active === item.id ? 'active' : ''}" data-quick-filter="${item.id}">${item.label}</button>`).join('')}<button class="filter-chip quick-print" data-quick-print>打印清单</button></div>
    <div class="quick-sections">${visible.map((section, index) => `<article class="quick-section" id="quick-${section.id}"><header><span>${section.icon}</span><div><small>${String(index + 1).padStart(2,'0')} · ${section.label}</small><h2>${section.title}</h2></div></header><div class="quick-section-body">${section.html}</div></article>`).join('')}</div>
    <div class="quick-source-note"><b>版本基线：</b>依据现行《道路交通安全法》《实施条例》、公安部第163号令记分办法、第172号令修改后的驾驶证规定及现行考试大纲整理。截至2026年7月；地方管制与正式考试安排以当地公安交管部门最新通知为准。</div>`;
}
