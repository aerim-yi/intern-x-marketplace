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
export { }
