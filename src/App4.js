import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import ExpenseItem from "./Components/Expense/ExpenseItem.js";
import Expenses from "./Components/Expense/Expenses.js";
import NewExpense from "./Components/NewExpense/NewExpense.js";

function App4(props) {
  return (
    <div>
      <span>{props.title}</span>

      <span>{props.date}</span>

      <span>{props.amount}</span>
    </div>
  );
}

export default App4;
