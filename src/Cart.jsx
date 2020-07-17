/* eslint-disable react/prop-types */
import React from 'react';
import {Link} from 'react-router-dom';

function Cart(props) {
  const {cart, removeToCart, totalPrice, cartView} = props;

  return (
    <div
      className={
        !!cartView
          ? 'bg-gray-200 m-4 flex flex-col cart p-2'
          : 'bg-gray-200 m-4 flex flex-col cart p-2 hidden'
      }
    >
      {cart.map(item => (
        <div className="flex flex-col" key={item.id}>
          <div className="flex justify-between items-center mb-2">
            <svg
              className="cursor-pointer"
              onClick={() => removeToCart(item)}
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="16px"
              height="16px"
              viewBox="0 0 16 16"
            >
              <g transform="translate(0, 0)">
                <path
                  d="M16,4V2H11V1a1,1,0,0,0-1-1H6A1,1,0,0,0,5,1V2H0V4Z"
                  fill="#444444"
                  data-color="color-2"
                ></path>
                <path
                  d="M2,5v9a2,2,0,0,0,2,2h8a2,2,0,0,0,2-2V5Zm9.414,7.5L10,13.914l-2-2-2,2L4.586,12.5l2-2-2-2L6,7.086l2,2,2-2L11.414,8.5l-2,2Z"
                  fill="#444444"
                ></path>
              </g>
            </svg>
            <Link to={`/product/${item.id}`}>
              <span>{item.name}</span>
            </Link>
            <span>{`Qty ${item.qty}`}</span>
          </div>
          <span className="self-end mb-3">{`$${item.price}`}</span>
        </div>
      ))}
      <div className="text-center mb-6">
        Total cart:
        <span className="text-xl font-semibold">{` $${totalPrice}`}</span>
      </div>
      <div className="cursor-pointer self-center flex">
        <span className="self-end p-1">Checkout</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="32px"
          height="32px"
          viewBox="0 0 32 32"
        >
          <g transform="translate(0, 0)">
            <path
              fill="#444444"
              d="M30.707,15.293L21,5.586L19.586,7l8,8H1v2h26.586l-8,8L21,26.414l9.707-9.707 C31.098,16.316,31.098,15.684,30.707,15.293z"
            ></path>
          </g>
        </svg>
      </div>
    </div>
  );
}

export default Cart;
