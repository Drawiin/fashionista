import React, { useState } from 'react';
import { FiShoppingBag, FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import ShoppingCart from '../ShoppingCart';

import './styles.css';

function mapStateToProps(state) {
  return { shoppingCart: state.shoppingCart };
}

function Topbar({ shoppingCart }) {
  const [showCart, setShowCart] = useState(false);

  function toggleCart() {
    setShowCart(!showCart);
  }

  return (
    <>
      <div className="topbar">
        <Link className="topbar__title" to="/">
          <h1>Fashionista</h1>
        </Link>

        <div>
          <button className="button" type="button">
            <FiSearch size={28} />
          </button>

          <button className="button" type="button" onClick={toggleCart}>
            <FiShoppingBag size={28} />

            <span className="button__badge">
              <span>{Object.entries(shoppingCart).length}</span>
            </span>
          </button>
        </div>
      </div>
      <ShoppingCart
        shoppingCart={shoppingCart}
        show={showCart}
        toggleCart={toggleCart}
      />
    </>
  );
}

export default connect(mapStateToProps)(Topbar);
