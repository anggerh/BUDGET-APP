const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_INCOME":
      return {
        ...state,
        incomeTransactions: [action.payload, ...state.incomeTransactions],
      };
      case "ADD_EXPENSE":
      return {
        ...state,
        expenseTransactions: [action.payload, ...state.expenseTransactions],
      };
      case "DELETE_TRANSACTION":
      return {
        ...state,
        incomeTransactions: state.incomeTransactions.filter(
          (incomeTransactions) => incomeTransactions.id !== action.payload
        ),
        expenseTransactions: state.expenseTransactions.filter(
          (expenseTransactions) => expenseTransactions.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default AppReducer;
