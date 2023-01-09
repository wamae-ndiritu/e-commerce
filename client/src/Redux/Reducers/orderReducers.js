import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAIL,
  ORDER_CREATE_RESET,
  LIST_USER_ORDER_REQUEST,
  LIST_USER_ORDER_SUCCESS,
  LIST_USER_ORDER_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_PAY_REQUEST,
  ORDER_PAY_SUCCESS,
  ORDER_PAY_FAIL,
  ORDER_PAY_RESET,
  MARK_ORDER_PAID_REQUEST,
  MARK_ORDER_PAID_SUCCESS,
  MARK_ORDER_PAID_FAIL,
} from "../Constants/orderConstants";

//  CREATE ORDER

export const orderCreateRreducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_CREATE_REQUEST:
      return {
        loading: true,
      };
    case ORDER_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
        order: action.payload,
      };
    case ORDER_CREATE_FAIL:
      return {
        loading: false,
        success: false,
        error: action.payload,
      };
    case ORDER_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

// GET USER ORDERS

export const userOrderReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case LIST_USER_ORDER_REQUEST:
      return {
        loading: true,
      };
    case LIST_USER_ORDER_SUCCESS:
      return {
        loading: false,
        orders: action.payload,
      };
    case LIST_USER_ORDER_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

// GET USER ORDER DETAILS

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

// ORDER PAY
export const orderPayReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_PAY_REQUEST:
      return { loading: true, error: false };
    case ORDER_PAY_SUCCESS:
      return { loading: false, success: true };
    case ORDER_PAY_FAIL:
      return { loading: false, error: action.payload };
    case ORDER_PAY_RESET:
      return {};
    default:
      return state;
  }
};

// MARK ORDER IS PAID
export const markOrderIsPaidReducer = (state = {}, action) => {
  switch (action.type) {
    case MARK_ORDER_PAID_REQUEST:
      return {
        loading: true,
      };
    case MARK_ORDER_PAID_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case MARK_ORDER_PAID_FAIL:
      return {
        loading: false,
        success: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
