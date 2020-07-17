import React, {useState, useLayoutEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {useFetchedData, products$} from './utils';
import store from './store';
import Main from './Main';

function App() {
  let [state, setState] = useState(store.initialState);

  const {products, cart, cartItemCount, totalPrice, cartView} = state;
  const {setProducts, addToCart, removeToCart, handleCart} = store;

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
              removeToCart={p => removeToCart(p)}
              cart={cart}
              cartItemCount={cartItemCount}
              totalPrice={totalPrice}
              handleCart={() => handleCart()}
              cartView={cartView}
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
                  removeToCart={p => removeToCart(p)}
                  cart={cart}
                  cartItemCount={cartItemCount}
                  totalPrice={totalPrice}
                  handleCart={() => handleCart()}
                  cartView={cartView}
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
