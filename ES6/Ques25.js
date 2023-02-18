//?Q.Write a function that takes an array and returns the last element in the array.

// without any inbuilt function

const lastElement = (arr) => {
  return arr[arr.length - 1];
};

console.log(lastElement([1, 2, 3, 4, 5]));
