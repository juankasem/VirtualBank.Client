import * as api from "../api";
import { ActionTypes } from "../constants/actionTypes";

// returned objects
const fetchedAccountCashTransactions = (data) => ({
  type: ActionTypes.FETCH_ACCOUNT_CASH_TRANSACTIONS_SUCCESS,
  payload: data,
});

const fetchedAccountLatestTransfers = (data) => ({
  type: ActionTypes.FETCH_ACCOUNT_LATEST_TRANSFERS_SUCCESS,
  payload: data,
});

const createdCahTransaction = (data) => ({
  type: ActionTypes.CREATE_CASH_TRANSACTION_SUCCESS,
  payload: data,
});

//Action Creators
export const listAccountCashTransactions = (iban, lastDays) => async (dispatch) => {
  try {
    dispatch({ type: ActionTypes.FETCH_ACCOUNT_CASH_TRANSACTIONS_REQUEST });

    const { data } = await api.listCashTransactionsByIBAN(iban, lastDays);

    dispatch(fetchedAccountCashTransactions(data));
  }
  catch (error) {
    dispatch({
      type: ActionTypes.FETCH_ACCOUNT_CASH_TRANSACTIONS_ERROR,
      payload: error.message,
    });
  }
};

export const getAccountLatestTransfers = (iban) => async (dispatch) => {
  try {
    dispatch({ type: ActionTypes.FETCH_ACCOUNT_LATEST_TRANSFERS_REQUEST });

    const { data } = await api.fetchLatestTransfersByIBAN(iban);

    dispatch(fetchedAccountLatestTransfers(data));
  }
  catch (error) {
    dispatch({
      type: ActionTypes.FETCH_ACCOUNT_LATEST_TRANSFERS_ERROR,
      payload: error.message,
    });
  }
};

export const addCashTransaction = (tx) => async (dispatch) => {
  try {
    dispatch({ type: ActionTypes.ADD_OR_EDIT_FAST_TRANSACTION_REQUEST });

    const { data } = await api.addCashTransaction(tx);

    dispatch(createdCahTransaction(data));
  }
  catch (error) {
    dispatch({
      type: ActionTypes.CREATE_CASH_TRANSACTION_ERROR,
      payload: error.message,
    });
  }
};
