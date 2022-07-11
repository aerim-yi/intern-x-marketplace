import {useEffect, useState} from "react";
 import {
   ETHTokenType,
   ImmutableXClient,
   Link
 } from "@imtbl/imx-sdk";

 enum WalletConsts {
   WALLET_ADDRESS = "WALLET_ADDRESS",
   STARK_PUBLIC_KEY = "STARK_PUBLIC_KEY",
   LINK_URL = "https://link.ropsten.x.immutable.com",
   API_URL = "https://api.ropsten.x.immutable.com/v1",
   ETH_NETWORK = "ETH_NETWORK",
 }

 const Wallet = () => {
   const link = new Link(WalletConsts.LINK_URL);

   const [walletAddress, setWalletAddress] = useState(
     localStorage.WALLET_ADDRESS
   );
   const [ethNetwork, setEthNetwork] = useState(localStorage.ETH_NETWORK);
   const [providerPreference, setProviderPreference] = useState(
     localStorage.PROVIDER_PREFERENCE
   );
   const [ethBalance, setEthBalance] = useState({});

   async function login() {
     const { address, starkPublicKey, ethNetwork } = await link.setup({});
     console.log("tedst");
     localStorage.setItem(WalletConsts.WALLET_ADDRESS, address);
     localStorage.setItem(WalletConsts.STARK_PUBLIC_KEY, starkPublicKey);
     localStorage.setItem(WalletConsts.ETH_NETWORK, ethNetwork);
     setWalletAddress(localStorage.WALLET_ADDRESS);
     setEthNetwork(localStorage.ETH_NETWORK);
     setProviderPreference(localStorage.PROVIDER_PREFERENCE);
   }

   function logout() {
     localStorage.removeItem(WalletConsts.WALLET_ADDRESS);
     setWalletAddress(localStorage.WALLET_ADDRESS);
     setEthNetwork(localStorage.ETH_NOTWORK);
     setProviderPreference(localStorage.PROVIDER_PREFERENCE);
   }

   // Get the user balances
   async function listUserBalances() {
     const address = localStorage.getItem("WALLET_ADDRESS") ?? "";
     const client = await ImmutableXClient.build({
       publicApiUrl: WalletConsts.API_URL,
     });

     const balance = await client.getBalance({
       user: address,
       tokenAddress: ETHTokenType.ETH,
     });
     setEthBalance(Number(balance.balance.toString()) / 1e18);
   }

   // @ts-ignore
   return (
     <div style={{padding: "0px 20px"}}>
       <div>
         <div>
           <h5>{walletAddress ? "Wallet connected" : "Connect your wallet"}</h5>
           {walletAddress ? (
             <>
               <p>
                 <strong>Wallet address: </strong>
                 {walletAddress}
               </p>
               <p>
                 <strong>Eth network: </strong>
                 {ethNetwork}
               </p>
               <p>
                 <strong>Provider reference: </strong>
                 {providerPreference}
               </p>
               <div
                 style={{
                   display: "flex",
                 }}
               >
                 <button onClick={logout}>Disconnect</button>
               </div>
             </>
           ) : (
             <div
               style={{
                 display: "flex",
               }}
             >
               <button onClick={login}>Connect</button>
             </div>
           )}
         </div>
       </div>
     </div>
   );
 }

 export default Wallet;
