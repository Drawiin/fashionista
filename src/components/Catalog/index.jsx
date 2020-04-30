import React from 'react';

import './styles.css';

import Product from '../Product';

export default function Catalog({ products }) {
  return (
    <ul className="catalog">
      {products.map(({ sizes: [{ sku }], ...rest }) => (
        <Product key={sku} {...rest} />
      ))}
    </ul>
  );
}
