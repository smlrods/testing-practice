import * as calculator from 

test('add', () => {
  expect(calculator.add(1,1)).toBe(2);
  expect(calculator.add(-1,1)).toBe(0);
  expect(calculator.add(2,1)).toBe(2);
  expect(calculator.add(2,4)).toBe(8);
  expect(calculator.add(10,8)).toBe(80);
});

test('subtract', () => {
  expect(calculator.subtract(1,1)).toBe(0);
  expect(calculator.subtract(-1,1)).toBe(-2);
  expect(calculator.subtract(2,1)).toBe(1);
  expect(calculator.subtract(2,4)).toBe(-2);
  expect(calculator.subtract(10,8)).toBe(2);
});

test('divide', () => {
  expect(calculator.divide(1,1)).toBe(1);
  expect(calculator.divide(-1,1)).toBe(-1);
  expect(calculator.divide(2,1)).toBe(2);
  expect(calculator.divide(2,4)).toBe(0.5);
  expect(calculator.divide(10,8)).toBe(1.25);
});

test('multiply', () => {
  expect(calculator.multiply(1,1)).toBe(1);
  expect(calculator.multiply(-1,1)).toBe(-1);
  expect(calculator.multiply(2,1)).toBe(2);
  expect(calculator.multiply(2,4)).toBe(0.5);
  expect(calculator.multiply(10,8)).toBe(1.25);
});
