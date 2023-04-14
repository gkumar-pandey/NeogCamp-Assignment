//? Given an array of strings, write a function that returns an array of objects representing each unique string and its frequency in the original array.
const strings = ["apple", "banana", "apple", "cherry", "cherry", "cherry"];

const getUniqueValue = (strings) =>
  strings.reduce(
    (acc, curr) =>
      acc[curr] ? { ...acc, [curr]: acc[curr] + 1 } : { ...acc, [curr]: 1 },
    {}
  );

console.log(getUniqueValue(strings));
