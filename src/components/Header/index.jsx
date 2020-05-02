import React from 'react';
import { FiShoppingBag, FiSearch } from 'react-icons/fi';

import './styles.css';

export default function Header() {
  return (
    <div className="header">
      <a className="header__title" href="/">
        <h1>Fashionista</h1>
      </a>

      <div>
        <button className="button" type="button">
          <FiSearch size={28} />
        </button>

        <button className="button" type="button">
          <FiShoppingBag size={28} />

          <span className="button__badge">
            <span>99</span>
          </span>
        </button>
      </div>
    </div>
  );
}
