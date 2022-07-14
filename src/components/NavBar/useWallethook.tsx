import React, { useEffect, useState } from "react";
import { ETHTokenType, ImmutableXClient, Link } from "@imtbl/imx-sdk";
import "./NavBar.css";

const enum URLs {
  WALLET_ADDRESS = "WALLET_ADDRESS",
  STARK_PUBLIC_KEY = "STARK_PUBLIC_KEY",
  LINK_URL = "https://link.ropsten.x.immutable.com",
  API_URL = "https://api.ropsten.x.immutable.com/v1",
  ETH_NETWORK = "ETH_NETWORK",
}


const useWallethook = () => {
  const link = new Link(URLs.LINK_URL);

  const [walletAddress, setWalletAddress] = useState(
    localStorage.WALLET_ADDRESS
  );
  const [ethNetwork, setEthNetwork] = useState(localStorage.ETH_NETWORK);
  const [providerPreference, setProviderPreference] = useState(
    localStorage.PROVIDER_PREFERENCE
  );

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

  return { walletAddress, ethNetwork, providerPreference, login, logout }
}
