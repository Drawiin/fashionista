import React from 'react';
import { FiShoppingBag, FiSearch } from 'react-icons/fi';

import './styles.css';

import Button from '../Button';

export default function header({ title, counter }) {
  return (
    <div className="header">
      <a className="header__title" href="/">
        <h1>{title}</h1>
      </a>
      <div>
        <Button>
          <FiSearch size={28} />
        </Button>

        <Button counter={counter}>
          <FiShoppingBag size={28} />
        </Button>
      </div>
    </div>
  );
}
