import React from "react";

const ProductCard = ({ name, price, desc, src }) => {
  return (
    <div>
      <img src={src} />
      <div>
        <p>
          <strong>Name : </strong> <span>{name}</span>
        </p>
        <p>
          <strong>Price : </strong> <span>Rs. {price}</span>
        </p>
        <p>
          <strong>Description: </strong> <span>{desc}</span>
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
