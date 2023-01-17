const sum = (array) => {
  if (array.length === 1) return array[0];
  return array[0] + sum(array.slice(1));
};

const average = (array) => sum(array) / array.length;

const min = (array) => Math.min(...array);

const max = (array) => Math.max(...array);

export default function analyzeArray(array) {
  return {
    average: average(array),
    min: min(array),
    max: max(array),
    length: array.length,
  };
}
