import React, { useEffect, useState } from "react";
import fakeFetch from "../../Apis/productsApi";
import ProductCard from "./Components/ProductCard";

const Q1 = () => {
  const [productData, setProductData] = useState([]);
  const [product, setProduct] = useState("");

  const fetchData = async () => {
    const url = "https://example.com/api/products";
    try {
      const { status, data } = await fakeFetch(url);
      if (status === 200) {
        setProductData(data.products);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const showProductHandler = (e) => {
    const findProductName = e.target.value;
    const productFromList = productData.find(
      ({ name }) => name === findProductName
    );
    setProduct(productFromList);
  };

  return (
    <div>
      {productData.length > 0 ? (
        <div>
          {productData.map(({ name }, idx) => (
            <button
              key={idx}
              value={name}
              style={coustemStyles.btnStyle}
              onClick={showProductHandler}
            >{`show ${name}`}</button>
          ))}
        </div>
      ) : (
        <div>
          <h2>Loading....</h2>
        </div>
      )}
      <div>{product && <ProductCard {...product} />}</div>
    </div>
  );
};

export default Q1;

const coustemStyles = {
  btnStyle: {
    padding: "6px 3px",
    margin: "5px 10px"
  }
};
