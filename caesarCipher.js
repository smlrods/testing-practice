const lowerCaseC = (charCode, key) => (charCode - 97 + key) % 26 + 97;

const upperCaseC = (charCode, key) => (charCode - 65 + key) % 26 + 65;

export default function caesarCipher(string, key = 1) {
  let cipherText = '';
  const reLC = /[a-z]/;
  const reUC = /[A-Z]/;
  for (let i = 0; i < string.length; i++) {
    if (reLC.test(string.charAt(i))) {
      cipherText += String.fromCharCode(lowerCaseC(string.charCodeAt(i), key));
    } else if (reUC.test(string.charAt(i))) {
      cipherText += String.fromCharCode(upperCaseC(string.charCodeAt(i), key));
    } else {
      cipherText += string.charAt(i);
    }
  }
  return cipherText;
}
