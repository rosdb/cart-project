/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

function ProductList({ products, addToCart }) {
  return products.length > 0 ? (
    <>
      <Header title="Our Products" />
      <div className="grid col-start-1 col-end-13 row-start-2 row-end-7 m-6">
        <div className="bg-gray-200 col-start-1 col-end-3 m-4">
          Search Filters
        </div>
        <div className="col-start-3 col-end-13 m-4">
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
                  <Link to="/cart">
                    <button className="" onClick={() => addToCart(product)}>
                      Add to cart
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  ) : (
    <p className="text-center m-16">Loading...</p>
  );
}

export default ProductList;
