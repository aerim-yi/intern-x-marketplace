import React from 'react';
import Card from '../Card/Card';
import './Collection.css';
import { Button } from 'react-bootstrap'

interface Props {
  name: string | null | undefined;
  url: string;
  price: string;
}

const CollectionItem = ({ name, url, price }: Props) => {
  return (
    <Card className="collections">
      <img alt="" src={url} data-testid="CollectionItem_Img" />
      <h5 data-testid="CollectionItem_Name">{name}</h5>
      <p>Sales Price: {price} ETH</p>
      <Button variant="info">Buy Now</Button>
    </Card>
  );
}

export default CollectionItem;
