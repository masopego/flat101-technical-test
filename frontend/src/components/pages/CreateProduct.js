import React, { useState } from "react";
import { postProduct } from "../../services/ProductService";
import { TwitterPicker } from "react-color";

import "./_create_product.scss";

const DEFAULT_COLOR = "#FCB900";

function CreateProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [color, setColor] = useState(DEFAULT_COLOR);

  const resetForm = () => {
    setName("");
    setPrice("");
    setColor(DEFAULT_COLOR);
  };
  const handleSubmit = (ev) => {
    ev.preventDefault();
    postProduct(name, price, color)
      .then((resp) => {
        alert("Producto añadido con éxito");
        resetForm();
      })
      .catch((error) => {
        alert("Ha habido un error. Revisa los datos introducidos");
      });
  };
  return (
    <div className="create_product_page">
      <div className="wrapper" style={{ backgroundColor: color }}>
        <form onSubmit={handleSubmit}>
          <label className="label">Choose your product name.</label>
          <input
            type="text"
            className="name__form"
            name="name"
            value={name}
            placeholder="Plátano"
            required
            onChange={(ev) => setName(ev.target.value)}
            autocomplete="off"
          />
          <label className="label">Choose your price.</label>

          <input
            type="number"
            className="price__form"
            name="price"
            placeholder="3,75"
            value={price}
            min="0"
            required
            autocomplete="off"
            onChange={(ev) => setPrice(parseFloat(ev.target.value))}
          />
          <label className="label color">Choose your color.</label>
          <TwitterPicker
            color={color}
            onChange={(color) => setColor(color.hex)}
          />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
}
export default CreateProduct;
