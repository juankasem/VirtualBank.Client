import { ActionTypes } from "../constants/actionTypes";

const initialState = {
  accountCashTransactions: [],
  accountLatestTransfers: [],
  loading: false,
  errors: {},
};

const cashTransactionsReducer = (state = initialState, action) => {

  switch (action.type) {
    case ActionTypes.FETCH_ACCOUNT_CASH_TRANSACTIONS_REQUEST:
      return {
        ...state,
        loading: true
      };

    case ActionTypes.FETCH_ACCOUNT_CASH_TRANSACTIONS_SUCCESS:
      return {
        ...state,
        accountCashTransactions: action.payload,
        loading: false,
        errors: {},
      };

    case ActionTypes.FETCH_ACCOUNT_CASH_TRANSACTIONS_ERROR:
      return {
        ...state,
        loading: false,
        errors: action.payload
      };

    case ActionTypes.FETCH_ACCOUNT_LATEST_TRANSFERS_REQUEST:
      return {
        ...state,
        loading: true
      };

    case ActionTypes.FETCH_ACCOUNT_LATEST_TRANSFERS_SUCCESS:
      return {
        ...state,
        accountLatestTransfers: action.payload,
        loading: false,
        errors: {}
      };

    case ActionTypes.FETCH_ACCOUNT_LATEST_TRANSFERS_ERROR:
      return {
        ...state,
        loading: false,
        errors: action.payload
      };

    case ActionTypes.CREATE_CASH_TRANSACTION_REQUEST:
      return {
        ...state,
        loading: true
      };

    case ActionTypes.CREATE_CASH_TRANSACTION_SUCCESS:
      return {
        ...state,
        accountCashTransactions: [...state.accountCashTransactions, action.payload],
        loading: false,
        errors: {}
      };

    case ActionTypes.CREATE_CASH_TRANSACTION_ERROR:
      return {
        ...state,
        loading: false,
        errors: action.payload
      };

    default:
      return state;
  }
};

export default cashTransactionsReducer;
