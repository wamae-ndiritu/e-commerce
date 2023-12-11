import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
} from "../Constants/userConstants";

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {
        loading: true,
        error: false,
      };
    case USER_LOGIN_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload,
        error: false,
      };
    case USER_LOGIN_FAIL:
      return {
        error: action.payload,
        loading: false,
      };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};
