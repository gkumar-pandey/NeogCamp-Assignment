//? Given an array of numbers, write a function that returns the sum of the cubes of all odd numbers in the array.
const numbers = [1, 2, 3, 4, 5];

const getSumOfCubes = (numbers) => {
  return numbers.reduce((acc, curr) => {
    return curr % 2 != 0 ? acc + Math.pow(curr, 3) : acc;
  }, 0);
};

console.log(getSumOfCubes(numbers));
