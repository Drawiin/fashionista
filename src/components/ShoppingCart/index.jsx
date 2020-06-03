import React from 'react';
import { FiArrowLeft, FiTrash2, FiPlus, FiMinus } from 'react-icons/fi';
import { connect } from 'react-redux';

import './styles.css';

import {
  addProduct,
  decrementProduct,
  removeProduct,
} from '../../ducks/actions';

function mapDispatchToProps(dispatch) {
  return {
    addProduct: (product) => dispatch(addProduct(product)),
    decrementProduct: (product) => dispatch(decrementProduct(product)),
    removeProduct: (product) => dispatch(removeProduct(product)),
  };
}

function ShoppingCart({
  shoppingCart,
  show = true,
  toggleCart,
  addProduct,
  decrementProduct,
  removeProduct,
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
            <div className="shoppingProduct__container">
              <figure className="shoppingProduct__image">
                <img src={data.image} alt="" />
              </figure>
              <button
                typeof="button"
                className="shoppingProduct__remove"
                onClick={() => removeProduct({ sku })}
              >
                <span>remover</span>
                <FiTrash2 color="#f44336" />
              </button>
            </div>
            <div className="shoppingProduct__container">
              <p className="shoppingProduct__name">{data.name}</p>
              <p className="shoppingProduct__size">
                Tamanho {' ' + extractSize(sku)}
              </p>
              <div className="shoppingProduct_quantity">
                <buttton className="shoppingProduc__increment"></buttton>
                <span>{data.quantity}</span>
                <buttton className="shoppingProduc__decrement"></buttton>
              </div>
            </div>

            <div className="shoppingProduct__container">
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

export default connect(null, mapDispatchToProps)(ShoppingCart);
