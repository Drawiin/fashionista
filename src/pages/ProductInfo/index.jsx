import React, { useState, useEffect } from 'react';

import './styles.css';

import placeholder from '../../assets/images/placeholder';

export default function ProductInfo({ location: { state } }) {
  const [selectedSize, setSelectedSize] = useState(null);
  const [sizeRiqueride, setSizeRiquerid] = useState(false);

  useEffect(() => {
    if (state.sizes.length === 1) {
      setSelectedSize(state.sizes[0].sku);
    }
  }, [state.sizes]);

  function showDiscountPercentage() {
    return state.onSale ? (
      <span className="productInfo__discount">
        <span>{state.discountPercentage}</span>
      </span>
    ) : null;
  }

  function handleSizeSelection(sku) {
    setSelectedSize(sku);
  }

  function showSizeRequired() {
    return sizeRiqueride ? (
      <span className="warning">por favor selecione um tamanho</span>
    ) : null;
  }

  function showSizeSelection() {
    if (state.sizes.length === 1) {
      return null;
    }
    return (
      <>
        <h3 className="productInfo__sizes">Escolha um tamanho</h3>
        {showSizeRequired()}
        <ul className="sizeSelection">
          {state.sizes.map((size) => {
            return size.available ? (
              <li
                key={size.sku}
                className={
                  size.sku === selectedSize ? 'size size--selected ' : 'size'
                }
              >
                <button
                  onClick={() => {
                    handleSizeSelection(size.sku);
                  }}
                  type="button"
                >
                  {size.size}
                </button>
              </li>
            ) : null;
          })}
        </ul>
      </>
    );
  }

  function addToCart() {
    console.log(selectedSize);
  }

  function handleAddTocart() {
    if (selectedSize === null) {
      setSizeRiquerid(true);
    } else {
      addToCart();
    }
  }

  return (
    <div className="productInfo">
      <div className="productInfo__container">
        <figure className="productInfo__img">
          {showDiscountPercentage()}
          <img src={state.image || placeholder} alt="REGATA ALCINHA FOLK" />
        </figure>

        <div className="productInfo__description">
          <h2 className="productInfo__name">{state.name}</h2>

          <p className="paymentOptions">
            <span className="paymentOptions__fullPrice">
              {state.actualPrice}
            </span>
            <span className="paymentOptions__installments">
              {'ou em até '}
              {state.installments}
            </span>
          </p>
          {showSizeSelection()}
          <div className="product__addButton">
            <button type="button" onClick={handleAddTocart}>
              Adicionar a Sacola
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
