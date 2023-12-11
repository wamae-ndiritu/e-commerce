import {
  LIST_TRANSACTIONS_REQUEST,
  LIST_TRANSACTIONS_SUCCESS,
  LIST_TRANSACTIONS_FAIL,
} from "../Constants/transactionConstants";

export const transactionListReducer = (
  state = { transactions: [] },
  action
) => {
  switch (action.type) {
    case LIST_TRANSACTIONS_REQUEST:
      return {
        loading: true,
      };
    case LIST_TRANSACTIONS_SUCCESS:
      return {
        loading: false,
        transactions: action.payload,
      };
    case LIST_TRANSACTIONS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
