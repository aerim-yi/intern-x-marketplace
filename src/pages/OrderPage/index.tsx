import { useEffect, useState } from "react";
import { HeaderBar } from "../../components/HeaderBar/HeaderBar"
import { useParams } from "react-router-dom"
import NavBar from "../../components/NavBar/NavBar"
import { Container, Row, Col } from "react-bootstrap";
import { getOrders } from '../../api/orders-api'
import { Order } from '@imtbl/core-sdk'
import placeholderImg from '../../asset/placehoderImg.jpg'
import CollectionItem from "../../components/NFTCollection/CollectionItem";

interface Params {
    id: string
}

export const OrderPage = () => {
    const params = useParams<Params>();
    const [orders, setOrders] = useState<Order[]>([])
    const [noOrders, setNoOrders] = useState(false)

    useEffect(() => {
        getOrders(params.id).then((response) => {
            setOrders(response.result)
            //  If there is no order lets display a no orders message.
            if (!response.result.length) {
                setNoOrders(true)
            }
        })
    }, [])

    return (
        <>
            <NavBar />
            <HeaderBar />
            <Container>
                <Row>
                    {!!orders.length && orders.map((item: Order, index) => {
                        return (
                            <Col xs={12} sm={6} md={4} key={index} data-testid="CollectionItem">
                                <CollectionItem url={item.sell.data.properties?.image_url || placeholderImg}
                                    name={item.sell.data.properties?.name} />
                            </Col>
                        )
                    })}
                    {!orders.length && !noOrders && <h1>Loading...</h1>}
                    {noOrders && <h1>No orders...</h1>}
                </Row>
            </Container>
        </>
    )
}
