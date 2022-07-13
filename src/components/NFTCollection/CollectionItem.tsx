import React from 'react';
import Card from '../Card/Card';
import './Collection.css';
import { Button } from 'react-bootstrap'
import { Link } from '@imtbl/imx-sdk';
import placeholderImg from '../../asset/placeholderImg.jpg'

interface Props {
  name: string | null | undefined;
  url: string;
  price: string;
  orderId: string;
}

const CollectionItem = ({ name, url, price, orderId }: Props) => {
  const linkAddress = 'https://link.ropsten.x.immutable.com';
  const link = new Link(linkAddress);

  async function buyItem(orderId: string) {
    try {
      console.log(`orderId: ${orderId}`)
      await link.buy({ orderIds: [orderId] });
    } catch (e) {
      console.log(`link buy error: ${e}`)
    }

  }
  return (
    <Card className="collections">
      <img
        alt=""
        src={url}
        data-testid="CollectionItem_Img"
        // Load placeholder on error: https://stackoverflow.com/questions/34097560/react-js-replace-img-src-onerror
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src = placeholderImg;
        }}
      />
      <h5 data-testid="CollectionItem_Name">{name}</h5>
      <p>Sales Price: {price} ETH</p>
      <Button variant="info" onClick={() => buyItem(orderId)} >Buy Now</Button>
    </Card>
  );
}

export default CollectionItem;
