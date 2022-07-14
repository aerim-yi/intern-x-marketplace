import React from 'react';
import { CollectionsPage } from './pages/CollectionPage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { OrderPage } from './pages/OrderPage';
import { AssetPage } from './pages/AssetPage';
import { WalletPage } from './pages/WalletPage';
import { HeaderBar } from './components/HeaderBar/HeaderBar';
import { useWalletHook } from './components/NavBar/useWallethook';

const App = () => {

  const { walletInfo, login, logout, } = useWalletHook();

  return (
    <Router>
      <HeaderBar login={login} logout={logout} walletAddress={walletInfo?.address} />
      <Switch>
        <Route exact path="/">
          <CollectionsPage walletAddress={walletInfo?.address} />
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
