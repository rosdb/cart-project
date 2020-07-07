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
        <Route
          exact
          path="/"
          render={() => <ProductList products={products} />}
        />
        <Route
          path="/product/:id"
          render={({ match }) => {
            if (products.length > 0) {
              const details = products.filter(
                (product) => product.id.toString() === match.params.id
              );
              return <Details match={match} details={details} />;
            } else {
              return <p className="text-center m-16">Loading...</p>;
            }
          }}
        />
        <Route exact path="/cart" render={() => <Cart />} />
      </Switch>
    </Router>
  );
}

export default App;
