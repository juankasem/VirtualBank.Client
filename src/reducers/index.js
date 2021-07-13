import { combineReducers } from "redux";
import authReducer from "./authReducer";
import bankAccountsReducer from "./bankAccountsReducer";
import branchesReducer from "./branchesReducer";
import cashTransactionsReducer from "./cashTransactionsReducer";
import creditCardsReducer from "./creditCardsReducer";
import customersReducer from "./customersReducer";
import fastTransactionsReducer from "./fastTransactionsReducer";

export default combineReducers({
  auth: authReducer,
  bankAccounts: bankAccountsReducer,
  branches: branchesReducer,
  cashTransactions: cashTransactionsReducer,
  creditCards: creditCardsReducer,
  customers: customersReducer,
  fastTransactions: fastTransactionsReducer,
});
