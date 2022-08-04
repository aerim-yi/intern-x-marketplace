import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap'
import { getUserBalances } from '../../api/balances-api';
import { Balance } from '@imtbl/core-sdk'
import { utils, BigNumber } from "ethers";
import { Link } from '@imtbl/imx-sdk';
import { useWalletHook } from '../../components/NavBar/useWallethook';
import Wallet from '../../components/NavBar/Wallet';
import WalletFeatures from '../../components/WalletFeatures/WalletFeatures';


export const WalletPage = () => {
    const [balances, setBalances] = useState<Balance[]>([]);
    const wallet = useWalletHook();

    const linkAddress = 'https://link.ropsten.x.immutable.com';
    const link = new Link(linkAddress);

    async function showUserHistory() {
        link.history({});
    }

    // Get the user balances
    useEffect(() => {
        if (wallet?.walletInfo?.address) {
            getUserBalances(wallet?.walletInfo?.address).then((response) => {
                setBalances(response.result)
            })
        } else {
            setBalances([]);
        }
    }, [wallet?.walletInfo?.address])


    return (
        <>
            <Container>
                <Row>
                    <Col>
                        {!!wallet?.walletInfo?.address ?
                            <>
                                <Wallet />
                                <h3 style={{ marginTop: '20px' }}> <strong>Balance</strong></h3>
                                {!!balances.length && balances.map((item: Balance, index) => {
                                    // Inspired from https://ethereum.stackexchange.com/questions/84004/ethers-formatetherwei-with-max-4-decimal-places
                                    const balance = BigNumber.from(item.balance);
                                    let res = utils.formatEther(balance);
                                    res = (+res).toFixed(4);
                                    // Inspired from https://ethereum.stackexchange.com/questions/84004/ethers-formatetherwei-with-max-4-decimal-places
                                    return (
                                        <h4 key={index}><strong>{item.symbol}</strong>{' '}{res}</h4> // need to improve this code
                                    )
                                })}
                                {!balances.length && <h1>No Balance</h1>}
                                <h3 style={{ marginTop: '50px' }}><strong>History</strong></h3>
                                <Button variant="info" onClick={showUserHistory}>Click here to see transactions</Button>
                                <WalletFeatures />
                            </> :
                            <>
                                {<h3>'You are not signed in'</h3>}
                            </>}
                    </Col>
                </Row>
            </Container>
        </>
    )
}
