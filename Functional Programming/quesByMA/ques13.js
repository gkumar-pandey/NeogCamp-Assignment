//? Given an array. Write a function to join all elements of the array with a hyphen in between them. (use reduce)
const arr = ["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange", "Red"];

const result = arr.reduce((acc, curr) => acc + "-" + curr);

// Your output should be: Violet-Indigo-Blue-Green-Yellow-Orange-Red
console.log(result);
