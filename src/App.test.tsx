import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App'
import {BrowserRouter as Router} from 'react-router-dom';
import Collections from './components/NFTCollection/Collection'
import Card from './components/Card/Card'


test('renders completely', () => {
  render(<Router><App /></Router>);
});
