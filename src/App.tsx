import React from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';

const App = () => {
  const expenses = [
    {
      id: 'e1',
      title: 'NFT #1',
      amount: 94.12,
    },
    { id: 'e2', 
      title: 'NFT #2', 
      amount: 799.49},
    {
      id: 'e3',
      title: 'NFT #3',
      amount: 294.67,
    },
    {
      id: 'e4',
      title: 'NFT #4',
      amount: 450,
    },
  ];

  return (
    <div>
      <h2>Intern NFT Marketplace</h2>
      <Expenses items={expenses} /> 
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
