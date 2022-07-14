import React, { useEffect, useState } from "react";
import { ETHTokenType, ImmutableXClient, Link, LinkResults } from "@imtbl/imx-sdk";
import "./NavBar.css";

const enum URLs {
  WALLET_ADDRESS = "WALLET_ADDRESS",
  STARK_PUBLIC_KEY = "STARK_PUBLIC_KEY",
  LINK_URL = "https://link.ropsten.x.immutable.com",
  API_URL = "https://api.ropsten.x.immutable.com/v1",
  ETH_NETWORK = "ETH_NETWORK",
}

const useWalletHook = () => {
  const link = new Link(URLs.LINK_URL);
  const [walletInfo, setWalletInfo] = useState< LinkResults.Setup >();

  async function login() {
    const walletInfo = await link.setup({});
    localStorage.setItem("walletInfo", JSON.stringify(walletInfo));
    setWalletInfo(walletInfo);
  }

  function logout() {
    localStorage.removeItem(URLs.WALLET_ADDRESS);
    setWalletInfo(localStorage.WALLET_INFO)
  }

  return { walletInfo, login, logout }
}

export {useWalletHook};
