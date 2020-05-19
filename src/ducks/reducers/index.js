import { ADD_PRODUCT } from '../constants/action-types';

const initialState = {
  shoppingCart: {},
};

function rootReducer(state = initialState, action) {
  const { type, payload } = action;

  if (type === ADD_PRODUCT) {
    const newShoppingCart = { ...state.shoppingCart };

    newShoppingCart[payload.sku] = newShoppingCart[payload.sku]
      ? newShoppingCart[payload.sku] + 1
      : 1;

    return { ...state, ...{ shoppingCart: newShoppingCart } };
  }

  return state;
}

export default rootReducer;
