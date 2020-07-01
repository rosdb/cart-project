import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  let [products, setProducts] = useState([]);

  const fetchProd = async () => {
    const response = await fetch("/api/products");
    const data = await response.json();
    return data.products;
  };

  useEffect(() => {
    fetchProd().then((data) => setProducts(data));
  }, [setProducts]);

  return products.length > 0 ? (
    <>
      <header className="bg-gray-800 text-white flex justify-between">
        <span className="ml-20">Logo</span>
        <span className="mr-20">Cart</span>
      </header>
      <h1 className="text-center text-6xl bg-gray-800 text-white mb-12">
        Our Products
      </h1>
      <div className="flex justify-between">
      <div className="bg-gray-200 ml-20 w-1/5">Search Filters</div>
      <div className="container mr-20">
        <div className="grid grid-cols-4 gap-5">
          {products.map((product, index) => (
            <div key={index} className="flex flex-col">
              <img
                className=""
                src="https://via.placeholder.com/300"
                alt={product.name}
              />
              <span className="">{`$ ${product.price}`}</span>
              <div className="flex justify-between">
                <button className="">Open details</button>
                <button className="">Add to cart</button>
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

export default App;
