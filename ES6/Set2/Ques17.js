//? Q.Write a function that takes an object car and returns true if the car is a sports car (i.e. has a horsepower property greater than or equal to 300)
const car1 = { make: "Porsche", model: "911", horsepower: 450 };
const car2 = { make: "Toyota", model: "Camry", horsepower: 200 };

// ans

const isSportsCar = (car) => {
  const { horsepower } = car;
  return horsepower >= 300 ? true : false;
};

console.log(isSportsCar(car1)); // true
console.log(isSportsCar(car2)); // false
