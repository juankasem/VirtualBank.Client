import { ActionTypes } from "../constants/actionTypes";

const initialState = {
  creditCards: [],
  selectedCreditCard: {},
  loading: false,
  errors: {},
};

const creditCardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_CREDIT_CARDS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case ActionTypes.FETCH_CREDIT_CARDS_SUCCESS:
      return {
        ...state,
        bankAccounts: action.payload,
        selectedBankAccount: action.payload[0],
        loading: false,
        errors: {},
      };

    case ActionTypes.FETCH_CREDIT_CARDS_ERROR:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };

    case ActionTypes.FETCH_CREDIT_CARD_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case ActionTypes.FETCH_CREDIT_CARD_SUCCESS:
      return {
        ...state,
        selectedBankAccount: action.payload,
        loading: false,
        errors: {},
      };

    case ActionTypes.FETCH_CREDIT_CARD_ERROR:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };

    case ActionTypes.CREATE_CREDIT_CARD_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case ActionTypes.CREATE_CREDIT_CARD_SUCCESS:
      return {
        ...state,
        creditCards: [...state.creditCards, action.payload],
        loading: false,
        errors: {},
      };

    case ActionTypes.CREATE_CREDIT_CARD_ERROR:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };

    case ActionTypes.UPDATE_CREDIT_CARD_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case ActionTypes.UPDATE_CREDIT_CARD_SUCCESS:
      return {
        ...state,
        creditCards: state.creditCards.map((creditCard) => (creditCard.id === action.payload.id ? action.payload : creditCard)),
        loading: false,
        errors: {},
      };

    case ActionTypes.UPDATE_CREDIT_CARD_ERROR:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };

    default:
      return state;
  }
};

export default creditCardsReducer;
