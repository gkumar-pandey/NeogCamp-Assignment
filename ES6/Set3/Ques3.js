//? Q.Write a function findPerson that takes an array of person objects and a name as parameters and returns the object with the matching name, or null if not found.

// Your ES6 code here

const findPerson = (arr, name) => {
  let ans;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].name == name) {
      ans = arr[i];
      break;
    } else {
      ans = null;
    }
  }
  return ans;
};

console.log(
  findPerson(
    [
      { name: "Amay", age: 25 },
      { name: "Akhil", age: 25 }
    ],
    "Akhil"
  )
);
