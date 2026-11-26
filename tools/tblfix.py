"""Phone fix for lesson pages: every table scrolls inside its own box, and KaTeX gets a containing block
so its hidden MathML cannot widen the page.  Usage: python3 tools/tblfix.py <page.html> ...  (safe to run twice)
"""
import sys
SNIP = ('<!-- table-scroll-fix -->'
 '<style id="tblfix">.katex{position:relative}.tblwrap{position:relative;display:block;max-width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}'
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
