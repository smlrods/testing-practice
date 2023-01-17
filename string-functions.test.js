test('first character capitalized', () => {
  expect('Some').toMatch(/^[A-Z][a-z]+$/);
});
