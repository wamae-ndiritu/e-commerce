import {
  LIST_PRODUCT_REQUEST,
  LIST_PRODUCT_SUCCESS,
  LIST_PRODUCT_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  SIMILAR_PRODUCTS_FAIL,
  SIMILAR_PRODUCTS_REQUEST,
  SIMILAR_PRODUCTS_SUCCESS,
} from "../Constants/productConstants";
import axios from "axios";
import { URL } from "../../url";

// GET ALL PRODUCTS

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: LIST_PRODUCT_REQUEST });

    const { data } = await axios.get(`${URL}/api/products/`);

    dispatch({ type: LIST_PRODUCT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: LIST_PRODUCT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// GET SINGLE PRODUCT

export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST });

    const { data } = await axios.get(`${URL}/api/products/${id}`);

    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// GET SIMILAR PRODUCTS

export const getSimilarProducts = (id) => async (dispatch) => {
  try {
    dispatch({ type: SIMILAR_PRODUCTS_REQUEST });

    const { data } = await axios.get(`${URL}/api/products/similar/${id}`);

    dispatch({ type: SIMILAR_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: SIMILAR_PRODUCTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
