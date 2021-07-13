import * as api from "../api";
import { ActionTypes } from "../constants/actionTypes";

// returned Data
const fetchedCustomerBankAccounts = (data) => {
  return {
    type: ActionTypes.FETCH_CUSTOMER_BANK_ACCOUNTS_SUCCESS,
    payload: data,
  };
};

const fetchedBankAccount = (data) => ({
  type: ActionTypes.FETCH_BANK_ACCOUNT_SUCCESS,
  payload: data,
});

const fetchedRecipientBankAccount = (data) => ({
  type: ActionTypes.FETCH_RECIPIENT_BANK_ACCOUNT_SUCCESS,
  payload: data,
});

const createdBankAccount = (data) => ({
  type: ActionTypes.CREATE_BANK_ACCOUNT_SUCCESS,
  payload: data,
});

const updatedBankAccount = (data) => ({
  type: ActionTypes.UPDATE_BANK_ACCOUNT_SUCCESS,
  payload: data,
});

//Action Creators
export const getCustomerBankAccounts = (customerId) => async (dispatch) => {
  try {
    dispatch({ type: ActionTypes.FETCH_CUSTOMER_BANK_ACCOUNTS_REQUEST });

    const { data } = await api.fetchBankAccountsByCustomerId(customerId);

    dispatch(fetchedCustomerBankAccounts(data));
  } catch (error) {
    dispatch({
      type: ActionTypes.FETCH_CUSTOMER_BANK_ACCOUNTS_ERROR,
      payload: error.message,
    });
  }
};

export const getBankAccountById = (bankAccountId) => async (dispatch) => {
  try {
    dispatch({ type: ActionTypes.FETCH_BANK_ACCOUNT_REQUEST });

    const { data } = await api.fetchBankAccountById(bankAccountId);

    dispatch(fetchedBankAccount(data));
  } catch (error) {
    dispatch({
      type: ActionTypes.FETCH_BANK_ACCOUNT_ERROR,
      payload: error.message,
    });
  }
};

export const getBankAccountByAccountNo = (accountNo) => async (dispatch) => {
  try {
    dispatch({ type: ActionTypes.FETCH_BANK_ACCOUNT_REQUEST });

    const { data } = await api.fetchBankAccountByAccountNo(accountNo);

    dispatch(fetchedBankAccount(data));
  } catch (error) {
    dispatch({
      type: ActionTypes.FETCH_BANK_ACCOUNT_ERROR,
      payload: error.message,
    });
  }
};

export const getBankAccountByIBAN = (iban) => async (dispatch) => {
  try {
    dispatch({ type: ActionTypes.FETCH_BANK_ACCOUNT_REQUEST });

    const { data } = await api.fetchBankAccountByIBAN(iban);

    dispatch(fetchedBankAccount(data));
  } catch (error) {
    dispatch({
      type: ActionTypes.FETCH_BANK_ACCOUNT_ERROR,
      payload: error.message,
    });
  }
};

export const validateRecipientBankAccount = (recipientData) => async (dispatch) => {
  try {
    dispatch({ type: ActionTypes.FETCH_RECIPIENT_BANK_ACCOUNT_REQUEST });

    const { data } = await api.validateRecipientBankAccount(recipientData);

    dispatch(fetchedRecipientBankAccount(data));
  }
  catch (error) {
    dispatch({
      type: ActionTypes.FETCH_RECIPIENT_BANK_ACCOUNT_ERROR,
      payload: error.message,
    });
  }
};


export const createOrUpdateBankAccount = (bankAccountId, bankAccountData) => async (dispatch) => {
  try {
    dispatch({ type: bankAccountId > 0 ? ActionTypes.UPDATE_BANK_ACCOUNT_REQUEST : ActionTypes.CREATE_BANK_ACCOUNT_REQUEST });

    const { data } = await api.addOrEditBankAccount(bankAccountId, bankAccountData);

    bankAccountId > 0 ? dispatch(updatedBankAccount(data)) : dispatch(createdBankAccount(data));
  }
  catch (error) {
    dispatch({
      type: bankAccountId > 0 ? ActionTypes.UPDATE_BANK_ACCOUNT_ERROR : ActionTypes.CREATE_BANK_ACCOUNT_ERROR,
      payload: error.message,
    });
  }
};
