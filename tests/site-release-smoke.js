const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const read = file => fs.readFileSync(path.join(root, file), 'utf8');
const html = read('index.html');

const requiredHtml = [
  'https://wstfx.github.io/RoadLaw/',
  'assets/roadlaw-social-card.png',
  'application/ld+json',
  'manifest.webmanifest',
  'issues/new/choose',
  'data-share-site',
  'id="quick"',
  'id="mock"',
  'mock-exam.js'
];

for (const token of requiredHtml) {
  if (!html.includes(token)) throw new Error(`Missing release marker in index.html: ${token}`);
}

const localAssets = [
  'styles.css',
  'app.js',
  'quick-reference.js',
  'mock-exam.js',
  'manifest.webmanifest',
  'robots.txt',
  'sitemap.xml',
  'assets/favicon.svg',
  'assets/roadlaw-social-card.png',
  '.github/workflows/deploy-pages.yml',
  '.github/ISSUE_TEMPLATE/content-error.yml',
  '.github/ISSUE_TEMPLATE/bug-report.yml',
  '.github/ISSUE_TEMPLATE/feature-request.yml'
];

for (const file of localAssets) {
  if (!fs.existsSync(path.join(root, file))) throw new Error(`Missing release asset: ${file}`);
}

const manifest = JSON.parse(read('manifest.webmanifest'));
if (manifest.start_url !== '/RoadLaw/' || manifest.scope !== '/RoadLaw/') {
  throw new Error('Web manifest is not scoped to the GitHub Pages project path.');
}

const socialCard = fs.statSync(path.join(root, 'assets/roadlaw-social-card.png'));
if (socialCard.size < 10_000) throw new Error('Social sharing card appears empty or invalid.');

console.log('site release smoke test passed');
