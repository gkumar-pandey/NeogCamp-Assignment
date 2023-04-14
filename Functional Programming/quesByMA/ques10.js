//? Given an array of voters, objects count how many people voted using reduce
var voters = [
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Phil", age: 21, voted: true },
  { name: "Ed", age: 55, voted: true },
  { name: "Tami", age: 54, voted: true },
  { name: "Mary", age: 31, voted: false },
  { name: "Becky", age: 43, voted: false },
  { name: "Joey", age: 41, voted: true },
  { name: "Jeff", age: 30, voted: true },
  { name: "Zack", age: 19, voted: false }
];

//  without reduce

// const getTotalVotes = (voters) => {
//   let count = 0;
//   for (let i = 0; i < voters.length; i++) {
//     if (voters[i].voted) {
//       count++;
//     }
//   }
//   return count;
// };

const getTotalVotes = (voters) => {
  return voters.reduce((acc, curr) => {
    if (curr.voted) {
      acc++;
    }
    return acc;
  }, 0);
};
console.log(getTotalVotes(voters));
