import React from "react";
import { useSelector } from "react-redux";
// import { useGlobalContext } from "../../contextAPI/context";

const CartSummary = () => {
  // const {
  //   state: { cartItems },
  // } = useGlobalContext();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const cartTotals = cartItems
    .reduce((itemA, itemB) => itemA + itemB.qty * itemB.price, 0)
    .toFixed(2);
  return (
    <div className="cont">
      <p className="h5 mt-3">Cart Summary</p>
      <table className="table table-bordered">
        <tbody>
          <tr>
            <td>
              <strong>Products</strong>
            </td>
            <td>Ksh {cartTotals}</td>
          </tr>
          <tr>
            <td>
              <strong>Shipping</strong>
            </td>
            <td>Ksh 0.0</td>
          </tr>
          <tr>
            <td>
              <strong>Tax</strong>
            </td>
            <td>Ksh 0.0</td>
          </tr>
          <tr>
            <td>
              <strong>Total</strong>
            </td>
            <td>Ksh {cartTotals}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CartSummary;
