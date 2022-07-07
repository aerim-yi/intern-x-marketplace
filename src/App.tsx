import React from 'react';
import Collections from './components/NFTCollection/Collection';
import 'bootstrap/dist/css/bootstrap.min.css';
import CollectionsPage from './pages/CollectionsPage';
import NavBar from './components/NavBar/NavBar'

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
      <CollectionsPage />
      <NavBar />
      <Collections items={collections} /> 
    </div>
  );
}

export default App;
