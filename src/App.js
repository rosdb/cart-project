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
    <div className="container mx-auto">
      <p className="text-center m-16">Cart Project</p>
      <div className="grid grid-cols-4 gap-8 m-20">
        {products.map((product, index) => (
          <div key={index} className="grid grid-rows-3 grid-flow-col gap-4">
          <img className="row-span-3 col-span-1"
            key={product.name}
            src="https://via.placeholder.com/250"
            alt={product.name}
          />
          <span key={product.prezzo} className="row-span-1 col-span-2">{product.prezzo}</span>
          <button key={product.id} className="row-span-1 col-span-2 text-left">Apri dettaglio</button>
          <button key={`btn ${product.id}`} className="row-span-1 col-span-2">Aggiungi al carrello</button>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <p className="text-center m-16">Loading...</p>
  );
}

export default App;
