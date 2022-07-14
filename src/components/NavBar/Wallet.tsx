import React, { useEffect, useState } from 'react';
import {
  ETHTokenType,
  ImmutableXClient,
  Link
} from "@imtbl/imx-sdk";
import "./NavBar.css"
import { useWalletHook } from "./useWallethook"

const enum URLs {
  WALLET_ADDRESS = "WALLET_ADDRESS",
  STARK_PUBLIC_KEY = "STARK_PUBLIC_KEY",
  LINK_URL = "https://link.ropsten.x.immutable.com",
  API_URL = "https://api.ropsten.x.immutable.com/v1",
  ETH_NETWORK = "ETH_NETWORK",
}
interface Props {
  walletAddress: string | undefined;
}
const Wallet: React.FC<Props> = ({ walletAddress }) => {
  return (
    <div>
      {walletAddress ? (
        <>
          <h3 style={{ color: "white", marginTop: '20px', textAlign: "center" }}>
            <strong>Wallet address: </strong>
            {walletAddress}
          </h3>
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
        </div>
      )
      }
    </div >
  )
};

export default Wallet;
