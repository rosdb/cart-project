/* eslint-disable react/prop-types */
import React from 'react';
import Header from './Header';

function Cart({cart}) {
  return (
    <>
      <Header title="Cart" />

      <h3 className="text-center">
        Products IDs:{' '}
        {cart.map(item => (
          <p key={item.id}>{item.id}</p>
        ))}
      </h3>
    </>
  );
}

export default Cart;
