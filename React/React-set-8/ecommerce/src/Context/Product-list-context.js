import { useContext, createContext, useState } from "react";

export const productListContext = createContext();

export const ProductListProvider = ({ children }) => {
  const [productList, setProductList] = useState([]);
  return (
    <productListContext.Provider value={{ productList, setProductList }}>
      {children}
    </productListContext.Provider>
  );
};

export const useProductList = () => useContext(productListContext);
