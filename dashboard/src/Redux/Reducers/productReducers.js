import {
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_CREATE_FAIL,
  LIST_PRODUCTS_REQUEST,
  LIST_PRODUCTS_SUCCESS,
  LIST_PRODUCTS_FAIL,
  GET_PRODUCT_DETAILS_REQUEST,
  GET_PRODUCT_DETAILS_SUCCESS,
  GET_PRODUCT_DETAILS_FAIL,
} from "../Constants/productConstants";

// CREATE PRODUCT
export const productCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_CREATE_REQUEST:
      return {
        loading: true,
        error: false,
      };
    case PRODUCT_CREATE_SUCCESS:
      return {
        loading: false,
        product: action.payload,
      };
    case PRODUCT_CREATE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

// ADMIN GET ALL PRODUCTS
export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case LIST_PRODUCTS_REQUEST:
      return {
        loading: true,
      };
    case LIST_PRODUCTS_SUCCESS:
      return {
        loading: false,
        products: action.payload,
      };
    case LIST_PRODUCTS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

// ADMIN GET SINGLE PRODUCT

export const productDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_PRODUCT_DETAILS_REQUEST:
      return {
        loading: true,
      };
    case GET_PRODUCT_DETAILS_SUCCESS:
      return {
        loading: false,
        product: action.payload,
      };
    case GET_PRODUCT_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
