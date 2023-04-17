import React from "react";
import { useParams } from "react-router-dom";
import { useProductList } from "../Context/Product-list-context";
import ProductDetailCard from "../Components/ProductDetailCard";
import Container from "../Components/Container";

const ProductDetailPage = () => {
  const { ProductId } = useParams();
  const { productList } = useProductList();

  const product = productList.find(
    (product) => product.id === Number(ProductId)
  );

  return (
    <Container>
      <h2>About </h2>
      <ProductDetailCard {...product} />
    </Container>
  );
};

export default ProductDetailPage;
