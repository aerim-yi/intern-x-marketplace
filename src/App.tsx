import React from 'react';
<<<<<<< HEAD
import './App.css';
import Collections from './components/NFTCollection/Collection';

const App = () => {
  const collections = [
=======
<<<<<<< HEAD
import 'bootstrap/dist/css/bootstrap.min.css';
import CollectionsPage from './pages/CollectionsPage';
=======
import './App.css';
import Expenses from './components/Expenses/Expenses';

const App = () => {
  const expenses = [
>>>>>>> main
    {
      id: 'e1',
      title: 'NFT #1',
      amount: 94.12,
<<<<<<< HEAD
      url: "https://media.giphy.com/media/qISaMW1xwmvNS/giphy.gif"
    },
    { id: 'e2', 
      title: 'NFT #2', 
      amount: 799.49, 
      url: "https://media.giphy.com/media/qISaMW1xwmvNS/giphy.gif"},
  ];

  return (
    <div>
      <h2 className = "collections">Intern NFT Marketplace</h2>
      <Collections items={collections} /> 
=======
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
>>>>>>> main
    </div>
  );
}

export default App;
