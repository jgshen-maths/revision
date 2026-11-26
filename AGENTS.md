# AGENTS.md — Maths Atlas (jgshen-maths/revision)

Read this whole file before any work. It is the project manual for every coding agent.

## 1. Who does what
| Role | Who | Does |
|---|---|---|
| Producer | Mr Shen | Decides. Tests the result and gives feedback. |
| Planner and reviewer | Claude (claude.ai chat) | Designs lessons, writes the maths and lesson content, writes task cards, reviews your pull request, merges. |
| Executor | **you** (Antigravity) | Runs ONE task card exactly as written, tests, reports, opens a PR. |

You are the executor. Do not redesign, rename, refactor or "improve" things the card does not ask for.
If the card is unclear or a step fails twice, stop and write the problem in the report.

## 2. The loop (one branch and one pull request per card)
1. `git checkout main && git pull`
2. Open the card the producer names, e.g. `tasks/T002-name.md`.
3. Make the branch the card names: `git checkout -b task/T002-name`
   - Some cards start from a **content branch** Claude has pushed (e.g. `draft/horizon-1-4`). The card then says
     `git fetch origin draft/<name>` and which files to take from it with `git checkout origin/draft/<name> -- <file>`.
4. Do the steps in order. Do not skip the checks.
5. Write `reports/<card id>.md` with the template in `tasks/README.md`. Screenshots go in `reports/<card id>/`.
6. Commit on the branch with the message the card gives, then `git push -u origin <branch>`.
7. `gh pr create --base main --title "<card id>: <title>" --body-file reports/<card id>.md`
8. Tell the producer: "T002 done, PR opened" (or "T002 blocked: <one line>").

**Never push to `main` and never merge.** Claude reviews the pull request and merges it.
If Claude writes change requests in the pull request, fix them on the same branch, push again,
and add a short "Fix round 2" section at the end of the report.

## 3. Project map
This is a public GitHub Pages site (deployed from `main`, root folder). Every page is a single self-contained HTML file.
- `index.html` — home page ("Maths Atlas"). Three boards: NCEA, Cambridge, Horizon.
  - `RESOURCES` (in the script) lists NCEA and Cambridge lessons by `board/year/strand`.
  - `HORIZON` (in the script) lists Horizon chapters, their sections and the chapter's Horizon Gate.
  - `BOARDS` defines the boards. The comment block above `RESOURCES` explains how to add a line.
- `y10-statistics-probability/` — NCEA Year 10 statistics and probability revision.
- `cam-y8-algebra/`, `cam-y8-number/` — Cambridge Year 8 lessons (Parts A, B, …).
- `ncea-l3-probability/` — NCEA Level 3 statistics lessons (91585, 91586).
- `horizon/` — Mr Shen's own curriculum. File names follow the section number: `1-0-sets.html` is Section 1.0,
  `1-1-integers.html` is Section 1.1, … `gate.html` is the chapter's Horizon Gate (a reading page, not a lesson).
- `inject_analytics.py` — adds the Cloudflare Web Analytics beacon to every page. Safe to run again (skips pages that have it).
- `tools/check.js` — site checker (phone width, KaTeX errors, JavaScript errors, Home link, analytics, index links).
- `tools/tblfix.py` — phone fix for lesson pages (tables scroll in their own box; KaTeX cannot widen the page). Run it on every new lesson page. Safe to run twice.
- `temp/` — Mr Shen's source files for new lessons. **Never commit it** (it is in `.gitignore`).
- `tasks/` — task cards (written by Claude). `reports/` — your reports and screenshots.

## 4. Commands (macOS, run from the repo root)
Setup, once per Mac:
```bash
cd tools && npm install && npx playwright install chromium && cd ..
```
For every new or replaced lesson page, first run the phone fix: `python3 tools/tblfix.py <page.html> ...` (prints `fixed:` or `already fixed:`).
Add the analytics beacon to any new page (run before every commit that adds or replaces a page):
```bash
python3 inject_analytics.py
```
Expected: `done: N HTML file(s) updated.` A second run must print `done: 0 HTML file(s) updated.`

Check the whole site (about 1–2 minutes):
```bash
node tools/check.js
```
Expected last line: `All <N> pages passed.` (N = number of HTML pages). Any `FAIL` line lists the problem under it.
Check some pages only: `node tools/check.js horizon/1-0-sets.html index.html`

Screenshots of every tab of the checked pages at phone width (390 px): add `--shots`; files go to `/tmp/atlas-shots/`.
For other screenshots (a board of the home page, desktop width) the card gives a short Playwright script; keep helper
scripts outside the repo (e.g. `/tmp`). Always serve over local HTTP (`python3 -m http.server 8000`), never `file://`.

## 5. Hard rules
- Page content is in **English**. Do not translate, reword or "fix" maths, answers, solutions or lesson text unless the card gives the new text.
- Never change numbers, answers, question data or lesson scoring unless the card gives them.
- Every lesson page keeps: the Home button (link to `../index.html`), the 申 seal footer, the favicon, and its learning report.
  No version label (e.g. "V2") anywhere inside a page; versions live only in Claude's file names.
- Horizon numbering: sections are `chapter.section` (Chapter 1 = 1.0, 1.1, 1.2, 1.3). Use the numbers the card gives.
- This repo is **public**. Never commit question banks, source uploads, teacher handouts or answer keys unless the card says so.
- Never delete files. Never force-push. Never rewrite git history.
- Never commit secrets, `.env` files, `node_modules/` or anything outside this repo.
- One card = one branch = one pull request. The report goes in the same branch.
- Every commit message ends with the line the card gives.
