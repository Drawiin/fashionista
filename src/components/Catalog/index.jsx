import React, { memo } from 'react';

import './styles.css';

import Product from '../Product';

function Catalog({ products }) {
  return (
    <ul className="catalog">
      {products.map(({ sizes: [{ sku }], ...rest }) => (
        <Product key={sku} {...rest} />
      ))}
    </ul>
  );
}

export default memo(Catalog);
