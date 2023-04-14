//? Given an array of objects representing people, use the reduce function to find the average age of all the people.
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
  { name: "Dave", age: 40 }
];

const averageAge = (people) => {
  let avgAge =
    people.reduce((acc, curr) => {
      return acc + curr.age;
    }, 0) / people.length;

  return avgAge;
};

console.log(averageAge(people));
