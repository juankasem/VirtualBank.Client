import * as api from "../api";
import { ActionTypes } from "../constants/actionTypes";

// returned objects
const fetchedAccountFastTransactions = (data) => ({
  type: ActionTypes.FETCH_ACCOUNT_FAST_TRANSACTIONS_SUCCESS,
  payload: data,
});

const createdFastTransaction = (data) => ({
  type: ActionTypes.CREATE_FAST_TRANSACTION_SUCCESS,
  payload: data,
});

const updatedFastTransaction = (data) => ({
  type: ActionTypes.UPDATE_FAST_TRANSACTION_SUCCESS,
  payload: data,
});


//Action Creators
export const getAccountFastTransactions = (iban) => async (dispatch) => {
  try {
    dispatch({ type: ActionTypes.FETCH_ACCOUNT_FAST_TRANSACTIONS_REQUEST });

    const { data } = await api.fetchFastTransactionsByIBAN(iban);

    dispatch(fetchedAccountFastTransactions(data));
  } catch (error) {
    dispatch({
      type: ActionTypes.FETCH_ACCOUNT_FAST_TRANSACTIONS_ERROR,
      payload: error.message,
    });
  }
};

export const createOrUpdateFastTransaction = (id, tx) => async (dispatch) => {
  try {
    dispatch({ type: id > 0 ? ActionTypes.UPDATE_FAST_TRANSACTION_REQUEST : ActionTypes.CREATE_FAST_TRANSACTION_REQUEST });

    const { data } = await api.addOrEditFastTransaction(id, tx);

    id > 0 ? dispatch(updatedFastTransaction(data)) : dispatch(createdFastTransaction(data));
  }
  catch (error) {
    dispatch({
      type: id > 0 ? ActionTypes.UPDATE_FAST_TRANSACTION_ERROR : ActionTypes.CREATE_FAST_TRANSACTION_ERROR,
      payload: error.message,
    });
  }
};
