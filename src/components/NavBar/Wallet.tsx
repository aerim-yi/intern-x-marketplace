import React, {useEffect, useState, useContext} from 'react';
import {
  ETHTokenType,
  ImmutableXClient,
  Link
} from "@imtbl/imx-sdk";
import "./NavBar.css"
import { WalletContext } from './WalletContext';

// const enum URLs {
//   WALLET_ADDRESS = "WALLET_ADDRESS",
//   STARK_PUBLIC_KEY = "STARK_PUBLIC_KEY",
//   LINK_URL = "https://link.ropsten.x.immutable.com",
//   API_URL = "https://api.ropsten.x.immutable.com/v1",
//   ETH_NETWORK = "ETH_NETWORK",
// }

const Wallet : React.FC = () => {

  const value = useContext(WalletContext)

  // const link = new Link(URLs.LINK_URL);

  // const [walletAddress, setWalletAddress] = useState(
  //   localStorage.WALLET_ADDRESS
  // );
  // const [ethNetwork, setEthNetwork] = useState(localStorage.ETH_NETWORK);
  // const [providerPreference, setProviderPreference] = useState(
  //   localStorage.PROVIDER_PREFERENCE
  // );

  async function login() {
    const { address, starkPublicKey, ethNetwork } = await link.setup({});
    localStorage.setItem(URLs.WALLET_ADDRESS, address);
    localStorage.setItem(URLs.STARK_PUBLIC_KEY, starkPublicKey);
    localStorage.setItem(URLs.ETH_NETWORK, ethNetwork);
    setWalletAddress(localStorage.WALLET_ADDRESS);
    setEthNetwork(localStorage.ETH_NETWORK);
    setProviderPreference(localStorage.PROVIDER_PREFERENCE);
  }

  function logout() {
    localStorage.removeItem(URLs.WALLET_ADDRESS);
    setWalletAddress(localStorage.WALLET_ADDRESS);
    setEthNetwork(localStorage.ETH_NETWORK);
    setProviderPreference(localStorage.PROVIDER_PREFERENCE);
  }
  
return (
  <div>
    {walletAddress ? (
      <>
        <button onClick={logout} className = "location">Disconnect</button>
        <p>
          <strong>Wallet address: </strong>
          {walletAddress}
        </p>
        <p>
          <strong>Eth network: </strong>
          {ethNetwork}
        </p>
        <p>
          <strong>Provider reference: </strong>
          {providerPreference}
        </p>
        <div
          style={{
            display: "flex",
          }}
        >
        </div>
      </>
    ) : (
      <div
        style={{
          display: "flex",
        }}
      >
        <button onClick={login}>Connect</button>
      </div>
    )}
  </div>
)};

export default Wallet;
