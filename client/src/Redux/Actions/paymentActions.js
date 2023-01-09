import {
  PAYMENT_VERIFICATION_REQUEST,
  PAYMENT_VERIFICATION_SUCCESS,
  PAYMENT_VERIFICATION_FAIL,
} from "../Constants/PaymentConstants";
import axios from "axios";
import { logout } from "./userActions";
import { URL } from "../../url";

export const verifyPayment =
  (mpesaCode, amountPaid) => async (dispatch, getState) => {
    try {
      dispatch({ type: PAYMENT_VERIFICATION_REQUEST });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authentication: `Bearer ${userInfo.token}`,
        },
      };

      await axios.post(
        `${URL}/api/verify-payment/mpesa-code-verification`,

        {
          mpesaCode,
          amountPaid,
        },
        config
      );

      dispatch({ type: PAYMENT_VERIFICATION_SUCCESS });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === "Not authorized, token failed") {
        dispatch(logout());
      }
      dispatch({ type: PAYMENT_VERIFICATION_FAIL, payload: message });
    }
  };
