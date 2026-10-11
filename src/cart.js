// Implement cartTotal here. See README.md for the specification.
export function cartTotal(items, options) {
  // Empty Cart State
  if (!items || items.length === 0) {
    return 0;
  }

  let subtotal = 0;

  for (const item of items) {
    // Exception Handling: Negative price
    if (item.price < 0) {
      throw new RangeError('Price cannot be negative');
    }
    
    // Exception Handling: Quantity is zero, negative, or a decimal
    if (!Number.isInteger(item.qty) || item.qty <= 0) {
      throw new RangeError('Quantity must be a positive integer');
    }
    
    subtotal += item.price * item.qty;
  }

  // VAT and Shipping Calculation
  const vat = subtotal * options.vatRate;
  const shipping = subtotal >= options.freeShipFrom ? 0 : options.shipFee;

  // Final Return (must be a Number)
  return Math.round(subtotal + vat + shipping);
}