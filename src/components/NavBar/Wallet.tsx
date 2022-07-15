import React, {useEffect, useState} from 'react';
import {
  ETHTokenType,
  ImmutableXClient,
  Link
} from "@imtbl/imx-sdk";
import "./NavBar.css"
import {useWalletHook} from "./useWallethook"

const Wallet : React.FC = () => {

  const { walletInfo, login, logout, load } = useWalletHook();

  useEffect(() => {
    load();
  }, [walletInfo]);

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
