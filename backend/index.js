const express = require("express");
const app = express();
const port = 8000;
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.json());
app.use(cors());

let products = [
  { name: "Manzanas", price: 2.6, color: "#EB144C" },
  { name: "Higos", price: 5, color: "#00D084" },
  { name: "Chirimoyo", price: 4.9, color: "#00D084" },
  { name: "Peras", price: 1.48, color: "#00D084" },
  { name: "Fresas", price: 3.17, color: "#00D084" },
  { name: "Albaricoque", price: 4.3, color: "#FCB900" },
];

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.post("/api/products", (req, res) => {
  const name = req.body.name;
  const price = parseFloat(req.body.price);
  const color = req.body.color || "#FF0000";

  if (!name || !price) {
    return res.status(400).json({ invalid: true });
  }

  const product = { name, price, color };

  products.push(product);

  return res.json(product);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
