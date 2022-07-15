import React, { useState } from 'react'
import { Link, LinkResults } from "@imtbl/imx-sdk";

const enum URLs {
    WALLET_ADDRESS = "WALLET_ADDRESS",
    STARK_PUBLIC_KEY = "STARK_PUBLIC_KEY",
    LINK_URL = "https://link.ropsten.x.immutable.com",
    API_URL = "https://api.ropsten.x.immutable.com/v1",
    ETH_NETWORK = "ETH_NETWORK",
}

type WalletContextType = {
    walletInfo: LinkResults.Setup | undefined
    login: () => void
    logout: () => void
}

export const WalletContext = React.createContext<WalletContextType | null>(null)
export const WalletProvider = ({ children }: { children: JSX.Element[] }) => {
    const link = new Link(URLs.LINK_URL);
    const [walletInfo, setWalletInfo] = useState<LinkResults.Setup>();

    async function login() {
        const walletInfo = await link.setup({});
        localStorage.setItem(URLs.WALLET_ADDRESS, JSON.stringify(walletInfo));
        setWalletInfo(walletInfo);
    }

    function logout() {
        localStorage.removeItem(URLs.WALLET_ADDRESS);
        setWalletInfo(localStorage.WALLET_INFO)
    }

    return <WalletContext.Provider value={{ walletInfo, login, logout }}>{children}</WalletContext.Provider>
}
