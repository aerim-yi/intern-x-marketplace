import React from 'react';
import Card from '../Card/Card';
import './Collection.css';

interface Props {
  url: string,
  name: string
}

const CollectionCard = (props: Props) => {
  return (
    <Card className="collections" data-testid="CollectionCard">
      <img alt="" src={props.url} data-testid="CollectionCard__Img" />
      <h5 data-testid="CollectionCard_Name">{props.name}</h5>
    </Card>
  );
}

export default CollectionCard;
