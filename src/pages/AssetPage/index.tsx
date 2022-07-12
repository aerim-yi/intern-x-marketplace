import { useState, useEffect } from 'react';
import HeaderBar from '../../components/HeaderBar/HeaderBar';
import { Container, Row, Col } from 'react-bootstrap'
import { getUserAssets } from '../../api/assets-api';
import { Asset } from '@imtbl/core-sdk'
import AssetCard from '../../components/Card/AssetCard'
import placeholderImg from '../../asset/placehoderImg.jpg'

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
                                        <Col xs={12} sm={6} md={4} key={index} data-testid="assetCard">
                                            <AssetCard src={item.image_url || placeholderImg} collectionName={item.collection.name} itemName={item.name} />
                                        </Col>
                                    </>
                                )
                            })}
                            {!userAssets.length && !noAssets && <h1>Loading...</h1>}
                            {noAssets && <h1>No assets to show</h1>}
                        </>}
                    {!walletAddress && <h1>Connect the wallet first!</h1>}
                </Row>
            </Container>
        </>
    )
}

export default AssetPage;