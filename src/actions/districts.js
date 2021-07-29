import * as api from "../api";
import { ActionTypes } from "../constants/actionTypes";

// returned objects
const fetchedDistricts = (data) => ({
    type: ActionTypes.FETCH_DISTRICTS_SUCCESS,
    payload: data,
});

const fetchedDistrict = (data) => ({
    type: ActionTypes.FETCH_DISTRICT_SUCCESS,
    payload: data,
});

const createdDistrict = (data) => ({
    type: ActionTypes.CREATE_DISTRICT_SUCCESS,
    payload: data,
});

const updatedDistrict = (data) => ({
    type: ActionTypes.UPDATE_DISTRICT_SUCCESS,
    payload: data,
});


// Action Creators
export const listDistricts = (countryId, cityId) => async (dispatch) => {
    try {
        dispatch({ type: ActionTypes.FETCH_DISTRICTS_REQUEST });

        const { data } = await api.listDistricts(countryId, cityId);

        dispatch(fetchedDistricts(data));
    }
    catch (error) {
        dispatch({
            type: ActionTypes.FETCH_DISTRICTS_ERROR,
            payload: error.message,
        });
    }
};

export const getDistrictById = (id) => async (dispatch) => {
    try {
        dispatch({ type: ActionTypes.FETCH_DISTRICT_REQUEST });

        const { data } = await api.fetchDistrictById(id);

        dispatch(fetchedDistrict(data));
    }
    catch (error) {
        dispatch({
            type: ActionTypes.FETCH_DISTRICT_ERROR,
            payload: error.message,
        });
    }
};


export const createOrUpdateDistrict = (districtId, districtData) => async (dispatch) => {
    try {
        dispatch({ type: districtId > 0 ? ActionTypes.UPDATE_DISTRICT_REQUEST : ActionTypes.CREATE_dDISTRICT_REQUEST });

        const { data } = await api.addOrEditdistrict(districtId, districtData);

        districtId > 0 ? dispatch(updatedDistrict(data)) : dispatch(createdDistrict(data));
    }
    catch (error) {
        dispatch({
            type: districtId > 0 ? ActionTypes.UPDATE_DISTRICT_ERROR : ActionTypes.CREATE_DISTRICT_ERROR,
            payload: error.message,
        });
    }
};
