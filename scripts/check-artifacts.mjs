import { readFile, stat } from 'node:fs/promises';
import { join, resolve } from 'node:path';

const OUT = resolve(process.cwd(), 'out');
const required = [
  'index.html',
  'about/index.html',
  'programs/index.html',
  'technology/index.html',
  'projects/index.html',
  'developers/index.html',
  'security/index.html',
  'open-government/index.html',
  'news/index.html',
  'roadmap/index.html',
  'status/index.html',
  'privacy/index.html',
  'accessibility/index.html',
  'contact/index.html',
  '404.html',
  'robots.txt',
  'sitemap.xml',
  'manifest.webmanifest',
  'brand/us-spurs-mark.svg',
  'brand/og-card.svg',
  'data/projects.json',
];

const failures = [];

for (const path of required) {
  try {
    const info = await stat(join(OUT, path));
    if (!info.isFile() || info.size === 0) failures.push(`${path}: missing or empty`);
  } catch {
    failures.push(`${path}: missing`);
  }
}

const home = await readFile(join(OUT, 'index.html'), 'utf8');
const requiredHomeSignals = [
  ['canonical URL', /<link[^>]+rel=["']canonical["'][^>]+href=["']https:\/\/spurs\.gov\/?["']/i],
  ['meta description', /<meta[^>]+name=["']description["'][^>]+content=["'][^"']{40,}["']/i],
  ['OpenGraph title', /<meta[^>]+property=["']og:title["']/i],
  ['OpenGraph image', /<meta[^>]+property=["']og:image["']/i],
  ['structured data', /application\/ld\+json/i],
  ['viewport', /<meta[^>]+name=["']viewport["']/i],
  ['language', /<html[^>]+lang=["']en["']/i],
];

for (const [label, pattern] of requiredHomeSignals) {
  if (!pattern.test(home)) failures.push(`index.html: missing ${label}`);
}

const robots = await readFile(join(OUT, 'robots.txt'), 'utf8');
if (!/Sitemap:\s*https:\/\/spurs\.gov\/sitemap\.xml/i.test(robots)) failures.push('robots.txt: sitemap URL missing');

const sitemap = await readFile(join(OUT, 'sitemap.xml'), 'utf8');
for (const route of ['', 'about', 'programs', 'technology', 'projects', 'developers', 'security', 'open-government']) {
  const url = `https://spurs.gov/${route ? `${route}/` : ''}`;
  if (!sitemap.includes(url)) failures.push(`sitemap.xml: missing ${url}`);
}

const projects = JSON.parse(await readFile(join(OUT, 'data/projects.json'), 'utf8'));
if (!Array.isArray(projects) || projects.length < 5) failures.push('data/projects.json: expected at least five public projects');

if (failures.length) {
  console.error(`Generated artifact checks failed (${failures.length}):\n${failures.map((item) => `- ${item}`).join('\n')}`);
  process.exit(1);
}

console.info(`Generated artifact checks passed (${required.length} required artifacts).`);
