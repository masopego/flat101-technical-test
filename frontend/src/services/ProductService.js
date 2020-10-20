const ENDPOINT = "http://localhost:8000/api/products";

const getProducts = () => {
  return fetch(ENDPOINT).then((response) => response.json());
};

const postProduct = (name, price) => {
  return fetch(ENDPOINT, {
    method: "POST",
    body: JSON.stringify({ name, price }),
    headers: {
      "content-type": "application/json",
    },
  }).then((response) => response.json());
};

export { getProducts, postProduct };
