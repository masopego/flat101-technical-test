import React from "react";
import { Route, Switch } from "react-router-dom";
import CreateProduct from "./pages/CreateProduct";
import ListProducts from "./pages/ListProducts";
import Footer from "./organism/Footer/Footer";
import Header from "./organism/Header/Header";
import "../stylesheets/core/_reset.scss";
import "../stylesheets/core/global.scss";

function App() {
  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={CreateProduct} />
          <Route path="/list-products" component={ListProducts} />
        </Switch>
      </main>
      <Footer />
    </>
  );
}

export default App;
