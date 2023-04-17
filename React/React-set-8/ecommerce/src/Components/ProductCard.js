import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../Context/Cart-context";
import { useWishlist } from "../Context/Wish-list-context";

const ProductCard = ({
  id,
  name,
  description,
  price,
  brand,
  quantity,
  category
}) => {
  const { addToCart } = useCart();
  const { addToWishList } = useWishlist();

  const styles = {
    container: {
      width: "300px",
      border: "1px solid #eee",
      padding: "0.5rem",
      margin: "1rem"
    },
    btn: {
      padding: "5px 8px",
      margin: "0.5rem"
    }
  };
  return (
    <div style={styles.container}>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Price : {price}</p>
      <Link to={`product/${id}`}>View Item</Link>
      <div>
        <button
          style={styles.btn}
          onClick={() =>
            addToCart({
              id,
              name,
              description,
              price,
              brand,
              quantity,
              category
            })
          }
        >
          Add to Cart
        </button>
        <button
          onClick={() =>
            addToWishList({
              id,
              name,
              description,
              price,
              brand,
              quantity,
              category
            })
          }
          style={styles.btn}
        >
          Add to Wishlist
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
