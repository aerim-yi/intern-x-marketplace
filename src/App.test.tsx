import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Collections from './components/NFTCollection/Collection';
import Card from './components/Card/Card';

test('renders learn react link', () => {
  render(<App />);
<<<<<<< HEAD
  const linkElement = screen.getByText(/NFT #1/i);
=======
  const linkElement = screen.getByText(/NFT1/i);
>>>>>>> main
  expect(linkElement).toBeInTheDocument();
});

