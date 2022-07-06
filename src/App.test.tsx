import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Collections from './components/NFTCollection/Collection';
import Card from './components/Card/Card';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/NFT #1/i);
  expect(linkElement).toBeInTheDocument();
});

