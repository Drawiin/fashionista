import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import placeholder from '../../assets/images/placeholder';

export default function Product({
  name,
  image,
  on_sale: onSale,
  discount_percentage: discountPercentage,
  regular_price: regularPrice,
  actual_price: actualPrice,
  sizes,
  installments,
}) {
  function showDiscountPercentage() {
    return onSale ? (
      <span className="product__discount">
        <span>{discountPercentage}</span>
      </span>
    ) : null;
  }

  function showRegularPrice() {
    return onSale ? (
      <span className="product__regularPrice">{regularPrice}</span>
    ) : null;
  }

  return (
    <li className="product">
      <Link
        to={{
          pathname: '/product',
          state: {
            name,
            image,
            actualPrice,
            onSale,
            sizes,
            discountPercentage,
            installments,
          },
        }}
      >
        {showDiscountPercentage()}
        <figure className="product__img">
          <img src={image || placeholder} alt="clothes" />
        </figure>
        <div className="product__info">
          <p className="product__name">{name}</p>

          <p className="product__price">
            {showRegularPrice()}
            <span className="product__actualPrice">{actualPrice}</span>
          </p>
        </div>
      </Link>
    </li>
  );
}
