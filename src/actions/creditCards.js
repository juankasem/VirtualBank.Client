import * as api from "../api";
import { ActionTypes } from "../constants/actionTypes";

// returned objects
const fetchedCreditCards = (data) => ({
    type: ActionTypes.FETCH_CREDIT_CARDS_REQUEST,
    payload: data,
});

const fetchedCreditCard = (data) => ({
    type: ActionTypes.FETCH_CREDIT_CARD_REQUEST,
    payload: data,
});

const createdCreditCard = (data) => ({
    type: ActionTypes.CREATE_CREDIT_CARD_SUCCESS,
    payload: data,
});

const updatedCreditCard = (data) => ({
    type: ActionTypes.UPDATE_CREDIT_CARD_SUCCESS,
    payload: data,
});

// Action Creators
export const getCustomerCreditCards = (id) => async (dispatch) => {
    try {
        dispatch({ type: ActionTypes.FETCH_CREDIT_CARDS_REQUEST });
        const { data } = await api.fetchCreditCardsByIBAN(id);

        dispatch(fetchedCreditCards(data));
    }
    catch (error) {
        dispatch({
            type: ActionTypes.FETCH_CREDIT_CARDS_ERROR,
            payload: error.message,
        });
    }
};

export const getCreditCardById = (creditCardId) => async (dispatch) => {
    try {
        dispatch({ type: ActionTypes.FETCH_CREDIT_CARD_REQUEST });

        const { data } = await api.fetchCreditCardById(creditCardId);

        dispatch(fetchedCreditCard(data));
    }
    catch (error) {
        dispatch({
            type: ActionTypes.FETCH_CREDIT_CARD_ERROR,
            payload: error.message,
        });
    }
};

export const createOrUpdateCreditCard = (creditCardId, creditCardData) => async (dispatch) => {
    try {
        dispatch({
            type: creditCardId > 0 ? ActionTypes.UPDATE_CREDIT_CARD_REQUEST :
                ActionTypes.CREATE_CREDIT_CARD_REQUEST
        });

        const { data } = await api.addOrEditCreditCard(creditCardId, creditCardData);

        creditCardId > 0 ? dispatch(updatedCreditCard(data)) : dispatch(createdCreditCard(data));
    }
    catch (error) {
        dispatch({
            type: creditCardId > 0 ? ActionTypes.UPDATE_CREDIT_CARD_ERROR : ActionTypes.CREATE_CREDIT_CARD_ERROR,
            payload: error.message,
        });
    }
};
