# The strict rule of this project 

## Technological Stack
- Pure JavaScript (Node.js ES Modules).
- Built-in `node:test` framework.
- No runtime dependencies.

## Workflow
- Execute `npm test` to validate logic.

## Implementation  
- Final output must be a valid `Number` rounded to the nearest integer. Absolutely no string outputs (avoid `toFixed()`).
- Invalid parameters (e.g., negative prices, non-integer or zero quantities) must strictly throw a `RangeError`.
- The core logic must remain completely self-contained without external libraries.

## Absolute Prohibitions 
- Never modify `package.json` to install third-party packages.
- Never loosen or delete test assertions just to achieve a green build.
- Never push code if `npm test` yields a failing result.