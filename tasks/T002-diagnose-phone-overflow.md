# T002 — Find what sticks out on four pages at phone width
Status: done (PR #2, merged)
Size: S (≤ 15 min)
Branch: task/T002-diagnose-phone-overflow
Run on: MacBook

## Goal
T001 found four pages that are wider than a 390 px phone. This card only **collects evidence** (checker output and
screenshots) so Claude can write the exact fix in the next card. No page is changed.

## Steps
1. `git checkout main && git pull && git checkout -b task/T002-diagnose-phone-overflow`
   (`tools/check.js` on main now names the elements that stick out.)
2. `mkdir -p reports/T002 && rm -rf /tmp/atlas-shots`
3. Run:
   ```bash
   node tools/check.js --shots horizon/1-1-integers.html horizon/1-2-primes.html horizon/1-3-modular.html ncea-l3-probability/91586-lesson-1.html
   ```
   Paste the **whole** output into the report under Checks.
4. Copy only these four screenshots into the report folder:
   ```bash
   cp /tmp/atlas-shots/horizon_1-1-integers_html_3.png      reports/T002/1-1-tab3.png
   cp /tmp/atlas-shots/horizon_1-2-primes_html_3.png        reports/T002/1-2-tab3.png
   cp /tmp/atlas-shots/horizon_1-3-modular_html_4.png       reports/T002/1-3-tab4.png
   cp /tmp/atlas-shots/ncea-l3-probability_91586-lesson-1_html_3.png reports/T002/91586-1-tab3.png
   ```
   If the checker reports a different failing tab number, copy that tab's file instead and say so in the report.
5. Write `reports/T002.md`, commit, push the branch, open the pull request (AGENTS.md §2 steps 5–7).

## Checks
1. The checker output contains at least one line starting with `    sticks out:` under each FAIL page.
2. `ls reports/T002 | wc -l` → `4`
3. `git status --short` before committing → only `?? reports/` (nothing else).

## Screenshots
The four files from step 4. In the report, for each one write one line: what you see at the right edge of the
phone screen (for example "a long formula runs off the screen", "a table is cut off").

## Do NOT
- Do not change any `.html` file, `index.html`, `AGENTS.md`, `tasks/`, `tools/` or `README.md`.
- Do not try to fix the overflow.
- Do not push to `main`, do not merge, do not delete the branch.

## Commit
```
T002: phone overflow evidence for four pages

Executor: Antigravity
```
