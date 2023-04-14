//? Given an array of numbers, write a function that returns the sum of all the  numbers at even indices.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const sumOfEvenIndices = (numbers) =>
  numbers.reduce((acc, curr, idx) => (idx % 2 == 0 ? acc + curr : acc));

console.log(sumOfEvenIndices(numbers));
