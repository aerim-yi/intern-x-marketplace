import React, {useEffect, useState, createContext} from 'react';
import {
  ETHTokenType,
  ImmutableXClient,
  Link
} from "@imtbl/imx-sdk";
import "./NavBar.css"

interface IWalletContext {
    walletAddress : string
    ethNetwork : string
    providerPreference : string

}

const defaultState : IWalletContext = {
    walletAddress : "",
    ethNetwork: "",
    providerPreference: ""
}

export const WalletContext = createContext<IWalletContext>(defaultState);

const enum URLs {
    WALLET_ADDRESS = "WALLET_ADDRESS",
    STARK_PUBLIC_KEY = "STARK_PUBLIC_KEY",
    LINK_URL = "https://link.ropsten.x.immutable.com",
    API_URL = "https://api.ropsten.x.immutable.com/v1",
    ETH_NETWORK = "ETH_NETWORK",
  }

export const WalletProvider : React.FC = () => {
    const link = new Link(URLs.LINK_URL);

    const [walletAddress, setWalletAddress] = useState(
      localStorage.WALLET_ADDRESS
    );
    const [ethNetwork, setEthNetwork] = useState(localStorage.ETH_NETWORK);
    const [providerPreference, setProviderPreference] = useState(
      localStorage.PROVIDER_PREFERENCE
    );
    return(
        <WalletContext.Provider value = {{
            walletAddress,
            ethNetwork,
            providerPreference
        }}>
            {props.children}
        </WalletContext.Provider>
    ) 
}
