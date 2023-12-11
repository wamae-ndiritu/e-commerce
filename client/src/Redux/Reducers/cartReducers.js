import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_CLEAR_ITEMS,
  CART_SAVE_BILLING_ADDRESS,
  CART_SAVE_PAYMENT_METHOD,
  DECREASE_CART_QTY,
} from "../Constants/cartConstants";

export const cartReducer = (
  state = { cartItems: [], billingAddress: {} },
  action
) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x.product === item.product);

      if (existItem) {
        const newItem = { ...existItem, qty: existItem.qty + 1 };
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? newItem : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case DECREASE_CART_QTY:
      const dec_productId = action.payload;
      const existingItem = state.cartItems.find(
        (x) => x.product === dec_productId
      );

      const newItem = { ...existingItem, qty: existingItem.qty - 1 };
      return {
        ...state,
        cartItems: state.cartItems.map((x) =>
          x.product === dec_productId ? newItem : x
        ),
      };

    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      };
    case CART_SAVE_BILLING_ADDRESS:
      return {
        ...state,
        billingAddress: action.payload,
      };
    case CART_SAVE_PAYMENT_METHOD:
      return {
        ...state,
        paymentMethod: action.payload,
      };
    case CART_CLEAR_ITEMS:
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};
