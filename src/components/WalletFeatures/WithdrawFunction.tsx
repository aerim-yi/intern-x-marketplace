// @ts-nocheck
import { Link, ImmutableXClient, ImmutableMethodResults, ERC721TokenType, ETHTokenType, ImmutableRollupStatus  } from '@imtbl/imx-sdk';
import { useEffect, useState } from 'react';

interface BridgingProps {
  client: ImmutableXClient,
  link: Link,
  wallet: string
}

const WithdrawFunction = ({client, link, wallet}: BridgingProps) => {
  // withdrawals
  const [preparingWithdrawals, setPreparingWithdrawals] = useState<ImmutableMethodResults.ImmutableGetWithdrawalsResult>(Object);
  const [readyWithdrawals, setReadyWithdrawals] = useState<ImmutableMethodResults.ImmutableGetWithdrawalsResult>(Object);
  const [completedWithdrawals, setCompletedWithdrawals] = useState<ImmutableMethodResults.ImmutableGetWithdrawalsResult>(Object);
  // eth
  const [depositAmount, setDepositAmount] = useState('');
  const [prepareAmount, setPrepareAmount] = useState('');

  useEffect(() => {
    load()
  }, [])

  async function load(): Promise<void> {
    setPreparingWithdrawals(await client.getWithdrawals({
      user: wallet,
      rollup_status: ImmutableRollupStatus.included
    })) // included in batch awaiting confirmation
    setReadyWithdrawals(await client.getWithdrawals({
      user: wallet,
      rollup_status: ImmutableRollupStatus.confirmed,
      withdrawn_to_wallet: false
    })) // confirmed on-chain in a batch and ready to be withdrawn
    setCompletedWithdrawals(await client.getWithdrawals({
      user: wallet,
      withdrawn_to_wallet: true
    })) // confirmed on-chain in a batch and already withdrawn to L1 wallet
  };

  // deposit eth
  async function depositETH() {
    await link.deposit({
      type: ETHTokenType.ETH,
      amount: depositAmount,
    })
  };

  // prepare an eth withdrawal
  async function prepareWithdrawalETH() {
    // await link.prepareWithdrawal({
    //   type: ETHTokenType.ETH,
    //   amount: prepareAmount,
    // })

    // Initialize Link
    let link = new Link('https://link.ropsten.x.immutable.com')
    
    try{
      // Call the method
      let  result= await link.prepareWithdrawal({
        "type": "ETH",
        "amount": "2"
      })
      // Print the result
      console.log(result)
    }catch(error){
      // Catch and print out the error
      console.error(error)
    }
  };

  // complete an eth withdrawal
  async function completeWithdrawalETH() {
    await link.completeWithdrawal({
      type: ETHTokenType.ETH,
    })
  };

  return (
    <div>
      <div>
        <b>ETH:</b>
        <br/><br/>
        <div>
          <b>Prepare ETH Withdraw</b> <br/>(submit to be rolled up and confirmed on chain in the next batch):
          <br/><br/>
          <label>
            Amount (ETH):
            <input type="text" value={prepareAmount} onChange={e => setPrepareAmount(e.target.value)} />
          </label>
          <button onClick={prepareWithdrawalETH}>Prepare ETH Withdrawal</button>
        </div>
        <br/>
        <div>
        <b>Complete ETH withdrawal</b> <br/>(withdraws entire eth balance that is ready for withdrawal to L1 wallet):
          <br/><br/>
          <button onClick={completeWithdrawalETH}>Complete ETH Withdrawal</button>
        </div>
      </div>
      <br/><br/><br/>
      <div>
        <b>Withdrawals being prepared:</b>
        {JSON.stringify(preparingWithdrawals)}
      </div>
      <br/>
      <div>
        <b>Ready for withdrawal:</b>
        {JSON.stringify(readyWithdrawals)}
      </div>
      <br/>
      <div>
        <b>Withdrawn to wallet:</b>
        {JSON.stringify(completedWithdrawals)}
      </div>
    </div>
  );
}

export default WithdrawFunction;




// import React, {useEffect, useState} from 'react';
// import {
//   ETHTokenType,
//   ImmutableXClient,
//   Link
// } from "@imtbl/imx-sdk";
// import { useWalletHook } from '../NavBar/useWallethook';

// const LINK_URL = "https://link.ropsten.x.immutable.com";

// // FC for Wallet

// const WithdrawFunction : React.FC = () => {
//   const link = new Link(LINK_URL);

//   // const { walletInfo, load } = useWalletHook();
//   const wallet = useWalletHook();

//   function prepareWithdrawal() {
//     console.log("--- prepareWithdrawal clicked");

//     link.prepareWithdrawal({
//       type: ETHTokenType.ETH,
//       amount: "0.01", //The amount of the token to withdraw
//     });
//   }

//   function completeWithdrawal() {
//     console.log("--- completeWithdrawal clicked");

//     link.completeWithdrawal({
//       type: ETHTokenType.ETH,
//     });
//   }

//   useEffect(() => {
//     if (!walletInfo){
//       load();
//     }
//     prepareWithdrawal();
//     completeWithdrawal();
//   }, [walletInfo]);

// return (
//   <div>
//     {walletInfo ? (
//   <>
//     <strong>Withdrawal</strong>
//     <div style={{ display: "flex" }}>
//       <button onClick={prepareWithdrawal}>Pepare Withdrawal (0.01)</button>
//     </div>
//     <div style={{ display: "flex" }}>
//       <button onClick={completeWithdrawal}>Complete Withdrawal</button>
//     </div>
//   </>
//   ) : (
//     <div>
//     </div>
//   )}
//   </div>
//   );
// }

// export default WithdrawFunction;

export {}
