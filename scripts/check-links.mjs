import { readdir, readFile, stat } from 'node:fs/promises';
import { dirname, extname, join, normalize, relative, resolve } from 'node:path';

const ROOT = resolve(process.cwd(), 'out');
const htmlFiles = [];
const failures = [];

async function walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) await walk(full);
    else if (entry.isFile() && extname(entry.name) === '.html') htmlFiles.push(full);
  }
}

function decodeHref(value) {
  return value.replace(/&amp;/g, '&').trim();
}

function toCandidate(sourceFile, pathname) {
  const clean = pathname.split('?')[0];
  if (clean.startsWith('/')) {
    const absolute = join(ROOT, clean);
    return clean.endsWith('/') ? join(absolute, 'index.html') : absolute;
  }
  const absolute = resolve(dirname(sourceFile), clean);
  return clean.endsWith('/') ? join(absolute, 'index.html') : absolute;
}

async function exists(path) {
  try {
    const info = await stat(path);
    if (info.isDirectory()) return exists(join(path, 'index.html'));
    return info.isFile();
  } catch {
    return false;
  }
}

function hasFragment(html, fragment) {
  if (!fragment) return true;
  const decoded = decodeURIComponent(fragment);
  const escaped = decoded.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return new RegExp(`(?:id|name)=["']${escaped}["']`).test(html);
}

await walk(ROOT);

for (const file of htmlFiles) {
  const html = await readFile(file, 'utf8');
  const hrefs = [...html.matchAll(/\bhref=["']([^"']+)["']/gi)].map((match) => decodeHref(match[1]));

  for (const href of hrefs) {
    if (!href || href.startsWith('http://') || href.startsWith('https://') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('data:') || href.startsWith('javascript:')) continue;

    const [pathname, fragment] = href.split('#', 2);
    const target = pathname ? toCandidate(file, pathname) : file;

    if (!(await exists(target))) {
      failures.push(`${relative(ROOT, file)} -> ${href} (missing ${relative(ROOT, normalize(target))})`);
      continue;
    }

    if (fragment) {
      const targetHtml = await readFile(target, 'utf8');
      if (!hasFragment(targetHtml, fragment)) failures.push(`${relative(ROOT, file)} -> ${href} (missing fragment)`);
    }
  }
}

if (failures.length) {
  console.error(`Broken internal links found (${failures.length}):\n${failures.map((item) => `- ${item}`).join('\n')}`);
  process.exit(1);
}

console.info(`Validated internal links and fragments across ${htmlFiles.length} generated HTML files.`);
