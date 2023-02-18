//?Q.Write a function that takes an array and a number and returns the sum of first element and the last element.

const sumFirstAndLast = (arr) => {
  return arr[0] + arr[arr.length - 1];
};
console.log(sumFirstAndLast([1, 2, 3, 4, 8])); // 9
