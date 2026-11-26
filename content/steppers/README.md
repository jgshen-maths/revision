# "Let's do it together" steppers

A stepper is the **guided practice** between a tab's worked examples and its "Check your understanding" exercises.
The student solves one new problem with us, one decision at a time. Each step offers 2–4 buttons; a wrong button
explains *why* it is wrong and is crossed out; the right one confirms and moves on. It is not scored.

## File format (`content/steppers/<section>.js`, e.g. `2-1.js`)
```js
window.HZ_STEPPERS = {
  t1: {
    title: 'Is 196 a square number?',            // the problem, as a short question or task
    steps: [
      { q: 'Write $196$ as a product of primes.',  // one decision per step
        opts: [
          ['$2^2\\times7^2$', true],                                  // exactly ONE option is true
          ['$2\\times98$', false, '$98$ is not prime yet: keep splitting.'],   // every false option has feedback
          ['$4\\times49$', false, '$4$ and $49$ are not primes.']
        ],
        ok: '$196=2^2\\times7^2$.' },                // shown when the right button is pressed
      // ... 4 to 7 steps in total
    ],
    end: 'Done! <b>Method:</b> split into primes; if every exponent is even, the number is a square.'  // the method in one or two sentences
  },
  t2: { ... }, t3: { ... }, t4: { ... }
};
```
- Maths in `$...$` (KaTeX). In a JS string every backslash is doubled: `'\\dfrac{3}{4}'`, `'\\times'`.
- Optional `vis` on a step: a small HTML/SVG picture shown above the question.
- Add it to a page with `python3 tools/add_steppers.py <page.html> content/steppers/<section>.js` (validates the format; safe to rerun).

## How to write a good stepper (the teaching rules)
1. **One stepper per teaching tab** (Tabs 1–4). Not in Tab 5 (Smart Thinking), Homework or the Report.
2. **Follow the tab's main method**, the technique most of its exercises need, in the same order and the same words the tab uses
   (e.g. "Technique 3"). Do not teach anything the tab has not taught.
3. **A fresh problem**: similar to the tab's worked example but with different numbers. Not copied from an exercise or the homework.
4. **4–7 steps, one decision each**: what to do first, a calculation, a check, what the answer means. The last step usually checks the answer
   or says what it means in the story.
5. **Wrong options are real mistakes students make** (forgetting a rule, a sign error, adding instead of multiplying, the trap the tab warns
   about). The feedback names the mistake and points back to the idea in one short sentence. Never just "Wrong".
6. **Short text**: a question is one sentence. Options are short (a number, an expression, a few words).
7. **The `end` message states the method** in one or two sentences, so the student can use it in the exercises below.
8. **English**, friendly, for students around Year 9–10. Numbers chosen so the arithmetic stays clean.
9. **Every number must be right.** Check each calculation with a short Python script and paste the script and its output in the report.
