import React, { useContext, useReducer } from "react";
import DiscountData from "../data/DiscountData";

const items = DiscountData;

const AppContext = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      let newCartItems;
      const existingCartItem = state.cartItems.find(
        (cartItem) => cartItem._id === action.payload
      );
      if (existingCartItem) {
        newCartItems = state.cartItems.map((cartItem) => {
          if (cartItem._id === action.payload) {
            cartItem = { ...cartItem, qty: cartItem.qty + 1 };
          }
          return cartItem;
        });
      } else {
        const newCartItem = items.find((item) => item._id === action.payload);
        newCartItems = [...state.cartItems, { ...newCartItem, qty: 1 }];
      }
      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
      return {
        ...state,
        cartItems: newCartItems,
      };
    case "INC_CART_QTY":
      let resCartItems;
      resCartItems = state.cartItems.map((cartItem) => {
        if (cartItem._id === action.payload) {
          cartItem = { ...cartItem, qty: cartItem.qty + 1 };
        }
        return cartItem;
      });
      localStorage.setItem("cartItems", JSON.stringify(resCartItems));
      return {
        ...state,
        cartItems: resCartItems,
      };
    case "DEC_CART_QTY":
      let CartItems;
      CartItems = state.cartItems.map((cartItem) => {
        if (cartItem._id === action.payload) {
          cartItem = { ...cartItem, qty: cartItem.qty - 1 };
        }
        return cartItem;
      });
      localStorage.setItem("cartItems", JSON.stringify(CartItems));
      return {
        ...state,
        cartItems: CartItems,
      };
    case "REMOVE_FROM_CART":
      const filteredCartItems = state.cartItems.filter(
        (cartItem) => cartItem._id !== action.payload
      );
      localStorage.setItem("cartItems", JSON.stringify(filteredCartItems));
      return {
        ...state,
        cartItems: filteredCartItems,
      };
    case "CLEAR_CART":
      localStorage.removeItem("cartItems");
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};

const cartItemsFromLocalStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const initialState = {
  cartItems: cartItemsFromLocalStorage,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id) => {
    dispatch({ type: "ADD_TO_CART", payload: id });
  };

  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const handleCartQty = (id, type, qty) => {
    if (type === "inc") {
      dispatch({ type: "INC_CART_QTY", payload: id });
    } else if (type === "dec") {
      if (qty > 1) {
        dispatch({ type: "DEC_CART_QTY", payload: id });
      } else {
        dispatch({ type: "REMOVE_FROM_CART", payload: id });
      }
    }
  };
  return (
    <AppContext.Provider
      value={{ state, addToCart, handleCartQty, removeFromCart, clearCart }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
