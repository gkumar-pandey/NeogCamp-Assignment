import React, { useEffect, useState } from "react";
import { fakeFetch } from "../api/productApi";

const ProductsList = () => {
  const [productData, setProductData] = useState([]);

  const fetchData = async () => {
    const url = "https://example.com/api/products";
    try {
      const res = await fakeFetch(url);
      if (res.status) {
        setProductData(res.data.products);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filterByQuantity = () => {
    const filteredProduct = productData.filter(({ quantity }) => quantity > 20);
    setProductData(filteredProduct);
  };

  const filterByPrice = () => {
    const filteredProduct = productData.filter(({ price }) => price < 100);
    setProductData(filteredProduct);
  };

  return (
    <div>
      <h1>Products</h1>
      <button onClick={filterByQuantity}>
        Show products with quantity more than 20
      </button>
      <button onClick={filterByPrice}>Filter by Price</button>
      <ul>
        {productData.map(({ name, price, quantity }, idx) => {
          return (
            <li key={idx}>
              {name}-Rs.{price}-Quantity:{quantity}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductsList;
