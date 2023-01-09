import {
  LIST_TRANSACTIONS_REQUEST,
  LIST_TRANSACTIONS_SUCCESS,
  LIST_TRANSACTIONS_FAIL,
} from "../Constants/transactionConstants";
import axios from "axios";
import { logout } from "./userActions";
import { URL } from "../../utilities/url";

export const listTransactions = () => async (dispatch, getState) => {
  try {
    dispatch({ type: LIST_TRANSACTIONS_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`${URL}/api/transactions/all`, config);

    console.log(data);

    dispatch({ type: LIST_TRANSACTIONS_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({ type: LIST_TRANSACTIONS_FAIL, payload: message });
  }
};
