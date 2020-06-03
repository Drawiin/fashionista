import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  DECREMENT_PRODUCT,
} from '../constants/action-types';

export function addProduct(payload) {
  return { type: ADD_PRODUCT, payload };
}

export function removeProduct(payload) {
  return { type: REMOVE_PRODUCT, payload };
}

export function decrementProduct(payload) {
  return { type: DECREMENT_PRODUCT, payload };
}
