import { useEffect } from "react";
import { Observable } from "rxjs";

export const useObservable = (observable, setter) => {
  useEffect(() => {
    let subscription = observable.subscribe((value) => setter(value));
    return () => subscription.unsubscribe();
  }, [observable, setter]);
};

/* Observables */

export let products$ = Observable.create((obs) => {
  fetch("/api/products")
    .then((res) => res.json())
    .then((data) => data.products)
    .then((p) => {
      obs.next(p);
      obs.complete();
    })
    .catch((err) => obs.error(err));
});
