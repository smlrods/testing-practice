import caesarCipher from './caesarCipher.js';

test('Caesar Cipher (only letters)', () => {
  const plaintext = 'abCde fgz';
  expect(caesarCipher(plaintext)).toBe('bcDef gha');
});


test('Caesar Cipher (letters with punctuation)', () => {
  const plaintext = 'a.-bc_de$fgz';
  expect(caesarCipher(plaintext)).toBe('b.-cd_ef$gha');
});
