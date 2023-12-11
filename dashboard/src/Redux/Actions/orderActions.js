import axios from "axios";
import { URL } from "../../utilities/url";
import { logout } from "../Actions/userActions";
import {
  LIST_ORDER_REQUEST,
  LIST_ORDER_SUCCESS,
  // LIST_ORDER_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_FAIL,
} from "../Constants/orderConstants";
import { LIST_PRODUCTS_FAIL } from "../Constants/productConstants";

// ADMIN GET ALL ORDERS

export const listOrders = () => async (dispatch, getState) => {
  try {
    dispatch({ type: LIST_ORDER_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get(`${URL}/api/orders/all/orders`, config);

    dispatch({ type: LIST_ORDER_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }

    dispatch({ type: LIST_PRODUCTS_FAIL, payload: message });
  }
};

// ADMIN GET SINGLE ORDER
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
    const { data } = await axios.get(`${URL}/api/orders/user/${id}`, config);

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
