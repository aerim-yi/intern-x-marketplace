import React from 'react';
<<<<<<< HEAD
import 'bootstrap/dist/css/bootstrap.min.css';
import CollectionsPage from './pages/CollectionsPage';
=======
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
>>>>>>> 6c1e109 (card-component)

  return (
    <div>
<<<<<<< HEAD
      <CollectionsPage />
=======
      <h2>Intern NFT Marketplace</h2>
      <Expenses items={expenses} /> 
      <Expenses items={expenses} />
>>>>>>> 6c1e109 (card-component)
    </div>
  );
}

export default App;
