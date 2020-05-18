import React from 'react';

import './styles.css';

export default function SizeSelector({
  sizes,
  warning,
  selected,
  handleSizeSelection,
}) {
  function showSizeRequired() {
    return warning ? (
      <span className="warning">por favor selecione um tamanho</span>
    ) : null;
  }

  return (
    <>
      <h3 className="title">Escolha um tamanho</h3>
      {showSizeRequired()}
      <ul className="sizes">
        {sizes &&
          sizes.map((size) => {
            return size.available ? (
              <li
                key={size.sku}
                className={
                  size.sku === selected ? 'size size--selected ' : 'size'
                }
              >
                <button
                  onClick={() => {
                    handleSizeSelection(size.sku);
                  }}
                  type="button"
                >
                  {size.size}
                </button>
              </li>
            ) : null;
          })}
      </ul>
    </>
  );
}
