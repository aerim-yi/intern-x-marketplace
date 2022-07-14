import React, {useEffect, useState} from 'react';
import {
  ETHTokenType,
  ImmutableXClient,
  Link
} from "@imtbl/imx-sdk";
import "./WalletFeatures.css"

const enum URLs {
  WALLET_ADDRESS = "WALLET_ADDRESS",
  STARK_PUBLIC_KEY = "STARK_PUBLIC_KEY",
  LINK_URL = "https://link.ropsten.x.immutable.com",
  API_URL = "https://api.ropsten.x.immutable.com/v1",
  ETH_NETWORK = "ETH_NETWORK",
}

const BalanceFunction : React.FC = () => {
  const link = new Link(URLs.LINK_URL);

  const [ethBalance, setEthBalance] = useState({});
  const [walletAddress, setWalletAddress] = useState(
    localStorage.WALLET_ADDRESS
  );

   // Get the user balances
   async function listUserBalances() {
    const address = localStorage.getItem("WALLET_ADDRESS") ?? "";
    const client = await ImmutableXClient.build({
      publicApiUrl: URLs.API_URL,
    });

    const balance = await client.getBalance({
      user: address,
      tokenAddress: ETHTokenType.ETH,
    });
    setEthBalance(Number(balance.balance.toString()) / 1e18);
  }
  
return (
  <div>
    {walletAddress ? (
      <>
      <strong>Balance</strong>
        <p>{ethBalance ? `${ethBalance}` : ""}</p>
      </>
      ) : (
        <div>
        </div>
    )}
  </div>
  );
}



export default BalanceFunction;
