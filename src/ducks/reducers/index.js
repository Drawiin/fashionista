import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  DECREMENT_PRODUCT,
} from '../constants/action-types';

const initialState = {
  shoppingCart: {},
};

function addProduct(state, payload) {
  const newShoppingCart = { ...state.shoppingCart };

  if (newShoppingCart[payload.sku]) {
    newShoppingCart[payload.sku] = {
      ...newShoppingCart[payload.sku],
      ...{ quantity: newShoppingCart[payload.sku].quantity + 1 },
    };
  } else {
    newShoppingCart[payload.sku] = {
      quantity: 1,
      name: payload.name,
      image: payload.image,
      price: payload.price,
      installments: payload.installments,
    };
  }

  return { ...state, ...{ shoppingCart: newShoppingCart } };
}

function removeProduct(state, payload) {
  const newShoppingCart = { ...state.shoppingCart };
  if (newShoppingCart[payload.sku]) {
    delete newShoppingCart[payload.sku];
  }
  return { ...state, ...{ shoppingCart: newShoppingCart } };
}

function decrementProduct(state, payload) {
  const newShoppingCart = { ...state.shoppingCart };

  if (newShoppingCart[payload.sku]) {
    if (newShoppingCart[payload.sku].quantity > 1) {
      newShoppingCart[payload.sku] = {
        ...newShoppingCart[payload.sku],
        ...{ quantity: newShoppingCart[payload.sku] - 1 },
      };
    } else {
      return removeProduct(state, payload);
    }
  }
  return { ...state, ...{ shoppingCart: newShoppingCart } };
}

function rootReducer(state = initialState, action) {
  const { type, payload } = action;

  if (type === ADD_PRODUCT) {
    return addProduct(state, payload);
  }

  if (type === REMOVE_PRODUCT) {
    return removeProduct(state, payload);
  }

  if (type === DECREMENT_PRODUCT) {
    return decrementProduct(state, payload);
  }

  return state;
}

export default rootReducer;
