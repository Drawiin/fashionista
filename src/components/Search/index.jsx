import React from 'react';

import './styles.css';

export default function Search({ show }) {
  return (
    <>
      <div className={`search ${!show ? 'hidden' : ''}`}></div>
      <div className={`darknedBackground ${!show ? 'hidden' : ''}`}></div>
    </>
  );
}
