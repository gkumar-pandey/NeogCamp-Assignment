//! Q.Write a function that takes a string as input and determines if it contains the letter 'a' or ‘A’.

const checkForAlphabetA = (str) => {
  if (str.toLowerCase().includes("a")) {
    return "Includes a";
  } else {
    return "Does not include a";
  }
};

console.log(checkForAlphabetA("TAnAy"));
console.log(checkForAlphabetA("Jeep"));
console.log(checkForAlphabetA("Jane"));
