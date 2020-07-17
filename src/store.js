import {Subject} from 'rxjs';

const subject = new Subject();

const initialState = {
  products: [],
  cart: [],
  cartItemCount: 0,
  totalPrice: 0,
  cartView: false
};

let state = initialState;

const store = {
  init: () => subject.next(state),
  subscribe: setter => subject.subscribe(value => setter(value)),
  setProducts: products => {
    state = {
      ...state,
      products
    };
    subject.next(state);
  },
  addToCart: product => {
    product.qty = product.qty + 1 || 1;
    state = {
      ...state,
      cart: state.cart.includes(product)
        ? [...state.cart]
        : [...state.cart, product],
      cartItemCount: state.cartItemCount + 1,
      totalPrice: state.totalPrice + Number(product.price)
    };
    subject.next(state);
  },
  removeToCart: product => {
    product.qty = product.qty - 1 || 0;
    state = {
      ...state,
      cart:
        product.qty >= 1
          ? [...state.cart]
          : [...state.cart.filter(item => item !== product)],
      cartItemCount: state.cartItemCount - 1,
      totalPrice: state.totalPrice - Number(product.price)
    };
    subject.next(state);
  },
  handleCart: () => {
    state = {
      ...state,
      cartView: !state.cartView
    };
    subject.next(state);
  },
  initialState
};

export default store;
