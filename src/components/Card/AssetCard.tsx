import React from 'react';
import './Card.css'
import { Card } from 'react-bootstrap'

interface Props {
    collectionName: string;
    itemName: string | null;
    src: string;
}

const AssetCard = (props: Props) => {
    return (
        <Card>
            <Card.Img className='cardImg' variant="top" src={props.src} />
            <Card.Body>
                <Card.Title>{props.itemName}</Card.Title>
                <Card.Text>
                    {props.collectionName}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default AssetCard;
