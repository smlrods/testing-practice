export function capitalize(string) {
  const array = string.split('');
  const result = [array[0].toUpperCase()];
  array.forEach((element, index) => {
    if (index) return;
    result.push(element.toLowerCase());
  });
  return result.join('');
}

export function reverseString(string) {
  return string.split('').reverse().join('');
}
