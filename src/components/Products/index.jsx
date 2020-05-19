import React, { memo } from 'react';

import './styles.css';

import Product from '../Product';

function Products({ products }) {
  function keyExtractor(product) {
    const {
      sizes: [size],
    } = product;
    const { sku } = size;

    return sku.split('_').slice(0, 3).join('_');
  }

  return (
    <ul className="products">
      {products.map((product) => (
        <Product key={keyExtractor(product)} product={product} />
      ))}
    </ul>
  );
}

export default memo(Products);
