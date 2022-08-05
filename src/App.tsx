
import React from 'react';
import { CollectionsPage } from './pages/CollectionPage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { OrderPage } from './pages/OrderPage';
import { AssetPage } from './pages/AssetPage';
import { WalletPage } from './pages/WalletPage';
import { HeaderBar } from './components/HeaderBar/HeaderBar';
import { WalletProvider } from './Context/WalletContext';
import * as Sentry from "@sentry/react";

const App = () => {
  return (
    <Router>
      <WalletProvider>
        <HeaderBar />
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
      </WalletProvider>
    </Router>
  );
}

export default Sentry.withProfiler(App);
