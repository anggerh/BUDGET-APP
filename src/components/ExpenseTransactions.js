import React, { useContext } from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GlobalContext } from "../context/GlobalState";

const ExpenseTransactions = ({ expenseTransactions }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <li className="transaction">
      <span className="transaction-text">
        {expenseTransactions.expenseText}
      </span>
      <span className="transaction-amount">
        {expenseTransactions.expenseAmount}
      </span>
      <button
        className="delete-btn"
        onClick={() => deleteTransaction(expenseTransactions.id)}
      >
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </li>
  );
};

export default ExpenseTransactions;
