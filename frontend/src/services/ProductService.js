const ENDPOINT = "http://localhost:8000/api/products";

const getProducts = () => {
  return fetch(ENDPOINT)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    });
};

export { getProducts };
