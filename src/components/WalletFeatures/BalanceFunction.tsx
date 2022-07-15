import React, {useEffect, useState} from 'react';
import {
  ETHTokenType,
  ImmutableXClient,
  Link
} from "@imtbl/imx-sdk";
import { useWalletHook } from '../NavBar/useWallethook';

const enum URLs {
  WALLET_ADDRESS = "WALLET_ADDRESS",
  STARK_PUBLIC_KEY = "STARK_PUBLIC_KEY",
  LINK_URL = "https://link.ropsten.x.immutable.com",
  API_URL = "https://api.ropsten.x.immutable.com/v1",
  ETH_NETWORK = "ETH_NETWORK",
}

const BalanceFunction : React.FC = () => {
  const link = new Link(URLs.LINK_URL);
  const { walletInfo, load } = useWalletHook();

  const [ethBalance, setEthBalance] = useState({});

   // Get the user balances
   async function listUserBalances() {
    // const walletInfo = JSON.parse(localStorage.getItem("WALLET_INFO") ?? "{}");
    const client = await ImmutableXClient.build({
      publicApiUrl: URLs.API_URL,
    });

    if (walletInfo?.address) {
      const balance = await client.getBalance({
        user: walletInfo?.address,
        tokenAddress: ETHTokenType.ETH,
      });
      setEthBalance(Number(balance.balance.toString()) / 1e18);
    } else {
      setEthBalance({});
    }
  }
  
  useEffect(() => {
    if (!walletInfo){
      load();
    }
    listUserBalances();
  }, [walletInfo]);

console.log(walletInfo);

return (
  <div>
    {walletInfo ? (
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
