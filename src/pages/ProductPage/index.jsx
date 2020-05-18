import React, { useState, useEffect } from 'react';

import './styles.css';

import Topbar from '../../components/Topbar';
import SizeSelector from '../../components/SizeSelector';

import placeholder from '../../assets/images/placeholder';

export default function ProductPage({ location: { state } }) {
  const [selectedSize, setSelectedSize] = useState(null);
  const [sizeRequired, setSizeRequired] = useState(false);

  useEffect(() => {
    if (state.sizes.length === 1) {
      setSelectedSize(state.sizes[0].sku);
    }
  }, [state.sizes]);

  function showDiscountPercentage() {
    return state.onSale ? (
      <span className="productPage__discount">
        <span>{state.discountPercentage}</span>
      </span>
    ) : null;
  }

  function handleSizeSelection(sku) {
    setSelectedSize(sku);
  }

  function showSizeSelector() {
    if (state.sizes.length === 1) {
      return null;
    }
    return (
      <SizeSelector
        sizes={state.sizes}
        warning={sizeRequired}
        selected={selectedSize}
        handleSizeSelection={handleSizeSelection}
      />
    );
  }

  function addToCart() {
    console.log(selectedSize);
  }

  function handleAddTocart() {
    if (selectedSize === null) {
      setSizeRequired(true);
    } else {
      addToCart();
    }
  }

  return (
    <>
      <Topbar />
      <div className="productPage">
        <div className="container">
          <figure className="productPage__img">
            {showDiscountPercentage()}
            <img src={state.image || placeholder} alt={state.name} />
          </figure>

          <div className="productPage__description">
            <h2 className="productPage__name">{state.name}</h2>

            <p className="payment">
              <span className="payment__price">{state.actualPrice}</span>

              <span className="payment__installments">
                {'ou em até '}
                {state.installments}
              </span>
            </p>

            {showSizeSelector()}

            <div className="addButton">
              <button type="button" onClick={handleAddTocart}>
                Adicionar a Sacola
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
