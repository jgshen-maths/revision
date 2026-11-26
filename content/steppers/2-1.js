window.HZ_STEPPERS = {
  t1: {
    title: 'Find the smallest positive integer $n$ so that $240n$ is a perfect square, and find $\\sqrt{240n}$.',
    steps: [
      {
        q: 'Write $240$ as a product of primes.',
        opts: [
          ['$2^4\\times3\\times5$', true],
          ['$2^3\\times3\\times5$', false, '$2^3\\times3\\times5=120$, which is only half of $240$.'],
          ['$16\\times15$', false, '$16$ and $15$ are not primes yet: keep splitting.']
        ],
        ok: '$240 = 16\\times15 = 2^4\\times3\\times5$.'
      },
      {
        q: 'For a number to be a perfect square, what must be true about every prime index?',
        opts: [
          ['Every index must be even', true],
          ['Every index must be odd', false, 'An odd index leaves an unpaired prime, so the number cannot split into two equal halves.'],
          ['Every index must be a multiple of $3$', false, 'Multiples of $3$ make a perfect cube, not a square.']
        ],
        ok: 'Right: a perfect square has every prime index even (Technique 1).'
      },
      {
        q: 'In $2^4\\times3^1\\times5^1$, which primes have an odd index?',
        opts: [
          ['$3$ and $5$', true],
          ['Only $5$', false, '$3$ has index $1$, which is also odd.'],
          ['$2$, $3$ and $5$', false, 'The index of $2$ is $4$, which is already even.']
        ],
        ok: '$3$ and $5$ each have index $1$ (odd), while $2^4$ already has an even index.'
      },
      {
        q: 'What is the smallest positive integer $n$ that makes $240n$ a perfect square?',
        opts: [
          ['$15$', true],
          ['$8$', false, 'Multiply the missing primes ($3\\times5$), rather than adding them ($3+5=8$).'],
          ['$30$', false, 'We do not need another $2$, because $2^4$ already has an even index.']
        ],
        ok: 'Multiply by one more $3$ and one more $5$: $n = 3\\times5 = 15$.'
      },
      {
        q: 'Check: $240\\times15 = 2^4\\times3^2\\times5^2 = 3600$. Halving each index, what is $\\sqrt{3600}$?',
        opts: [
          ['$60$', true],
          ['$30$', false, 'Halving $2^4$ gives $2^2=4$, not $2^1$: $4\\times3\\times5=60$.'],
          ['$1800$', false, 'Halve the indices, not the number itself ($1800^2$ is much bigger than $3600$).']
        ],
        ok: '$2^2\\times3\\times5 = 4\\times15 = 60$, and $60^2 = 3600$.'
      }
    ],
    end: 'Done! <b>Method (Techniques 1–2):</b> split into primes, then multiply by one more copy of every prime with an odd index. Halve every index to check the square root.'
  },

  t2: {
    title: 'Solve $16^x = 8^4$.',
    steps: [
      {
        q: 'Both $16$ and $8$ are powers of the same prime. Which common base should we use?',
        opts: [
          ['$2$', true],
          ['$4$', false, '$16=4^2$, but $8$ is not a whole-number power of $4$.'],
          ['$8$', false, '$16 = 2\\times8$, not a power of $8$ ($8^2=64$).']
        ],
        ok: 'Use base $2$: $16=2^4$ and $8=2^3$.'
      },
      {
        q: 'Rewrite the left-hand side $16^x = (2^4)^x$ using Law 3 (power of a power).',
        opts: [
          ['$2^{4x}$', true],
          ['$2^{4+x}$', false, 'For a power of a power, multiply the indices rather than adding them.'],
          ['$8^x$', false, 'Keep the base $2$ and multiply the indices $4$ and $x$.']
        ],
        ok: '$(2^4)^x = 2^{4x}$.'
      },
      {
        q: 'Now rewrite the right-hand side $8^4 = (2^3)^4$ as a power of $2$.',
        opts: [
          ['$2^{12}$', true],
          ['$2^7$', false, 'Law 3 multiplies the indices ($3\\times4=12$), rather than adding ($3+4=7$).'],
          ['$2^{81}$', false, 'Do not compute $3^4$: $(2^3)^4$ is four copies of $2^3$, so the index is $3\\times4=12$.']
        ],
        ok: '$(2^3)^4 = 2^{12}$.'
      },
      {
        q: 'Now we have $2^{4x} = 2^{12}$. What is $x$?',
        opts: [
          ['$3$', true],
          ['$8$', false, 'Divide $12$ by $4$, rather than subtracting ($12-4=8$).'],
          ['$48$', false, 'We want $4x=12$, so divide by $4$ instead of multiplying.']
        ],
        ok: 'Same base $2$, so $4x=12$ and $x=3$.'
      },
      {
        q: 'Check your answer: what value do both $16^3$ and $8^4$ equal?',
        opts: [
          ['$4096$', true],
          ['$512$', false, '$512 = 8^3$; multiply by $8$ once more to get $8^4$.'],
          ['$256$', false, '$256 = 16^2$; multiply by $16$ once more to get $16^3$.']
        ],
        ok: '$16^3 = 256\\times16 = 4096$ and $8^4 = 64\\times64 = 4096$.'
      }
    ],
    end: 'Done! <b>Method (Technique 4):</b> rewrite both sides with the same prime base, simplify with Law 3, then set the indices equal and solve.'
  },

  t3: {
    title: 'Calculate $5 + 36 \\div (9 - 3) \\times 2^2 - 7$.',
    steps: [
      {
        q: 'Which operation must we do first?',
        opts: [
          ['$9 - 3$ inside the brackets', true],
          ['$2^2$ (the index)', false, 'Brackets always come before indices in BIDMAS.'],
          ['$5 + 36$ (left to right)', false, 'Addition waits until brackets, indices, division and multiplication are done.']
        ],
        ok: 'Brackets first: $9 - 3 = 6$, leaving $5 + 36 \\div 6 \\times 2^2 - 7$.'
      },
      {
        q: 'Now we have $5 + 36 \\div 6 \\times 2^2 - 7$. What comes next?',
        opts: [
          ['$2^2 = 4$', true],
          ['$36 \\div 6 = 6$', false, 'Indices come before division and multiplication.'],
          ['$6 \\times 2 = 12$', false, 'The power belongs only to $2$, not to $6\\times2$.']
        ],
        ok: 'Indices next: $2^2 = 4$, leaving $5 + 36 \\div 6 \\times 4 - 7$.'
      },
      {
        q: 'In $5 + 36 \\div 6 \\times 4 - 7$, both $\\div$ and $\\times$ appear. Which is done first?',
        opts: [
          ['$36 \\div 6 = 6$ (left to right)', true],
          ['$6 \\times 4 = 24$ (multiply first)', false, 'Division and multiplication have equal rank, so work left to right.'],
          ['$5 + 36 = 41$', false, 'Division and multiplication come before addition.']
        ],
        ok: 'Left to right: $36 \\div 6 = 6$, leaving $5 + 6 \\times 4 - 7$.'
      },
      {
        q: 'Finish the multiplication in $5 + 6 \\times 4 - 7$. What is the expression now?',
        opts: [
          ['$5 + 24 - 7$', true],
          ['$11 \\times 4 - 7$', false, 'Multiply $6\\times4$ before adding $5$.'],
          ['$5 + 6 \\times (-3)$', false, 'Multiply $6\\times4$ before subtracting $7$.']
        ],
        ok: '$6 \\times 4 = 24$, leaving $5 + 24 - 7$.'
      },
      {
        q: 'Finally, evaluate $5 + 24 - 7$ from left to right.',
        opts: [
          ['$22$', true],
          ['$36$', false, 'The $7$ is subtracted, not added ($29 - 7 = 22$).'],
          ['$26$', false, 'Check the arithmetic: $5 + 24 = 29$, and $29 - 7 = 22$.']
        ],
        ok: '$5 + 24 = 29$, and $29 - 7 = 22$.'
      }
    ],
    end: 'Done! <b>Method (Technique 6):</b> follow BIDMAS one step per line — brackets, then indices, then $\\div$ and $\\times$ left to right, then $+$ and $-$ left to right.'
  },

  t4: {
    title: 'What is the last digit of $18^{75}$?',
    steps: [
      {
        q: 'To find the last digit of $18^{75}$, which base do we actually need to raise to the power $75$?',
        opts: [
          ['$8$ (only the last digit of the base)', true],
          ['$18$ (we must keep the whole base)', false, 'Only the last digit of a factor affects the last digit of a product.'],
          ['$1 + 8 = 9$', false, 'Do not add the digits of the base: keep its last digit, $8$.']
        ],
        ok: 'Only the last digit matters, so $18^{75}$ has the same last digit as $8^{75}$.'
      },
      {
        q: 'List the last digits of $8^1, 8^2, 8^3, 8^4, 8^5$. What is the repeating cycle?',
        opts: [
          ['$8, 4, 2, 6$ (length $4$)', true],
          ['$8, 6, 4, 2$ (length $4$)', false, 'Check $8^2=64$ (ends in $4$), then $4\\times8=32$ (ends in $2$), then $2\\times8=16$ (ends in $6$).'],
          ['$8, 4$ (length $2$)', false, 'Keep going past $8^2=64$: $4\\times8=32$ ends in $2$, not $8$.']
        ],
        ok: '$8^1=8$, $8^2=64$, $8^3\\to2$, $8^4\\to6$, and $8^5\\to8$ repeats: cycle $8,4,2,6$ of length $4$.'
      },
      {
        q: 'Divide the index $75$ by the cycle length $4$. What is the remainder?',
        opts: [
          ['$3$', true],
          ['$1$', false, '$4\\times18=72$, and $75-72=3$, not $1$.'],
          ['$0$', false, '$75$ is odd, so it cannot be divisible by $4$.']
        ],
        ok: '$75 = 4\\times18 + 3$, so the remainder is $3$.'
      },
      {
        q: 'Remainder $3$ means the 3rd term of the cycle $8, 4, 2, 6$. What is the last digit of $18^{75}$?',
        opts: [
          ['$2$', true],
          ['$4$', false, '$4$ is the 2nd term of $8,4,2,6$; we need the 3rd term.'],
          ['$6$', false, '$6$ is the 4th term (used when the remainder is $0$).']
        ],
        ok: 'The 3rd term of $8,4,2,6$ is $2$, so $18^{75}$ ends in $2$.'
      },
      {
        q: 'Quick check on remainder $0$: if the index were $76$ instead ($76=4\\times19+0$), what would $18^{76}$ end in?',
        opts: [
          ['$6$ (the last term of the cycle)', true],
          ['$8$ (the first term of the cycle)', false, 'Remainder $1$ gives the first term; remainder $0$ gives the last term of the cycle.'],
          ['$0$', false, 'A remainder of $0$ points to the end of the cycle ($6$), not to the digit $0$.']
        ],
        ok: 'Remainder $0$ means the last term of the cycle, $6$ — and $2\\times8=16$ confirms it!'
      }
    ],
    end: 'Done! <b>Method (Technique 14):</b> keep the last digit of the base, find its cycle of length $L$, divide the index by $L$, and read that term (remainder $0$ means the last term).'
  }
};
