import { useEffect, useState } from "react";
import { HeaderBar } from "../../components/HeaderBar/HeaderBar"
import { useParams } from "react-router-dom"
import { Container, Row, Col } from "react-bootstrap";
import { getOrders } from '../../api/orders-api'
import { Order } from '@imtbl/core-sdk'
import placeholderImg from '../../asset/placeholderImg.jpg'
import CollectionItem from "../../components/NFTCollection/CollectionItem";
import { utils, BigNumber } from "ethers";

interface Params {
    id: string
}

export const OrderPage = () => {
    const { id } = useParams<Params>();
    const [orders, setOrders] = useState<Order[]>()
    const noOrders = orders && orders.length === 0;

    useEffect(() => {
        getOrders(id).then((response) => {
            setOrders(response.result)
        })
    }, [])

    return (
        <>
            <HeaderBar />
            <Container>
                <Row>
                    {orders && orders.map((item: Order, index) => {
                        // Inspired from https://ethereum.stackexchange.com/questions/84004/ethers-formatetherwei-with-max-4-decimal-places
                        const price = BigNumber.from(item.buy.data.quantity);
                        let res = utils.formatEther(price);
                        res = (+res).toFixed(4);

                        return (
                            <Col xs={12} sm={6} md={4} key={index} data-testid="CollectionItem">
                                <CollectionItem
                                    url={item.sell.data.properties?.image_url || placeholderImg}
                                    name={item.sell.data.properties?.name}
                                    price={res}
                                    orderId={String(item.order_id)} />
                            </Col>
                        )
                    })}
                    {!orders && <h1>Loading...</h1>}
                    {noOrders && <h1>No orders...</h1>}
                </Row>
            </Container>
        </>
    )
}
