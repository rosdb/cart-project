import { Subject } from "rxjs";

const subject = new Subject();

const initialState = {
  products: [],
  cart: [],
  cartItemCount: 0,
};

let state = initialState;

const store = {
  init: () => subject.next(state),
  subscribe: (setter) => subject.subscribe((value) => setter(value)),
  setProducts: (products) => {
    state = {
      ...state,
      products,
    };
    subject.next(state);
  },
  addToCart: (product) => {
    state = {
      ...state,
      cart: [...state.cart, product],
      cartItemCount: state.cartItemCount + 1,
    };
    subject.next(state);
  },
  clearCart: () => {
    state = { ...state, cart: [], cartItemCount: 0 };
    subject.next(state);
  },
  initialState,
};

export default store;
