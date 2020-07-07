import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductList from "./ProductsList";
import Details from "./Details";
import Cart from "./Cart";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <ProductList />} />
        <Route path="/product/:id" render={() => <Details />} />
        <Route exact path="/cart" render={() => <Cart />} />
      </Switch>
    </Router>
  );
}

export default App;
