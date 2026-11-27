window.HZ_STEPPERS = {
  t1: {
    title: 'Work out $(-4) \\times (-3) \\times (-2)$ by thinking of multiplication as an operator.',
    steps: [
      {
        q: 'Start with $(-4) \\times (-3)$. In the operator view, what does $(-4) \\times (-3)$ mean on the number line?',
        opts: [
          ['Apply the operator $-4$ to the arrow for $-3$ (which points left, length $3$).', true],
          ['Add $-4$ and $-3$ together along the number line.', false, 'That is $(-4) + (-3) = -7$; multiplication scales and flips an arrow rather than adding two arrows.'],
          ['Move $4$ steps left from $-3$.', false, 'Moving $4$ steps left from $-3$ is subtraction $(-3) - 4 = -7$, not multiplication.']
        ],
        ok: 'Right: the first number $-4$ is the operator, and it acts on the arrow for $-3$.'
      },
      {
        q: 'The operator $-4$ stretches the arrow for $-3$ to $4$ times its length. What is the new length?',
        opts: [
          ['$12$', true],
          ['$7$', false, 'Stretching multiplies the length by $4$ ($4 \\times 3 = 12$); it does not add $4 + 3$.'],
          ['$1$', false, 'Do not subtract the lengths: $4$ times length $3$ gives $12$.']
        ],
        ok: 'Length $3$ stretched by a factor of $4$ becomes length $12$.'
      },
      {
        q: 'Because the operator $-4$ is negative, it also flips the arrow\'s direction. The arrow for $-3$ pointed left. After flipping, what is $(-4) \\times (-3)$?',
        opts: [
          ['$+12$ (the arrow now points right)', true],
          ['$-12$ (it stays pointing left)', false, 'A negative operator reverses direction: flipping a left-pointing arrow makes it point right.'],
          ['$+7$', false, 'You already found the stretched length is $12$, not $7$.']
        ],
        ok: 'Flipping a left-pointing arrow turns it right, so $(-4) \\times (-3) = +12$.'
      },
      {
        q: 'Now multiply by $-2$: by commutativity, $12 \\times (-2) = (-2) \\times 12$. What does the operator $-2$ do to the arrow for $+12$?',
        opts: [
          ['Stretches its length to $24$ and flips it from right to left.', true],
          ['Stretches its length to $24$ and keeps it pointing right.', false, 'The operator $-2$ is negative, so it must flip the arrow\'s direction.'],
          ['Shortens its length to $10$ and flips it to the left.', false, 'The operator $-2$ scales the length by $2$ ($2 \\times 12 = 24$), rather than subtracting $2$.']
        ],
        ok: 'Stretch $12$ to $24$, then flip from right to left.'
      },
      {
        q: 'So what is the final value of $(-4) \\times (-3) \\times (-2)$?',
        opts: [
          ['$-24$', true],
          ['$+24$', false, 'The arrow for $+12$ was flipped by the negative operator $-2$, so it now points left (negative).'],
          ['$-9$', false, '$-9$ is the sum $(-4) + (-3) + (-2)$, not the product.']
        ],
        ok: 'Arrow of length $24$ pointing left gives $-24$.'
      }
    ],
    end: 'Done! Applying $-4$ to $-3$ stretches length $3$ to $12$ and flips left to right ($+12$); then applying $-2$ stretches to $24$ and flips back to left, giving $(-4) \\times (-3) \\times (-2) = -24$.'
  },

  t2: {
    title: 'Test whether $187$ is prime or composite using the square-root test (Technique 2).',
    steps: [
      {
        q: 'We only need to test prime divisors up to $\\sqrt{187}$. Since $13^2 = 169$ and $14^2 = 196$, which primes do we need to test?',
        opts: [
          ['$2, 3, 5, 7, 11, 13$', true],
          ['$2, 3, 5, 7, 11, 13, 17$', false, '$17^2 = 289 \\gt 187$, so we can stop at $13$.'],
          ['Every whole number from $2$ to $13$', false, 'We only need to test primes: if a composite like $9$ divided $187$, its prime factor $3$ would already divide $187$.']
        ],
        ok: 'Six primes to check: $2, 3, 5, 7, 11, 13$.'
      },
      {
        q: 'Check the first three primes: $187$ is odd, its digit sum is $1 + 8 + 7 = 16$, and its last digit is $7$. What does that tell us?',
        opts: [
          ['None of $2$, $3$, or $5$ divides $187$, so move on to $7$.', true],
          ['$3$ divides $187$ because $16$ is even.', false, 'A number is divisible by $3$ only when its digit sum is a multiple of $3$, and $16$ is not.'],
          ['$187$ must be prime because $2$, $3$, and $5$ all failed.', false, 'We still have to check the remaining primes up to $13$: $7$, $11$, and $13$.']
        ],
        ok: '$2$, $3$, and $5$ are ruled out quickly.'
      },
      {
        q: 'Test $7$: $7 \\times 26 = 182$. Does $7$ divide $187$?',
        opts: [
          ['No: $187 = 7 \\times 26 + 5$, leaving remainder $5$.', true],
          ['Yes: $187 \\div 7 = 27$.', false, '$7 \\times 27 = 189$, which is $2$ too big.'],
          ['Yes: $187$ ends in $7$, so it is a multiple of $7$.', false, 'Ending in $7$ does not make a number a multiple of $7$ (for example $17$ and $27$ are not multiples of $7$).']
        ],
        ok: '$7$ does not divide $187$, so test $11$ next.'
      },
      {
        q: 'Test $11$: split $187$ as $110 + 77$. What is $187 \\div 11$?',
        opts: [
          ['$17$ with no remainder ($11 \\times 17 = 187$).', true],
          ['$16$ with remainder $11$.', false, 'A remainder of $11$ means one more $11$ fits in: $16 + 1 = 17$.'],
          ['$11$ does not divide $187$.', false, 'Check $11 \\times 10 = 110$ and $11 \\times 7 = 77$, and $110 + 77 = 187$.']
        ],
        ok: 'Found a factor: $187 = 11 \\times 17$.'
      },
      {
        q: 'What is our conclusion about $187$?',
        opts: [
          ['$187$ is composite, and its smallest prime factor is $11$.', true],
          ['$187$ is prime, because $11$ and $17$ are prime.', false, 'Being a product of two primes means $187$ has factors $1, 11, 17, 187$, so it is composite.'],
          ['We still must test $13$ before deciding.', false, 'As soon as we find one factor between $1$ and $187$, we already know $187$ is composite.']
        ],
        ok: 'Correct: $187 = 11 \\times 17$ is composite, with smallest prime factor $11$.'
      }
    ],
    end: 'Done! Testing primes up to $\\sqrt{187} \\approx 13.7$ ruled out $2, 3, 5, 7$ and hit $11$, showing $187 = 11 \\times 17$ is composite.'
  },

  t3: {
    title: 'Write $504$ as a product of primes in index form using the factor ladder (Technique 1).',
    steps: [
      {
        q: 'Start the factor ladder by dividing $504$ by the smallest prime that works, $2$, until you reach an odd number: $504 \\to 252 \\to 126 \\to 63$. How many factors of $2$ came out?',
        opts: [
          ['Three factors of $2$ (giving $2^3$), leaving $63$.', true],
          ['Two factors of $2$ (giving $2^2$), leaving $126$.', false, '$126$ is still even, so divide by $2$ one more time to get $63$.'],
          ['Four factors of $2$ (giving $2^4$).', false, '$63$ is odd, so $2$ does not divide $63$.']
        ],
        ok: 'Three divisions by $2$ give $504 = 2^3 \\times 63$.'
      },
      {
        q: 'Next, look at $63$. What is the smallest prime that divides $63$?',
        opts: [
          ['$3$', true],
          ['$2$', false, '$63$ is odd, so $2$ does not divide it.'],
          ['$9$', false, '$9$ divides $63$, but $9 = 3 \\times 3$ is not prime — use primes on the ladder.']
        ],
        ok: 'Digit sum $6 + 3 = 9$, so $3$ divides $63$.'
      },
      {
        q: 'Divide $63$ by $3$ repeatedly: $63 \\div 3 = 21$, then $21 \\div 3 = 7$. How many factors of $3$ did we pull out, and what is left?',
        opts: [
          ['Two factors of $3$ (giving $3^2$), leaving $7$.', true],
          ['One factor of $3$, leaving $21$.', false, '$21 = 3 \\times 7$ is still divisible by $3$, so divide once more.'],
          ['Three factors of $3$, leaving $1$.', false, '$3^3 = 27$, not $63$; after two divisions by $3$, $7$ remains.']
        ],
        ok: 'Now we have $504 = 2^3 \\times 3^2 \\times 7$.'
      },
      {
        q: 'Can $7$ be split into smaller prime factors?',
        opts: [
          ['No — $7$ is prime, so dividing by $7$ reaches $1$ and the ladder stops.', true],
          ['Yes — write $7 = 1 \\times 7$ and keep $1$ in the product.', false, '$1$ is not a prime number, so we never include $1$ in a prime factorisation.'],
          ['Yes — $7$ is divisible by $3$.', false, '$3 \\times 2 = 6$ and $3 \\times 3 = 9$, so $3$ does not divide $7$.']
        ],
        ok: 'The ladder reaches $1$, so every factor is prime.'
      },
      {
        q: 'Put all the primes from the ladder together in index form. What is $504$?',
        opts: [
          ['$2^3 \\times 3^2 \\times 7$', true],
          ['$2^3 \\times 9 \\times 7$', false, '$9$ is composite — write $9$ as $3^2$ so every base is prime.'],
          ['$2^2 \\times 3^3 \\times 7$', false, 'Check the product: $4 \\times 27 \\times 7 = 756$, whereas $8 \\times 9 \\times 7 = 504$.']
        ],
        ok: 'Check: $8 \\times 9 \\times 7 = 504$ — and by the Fundamental Theorem, this factorisation is unique.'
      }
    ],
    end: 'Done! The factor ladder gives $504 = 2^3 \\times 3^2 \\times 7$. Multiply back ($8 \\times 9 \\times 7 = 504$) to be sure.'
  },

  t4: {
    title: 'Find the total number of divisors and the number of odd divisors of $252 = 2^2 \\times 3^2 \\times 7$.',
    steps: [
      {
        q: 'Every divisor of $252 = 2^2 \\times 3^2 \\times 7^1$ is built by choosing an exponent for each prime. How many choices are there for the exponent of $2$?',
        opts: [
          ['$3$ choices ($0$, $1$, or $2$)', true],
          ['$2$ choices ($1$ or $2$)', false, 'Do not forget exponent $0$ (using no factor of $2$ at all): $0, 1, 2$ is $2 + 1 = 3$ choices.'],
          ['$4$ choices', false, 'The exponent of $2$ cannot exceed $2$, so there are $2 + 1 = 3$ choices.']
        ],
        ok: 'Exponent $e$ always gives $e + 1$ choices, so $2^2$ gives $3$ choices.'
      },
      {
        q: 'How many choices are there for the exponent of $3$ (in $3^2$) and for the exponent of $7$ (in $7^1$)?',
        opts: [
          ['$3$ choices for $3$, and $2$ choices for $7$.', true],
          ['$2$ choices for $3$, and $1$ choice for $7$.', false, 'Remember to add $1$ to each exponent for the $0$ choice: $2+1=3$ and $1+1=2$.'],
          ['$3$ choices for $3$, and $1$ choice for $7$.', false, 'For $7^1$, the exponent can be $0$ or $1$ — that is $2$ choices, not $1$.']
        ],
        ok: 'The three choice boxes are $3$, $3$, and $2$.'
      },
      {
        q: 'Multiply the boxes (Technique 1). How many divisors does $252$ have in total?',
        opts: [
          ['$3 \\times 3 \\times 2 = 18$', true],
          ['$3 + 3 + 2 = 8$', false, 'We combine independent choices by multiplying the box sizes, not adding them.'],
          ['$2 \\times 2 \\times 1 = 4$', false, 'You multiplied the exponents instead of $(e + 1)$ for each prime.']
        ],
        ok: 'So $252$ has $18$ divisors altogether.'
      },
      {
        q: 'Now count only the odd divisors of $252$ (Technique 2). What happens to the choice box for the prime $2$?',
        opts: [
          ['It has only $1$ choice: exponent $0$ (no factor of $2$).', true],
          ['It has $2$ choices: exponent $1$ or $2$.', false, 'Any factor of $2$ makes the divisor even; odd divisors must have exponent $0$ on $2$.'],
          ['It has $0$ choices, so there are $0$ odd divisors.', false, 'Exponent $0$ is still $1$ valid choice (for example, $1$ and $3$ are odd divisors of $252$).']
        ],
        ok: 'Locking the exponent of $2$ to $0$ leaves $1$ choice in the first box.'
      },
      {
        q: 'Multiply the boxes for odd divisors: $1$ choice for $2$, $3$ for $3$, and $2$ for $7$. How many odd divisors does $252$ have?',
        opts: [
          ['$1 \\times 3 \\times 2 = 6$', true],
          ['$18 \\div 2 = 9$', false, 'Half the divisors are odd only when the exponent of $2$ is $1$; here $2^2$ gives $1$ odd choice out of $3$ (a third of $18$).'],
          ['$3 \\times 2 + 1 = 7$', false, 'Multiply all three boxes: $1 \\times 3 \\times 2 = 6$, do not add $1$.']
        ],
        ok: 'Right: the $6$ odd divisors are $1, 3, 7, 9, 21, 63$ (and the other $18 - 6 = 12$ are even).'
      }
    ],
    end: 'Done! From $252 = 2^2 \\times 3^2 \\times 7^1$, the box method gives $(2+1)(2+1)(1+1) = 18$ divisors in total, and $1 \\times 3 \\times 2 = 6$ odd divisors.'
  },

  t5: {
    title: 'Find $\\text{HCF}(90, 120)$ and $\\text{LCM}(90, 120)$ from their prime factorisations.',
    steps: [
      {
        q: 'First write both numbers in prime-factor index form. Which pair is correct?',
        opts: [
          ['$90 = 2^1 \\times 3^2 \\times 5^1$ and $120 = 2^3 \\times 3^1 \\times 5^1$', true],
          ['$90 = 2^2 \\times 3^2 \\times 5^1$ and $120 = 2^3 \\times 3^1 \\times 5^1$', false, '$2^2 \\times 3^2 \\times 5 = 180$, not $90$; $90 = 2 \\times 9 \\times 5$ has only one $2$.'],
          ['$90 = 2^1 \\times 3^2 \\times 5^1$ and $120 = 2^2 \\times 3^2 \\times 5^1$', false, '$2^2 \\times 3^2 \\times 5 = 180$, not $120$; $120 = 8 \\times 3 \\times 5 = 2^3 \\times 3^1 \\times 5^1$.']
        ],
        ok: 'Line up the primes: $90 = 2^1 \\cdot 3^2 \\cdot 5^1$ and $120 = 2^3 \\cdot 3^1 \\cdot 5^1$.'
      },
      {
        q: 'To find $\\text{HCF}(90, 120)$ from prime factorisations (Technique 1), which power of each prime do we take?',
        opts: [
          ['The smaller power of each prime: $2^1$, $3^1$, and $5^1$.', true],
          ['The larger power of each prime: $2^3$, $3^2$, and $5^1$.', false, 'The larger powers give the LCM, not the HCF; a common factor cannot use a higher power than either number has.'],
          ['Add the powers of each prime: $2^4$, $3^3$, and $5^2$.', false, 'Adding the powers multiplies the two numbers together ($90 \\times 120$), which is much bigger than the HCF.']
        ],
        ok: 'Smaller powers: $\\min(1,3)=1$, $\\min(2,1)=1$, $\\min(1,1)=1$.'
      },
      {
        q: 'Multiply those smaller powers. What is $\\text{HCF}(90, 120)$?',
        opts: [
          ['$2^1 \\times 3^1 \\times 5^1 = 30$', true],
          ['$2 \\times 3 = 6$', false, 'You left out $5^1$: both $90$ and $120$ are divisible by $5$.'],
          ['$2 + 3 + 5 = 10$', false, 'Multiply the prime powers ($2 \\times 3 \\times 5 = 30$); do not add them.']
        ],
        ok: '$\\text{HCF}(90, 120) = 30$.'
      },
      {
        q: 'Now find $\\text{LCM}(90, 120)$ by taking the larger power of each prime: $2^3 \\times 3^2 \\times 5^1$. What is that product?',
        opts: [
          ['$8 \\times 9 \\times 5 = 360$', true],
          ['$6 \\times 6 \\times 5 = 180$', false, '$2^3 = 8$ (not $6$) and $3^2 = 9$ (not $6$); $8 \\times 9 \\times 5 = 360$.'],
          ['$90 \\times 120 = 10\\,800$', false, '$10\\,800$ is a common multiple, but not the lowest — using the larger powers gives $360$.']
        ],
        ok: '$\\text{LCM}(90, 120) = 360$.'
      },
      {
        q: 'Check with the product rule $\\text{HCF} \\times \\text{LCM} = a \\times b$ (Technique 2). What do both sides equal?',
        opts: [
          ['Both equal $10\\,800$ ($30 \\times 360 = 10\\,800$ and $90 \\times 120 = 10\\,800$).', true],
          ['Both equal $360$.', false, '$360$ is just the LCM; multiply $\\text{HCF} \\times \\text{LCM} = 30 \\times 360 = 10\\,800$.'],
          ['They do not match, because $90$ and $120$ share prime factors.', false, '$\\text{HCF} \\times \\text{LCM} = a \\times b$ holds for every pair of positive integers, because $\\min + \\max = \\alpha + \\beta$ for each prime.']
        ],
        ok: 'Both sides are $10\\,800$ — the prime-factorisation check passes.'
      }
    ],
    end: 'Done! From $90 = 2^1 \\times 3^2 \\times 5^1$ and $120 = 2^3 \\times 3^1 \\times 5^1$, smaller powers give $\\text{HCF} = 30$ and larger powers give $\\text{LCM} = 360$.'
  }
};
