import React from "react";
import { useLocation } from "react-router-dom";

const ProductDetailCard = ({
  name,
  description,
  price,
  quantity,
  category,
  brand,
  id,
  removeFromCart,
  removeFromWishList
}) => {
  const location = useLocation();

  return (
    <div
      style={{
        maxWidth: "400px",
        border: "2px solid #eee",
        borderRadius: "5px",
        padding: "1rem",
        margin: "1rem"
      }}
    >
      <p>Name : {name}</p>
      <p>Description : {description}</p>
      <p>Quantity : {quantity}</p>
      <p>Category : {category}</p>
      <p>Brand : {brand}</p>
      <div>
        {location.pathname === "/cart" ? (
          <button onClick={() => removeFromCart(id)}>Remove From Cart</button>
        ) : (
          <>
            {location.pathname === "/wishlist" ? (
              <button onClick={() => removeFromWishList(id)}>
                Remove from wishlist
              </button>
            ) : (
              ""
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ProductDetailCard;
