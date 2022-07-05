import { Fragment, useEffect, useState } from "react"
import { Container, Row, Col } from 'react-bootstrap';
import { Collection } from "@imtbl/core-sdk";
import HeaderBar from "../components/HeaderBar/HeaderBar"
import GetYourCollections from "../api/collections-api";

const CollectionsPage = () => {
    const [result, setResult] = useState<[] | Array<Collection>>([])

    // inspired by this Stackflow answer:https://stackoverflow.com/questions/53332321/react-hook-warnings-for-async-function-in-useeffect-useeffect-function-must-ret
    useEffect(() => {
        async function fetchCollection() {
            let response = await GetYourCollections()
            setResult(response.result)
        }
        fetchCollection()
    }, [])

    return (
        <Fragment>
            <HeaderBar />
            <Container>
                <Row>
                    {result.length > 0 && result.map((item: Collection) => {
                        return (
                            <Col xs={12} md={4}>
                                {/* We will add card component here */}
                            </Col>
                        )
                    })}
                    {result.length === 0 && <h1> loading.... </h1>}
                </Row>
            </Container>
        </Fragment>
    )
}

export default CollectionsPage
