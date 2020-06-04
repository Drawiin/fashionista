import React, { useState } from 'react';

import useSearch from '../../hooks/search';

import './styles.css';

export default function Search() {
  const [serchFild, setSearchField] = useState('');
  const [result, setResult] = useSearch();

  function handleChange(event) {
    setSearchField(event.target.value);
    setResult(serchFild);
  }

  return (
    <div className="search">
      <input
        className="search__input"
        value={serchFild}
        onChange={handleChange}
      ></input>
      <ul className="search__itens">
        {result.map(({ name }, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}
