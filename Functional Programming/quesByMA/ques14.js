//? Given an array. Write a function that will return an array by adding role property in an existing object , For ex: if the person has marks then you need to add role as key and student as value into it, otherwise, role will be key and the value will be an employee
const arr = [
  { name: "sohail", marks: 10 },
  { name: "tarun" },
  { name: "dhruv", marks: 50 },
  { name: "subhash" },
  { name: "dharmin", marks: 20 }
];

const result = arr.map((item) => {
  if (item["marks"]) {
    return { ...item, role: "student" };
  } else {
    return { ...item, role: "employee" };
  }
});
//  your output should be:
console.log(result);
