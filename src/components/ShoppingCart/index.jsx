import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

export default function ShoppingCart({
  shoppingCart,
  show = true,
  toggleCart,
}) {
  function totalPrice() {
    let total = 0;
    Object.entries(shoppingCart).forEach(([sku, data]) => {
      const number = data.price.slice(2).trim().replace(',', '.');
      total += parseFloat(number) * data.quantity;
    });
    return total;
  }

  function extractSize(sku) {
    const size = sku.split('_');
    return size[size.length - 1];
  }

  const content = (
    <>
      <ul className="shoppingList">
        {Object.entries(shoppingCart).map(([sku, data]) => (
          <li className="shoppingProduct" key={sku}>
            <figure className="shoppingProduct__image">
              <img src={data.image} alt="" />
            </figure>
            <div className="shoppingProduct__info">
              <p className="shoppingProduct__name">{data.name}</p>
              <p className="shoppingProduct__size">
                Tamanho {' ' + extractSize(sku)}
              </p>
            </div>

            <div className="shoppingProduct__payment">
              <p className="shoppingProduct__price">{data.price}</p>
              {'ou até'}
              <p className="shoppingProduct__installments">
                {data.installments}
              </p>
            </div>
          </li>
        ))}
      </ul>

      <footer className="shoppingCart__footer">
        <span className="shoppingCart__total">
          {'Total ' +
            Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(totalPrice().toFixed(2))}
        </span>
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
