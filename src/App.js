import React, { useEffect, useState } from "react";
import { Observable } from "rxjs";

const useObservable = (observable, setter) => {
  useEffect(() => {
    let subscription = observable.subscribe((value) => setter(value));
    return () => subscription.unsubscribe();
  }, [observable, setter]);
};

let products$ = Observable.create((obs) => {
  fetch("/api/products")
    .then((res) => res.json())
    .then((data) => data.products)
    .then((p) => {
      obs.next(p);
      obs.complete();
    })
    .catch((err) => obs.error(err));
});

function App() {
  let [products, setProducts] = useState([]);

  useObservable(products$, setProducts);

  return products.length > 0 ? (
    <div className="grid grid-cols-12 grid-rows-6">
      <div className="grid col-start-1 col-end-13 row-start-1 row-end-2 bg-gray-800 text-white">
        <span className="col-start-1 col-end-2 text-center">Logo</span>
        <h1 className="col-start-2 col-end-12 text-6xl text-center">
          Our Products
        </h1>
        <span className="col-start-12 col-end-13 text-center">Cart</span>
      </div>
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
                  <button className="">Open details</button>
                  <button className="">Add to cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <p className="text-center m-16">Loading...</p>
  );
}

export default App;
