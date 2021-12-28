import { ActionTypes } from "../constants/actionTypes";

const initialState = {
    user: {}, //just a comment
    loading: false,
    errors: {},
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case ActionTypes.LOGIN_REQUEST:
            return {
                ...state,
                loading: true
            }

        case ActionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload,
                loading: false,
                errors: {}
            }

        case ActionTypes.LOGIN_ERROR:
            return {
                ...state,
                user: action.payload,
                loading: false,
                errors: {}
            }

        case ActionTypes.REGISTER_USER_REQUEST:
            return {
                ...state,
                loading: true
            }

        case ActionTypes.REGISTER_USER_SUCCESS:
            return {
                ...state,
                user: action.payload,
                loading: false,
                errors: {}
            }

        case ActionTypes.REGISTER_USER_ERROR:
            return {
                ...state,
                user: action.payload,
                loading: false,
                errors: {}
            }
        default:
            return state
    }

}

export default authReducer