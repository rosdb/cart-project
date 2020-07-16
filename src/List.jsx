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
                <button className="">Open details</button>
              </Link>
              <button className="" onClick={() => addToCart(product)}>
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default List;
