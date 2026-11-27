window.HZ_STEPPERS = {
  t1: {
    title: 'Write $\\dfrac{108}{180}$ in simplest form.',
    steps: [
      {
        q: 'First, write the numerator $108$ as a product of primes.',
        opts: [
          ['$2^2\\times3^3$', true],
          ['$2^3\\times3^2$', false, '$2^3\\times3^2 = 8\\times9 = 72$, not $108$.'],
          ['$4\\times27$', false, '$4$ and $27$ are not primes yet: keep splitting.']
        ],
        ok: '$108 = 4\\times27 = 2^2\\times3^3$.'
      },
      {
        q: 'Now write the denominator $180$ as a product of primes.',
        opts: [
          ['$2^2\\times3^2\\times5$', true],
          ['$2^3\\times3\\times5$', false, '$2^3\\times3\\times5 = 120$, not $180$.'],
          ['$2\\times3^2\\times10$', false, '$10$ is not prime: split it into $2\\times5$.']
        ],
        ok: '$180 = 36\\times5 = 2^2\\times3^2\\times5$.'
      },
      {
        q: 'From $108 = 2^2\\times3^3$ and $180 = 2^2\\times3^2\\times5$, what is $\\text{HCF}(108, 180)$?',
        opts: [
          ['$36$', true],
          ['$18$', false, 'Both numbers have $2^2$, not just $2^1$: $2^2\\times3^2 = 36$.'],
          ['$180$', false, '$180$ does not divide $108$; take the smaller power of each shared prime.']
        ],
        ok: 'Shared prime factors: $2^2\\times3^2 = 4\\times9 = 36$.'
      },
      {
        q: 'Divide both numerator and denominator of $\\dfrac{108}{180}$ by $36$.',
        opts: [
          ['$\\dfrac{3}{5}$', true],
          ['$\\dfrac{6}{10}$', false, 'That only divided by $18$, so $6$ and $10$ still share a factor of $2$.'],
          ['$\\dfrac{5}{3}$', false, 'Keep the numerator on top: $108\\div36=3$ and $180\\div36=5$.']
        ],
        ok: '$\\dfrac{108\\div36}{180\\div36} = \\dfrac{3}{5}$, and $\\text{HCF}(3,5)=1$.'
      },
      {
        q: 'Check with cross-multiplication (Theorem 1): what do both $108\\times5$ and $180\\times3$ equal?',
        opts: [
          ['$540$', true],
          ['$324$', false, '$324 = 108\\times3$; cross-multiply top-left by bottom-right ($108\\times5$).'],
          ['$900$', false, '$900 = 180\\times5$; cross-multiply bottom-left by top-right ($180\\times3$).']
        ],
        ok: '$108\\times5 = 540$ and $180\\times3 = 540$, so $\\dfrac{108}{180} = \\dfrac{3}{5}$.'
      }
    ],
    end: 'Done! <b>Method (Technique 1):</b> find the HCF of numerator and denominator using prime factors, then divide both by the HCF so the new HCF is $1$.'
  },

  t2: {
    title: '$\\dfrac{4}{7}$ of a rope is $28\\text{ m}$ long. Find the whole length and the remaining $\\dfrac{3}{7}$.',
    steps: [
      {
        q: 'What does "$\\dfrac{4}{7}$ of the rope is $28\\text{ m}$" tell us about the $7$ equal sevenths?',
        opts: [
          ['$4$ of the $7$ equal parts measure $28\\text{ m}$', true],
          ['All $7$ equal parts measure $28\\text{ m}$', false, '$28\\text{ m}$ is only $\\dfrac{4}{7}$ of the rope, not the whole rope.'],
          ['Each seventh measures $28\\text{ m}$', false, '$28\\text{ m}$ is four sevenths together, not a single seventh.']
        ],
        ok: 'Right: $4$ equal sevenths add up to $28\\text{ m}$.'
      },
      {
        q: 'Undo the stretch ($\\times4$): how long is $\\dfrac{1}{7}$ of the rope?',
        opts: [
          ['$7\\text{ m}$', true],
          ['$4\\text{ m}$', false, 'Divide $28$ by $4$ (the number of sevenths we have), not by $7$.'],
          ['$112\\text{ m}$', false, 'Divide by $4$ to find one seventh, rather than multiplying by $4$.']
        ],
        ok: 'One seventh is $28 \\div 4 = 7\\text{ m}$.'
      },
      {
        q: 'Now undo the shrink ($\\div7$): how long is the whole rope?',
        opts: [
          ['$49\\text{ m}$', true],
          ['$28\\text{ m}$', false, '$28\\text{ m}$ is only $4$ sevenths; the whole rope has $7$ sevenths.'],
          ['$14\\text{ m}$', false, 'Multiply $7\\text{ m}$ by $7$ parts ($7\\times7=49$), rather than adding $7+7$.']
        ],
        ok: 'The whole rope is $7 \\times 7 = 49\\text{ m}$.'
      },
      {
        q: 'How long is the remaining $\\dfrac{3}{7}$ of the rope?',
        opts: [
          ['$21\\text{ m}$', true],
          ['$12\\text{ m}$', false, 'Each seventh is $7\\text{ m}$ (not $4\\text{ m}$), so $3$ sevenths is $3\\times7=21\\text{ m}$.'],
          ['$28\\text{ m}$', false, '$28\\text{ m}$ is the $\\dfrac{4}{7}$ part we were already given.']
        ],
        ok: '$3$ sevenths is $3 \\times 7 = 21\\text{ m}$.'
      },
      {
        q: 'Check: the two parts are $28\\text{ m}$ and $21\\text{ m}$. What is their total?',
        opts: [
          ['$49\\text{ m}$ (matches the whole rope)', true],
          ['$56\\text{ m}$', false, 'Check $28 + 21 = 49$, which matches the whole rope of $49\\text{ m}$.'],
          ['$7\\text{ m}$', false, 'Add the two parts ($28 + 21$) rather than subtracting them.']
        ],
        ok: '$28 + 21 = 49\\text{ m}$, matching the whole rope.'
      }
    ],
    end: 'Done! <b>Method (Technique 6):</b> to undo $\\dfrac{p}{q}$, divide by $p$ to find one $\\dfrac{1}{q}$ part, then multiply by $q$ for the whole (or by any other numerator you need).'
  },

  t3: {
    title: 'Which fraction is larger: $\\dfrac{14}{15}$ or $\\dfrac{43}{45}$?',
    steps: [
      {
        q: 'Both fractions are just below $1$. What is the gap $1 - \\dfrac{14}{15}$?',
        opts: [
          ['$\\dfrac{1}{15}$', true],
          ['$\\dfrac{1}{14}$', false, 'The denominator stays $15$: $\\dfrac{15}{15} - \\dfrac{14}{15} = \\dfrac{1}{15}$.'],
          ['$\\dfrac{14}{15}$', false, 'That is the fraction itself; subtract it from $1$ to get the missing piece.']
        ],
        ok: '$\\dfrac{14}{15} = 1 - \\dfrac{1}{15}$, so its gap to $1$ is $\\dfrac{1}{15}$.'
      },
      {
        q: 'What is the gap $1 - \\dfrac{43}{45}$?',
        opts: [
          ['$\\dfrac{2}{45}$', true],
          ['$\\dfrac{1}{45}$', false, 'Subtract carefully: $45 - 43 = 2$, not $1$.'],
          ['$\\dfrac{2}{43}$', false, 'Keep the denominator $45$: $\\dfrac{45}{45} - \\dfrac{43}{45} = \\dfrac{2}{45}$.']
        ],
        ok: '$\\dfrac{43}{45} = 1 - \\dfrac{2}{45}$, so its gap to $1$ is $\\dfrac{2}{45}$.'
      },
      {
        q: 'Turn $\\dfrac{2}{45}$ into a unit fraction $\\dfrac{1}{(\\ldots)}$ by dividing top and bottom by $2$.',
        opts: [
          ['$\\dfrac{1}{22.5}$', true],
          ['$\\dfrac{1}{43}$', false, 'Divide $45$ by $2$, rather than subtracting $2$ from $45$.'],
          ['$\\dfrac{1}{90}$', false, 'Divide the denominator by $2$ ($45\\div2=22.5$), rather than multiplying by $2$.']
        ],
        ok: '$\\dfrac{2\\div2}{45\\div2} = \\dfrac{1}{22.5}$.'
      },
      {
        q: 'Compare the two gaps: $\\dfrac{1}{15}$ and $\\dfrac{1}{22.5}$. Which gap is smaller?',
        opts: [
          ['$\\dfrac{1}{22.5}$', true],
          ['$\\dfrac{1}{15}$', false, 'With the same numerator $1$, the larger denominator gives the smaller piece.'],
          ['They are equal', false, '$15 \\ne 22.5$, so the two unit fractions are different.']
        ],
        ok: '$22.5 > 15$, so $\\dfrac{1}{22.5} < \\dfrac{1}{15}$: the gap for $\\dfrac{43}{45}$ is smaller.'
      },
      {
        q: 'A smaller gap to $1$ means a larger fraction. Which fraction is larger?',
        opts: [
          ['$\\dfrac{43}{45}$', true],
          ['$\\dfrac{14}{15}$', false, 'Remember the order flips: the larger gap ($\\dfrac{1}{15}$) belongs to the smaller fraction.'],
          ['They are equal', false, 'Check with common denominator $45$: $\\dfrac{14}{15} = \\dfrac{42}{45} < \\dfrac{43}{45}$.']
        ],
        ok: '$\\dfrac{43}{45}$ is closer to $1$, so $\\dfrac{43}{45} > \\dfrac{14}{15}$ (check: $\\dfrac{14}{15} = \\dfrac{42}{45}$).'
      }
    ],
    end: 'Done! <b>Method (Technique 9):</b> write each fraction as $1 - \\text{gap}$, turn each gap into a unit fraction $\\dfrac{1}{(\\ldots)}$, and remember that the smaller gap gives the larger fraction.'
  },

  t4: {
    title: 'Find the fraction exactly halfway between $\\dfrac{2}{5}$ and $\\dfrac{3}{4}$.',
    steps: [
      {
        q: 'To add $\\dfrac{2}{5}$ and $\\dfrac{3}{4}$, what is the smallest common denominator?',
        opts: [
          ['$20$', true],
          ['$9$', false, 'Find the LCM of $5$ and $4$ ($20$), rather than adding $5+4$.'],
          ['$10$', false, '$4$ does not divide $10$ evenly.']
        ],
        ok: '$\\text{LCM}(5, 4) = 20$.'
      },
      {
        q: 'Rewrite $\\dfrac{2}{5}$ and $\\dfrac{3}{4}$ with denominator $20$.',
        opts: [
          ['$\\dfrac{8}{20}$ and $\\dfrac{15}{20}$', true],
          ['$\\dfrac{2}{20}$ and $\\dfrac{3}{20}$', false, 'Multiply each numerator by the same number as its denominator.'],
          ['$\\dfrac{10}{20}$ and $\\dfrac{12}{20}$', false, 'Check each factor: $2\\times4=8$ and $3\\times5=15$.']
        ],
        ok: '$\\dfrac{2}{5} = \\dfrac{8}{20}$ and $\\dfrac{3}{4} = \\dfrac{15}{20}$.'
      },
      {
        q: 'Add the two fractions: $\\dfrac{8}{20} + \\dfrac{15}{20}$.',
        opts: [
          ['$\\dfrac{23}{20}$', true],
          ['$\\dfrac{23}{40}$', false, 'When adding fractions with the same denominator, keep the denominator $20$.'],
          ['$\\dfrac{5}{9}$', false, 'That is the mediant ($\\dfrac{2+3}{5+4}$), not the sum of the two fractions.']
        ],
        ok: '$\\dfrac{8}{20} + \\dfrac{15}{20} = \\dfrac{23}{20}$.'
      },
      {
        q: 'Now halve the sum $\\dfrac{23}{20}$ to get the midpoint (multiply the denominator by $2$).',
        opts: [
          ['$\\dfrac{23}{40}$', true],
          ['$\\dfrac{23}{10}$', false, 'Halving makes a fraction smaller, so double the denominator instead of halving it.'],
          ['$\\dfrac{46}{20}$', false, 'Doubling the numerator doubles the fraction instead of halving it.']
        ],
        ok: 'Half of $\\dfrac{23}{20}$ is $\\dfrac{23}{40}$.'
      },
      {
        q: 'Check: $\\dfrac{2}{5} = \\dfrac{16}{40}$ and $\\dfrac{3}{4} = \\dfrac{30}{40}$. How far is $\\dfrac{23}{40}$ from each end?',
        opts: [
          ['$\\dfrac{7}{40}$ from both ends', true],
          ['$\\dfrac{14}{40}$ from both ends', false, '$\\dfrac{14}{40}$ is the full distance from $\\dfrac{16}{40}$ to $\\dfrac{30}{40}$, not half of it.'],
          ['$\\dfrac{5}{40}$ from both ends', false, 'Check the subtraction: $23 - 16 = 7$ and $30 - 23 = 7$.']
        ],
        ok: '$\\dfrac{23}{40} - \\dfrac{16}{40} = \\dfrac{7}{40}$ and $\\dfrac{30}{40} - \\dfrac{23}{40} = \\dfrac{7}{40}$: dead centre!'
      }
    ],
    end: 'Done! <b>Method (Technique 10):</b> put both fractions on a common denominator, add the numerators, then halve by doubling the denominator (and simplify if needed).'
  }
};
