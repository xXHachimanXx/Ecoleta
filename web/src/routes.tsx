import React from 'react';

import { Route, BrowserRouter } from 'react-router-dom'

import Home from './pages/Home/index';
import CreatePoint from './pages/CreatePoint/index';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route exact component={Home} path="/" />
      <Route exact component={CreatePoint} path="/create-point" />
    </BrowserRouter>
  );
}

export default Routes;