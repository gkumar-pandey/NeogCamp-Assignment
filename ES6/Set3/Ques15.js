//?Q. Create a function which takes a product object and returns a sentence about the product using ES6 features.
// Your ES6 code here

const printProductDetails = (product) => {
  const {
    name,
    specification: { capacity, size }
  } = product;
  return `${name} which is of ${size}, has a capacity of ${capacity}`;
};

const product = {
  name: "Apple MacBook Air 2020",
  specification: {
    capacity: "256GB",
    size: "13.3 Inch"
  },
  price: 82900
};
console.log(printProductDetails(product)); // Apple MacBook Air 2020 which is of 13.3 Inch, has a capacity of 256GB.
