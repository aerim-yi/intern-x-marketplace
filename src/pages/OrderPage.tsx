import { useEffect, useState } from "react";
import HeaderBar from "../components/HeaderBar/HeaderBar"
import { useParams } from "react-router-dom"
import { Container, Row, Col, Button } from "react-bootstrap";
import { getOrders } from '../api/orders-api'
import { Order } from '@imtbl/core-sdk'
import { Card } from 'react-bootstrap'
import placeholderImg from '../asset/placehoderImg.jpg'
import { BigNumber } from '@ethersproject/bignumber';

interface Params {
    collectionId: string
}

const OrderPage = () => {
    const params = useParams<Params>();
    const [result, setResult] = useState<Order[]>([])

    useEffect(() => {
        getOrders(params.collectionId).then((response) => {
            console.log(response)
            setResult(response.result)
        })
    }, [])

    return (
        <>
            <HeaderBar />
            <Container>
                <Row>
                    {!!result.length && result.map((item: Order, index) => {
                        return (
                            <Col xs={12} sm={6} md={4} key={index}>
                                <Card>
                                    <Card.Img variant="top" src={item.sell.data.properties?.image_url || placeholderImg} />
                                    <Card.Body>
                                        <Card.Title>{item.sell.data.properties?.name}</Card.Title>
                                        <Card.Text>
                                            Sales Price: 10.80 ETH
                                            {/* Sales price: <span>{(BigNumber.from(item.buy.data.quantity) * Math.pow(10, -18)).toFixed(2)}</span> ETH */}
                                        </Card.Text>
                                        <Button variant="primary">Buy Now</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })}
                    {!result.length && <h1>Loading...</h1>}
                </Row>
            </Container>
        </>
    )
}

export default OrderPage
