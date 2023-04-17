import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import fakeFetch from "../DB/api";
import ProductCard from "../Components/ProductCard";
import { useProductList } from "../Context/Product-list-context";

const ProductsListPage = () => {
  const { productList, setProductList } = useProductList();

  const fetchProducts = async () => {
    const url = "https://example.com/api/products";
    try {
      const res = await fakeFetch(url);
      if (res.status === 200) {
        setProductList(res.data.products);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h2>Product Listing Page</h2>
        <Navbar />
      </div>
      <div
        style={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        {productList.length === 0 ? (
          <div>Loading...</div>
        ) : (
          productList.map((product) => {
            return <ProductCard key={product.id} {...product} />;
          })
        )}
      </div>
    </div>
  );
};

export default ProductsListPage;
