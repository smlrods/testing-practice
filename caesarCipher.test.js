import { caesarCipher } from 'caesarCipher';

test('Caesar Cipher (only letters)', () => {
  const plaintext = 'abcdefgz';
  expect(caesarCipher(plaintext)).toBe('bcdefgha');
});


test('Caesar Cipher (letters with punctuation)', () => {
  const plaintext = 'a.-bc_de$fgz';
  expect(caesarCipher(plaintext)).toBe('bcdefgha');
});
