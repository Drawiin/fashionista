import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import placeholder from '../../assets/images/placeholder';

export default function Product({ product }) {
  //TO-DO recive only a product object
  function showDiscountPercentage() {
    return product.on_sale ? (
      <span className="product__discount">
        <span>{product.discount_percentage}</span>
      </span>
    ) : null;
  }

  function showRegularPrice() {
    return product.on_sale ? (
      <span className="product__regularPrice">{product.regular_price}</span>
    ) : null;
  }

  return (
    <li className="product">
      <Link
        to={{
          pathname: `product/${product.name}`,
          state: {
            product,
          },
        }}
      >
        {showDiscountPercentage()}
        <figure className="product__img">
          <img src={product.image || placeholder} alt="clothes" />
        </figure>
        <div className="product__info">
          <p className="product__name">{product.name}</p>

          <p className="product__price">
            {showRegularPrice()}
            <span className="product__actualPrice">{product.actual_price}</span>
          </p>
        </div>
      </Link>
    </li>
  );
}
