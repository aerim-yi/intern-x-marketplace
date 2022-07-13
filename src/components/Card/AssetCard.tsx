import React from 'react';
import './Card.css'
import { Card } from 'react-bootstrap'

interface Props {
    collectionName: string;
    itemName: string | null;
    src: string;
}

export const AssetCard = ({ collectionName, itemName, src }: Props) => {
    return (
        <Card>
            <Card.Img className='cardImg' variant="top" src={src} data-testid="AssetCard_Img" />
            <Card.Body>
                <Card.Title data-testid="AssetCard_Name">{itemName}</Card.Title>
                <Card.Text data-testid="AssetCard_CollectionName">
                    {collectionName}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}
