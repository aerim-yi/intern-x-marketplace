import React, {useEffect, useState} from 'react';
import {
  ETHTokenType,
  ImmutableXClient,
  Link
} from "@imtbl/imx-sdk";

const enum URLs {
  WALLET_ADDRESS = "WALLET_ADDRESS",
  STARK_PUBLIC_KEY = "STARK_PUBLIC_KEY",
  LINK_URL = "https://link.ropsten.x.immutable.com",
  API_URL = "https://api.ropsten.x.immutable.com/v1",
  ETH_NETWORK = "ETH_NETWORK",
}

const WalletFunctions : React.FC = () => {
  const link = new Link(URLs.LINK_URL);

  const [ethBalance, setEthBalance] = useState({});
  const [walletAddress, setWalletAddress] = useState(
    localStorage.WALLET_ADDRESS
  );
  const [ethNetwork, setEthNetwork] = useState(localStorage.ETH_NETWORK);
  const [providerPreference, setProviderPreference] = useState(
    localStorage.PROVIDER_PREFERENCE
  );

   // Get the user balances

  function prepareWithdrawal() {
    console.log("--- prepareWithdrawal clicked");

    link.prepareWithdrawal({
      type: ETHTokenType.ETH,
      amount: "0.01", //The amount of the token to withdraw
    });
  }

  function completeWithdrawal() {
    console.log("--- completeWithdrawal clicked");

    link.completeWithdrawal({
      type: ETHTokenType.ETH,
    });
  }
  
return (
  <div>
    {walletAddress ? (
  <>
    <strong>Withdrawal</strong>
    <div style={{ display: "flex" }}>
      <button onClick={prepareWithdrawal}>Pepare Withdrawal (0.01)</button>
    </div>
    <div style={{ display: "flex" }}>
      <button onClick={completeWithdrawal}>Complete Withdrawal</button>
    </div>
  </>
  ) : (
    <div>
    </div>
  )}
  </div>
  );
}



export default WalletFunctions;
