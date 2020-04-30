import React from 'react';

import Routes from './Routes';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header title="Fashionista" counter={99} />
      <Routes />
    </>
  );
}

export default App;
