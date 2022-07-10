import { useState, useEffect } from 'react';
import HeaderBar from '../../components/HeaderBar/HeaderBar';
import { Container, Row, Col } from 'react-bootstrap'
import { getUserAssets } from '../../api/assets-api';
import { Asset } from '@imtbl/core-sdk'

const AssetPage = () => {
    const walletAddress = localStorage.getItem('WALLET_ADDRESS') || ''
    const [userAssets, setUserAssets] = useState<Asset[]>([]);
    const [noAssets, setNoAssets] = useState(false)

    useEffect(() => {
        getUserAssets(walletAddress).then((response) => {
            setUserAssets(response.result)
            if (!response.result.length) {
                setNoAssets(true)
            }
        })
    }, [])

    return (
        <>
            <HeaderBar />
            <Container>
                <Row>
                    {!!walletAddress &&
                        <>
                            {!!userAssets.length && userAssets.map((item: Asset, index) => {
                                return (
                                    <>
                                        <h3>ASSETS will be displayed here</h3>
                                        <Col xs={12} sm={6} md={4} key={index}>
                                            {/* Asset cards will be displayed here */}
                                        </Col>
                                    </>
                                )
                            })}
                            {!userAssets.length && !noAssets && <h1>loading...</h1>}
                            {noAssets && <h1>No assets to show</h1>}
                        </>}
                    {!walletAddress && <h1>Connect the wallet first!</h1>}
                </Row>
            </Container>
        </>
    )
}

export default AssetPage;
