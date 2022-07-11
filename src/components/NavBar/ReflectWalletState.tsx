import React, {useEffect, useState} from 'react';
import {
  ETHTokenType,
  ImmutableXClient,
  Link
} from "@imtbl/imx-sdk";
import "./NavBar.css"

enum WalletConsts {
  WALLET_ADDRESS = "WALLET_ADDRESS",
  STARK_PUBLIC_KEY = "STARK_PUBLIC_KEY",
  LINK_URL = "https://link.ropsten.x.immutable.com",
  API_URL = "https://api.ropsten.x.immutable.com/v1",
  ETH_NETWORK = "ETH_NETWORK",
}

const ReflectWalletState = () => {
  const link = new Link(WalletConsts.LINK_URL);

  const [walletAddress, setWalletAddress] = useState(
    localStorage.WALLET_ADDRESS
  );
  const [ethNetwork, setEthNetwork] = useState(localStorage.ETH_NETWORK);
  const [providerPreference, setProviderPreference] = useState(
    localStorage.PROVIDER_PREFERENCE
  );
  const [ethBalance, setEthBalance] = useState({});

  async function login() {
    const { address, starkPublicKey, ethNetwork } = await link.setup({});
    console.log("tedst");
    localStorage.setItem(WalletConsts.WALLET_ADDRESS, address);
    localStorage.setItem(WalletConsts.STARK_PUBLIC_KEY, starkPublicKey);
    localStorage.setItem(WalletConsts.ETH_NETWORK, ethNetwork);
    setWalletAddress(localStorage.WALLET_ADDRESS);
    setEthNetwork(localStorage.ETH_NETWORK);
    setProviderPreference(localStorage.PROVIDER_PREFERENCE);
  }

  function logout() {
    localStorage.removeItem(WalletConsts.WALLET_ADDRESS);
    setWalletAddress(localStorage.WALLET_ADDRESS);
    setEthNetwork(localStorage.ETH_NOTWORK);
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
  );
};

export default ReflectWalletState;
