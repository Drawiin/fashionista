import React from 'react';

import './styles.css';

export default function ProductInfo({ location: { state } }) {
  function showDiscountPercentage() {
    if (state.onSale) {
      return (
        <span className="product__sale">
          <span>{}</span>
        </span>
      );
    }
    return null;
  }

  const placeholder =
    'https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+Indispon%C3%ADvel';

  return (
    <div className="productInfo">
      <div className="productInfo__container">
        <figure className="productInfo__img">
          {showDiscountPercentage}
          <img src={state.image || placeholder} alt="REGATA ALCINHA FOLK" />
        </figure>

        <div className="productInfo__description">
          <h2 className="productInfo__name">{state.name}</h2>

          <p className="paymentOptions">
            <span className="paymentOptions__fullPrice">
              {state.actualPrice}
            </span>
            <span className="paymentOptions__installments">3X de R$3,99</span>
          </p>

          <h3 className="productInfo__sizes">Escolha um tamanho</h3>
          <ul className="sizeSelection">
            <li className="size">
              <button type="button">P</button>
            </li>

            <li className="size">
              <button type="button">M</button>
            </li>

            <li className="size size--selected">
              <button type="button">G</button>
            </li>

            <li className="size">
              <button type="button">GG</button>
            </li>
          </ul>
          <div className="product__addButton">
            <button type="button">Adicionar a Sacola</button>
          </div>
        </div>
      </div>
    </div>
  );
}
