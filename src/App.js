import React, {useState, useLayoutEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {useFetchedData, products$} from './utils';
import store from './store';
import Main from './Main';

function App() {
  let [state, setState] = useState(store.initialState);

  const {products, cart} = state;
  const {setProducts, addToCart} = store;

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
            <Main
              products={products}
              addToCart={p => addToCart(p)}
              cart={cart}
            />
          )}
        />
        <Route
          path="/product/:id"
          render={({match}) => {
            if (products.length > 0) {
              const details = products.filter(
                product => product.id.toString() === match.params.id
              );
              return (
                <Main
                  match={match}
                  details={details}
                  addToCart={p => addToCart(p)}
                  cart={cart}
                />
              );
            } else {
              return <p className="text-center m-16">Loading...</p>;
            }
          }}
        />
      </Switch>
    </Router>
  );
}

export default App;
