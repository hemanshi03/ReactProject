import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";

function ExpenseList(props) {
  if (props.data.length > 0) {
    return props.data.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  } else {
    return <p>No Data Found!</p>;
  }
}
export default ExpenseList;
