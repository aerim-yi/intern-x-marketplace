import React from 'react';

import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props: any) => {
  return (
    <Card className='expense-item'>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>{props.amount} ETH</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;