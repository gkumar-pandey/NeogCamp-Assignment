//? Given an array of numbers, use the reduce function to find the maximum number in the array
const num = [1, 5, 3, 8, 2];

const findMax = (numbers) =>
  numbers.reduce((acc, curr) => (acc > curr ? acc : curr));

console.log(findMax(num));
