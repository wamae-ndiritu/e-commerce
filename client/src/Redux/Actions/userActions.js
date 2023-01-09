import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  VERIFY_USER_FAIL,
  VERIFY_USER_REQUEST,
  VERIFY_USER_SUCCESS,
  RESET_PASSWORD_FAIL,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAIL,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  USER_LOGOUT,
} from "../Constants/userConstants";
import axios from "axios";

import { URL } from "../../url";

// REGISTER
export const registerUser =
  ({ username, email, password_1, phone }) =>
  async (dispatch) => {
    console.log({ username, email, password_1, phone });
    try {
      dispatch({ type: USER_REGISTER_REQUEST });

      // const config = {
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // };

      const { data } = await axios.post(`${URL}/api/user/register`, {
        username,
        email,
        password_1,
        phone,
      });
      dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
    } catch (error) {
      console.log(error);
      dispatch({
        type: USER_REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

// LOGIN

export const login =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      dispatch({ type: USER_LOGIN_REQUEST });

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        `${URL}/api/user/login`,
        { email, password },
        config
      );

      console.log(data);

      dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      console.log(error);
      dispatch({
        type: USER_LOGIN_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

// LOGOUT
export const logout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: USER_LOGOUT });
};

// VERIFY OTP

export const verifyOtp = (otp, userId) => async (dispatch) => {
  try {
    dispatch({ type: VERIFY_USER_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      `${URL}/api/user/verify/otp`,
      {
        otp,
        userId,
      },
      config
    );

    console.log(data);

    dispatch({ type: VERIFY_USER_SUCCESS, payload: data });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: VERIFY_USER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// FORGOT PASS
export const forgotPass = (email) => async (dispatch) => {
  try {
    dispatch({ type: FORGOT_PASSWORD_REQUEST });

    // const config = {
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // };

    await axios.post(`${URL}/api/user/forgot/password`, email);

    dispatch({ type: FORGOT_PASSWORD_SUCCESS });
  } catch (error) {
    dispatch({
      type: FORGOT_PASSWORD_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// RESET PASSWORD

export const resetPassword = (id, password) => async (dispatch) => {
  try {
    dispatch({ type: RESET_PASSWORD_REQUEST });

    await axios.post(`${URL}/api/user/update/${id}/password`, password);

    dispatch({ type: RESET_PASSWORD_SUCCESS });
  } catch (error) {
    dispatch({
      type: RESET_PASSWORD_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
