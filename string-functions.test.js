import { capitalize, reverseString } from './string-functions.js';

const strings = ['sometext', 'javascript', 'github', 'JeSt', 'eSlint']
const stringsReverse = ['txetemos', 'tpircsavaj', 'buhtig', 'tSeJ', 'tnilSe'];

test('first character capitalized', () => {
  strings.forEach(element => {
    expect(capitalize(element)).toMatch(/^[A-Z][a-z]+$/);
  });
});

test('reverse string', () => {
  for(let i = 0; i < strings.length; i++) {
    expect(reverseString(strings[i])).toBe(stringsReverse[i]);
  }
});
