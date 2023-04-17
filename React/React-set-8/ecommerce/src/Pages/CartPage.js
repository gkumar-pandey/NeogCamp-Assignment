import React from "react";
import { useCart } from "../Context/Cart-context";
import ProductDetailCard from "../Components/ProductDetailCard";
import Container from "../Components/Container";

const CartPage = () => {
  const { cart, removeFromCart } = useCart();
  return (
    <Container>
      <h1>My Cart</h1>
      <h3>Items : {cart.length}</h3>
      <div>
        {cart.map((item) => (
          <ProductDetailCard {...item} removeFromCart={removeFromCart} />
        ))}
      </div>
    </Container>
  );
};

export default CartPage;
