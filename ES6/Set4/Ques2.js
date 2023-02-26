//Write an ES6 function that takes an array of numbers and returns the average of all the numbers. Avoid using in-built methods

// Your ES6 code here

const sumOfArr = (arr) => {
  let sum = 0;
  for (let i of arr) {
    sum += i;
  }
  return sum;
};
sumOfArr([2, 3, 4]);
const calculateAverage = (arr) => {
  let avg = sumOfArr(arr) / arr.length;
  return avg;
};
console.log(calculateAverage([1, 2, 3, 4, 5])); // 3
