# Interactive Maths

GitHub Pages site. `index.html` is the course directory.

## Courses
### NCEA
- `y10-statistics-probability/revision.html`: Year 10 Statistics and Probability (interactive revision)
- `ncea-l3-probability/91585-lesson-1.html`, `91585-lesson-2.html`: Level 3 Probability Concepts (91585), Lessons 1–2
- `ncea-l3-probability/91586-lesson-1.html`, `91586-lesson-2.html`: Level 3 Probability Distributions (91586), Lessons 1–2

### Cambridge
- `cam-y8-algebra/algebra-part-a.html`, `algebra-part-b.html`: Year 8 Algebra, Parts A–B
- `cam-y8-number/number-part-a.html` … `number-part-d.html`: Year 8 Number, Parts A–D

### Horizon (Mr Shen's own curriculum)
Chapter 1 · Sets and Integers, in `horizon/`:
- `1-0-sets.html`: 1.0 The language of sets
- `1-1-integers.html`: 1.1 Introducing integers
- `1-2-primes.html`: 1.2 Multiplication and primes
- `1-3-modular.html`: 1.3 Modular arithmetic
- `gate.html`: Horizon Gate (a reading journey that closes the chapter)

Horizon sections are listed in `HORIZON` in `index.html`, not in `RESOURCES`.

## Workflow
Claude plans and writes task cards in `tasks/`; the executor follows `AGENTS.md`. Check the site with `node tools/check.js`.

## Add a new resource
1. Put the files in a new folder, e.g. `cam-y9-geometry/`.
2. In `index.html`, find `RESOURCES` and add a line with the key `board/year/strand`, e.g.
   `'cam/9/geometry': [ {title:'Angles revision', href:'cam-y9-geometry/revision.html', type:'interactive'} ],`
   Boards: `ncea`, `cam`. Strands: number, algebra, geometry, measurement, statprob (NCEA), statistics, probability (Cambridge), trig, calculus, pure, mechanics.
   The topic, its year and its star light up automatically.
   To show a planned resource without a link, give it `soon:true` and no `href`.

## Publish
Settings → Pages → Deploy from a branch → `main` / `(root)`.
