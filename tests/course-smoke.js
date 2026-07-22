const fs = require('fs');
const vm = require('vm');

class FakeElement {
  constructor() {
    this.innerHTML = '';
    this.textContent = '';
    this.dataset = {};
    this.classList = { add() {}, remove() {}, toggle() {}, contains() { return false; } };
  }
  setAttribute() {}
  addEventListener() {}
  focus() {}
}

const elements = new Map();
const get = selector => {
  if (!elements.has(selector)) elements.set(selector, new FakeElement());
  return elements.get(selector);
};
const storage = new Map();
const context = {
  console,
  localStorage: {
    getItem: key => storage.has(key) ? storage.get(key) : null,
    setItem: (key, value) => storage.set(key, String(value)),
    removeItem: key => storage.delete(key)
  },
  document: {
    querySelector: selector => get(selector),
    querySelectorAll: () => [],
    addEventListener() {}
  },
  window: { scrollTo() {}, print() {} },
  Intl,
  Date,
  setTimeout: fn => { fn(); return 1; },
  clearTimeout() {},
  confirm: () => true
};

vm.createContext(context);
for (const file of ['foundation-course.js', 'signals-course.js', 'passage-course.js', 'driver-course.js', 'vehicle-course.js', 'violations-course.js', 'accident-course.js', 'civilized-course.js', 'quick-reference.js', 'app.js']) {
  vm.runInContext(fs.readFileSync(file, 'utf8'), context, { filename: file });
}

const library = get('#course').innerHTML;
if (!library.includes('基础法理与道路秩序') || !library.includes('交通信号与道路设施') || !library.includes('道路通行规则') || !library.includes('驾驶证申领与使用') || !library.includes('机动车与登记管理') || !library.includes('违法、处罚与记分') || !library.includes('事故处理与应急避险') || !library.includes('安全文明与综合责任')) {
  throw new Error('Course library did not render all eight courses.');
}

const quickReference = get('#quick').innerHTML;
for (const expected of ['科目一考前速查清单', '记分总表', '信号、标志、标线', '高速低能见度', '事故与故障', '二十组一眼排错']) {
  if (!quickReference.includes(expected)) throw new Error(`Quick reference did not render: ${expected}`);
}
vm.runInContext(`quickReferenceActive = 'points'; renderQuick(); bindDynamic();`, context);
if (!get('#quick').innerHTML.includes('记分总表') || get('#quick').innerHTML.includes('事故与故障')) {
  throw new Error('Quick reference category filter did not isolate the selected section.');
}
vm.runInContext(`quickReferenceActive = 'all'; renderQuick(); bindDynamic();`, context);

vm.runInContext('openCourse("signals-course")', context);
if (!get('#course').innerHTML.includes('MODULE 02') || !get('#course').innerHTML.includes('48 道对应练习')) {
  throw new Error('Module 02 course home did not render.');
}

vm.runInContext(`
  (() => {
    const course = courseCatalog.find(c => c.id === 'signals-course');
    const state = getCourseState(course);
    state.lesson = 0;
    course.lessons[0].questions.forEach((q, i) => state.answers[questionKey(course.lessons[0], i)] = q.a);
    state.completed[course.lessons[0].id] = true;
    syncCourseTasks(course, state);
    renderCourse();
  })()
`, context);

if (!get('#course').innerHTML.includes('已答对 6 / 6')) throw new Error('Exercise scoring did not render.');
if (JSON.parse(storage.get('roadLawProgress'))['signals-0'] !== true) throw new Error('Syllabus progress did not sync.');

vm.runInContext('openCourse("passage-course")', context);
if (!get('#course').innerHTML.includes('MODULE 03') || !get('#course').innerHTML.includes('64 道对应练习')) {
  throw new Error('Module 03 course home did not render.');
}

vm.runInContext(`
  (() => {
    const course = courseCatalog.find(c => c.id === 'passage-course');
    const state = getCourseState(course);
    state.lesson = 0;
    course.lessons[0].questions.forEach((q, i) => state.answers[questionKey(course.lessons[0], i)] = q.a);
    state.completed[course.lessons[0].id] = true;
    syncCourseTasks(course, state);
    renderCourse();
  })()
`, context);

if (!get('#course').innerHTML.includes('已答对 6 / 6')) throw new Error('Module 03 exercise scoring did not render.');
if (JSON.parse(storage.get('roadLawProgress'))['passage-0'] !== true) throw new Error('Module 03 syllabus progress did not sync.');

vm.runInContext('openCourse("driver-course")', context);
if (!get('#course').innerHTML.includes('MODULE 04') || !get('#course').innerHTML.includes('54 道对应练习')) {
  throw new Error('Module 04 course home did not render.');
}

vm.runInContext(`
  (() => {
    const course = courseCatalog.find(c => c.id === 'driver-course');
    const state = getCourseState(course);
    state.lesson = 0;
    course.lessons[0].questions.forEach((q, i) => state.answers[questionKey(course.lessons[0], i)] = q.a);
    course.lessons.slice(0, 3).forEach(lesson => state.completed[lesson.id] = true);
    syncCourseTasks(course, state);
    renderCourse();
  })()
`, context);

if (!get('#course').innerHTML.includes('已答对 6 / 6')) throw new Error('Module 04 exercise scoring did not render.');
if (JSON.parse(storage.get('roadLawProgress'))['driver-0'] !== true) throw new Error('Module 04 syllabus progress did not sync.');

vm.runInContext('openCourse("vehicle-course")', context);
if (!get('#course').innerHTML.includes('MODULE 05') || !get('#course').innerHTML.includes('48 道对应练习')) {
  throw new Error('Module 05 course home did not render.');
}

