import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userLoginReducer } from "./Reducers/userReducers";
import {
  productCreateReducer,
  productDetailsReducer,
  productListReducer,
} from "./Reducers/productReducers";
import {
  orderDetailsReducer,
  orderListReducer,
} from "./Reducers/orderReducers";
import { transactionListReducer } from "./Reducers/transactionReducers";

const reducer = combineReducers({
  productCreate: productCreateReducer,
  userLogin: userLoginReducer,
  productsList: productListReducer,
  productDetails: productDetailsReducer,
  orderList: orderListReducer,
  orderDetails: orderDetailsReducer,
  transactionList: transactionListReducer,
});

// login
const userInfoFromLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromLocalStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
