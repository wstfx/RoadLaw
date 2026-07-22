# 路律 RoadLaw：科目一交通法规学习地图

[![GitHub Pages](https://github.com/wstfx/RoadLaw/actions/workflows/deploy-pages.yml/badge.svg)](https://wstfx.github.io/RoadLaw/)
[![GitHub stars](https://img.shields.io/github/stars/wstfx/RoadLaw?style=social)](https://github.com/wstfx/RoadLaw/stargazers)

![路律科目一交通法规学习地图](assets/roadlaw-social-card.png)

**在线使用：<https://wstfx.github.io/RoadLaw/>**

路律是一套免费、可交互的中国大陆 C1/C2 科目一学习工具。它不是把题目堆在一起，而是把交通法规整理成法律体系、八大课程模块、逐节练习和考前速查清单，帮助学习者理解规则并记住容易混淆的数字。

如果它帮到了你，欢迎点一个 **Star**，也欢迎通过 Issue 帮助纠错。

## 功能

- 8 个完整理论模块，覆盖基础法理、信号标线、通行规则、驾驶证、车辆登记、违法记分、事故应急和安全文明责任。
- 逐节语义化讲解与对应练习，答错后显示解释。
- 100 题、45 分钟的 C1/C2 全真模拟考试：40 道判断题、60 道单选题、90 分合格，第 11 道错题确认后自动结束。
- 交通信号灯、标志、标线、让行、速度和事故处置等可视化示例。
- 12、9、6、3、1 分记分体系，以及超速、超员、超载矩阵。
- 20 分钟考前速查清单，支持分类筛选和打印。
- 学习进度自动保存在浏览器本地，不需要注册，也不会上传个人学习记录。
- 响应式页面，可在电脑和手机上使用。

## 学习地图

1. 基础法理与道路秩序
2. 交通信号与道路设施
3. 道路通行规则
4. 驾驶证申领与使用
5. 机动车与登记管理
6. 违法、处罚与记分
7. 事故处理与应急避险
8. 安全文明与综合责任

推荐先浏览“法规体系”，再按课程逐节学习；临考前使用“考前速查”，最后用“知识校验”检查理解。

## 全真模拟考试

模拟考试从 423 道原创课程练习中按八个模块和题型配额随机生成，每套试卷 100 题且不重复。答题时间为 45 分钟，每题 1 分，90 分合格；选择答案后需要确认，确认后不可修改。系统支持跳过未确定题目、答题卡导航、刷新续考、超时自动交卷、第 11 道错题自动判定不合格、模块正确率和错题解析。最近 10 次成绩保存在当前浏览器本地。

该功能模拟现行汽车类科目一考试规格，但题目为本项目原创学习题，不是公安机关正式题库，也不包含所在地可能使用的地方题。

## 内容与版本

- 法规基线核对至 2026 年 7 月。
- 驾驶证规则采用公安部第 172 号令修改后的版本。
- 记分规则采用公安部第 163 号令，分值档位为 12、9、6、3、1 分。
- 机动车登记采用公安部第 164 号令。
- 考试框架参考《机动车驾驶证申领和使用规定》与 GA 1026—2022。
- 模考内容范围参考 2022 年版《机动车驾驶人考试大纲》，当前规则基线核对至 2026 年 7 月。
- 示例题仅用于学习，不复制或替代任何商业题库。

法律、规章、标准和地方管理措施可能变化。临近考试时，请同时查看所在地车管所或“交管 12123”的最新通知；发现版本或表述问题，可以提交[内容纠错](https://github.com/wstfx/RoadLaw/issues/new?template=content-error.yml)。

## 本地运行

项目没有构建依赖。直接打开 `index.html`，或在项目目录运行：

```bash
python3 -m http.server 4173
```

访问 <http://127.0.0.1:4173>。

运行回归测试：

```bash
node tests/course-smoke.js
node tests/site-release-smoke.js
```

## 参与反馈

- [内容或法规纠错](https://github.com/wstfx/RoadLaw/issues/new?template=content-error.yml)
- [页面或移动端问题](https://github.com/wstfx/RoadLaw/issues/new?template=bug-report.yml)
- [学习体验与功能建议](https://github.com/wstfx/RoadLaw/issues/new?template=feature-request.yml)

提交法规纠错时，请尽量提供主管机关发布的原文链接、条款编号和施行日期。请不要粘贴付费题库或大段受版权保护的题目。

## 部署

推送到 `main` 分支后，GitHub Actions 会自动将静态站点发布到 GitHub Pages。部署配置位于 `.github/workflows/deploy-pages.yml`。

## 使用边界

本项目用于学习导航，不构成法律意见，也不保证替代正式考试题库、驾校教学或主管机关通知。学习进度仅存储在当前浏览器的 `localStorage` 中。

## 许可

仓库目前尚未声明软件许可。在获得明确许可前，代码和内容的再分发、修改与商用权利不作默认授予。
