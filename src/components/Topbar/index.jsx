import React from 'react';
import { FiShoppingBag, FiSearch } from 'react-icons/fi';

import './styles.css';

export default function Topbar() {
  return (
    <div className="topbar">
      <a className="topbar__title" href="/">
        <h1>Fashionista</h1>
      </a>

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
  );
}
