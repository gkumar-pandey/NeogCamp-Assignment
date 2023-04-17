import React from "react";
import { useWishlist } from "../Context/Wish-list-context";
import ProductDetailCard from "../Components/ProductDetailCard";
import Container from "../Components/Container";

const WishListPage = () => {
  const { wishlist, removeFromWishList } = useWishlist();
  return (
    <Container>
      <h1>My Wishlist</h1>
      <h2>Items : {wishlist.length}</h2>
      {wishlist.map((product) => (
        <ProductDetailCard
          {...product}
          removeFromWishList={removeFromWishList}
        />
      ))}
    </Container>
  );
};

export default WishListPage;
