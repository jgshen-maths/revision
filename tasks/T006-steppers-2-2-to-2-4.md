# T006 — Write the "Let's do it together" steppers for Sections 2.2, 2.3 and 2.4
Status: ready
Size: M (≤ 1 h per section)
Branch: task/T006-steppers-2-2-to-2-4
Run on: MacBook

## Goal
Sections 2.2, 2.3 and 2.4 each get one guided "Let's do it together" problem in Tabs 1–4, written by you, the same way as
the pilot T005 (merged; see `content/steppers/2-1.js` and `reports/T005.md` for the standard Claude accepted).
Read `content/steppers/README.md` again first and follow its rules exactly.

## Steps
1. `git checkout main && git pull && git checkout -b task/T006-steppers-2-2-to-2-4`
2. For each section in turn (2.2 Fractions, 2.3 Arithmetic of the rationals, 2.4 Decimals):
   1. Read Tabs 1–4 of the page (`horizon/2-2-fractions.html`, `horizon/2-3-rationals.html`, `horizon/2-4-decimals.html`):
      text, Techniques, worked examples, "Check your understanding" exercises.
   2. For each tab choose its **main method** and write one stepper on a **fresh problem** (not an exercise or homework question).
      In the report: one line per tab, the method (with its Technique number) and which exercises need it.
   3. Write `content/steppers/2-2.js` (then `2-3.js`, `2-4.js`).
   4. Check every number (answers and wrong options) with a Python script `/tmp/t006_<section>.py`; paste script and output in the report.
      For fractions use `fractions.Fraction` so the check is exact.
   5. `python3 tools/add_steppers.py <page> content/steppers/<section>.js` → `added 4 stepper(s) ...`
3. Checks, screenshots, report, commit, push, pull request.

## Checks
1. Running each add_steppers command a second time gives the same `added 4 stepper(s)` line, and
   `grep -c 'class="tutor" data-stepper' horizon/2-2-fractions.html horizon/2-3-rationals.html horizon/2-4-decimals.html` → each `:4`.
2. `node tools/check.js` → `All 22 pages passed.`
3. `python3 inject_analytics.py` → `done: 0 HTML file(s) updated.`
4. `git status --short` → the three pages (`M`), the three new `content/steppers/2-x.js` files and `reports/` only.

## Screenshots
As in T005, for every section and tab at 390 px: the first step with one wrong option's feedback showing
(`reports/T006/<section>-tN-start.png`) and the end message (`reports/T006/<section>-tN-end.png`): 24 files. Helper scripts go in `/tmp`.

## Do NOT
- Do not change any text, exercise or answer already in the page; only `tools/add_steppers.py` changes the pages.
- Do not touch other pages, `tools/`, `AGENTS.md`, `tasks/`, `index.html`.
- Do not push to `main`, do not merge, do not delete any branch.

## Commit
```
T006: Let's do it together steppers for 2.2, 2.3 and 2.4

Executor: Antigravity
```
