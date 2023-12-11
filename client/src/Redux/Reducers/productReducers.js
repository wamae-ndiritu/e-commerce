import {
  LIST_PRODUCT_REQUEST,
  LIST_PRODUCT_SUCCESS,
  LIST_PRODUCT_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  SIMILAR_PRODUCTS_REQUEST,
  SIMILAR_PRODUCTS_SUCCESS,
  SIMILAR_PRODUCTS_FAIL,
} from "../Constants/productConstants";

// PRODUCT LIST

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case LIST_PRODUCT_REQUEST:
      return {
        loading: true,
        error: false,
      };
    case LIST_PRODUCT_SUCCESS:
      return {
        loading: false,
        products: action.payload,
      };
    case LIST_PRODUCT_FAIL:
      return {
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

// PRODUCT DETAILS

export const productDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return {
        loading: true,
        error: false,
      };
    case PRODUCT_DETAILS_SUCCESS:
      return {
        loading: false,
        product: action.payload,
      };
    case PRODUCT_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

// SIMILAR PRODUCTS
export const productSimilarReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case SIMILAR_PRODUCTS_REQUEST:
      return {
        loading: true,
      };
    case SIMILAR_PRODUCTS_SUCCESS:
      return {
        loading: false,
        products: action.payload,
      };
    case SIMILAR_PRODUCTS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
