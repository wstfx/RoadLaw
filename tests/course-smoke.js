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
  window: { scrollTo() {} },
  Intl,
  Date,
  setTimeout: fn => { fn(); return 1; },
  clearTimeout() {},
  confirm: () => true
};

vm.createContext(context);
for (const file of ['foundation-course.js', 'signals-course.js', 'passage-course.js', 'driver-course.js', 'app.js']) {
  vm.runInContext(fs.readFileSync(file, 'utf8'), context, { filename: file });
}

const library = get('#course').innerHTML;
if (!library.includes('基础法理与道路秩序') || !library.includes('交通信号与道路设施') || !library.includes('道路通行规则') || !library.includes('驾驶证申领与使用')) {
  throw new Error('Course library did not render all four courses.');
}

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

console.log('course smoke test passed');
