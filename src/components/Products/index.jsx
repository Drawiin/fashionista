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
        <Product
          key={keyExtractor(product)}
          name={product.name}
          image={product.image}
          on_sale={product.on_sale}
          discount_percentage={product.discount_percentage}
          regular_price={product.regular_price}
          actual_price={product.actual_price}
          sizes={product.sizes}
          installments={product.installments}
        />
      ))}
    </ul>
  );
}

export default memo(Products);
