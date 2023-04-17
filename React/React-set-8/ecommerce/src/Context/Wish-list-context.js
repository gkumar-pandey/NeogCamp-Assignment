import { createContext, useContext, useState } from "react";

const wishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishList] = useState([]);

  const addToWishList = (item) => {
    const isAvailable = wishlist.find((product) => product.id === item.id);
    if (isAvailable) {
      alert("Already in Wishlist");
      return;
    }
    setWishList((pre) => [...pre, item]);
  };

  const removeFromWishList = (productId) => {
    const products = wishlist.filter(({ id }) => productId !== id);
    setWishList(products);
  };

  return (
    <wishlistContext.Provider
      value={{ wishlist, addToWishList, removeFromWishList }}
    >
      {children}
    </wishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(wishlistContext);
