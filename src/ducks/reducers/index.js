import { ADD_PRODUCT, REMOVE_PRODUCT } from '../constants/action-types';

const initialState = {
  shoppingCart: {},
};

function rootReducer(state = initialState, action) {
  const { type, payload } = action;

  if (type === ADD_PRODUCT) {
    const newShoppingCart = { ...state.shoppingCart };

    if (newShoppingCart[payload.sku]) {
      newShoppingCart[payload.sku] = {
        quantity: newShoppingCart[payload.sku].quantity + 1,
        name: payload.name,
        image: payload.image,
        price: payload.price,
        installments: payload.installments,
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

  if (type === REMOVE_PRODUCT) {
    const newShoppingCart = { ...state.shoppingCart };
    if (newShoppingCart[payload.sku]) {
      delete newShoppingCart[payload.sku];
    }
    return { ...state, ...{ shoppingCart: newShoppingCart } };
  }

  return state;
}

export default rootReducer;
