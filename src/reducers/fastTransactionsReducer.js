import { ActionTypes } from "../constants/actionTypes";

const initialState = {
  accountFastTransactions: [],
  loading: false,
  errors: {},
};

const fastTransactionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_ACCOUNT_FAST_TRANSACTIONS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case ActionTypes.FETCH_ACCOUNT_FAST_TRANSACTIONS_SUCCESS:
      return {
        ...state,
        accountFastTransactions: action.payload,
        loading: false,
        errors: {},
      };

    case ActionTypes.FETCH_ACCOUNT_FAST_TRANSACTIONS_ERROR:
      return { ...state, loading: false, errors: action.payload };

    case ActionTypes.CREATE_FAST_TRANSACTION_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case ActionTypes.CREATE_FAST_TRANSACTION_SUCCESS:
      return {
        ...state,
        accountFastTransactions: [...state.accountFastTransactions, action.payload],
        loading: false,
        errors: {},
      };

    case ActionTypes.CREATE_FAST_TRANSACTION_ERROR:
      return { ...state, loading: false, errors: action.payload };

    case ActionTypes.UPDATE_FAST_TRANSACTION_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case ActionTypes.UPDATE_FAST_TRANSACTION_SUCCESS:
      return {
        ...state,
        accountFastTransactions: state.accountFastTransactions.map((fastTransaction) =>
          fastTransaction.id === action.payload.id ? action.payload : fastTransaction
        ),
        loading: false,
        errors: {},
      };

    case ActionTypes.UPDATE_FAST_TRANSACTION_ERROR:
      return { ...state, loading: false, errors: action.payload };

    default:
      return state;
  }
};

export default fastTransactionsReducer;
