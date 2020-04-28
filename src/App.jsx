import React, { Fragment } from 'react'

import Routes from './Routes'
import Header from './components/Header'

function App() {
  return (
    <Fragment>
      <Header title="Fashionista" counter={99}/>
      <Routes/>
    </Fragment>
  )
}

export default App
