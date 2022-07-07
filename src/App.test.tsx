import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App'
import {BrowserRouter as Router} from 'react-router-dom';


test('renders completely', () => {
  render(<Router><App /></Router>);
  const linkElement = screen.getByText("Intern X Marketplace");
    expect(linkElement).toBeInTheDocument();
});
