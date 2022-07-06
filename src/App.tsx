import React from 'react';
import './App.css';
import Collections from './components/NFTCollection/Collection';
import 'bootstrap/dist/css/bootstrap.min.css';
import CollectionsPage from './pages/CollectionsPage';

const App = () => {
  const collections = [
    {
      id: 'e1',
      title: 'NFT #1',
      amount: 94.12,
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
      <CollectionsPage />
    </div>
  );
}

export default App;
