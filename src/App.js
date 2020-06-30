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
      <div className="grid grid-cols-4 gap-8 m-20">
        {products.map((product, index) => (
          <img
            key={index}
            src="https://via.placeholder.com/250"
            alt={product.name}
          />
        ))}
      </div>
    </div>
  ) : (
    <p className="text-center">Loading...</p>
  );
}

export default App;
