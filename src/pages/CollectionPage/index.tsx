import { useEffect, useState } from "react"
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Collection } from "@imtbl/core-sdk";
import HeaderBar from "../../components/HeaderBar/HeaderBar"
import { getCollections } from "../../api/collections-api";
import { Link } from "react-router-dom";
import placeholderImg from '../../asset/placehoderImg.jpg';

const CollectionsPage = () => {
    const [result, setResult] = useState<Collection[]>([])

    useEffect(() => {
        getCollections().then((response) => {
            setResult(response.result)
        })
    }, [])

    return (
        <>
            <HeaderBar />
            <Container>
                <Row>
                    {!!result.length && result.map((item: Collection, index) => {
                        return (
                            <Col xs={12} sm={6} md={4} key={index}>
                                <Link to={`/collection/` + item.address} style={{ textDecoration: 'none', color: 'black' }}>
                                    <Card data-testid="collectionCard">
                                        <Card.Img variant="top" src={item.collection_image_url || placeholderImg} />
                                        <Card.Body>
                                            <Card.Title>{item.name}</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                        )
                    })}
                    {!result.length && <h1>Loading...</h1>}
                </Row>
            </Container>
        </>
    )
}

export default CollectionsPage
