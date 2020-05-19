import React from 'react';
import { connect } from 'react-redux';

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
function ShoppingCart(props) {
  return (
    <div className="shoppingCart">
      <h2>Carrinho: </h2>
      <ul className="shoppingCart__products">{console.log(props)}</ul>
      <span className="shoppingCart__total"></span>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
