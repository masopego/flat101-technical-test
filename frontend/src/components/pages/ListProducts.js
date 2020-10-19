import React, { useState, useEffect } from "react";
import { getProducts } from "../../services/ProductService";

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
      <li key={index} className="product__list--element">
        {element.name}
        {element.price}
      </li>
    ));
  };

  return (
    <>
      <ul>Lista {renderProducts()}</ul>
    </>
  );
}
export default ListProducts;
