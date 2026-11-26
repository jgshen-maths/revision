"""Add the Cloudflare Web Analytics beacon to every HTML page in this repo.

Run from the repo root before each push:  python3 inject_analytics.py
Pages that already carry the token are skipped, so running it twice is safe.
"""
import re
from pathlib import Path

TOKEN = "4572b9e5c4984cd3a0d53765770f398c"
SNIPPET = (
    "<!-- Cloudflare Web Analytics -->"
    "<script defer src='https://static.cloudflareinsights.com/beacon.min.js' "
    f"data-cf-beacon='{{\"token\": \"{TOKEN}\"}}'></script>"
    "<!-- End Cloudflare Web Analytics -->"
)

root = Path(__file__).resolve().parent
updated = 0
for f in sorted(root.rglob("*.html")):
    if any(p.startswith(".") for p in f.relative_to(root).parts):
        continue
    text = f.read_text(encoding="utf-8")
    if TOKEN in text:
        continue
    # insert before the LAST </body> (some pages contain "</body>" inside scripts)
    idx = text.lower().rfind("</body>")
    if idx == -1:
        idx = text.lower().rfind("</html>")
    new = text + "\n" + SNIPPET + "\n" if idx == -1 else text[:idx] + SNIPPET + "\n" + text[idx:]
    f.write_text(new, encoding="utf-8")
    print("injected:", f.relative_to(root))
    updated += 1
print(f"done: {updated} HTML file(s) updated.")
