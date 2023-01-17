import { capitalize } from './string-functions.js';

test('first character capitalized', () => {
  const strings = ['sometext', 'javascript', 'github', 'JeSt', 'eSlint']
  strings.forEach(element => {
    expect(capitalize(element)).toMatch(/^[A-Z][a-z]+$/);
  });
});
