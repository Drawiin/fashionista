import React from 'react';
import { FiTrash2, FiPlusSquare, FiMinusSquare } from 'react-icons/fi';

import './styles.css';

export default function ({
  sku,
  item,
  addProduct,
  decrementProduct,
  removeProduct,
}) {
  function extractSize(sku) {
    const size = sku.split('_');
    return size[size.length - 1];
  }

  return (
    <li className="shoppingItem">
      <div className="shoppingItem__container">
        <figure className="shoppingItem__img">
          <img src={item.image} alt={item.name} />
        </figure>
        <div className="shoppingItem__info">
          <p className="shoppingItem__name">{item.name}</p>
          <p className="shoppingItem__size">Tamanho {' ' + extractSize(sku)}</p>
        </div>
      </div>

      <button
        className="removeButton"
        type="button"
        onClick={() => removeProduct({ sku })}
      >
        <FiTrash2 color="#f44336" size={20} />
      </button>

      <div className="shoppingItem__controller">
        <div className="quantityButton">
          <button type="button" onClick={() => addProduct({ sku })}>
            <FiPlusSquare />
          </button>

          <span>{item.quantity}</span>

          <button
            type="button"
            onClick={() => {
              decrementProduct({ sku });
            }}
          >
            <FiMinusSquare />
          </button>
        </div>
        <p className="shoppingItem__payment">
          <span className="shoppingItem__price">{item.price}</span>
          <span className="shoppingItem__installments">
            {item.installments}
          </span>
        </p>
      </div>
    </li>
  );
}
