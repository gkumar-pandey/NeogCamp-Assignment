//?Write an ES6 function that takes an array of numbers and returns the sum of all the even numbers in the array using the reduce function.

const numbers = [12, 23, 4, 2, 11, 21];
// Your code here

const sumOfEvenNumbers = (numbers) =>
  numbers.reduce(
    (acc, currValue) => (currValue % 2 == 0 ? acc + currValue : acc + 0),
    0
  );

console.log(sumOfEvenNumbers(numbers));
// Output: 18
