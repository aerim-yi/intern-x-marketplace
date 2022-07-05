import React from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props: any) => {
  return (
    <Card className="expenses">
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
      />
    </Card>
  );
}

export default Expenses;