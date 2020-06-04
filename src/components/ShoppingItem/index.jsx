import React from 'react';
import { FiTrash2, FiPlusCircle, FiMinusCircle } from 'react-icons/fi';

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
        <FiTrash2 color="#f44336" size={16} />
      </button>

      <div className="shoppingItem__controller">
        <div className="quantityButton">
          <button type="button" onClick={() => addProduct({ sku })}>
            <FiPlusCircle />
          </button>

          <span>{item.quantity}</span>

          <button
            type="button"
            onClick={() => {
              decrementProduct({ sku });
            }}
          >
            <FiMinusCircle />
          </button>
        </div>
        <p className="shoppingItem__payment">
          <span className="shoppingItem__price">{item.price}</span>
          <span className="shoppingItem__installments">
            {' Ou em até ' + item.installments}
          </span>
        </p>
      </div>
    </li>
  );
}
