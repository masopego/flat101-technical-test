const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
app.use(bodyParser.json());

let products = [
  { name: "Manzanas", price: 2.6 },
  { name: "Higos", price: 5 },
  { name: "Chirimoyo", price: 4.9 },
  { name: "Peras", price: 1.48 },
  { name: "Fresas", price: 3.17 },
  { name: "Albaricoque", price: 4.3 },
];

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.post("/api/products", (req, res) => {
  const name = req.body.name;
  const price = parseFloat(req.body.price);

  if (!name || !price) {
    return res.status(400).json({ invalid: true });
  }

  const product = { name, price };

  products.push(product);

  return res.json(product);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
