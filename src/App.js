import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useObservable, products$ } from "./utils";
import ProductList from "./ProductsList";
import Details from "./Details";
import Cart from "./Cart";

function App() {
  /* State */
  let [products, setProducts] = useState([]);

  /* API call */
  useObservable(products$, setProducts);

  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <ProductList products={products}/>} />
        <Route path="/product/:id" render={({match}) => <Details match={match} />} />
        <Route exact path="/cart" render={() => <Cart />} />
      </Switch>
    </Router>
  );
}

export default App;
