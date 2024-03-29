//?Write an ES6 function that takes an array of objects with the properties name, age and city, and returns an array with only the objects that have a city property of "Indore" and age greater than 70.
// Your ES6 code here

const people = [
  { name: "Ridhima", age: 75, city: "Indore" },
  { name: "Akshay", age: 60, city: "Delhi" },
  { name: "Udit", age: 80, city: "Indore" },
  { name: "Venki", age: 80, city: "Bangalore" }
];

const filterByCityAndAge = (arr) => {
  return arr.filter(({ age, city }) => {
    return age > 70 && city.toLowerCase() == "indore";
  });
};

const filteredPeople = filterByCityAndAge(people);
console.log(filteredPeople);
// Output: [{ name: 'Ridhima', age: 75, city: 'Indore' }, { name: 'Udit', age: 80, city: 'Indore' }]
