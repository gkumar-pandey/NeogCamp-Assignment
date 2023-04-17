import { createContext, useContext, useState } from "react";

export const cartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const isProductAvailable = cart.find((product) => product.id === item.id);

    if (isProductAvailable) {
      alert("Product already in Cart");
      return;
    }
    setCart((pre) => [...pre, item]);
  };

  const removeFromCart = (productId) => {
    const products = cart.filter(({ id }) => id !== productId);
    setCart(products);
  };

  return (
    <cartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </cartContext.Provider>
  );
};

export const useCart = () => useContext(cartContext);
