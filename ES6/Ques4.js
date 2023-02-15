//!Q.Write a function that takes a number as input and determines if it is even or odd.
const readline = require("readline-sync");

const num = readline.question("Enter number : ");

const isEvenOdd = (num) => {
  if (num % 2 == 0) {
    return "Even Number";
  } else {
    return "Odd Number";
  }
};

console.log(isEvenOdd(num));
