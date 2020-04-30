import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import ProductInfo from './pages/ProductInfo';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/product" component={ProductInfo} />
      </Switch>
    </BrowserRouter>
  );
}
