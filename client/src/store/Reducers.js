export const reducer = (state, action) => {
    switch(action.type){
      case "ADD_TO_CART":
        const newCartItems = [...state.cartItems, action.payload];
        return{
          ...state,
          cartItems: newCartItems,
        }
        default:
          return state;
    }
  }

export const initialState = {
    cartItems: [],
    caryTotals: 0,
  }