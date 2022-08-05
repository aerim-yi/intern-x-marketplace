import React from 'react';
import {
  ETHTokenType,
  Link
} from "@imtbl/imx-sdk";
import { Button } from 'react-bootstrap';
import { useWalletHook } from '../NavBar/useWallethook';


const LINK_URL = "https://link.ropsten.x.immutable.com";

const DepositFunction: React.FC = () => {
  const link = new Link(LINK_URL);

  const wallet = useWalletHook();

  function deposit(amount: string) {
    link.deposit({
      type: ETHTokenType.ETH,
      "amount": amount
    })
  }

  return (
    <div>
      <div>
        {wallet ? (
          <>
            <h3 style={{ marginTop: '50px' }}><strong>Deposit</strong></h3>
            <div style={{ display: "flex" }}>
              <Button style={{ marginRight: '15px' }} variant='info' onClick={() => deposit('0.5')}>Deposit 0.5 ETH</Button>
              <Button style={{ marginRight: '15px' }} variant='info' onClick={() => deposit('1')}>Deposit 1 ETH</Button>
              <Button variant='info' onClick={() => deposit('1.5')}>Deposit 1.5 ETH</Button>
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
