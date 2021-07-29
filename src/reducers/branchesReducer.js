import { ActionTypes } from "../constants/actionTypes";

const initialState = {
    branches: [],
    selectedBranch: {},
    loading: false,
    errors: {},
};

const branchesReducer = (state = initialState, action) => {

    switch (action.type) {
        case ActionTypes.FETCH_BRANCHES_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case ActionTypes.FETCH_BRANCH_SUCCESS:
            return {
                ...state,
                selectedBranch: action.payload,
                loading: false,
                errors: {},
            };

        case ActionTypes.FETCH_BRANCH_ERROR:
            return { ...state, loading: false, errors: action.payload };


        case ActionTypes.CREATE_BRANCH_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case ActionTypes.CREATE_BRANCH_SUCCESS:
            return {
                ...state,
                branch: action.payload,
                loading: false,
                errors: {},
            };

        case ActionTypes.CREATE_BRANCH_ERROR:
            return { ...state, loading: false, errors: action.payload };


        case ActionTypes.UPDATE_BRANCH_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case ActionTypes.UPDATE_BRANCH_SUCCESS:
            return {
                ...state,
                branch: action.payload,
                loading: false,
                errors: {},
            };

        case ActionTypes.UPDATE_BRANCH_ERROR:
            return { ...state, loading: false, errors: action.payload };

        default:
            return state;
    }
}

export default branchesReducer