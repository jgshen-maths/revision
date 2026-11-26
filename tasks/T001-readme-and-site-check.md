# T001 — Update README course list and run the first site check
Status: done (PR #1, merged)
Size: S (≤ 15 min, plus one-time tool setup)
Branch: task/T001-readme-and-site-check
Run on: MacBook

## Goal
README.md lists every page that is live today, and the site checker runs on the MacBook for the first time.
This card also tests the workflow (branch → report → pull request).

## Steps
1. `git checkout main && git pull && git checkout -b task/T001-readme-and-site-check`
2. One-time setup (skip a part that is already installed):
   ```bash
   cd tools && npm install && npx playwright install chromium && cd ..
   ```
3. In `README.md`, replace the whole section that starts with the line `## Courses` and ends just before the line
   `## Add a new resource` with exactly this text (keep one blank line before `## Add a new resource`):
   ```markdown
   ## Courses
   ### NCEA
   - `y10-statistics-probability/revision.html`: Year 10 Statistics and Probability (interactive revision)
   - `ncea-l3-probability/91585-lesson-1.html`, `91585-lesson-2.html`: Level 3 Probability Concepts (91585), Lessons 1–2
   - `ncea-l3-probability/91586-lesson-1.html`, `91586-lesson-2.html`: Level 3 Probability Distributions (91586), Lessons 1–2

   ### Cambridge
   - `cam-y8-algebra/algebra-part-a.html`, `algebra-part-b.html`: Year 8 Algebra, Parts A–B
   - `cam-y8-number/number-part-a.html` … `number-part-d.html`: Year 8 Number, Parts A–D

   ### Horizon (Mr Shen's own curriculum)
   Chapter 1 · Sets and Integers, in `horizon/`:
   - `1-0-sets.html`: 1.0 The language of sets
   - `1-1-integers.html`: 1.1 Introducing integers
   - `1-2-primes.html`: 1.2 Multiplication and primes
   - `1-3-modular.html`: 1.3 Modular arithmetic
   - `gate.html`: Horizon Gate (a reading journey that closes the chapter)

   Horizon sections are listed in `HORIZON` in `index.html`, not in `RESOURCES`.

   ## Workflow
   Claude plans and writes task cards in `tasks/`; the executor follows `AGENTS.md`. Check the site with `node tools/check.js`.
   ```
4. Run the checks below and write `reports/T001.md` (template in `tasks/README.md`).
5. Take the screenshots below.
6. Commit, push the branch, open the pull request (AGENTS.md §2 steps 6–7).

## Checks
1. `python3 inject_analytics.py` → `done: 0 HTML file(s) updated.`
2. `node tools/check.js` → last line `All 17 pages passed.`
3. `grep -c "horizon/" README.md` → `1`  (only the line "Chapter 1 · Sets and Integers, in `horizon/`:")
4. `grep -c "^## " README.md` → `4`  (Courses, Workflow, Add a new resource, Publish)
5. `git status --short` before committing → only `M README.md` and the new `reports/` files.

## Screenshots
Serve the repo: `python3 -m http.server 8000` (in the repo root, in a second terminal). Then run this helper from `/tmp`
(save it as `/tmp/t001.js`; run with `NODE_PATH=$PWD/tools/node_modules node /tmp/t001.js` from the repo root):
```js
const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch();
  for (const [w, name] of [[390, 'index-horizon-phone'], [1280, 'index-horizon-desktop']]) {
    const p = await b.newPage({ viewport: { width: w, height: 900 } });
    await p.goto('http://localhost:8000/index.html#horizon');
    await p.waitForTimeout(3000);                       // the sun rises for about 2.4 s
    await p.screenshot({ path: `reports/T001/${name}.png`, fullPage: true });
    await p.close();
  }
  await b.close();
})();
```
Create the folder first: `mkdir -p reports/T001`.
- `reports/T001/index-horizon-phone.png` — Horizon board at 390 px: sunrise scene, stations 1.0, 1.1, 1.2, 1.3 and the gold Horizon Gate card.
- `reports/T001/index-horizon-desktop.png` — the same at 1280 px.

## Do NOT
- Do not change any `.html` file, `index.html`, `AGENTS.md`, `tasks/` or `tools/`.
- Do not commit `tools/node_modules/` (it is in `.gitignore`) or the helper script.
- Do not push to `main`, do not merge, do not delete the branch.

## Commit
```
T001: update README course list; first site check

Executor: Antigravity
```
