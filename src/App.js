import React, { useEffect, useState } from "react";
import { Server } from "miragejs";
import "./App.css";

let server = new Server();
server.get("/products", [
  {
    id: 1,
    name: "borsa",
    prezzo: 40,
    immagine: "url",
  },
  {
    id: 2,
    name: "vestito",
    prezzo: 75,
    immagine: "url",
  },
  {
    id: 3,
    name: "bracciale",
    prezzo: 30,
    immagine: "url",
  },
  {
    id: 4,
    name: "scarpe",
    prezzo: 90,
    immagine: "url",
  },
  {
    id: 5,
    name: "pantalone",
    prezzo: 55,
    immagine: "url",
  },
  {
    id: 6,
    name: "leggings",
    prezzo: 25,
    immagine: "url",
  },
  {
    id: 7,
    name: "bermuda",
    prezzo: 35,
    immagine: "url",
  },
  {
    id: 8,
    name: "camicia",
    prezzo: 60,
    immagine: "url",
  },
]);

function App() {
  let [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
  }, [products]);

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  );
}

export default App;
