//! QWrite a function that takes two numbers as input and determines which one is greater.

const readline = require("readline-sync");

const num1 = readline.question("Enter first number.");
const num2 = readline.question("Enter second number.");

const isGreater = (num1, num2) => {
  if (num1 > num2) {
    return `${num1} is greater than ${num2}`;
  } else if (num1 < num2) {
    return `${num2} is greater than ${num1}`;
  } else {
    return `${num1} and ${num2} are equal`;
  }
};

console.log(isGreater(num1, num2));
