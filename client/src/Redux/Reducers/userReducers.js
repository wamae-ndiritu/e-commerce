import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_FAIL,
  VERIFY_USER_REQUEST,
  VERIFY_USER_SUCCESS,
  VERIFY_USER_FAIL,
  USER_LOGIN_SUCCESS,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAIL,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAIL,
  USER_LOGOUT,
} from "../Constants/userConstants";

// REGISTER
export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return {
        loading: true,
        error: false,
      };
    case USER_REGISTER_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload,
        success: true,
      };
    case USER_REGISTER_FAIL:
      return {
        success: false,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

// LOGIN

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
        error: false,
        userInfo: action.payload,
      };
    case USER_LOGIN_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

// VERIFY OTP

export const verifyOtpReducer = (state = {}, action) => {
  switch (action.type) {
    case VERIFY_USER_REQUEST:
      return {
        loading: true,
        error: false,
      };
    case VERIFY_USER_SUCCESS:
      return {
        loading: false,
        error: false,
        userInfo: action.payload,
        success: true,
      };
    case VERIFY_USER_FAIL:
      return {
        success: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

// FOROT PASS
export const passForgotReducer = (state = {}, action) => {
  switch (action.type) {
    case FORGOT_PASSWORD_REQUEST:
      return {
        loading: true,
      };
    case FORGOT_PASSWORD_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case FORGOT_PASSWORD_FAIL:
      return {
        loading: false,
        success: false,
        error: false,
      };
    default:
      return state;
  }
};

// RESET PASSWORD
export const resetPasswordReducer = (state = {}, action) => {
  switch (action.type) {
    case RESET_PASSWORD_REQUEST:
      return {
        loading: true,
      };
    case RESET_PASSWORD_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case RESET_PASSWORD_FAIL:
      return {
        loading: false,
        success: false,
        error: true,
      };
    default:
      return state;
  }
};
