import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Expenses from './components/Expenses';
import UI from './components/UI';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/NFT1/i);
  expect(linkElement).toBeInTheDocument();
});
