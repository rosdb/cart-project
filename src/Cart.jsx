/* eslint-disable react/prop-types */
import React from 'react';

function Cart({cart}) {
  return (
    <div
      className={
        cart.length > 0
          ? 'bg-gray-200 m-4 flex flex-col cart'
          : 'bg-gray-200 m-4 flex flex-col cart hidden'
      }
    >
      <h3 className="text-center">Cart</h3>
      {cart.map(item => (
        <div key={item.id} className="flex justify-between">
          <span key={`${item.id}-name`}>{item.name}</span>
          <span key={`${item.id}-price`}>{`$${item.price}`}</span>
        </div>
      ))}
      {cart.length > 0 ? <button className="self-end">Checkout</button> : null}
    </div>
  );
}

export default Cart;
