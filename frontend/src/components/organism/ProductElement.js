import React from "react";
import PropTypes from "prop-types";

function ProductElement({ name, price, color }) {
  return (
    <li className="product__list--element" style={{ backgroundColor: color }}>
      <div className="box"></div>
      <p>{name}</p>
      <span>{price}€</span>
    </li>
  );
}

ProductElement.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

export default ProductElement;
