/* eslint-disable react/prop-types */
import React from 'react';
import Header from './Header';
import Details from './Details';
import List from './List';
import Cart from './Cart';
import './grid.css';

function Main({products, addToCart, match, details, cart}) {
  return (
    <div
      className={
        cart.length > 0
          ? 'container-grid container-grid--open'
          : 'container-grid'
      }
    >
      <Header title={details ? 'Product details' : 'Our Products'} />
      <div className="bg-gray-200 m-4 filters">Search Filters</div>
      {details ? (
        <Details match={match} details={details} />
      ) : (
        <List products={products} addToCart={addToCart} />
      )}
      <Cart cart={cart} />
      <div className="footer">
        <div className="bg-gray-800 text-white h-32">
          <h1 className="text-center">Footer</h1>
        </div>
      </div>
    </div>
  );
}

export default Main;
