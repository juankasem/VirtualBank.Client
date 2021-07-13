import { ActionTypes } from "../constants/actionTypes";

const initialState = {
  bankAccounts: [],
  selectedBankAccount: {},
  recipientBankAccount: {},
  loading: false,
  errors: {},
};

const bankAccountsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_CUSTOMER_BANK_ACCOUNTS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case ActionTypes.FETCH_CUSTOMER_BANK_ACCOUNTS_SUCCESS:
      return {
        ...state,
        bankAccounts: action.payload,
        selectedBankAccount: action.payload[0],
        loading: false,
        errors: {},
      };

    case ActionTypes.FETCH_CUSTOMER_BANK_ACCOUNTS_ERROR:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };

    case ActionTypes.FETCH_BANK_ACCOUNT_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case ActionTypes.FETCH_BANK_ACCOUNT_SUCCESS:
      return {
        ...state,
        selectedBankAccount: action.payload,
        loading: false,
        errors: {},
      };

    case ActionTypes.FETCH_BANK_ACCOUNT_ERROR:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };

    case ActionTypes.FETCH_RECIPIENT_BANK_ACCOUNT_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case ActionTypes.FETCH_RECIPIENT_BANK_ACCOUNT_SUCCESS:
      return {
        ...state,
        recipientBankAccount: action.payload,
        loading: false,
        errors: {},
      };

    case ActionTypes.FETCH_RECIPIENT_BANK_ACCOUNT_ERROR:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };

    case ActionTypes.CREATE_BANK_ACCOUNT_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case ActionTypes.CREATE_BANK_ACCOUNT_SUCCESS:
      return {
        ...state,
        bankAccounts: [...state.bankAccounts, action.payload],
        loading: false,
        errors: {},
      };

    case ActionTypes.CREATE_BANK_ACCOUNT_ERROR:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };

    case ActionTypes.UPDATE_BANK_ACCOUNT_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case ActionTypes.UPDATE_BANK_ACCOUNT_SUCCESS:
      return {
        ...state,
        bankAccounts: state.bankAccounts.map((bankAccount) =>
          bankAccount.id === action.payload.id ? action.payload : bankAccount
        ),
        loading: false,
        errors: {},
      };

    case ActionTypes.UPDATE_BANK_ACCOUNT_ERROR:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };

    default:
      return state;
  }
};

export default bankAccountsReducer;
