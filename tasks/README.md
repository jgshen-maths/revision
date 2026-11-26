# Task cards and reports

A **task card** (`tasks/T###-short-name.md`) is written by Claude (planner). An executor agent runs it on its own
branch, writes a **report** (`reports/T###.md`) and opens a pull request. Claude reviews the report and the diff,
then merges into `main`.

## Card format
# T### — title
Status: ready | in review | done | blocked
Size: S (≤ 15 min) | M (≤ 1 h)
Branch: task/T###-short-name
Run on: MacBook
## Goal            — one or two sentences: what is different when this is done
## Steps           — exact actions: files, commands, the exact new text or code
## Checks          — command → expected output (all must pass)
## Screenshots     — how to reach the screen, file names (reports/T###/), what must be visible
## Do NOT          — files and actions that are off limits
## Commit          — the message to use, last line included

## Report format (reports/T###.md)
# Report T### — title
Executor: Antigravity (model) · Date:
## Result          — done | blocked — one line
## Steps           — done / failed, one line each (paste the error if failed)
## Checks          — each check with its real output
## Screenshots     — file — what it shows
## Files changed   — paste `git status --short` before committing
## Notes / problems — anything odd, questions for Claude, bugs noticed but not fixed
