import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import CreateProduct from "./pages/CreateProduct";
import ListProducts from "./pages/ListProducts";
import "../App.css";

function App() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/list-products">List Products</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Switch>
          <Route exact path="/" component={CreateProduct} />
          <Route path="/list-products" component={ListProducts} />
        </Switch>
      </main>
    </>
  );
}

export default App;
