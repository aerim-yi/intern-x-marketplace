import React, {useEffect, useState} from 'react';
import {
  ETHTokenType,
  ImmutableXClient,
  Link
} from "@imtbl/imx-sdk";
import { useWalletHook } from '../NavBar/useWallethook';

const LINK_URL = "https://link.ropsten.x.immutable.com";

const DepositFunction : React.FC = () => {
  const link = new Link(LINK_URL);

  const { walletInfo, load } = useWalletHook();

  function deposit() {
    console.log("--- deposit clicked");

    // Deposit ETH into IMX
    link.deposit({
      type: ETHTokenType.ETH,
      amount: "0.5",
    });
  }
  
  useEffect(() => {
    if (!walletInfo){
      load();
    }
    deposit();
  }, [walletInfo]);

return (
  <div>
    <div>
    {walletInfo ? (
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

export default DepositFunction;
