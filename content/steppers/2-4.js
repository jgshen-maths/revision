window.HZ_STEPPERS = {
  t1: {
    title: 'Calculate $0.63 \\div 0.15$.',
    steps: [
      {
        q: 'To make the divisor $0.15$ a whole number (Theorem 2), what power of $10$ should we multiply both numbers by?',
        opts: [
          ['$100$', true],
          ['$10$', false, '$0.15\\times10 = 1.5$, which is still not a whole number.'],
          ['$1000$', false, 'Multiplying by $1000$ works, but $100$ already makes $0.15$ a whole number with smaller numbers.']
        ],
        ok: '$0.15$ has $2$ decimal places, so multiply both numbers by $100$.'
      },
      {
        q: 'Multiply both $0.63$ and $0.15$ by $100$. What whole-number division do we get?',
        opts: [
          ['$63 \\div 15$', true],
          ['$6.3 \\div 15$', false, 'Multiply both numbers by $100$ ($0.63\\times100=63$), not just the divisor.'],
          ['$630 \\div 15$', false, 'Multiplying $0.63$ by $100$ moves the point $2$ places right to $63$, not $3$ places.']
        ],
        ok: '$0.63 \\div 0.15 = 63 \\div 15$.'
      },
      {
        q: 'Write $\\dfrac{63}{15}$ in simplest form by dividing top and bottom by $3$.',
        opts: [
          ['$\\dfrac{21}{5}$', true],
          ['$\\dfrac{21}{15}$', false, 'Divide both numerator and denominator by $3$: $15\\div3=5$.'],
          ['$\\dfrac{5}{21}$', false, 'Keep the numerator on top: $63\\div3=21$ and $15\\div3=5$.']
        ],
        ok: '$\\dfrac{63}{15} = \\dfrac{21}{5}$.'
      },
      {
        q: 'Write $\\dfrac{21}{5}$ as a decimal (rewrite over $10$: $\\dfrac{42}{10}$).',
        opts: [
          ['$4.2$', true],
          ['$0.42$', false, '$21\\div5$ is a bit more than $4$, not less than $1$.'],
          ['$4.1$', false, '$\\dfrac{21}{5} = 4\\dfrac{1}{5}$, and $\\dfrac{1}{5} = 0.2$, not $0.1$.']
        ],
        ok: '$\\dfrac{21}{5} = \\dfrac{42}{10} = 4.2$.'
      },
      {
        q: 'Check by multiplying back: $4.2 \\times 0.15$. Since $42\\times15=630$ and there are $1+2=3$ decimal places, what do you get?',
        opts: [
          ['$0.630 = 0.63$ (matches!)', true],
          ['$6.30$', false, 'Count all decimal places in both factors: $1 + 2 = 3$ places, giving $0.630$.'],
          ['$0.063$', false, 'Moving the point $3$ places left from $630$ gives $0.630$, not $0.063$.']
        ],
        ok: '$4.2 \\times 0.15 = 0.630 = 0.63$ — confirmed!'
      }
    ],
    end: 'Done! <b>Method (Theorem 2):</b> multiply both dividend and divisor by the same power of $10$ so the divisor is a whole number, divide, and check by multiplying back.'
  },

  t2: {
    title: 'Does $\\dfrac{27}{240}$ terminate? If so, how many decimal places does it have?',
    steps: [
      {
        q: 'Before checking the prime factors of the denominator (Technique 4), what must we do first?',
        opts: [
          ['Simplify the fraction first', true],
          ['Factorise $240$ right away and say no because $3\\mid240$', false, 'A factor of $3$ in the denominator might cancel with the numerator — always simplify first!'],
          ['Multiply top and bottom by $10$', false, 'That does not simplify the fraction; divide by the HCF instead.']
        ],
        ok: 'Always simplify first so no hidden common factor misleads us.'
      },
      {
        q: 'Simplify $\\dfrac{27}{240}$ by dividing top and bottom by $\\text{HCF}(27, 240) = 3$.',
        opts: [
          ['$\\dfrac{9}{80}$', true],
          ['$\\dfrac{9}{240}$', false, 'Divide both numerator and denominator by $3$: $240\\div3=80$.'],
          ['$\\dfrac{3}{80}$', false, 'Check $27\\div3=9$, not $3$.']
        ],
        ok: '$\\dfrac{27\\div3}{240\\div3} = \\dfrac{9}{80}$, and $\\text{HCF}(9, 80) = 1$.'
      },
      {
        q: 'Now write the new denominator $80$ as a product of primes.',
        opts: [
          ['$2^4 \\times 5$', true],
          ['$2^3 \\times 5$', false, '$2^3\\times5 = 40$, which is only half of $80$.'],
          ['$2^3 \\times 10$', false, '$10$ is not prime: split it into $2\\times5$ to get $2^4\\times5$.']
        ],
        ok: '$80 = 16 \\times 5 = 2^4 \\times 5^1$.'
      },
      {
        q: 'Does $\\dfrac{9}{80}$ terminate as a decimal?',
        opts: [
          ['Yes — its denominator has only the primes $2$ and $5$', true],
          ['No — because $240$ originally had a factor of $3$', false, 'The $3$ cancelled out when we simplified to $\\dfrac{9}{80}$.'],
          ['No — because $80$ is not a power of $10$', false, 'Any denominator of the form $2^m5^n$ can be scaled up to a power of $10$.']
        ],
        ok: 'Yes! By Theorem 4, $80 = 2^4\\times5^1$ uses only $2$s and $5$s, so it terminates.'
      },
      {
        q: 'With $80 = 2^4 \\times 5^1$, how many decimal places does $\\dfrac{9}{80}$ have (Theorem 4: $\\max(m,n)$)?',
        opts: [
          ['$4$ decimal places', true],
          ['$5$ decimal places', false, 'Take the larger exponent $\\max(4, 1) = 4$, rather than adding $4 + 1$.'],
          ['$1$ decimal place', false, 'Take the larger exponent $\\max(4, 1) = 4$, not the smaller one.']
        ],
        ok: '$\\max(4, 1) = 4$ places (check: $\\dfrac{9}{80} = \\dfrac{1125}{10000} = 0.1125$).'
      }
    ],
    end: 'Done! <b>Method (Technique 4):</b> simplify the fraction first, factorise the denominator, and check for only $2$s and $5$s; if $b=2^m5^n$, it terminates in $\\max(m,n)$ places.'
  },

  t3: {
    title: 'Write $0.3\\overline{18}$ as a fraction in simplest form.',
    steps: [
      {
        q: 'Let $x = 0.3\\overline{18}$. There is $1$ non-repeating digit ($3$). What is $10x$?',
        opts: [
          ['$3.\\overline{18}$', true],
          ['$31.\\overline{8}$', false, 'Multiplying by $10$ shifts the decimal point only $1$ place, not $2$.'],
          ['$0.\\overline{18}$', false, 'The $3$ moves to the left of the decimal point: $10\\times0.31818\\ldots = 3.1818\\ldots$']
        ],
        ok: '$10x = 3.\\overline{18}$ puts the repeating block right after the decimal point.'
      },
      {
        q: 'The repeating block "$18$" has $2$ digits, so shift $2$ more places ($10^{1+2} = 1000$). What is $1000x$?',
        opts: [
          ['$318.\\overline{18}$', true],
          ['$31.8\\overline{18}$', false, 'That is $100x$, whose tail $.81818\\ldots$ does not match $3.\\overline{18}$.'],
          ['$3180.\\overline{18}$', false, 'Shifting $0.31818\\ldots$ by $3$ places gives $318.\\overline{18}$.']
        ],
        ok: '$1000x = 318.\\overline{18}$ has the exact same repeating tail as $10x = 3.\\overline{18}$.'
      },
      {
        q: 'Subtract $10x = 3.\\overline{18}$ from $1000x = 318.\\overline{18}$ so the tails vanish. What equation do you get?',
        opts: [
          ['$990x = 315$', true],
          ['$900x = 315$', false, 'Check the left side: $1000x - 10x = 990x$, not $900x$.'],
          ['$990x = 318$', false, 'Remember to subtract the whole parts too: $318 - 3 = 315$.']
        ],
        ok: '$1000x - 10x = 318 - 3$, giving $990x = 315$.'
      },
      {
        q: 'Solve for $x$ and simplify $\\dfrac{315}{990}$ (divide top and bottom by $\\text{HCF}(315,990)=45$).',
        opts: [
          ['$\\dfrac{7}{22}$', true],
          ['$\\dfrac{35}{110}$', false, 'That only divided by $9$; $35$ and $110$ still share a factor of $5$.'],
          ['$\\dfrac{7}{20}$', false, 'Check $990 \\div 45 = 22$, not $20$.']
        ],
        ok: '$x = \\dfrac{315\\div45}{990\\div45} = \\dfrac{7}{22}$.'
      },
      {
        q: 'Check by long division of $7 \\div 22$: $70\\div22=3$ r $4$; $40\\div22=1$ r $18$; $180\\div22=8$ remainder...',
        opts: [
          ['$4$ (repeats from here, giving $0.3\\overline{18}$!)', true],
          ['$0$', false, '$8\\times22 = 176$, so $180 - 176 = 4$, not $0$.'],
          ['$18$', false, '$180 - 176 = 4$, which returns to our earlier remainder $4$.']
        ],
        ok: 'Remainder $4$ repeats immediately, confirming $\\dfrac{7}{22} = 0.3\\overline{18}$.'
      }
    ],
    end: 'Done! <b>Method (Technique 5):</b> multiply $x$ by $10^j$ to clear the non-repeating part and by $10^{j+k}$ to shift one full block more, subtract so the tails cancel, then simplify.'
  },

  t4: {
    title: 'For $\\dfrac{2}{7} = 0.\\overline{285714}$, find the $100$th digit and the sum of the first $50$ digits.',
    steps: [
      {
        q: 'In $\\dfrac{2}{7} = 0.\\overline{285714}$, how many digits are in the repeating block (the period)?',
        opts: [
          ['$6$', true],
          ['$7$', false, 'Count the digits under the bar ($2,8,5,7,1,4$); by Theorem 3 the period is at most $7-1=6$.'],
          ['$2$', false, 'All six digits $285714$ sit under the bar and repeat together.']
        ],
        ok: 'The repeating block $285714$ has period $6$ (and no pre-period).'
      },
      {
        q: 'To find the $100$th digit after the decimal point, divide $100$ by $6$. What is the remainder?',
        opts: [
          ['$4$', true],
          ['$2$', false, '$6\\times16 = 96$, and $100 - 96 = 4$, not $2$.'],
          ['$0$', false, '$100$ is not divisible by $3$, so it cannot be divisible by $6$.']
        ],
        ok: '$100 = 6\\times16 + 4$, so the remainder is $4$.'
      },
      {
        q: 'Remainder $4$ means the $4$th digit of $2, 8, 5, 7, 1, 4$. What is the $100$th digit?',
        opts: [
          ['$7$', true],
          ['$5$', false, '$5$ is the $3$rd digit; count $2, 8, 5, 7$ to reach the $4$th.'],
          ['$4$', false, '$4$ is the $6$th digit (used when the remainder is $0$), not the $4$th.']
        ],
        ok: 'The $4$th digit of $285714$ is $7$, so the $100$th digit is $7$.'
      },
      {
        q: 'Now for the sum of the first $50$ digits: what is the sum of one full block $2+8+5+7+1+4$?',
        opts: [
          ['$27$', true],
          ['$26$', false, 'Pair them cleanly: $(2+8) + (5+7) + (1+4) = 10 + 12 + 5 = 27$.'],
          ['$21$', false, '$21$ is $1+2+3+4+5+6$; here the digits are $2,8,5,7,1,4$.']
        ],
        ok: 'Each full block sums to $2+8+5+7+1+4 = 27$.'
      },
      {
        q: 'Since $50 = 6\\times8 + 2$, we have $8$ full blocks plus the first $2$ digits ($2$ and $8$). What is the total sum?',
        opts: [
          ['$226$', true],
          ['$216$', false, '$8\\times27 = 216$ counts only the $8$ full blocks; add the $2$ leftover digits ($2+8=10$).'],
          ['$243$', false, '$9\\times27 = 243$ is $54$ digits, which is $4$ digits too many.']
        ],
        ok: '$8\\times27 + (2 + 8) = 216 + 10 = 226$.'
      }
    ],
    end: 'Done! <b>Method (Technique 8):</b> divide the position by the period and read the remainder digit (remainder $0$ means the last digit); for sums, multiply full blocks by the block sum and add the leftover digits.'
  }
};
