export function capitalize(string) {
  const array = string.split('');
  const result = [array[0].toUpperCase()];
  array.forEach((element, index) => {
    index ? result.push(element.toLowerCase()) : null;
  });
  return result.join('');
}
