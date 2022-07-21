import React from 'react';
import '../NFTCollection/Collection.css';
import { Card } from 'react-bootstrap'
import placeholderImg from '../../asset/placeholderImg.jpg'

interface Props {
    collectionName: string;
    itemName: string | null;
    src: string;
}

export const AssetCard = ({ collectionName, itemName, src }: Props) => {
    return (
        <Card className="collections">
            <div className="cardWrapper">
                <img
                    alt=""
                    src={src}
                    data-test-id="AssetCard_Img"
                    // Load placeholder on error: https://stackoverflow.com/questions/34097560/react-js-replace-img-src-onerror
                    onError={({ currentTarget }) => {
                        currentTarget.onerror = null;
                        currentTarget.src = placeholderImg;
                    }}
                />
            </div>
            <h5 data-test-id="AssetCard_Name" className="cardText">{itemName}</h5>
            <p data-test-id="AssetCard_CollectionName">
                {collectionName}
            </p>
        </Card>
    );
}
