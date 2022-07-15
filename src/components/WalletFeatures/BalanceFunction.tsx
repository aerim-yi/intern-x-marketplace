// import React, {useEffect, useState} from 'react';
// import {
//   ETHTokenType,
//   ImmutableXClient,
//   Link
// } from "@imtbl/imx-sdk";
// import { useWalletHook } from '../NavBar/useWallethook';

// const API_URL = "https://api.ropsten.x.immutable.com/v1";

// const BalanceFunction : React.FC = () => {

//   const { walletInfo, load } = useWalletHook();

//   const [ethBalance, setEthBalance] = useState({});

//    // Get the user balances
//    async function listUserBalances() {
//     const client = await ImmutableXClient.build({
//       publicApiUrl: API_URL,
//     });

//     if (walletInfo?.address) {
//       const balance = await client.getBalance({
//         user: walletInfo?.address,
//         tokenAddress: ETHTokenType.ETH,
//       });
//       setEthBalance(Number(balance.balance.toString()) / 1e18);
//     } else {
//       setEthBalance({});
//     }
//   }

//   useEffect(() => {
//     if (!walletInfo){
//       load();
//     }
//     listUserBalances();
//   }, [walletInfo]);

// return (
//   <div>
//     {walletInfo ? (
//         <>
//         <strong>Balance</strong>
//           <p>{ethBalance ? `${ethBalance}` : ""}</p>
//         </>
//       ) : (
//         <div>
//         </div>
//     )}
//   </div>
//   );
// }

// export default BalanceFunction;
export { }
