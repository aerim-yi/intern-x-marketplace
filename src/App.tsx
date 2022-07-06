import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CollectionsPage from './pages/CollectionsPage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import OrderPage from './pages/OrderPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <CollectionsPage />
        </Route>
        <Route path="/collection/:collectionId">
          <OrderPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
