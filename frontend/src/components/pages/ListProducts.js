import React, { useState, useEffect } from "react";
import { getProducts } from "../../services/ProductService";
import ProductElement from "../organism/ProductElement";

function ListProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
      console.log(data);
    });
  }, []);

  const renderProducts = () => {
    return products.map((element, index) => (
      <ProductElement
        key={index}
        name={element.name}
        price={element.price}
        color={element.color}
      />
    ));
  };

  return (
    <>
      <ul>Lista {renderProducts()}</ul>
    </>
  );
}
export default ListProducts;
