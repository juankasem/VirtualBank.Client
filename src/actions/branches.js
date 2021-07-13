import * as api from "../api";
import { ActionTypes } from "../constants/actionTypes";

// returned objects
const fetchedBranches = (data) => ({
    type: ActionTypes.FETCH_BRANCHES_SUCCESS,
    payload: data,
});

const fetchedBranch = (data) => ({
    type: ActionTypes.FETCH_BRANCH_SUCCESS,
    payload: data,
});

const createdBranch = (data) => ({
    type: ActionTypes.CREATE_BRANCH_SUCCESS,
    payload: data,
});

const updatedBranch = (data) => ({
    type: ActionTypes.UPDATE_BRANCH_SUCCESS,
    payload: data,
});

// Action Creators
export const listBranches = (countryId, cityId, districtId) => async (dispatch) => {
    try {
        dispatch({ type: ActionTypes.FETCH_BRANCHES_REQUEST });
        const { data } = await api.listBranches(countryId, cityId, districtId);

        dispatch(fetchedBranches(data));
    }
    catch (error) {
        dispatch({
            type: ActionTypes.FETCH_BRANCHES_ERROR,
            payload: error.message,
        });
    }
};

export const getBranchById = (id) => async (dispatch) => {
    try {
        dispatch({ type: ActionTypes.FETCH_BRANCH_REQUEST });
        const { data } = await api.fetchBranchById(id);

        dispatch(fetchedBranch(data));
    } catch (error) {
        dispatch({
            type: ActionTypes.FETCH_BRANCH_ERROR,
            payload: error.message,
        });
    }
};

export const getBranchByCode = (code) => async (dispatch) => {
    try {
        dispatch({ type: ActionTypes.FETCH_BRANCH_REQUEST });

        const { data } = await api.fetchBranchByCode(code);

        dispatch(fetchedBranch(data));
    } catch (error) {
        dispatch({
            type: ActionTypes.FETCH_BRANCH_ERROR,
            payload: error.message,
        });
    }
};

export const createOrUpdateBranch = (branchId, branchData) => async (dispatch) => {
    try {
        dispatch({ type: branchId > 0 ? ActionTypes.UPDATE_BRANCH_REQUEST : ActionTypes.CREATE_BRANCH_REQUEST });

        const { data } = await api.addOrEditbranch(branchId, branchData);

        branchId > 0 ? dispatch(updatedBranch(data)) : dispatch(createdBranch(data));
    }
    catch (error) {
        dispatch({
            type: branchId > 0 ? ActionTypes.UPDATE_BRANCH_ERROR : ActionTypes.CREATE_BRANCH_ERROR,
            payload: error.message,
        });
    }
};
