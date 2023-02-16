//? Q.Write a function that takes a string as input and determines if it contains the word "hello".

const isHelloPresent = (str) => {
  return str.toLowerCase().includes("hello") ? true : false;
};

console.log(isHelloPresent("Hello world"));
console.log(isHelloPresent("world"));
