import React from 'react';
import { connect } from 'react-redux';
import { FiArrowLeft } from 'react-icons/fi';

import { addProduct } from '../../ducks/actions';

import './styles.css';

function mapDispatchToProps(dispatch) {
  return {
    addProduct: (product) => dispatch(addProduct(product)),
  };
}

function mapStateToProps(state) {
  return { shoppingCart: state.shoppingCart };
}
function ShoppingCart({ shoppingCart, show = false }) {
  return (
    <div className="shoppingCart">
      <header className="shoppingCart__header ">
        <button className="shoppingCart_close">
          <FiArrowLeft color="#000000" size={20} />
        </button>
        <h2 className="shoppingCart__title">Sacola</h2>
      </header>
      <ul className="shoppingCart__products">
        {Object.entries(shoppingCart).map(([sku, quantity]) => (
          <li className="shoppingCart__product" key={sku}>
            <p>{sku}</p>
            <p>{quantity}</p>
          </li>
        ))}
      </ul>
      <footer className="shoppingCart__footer">
        <span className="shoppingCart__total">Subtotal - R$100</span>
      </footer>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
