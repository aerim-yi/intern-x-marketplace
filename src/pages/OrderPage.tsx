import HeaderBar from "../components/HeaderBar/HeaderBar"
import { useParams } from "react-router-dom"
import { Container, Row, Col } from "react-bootstrap";

interface Params {
    id: string
}

const OrderPage = () => {
    const params = useParams<Params>();
    console.log(params.id)
    //  Will use collection id to call orders API
    
    return (
        <>
            <HeaderBar />
            <Container>
                <Row>
                    <Col>
                        <h1> this is the NFT item page!</h1>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default OrderPage
