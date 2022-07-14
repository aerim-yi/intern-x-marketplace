import { useState, useEffect } from 'react';
import { HeaderBar } from '../../components/HeaderBar/HeaderBar';
import { Container, Row, Col } from 'react-bootstrap'
import { getUserAssets } from '../../api/assets-api';
import { Asset } from '@imtbl/core-sdk'
import { AssetCard } from '../../components/Card/AssetCard'
import placeholderImg from '../../asset/placeholderImg.jpg'

export const AssetPage = () => {
    const walletAddress = localStorage.getItem('WALLET_ADDRESS') || ''
    const [userAssets, setUserAssets] = useState<Asset[]>();
    const noAssets = userAssets && userAssets.length === 0;

    useEffect(() => {
        getUserAssets(walletAddress).then((response) => {
            setUserAssets(response.result)
        })
    }, [])

    return (
        <>
            <HeaderBar />
            <Container>
                <Row>
                    {walletAddress &&
                        <>
                            {userAssets && userAssets.map((item: Asset, index) => (
                                <Col xs={12} sm={6} md={4} key={index} data-testid="AssetCard">
                                    <AssetCard src={item.image_url || placeholderImg} collectionName={item.collection.name} itemName={item.name} />
                                </Col>
                            ))}
                            {!userAssets && <h1>Loading...</h1>}
                            {noAssets && <h1>No assets to show</h1>}
                        </>}
                    {!walletAddress && <h1>Connect the wallet first!</h1>}
                </Row>
            </Container>
        </>
    )
}
