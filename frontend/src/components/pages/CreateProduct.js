import React, { useState } from "react";
import { postProduct } from "../../services/ProductService";

function CreateProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const resetForm = () => {
    setName("");
    setPrice("");
  };
  const handleSubmit = (ev) => {
    ev.preventDefault();
    postProduct(name, price)
      .then((resp) => {
        alert("Producto añadido con éxito");
        resetForm();
      })
      .catch((error) => {
        alert("Ha habido un error. Revisa los datos introducidos");
      });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          placeholder="Plátano"
          required
          onChange={(ev) => setName(ev.target.value)}
        />
        <input
          type="number"
          name="price"
          placeholder="3,75"
          value={price}
          required
          onChange={(ev) => setPrice(parseFloat(ev.target.value))}
        />
        <input type="submit" />
      </form>
      <p>Producto</p>
    </>
  );
}
export default CreateProduct;
