import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import ExpenseItem from "./Components/Expense/ExpenseItem.js";
import Expenses from "./Components/Expense/Expenses.js";
import NewExpense from "./Components/NewExpense/NewExpense.js";
import App3 from "./App3";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App2() {
  return <App3 data={DUMMY_EXPENSES} />;
}

export default App2;
