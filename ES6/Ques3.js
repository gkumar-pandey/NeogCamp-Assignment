//!Q.Write a function that takes a number as input and determines if it is positive or negative.
const readline = require("readline-sync");

const num = readline.question("Enter number : ");

const checkNum = (num) => {
  if (num > 0) {
    return "Positive Number";
  } else if (num < 0) {
    return "Negative Number";
  } else {
    return "Zero ";
  }
};

console.log(checkNum(num));
