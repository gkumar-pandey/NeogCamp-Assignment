//? Given an array of strings, use the reduce function to convert it to snake case string
const string = ["hello", "world", "how", "are", "you"];

const joinString = (string) => {
  return string.reduce((acc, curr) => {
    return acc + "_" + curr;
  });
};

console.log(joinString(string));
