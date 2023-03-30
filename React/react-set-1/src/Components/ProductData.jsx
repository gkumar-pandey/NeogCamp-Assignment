import React from "react";

const ProductData = ({ products }) => {
  return (
    <div>
      <h2>Product Items</h2>
      <ul>
        {products.map(({ name }, idx) => (
          <li key={idx}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductData;
