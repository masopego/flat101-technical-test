import React from "react";
import PropTypes from "prop-types";

function ProductElement({ name, price, color }) {
  return (
    <li className="product__list--element" style={{ backgroundColor: color }}>
      {name}
      {price}
    </li>
  );
}

ProductElement.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

export default ProductElement;
