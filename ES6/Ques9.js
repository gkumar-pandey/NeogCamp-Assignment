//? Q.Write a function that takes a number as input and determines if it is a multiple of 3.

const isMultipleOfThree = (num) => {
  return num % 3 == 0 ? true : false;
};

console.log(isMultipleOfThree(5));
console.log(isMultipleOfThree(9));
