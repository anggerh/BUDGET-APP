import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import IncomeTransactions from "./IncomeTransactions";

const IncomeList = () => {
  const { incomeTransactions } = useContext(GlobalContext);
  return (
    <div className="transactions transactions-income">
      <h2>Transaction History</h2>
      <ul className="transaction-list">
        {incomeTransactions.map((incomeTransactions) => (
          <IncomeTransactions
            key={incomeTransactions.id}
            incomeTransactions={incomeTransactions}
          />
        ))}
      </ul>
    </div>
  );
};

export default IncomeList;