vm.runInContext(`
  (() => {
    const course = courseCatalog.find(c => c.id === 'vehicle-course');
    const state = getCourseState(course);
    state.lesson = 0;
    course.lessons[0].questions.forEach((q, i) => state.answers[questionKey(course.lessons[0], i)] = q.a);
    course.lessons.slice(0, 4).forEach(lesson => state.completed[lesson.id] = true);
    syncCourseTasks(course, state);
    renderCourse();
  })()
`, context);

if (!get('#course').innerHTML.includes('已答对 6 / 6')) throw new Error('Module 05 exercise scoring did not render.');
if (JSON.parse(storage.get('roadLawProgress'))['vehicle-0'] !== true) throw new Error('Module 05 syllabus progress did not sync.');

vm.runInContext('openCourse("violations-course")', context);
if (!get('#course').innerHTML.includes('MODULE 06') || !get('#course').innerHTML.includes('66 道对应练习')) {
  throw new Error('Module 06 course home did not render.');
}

vm.runInContext(`
  (() => {
    const course = courseCatalog.find(c => c.id === 'violations-course');
    const state = getCourseState(course);
    state.lesson = 0;
    course.lessons[0].questions.forEach((q, i) => state.answers[questionKey(course.lessons[0], i)] = q.a);
    state.completed[course.lessons[0].id] = true;
    syncCourseTasks(course, state);
    renderCourse();
  })()
`, context);

if (!get('#course').innerHTML.includes('已答对 6 / 6')) throw new Error('Module 06 exercise scoring did not render.');
if (JSON.parse(storage.get('roadLawProgress'))['violations-0'] !== true) throw new Error('Module 06 syllabus progress did not sync.');

vm.runInContext(`
  (() => {
    const course = courseCatalog.find(c => c.id === 'violations-course');
    const state = getCourseState(course);
    state.lesson = course.lessons.findIndex(lesson => lesson.id === 'speeding-matrix');
    renderCourse();
  })()
`, context);

if (!get('#course').innerHTML.includes('class="points-speed-matrix"')) {
  throw new Error('Module 06 speeding matrix did not use its isolated layout class.');
}
if (get('#course').innerHTML.includes('class="speed-matrix"')) {
  throw new Error('Module 06 speeding matrix collided with the Module 03 speed visualization.');
}

vm.runInContext('openCourse("accident-course")', context);
if (!get('#course').innerHTML.includes('MODULE 07') || !get('#course').innerHTML.includes('54 道对应练习')) {
  throw new Error('Module 07 course home did not render.');
}

vm.runInContext(`
  (() => {
    const course = courseCatalog.find(c => c.id === 'accident-course');
    const state = getCourseState(course);
    state.lesson = 0;
    course.lessons[0].questions.forEach((q, i) => state.answers[questionKey(course.lessons[0], i)] = q.a);
    state.completed[course.lessons[0].id] = true;
    syncCourseTasks(course, state);
    renderCourse();
  })()
`, context);

if (!get('#course').innerHTML.includes('已答对 6 / 6')) throw new Error('Module 07 exercise scoring did not render.');
if (JSON.parse(storage.get('roadLawProgress'))['accident-0'] !== true) throw new Error('Module 07 syllabus progress did not sync.');

vm.runInContext(`
  (() => {
    const course = courseCatalog.find(c => c.id === 'accident-course');
    const state = getCourseState(course);
    state.completed['roadside-breakdown'] = true;
    state.completed['highway-emergency'] = false;
    syncCourseTasks(course, state);
  })()
`, context);
if (JSON.parse(storage.get('roadLawProgress'))['accident-3'] === true) {
  throw new Error('Module 07 multi-lesson task completed too early.');
}

vm.runInContext(`
  (() => {
    const course = courseCatalog.find(c => c.id === 'accident-course');
    const state = getCourseState(course);
    state.completed['highway-emergency'] = true;
    syncCourseTasks(course, state);
  })()
`, context);
if (JSON.parse(storage.get('roadLawProgress'))['accident-3'] !== true) {
  throw new Error('Module 07 multi-lesson task did not sync after both lessons completed.');
}

vm.runInContext('openCourse("civilized-course")', context);
if (!get('#course').innerHTML.includes('MODULE 08') || !get('#course').innerHTML.includes('54 道对应练习')) {
  throw new Error('Module 08 course home did not render.');
}

vm.runInContext(`
  (() => {
    const course = courseCatalog.find(c => c.id === 'civilized-course');
    const state = getCourseState(course);
    state.lesson = 0;
    course.lessons[0].questions.forEach((q, i) => state.answers[questionKey(course.lessons[0], i)] = q.a);
    state.completed[course.lessons[0].id] = true;
    state.completed[course.lessons[1].id] = false;
    syncCourseTasks(course, state);
    renderCourse();
  })()
`, context);

if (!get('#course').innerHTML.includes('已答对 6 / 6')) throw new Error('Module 08 exercise scoring did not render.');
if (JSON.parse(storage.get('roadLawProgress'))['civilized-0'] === true) {
  throw new Error('Module 08 multi-lesson task completed too early.');
}

vm.runInContext(`
  (() => {
    const course = courseCatalog.find(c => c.id === 'civilized-course');
    const state = getCourseState(course);
    state.completed[course.lessons[1].id] = true;
    syncCourseTasks(course, state);
  })()
`, context);
if (JSON.parse(storage.get('roadLawProgress'))['civilized-0'] !== true) {
  throw new Error('Module 08 syllabus progress did not sync after both lessons completed.');
}

console.log('course smoke test passed');
