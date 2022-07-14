import { useEffect, useState } from "react"
import { Container, Row, Col } from 'react-bootstrap';
import { Collection } from "@imtbl/core-sdk";
import { getCollections } from "../../api/collections-api";
import { Link } from "react-router-dom";
import placeholderImg from '../../asset/placeholderImg.jpg';
import CollectionCard from '../../components/NFTCollection/CollectionCard'
import Wallet from "../../components/NavBar/Wallet";

interface Props {
    walletAddress: string | undefined;
}
export const CollectionsPage: React.FC<Props> = ({ walletAddress }) => {
    const [collections, setCollections] = useState<Collection[]>([])

    useEffect(() => {
        getCollections().then((response) => {
            setCollections(response.result)
        })
    }, [])

    return (
        <>
            <Wallet walletAddress={walletAddress} />
            <Container>
                <Row>
                    {!!collections.length && collections.map((item: Collection, index) => {
                        return (
                            <Col xs={12} sm={6} md={4} key={index} data-testid="CollectionCard">
                                <Link to={`/collection/` + item.address} style={{ textDecoration: 'none', color: 'black' }}>
                                    <CollectionCard name={item.name} url={item.collection_image_url || placeholderImg} />
                                </Link>
                            </Col>
                        )
                    })}
                    {!collections.length && <h1>Loading...</h1>}
                </Row>
            </Container>
        </>
    )
}
