import { useState, useEffect } from "react";
import HeaderBar from "../components/HeaderBar/HeaderBar"
import { useParams } from "react-router-dom"
import { getOrders } from "../api/orders-api";
import { Container, Row, Col } from "react-bootstrap";
import { Order } from '@imtbl/core-sdk'

const OrderPage = () => {
    const params = useParams();
    const [result, setResult] = useState<Order[]>([])

    // inspired by this Stackflow answer:https://stackoverflow.com/questions/53332321/react-hook-warnings-for-async-function-in-useeffect-useeffect-function-must-ret
    // useEffect(() => {
    //     async function fetchCollection() {
    //         let response = await getOrders(params)
    //         console.log('response', response)
    //         setResult(response.result)
    //     }
    //     fetchCollection()
    // }, [])
    return (
        <>
            <HeaderBar />
            <Container>
                <Row>
                    {result.length > 0 && result.map((item: Order) => {
                        <div>
                            <h1>I am the NFT sale item page</h1>
                        </div>
                        return (
                            <Col xs={12} md={4}>
                                {/* item cards will be displayed here */}
                            </Col>
                        )
                    })}
                    {result.length === 0 && <h1> loading.... </h1>}
                </Row>
            </Container>



        </>
    )
}

export default OrderPage
