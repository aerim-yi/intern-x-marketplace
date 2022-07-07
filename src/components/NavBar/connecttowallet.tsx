import React, {useState} from 'react';

const useWalletConnect = () => {
  const [buttonText, setButtonText] = useState('Connect to Wallet');

  function handleClick() {
    setButtonText('Loading...');

    setTimeout(() => {
      setButtonText('Connected to Wallet!');
    }, 1000); // change text back after 1 second; later this will depend on API call success or failure of wallet log-in
  }

  return (
    <div>
      <button onClick={handleClick}>{buttonText}</button>
    </div>
  );
};

export default useWalletConnect;
