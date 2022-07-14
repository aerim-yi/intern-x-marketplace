import React from 'react';
import { CollectionsPage } from './pages/CollectionPage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { OrderPage } from './pages/OrderPage';
import { AssetPage } from './pages/AssetPage';
import { WalletPage } from './pages/WalletPage';

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
        <Route path="/wallet_management">
          <WalletPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
