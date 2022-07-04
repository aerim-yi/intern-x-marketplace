import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Expenses from './components/NFTCollection';
import UI from './components/Card';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/NFT1/i);
  expect(linkElement).toBeInTheDocument();
});
