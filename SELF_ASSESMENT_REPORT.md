# IA#1
***Submitted by:*** 24127207 - Nguyễn Thục Nghi

Total I claim: 100/100

| Criterion | Max | I claim | Evidence |
|---|---|---|---|
| Behaviour | 30 | 30 | `npm test` green; empty cart returns 0, `qty: 1.5` throws RangeError, `price: -50000` throws RangeError. See `src/cart.js`. |
| Tests | 20 | 20 | 5 tests in `test/cart.test.js` covering happy path, threshold, empty cart, and both RangeError cases. |
| Harness | 20 | 20 | `AGENTS_RULE.md` rules file created with "never add dependencies" and strict gate. |
| Brief | 15 | 15 | `BRIEF.md` file defines contract, files to touch, error states, and strict "no dependencies" rule. |
| AI-LOG.md | 15 | 15 | Written immediately after generation. Detailed the tool, task, and keeping `Math.round()` over `toFixed()`. |

## What I did not manage
All specifications from the session 2 slides were successfully implemented.

## What I would do differently
Log the AI-LOG.md entries concurrently with each prompt iteration rather than at the end of the session.