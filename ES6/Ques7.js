//? Q.Write a function that takes a number as input and determines if it is between 1 and 10.

const isBetweenOneAndTen = (num) => {
  return num >= 1 && num <= 10 ? true : false;
};

console.log(isBetweenOneAndTen(5));
console.log(isBetweenOneAndTen(11));
