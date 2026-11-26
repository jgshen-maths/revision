"""Put "Let's do it together" steppers into a lesson page.
Usage: python3 tools/add_steppers.py <page.html> <content/steppers/xx.js>
The .js file sets window.HZ_STEPPERS = { t1: {...}, t2: {...}, ... } (format: content/steppers/README.md).
Each stepper box goes just before the first "Check your understanding" heading of its tab.
Running it again replaces the old steppers (safe to repeat). It validates the data and stops on any problem."""
import json, re, subprocess, sys
from pathlib import Path
ROOT = Path(__file__).resolve().parent.parent
page, data = Path(sys.argv[1]), Path(sys.argv[2])
s = page.read_text(encoding="utf-8")
# --- validate the data with node (it is JavaScript) ---
js = "global.window={};" + data.read_text(encoding="utf-8") + ";process.stdout.write(JSON.stringify(window.HZ_STEPPERS))"
D = json.loads(subprocess.run(["node", "-e", js], capture_output=True, text=True, check=True).stdout)
errs = []
for tab, S in D.items():
    if not re.fullmatch(r"t[1-9]", tab): errs.append(f"{tab}: key must be t1..t9")
    for k in ("title", "steps", "end"):
        if not S.get(k): errs.append(f"{tab}: missing {k}")
    for n, st in enumerate(S.get("steps", []), 1):
        o = st.get("opts", [])
        if not st.get("q") or not st.get("ok"): errs.append(f"{tab} step {n}: needs q and ok")
        if not 2 <= len(o) <= 4: errs.append(f"{tab} step {n}: needs 2-4 options")
        if sum(1 for x in o if len(x) > 1 and x[1] is True) != 1: errs.append(f"{tab} step {n}: exactly one option must be true")
        for x in o:
            if len(x) > 1 and x[1] is False and (len(x) < 3 or not str(x[2]).strip()): errs.append(f"{tab} step {n}: wrong option {x[0]!r} needs feedback")
    if not 4 <= len(S.get("steps", [])) <= 7: errs.append(f"{tab}: use 4-7 steps")
if errs: sys.exit("NOT ADDED:\n  " + "\n  ".join(errs))
# --- remove an earlier run ---
s = re.sub(r'<div class="tutor" data-stepper="t\d"></div>\n?', "", s)
s = re.sub(r"<!-- hz-stepper engine -->.*?<!-- end hz-stepper engine -->\n?", "", s, flags=re.S)
s = re.sub(r'<script id="hz-stepper-data">.*?</script>\n?', "", s, flags=re.S)
# --- place the boxes ---
for tab in D:
    m = re.search(rf'<div id="{tab}" class="tab-content[^"]*">', s)
    if not m: sys.exit(f"NOT ADDED: tab {tab} not found in page")
    nxt = re.search(r'<div id="t\d" class="tab-content', s[m.end():])
    end = m.end() + (nxt.start() if nxt else len(s) - m.end())
    h = re.search(r'<h3[^>]*>\s*Check your understanding', s[m.end():end])
    if not h: sys.exit(f"NOT ADDED: no 'Check your understanding' heading in {tab}")
    at = m.end() + h.start()
    s = s[:at] + f'<div class="tutor" data-stepper="{tab}"></div>\n' + s[at:]
engine = (ROOT / "tools/stepper/engine.html").read_text(encoding="utf-8")
blob = '<script id="hz-stepper-data">' + data.read_text(encoding="utf-8").replace("</script", "<\\/script") + "</script>\n"
i = s.lower().rfind("</body>")
s = s[:i] + blob + engine + s[i:]
page.write_text(s, encoding="utf-8")
print(f"added {len(D)} stepper(s) to {page}: " + ", ".join(f"{t} ({len(D[t]['steps'])} steps)" for t in D))
