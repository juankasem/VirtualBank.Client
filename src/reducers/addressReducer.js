import { ActionTypes } from "../constants/actionTypes";

const initialState = {
  addresses: [],
  selectedAddress: {},
  loading: false,
  errors: {},
};

const AddressReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_ADDRESSES_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case ActionTypes.FETCH_ADDRESSES_SUCCESS:
      return {
        ...state,
        Address: action.payload,
        selectedBankAccount: action.payload[0],
        loading: false,
        errors: {},
      };

    case ActionTypes.FETCH_ADDRESSES_ERROR:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };

    case ActionTypes.FETCH_ADDRESS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case ActionTypes.FETCH_ADDRESS_SUCCESS:
      return {
        ...state,
        selectedBankAccount: action.payload,
        loading: false,
        errors: {},
      };

    case ActionTypes.FETCH_ADDRESS_ERROR:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };

    case ActionTypes.CREATE_ADDRESS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case ActionTypes.CREATE_ADDRESS_SUCCESS:
      return {
        ...state,
        Address: [...state.Address, action.payload],
        loading: false,
        errors: {},
      };

    case ActionTypes.CREATE_ADDRESS_ERROR:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };

    case ActionTypes.UPDATE_ADDRESS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case ActionTypes.UPDATE_ADDRESS_SUCCESS:
      return {
        ...state,
        Address: state.Address.map((address) =>
          address.id === action.payload.id ? action.payload : address
        ),
        loading: false,
        errors: {},
      };

    case ActionTypes.UPDATE_ADDRESS_ERROR:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };

    default:
      return state;
  }
};

export default AddressReducer;
