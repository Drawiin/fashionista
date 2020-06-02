import React, { useEffect } from 'react';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import placeholder from '../../assets/images/placeholder';

export default function ShoppingCart({
  shoppingCart,
  show = true,
  toggleCart,
}) {
  function getProductInfo(sku) {
    return { name: 'Nome', price: 100, image: placeholder };
  }

  const content = (
    <>
      <ul className="shoppingCart__products">
        {Object.entries(shoppingCart).map(([sku, quantity]) => (
          <li className="shoppingCart__product" key={sku}>
            <p>{sku}</p>
            <p>{quantity}</p>
          </li>
        ))}
      </ul>

      <footer className="shoppingCart__footer">
        <span className="shoppingCart__total">{100}</span>
      </footer>
    </>
  );

  return (
    <>
      <div className={`shoppingCart ${!show ? 'hidden' : ''}`}>
        <header className="shoppingCart__header ">
          <button className="shoppingCart_close" onClick={toggleCart}>
            <FiArrowLeft color="#000000" size={30} />
          </button>
          <h2 className="shoppingCart__title">Sacola</h2>
        </header>
        {content}
      </div>
      <div className={`darknedBackground ${!show ? 'hidden' : ''}`}></div>
    </>
  );
}
