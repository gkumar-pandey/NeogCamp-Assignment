//? Q. Console individual values of the product object using object destructuring.

const product = {
  title: "iPhone",
  price: 5999,
  description: "The iPhone is a smartphone developed by Apple"
};

//! Ans part

const { title, price, description } = product;

console.log(title);
console.log(price);
console.log(description);
