window.HZ_STEPPERS = {
  t1: {
    title: 'Find the remainder when $-31$ is divided by $6$, and test whether $-31 \\equiv 17 \\pmod 6$.',
    steps: [
      {
        q: 'When dividing any integer by $m = 6$, which set must the remainder $r$ belong to (Technique 1)?',
        opts: [
          ['$\\{0, 1, 2, 3, 4, 5\\}$ (never negative)', true],
          ['$\\{-5, -4, \\ldots, 4, 5\\}$', false, 'A remainder is always in $\\{0, 1, \\ldots, m - 1\\}$, never negative.'],
          ['$\\{1, 2, 3, 4, 5, 6\\}$', false, 'A multiple of $6$ has remainder $0$, not $6$.']
        ],
        ok: 'Right: modulo $6$, every remainder lies in $\\{0, 1, 2, 3, 4, 5\\}$.'
      },
      {
        q: 'To find the remainder of $-31$ mod $6$, add multiples of $6$ until you land in $\\{0, 1, 2, 3, 4, 5\\}$. Which multiple of $6$ does the job?',
        opts: [
          ['Add $36 = 6 \\times 6$, giving $-31 + 36 = 5$.', true],
          ['Add $30 = 6 \\times 5$, giving $-31 + 30 = -1$.', false, '$-1$ is still negative — add one more $6$ to land inside $\\{0, 1, 2, 3, 4, 5\\}$.'],
          ['Divide $31$ by $6$ to get remainder $1$.', false, 'Ignoring the minus sign gives $31 \\bmod 6 = 1$, whereas $-31$ and $31$ lie in different classes mod $6$.']
        ],
        ok: 'Adding $36$ lands on $5$, which is in $\\{0, 1, 2, 3, 4, 5\\}$.'
      },
      {
        q: 'So how do we write $-31$ in the form $6q + r$, and which class does $-31$ belong to?',
        opts: [
          ['$-31 = 6 \\times (-6) + 5$, so $-31 \\in [5]_6$.', true],
          ['$-31 = 6 \\times (-5) - 1$, so $-31 \\in [-1]_6$.', false, 'We write classes with a remainder from $0$ to $5$, so use $q = -6$ and $r = 5$ to get $[5]_6$.'],
          ['$-31 = 6 \\times (-5) + 1$, so $-31 \\in [1]_6$.', false, 'Check the arithmetic: $6 \\times (-5) + 1 = -29$, not $-31$.']
        ],
        ok: '$-31 = 6 \\times (-6) + 5$, so $-31 \\in [5]_6$.'
      },
      {
        q: 'Now test whether $-31 \\equiv 17 \\pmod 6$ using the difference test (Technique 2). What is $17 - (-31)$?',
        opts: [
          ['$48$', true],
          ['$-14$', false, 'Subtracting a negative adds: $17 - (-31) = 17 + 31 = 48$, not $17 - 31$.'],
          ['$14$', false, 'Be careful with the double minus: $17 - (-31) = 17 + 31 = 48$.']
        ],
        ok: 'The difference is $17 - (-31) = 48$.'
      },
      {
        q: 'Does $6$ divide $48$, and what does that tell us about $-31 \\equiv 17 \\pmod 6$?',
        opts: [
          ['Yes ($48 = 6 \\times 8$), so $-31 \\equiv 17 \\pmod 6$ — both lie in $[5]_6$.', true],
          ['No, so $-31 \\not\\equiv 17 \\pmod 6$.', false, '$6 \\times 8 = 48$ exactly, so $6$ does divide the difference.'],
          ['Yes, which means both numbers are multiples of $6$.', false, 'Dividing the difference means they share the same remainder ($5$), not that either number is a multiple of $6$.']
        ],
        ok: 'Check: $17 = 6 \\times 2 + 5$, so both $-31$ and $17$ land on position $5$ of the $6$-clock.'
      }
    ],
    end: 'Done! Adding $36$ gave $-31 \\in [5]_6$, and the difference test $17 - (-31) = 48 = 6 \\times 8$ confirmed $-31 \\equiv 17 \\pmod 6$.'
  },

  t2: {
    title: 'Find $(74 + 65) \\bmod 8$ by reducing first, then solve $x + 6 \\equiv 3 \\pmod 8$.',
    steps: [
      {
        q: 'First find $(74 + 65) \\bmod 8$ using Theorem 2 (Technique 1: reduce first, then add). What are $74 \\bmod 8$ and $65 \\bmod 8$?',
        opts: [
          ['$74 \\equiv 2$ and $65 \\equiv 1 \\pmod 8$', true],
          ['$74 \\equiv 4$ and $65 \\equiv 5 \\pmod 8$', false, '$4$ and $5$ are the units digits (mod $10$), not the remainders mod $8$: $74 = 8 \\times 9 + 2$ and $65 = 8 \\times 8 + 1$.'],
          ['$74 \\equiv 2$ and $65 \\equiv 3 \\pmod 8$', false, '$8 \\times 8 = 64$, so $65 = 64 + 1 \\equiv 1 \\pmod 8$, not $3$.']
        ],
        ok: 'Replacing $74$ by $2$ and $65$ by $1$ keeps the numbers tiny.'
      },
      {
        q: 'Add those remainders. What is $(74 + 65) \\bmod 8$?',
        opts: [
          ['$2 + 1 = 3$', true],
          ['$2 \\times 1 = 2$', false, 'The problem asks for the sum $74 + 65$, so add the remainders ($2 + 1 = 3$).'],
          ['$139$', false, '$139$ is the integer sum; reduce it mod $8$ ($139 = 8 \\times 17 + 3$) to get $3$.']
        ],
        ok: 'Check: $74 + 65 = 139 = 8 \\times 17 + 3$, matching $3$.'
      },
      {
        q: 'Now solve $x + 6 \\equiv 3 \\pmod 8$ in $\\mathbb{Z}_8$ (Technique 2: subtract by adding the inverse). What is the additive inverse of $6$ modulo $8$?',
        opts: [
          ['$2$, because $6 + 2 = 8 \\equiv 0 \\pmod 8$', true],
          ['$6$, because $6 - 6 = 0$', false, 'The additive inverse of $a$ mod $m$ is $m - a$, the clock position that adds to $a$ to make $0$: $8 - 6 = 2$.'],
          ['$4$, because $6 + 4 = 10$', false, 'We want the sum to be $8 \\equiv 0 \\pmod 8$, not $10$: $8 - 6 = 2$.']
        ],
        ok: 'Right: the additive inverse of $6$ mod $8$ is $8 - 6 = 2$.'
      },
      {
        q: 'Add $2$ to both sides of $x + 6 \\equiv 3 \\pmod 8$. What do you get for $x$?',
        opts: [
          ['$x \\equiv 3 + 2 = 5 \\pmod 8$', true],
          ['$x \\equiv 3 - 2 = 1 \\pmod 8$', false, 'Adding the inverse $2$ to both sides cancels $+6$ on the left and gives $3 + 2 = 5$ on the right.'],
          ['$x \\equiv 3 + 6 = 9 \\equiv 1 \\pmod 8$', false, 'Adding $6$ to both sides gives $x + 12 \\equiv 9$, not $x$ alone; add the inverse $2$ instead.']
        ],
        ok: 'On the left $6 + 2 \\equiv 0$, leaving $x \\equiv 5 \\pmod 8$.'
      },
      {
        q: 'Check $x = 5$ in the original equation $x + 6 \\equiv 3 \\pmod 8$. Does it work?',
        opts: [
          ['Yes: $5 + 6 = 11 = 8 \\times 1 + 3 \\equiv 3 \\pmod 8$.', true],
          ['No: $5 + 6 = 11$, which is bigger than $8$.', false, 'On the $8$-clock, $11$ wraps around $8$ to land on $3$, so $11 \\equiv 3 \\pmod 8$.'],
          ['No: $x$ should be $-3$, because $3 - 6 = -3$.', false, '$-3$ is in the same class as $5$ ($-3 + 8 = 5$), and in $\\mathbb{Z}_8$ we write the answer from $0$ to $7$.']
        ],
        ok: 'Check passed: $5 + 6 = 11 \\equiv 3 \\pmod 8$.'
      }
    ],
    end: 'Done! Reducing first gave $(74 + 65) \\bmod 8 = 3$, and adding the inverse $2$ of $6$ mod $8$ solved $x + 6 \\equiv 3 \\pmod 8$ to give $x = 5$.'
  },

  t3: {
    title: 'Find the units digit of $7^{50}$ using its power cycle (Technique 1).',
    steps: [
      {
        q: 'Finding the units digit of $7^{50}$ means working in which modulus?',
        opts: [
          ['Modulo $10$', true],
          ['Modulo $7$', false, 'Mod $7$ would give $7^{50} \\equiv 0$, which does not tell us the units digit in base $10$.'],
          ['Modulo $50$', false, '$50$ is the exponent, not the modulus; the units digit of any integer is its remainder mod $10$.']
        ],
        ok: 'The units digit of any whole number is its remainder modulo $10$.'
      },
      {
        q: 'Compute the powers of $7$ mod $10$, reducing at each step (Theorem 3): $7^1 \\equiv 7$, $7^2 = 49 \\equiv 9$, $7^3 \\equiv 9 \\times 7 = 63 \\equiv 3$. What is $7^4 \\bmod 10$?',
        opts: [
          ['$1$ (since $3 \\times 7 = 21 \\equiv 1$)', true],
          ['$7$ (since $7^4$ repeats $7^1$)', false, 'Multiply the previous units digit $3$ by $7$: $3 \\times 7 = 21$, whose units digit is $1$.'],
          ['$9$ (since $7^4 = (7^2)^2$)', false, '$9^2 = 81$, whose units digit is $1$, not $9$.']
        ],
        ok: 'We hit $7^4 \\equiv 1 \\pmod{10}$!'
      },
      {
        q: 'The next power is $7^5 \\equiv 1 \\times 7 = 7$, so the units digits $7, 9, 3, 1$ repeat forever. What is the period of this cycle?',
        opts: [
          ['$4$', true],
          ['$5$', false, 'The cycle repeats at $7^5$, which means the repeating block $7, 9, 3, 1$ has length $4$.'],
          ['$10$', false, 'The modulus is $10$, but the cycle $7, 9, 3, 1$ only has $4$ distinct digits before repeating.']
        ],
        ok: 'Period $4$: every $4$ powers, the units digit comes back to the start.'
      },
      {
        q: 'Divide the exponent $50$ by the period $4$. What is the remainder?',
        opts: [
          ['$2$ (since $50 = 4 \\times 12 + 2$)', true],
          ['$0$ (since $50$ is even)', false, '$50$ is even, not a multiple of $4$: $4 \\times 12 = 48$, leaving remainder $2$.'],
          ['$1$ (since $4 \\times 12 = 48$)', false, '$50 - 48 = 2$, not $1$.']
        ],
        ok: 'So $7^{50} = (7^4)^{12} \\times 7^2$.'
      },
      {
        q: 'Since $7^4 \\equiv 1 \\pmod{10}$ and $7^{50} = (7^4)^{12} \\times 7^2$, what is the units digit of $7^{50}$?',
        opts: [
          ['$9$ (the units digit of $7^2 = 49$)', true],
          ['$7$ (the first digit of the cycle)', false, 'Remainder $2$ selects the second term in the cycle $7, 9, 3, 1$, which is $9$.'],
          ['$1$ (because $7^4 \\equiv 1$)', false, '$(7^4)^{12} \\equiv 1$, but there is still a leftover factor of $7^2 \\equiv 9$.']
        ],
        ok: 'Right: $7^{50} \\equiv 1^{12} \\times 9 = 9 \\pmod{10}$, so the units digit is $9$.'
      }
    ],
    end: 'Done! The units digits of $7^n$ cycle as $7, 9, 3, 1$ (period $4$), and $50 = 4 \\times 12 + 2$, so $7^{50}$ ends in $9$.'
  },

  t4: {
    title: 'Solve $3x \\equiv 7 \\pmod{11}$ for $x \\in \\{0, 1, \\ldots, 10\\}$ using an inverse (Theorem 4 & Technique 1).',
    steps: [
      {
        q: 'Before searching for a multiplicative inverse of $3$ modulo $11$, apply Theorem 4. Why does $3$ have an inverse mod $11$?',
        opts: [
          ['Because $\\text{HCF}(3, 11) = 1$ ($11$ is prime and $11 \\nmid 3$).', true],
          ['Because $3 \\lt 11$.', false, 'Being smaller than the modulus is not enough: for example $4 \\lt 10$, yet $4$ has no inverse mod $10$ because $\\text{HCF}(4, 10) = 2$.'],
          ['Because $3$ and $11$ are both odd.', false, '$3$ and $9$ are both odd, yet $3$ has no inverse mod $9$ because $\\text{HCF}(3, 9) = 3$.']
        ],
        ok: 'Theorem 4 guarantees an inverse whenever $\\text{HCF}(a, m) = 1$.'
      },
      {
        q: 'Scan $3 \\times k \\bmod 11$ for $k = 1, 2, 3, 4$ to find the multiplicative inverse of $3$ (so $3k \\equiv 1 \\pmod{11}$). Which $k$ works?',
        opts: [
          ['$k = 4$, because $3 \\times 4 = 12 \\equiv 1 \\pmod{11}$', true],
          ['$k = 8$, because $3 + 8 = 11 \\equiv 0 \\pmod{11}$', false, '$8$ is the additive inverse of $3$ mod $11$; we need the multiplicative inverse with $3k \\equiv 1$.'],
          ['$k = 3$, because $3 \\times 3 = 9$', false, '$9 \\not\\equiv 1 \\pmod{11}$; keep going one more step to $k = 4$.']
        ],
        ok: 'Found it: $4$ is the multiplicative inverse of $3$ modulo $11$.'
      },
      {
        q: 'Multiply both sides of $3x \\equiv 7 \\pmod{11}$ by the inverse $4$. What does the congruence become?',
        opts: [
          ['$x \\equiv 4 \\times 7 = 28 \\pmod{11}$', true],
          ['$x \\equiv 7 + 4 = 11 \\pmod{11}$', false, 'We are multiplying both sides by $4$, not adding $4$: $4 \\times 3x \\equiv 4 \\times 7$.'],
          ['$12x \\equiv 7 \\pmod{11}$', false, 'Multiply both sides by $4$, not just the left-hand side.']
        ],
        ok: 'Since $4 \\times 3 = 12 \\equiv 1 \\pmod{11}$, the $3$ cancels and leaves $x \\equiv 28 \\pmod{11}$.'
      },
      {
        q: 'Reduce $28$ modulo $11$ to get $x \\in \\{0, 1, \\ldots, 10\\}$. What is $x$?',
        opts: [
          ['$6$ (since $28 = 11 \\times 2 + 6$)', true],
          ['$8$ (since $28$ ends in $8$)', false, 'We are working modulo $11$, not modulo $10$: subtract $22 = 11 \\times 2$ from $28$ to get $6$.'],
          ['$7$ (since $28 = 4 \\times 7$)', false, 'Divide $28$ by the modulus $11$: $11 \\times 2 = 22$, leaving remainder $28 - 22 = 6$.']
        ],
        ok: 'So $x = 6$.'
      },
      {
        q: 'Check $x = 6$ in the original congruence $3x \\equiv 7 \\pmod{11}$. Does it match?',
        opts: [
          ['Yes: $3 \\times 6 = 18 = 11 \\times 1 + 7 \\equiv 7 \\pmod{11}$.', true],
          ['No: $3 \\times 6 = 18$, which is not equal to $7$.', false, 'In modulo $11$, $18$ and $7$ are in the same class because $18 - 7 = 11$.'],
          ['No: we also have to divide $6$ by $3$ to get $2$.', false, 'Multiplying by the inverse $4$ already undid the $3$; check $3 \\times 2 = 6 \\not\\equiv 7$.']
        ],
        ok: 'Check passed: $x = 6$ is the unique solution in $\\{0, 1, \\ldots, 10\\}$.'
      }
    ],
    end: 'Done! Because $\\text{HCF}(3, 11) = 1$, $3$ has inverse $4$ mod $11$; multiplying $3x \\equiv 7$ by $4$ gives $x \\equiv 28 \\equiv 6 \\pmod{11}$.'
  }
};
