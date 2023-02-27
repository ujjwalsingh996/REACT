import React, { useState} from "react";
import NewExpense from "./Components/NewExpense/NewExpense";

import Expenses from "./Components/Expenses/Expenses";
const dummyExpenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
    location: 'Delhi'
  },
  { 
    id: 'e2', 
    title: 'New TV', 
    amount: 799.49, 
    date: new Date(2021, 2, 12) ,
    location: 'Mumbai'
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
    location: 'Bengaluru'
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
    location: 'Hyderabad'
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(dummyExpenses);


  const addExpenseHandler = (expense) => {  
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    });
  }
  return(
    <div>
      <NewExpense onAddExpense= {addExpenseHandler}/>
      <Expenses items={expenses}/>
      
    </div>
  )

}

export default App;
