import { readdir, readFile } from 'node:fs/promises';
import { extname, join, relative } from 'node:path';

const ROOT = process.cwd();
const TARGETS = ['app', 'components', 'content', 'tests'];
const EXTENSIONS = new Set(['.ts', '.tsx', '.js', '.jsx', '.mjs']);
const violations = [];

const rules = [
  { name: 'debugger statement', pattern: /\bdebugger\s*;/g },
  { name: 'console.log', pattern: /\bconsole\.log\s*\(/g },
  { name: '@ts-ignore', pattern: /@ts-ignore\b/g },
  { name: 'hard-coded private key', pattern: /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/g },
  { name: 'GitHub token-like secret', pattern: /\bgh[pousr]_[A-Za-z0-9_]{20,}\b/g },
  { name: 'generic API key assignment', pattern: /\b(?:api[_-]?key|access[_-]?token|client[_-]?secret)\s*[:=]\s*['"][^'"\n]{12,}['"]/gi },
];

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      await walk(full);
      continue;
    }
    if (!EXTENSIONS.has(extname(entry.name))) continue;
    const text = await readFile(full, 'utf8');
    for (const rule of rules) {
      rule.pattern.lastIndex = 0;
      for (const match of text.matchAll(rule.pattern)) {
        const line = text.slice(0, match.index).split('\n').length;
        violations.push(`${relative(ROOT, full)}:${line} — ${rule.name}`);
      }
    }
  }
}

for (const target of TARGETS) {
  await walk(join(ROOT, target));
}

if (violations.length) {
  console.error('Source policy violations found:\n' + violations.map((v) => `- ${v}`).join('\n'));
  process.exit(1);
}

console.info(`Source policy passed across ${TARGETS.join(', ')}.`);
