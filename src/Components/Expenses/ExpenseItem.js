import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";
import "./ExpenseItem.css";


const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);


  const clickHandler = () => {
    setTitle('Updated!');
    console.log(title);
  };

  const[amount, setAmount] = useState(props.amount)

  const changeHandler = () => {
    setAmount(100);
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        title={title}
        location={props.location}
        amount={amount}
      />
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={changeHandler}>Change Amount</button>
    </Card>
  );
};

export default ExpenseItem;
