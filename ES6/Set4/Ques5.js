//?Write an ES6 function that takes an array of strings and returns a new array with each string capitalized.
// Your ES6 code here

const capitalizeWords = (arr) => {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr[i] = arr[i].toUpperCase();
  }
  return newArr;
};

console.log(capitalizeWords(["eat", "sleep", "code", "repeat"]));
// ["EAT", "SLEEP", "CODE", "REPEAT"]
