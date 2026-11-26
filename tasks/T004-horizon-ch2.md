# T004 — Publish Horizon Chapter 2 (Rational Numbers)
Status: done (PR #4, merged)
Size: M (≤ 1 h)
Branch: task/T004-horizon-ch2
Run on: MacBook

## Goal
Horizon Chapter 2 goes on the site: four lesson pages (2.1–2.4) and its Horizon Gate, listed on the home page after
Chapter 1. Claude has already built the pages (renumbered, restyled, learning report in two parts: core and competition)
on the content branch `draft/horizon-ch2`. You copy them in, add the phone fix and analytics, link them from the home page,
check, screenshot and open a PR.

## Steps
1. `git checkout main && git pull && git checkout -b task/T004-horizon-ch2`
2. Take the five pages from the content branch:
   ```bash
   git fetch origin draft/horizon-ch2
   git checkout origin/draft/horizon-ch2 -- horizon/2-1-powers.html horizon/2-2-fractions.html horizon/2-3-rationals.html horizon/2-4-decimals.html horizon/gate-2.html
   ```
3. Phone fix on the four lesson pages (not the gate):
   ```bash
   python3 tools/tblfix.py horizon/2-1-powers.html horizon/2-2-fractions.html horizon/2-3-rationals.html horizon/2-4-decimals.html
   ```
   Expected: four lines starting `fixed:`.
4. Analytics: `python3 inject_analytics.py` → `done: 5 HTML file(s) updated.`
5. Home page. Save this script as `/tmp/ch2_index.py` exactly as written and run it from the repo root
   (`python3 /tmp/ch2_index.py` → `index edited`). It makes three exact replacements in `index.html`:
   adds Chapter 2 to `HORIZON`, changes the "next" line to Chapter 3, and lights the Chapter 2 marker in the sunrise scene.
   ```python
   # Index edits for Horizon Chapter 2 (used to verify card T004 text)
   p='index.html'; s=open(p,encoding='utf-8').read()
   OLD1="""href:'horizon/gate.html'}}
     ],"""
   NEW1="""href:'horizon/gate.html'}},
       {n:2, name:'Rational Numbers', tag:'Divide one integer by another and a new kind of number appears: powers lead to fractions, fractions build the rationals, and decimals show their other face.',
        sections:[
         {n:'2.1', title:'Powers and roots', d:'Squares, cubes and roots, the index laws, the order of calculation, estimation and last digits.', href:'horizon/2-1-powers.html', tags:['5 steps','Smart Thinking','Learning report']},
         {n:'2.2', title:'Fractions', d:'Where fractions come from, the number line, fractions as operators, comparing, and what lies between two fractions.', href:'horizon/2-2-fractions.html', tags:['5 steps','Smart Thinking','Learning report']},
         {n:'2.3', title:'Arithmetic of the rationals', d:'Adding, multiplying and dividing fractions, reciprocals, mixed calculations and fraction stories.', href:'horizon/2-3-rationals.html', tags:['5 steps','Smart Thinking','Learning report']},
         {n:'2.4', title:'Decimals', d:'Place value, which fractions stop or repeat, recurring decimals as fractions, rounding and bounds.', href:'horizon/2-4-decimals.html', tags:['5 steps','Smart Thinking','Learning report']}
        ],
        gate:{title:'HORIZON GATE', sub:'The Space Between', d:'Between any two numbers there is always another: Ford circles, Egyptian fractions and the music of ratios. A reading journey, no exercises.', href:'horizon/gate-2.html'}}
     ],"""
   OLD2="next:'Chapter 2 is on the horizon.'"; NEW2="next:'Chapter 3 is on the horizon.'"
   OLD3="${mk(548,284,5,false,'')}"; NEW3="${mk(548,284,6,true,'Chapter 2')}"
   for o,n in [(OLD1,NEW1),(OLD2,NEW2),(OLD3,NEW3)]:
       assert s.count(o)==1, o[:40]; s=s.replace(o,n)
   open(p,'w',encoding='utf-8').write(s); print('index edited')
   ```
6. Checks, screenshots, `reports/T004.md`, commit, push, pull request (AGENTS.md §2).

## Checks
1. `python3 inject_analytics.py` (second run) → `done: 0 HTML file(s) updated.`
2. `grep -c 'id="tblfix"' horizon/2-1-powers.html horizon/2-2-fractions.html horizon/2-3-rationals.html horizon/2-4-decimals.html` → each `:1`
3. `node tools/check.js` → last line `All 22 pages passed.`
4. `grep -c "horizon/2-" index.html` → `4` and `grep -c "horizon/gate-2.html" index.html` → `1`
5. `git status --short` before committing → `M index.html`, the five new files under `horizon/`, and `reports/`. **Nothing from `temp/`.**

## Screenshots
Serve the repo (`python3 -m http.server 8000`) and save this helper as `/tmp/t004.js`; run it from the repo root with
`NODE_PATH=$PWD/tools/node_modules node /tmp/t004.js` (after `mkdir -p reports/T004`):
```js
const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch();
  const shot = async (url, w, file, tab) => {
    const p = await b.newPage({ viewport: { width: w, height: 900 } });
    await p.goto('http://localhost:8000/' + url); await p.waitForTimeout(3000);
    if (tab) { await p.evaluate(t => document.querySelectorAll('#tabs button')[t - 1].click(), tab); await p.waitForTimeout(800); }
    await p.screenshot({ path: 'reports/T004/' + file, fullPage: !tab }); await p.close();
  };
  await shot('index.html#horizon', 390, 'index-horizon-phone.png');
  await shot('horizon/2-2-fractions.html', 1280, '2-2-tab1-desktop.png', 1);
  await shot('horizon/2-3-rationals.html', 390, '2-3-tab2-phone.png', 2);
  await shot('horizon/2-1-powers.html', 390, '2-1-report-phone.png', 7);
  await shot('horizon/gate-2.html', 390, 'gate-2-phone.png');
  await b.close();
})();
```
What must be visible:
- `index-horizon-phone.png` — Chapter 1 (1.0–1.3 + gate), then **2 Rational Numbers** with 2.1–2.4 and a second gold Horizon Gate card "The Space Between"; last line "Chapter 3 is on the horizon."
- `2-2-tab1-desktop.png` — navy header "Chapter 2 · Rational Numbers", Home button, tab 1 highlighted, pizza scene.
- `2-3-tab2-phone.png` — the page fits the phone; long products of brackets wrap onto a second line.
- `2-1-report-phone.png` — tab "7. Learning Report" (no "locked"), text "Finished so far: 0 of …" and "Finish a few questions".
- `gate-2-phone.png` — parchment gate, stamp reading "II CHAPTER", Home button bottom-left.

## Do NOT
- Do not edit the five new pages by hand (only `tools/tblfix.py` and `inject_analytics.py` change them).
- Do not change any other page, `AGENTS.md`, `tasks/`, `tools/`, `README.md`.
- Do not commit anything from `temp/`, `/tmp/ch2_index.py` or `/tmp/t004.js`.
- Do not push to `main`, do not merge, do not delete any branch.

## Commit
```
T004: publish Horizon Chapter 2 (2.1-2.4 and Horizon Gate II)

Executor: Antigravity
```
