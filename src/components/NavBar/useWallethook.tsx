import React, { useEffect, useState } from "react";
import { ETHTokenType, ImmutableXClient, Link, LinkResults } from "@imtbl/imx-sdk";
import "./NavBar.css";

const enum URLs {
 
  LINK_URL = "https://link.ropsten.x.immutable.com",
  API_URL = "https://api.ropsten.x.immutable.com/v1",
  ETH_NETWORK = "ETH_NETWORK",
}

const WALLET_INFO = "WALLET_INFO";
// const WALLET_ADDRESS = "WALLET_ADDRESS";
// const STARK_PUBLIC_KEY = "STARK_PUBLIC_KEY";

const useWalletHook = () => {
  const link = new Link(URLs.LINK_URL);
  const [walletInfo, setWalletInfo] = useState< LinkResults.Setup >();

  async function login() {
    const walletInfo = await link.setup({});
    localStorage.setItem(WALLET_INFO, JSON.stringify(walletInfo));
    setWalletInfo(walletInfo);
  }

  function logout() {
    // localStorage.removeItem(WALLET_ADDRESS);
    // localStorage.removeItem(STARK_PUBLIC_KEY);
    localStorage.removeItem(WALLET_INFO);
    setWalletInfo(undefined);
  }

  function load(){
    const connectedWallet = localStorage.getItem(WALLET_INFO);
    if (connectedWallet != null) {
      setWalletInfo(JSON.parse(connectedWallet));
    }
  }

  return { walletInfo, login, logout, load }
}

export {useWalletHook};
