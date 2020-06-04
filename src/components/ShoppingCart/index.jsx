import React from 'react';
import { connect } from 'react-redux';

import './styles.css';

import ShoppingItem from '../ShoppingItem';

import {
  addProduct,
  decrementProduct,
  removeProduct,
} from '../../ducks/actions';

function mapStateToProps(state) {
  return { shoppingCart: state.shoppingCart };
}

function mapDispatchToProps(dispatch) {
  return {
    addProduct: (product) => dispatch(addProduct(product)),
    decrementProduct: (product) => dispatch(decrementProduct(product)),
    removeProduct: (product) => dispatch(removeProduct(product)),
  };
}

function ShoppingCart({
  shoppingCart,
  addProduct,
  decrementProduct,
  removeProduct,
}) {
  function totalPrice() {
    let total = 0;
    Object.entries(shoppingCart).forEach(([sku, data]) => {
      const number = data.price.slice(2).trim().replace(',', '.');
      total += parseFloat(number) * data.quantity;
    });
    return total;
  }

  return (
    <>
      <ul className="shoppingList">
        {Object.entries(shoppingCart).map(([sku, data]) => (
          <ShoppingItem
            key={sku}
            sku={sku}
            item={data}
            addProduct={addProduct}
            decrementProduct={decrementProduct}
            removeProduct={removeProduct}
          />
        ))}
      </ul>

      <footer className="shoppingCart__footer">
        <span className="shoppingCart__total">
          {'Subtotal ' +
            Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(totalPrice().toFixed(2))}
        </span>
      </footer>
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
