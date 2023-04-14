//? Given an array of numbers, write a function that returns the sum of all the even numbers.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const sumOfEvenNumbers = (numbers) =>
  numbers.reduce((acc, curr) => {
    return curr % 2 == 0 ? acc + curr : acc;
  }, 0);

console.log(sumOfEvenNumbers(numbers));
