# T005 — Pilot: write the "Let's do it together" steppers for Section 2.1 (Powers)
Status: ready
Size: M (≤ 1 h)
Branch: task/T005-steppers-2-1
Run on: MacBook

## Goal
Section 2.1 gets one guided "Let's do it together" problem in each of Tabs 1–4. **This card is a pilot: you write the
teaching content yourself** (Claude reviews every step before merging). Read `content/steppers/README.md` first: it has
the file format and the teaching rules. Follow them exactly.

## Steps
1. `git checkout main && git pull && git checkout -b task/T005-steppers-2-1`
2. Read `content/steppers/README.md`. Then read Tabs 1–4 of `horizon/2-1-powers.html` (the text, the Techniques, the worked
   examples and the "Check your understanding" exercises of each tab).
3. For each of Tabs 1–4 choose the tab's **main method** and write one stepper on a **fresh problem**:
   - Tab 1 (Squares, cubes and roots), Tab 2 (Index laws), Tab 3 (Order of calculation), Tab 4 (Estimation and digits).
   In the report, for each tab, write one line: which method you chose and why (which exercises need it).
4. Write all four in `content/steppers/2-1.js`.
5. Check every number with Python: write `/tmp/t005_check.py` that recomputes every answer and every wrong option you used,
   run it, and paste the script and its output into the report.
6. `python3 tools/add_steppers.py horizon/2-1-powers.html content/steppers/2-1.js`
   → `added 4 stepper(s) to horizon/2-1-powers.html: t1 (n steps), t2 (...), t3 (...), t4 (...)`
7. Checks, screenshots, report, commit, push, pull request.

## Checks
1. Running step 6 a second time gives the same `added 4 stepper(s)` line, and `grep -c 'class="tutor" data-stepper' horizon/2-1-powers.html` → `4`.
2. `node tools/check.js horizon/2-1-powers.html` → `All 1 pages passed.`
3. `python3 inject_analytics.py` → `done: 0 HTML file(s) updated.`
4. `git status --short` → `M horizon/2-1-powers.html`, `?? content/steppers/2-1.js`, `?? reports/` only.

## Screenshots
For each tab 1–4, at 390 px: open the tab, scroll the stepper into view, and save two pictures: the first step
(`reports/T005/tN-start.png`) and the end message after solving it (`reports/T005/tN-end.png`), pressing one wrong option
on the way so its feedback shows. Helper scripts go in `/tmp`.

## Do NOT
- Do not change any text, exercise or answer already in the page; only the tool in step 6 changes the page.
- Do not touch other pages, `tools/`, `AGENTS.md`, `tasks/`, `index.html`.
- Do not push to `main`, do not merge, do not delete any branch.

## Commit
```
T005: Let's do it together steppers for 2.1 (pilot)

Executor: Antigravity
```
