import React from 'react';

import useSearch from '../../hooks/search';
import SearchItem from '../SearchItem';
import useTextInput from '../../hooks/input';

import './styles.css';

export default function Search({ toggleModal }) {
  const [result, search] = useSearch();
  const [serchFild, setSearchField] = useTextInput(search);

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
        onChange={setSearchField}
        placeholder="Digite o nome do produto"
      ></input>
      <ul className="search__itens">
        {result.map((item) => (
          <SearchItem
            key={keyExtractor(item)}
            item={item}
            toggleModal={toggleModal}
          />
        ))}
      </ul>
    </div>
  );
}
