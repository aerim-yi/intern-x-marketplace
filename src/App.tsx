import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CollectionsPage } from './pages/CollectionPage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { OrderPage } from './pages/OrderPage';
import { AssetPage } from './pages/AssetPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <CollectionsPage />
        </Route>
        <Route path="/collection/:id">
          <OrderPage />
        </Route>
        <Route path="/asset">
          <AssetPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
