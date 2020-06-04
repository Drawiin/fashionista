import React from 'react';
import { FiShoppingBag, FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './styles.css';

import Modal from '../Modal';
import useModal from '../../hooks';
import ShoppingCart from '../ShoppingCart';

function mapStateToProps(state) {
  return { shoppingCart: state.shoppingCart };
}

function Topbar({ shoppingCart }) {
  const [cart, toggleCart] = useModal();
  const [search, toggleSearch] = useModal();

  return (
    <>
      <div className="topbar">
        <Link className="topbar__title" to="/">
          <h1>Fashionista</h1>
        </Link>

        <div>
          <button className="button" type="button" onClick={toggleSearch}>
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

      <Modal
        modal={cart}
        toggleModal={toggleCart}
        title={`Sacola (${Object.entries(shoppingCart).length})`}
      >
        <ShoppingCart />
      </Modal>
      <Modal modal={search} toggleModal={toggleSearch} title="Busca"></Modal>
    </>
  );
}

export default connect(mapStateToProps)(Topbar);
