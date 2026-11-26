// Site checker for Maths Atlas.  Usage (from the repo root):
//   node tools/check.js                 -> check every page
//   node tools/check.js horizon/1-0-sets.html   -> check some pages
//   node tools/check.js --shots         -> also save phone screenshots of every tab to /tmp/atlas-shots/
// Needs: cd tools && npm install && npx playwright install chromium   (once per Mac)
// Exit code 0 = all checks passed, 1 = something failed (details printed).
const http = require('http'), fs = require('fs'), path = require('path');
const { chromium } = require('playwright');

const ROOT = path.resolve(__dirname, '..');
const TOKEN = '4572b9e5c4984cd3a0d53765770f398c';
const args = process.argv.slice(2);
const SHOTS = args.includes('--shots');
const KATEX_DIR = process.env.KATEX_DIR || '';            // offline sandboxes only
const SHOT_DIR = '/tmp/atlas-shots';

function listPages(dir = ROOT, out = []) {
  for (const n of fs.readdirSync(dir)) {
    if (n.startsWith('.') || n === 'node_modules' || n === 'tools' || n === 'tasks' || n === 'reports') continue;
    const p = path.join(dir, n);
    if (fs.statSync(p).isDirectory()) listPages(p, out);
    else if (n.endsWith('.html')) out.push(path.relative(ROOT, p));
  }
  return out.sort();
}
const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.png': 'image/png', '.svg': 'image/svg+xml', '.json': 'application/json' };
function serve() {
  return new Promise(res => {
    const s = http.createServer((q, r) => {
      const f = path.join(ROOT, decodeURIComponent(q.url.split(/[?#]/)[0]));
      if (!f.startsWith(ROOT) || !fs.existsSync(f) || fs.statSync(f).isDirectory()) { r.writeHead(404); return r.end(); }
      r.writeHead(200, { 'Content-Type': MIME[path.extname(f)] || 'application/octet-stream' }); fs.createReadStream(f).pipe(r);
    }).listen(0, () => res(s));
  });
}

(async () => {
  const pages = args.filter(a => a.endsWith('.html')).length ? args.filter(a => a.endsWith('.html')) : listPages();
  const srv = await serve(); const base = `http://localhost:${srv.address().port}/`;
  const browser = await chromium.launch(); let failed = 0;
  if (SHOTS) fs.mkdirSync(SHOT_DIR, { recursive: true });
  for (const p of pages) {
    const src = fs.readFileSync(path.join(ROOT, p), 'utf8'); const probs = [];
    const ctx = await browser.newContext({ viewport: { width: 390, height: 900 } }); const pg = await ctx.newPage();
    const errs = []; pg.on('pageerror', e => errs.push(e.message));
    await pg.route('**/static.cloudflareinsights.com/**', r => r.fulfill({ body: '', contentType: 'text/javascript' }));
    if (KATEX_DIR) await pg.route('**/cdn.jsdelivr.net/**', r => { const u = r.request().url(); return u.includes('/katex') ? r.fulfill({ path: path.join(KATEX_DIR, u.split('/dist/')[1]) }) : r.abort(); });
    await pg.goto(base + p, { waitUntil: 'load' }); await pg.waitForTimeout(1200);
    // static checks
    if ((src.match(new RegExp(TOKEN, 'g')) || []).length !== 1) probs.push('analytics beacon missing or duplicated (run python3 inject_analytics.py)');
    if (p !== 'index.html' && !/href="\.\.\/index\.html/.test(src)) probs.push('no Home link to ../index.html');
    if (/Designed by Mr\.? Shen\s*·\s*V\d/i.test(src)) probs.push('version label inside the page');
    // dynamic checks, tab by tab
    const tabs = await pg.$$('#tabs button, #tabs .tab, #tabs .tab-link');
    const n = Math.max(tabs.length, 1);
    for (let i = 0; i < n; i++) {
      if (tabs.length) { await pg.evaluate(i => { const b = document.querySelectorAll('#tabs button, #tabs .tab, #tabs .tab-link')[i]; b && b.click(); }, i); await pg.waitForTimeout(500); }
      const r = await pg.evaluate(() => {
        document.querySelectorAll('details').forEach(d => d.open = true);
        const sw = document.documentElement.scrollWidth;
        const kerr = document.querySelectorAll('.katex-error').length;
        // elements that stick out past the phone edge and are not inside a narrower scroll box
        const inScroll = e => { let a = e.parentElement; while (a && a !== document.body) { const ov = getComputedStyle(a).overflowX; if ((ov === 'auto' || ov === 'scroll' || ov === 'hidden') && a.getBoundingClientRect().right <= 392) return true; a = a.parentElement; } return false; };
        const out = [...document.querySelectorAll('body *')].filter(e => { const b = e.getBoundingClientRect(); return b.width && b.right > 392 && !inScroll(e) && getComputedStyle(e).position !== 'fixed'; });
        // keep the outermost offenders (their children are usually offenders too)
        const top = out.filter(e => !out.includes(e.parentElement));
        const desc = e => { let d = e.tagName.toLowerCase(); if (e.id) d += '#' + e.id; if (typeof e.className === 'string' && e.className.trim()) d += '.' + e.className.trim().split(/\s+/).slice(0, 2).join('.'); const k = e.closest('.katex') || e.querySelector('.katex'); const t = (k || e).textContent.replace(/\s+/g, ' ').trim().slice(0, 60); return `${d} (right edge ${Math.round(e.getBoundingClientRect().right)}px${k ? ', inside maths' : ''}) "${t}"`; };
        const wide = top.slice(0, 4).map(desc);
        return { sw, kerr, wide };
      });
      const lab = tabs.length ? `tab ${i + 1}` : 'page';
      if (r.sw > 392) { probs.push(`${lab}: page is ${r.sw}px wide on a 390px phone`); r.wide.forEach(w => probs.push('    sticks out: ' + w)); }
      if (r.kerr) probs.push(`${lab}: ${r.kerr} KaTeX error(s)`);
      if (SHOTS) await pg.screenshot({ path: `${SHOT_DIR}/${p.replace(/[\/.]/g, '_')}_${i + 1}.png`, fullPage: true });
    }
    // index: every lesson link must exist
    if (p === 'index.html') {
      const hrefs = [...src.replace(/\/\*[\s\S]*?\*\//g, '').matchAll(/href\s*:\s*'([^']+\.html)'/g)].map(m => m[1]);
      if (!hrefs.length) probs.push('index: no lesson links found in RESOURCES/HORIZON');
      for (const h of new Set(hrefs)) if (!fs.existsSync(path.join(ROOT, h))) probs.push(`index: link to missing file ${h}`);
    }
    if (errs.length) probs.push('JavaScript errors: ' + errs.slice(0, 2).join(' | '));
    console.log((probs.length ? 'FAIL ' : 'ok   ') + p + (tabs.length ? `  (${tabs.length} tabs)` : ''));
    probs.forEach(x => console.log('       - ' + x)); if (probs.length) failed++;
    await ctx.close();
  }
  await browser.close(); srv.close();
  console.log(failed ? `\n${failed} page(s) failed.` : `\nAll ${pages.length} pages passed.`);
  if (SHOTS) console.log('Screenshots in ' + SHOT_DIR);
  process.exit(failed ? 1 : 0);
})();
