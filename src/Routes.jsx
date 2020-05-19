import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Catalog from './pages/Catalog';
import ProductPage from './pages/ProductPage';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Catalog} />
        <Route path="/product/:name" component={ProductPage} />
      </Switch>
    </BrowserRouter>
  );
}
