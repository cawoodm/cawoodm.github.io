// Assembles dist/ for the Cloudflare deploy.
//
// GitHub Pages serves this repo from the root, so the root cannot be the
// Cloudflare assets directory: wrangler writes .wrangler/state/*.sqlite-wal
// into the directory it watches, which makes `wrangler dev` reload forever, and
// everything at the root (including .env and .git) would be published.
//
// So the deploy gets its own directory and this script is the only gate: a file
// reaches Cloudflare only if it is copied here.
import { cp, rm, mkdir, stat, readdir } from 'node:fs/promises';
import { join, basename } from 'node:path';

const ROOT = import.meta.dirname;
const DIST = join(ROOT, 'dist');

// Root-level files to publish. Everything else at the root stays unpublished,
// so a new stray file is private by default rather than public by default.
const ROOT_FILES = ['index.html', 'favicon.ico', 'favicon.svg'];

// Not site content: VCS, tooling state, dependencies, our own output.
const SKIP_DIRS = new Set(['.git', '.vite', '.wrangler', 'node_modules', 'dist']);

// Refused even inside a published subdirectory — these must never be served.
const SECRET = /^(\.env|\.dev\.vars|\.bashrc)/;

// Workers rejects any single asset over 25 MiB; catch it here with a path
// instead of failing halfway through a deploy.
const MAX_ASSET_SIZE = 25 * 1024 * 1024;

const skipped = [];
const tooLarge = [];

async function filter(src) {
  const name = basename(src);
  if (SECRET.test(name)) {
    skipped.push(src.slice(ROOT.length + 1));
    return false;
  }
  const s = await stat(src);
  if (s.isFile() && s.size > MAX_ASSET_SIZE) {
    tooLarge.push(`${src.slice(ROOT.length + 1)} (${(s.size / 1024 / 1024).toFixed(1)} MiB)`);
    return false;
  }
  return true;
}

await rm(DIST, { recursive: true, force: true });
await mkdir(DIST, { recursive: true });

const entries = await readdir(ROOT, { withFileTypes: true });
let dirCount = 0;

for (const entry of entries) {
  if (!entry.isDirectory() || SKIP_DIRS.has(entry.name)) continue;
  await cp(join(ROOT, entry.name), join(DIST, entry.name), { recursive: true, filter });
  dirCount++;
}

let fileCount = 0;
for (const name of ROOT_FILES) {
  try {
    await cp(join(ROOT, name), join(DIST, name));
    fileCount++;
  } catch (e) {
    if (e.code !== 'ENOENT') throw e;
    console.warn(`  ! listed in ROOT_FILES but missing: ${name}`);
  }
}

console.log(`dist/: ${dirCount} directories + ${fileCount} root files`);
if (skipped.length) console.log(`  refused (secret): ${skipped.join(', ')}`);
if (tooLarge.length) console.log(`  refused (>25 MiB): ${tooLarge.join(', ')}`);
