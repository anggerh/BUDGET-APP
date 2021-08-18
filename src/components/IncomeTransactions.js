import React, { useContext } from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GlobalContext } from "../context/GlobalState";

const IncomeTransactions = ({ incomeTransactions }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <li className="transaction">
      <span className="transaction-text">{incomeTransactions.incomeText}</span>
      <span className="transaction-amount">
        {incomeTransactions.incomeAmount}
      </span>
      <button
        className="delete-btn"
        onClick={() => deleteTransaction(incomeTransactions.id)}
      >
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </li>
  );
};

export default IncomeTransactions;
