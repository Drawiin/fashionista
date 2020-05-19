import React from 'react';
import { FiShoppingBag, FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import ShoppingCart from '../ShoppingCart';

import './styles.css';

export default function Topbar() {
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

          <button className="button" type="button">
            <FiShoppingBag size={28} />

            <span className="button__badge">
              <span>9</span>
            </span>
          </button>
        </div>
      </div>
      <ShoppingCart />
    </>
  );
}
