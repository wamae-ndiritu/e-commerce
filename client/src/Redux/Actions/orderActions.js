import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAIL,
  ORDER_CREATE_RESET,
  LIST_USER_ORDER_FAIL,
  LIST_USER_ORDER_REQUEST,
  LIST_USER_ORDER_SUCCESS,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_PAY_REQUEST,
  ORDER_PAY_SUCCESS,
  ORDER_PAY_FAIL,
  MARK_ORDER_PAID_REQUEST,
  MARK_ORDER_PAID_SUCCESS,
  MARK_ORDER_PAID_FAIL,
} from "../Constants/orderConstants";
import axios from "axios";
import { URL } from "../../url";
import { CART_CLEAR_ITEMS } from "../Constants/cartConstants";
import { logout } from "./userActions";

// CREATE ORDER
export const createOrder =
  (orderItems, billingAddress, totalPrice) => async (dispatch, getState) => {
    try {
      dispatch({ type: ORDER_CREATE_REQUEST });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.post(
        `${URL}/api/orders/`,
        {
          orderItems,
          billingAddress,
          totalPrice,
        },
        config
      );

      dispatch({ type: ORDER_CREATE_SUCCESS, payload: data });
      dispatch({ type: ORDER_CREATE_RESET });
      dispatch({ type: CART_CLEAR_ITEMS });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === "Not authorized, token failed") {
        dispatch(logout());
      }
      dispatch({
        type: ORDER_CREATE_FAIL,
        payload: message,
      });
    }
  };

// LIST USER ORDERS

export const listUserOrders = () => async (dispatch, getState) => {
  try {
    dispatch({ type: LIST_USER_ORDER_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "apllication/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`${URL}/api/orders/`, config);

    dispatch({ type: LIST_USER_ORDER_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({ type: LIST_USER_ORDER_FAIL, payload: message });
  }
};

// GET ORDER DETAILS

export const getOrderDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: ORDER_DETAILS_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get(`${URL}/api/orders/${id}`, config);

    dispatch({ type: ORDER_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({ type: ORDER_DETAILS_FAIL, payload: message });
  }
};

// ORDER PAY
export const payOrder = (paymentDetails) => async (dispatch) => {
  try {
    dispatch({ type: ORDER_PAY_REQUEST });

    await axios.post(`${URL}/api/payment/stk/push`, paymentDetails);

    dispatch({ type: ORDER_PAY_SUCCESS });
  } catch (error) {
    console.log(error);
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: ORDER_PAY_FAIL,
      payload: message,
    });
  }
};

//  MARK ORDER IS PAID
export const markOrderPaid = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: MARK_ORDER_PAID_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.post(`${URL}/api/api/verify-payment/${id}/orderIsPaid`, config);

    dispatch({ type: MARK_ORDER_PAID_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({ type: MARK_ORDER_PAID_FAIL, payload: message });
  }
};
