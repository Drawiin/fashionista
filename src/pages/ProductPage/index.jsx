import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import SizeSelector from '../../components/SizeSelector';
import { addProduct } from '../../ducks/actions';

import placeholder from '../../assets/images/placeholder';

import './styles.css';

function mapDispatchToProps(dispatch) {
  return {
    addProduct: (product) => dispatch(addProduct(product)),
  };
}

function ProductPage({ location: { state }, addProduct }) {
  const [selectedSize, setSelectedSize] = useState(null);
  const [sizeRequired, setSizeRequired] = useState(false);
  const { product } = state;
  useEffect(() => {
    if (productHasUniqueSize()) {
      setUniqueSize();
    }
  });

  function productHasUniqueSize() {
    return product.sizes.length === 1 && product.sizes[0].size === 'U';
  }

  function setUniqueSize() {
    setSelectedSize(product.sizes[0].sku);
  }

  function showDiscountPercentage() {
    return product.on_sale ? (
      <span className="productPage__discount">
        <span>{product.discount_percentage}</span>
      </span>
    ) : null;
  }

  function handleSizeSelection(sku) {
    setSelectedSize(sku);
  }

  function showSizeSelector() {
    return !productHasUniqueSize() ? (
      <SizeSelector
        sizes={product.sizes}
        warning={sizeRequired}
        selected={selectedSize}
        handleSizeSelection={handleSizeSelection}
      />
    ) : (
      <p>Tamanho Unico</p>
    );
  }

  function addToCart() {
    addProduct({
      sku: selectedSize,
    });
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
      <div className="productPage">
        <div className="container">
          <figure className="productPage__img">
            {showDiscountPercentage()}
            <img src={product.image || placeholder} alt={product.name} />
          </figure>

          <div className="productPage__description">
            <h2 className="productPage__name">{product.name}</h2>

            <p className="payment">
              <span className="payment__price">{product.actual_price}</span>

              <span className="payment__installments">
                {'ou em até '}
                {product.installments}
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

export default connect(null, mapDispatchToProps)(ProductPage);
