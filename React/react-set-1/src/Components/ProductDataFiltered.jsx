import React from "react";

const ProductDataFiltered = ({ products }) => {
  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products
          .filter(({ quantity, sales }) => sales > quantity)
          .map(({ name, quantity, sales }, idx) => (
            <li key={idx}>
              Name:{name},Quantity:{quantity},Sales:{sales}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ProductDataFiltered;
