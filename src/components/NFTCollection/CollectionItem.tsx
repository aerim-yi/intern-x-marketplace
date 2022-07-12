import React from 'react';
import Card from '../Card/Card';
import './Collection.css';
import { Button } from 'react-bootstrap'

interface Props {
  name: string | null | undefined;
  url: string;
}

const CollectionItem = (props: Props) => {
  return (
    <Card className="collections">
      <img alt="" src={props.url} data-testid="orderCardImg"/>
      <h5 data-testid="orderCardName">{props.name}</h5>
      <p>Sales Price: 10.80 ETH</p>
      <Button variant="info">Buy Now</Button>
    </Card>
  );
}

export default CollectionItem;
