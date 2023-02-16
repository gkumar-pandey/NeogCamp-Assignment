//? Q.Write a function that takes a string as input and determines if it is longer than 5 characters.

const checkLength = (str) => {
  if (str.length > 5) {
    return "More than 5 characters";
  } else {
    return "less than 5 characters";
  }
};

console.log(checkLength("Programming"));
console.log(checkLength("Jeep"));
