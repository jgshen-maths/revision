# T008 — Write the "Let's do it together" steppers for Chapter 1 (Sections 1.1, 1.2, 1.3)
Status: ready (T007 merged)
Size: M (≤ 1 h per section)
Branch: task/T008-steppers-ch1
Run on: MacBook

## Goal
Chapter 1's integer sections get the same guided "Let's do it together" problems as Chapter 2 (T005/T006 are the accepted
standard: see `content/steppers/2-*.js`). Section 1.0 already has its own and is not part of this card.
Read `content/steppers/README.md` again first and follow its rules. **Which tabs** (these sections have a different tab plan):
- 1.1 `horizon/1-1-integers.html`: Tabs **1, 2, 3** (Tab 4 is Smart Thinking: no stepper) → 3 steppers
- 1.2 `horizon/1-2-primes.html`: Tabs **1, 2, 3, 4, 5** (all five are teaching tabs) → 5 steppers
- 1.3 `horizon/1-3-modular.html`: Tabs **1, 2, 3, 4** (Tab 5 is competitions: no stepper) → 4 steppers

Two house rules from these sections that your steppers must follow:
- Multiplication is taught as an **operator**: $3\times2$ means "apply the operator $3$ to $2$" (stretch $2$ to three times its
  length; a negative operator also flips direction on the number line). Use this language in 1.2 Tab 1.
- HCF and LCM are found **from prime factorisations** (smaller / larger power of each prime), as in 1.2 Tab 5.

## Steps
1. `git checkout main && git pull`, then confirm T007 is merged: `git log --oneline -30 | grep "T007:"` must print a line.
   If it prints nothing, stop and report "blocked: T007 not merged". Otherwise `git checkout -b task/T008-steppers-ch1`.
2. For each section in turn (1.1, 1.2, 1.3):
   1. Read the listed tabs: text, Techniques, worked examples, "Check your understanding" exercises.
   2. For each listed tab choose its **main method** and write one stepper on a **fresh problem**.
      In the report: one line per tab, the method (with its Technique or Theorem number) and which exercises need it.
   3. Write `content/steppers/1-1.js` (then `1-2.js`, `1-3.js`) with keys only for the listed tabs.
   4. Check every number (answers and wrong options) with `/tmp/t008_<section>.py`; paste script and output in the report.
   5. `python3 tools/add_steppers.py <page> content/steppers/<section>.js` → `added N stepper(s) ...` (N = 3, 5, 4)
3. Checks, screenshots, report, commit, push, pull request.

## Checks
1. Running each add_steppers command a second time gives the same line, and
   `grep -c 'class="tutor" data-stepper' horizon/1-1-integers.html horizon/1-2-primes.html horizon/1-3-modular.html` → `:3`, `:5`, `:4`.
2. `node tools/check.js` → `All 22 pages passed.`
3. `python3 inject_analytics.py` → `done: 0 HTML file(s) updated.`
4. `git status --short` → the three pages (`M`), the three new `content/steppers/1-x.js` files and `reports/` only.

## Screenshots
As in T005, for every section and listed tab at 390 px: the first step with one wrong option's feedback showing
(`reports/T008/<section>-tN-start.png`) and the end message (`reports/T008/<section>-tN-end.png`): 24 files. Helper scripts go in `/tmp`.

## Do NOT
- Do not change any text, exercise or answer already in the page; only `tools/add_steppers.py` changes the pages.
- Do not touch other pages, `tools/`, `AGENTS.md`, `tasks/`, `index.html`.
- Do not push to `main`, do not merge, do not delete any branch.

## Commit
```
T008: Let's do it together steppers for 1.1, 1.2 and 1.3

Executor: Antigravity
```
