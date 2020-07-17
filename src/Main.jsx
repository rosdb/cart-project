/* eslint-disable react/prop-types */
import React from 'react';
import Header from './Header';
import Details from './Details';
import List from './List';
import Cart from './Cart';
import './grid.css';

function Main(props) {
  const {
    products,
    addToCart,
    removeToCart,
    match,
    details,
    cart,
    cartItemCount,
    totalPrice,
    handleCart,
    cartView
  } = props;

  return (
    <div
      className={
        !!cartView ? 'container-grid container-grid--open' : 'container-grid'
      }
    >
      <Header
        title={details ? 'Product details' : 'Our Products'}
        cartItemCount={cartItemCount}
        handleCart={handleCart}
      />
      <div className="bg-gray-200 m-4 p-2 filters">
        <h3 className="text-center mb-4">Search Filters</h3>
      </div>
      {details ? (
        <Details match={match} details={details} />
      ) : (
        <List products={products} addToCart={addToCart} />
      )}
      <Cart
        cart={cart}
        removeToCart={removeToCart}
        totalPrice={totalPrice}
        cartView={cartView}
      />
      <div className="footer">
        <div className="bg-gray-800 text-white h-32">
          <h1 className="text-center">Footer</h1>
        </div>
      </div>
    </div>
  );
}

export default Main;
