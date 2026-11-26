# T003 — Make wide tables scroll inside their own box on phones
Status: done (PR #3, merged after fix round 2)
Size: S (≤ 15 min)
Branch: task/T003-table-scroll-fix
Run on: MacBook

## Goal
On the four pages T002 found, a wide table makes the whole page wider than a 390 px phone. After this card each
table sits in its own horizontally scrolling box, and the page itself stays 390 px wide. No lesson text changes.

## Steps
1. `git checkout main && git pull && git checkout -b task/T003-table-scroll-fix`
2. Save this script as `/tmp/tblfix.py` (outside the repo, exactly as written):
   ```python
   import sys
   SNIP = ('<!-- table-scroll-fix -->'
    '<style id="tblfix">.tblwrap{display:block;max-width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}'
    '.tblwrap>table{display:table!important;overflow:visible!important;max-width:none!important}</style>'
    '<script id="tblfix-js">(function(){function wrap(){document.querySelectorAll("table").forEach(function(t){'
    'var p=t.parentElement;if(!p||p.classList.contains("tblwrap"))return;var w=document.createElement("div");'
    'w.className="tblwrap";p.insertBefore(w,t);w.appendChild(t);});}'
    'function go(){wrap();new MutationObserver(wrap).observe(document.body,{childList:true,subtree:true});}'
    'if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",go);else go();})();</script>'
    '<!-- end table-scroll-fix -->')
   for f in sys.argv[1:]:
       s = open(f, encoding="utf-8").read()
       if 'id="tblfix"' in s:
           print("already fixed:", f); continue
       i = s.lower().rfind("</body>")
       s = s[:i] + SNIP + "\n" + s[i:]
       open(f, "w", encoding="utf-8").write(s); print("fixed:", f)
   ```
3. Run it from the repo root:
   ```bash
   python3 /tmp/tblfix.py horizon/1-1-integers.html horizon/1-2-primes.html horizon/1-3-modular.html ncea-l3-probability/91586-lesson-1.html
   ```
   Expected: four lines starting `fixed:`.
4. Run the checks, take the screenshots, write `reports/T003.md`, commit, push, open the pull request.

## Checks
1. Running step 3 a second time → four lines starting `already fixed:`.
2. `grep -c 'id="tblfix"' horizon/1-1-integers.html horizon/1-2-primes.html horizon/1-3-modular.html ncea-l3-probability/91586-lesson-1.html`
   → each file `:1`.
3. `node tools/check.js horizon/1-1-integers.html horizon/1-2-primes.html horizon/1-3-modular.html ncea-l3-probability/91586-lesson-1.html`
   → last line `All 4 pages passed.`
4. `node tools/check.js` → last line `All 17 pages passed.`
5. `git diff --stat` → exactly the four files above, each `1 +` (one inserted line), nothing else.
6. `python3 inject_analytics.py` → `done: 0 HTML file(s) updated.`

If check 3 still fails, do not try other fixes: write the full checker output in the report and stop (Result: blocked).

## Screenshots
`rm -rf /tmp/atlas-shots && node tools/check.js --shots horizon/1-1-integers.html horizon/1-3-modular.html`, then
```bash
mkdir -p reports/T003
cp /tmp/atlas-shots/horizon_1-1-integers_html_3.png reports/T003/1-1-tab3.png
cp /tmp/atlas-shots/horizon_1-3-modular_html_4.png  reports/T003/1-3-tab4.png
```
What must be visible: the Scoreboard table (1.1) and the prime / mod 4 table (1.3) end at the phone edge
(cut off inside their box, which can be scrolled sideways), and there is **no** blank strip to the right of the page.

## Do NOT
- Do not edit any page by hand; only the script in step 3 changes pages.
- Do not change any other `.html` file, `index.html`, `AGENTS.md`, `tasks/`, `tools/` or `README.md`.
- Do not commit `/tmp/tblfix.py`.
- Do not push to `main`, do not merge, do not delete the branch.

## Commit
```
T003: wide tables scroll inside their own box on phones

Executor: Antigravity
```
