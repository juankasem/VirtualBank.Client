import * as api from "../api";
import { ActionTypes } from "../constants/actionTypes";

// returned objects
const fetchedCities = (data) => ({
    type: ActionTypes.FETCH_CITIES_SUCCESS,
    payload: data,
});

const fetchedCity = (data) => ({
    type: ActionTypes.FETCH_CITY_SUCCESS,
    payload: data,
});

const createdCity = (data) => ({
    type: ActionTypes.CREATE_CITY_SUCCESS,
    payload: data,
});

const updatedCity = (data) => ({
    type: ActionTypes.UPDATE_CITY_SUCCESS,
    payload: data,
});


// Action Creators
export const listCities = (countryId) => async (dispatch) => {
    try {
        dispatch({ type: ActionTypes.FETCH_CITIES_REQUEST });

        const { data } = await api.listCities(countryId);

        dispatch(fetchedCities(data));
    }
    catch (error) {
        dispatch({
            type: ActionTypes.FETCH_CITIES_ERROR,
            payload: error.message,
        });
    }
};

export const getCityById = (id) => async (dispatch) => {
    try {
        dispatch({ type: ActionTypes.FETCH_CITY_REQUEST });

        const { data } = await api.fetchCityById(id);

        dispatch(fetchedCity(data));
    }
    catch (error) {
        dispatch({
            type: ActionTypes.FETCH_CITY_ERROR,
            payload: error.message,
        });
    }
};


export const createOrUpdateCity = (cityId, cityData) => async (dispatch) => {
    try {
        dispatch({ type: cityId > 0 ? ActionTypes.UPDATE_CITY_REQUEST : ActionTypes.CREATE_CITY_REQUEST });

        const { data } = await api.addOrEditCity(cityId, cityData);

        cityId > 0 ? dispatch(updatedCity(data)) : dispatch(createdCity(data));
    }
    catch (error) {
        dispatch({
            type: cityId > 0 ? ActionTypes.UPDATE_CITY_ERROR : ActionTypes.CREATE_CITY_ERROR,
            payload: error.message,
        });
    }
};
