import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

export default function ShoppingCart({
  shoppingCart,
  show = true,
  toggleCart,
}) {
  return (
    <div className={`shoppingCart ${!show ? 'hidden' : ''}`}>
      <header className="shoppingCart__header ">
        <button className="shoppingCart_close" onClick={toggleCart}>
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
