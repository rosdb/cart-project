import React from 'react';
import {Link} from 'react-router-dom';

function List({products, addToCart}) {
  return (
    <div className="m-4 list">
      <div className="grid grid-cols-4 gap-3">
        {products.map((product, index) => (
          <div key={index} className="flex flex-col">
            <img
              className=""
              src="https://via.placeholder.com/300"
              alt={product.name}
            />
            <span className="">{`$ ${product.price}`}</span>
            <div className="flex justify-between">
              <Link to={`/product/${product.id}`}>
                <button className="">{product.name}</button>
              </Link>
              <svg
                className="cursor-pointer"
                onClick={() => addToCart(product)}
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="16px"
                height="16px"
                viewBox="0 0 16 16"
              >
                <g transform="translate(0, 0)">
                  <path
                    fill="#444444"
                    d="M13,11H3c-0.553,0-1-0.448-1-1V2H0V0h3c0.553,0,1,0.448,1,1v8h8.246l1.428-5H12V2h3 c0.917,0,1.048,0.973,0.962,1.275l-2,7C13.839,10.704,13.446,11,13,11z"
                  ></path>{' '}
                  <circle
                    data-color="color-2"
                    fill="#444444"
                    cx="3"
                    cy="14"
                    r="2"
                  ></circle>{' '}
                  <circle
                    data-color="color-2"
                    fill="#444444"
                    cx="13"
                    cy="14"
                    r="2"
                  ></circle>{' '}
                  <polygon
                    data-color="color-2"
                    fill="#444444"
                    points="9,5 9,1 7,1 7,5 5,5 8,8 11,5 "
                  ></polygon>
                </g>
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default List;
