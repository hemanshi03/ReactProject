import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [enteredTitle, setTitle] = useState("");
  const [enteredAmount, setAmount] = useState("");
  const [enteredDate, setDate] = useState("");

  const [visible, setVisible] = useState(false);

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };
  const DateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  function cancelHandler() {
    setVisible(false);
  }

  function inputHandler() {
    setVisible(true);
    console.log(visible);
  }

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setTitle("");
    setAmount("");
    setDate("");
  };
  if (visible === true) {
    return (
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>

          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={enteredAmount}
              onChange={amountChangeHandler}
            />
          </div>

          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2000-01-01"
              max="2023-01-31"
              value={enteredDate}
              onChange={DateChangeHandler}
            />
          </div>

          <div className="new-expense__actions">
            <button type="submit" onClick={inputHandler}>
              Add Expense
            </button>
            <button onClick={cancelHandler}>Cancel</button>
          </div>
        </div>
      </form>
    );
  } else {
    return (
      <div className="new-expense__actions">
        <button type="submit" onClick={inputHandler}>
          Add Expense
        </button>
        <button onClick={cancelHandler}>Cancel</button>
      </div>
    );
  }
}

export default ExpenseForm;
