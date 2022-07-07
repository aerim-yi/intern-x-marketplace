import React from 'react';
import Card from '../Card/Card';
import './CollectionItem.css';

interface Props {
  title: string;
  amount: number;
  url: string;
}

const CollectionItem = (props: Props) => {
  return (
    <Card className='collection-item'>
      <div className='collection-item__description'>
        <h2>{props.title}</h2>
        <div><img alt="" src={props.url}/></div>
        <div className='collection-item__price'>{props.amount} ETH</div>
      </div>
    </Card>
  );
}

export default CollectionItem;
