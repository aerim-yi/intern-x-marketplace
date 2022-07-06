import { useEffect, useState } from "react"
import { Container, Row, Col } from 'react-bootstrap';
import { Collection } from "@imtbl/core-sdk";
import HeaderBar from "../components/HeaderBar/HeaderBar"
import { getCollections } from "../api/collections-api";
import { Link } from "react-router-dom";

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
                    {!!result.length && result.map((item: Collection) => {
                        return (
                            <Col xs={12} md={4}>
                                <Link to={`/collection/` + item.address} style={{ textDecoration: 'none', color: 'black' }}>
                                    {/* cards will be displayed here */}
                                </Link>
                            </Col>
                        )
                    })}
                    {!result.length && <h1> loading.... </h1>}
                </Row>
            </Container>
        </>
    )
}

export default CollectionsPage
