import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap'
import { getUserBalances } from '../../api/balances-api';
import { Balance } from '@imtbl/core-sdk'
import { utils, BigNumber } from "ethers";
import { Link, ImmutableXClient, ImmutableMethodResults, ERC721TokenType, ETHTokenType, ImmutableRollupStatus } from '@imtbl/imx-sdk';
import { useWalletHook } from '../../components/NavBar/useWallethook';
import Wallet from '../../components/NavBar/Wallet';
import WalletFeatures from '../../components/WalletFeatures/WalletFeatures';

interface BridgingProps {
    client: ImmutableXClient,
    linked: Link,
    wallet2: string
  }

export const WalletPage = ({client, linked, wallet2}: BridgingProps) => {
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

    // Withdraw Section



    // withdrawals
    const [preparingWithdrawals, setPreparingWithdrawals] = useState<ImmutableMethodResults.ImmutableGetWithdrawalsResult>(Object);
    const [readyWithdrawals, setReadyWithdrawals] = useState<ImmutableMethodResults.ImmutableGetWithdrawalsResult>(Object);
    const [completedWithdrawals, setCompletedWithdrawals] = useState<ImmutableMethodResults.ImmutableGetWithdrawalsResult>(Object);
    // eth
    const [depositAmount, setDepositAmount] = useState('');
    const [prepareAmount, setPrepareAmount] = useState('');
    // nft
    // const [depositTokenId, setDepositTokenId] = useState('');
    // const [depositTokenAddress, setDepositTokenAddress] = useState('');
    // const [prepareTokenId, setPrepareTokenId] = useState('');
    // const [prepareTokenAddress, setPrepareTokenAddress] = useState('');
    // const [completeTokenId, setCompleteTokenId] = useState('');
    // const [completeTokenAddress, setCompleteTokenAddress] = useState('');
    
    useEffect(() => {
        load()
    }, [])
    
    async function load(): Promise<void> {
        setPreparingWithdrawals(await client.getWithdrawals({
        user: wallet2,
        rollup_status: ImmutableRollupStatus.included
        })) // included in batch awaiting confirmation
        setReadyWithdrawals(await client.getWithdrawals({
        user: wallet2,
        rollup_status: ImmutableRollupStatus.confirmed,
        withdrawn_to_wallet: false
        })) // confirmed on-chain in a batch and ready to be withdrawn
        setCompletedWithdrawals(await client.getWithdrawals({
        user: wallet2,
        withdrawn_to_wallet: true
        })) // confirmed on-chain in a batch and already withdrawn to L1 wallet
    };

    // // prepare an NFT withdrawal
    // async function prepareWithdrawalNFT() {
    //     await link.prepareWithdrawal({
    //     type: ERC721TokenType.ERC721,
    //     tokenId: prepareTokenId,
    //     tokenAddress: prepareTokenAddress
    //     })
    // };

    // prepare an eth withdrawal
    async function prepareWithdrawalETH() {
        await linked.prepareWithdrawal({
        type: ETHTokenType.ETH,
        amount: prepareAmount,
        })
    };

    // // complete an NFT withdrawal
    // async function completeWithdrawalNFT() {
    //     await link.completeWithdrawal({
    //     type: ERC721TokenType.ERC721,
    //     tokenId: completeTokenId,
    //     tokenAddress: completeTokenAddress
    //     })
    // };

    // complete an eth withdrawal
    async function completeWithdrawalETH() {
        await linked.completeWithdrawal({
        type: ETHTokenType.ETH,
        })
    };

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
                                <div>
                                Prepare ETH for withdrawal (submit to be rolled up and confirmed on chain in the next batch):
                                <br/>
                                <label>
                                    Amount (ETH):
                                    <input type="text" value={prepareAmount} onChange={e => setPrepareAmount(e.target.value)} />
                                </label>
                                <button onClick={prepareWithdrawalETH}>Prepare ETH Withdrawal</button>
                                </div>
                                <br/><br/>
                                <div>
                                Complete ETH withdrawal (withdraws entire eth balance that is ready for withdrawal to L1 wallet):
                                <br/>
                                <button onClick={completeWithdrawalETH}>Complete ETH Withdrawal</button>
                                </div>
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
