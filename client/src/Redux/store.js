import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {
  passForgotReducer,
  resetPasswordReducer,
  userLoginReducer,
  userRegisterReducer,
  verifyOtpReducer,
} from "./Reducers/userReducers";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productDetailsReducer,
  productListReducer,
  productSimilarReducer,
} from "./Reducers/productReducers";
import { cartReducer } from "./Reducers/cartReducers";
import {
  markOrderIsPaidReducer,
  orderCreateRreducer,
  orderDetailsReducer,
  orderPayReducer,
  userOrderReducer,
} from "./Reducers/orderReducers";
import { paymentVerificationReducer } from "./Reducers/paymentReducers";

const reducers = combineReducers({
  userRegister: userRegisterReducer,
  userLogin: userLoginReducer,
  userVerification: verifyOtpReducer,
  passwordForgot: passForgotReducer,
  passwordReset: resetPasswordReducer,
  productList: productListReducer,
  productDetails: productDetailsReducer,
  productSimilar: productSimilarReducer,
  cart: cartReducer,
  orderCreate: orderCreateRreducer,
  userOrders: userOrderReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  paymentVerification: paymentVerificationReducer,
  orderIsPaid: markOrderIsPaidReducer,
});

// login
const userInfoFromLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

// cartItems
const cartItemsFromLocalStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

// billingAddress
const billingAddressFromLocalStorage = localStorage.getItem("billingAddress")
  ? JSON.parse(localStorage.getItem("billingAddress"))
  : {};

const initialState = {
  userLogin: { userInfo: userInfoFromLocalStorage },
  cart: {
    cartItems: cartItemsFromLocalStorage,
    billingAddress: billingAddressFromLocalStorage,
  },
};

const middleware = [thunk];

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
