import { render, screen } from '@testing-library/react'
import React from 'react';
import App from '../App';

test('renders title NFT #1', () => {
    render(<App />);
    const linkElement = screen.getByText(/marketplace/i);
    expect(linkElement).toBeInTheDocument();
  });
