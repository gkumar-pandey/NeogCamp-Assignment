//? Q.8. Convert the function getData, into an ES6 function with last amount of characters.

//? Hint: Destructuring;

// function getData(person) {
//   const name = person.name;
//   const address = person.address.city;
//   console.log(name); // John Doe
//   console.log(address); // New York
// }

const getData = (person) => {
  const {
    name,
    address: { city }
  } = person;
  console.log(name);
  console.log(city);
};

const person = {
  name: "John Doe",
  address: {
    city: "New York",
    state: "NY"
  }
};
getData(person);
