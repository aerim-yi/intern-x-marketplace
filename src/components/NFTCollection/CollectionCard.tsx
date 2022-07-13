import React from 'react';
import Card from '../Card/Card';
import './Collection.css';
import placeholderImg from '../../asset/placehoderImg.jpg'

interface Props {
  url: string,
  name: string
}

const CollectionCard = (props: Props) => {
  return (
    <Card className="collections" data-testid="CollectionCard">
      <img alt=""
        src={props.url}
        data-testid="CollectionCard__Img"
        // Load placeholder on error: https://stackoverflow.com/questions/34097560/react-js-replace-img-src-onerror
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src = placeholderImg;
        }}
      />
      <h5 data-testid="CollectionCard_Name">{props.name}</h5>
    </Card>
  );
}

export default CollectionCard;
