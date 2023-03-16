//? Write an ES6 function that takes an array of strings and returns an object with the count of each string.
const fruits = [
  "apple",
  "banana",
  "banana",
  "cherry",
  "apple",
  "apple",
  "banana"
];
// Your code here

const countStrings = (strings) =>
  strings.reduce((acc, curr) => {
    return acc[curr]
      ? {
          ...acc,
          [curr]: acc[curr] + 1
        }
      : {
          ...acc,
          [curr]: 1
        };
  }, {});

console.log(countStrings(fruits));
// Output: { 'apple': 3, 'banana': 3, 'cherry': 1 }
