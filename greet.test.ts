import {greet, goodbye} from "./functions"

test('greet function', () => {
  expect(greet('Alice')).toBe('Hello, Alice!')
});

test('goodbye function', () => {
  expect(goodbye('Bob')).toBe('Goodbye, Bob!')
});
