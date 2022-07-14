import React from "react";
import Card from "../Card/Card";
import "./Collection.css";

interface Props {
  url: string;
  name: string;
}

const CollectionCard = (props: Props) => {
  return (
    <Card className="collections" data-testid="collectionCard">
      <img alt="" src={props.url} />
      <h5>{props.name}</h5>
    </Card>
  );
};

export default CollectionCard;
