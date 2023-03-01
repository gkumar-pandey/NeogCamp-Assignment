//?Write an ES6 function that takes an array of strings and returns an array with all the strings capitalised using the map method

// Your ES6 function here

const capitaliseString = (str) => str.toUpperCase();

const capitalizeArray = (arr) => arr.map(capitaliseString);

const myArray = ["apple", "banana", "cherry"];
console.log(capitalizeArray(myArray));
// Output: ["APPLE", "BANANA", "CHERRY"]
