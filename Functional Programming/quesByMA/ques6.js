//?  Given an array of strings, write a function that returns the total number of characters in all the strings that start with the letter "A"
const strings = ["Apple", "Aardvark", "Banana", "Cat"];

const countLetterA = (strings) =>
  strings.reduce((acc, curr) => {
    return curr[0] == "a" || curr[0] == "A" ? acc + curr.length : acc;
  }, 0);

console.log(countLetterA(strings));
