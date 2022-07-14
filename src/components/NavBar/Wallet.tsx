import React, {useEffect, useState} from 'react';
import {
  ETHTokenType,
  ImmutableXClient,
  Link
} from "@imtbl/imx-sdk";
import "./NavBar.css"
import {useWalletHook} from "./useWallethook"

const enum URLs {
  WALLET_ADDRESS = "WALLET_ADDRESS",
  STARK_PUBLIC_KEY = "STARK_PUBLIC_KEY",
  LINK_URL = "https://link.ropsten.x.immutable.com",
  API_URL = "https://api.ropsten.x.immutable.com/v1",
  ETH_NETWORK = "ETH_NETWORK",
}

console.log(localStorage.WALLET_INFO)

const Wallet : React.FC = () => {

  const { walletInfo, login, logout,} = useWalletHook();

  return (
    <div>
      {walletInfo ? (
        <>
          <button onClick={logout} className = "location">Disconnect</button>
          <p>
            <strong>Wallet address: </strong>
            {walletInfo.address}
          </p>
          <p>
            <strong>Eth network: </strong>
            {walletInfo.ethNetwork}
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
