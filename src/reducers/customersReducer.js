import { ActionTypes } from "../constants/actionTypes";

const initialState = {
  customer: {},
  loading: false,
  errors: {},
};

const customersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_CUSTOMER_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case ActionTypes.FETCH_CUSTOMER_SUCCESS:
      return {
        ...state,
        customer: action.payload,
        loading: false,
        errors: {},
      };

    case ActionTypes.FETCH_CUSTOMER_ERROR:
      return { ...state, loading: false, errors: action.payload };

    case ActionTypes.CREATE_CUSTOMER_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case ActionTypes.CREATE_CUSTOMER_SUCCESS:
      return {
        ...state,
        customer: action.payload,
        loading: false,
        errors: {},
      };

    case ActionTypes.CREATE_CUSTOMER_ERROR:
      return { ...state, loading: false, errors: action.payload };

    case ActionTypes.UPDATE_CUSTOMER_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case ActionTypes.UPDATE_CUSTOMER_SUCCESS:
      return {
        ...state,
        customer: action.payload,
        loading: false,
        errors: {},
      };

    case ActionTypes.UPDATE_CUSTOMER_ERROR:
      return { ...state, loading: false, errors: action.payload };

    default:
      return state;
  }
};

export default customersReducer;
