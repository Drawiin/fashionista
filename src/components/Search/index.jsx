import React, { useState } from 'react';

import useSearch from '../../hooks/search';
import SearchItem from '../SearchItem';

import './styles.css';

export default function Search() {
  const [serchFild, setSearchField] = useState('');
  const [result, setResult] = useSearch();

  function handleChange(event) {
    setSearchField(event.target.value);
    setResult(serchFild);
  }

  function keyExtractor(product) {
    const {
      sizes: [size],
    } = product;
    const { sku } = size;

    return sku.split('_').slice(0, 3).join('_');
  }

  return (
    <div className="search">
      <input
        className="search__input"
        value={serchFild}
        onChange={handleChange}
        placeholder="Digite o nome do produto"
      ></input>
      <ul className="search__itens">
        {result.map((item) => (
          <SearchItem key={keyExtractor(item)} item={item} />
        ))}
      </ul>
    </div>
  );
}
