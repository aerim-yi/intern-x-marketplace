import { useEffect, useState } from "react"
import { Container, Row, Col } from 'react-bootstrap';
import { Collection } from "@imtbl/core-sdk";
import HeaderBar from "../../components/HeaderBar/HeaderBar"
import NavBar from "../../components/NavBar/NavBar"
import { getCollections } from "../../api/collections-api";
import { Link } from "react-router-dom";
import placeholderImg from '../../asset/placehoderImg.jpg';
import CollectionCard from '../../components/NFTCollection/CollectionCard'

const CollectionsPage = () => {
    const [collections, setCollections] = useState<Collection[]>([])

    useEffect(() => {
        getCollections().then((response) => {
            setCollections(response.result)
        })
    }, [])

    return (
        <>
            <HeaderBar />
            <NavBar />
            <Container>
                <Row>
                    {!!collections.length && collections.map((item: Collection, index) => {
                        return (
                            <Col xs={12} sm={6} md={4} key={index} data-testid="collectionCard">
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

export default CollectionsPage
