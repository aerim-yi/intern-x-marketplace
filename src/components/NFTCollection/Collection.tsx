import CollectionItem from './CollectionItem';
import Card from '../Card/Card';
import './Collection.css';

interface CollectionsProps {
  items: {title: string; amount: number; url: string;}[]
}

const Collections = (props: CollectionsProps) => {
  return (
    <Card className="collections">
      <CollectionItem
        title ={props.items[0].title}
        amount={props.items[0].amount}
        url = {props.items[0].url} 
      />
    </Card>
  );
}

export default Collections;
