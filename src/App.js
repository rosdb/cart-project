import React from "react";
import "./App.css";

const fetchData = () => {
  return fetch("/products")
    .then((response) => response.json())
    .then((data) => console.log(data));
};

function App() {
  fetchData();
  return <div className="app"></div>;
}

export default App;
