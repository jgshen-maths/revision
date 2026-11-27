# T007 — Fix four formulas where "<" breaks the page
Status: done (PR #7, merged)
Size: S (≤ 15 min)
Branch: task/T007-fix-less-than
Run on: MacBook

## Goal
In 2.3 and 2.4 four inline formulas contain a raw `<` followed by a letter, so the browser reads it as an HTML tag
and the rest of the sentence disappears. (Found by the executor in `reports/T006.md`; Claude then found the other three.) Replace `<` by KaTeX's `\lt` in exactly these four places.

## Steps
1. `git checkout main && git pull && git checkout -b task/T007-fix-less-than`
2. Save as `/tmp/t007.py` and run it from the repo root (`python3 /tmp/t007.py` → four `fixed` lines):
   ```python
   FIX = {
       'horizon/2-3-rationals.html': [('$a<b$', r'$a\lt b$'), ('$3<S<4$', r'$3\lt S\lt 4$')],
       'horizon/2-4-decimals.html':  [('$a<b<d<c$', r'$a\lt b\lt d\lt c$'), ('$0<r<c$', r'$0\lt r\lt c$')],
   }
   for f, pairs in FIX.items():
       s = open(f, encoding='utf-8').read()
       for old, new in pairs:
           assert s.count(old) == 1, (f, old, s.count(old))
           s = s.replace(old, new)
           print('fixed', f, old)
       open(f, 'w', encoding='utf-8').write(s)
   ```
3. Checks, screenshot, report, commit, push, pull request.

## Checks
1. `grep -c 'a\\lt b\\lt d\\lt c' horizon/2-4-decimals.html` → `1`
2. `git diff --stat` → `horizon/2-3-rationals.html | 4 ++--` and `horizon/2-4-decimals.html | 4 ++--` (2 lines changed in each)
3. `node tools/check.js horizon/2-3-rationals.html horizon/2-4-decimals.html` → `All 2 pages passed.`

## Screenshots
`reports/T007/2-4-tab3.png`: `horizon/2-4-decimals.html`, Tab 3, at 390 px, scrolled to Technique 6, Example: the sentence
now ends "So a < b < d < c." rendered as maths.

## Do NOT
- Do not change anything else in any page. Do not touch `tools/`, `AGENTS.md`, `tasks/`, `index.html`.
- Do not push to `main`, do not merge, do not delete any branch.

## Commit
```
T007: fix four formulas where "<" broke the page

Executor: Antigravity
```
