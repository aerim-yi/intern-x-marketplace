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
  const [walletInfo, setWalletInfo] = useState(JSON.parse(localStorage.WALLET_INFO));

  const [walletAddress, setWalletAddress] = useState(
    localStorage.WALLET_ADDRESS
  );
  const [ethNetwork, setEthNetwork] = useState(localStorage.ETH_NETWORK);
  const [providerPreference, setProviderPreference] = useState(
    localStorage.PROVIDER_PREFERENCE
  );

  async function login() {
    const walletInfo = await link.setup({});
    localStorage.setItem("walletInfo", JSON.stringify(walletInfo));
    setWalletInfo(walletInfo);
  }

  function logout() {
    localStorage.removeItem(URLs.WALLET_ADDRESS);
    setWalletAddress(localStorage.WALLET_ADDRESS);
    setEthNetwork(localStorage.ETH_NETWORK);
    setProviderPreference(localStorage.PROVIDER_PREFERENCE);
  }

  return { walletInfo, login, logout }
}
