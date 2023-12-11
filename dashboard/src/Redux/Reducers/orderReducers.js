import {
  LIST_ORDER_REQUEST,
  LIST_ORDER_SUCCESS,
  LIST_ORDER_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_FAIL,
} from "../Constants/orderConstants";

// ADMIN GET ALL ORDERS
export const orderListReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case LIST_ORDER_REQUEST:
      return {
        loading: true,
      };
    case LIST_ORDER_SUCCESS:
      return {
        loading: false,
        orders: action.payload,
      };
    case LIST_ORDER_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

// ADMIN GET SINGLE ORDER

export const orderDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_DETAILS_REQUEST:
      return {
        loading: true,
      };
    case ORDER_DETAILS_SUCCESS:
      return {
        loading: false,
        order: action.payload,
      };
    case ORDER_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
