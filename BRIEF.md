# The brief of cartTotal Function

## 1. Objective & Scope
- **Mission:** Develop the `cartTotal` function inside `src/cart.js` and cover it with unit tests in `test/cart.test.js`.
- **Rule:** Strictly vanilla JavaScript. External libraries or dependencies of any kind are completely prohibited.

## 2. Logic
The function signature is `cartTotal(items, options)`.
- `items`: An array containing objects structured as `{ name, price, qty }`.
- `options`: An object holding `{ vatRate, freeShipFrom, shipFee }`.

**Calculation Steps:**
1. Compute the base sum (subtotal) by multiplying `price` by `qty` for each item in the cart.
2. Compute the VAT amount by multiplying the subtotal by `vatRate`.
3. Determine the shipping cost: If the subtotal reaches or exceeds the `freeShipFrom` threshold, shipping becomes `0`. Otherwise, apply the `shipFee`.
4. **Final Return:** The function must return a primitive `Number` representing the total (subtotal + VAT + shipping), mathematically rounded to the closest integer. Do not return strings.

## 3. Exception Handling
- **Empty Cart:** Immediately return `0` (no taxes, no shipping).
- **Invalid Inputs:** Throw a standard `RangeError` if any item has a negative `price`, or if the `qty` is zero, negative, or a decimal (must be a positive integer).

## 4. Test Cases to Cover
Ensure the test suite explicitly asserts the following scenarios:
- **Mandatory Slide Example:** 2 items at 180,000 and 1 item at 45,000. With 8% VAT and a 30,000 shipping fee (threshold 500,000). Expected total: `467400`.
- **Threshold Scenario:** Subtotal exactly equal to or greater than `freeShipFrom` to verify the zero shipping logic.
- **Empty State:** `items` array is empty.
- **Error States:** Explicitly test negative prices and floating-point/zero quantities throwing `RangeError`.