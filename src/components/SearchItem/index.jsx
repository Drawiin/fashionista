import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import placeholder from '../../assets/images/placeholder';

export default function searchItem({ item }) {
  function showDiscountPercentage() {
    return item.on_sale ? (
      <span className="searchItem__discount">
        <span>{item.discount_percentage}</span>
      </span>
    ) : null;
  }

  function showRegularPrice() {
    return item.on_sale ? (
      <span className="searchItem__regularPrice">{item.regular_price}</span>
    ) : null;
  }

  return (
    <li className="searchItem">
      <Link
        className="searchItem__container"
        to={{
          pathname: `product/${item.name}`,
          state: {
            product: item,
          },
        }}
      >
        {showDiscountPercentage()}
        <figure className="searchItem__img">
          <img src={item.image || placeholder} alt="clothes" />
        </figure>
        <div className="searchItem__info">
          <p className="searchItem__name">{item.name}</p>

          <p className="searchItem__price">
            {showRegularPrice()}
            <span className="searchItem__actualPrice">{item.actual_price}</span>
          </p>
        </div>
      </Link>
    </li>
  );
}
