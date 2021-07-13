
import { ActionTypes } from "../constants/actionTypes";

const initialState = {
  roles: [],
  users: {},
  loading: false,
  errors: {},
};

const AdministrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.fetch:
      return {
        ...state,
        loading: true,
      };

    default:
      return state
  }
}

export default AdministrationReducer;
