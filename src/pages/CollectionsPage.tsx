import { Fragment } from "react"
import HeaderBar from "../components/HeaderBar/HeaderBar"
import { Container, Row, Col } from 'react-bootstrap';

const CollectionsPage = () => {
    return (
        <Fragment>
            <HeaderBar />
            <Container>
                <Row>
                    <Col>
                        {/* This is where the cards will be displayed */}
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

export default CollectionsPage
