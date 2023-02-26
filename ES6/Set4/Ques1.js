//Write an ES6 function that accepts an array of integers and returns the maximum element in the array. Avoid using in-built methods.
// Your ES6 code here

const getMaxElement = (arr) => {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};
let array = [4, 78, 8, 3, 6, 0, 12, 34];
let arr2 = [67, 89, 90, 0, 7, 56, 43];
console.log(getMaxElement(array)); // 78
console.log(getMaxElement(arr2));
