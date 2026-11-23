# Interactive Maths

GitHub Pages site. `index.html` is the course directory.

## Courses
- `cam-y8-algebra/algebra-part-a.html`: Cambridge Year 8 Algebra Part A (expressions, formulae, equations and inequalities)
- `cam-y8-algebra/algebra-part-b.html`: Cambridge Year 8 Algebra Part B (sequences, functions and graphs)
- `y10-statistics-probability/revision.html`: NCEA Year 10 Statistics and Probability (interactive revision)

## Add a new resource
1. Put the files in a new folder, e.g. `cam-y9-geometry/`.
2. In `index.html`, find `RESOURCES` and add a line with the key `board/year/strand`, e.g.
   `'cam/9/geometry': [ {title:'Angles revision', href:'cam-y9-geometry/revision.html', type:'interactive'} ],`
   Boards: `ncea`, `cam`. Strands: number, algebra, geometry, measurement, statprob (NCEA), statistics, probability (Cambridge), trig, calculus, pure, mechanics.
   The topic, its year and its star light up automatically.
   To show a planned resource without a link, give it `soon:true` and no `href`.

## Publish
Settings → Pages → Deploy from a branch → `main` / `(root)`.
