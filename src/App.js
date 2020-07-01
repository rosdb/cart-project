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
