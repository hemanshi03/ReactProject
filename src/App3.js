import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import ExpenseItem from "./Components/Expense/ExpenseItem.js";
import Expenses from "./Components/Expense/Expenses.js";
import NewExpense from "./Components/NewExpense/NewExpense.js";
import App4 from "./App4";
function App3(props) {
  const [filteredData, setfilterData] = useState(props.data);
  function selectHandler(event) {
    var new_data = [];

    props.data.filter((x) => {
      if (x.date.getFullYear().toString() === event.target.value) {
        new_data = [...new_data, x];
      }
    });

    console.log(new_data);
    setfilterData(new_data);
  }

  return (
    <div>
      <select onChange={selectHandler}>
        <option>2019</option>
        <option>2020</option>
        <option>2021</option>
        <option>2022</option>
      </select>
      {filteredData.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </div>
  );
}

export default App3;
