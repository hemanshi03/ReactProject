import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

function Expenses(props) {
  const [filteredyear, setFilteredYear] = useState("All");
  //const [filteredExpenses, setFilteredExpenses] = useState(props.items);

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return filteredyear.toString() === "All"
      ? true
      : expense.date.getFullYear().toString() === filteredyear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseChart expenses={filteredExpenses} />
        <ExpensesFilter
          selected={filteredyear}
          onFilterChange={filterChangeHandler}
        />
        <ExpenseList data={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
