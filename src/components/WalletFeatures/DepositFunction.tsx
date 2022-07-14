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

  function deposit() {
    console.log("--- deposit clicked");

    // Deposit ETH into IMX
    link.deposit({
      type: ETHTokenType.ETH,
      amount: "0.5",
    });
  }
  
return (
  <div>
    <div>
    {walletAddress ? (
      <>
      <strong>Deposit</strong>
        <div style={{ display: "flex" }}>
          <button onClick={deposit}>Deposit (0.5)</button>
        </div>
      </>
    ) : (
      <div>
      </div>
    )}
    </div>
  </div>
  );
  
}

export default WalletFunctions;
