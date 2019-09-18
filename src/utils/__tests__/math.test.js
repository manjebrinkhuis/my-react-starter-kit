import { add } from "../math"

test('add', () => {
  expect(add(3,5)).toBe(8)
  expect(add(1,6)).toBe(7)
})
