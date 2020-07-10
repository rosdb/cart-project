import React, { useState, useLayoutEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useFetchedData, products$ } from "./utils";
import store from "./store";
import ProductList from "./ProductsList";
import Details from "./Details";
import Cart from "./Cart";

function App() {
  let [state, setState] = useState(store.initialState);

  const { products, cart } = state;
  const { setProducts, addToCart } = store;

  useLayoutEffect(() => {
    store.subscribe(setState);
    store.init();
  }, []);

  useFetchedData(products$, setProducts);

  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <ProductList products={products} addToCart={(p) => addToCart(p)} />
          )}
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
        <Route exact path="/cart" render={() => <Cart cart={cart} />} />
      </Switch>
    </Router>
  );
}

export default App;
