import React from 'react';
import './Card.css'
import { Card } from 'react-bootstrap'

interface Props {
    collectionName: string;
    itemName: string | null;
    src: string;
}

const AssetCard = ({ collectionName, itemName, src }: Props) => {
    return (
        <Card>
            <Card.Img className='cardImg' variant="top" src={src} data-testid="assetCardImg" />
            <Card.Body>
                <Card.Title data-testid="assetCardName">{itemName}</Card.Title>
                <Card.Text data-testid="assetCardCollectionName">
                    {collectionName}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default AssetCard;
