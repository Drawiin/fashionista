import React from 'react'

import Header from './components/Header'
import ProductList from './components/ProductList'

function App() {
  return (
    <div>
      <Header title="Fashionista" counter={0}/>
      <ProductList />
    </div>
  )
}

export default App
