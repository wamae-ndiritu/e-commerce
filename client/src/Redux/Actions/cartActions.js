import {
  CART_ADD_ITEM,
  CART_CLEAR_ITEMS,
  CART_REMOVE_ITEM,
  CART_SAVE_BILLING_ADDRESS,
  CART_SAVE_PAYMENT_METHOD,
  DECREASE_CART_QTY,
  INCREASE_CART_QTY,
} from "../Constants/cartConstants";
import axios from "axios";
import { URL } from "../../url";

// ADD ITEM TO CART
export const addToCart = (productId) => async (dispatch, getState) => {
  const { data } = await axios.get(`${URL}/api/products/${productId}`);

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,
      productName: data.productName,
      productImages: data.productImages,
      price: data.price,
      qty: 1,
    },
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

// REMOVE PRODUCT FROM CART
export const removefromcart = (id) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

//DECREASE CART QUANTITY
export const decreaseCartQty = (id) => async (dispatch, getState) => {
  dispatch({
    type: DECREASE_CART_QTY,
    payload: id,
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

// REMOVE ALL CART ITEMS
export const clearCart = () => (dispatch, getState) => {
  dispatch({ type: CART_CLEAR_ITEMS });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

// SAVE BILLING ADDRESS
export const saveBillingAddress = (data) => (dispatch) => {
  console.log(data);
  dispatch({
    type: CART_SAVE_BILLING_ADDRESS,
    payload: data,
  });

  localStorage.setItem("billingAddress", JSON.stringify(data));
};

// SAVE PAYMENT METHOD
export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({
    type: CART_SAVE_PAYMENT_METHOD,
    payload: data,
  });

  localStorage.setItem("paymentMethod", JSON.stringify(data));
};
