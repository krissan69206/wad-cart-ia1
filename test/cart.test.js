import { test } from 'node:test'
import assert from 'node:assert/strict'
import { cartTotal } from '../src/cart.js'

test('Mandatory Slide Example', () => {
  const items = [
    { name: 'Áo thun', price: 180000, qty: 2 },
    { name: 'Sổ tay', price: 45000, qty: 1 },
  ]
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  assert.equal(cartTotal(items, options), 467400)
})

test('Threshold Scenario: free shipping applied', () => {
  const items = [{ name: 'Giày', price: 500000, qty: 1 }]
  const options = { vatRate: 0.10, freeShipFrom: 500000, shipFee: 30000 }
  // subtotal: 500000, VAT: 50000, shipping: 0 => 550000
  assert.equal(cartTotal(items, options), 550000)
})

test('Empty State: returns 0 without errors', () => {
  const items = []
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  assert.equal(cartTotal(items, options), 0)
})

test('Error States: negative price throws RangeError', () => {
  const items = [{ name: 'Sản phẩm lỗi', price: -50000, qty: 1 }]
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  assert.throws(() => cartTotal(items, options), RangeError)
})

test('Error States: invalid quantities throw RangeError', () => {
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  
  // Zero quantity
  assert.throws(() => cartTotal([{ name: 'A', price: 10000, qty: 0 }], options), RangeError)
  
  // Negative quantity
  assert.throws(() => cartTotal([{ name: 'B', price: 10000, qty: -2 }], options), RangeError)
  
  // Floating-point quantity
  assert.throws(() => cartTotal([{ name: 'C', price: 10000, qty: 1.5 }], options), RangeError)
})