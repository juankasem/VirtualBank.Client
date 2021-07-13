import * as api from "../api";
import { ActionTypes } from "../constants/actionTypes";

// returned objects
const fetchedCustomer = (data) => ({
  type: ActionTypes.FETCH_CUSTOMER_SUCCESS,
  payload: data,
});

const createdCustomer = (data) => ({
  type: ActionTypes.CREATE_CUSTOMER_SUCCESS,
  payload: data,
});

const updatedCustomer = (data) => ({
  type: ActionTypes.UPDATE_CUSTOMER_SUCCESS,
  payload: data,
});

// Action Creators
export const getCustomerById = (id) => async (dispatch) => {
  try {
    dispatch({ type: ActionTypes.FETCH_CUSTOMER_REQUEST });
    const { data } = await api.fetchCustomerById(id);

    dispatch(fetchedCustomer(data));
  } catch (error) {
    dispatch({
      type: ActionTypes.FETCH_CUSTOMER_ERROR,
      payload: error.message,
    });
  }
};

export const getCustomerByIBAN = (iban) => async (dispatch) => {
  try {
    dispatch({ type: ActionTypes.FETCH_CUSTOMER_REQUEST });

    const { data } = await api.fetchCustomerByIBAN(iban);

    dispatch(fetchedCustomer(data));
  } catch (error) {
    dispatch({
      type: ActionTypes.FETCH_CUSTOMER_ERROR,
      payload: error.message,
    });
  }
};

export const createOrUpdateCustomer = (customerId, customerData) => async (dispatch) => {
  try {
    dispatch({ type: customerId > 0 ? ActionTypes.UPDATE_CUSTOMER_REQUEST : ActionTypes.CREATE_CUSTOMER_REQUEST });

    const { data } = await api.addOrEditCustomer(customerId, customerData);

    customerId > 0 ? dispatch(updatedCustomer(data)) : dispatch(createdCustomer(data));
  } catch (error) {
    dispatch({
      type: customerId > 0 ? ActionTypes.UPDATE_CUSTOMER_ERROR : ActionTypes.CREATE_CUSTOMER_ERROR,
      payload: error.message,
    });
  }
};
