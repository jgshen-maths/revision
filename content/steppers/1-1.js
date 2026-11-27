window.HZ_STEPPERS = {
  t1: {
    title: 'Is $M = \\{3, 6, 9, 12, \\ldots\\}$ (positive multiples of $3$) closed under $+$ and under $-$?',
    steps: [
      {
        q: 'What does it mean for $M = \\{3, 6, 9, 12, \\ldots\\}$ to be closed under addition?',
        opts: [
          ['Adding any two members of $M$ always gives a member of $M$', true],
          ['Adding two members of $M$ sometimes gives a member of $M$', false, 'Closure must hold for every pair, not just sometimes.'],
          ['$M$ contains the number $0$', false, 'Closure is about whether calculations stay inside the set, not about containing $0$.']
        ],
        ok: 'Right: every sum of two members of $M$ must stay inside $M$.'
      },
      {
        q: 'Test $M$ under addition: $6 + 9 = 15 \\in M$. Is $M$ closed under $+$?',
        opts: [
          ['Yes — any two positive multiples of $3$ add to $3a + 3b = 3(a+b) \\in M$', true],
          ['Yes — because $6 + 9 = 15$ is in $M$, so one example proves it', false, 'One example is not enough to prove closure: we need a reason that works for all pairs.'],
          ['No — $6 + 9 = 15$ is not a multiple of $3$', false, '$15 = 3\\times5$, so $15$ is in $M$.']
        ],
        ok: 'Yes! $3a + 3b = 3(a+b)$ is always a positive multiple of $3$, so $M$ is closed under $+$.'
      },
      {
        q: 'Now test $M$ under subtraction. To prove a set is NOT closed, how many counterexamples do we need?',
        opts: [
          ['Just one counterexample', true],
          ['Every possible pair', false, 'You only need one pair that escapes the set to disprove closure.'],
          ['At least three counterexamples', false, 'A single counterexample is enough to break "always stays inside".']
        ],
        ok: 'One counterexample is enough to show a set is not closed.'
      },
      {
        q: 'Which calculation using members of $M = \\{3, 6, 9, 12, \\ldots\\}$ is a counterexample showing $M$ is NOT closed under $-$?',
        opts: [
          ['$6 - 9 = -3$ ($-3$ is not positive, so $-3 \\notin M$)', true],
          ['$9 - 6 = 3$', false, '$3$ is still in $M$, so that pair stayed inside the set.'],
          ['$6 + 9 = 15$', false, 'That is addition, not subtraction (and $15$ is in $M$).']
        ],
        ok: '$6 \\in M$ and $9 \\in M$, but $6 - 9 = -3 \\notin M$: the answer escaped!'
      },
      {
        q: 'What is our final verdict on $M = \\{3, 6, 9, 12, \\ldots\\}$?',
        opts: [
          ['Closed under $+$, but not closed under $-$', true],
          ['Closed under both $+$ and $-$', false, 'We found the counterexample $6 - 9 = -3 \\notin M$, so $-$ is not closed.'],
          ['Not closed under either $+$ or $-$', false, 'Adding two positive multiples of $3$ always stays in $M$, so $+$ is closed.']
        ],
        ok: '$M$ is closed under $+$, and not closed under $-$ (just like $\\mathbb{Z}^+$).'
      }
    ],
    end: 'Done! <b>Method:</b> to prove a set is closed, give a reason that works for every pair; to show it is not closed, find just one counterexample that escapes the set.'
  },

  t2: {
    title: 'Draw $-4 \\le x \\lt 2$ on the number line and list its integer solutions.',
    steps: [
      {
        q: 'Look at the left end: $-4 \\le x$. Is $-4$ included, and which circle goes at $-4$?',
        opts: [
          ['Included — closed circle &#9679; at $-4$', true],
          ['Not included — open circle &#9675; at $-4$', false, 'The sign $\\le$ means "less than or equal to", so $-4$ is included (closed circle).'],
          ['No circle at $-4$', false, 'Every boundary number gets a circle showing whether it is included.']
        ],
        ok: '$-4 \\le x$ includes $-4$, so place a closed circle &#9679; at $-4$.'
      },
      {
        q: 'Look at the right end: $x \\lt 2$. Is $2$ included, and which circle goes at $2$?',
        opts: [
          ['Not included — open circle &#9675; at $2$', true],
          ['Included — closed circle &#9679; at $2$', false, 'The sign $\\lt$ is strict ("less than"), so $2$ is not included (open circle).'],
          ['Closed circle &#9679; at $1$', false, 'Place the open circle at the boundary $2$ itself, not at $1$.']
        ],
        ok: '$x \\lt 2$ is strict, so place an open circle &#9675; at $2$.'
      },
      {
        q: 'Which part of the number line should be shaded for $-4 \\le x \\lt 2$?',
        opts: [
          ['Between $-4$ and $2$', true],
          ['To the left of $-4$', false, 'Numbers left of $-4$ are smaller than $-4$, breaking $-4 \\le x$.'],
          ['To the right of $2$', false, 'Numbers right of $2$ are bigger than $2$, breaking $x \\lt 2$.']
        ],
        ok: 'Shade the segment between $-4$ and $2$.'
      },
      {
        q: 'List all integers in $\\{x : x \\in \\mathbb{Z},\\ -4 \\le x \\lt 2\\}$.',
        opts: [
          ['$\\{-4, -3, -2, -1, 0, 1\\}$', true],
          ['$\\{-4, -3, -2, -1, 0, 1, 2\\}$', false, '$x \\lt 2$ is strict, so $2$ is not included.'],
          ['$\\{-3, -2, -1, 0, 1\\}$', false, '$-4 \\le x$ includes $-4$, so start at $-4$.']
        ],
        ok: 'The integer solutions are $-4, -3, -2, -1, 0, 1$.'
      },
      {
        q: 'How many integers satisfy $-4 \\le x \\lt 2$?',
        opts: [
          ['$6$', true],
          ['$5$', false, 'Count every member of $\\{-4, -3, -2, -1, 0, 1\\}$: do not forget $0$!'],
          ['$7$', false, '$2$ is excluded, so there are $6$ integers, not $7$.']
        ],
        ok: 'There are $6$ integers: four negatives, $0$, and $1$.'
      }
    ],
    end: 'Done! <b>Method:</b> use a closed circle &#9679; for $\\le$ or $\\ge$ (included) and an open circle &#9675; for $\\lt$ or $\\gt$ (not included), shade where $x$ lies, and list integers carefully including $0$.'
  },

  t3: {
    title: 'Calculate cleverly: $34 - 27 + 66 - 13 + 27$.',
    steps: [
      {
        q: 'First glue each sign to the number after it (using $a - b = a + (-b)$). What are the five signed terms?',
        opts: [
          ['$+34,\\ -27,\\ +66,\\ -13,\\ +27$', true],
          ['$+34,\\ +27,\\ +66,\\ +13,\\ +27$', false, 'Each minus sign stays glued to the number directly after it ($-27$ and $-13$).'],
          ['$+34,\\ -27,\\ -66,\\ -13,\\ +27$', false, 'The sign in front of $66$ is $+$, so it is $+66$.']
        ],
        ok: 'Every term is now a signed number being added: $+34, -27, +66, -13, +27$.'
      },
      {
        q: 'We re-order and group the terms as $(34 + 66) + (-27 + 27) + (-13)$. Which rules allow this?',
        opts: [
          ['Commutativity (order) and associativity (grouping)', true],
          ['Identity only', false, 'Identity is $a + 0 = a$; swapping order is commutativity and moving brackets is associativity.'],
          ['Subtraction is commutative', false, 'Subtraction is not commutative — that is why we glued the signs on first so every step is addition.']
        ],
        ok: 'Commutativity lets us swap order and associativity lets us group handy pairs.'
      },
      {
        q: 'Look at the pair $(-27 + 27)$. What does it equal, and why?',
        opts: [
          ['$0$ — opposites (inverses) cancel', true],
          ['$54$', false, '$-27$ and $+27$ have opposite signs, so they cancel to $0$.'],
          ['$-54$', false, 'Adding a number and its opposite always gives the identity $0$.']
        ],
        ok: '$-27 + 27 = 0$ (opposites cancel).'
      },
      {
        q: 'Now compute the tidy pair $34 + 66$.',
        opts: [
          ['$100$', true],
          ['$90$', false, '$30 + 60 = 90$ and $4 + 6 = 10$, so $90 + 10 = 100$.'],
          ['$110$', false, 'Check: $34 + 66 = 100$, not $110$.']
        ],
        ok: '$34 + 66 = 100$.'
      },
      {
        q: 'Put the pieces together: $100 + 0 + (-13)$.',
        opts: [
          ['$87$', true],
          ['$113$', false, 'The $13$ has a minus sign glued to it: $100 - 13 = 87$.'],
          ['$77$', false, 'Check the subtraction: $87 + 13 = 100$.']
        ],
        ok: '$100 + 0 - 13 = 87$ (check left to right: $34-27=7$, $+66=73$, $-13=60$, $+27=87$).'
      }
    ],
    end: 'Done! <b>Method:</b> glue each sign to the number after it, then use commutativity and associativity to pair opposites (making $0$) and tidy sums (like $100$).'
  }
};
