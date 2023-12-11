import {
  PAYMENT_VERIFICATION_REQUEST,
  PAYMENT_VERIFICATION_SUCCESS,
  PAYMENT_VERIFICATION_FAIL,
} from "../Constants/PaymentConstants";

export const paymentVerificationReducer = (state = {}, action) => {
  switch (action.type) {
    case PAYMENT_VERIFICATION_REQUEST:
      return {
        loading: true,
        error: false,
      };
    case PAYMENT_VERIFICATION_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case PAYMENT_VERIFICATION_FAIL:
      return {
        loading: false,
        success: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
