window.HZ_STEPPERS = {
  t1: {
    title: 'Calculate $\\dfrac{7}{12} + \\dfrac{11}{20}$ in simplest form.',
    steps: [
      {
        q: 'To add pieces of the same size, what is the lowest common denominator $\\text{LCM}(12, 20)$?',
        opts: [
          ['$60$', true],
          ['$32$', false, 'Find the LCM of $12$ and $20$, rather than adding $12 + 20$.'],
          ['$240$', false, '$12\\times20=240$ is a common multiple, but the lowest common multiple is smaller: $60$.']
        ],
        ok: '$\\text{LCM}(12, 20) = 60$.'
      },
      {
        q: 'Rewrite $\\dfrac{7}{12}$ and $\\dfrac{11}{20}$ with denominator $60$.',
        opts: [
          ['$\\dfrac{35}{60}$ and $\\dfrac{33}{60}$', true],
          ['$\\dfrac{7}{60}$ and $\\dfrac{11}{60}$', false, 'Multiply each numerator by the same number you used for its denominator.'],
          ['$\\dfrac{21}{60}$ and $\\dfrac{55}{60}$', false, 'Check the multipliers: $12\\times5=60$ gives $7\\times5=35$, and $20\\times3=60$ gives $11\\times3=33$.']
        ],
        ok: '$\\dfrac{7}{12} = \\dfrac{35}{60}$ and $\\dfrac{11}{20} = \\dfrac{33}{60}$.'
      },
      {
        q: 'Add the two fractions: $\\dfrac{35}{60} + \\dfrac{33}{60}$.',
        opts: [
          ['$\\dfrac{68}{60}$', true],
          ['$\\dfrac{68}{120}$', false, 'Keep the common denominator $60$; only add the numerators.'],
          ['$\\dfrac{18}{32}$', false, 'Never add tops and bottoms separately: pieces of different sizes cannot be counted together.']
        ],
        ok: '$\\dfrac{35}{60} + \\dfrac{33}{60} = \\dfrac{68}{60}$.'
      },
      {
        q: 'Simplify $\\dfrac{68}{60}$ by dividing top and bottom by $\\text{HCF}(68, 60) = 4$.',
        opts: [
          ['$\\dfrac{17}{15}$', true],
          ['$\\dfrac{34}{30}$', false, 'That only divided by $2$; $34$ and $30$ are still both even.'],
          ['$\\dfrac{15}{17}$', false, 'Keep the numerator on top: $68\\div4=17$ and $60\\div4=15$.']
        ],
        ok: '$\\dfrac{68\\div4}{60\\div4} = \\dfrac{17}{15}$, and $\\text{HCF}(17, 15) = 1$.'
      },
      {
        q: 'Size check: both $\\dfrac{7}{12}$ and $\\dfrac{11}{20}$ are slightly more than $\\dfrac{1}{2}$, so their sum should be...',
        opts: [
          ['Slightly more than $1$ (and $\\dfrac{17}{15} = 1\\dfrac{2}{15}$ matches)', true],
          ['Less than $1$', false, 'Adding two numbers bigger than $\\dfrac{1}{2}$ must give a sum bigger than $1$.'],
          ['More than $2$', false, 'Both fractions are well below $1$, so their sum must be below $2$.']
        ],
        ok: '$\\dfrac{17}{15} = 1\\dfrac{2}{15}$ is just over $1$, which makes complete sense.'
      }
    ],
    end: 'Done! <b>Method (Technique 1):</b> find the LCM of the denominators, rewrite each fraction over it, add or subtract the numerators while keeping the denominator, and simplify.'
  },

  t2: {
    title: 'Calculate $\\dfrac{15}{28} \\times \\dfrac{21}{25}$ by cancelling first.',
    steps: [
      {
        q: 'Look at $15$ (top) and $25$ (bottom). What common factor cancels them?',
        opts: [
          ['$5$, leaving $3$ and $5$', true],
          ['$3$, leaving $5$ and $25$', false, '$3$ divides $15$, but $3$ does not divide $25$.'],
          ['Nothing cancels', false, 'Both $15$ and $25$ end in $5$, so both are divisible by $5$.']
        ],
        ok: 'Divide $15$ and $25$ by $5$, leaving $3$ on top and $5$ on the bottom.'
      },
      {
        q: 'Now look at $21$ (top) and $28$ (bottom). What common factor cancels them?',
        opts: [
          ['$7$, leaving $3$ and $4$', true],
          ['$3$, leaving $7$ and $28$', false, '$3$ divides $21$, but $3$ does not divide $28$.'],
          ['$4$, leaving $21$ and $7$', false, '$4$ divides $28$, but $4$ does not divide $21$.']
        ],
        ok: 'Divide $21$ and $28$ by $7$, leaving $3$ on top and $4$ on the bottom.'
      },
      {
        q: 'After both cancellations, what product of smaller fractions is left?',
        opts: [
          ['$\\dfrac{3}{4} \\times \\dfrac{3}{5}$', true],
          ['$\\dfrac{3}{7} \\times \\dfrac{4}{5}$', false, 'Check $28\\div7=4$ (bottom) and $21\\div7=3$ (top).'],
          ['$\\dfrac{5}{4} \\times \\dfrac{3}{3}$', false, 'Check $15\\div5=3$ (top) and $25\\div5=5$ (bottom).']
        ],
        ok: 'We now have $\\dfrac{3}{4} \\times \\dfrac{3}{5}$ — much smaller numbers!'
      },
      {
        q: 'Multiply $\\dfrac{3}{4} \\times \\dfrac{3}{5}$ (multiply the tops, multiply the bottoms).',
        opts: [
          ['$\\dfrac{9}{20}$', true],
          ['$\\dfrac{6}{9}$', false, 'Multiply ($3\\times3=9$ and $4\\times5=20$), rather than adding.'],
          ['$\\dfrac{15}{12}$', false, 'Multiply straight across (tops together, bottoms together), not diagonally.']
        ],
        ok: '$\\dfrac{3\\times3}{4\\times5} = \\dfrac{9}{20}$, already in simplest form.'
      },
      {
        q: 'Size check: both $\\dfrac{15}{28}$ and $\\dfrac{21}{25}$ are between $0$ and $1$. Does $\\dfrac{9}{20}$ make sense?',
        opts: [
          ['Yes — multiplying by a fraction below $1$ shrinks the result', true],
          ['No — multiplying always makes a number bigger', false, 'Multiplying by a fraction between $0$ and $1$ shrinks, the opposite of whole numbers.'],
          ['No — it should be larger than $1$', false, 'Both factors are less than $1$, so their product must also be less than $1$.']
        ],
        ok: 'Yes: $\\dfrac{9}{20} = 0.45$ is smaller than both $\\dfrac{15}{28}$ and $\\dfrac{21}{25}$.'
      }
    ],
    end: 'Done! <b>Method (Technique 4):</b> cancel any common factor between any top and any bottom first, then multiply the remaining tops and bottoms.'
  },

  t3: {
    title: 'Calculate $3\\dfrac{1}{3} \\div 1\\dfrac{7}{9}$.',
    steps: [
      {
        q: 'First, rewrite both mixed numbers $3\\dfrac{1}{3}$ and $1\\dfrac{7}{9}$ as improper fractions.',
        opts: [
          ['$\\dfrac{10}{3}$ and $\\dfrac{16}{9}$', true],
          ['$\\dfrac{4}{3}$ and $\\dfrac{8}{9}$', false, 'Multiply the whole part by the denominator first, then add the numerator.'],
          ['$\\dfrac{9}{3}$ and $\\dfrac{16}{9}$', false, 'Check $3\\dfrac{1}{3}$: $3\\times3+1=10$, not $9$.']
        ],
        ok: '$3\\dfrac{1}{3} = \\dfrac{10}{3}$ and $1\\dfrac{7}{9} = \\dfrac{16}{9}$.'
      },
      {
        q: 'Rewrite $\\dfrac{10}{3} \\div \\dfrac{16}{9}$ as a multiplication using the reciprocal (Theorem 5).',
        opts: [
          ['$\\dfrac{10}{3} \\times \\dfrac{9}{16}$', true],
          ['$\\dfrac{3}{10} \\times \\dfrac{16}{9}$', false, 'Flip the divisor (the second fraction), never the first fraction.'],
          ['$\\dfrac{3}{10} \\times \\dfrac{9}{16}$', false, 'Keep the first fraction $\\dfrac{10}{3}$ unchanged; only flip the divisor.']
        ],
        ok: 'Keep $\\dfrac{10}{3}$ and multiply by the reciprocal $\\dfrac{9}{16}$.'
      },
      {
        q: 'Cancel before multiplying: divide $9$ and $3$ by $3$, and divide $10$ and $16$ by $2$. What is left?',
        opts: [
          ['$\\dfrac{5}{1} \\times \\dfrac{3}{8}$', true],
          ['$\\dfrac{5}{3} \\times \\dfrac{9}{8}$', false, 'You can also cancel $3$ from $9$ and $3$ to get $3$ and $1$.'],
          ['$\\dfrac{10}{1} \\times \\dfrac{3}{16}$', false, 'You can also cancel $2$ from $10$ and $16$ to get $5$ and $8$.']
        ],
        ok: 'After cancelling: $\\dfrac{5}{1} \\times \\dfrac{3}{8}$.'
      },
      {
        q: 'Multiply $\\dfrac{5}{1} \\times \\dfrac{3}{8}$.',
        opts: [
          ['$\\dfrac{15}{8}$', true],
          ['$\\dfrac{8}{9}$', false, 'Multiply ($5\\times3=15$ and $1\\times8=8$), rather than adding.'],
          ['$\\dfrac{40}{3}$', false, 'Multiply straight across (tops together, bottoms together), not diagonally.']
        ],
        ok: '$\\dfrac{5\\times3}{1\\times8} = \\dfrac{15}{8}$ (or $1\\dfrac{7}{8}$).'
      },
      {
        q: 'Check by multiplying the answer by the divisor: what does $\\dfrac{15}{8} \\times \\dfrac{16}{9}$ equal?',
        opts: [
          ['$\\dfrac{10}{3} = 3\\dfrac{1}{3}$ (back to the start!)', true],
          ['$\\dfrac{16}{9}$', false, 'Multiplying quotient $\\times$ divisor should give back the first number, $3\\dfrac{1}{3}$.'],
          ['$1$', false, 'Check: cancel $8$ ($16\\div8=2$) and $3$ ($15\\div3=5$, $9\\div3=3$) to get $\\dfrac{10}{3}$.']
        ],
        ok: '$\\dfrac{15}{8} \\times \\dfrac{16}{9} = \\dfrac{5\\times2}{1\\times3} = \\dfrac{10}{3} = 3\\dfrac{1}{3}$.'
      }
    ],
    end: 'Done! <b>Method (Technique 7):</b> convert mixed numbers to improper fractions, flip the second fraction (the divisor), cancel, multiply, and check by multiplying back.'
  },

  t4: {
    title: 'Maya spends $\\dfrac{2}{5}$ of her savings on shoes, then $\\dfrac{1}{3}$ of what is left on a bag. She has $\\$36$ left. How much did she start with?',
    steps: [
      {
        q: 'After spending $\\dfrac{2}{5}$ of her savings on shoes, what fraction of her savings does Maya keep?',
        opts: [
          ['$\\dfrac{3}{5}$', true],
          ['$\\dfrac{2}{5}$', false, '$\\dfrac{2}{5}$ is what she spent; subtract from $1$ to find what she kept.'],
          ['$\\dfrac{3}{2}$', false, 'Keep the denominator $5$: $1 - \\dfrac{2}{5} = \\dfrac{3}{5}$.']
        ],
        ok: 'She keeps $1 - \\dfrac{2}{5} = \\dfrac{3}{5}$ of her original savings.'
      },
      {
        q: 'Next she spends $\\dfrac{1}{3}$ of the remainder on a bag. What fraction of that remainder does she keep?',
        opts: [
          ['$\\dfrac{2}{3}$', true],
          ['$\\dfrac{1}{3}$', false, '$\\dfrac{1}{3}$ is what she spent on the bag; she keeps $1 - \\dfrac{1}{3}$.'],
          ['$\\dfrac{1}{5}$', false, 'Find the kept fraction of the remainder first: $1 - \\dfrac{1}{3} = \\dfrac{2}{3}$.']
        ],
        ok: 'She keeps $1 - \\dfrac{1}{3} = \\dfrac{2}{3}$ of the remainder.'
      },
      {
        q: 'Multiply the two kept fractions ($\\dfrac{3}{5} \\times \\dfrac{2}{3}$) to find what fraction of her original savings is left.',
        opts: [
          ['$\\dfrac{2}{5}$', true],
          ['$\\dfrac{4}{15}$', false, 'Do not subtract $\\dfrac{2}{5}+\\dfrac{1}{3}$ from $1$ — the $\\dfrac{1}{3}$ was of the remainder, not the original!'],
          ['$\\dfrac{5}{8}$', false, 'Multiply the kept fractions (the $3$s cancel: $\\dfrac{3}{5}\\times\\dfrac{2}{3}=\\dfrac{2}{5}$), do not add tops and bottoms.']
        ],
        ok: 'The $3$s cancel: $\\dfrac{3}{5} \\times \\dfrac{2}{3} = \\dfrac{2}{5}$ of her original savings is left.'
      },
      {
        q: 'So $\\dfrac{2}{5}$ of her original savings is $\\$36$. Undo the operator ($\\div2$, then $\\times5$): how much did she start with?',
        opts: [
          ['$\\$90$', true],
          ['$\\$72$', false, 'One fifth is $36\\div2 = \\$18$; multiply by $5$ (not $4$) to get the whole.'],
          ['$\\$18$', false, '$\\$18$ is only $\\dfrac{1}{5}$ of the start; multiply by $5$ to get all $5$ fifths.']
        ],
        ok: '$36 \\div 2 = \\$18$ is one fifth, so she started with $18 \\times 5 = \\$90$.'
      },
      {
        q: 'Check forwards from $\\$90$: shoes cost $\\dfrac{2}{5}\\times90=\\$36$ (leaving $\\$54$), then the bag costs $\\dfrac{1}{3}\\times54=\\$18$. How much is left?',
        opts: [
          ['$\\$36$ (matches the story!)', true],
          ['$\\$18$', false, '$\\$18$ is the cost of the bag; subtract it from $\\$54$ to see what is left.'],
          ['$\\$54$', false, '$\\$54$ is before buying the bag; subtract $\\$18$ for the bag.']
        ],
        ok: '$\\$54 - \\$18 = \\$36$ left, matching the story!'
      }
    ],
    end: 'Done! <b>Method (Technique 11):</b> write the kept fraction ($1 - \\text{spent}$) for each stage, multiply the kept fractions to find the fraction of the original left, then undo the operator.'
  }
};
