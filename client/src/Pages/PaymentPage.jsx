import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import mpesa from "../Images/mpesa.png";
import { createOrder, payOrder } from "../Redux/Actions/orderActions";
import Message from "../utilities/Message";

const PaymentPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [phone, setPhone] = useState("");
  const cart = useSelector((state) => state.cart);
  const { cartItems, billingAddress } = cart;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const orderPay = useSelector((state) => state.orderPay);
  const { loading, success, error } = orderPay;

  const cartTotals = cartItems
    .reduce((itemA, itemB) => itemA + itemB.qty * itemB.price, 0)
    .toFixed(2);

  const totalPrice = Number(Math.round(cartTotals));

  const mpesaPayHandler = (e) => {
    e.preventDefault();
    dispatch(
      payOrder({
        phoneNo: phone,
        amountPayable: cartTotals,
      })
    );
  };

  const verifyHandler = (e) => {
    e.preventDefault();
    navigate("/checkout/payment/verification");
  };

  useEffect(() => {
    if (success) {
      const orderItems = cartItems;
      dispatch(createOrder(orderItems, billingAddress, totalPrice));
    }
  }, [success, dispatch, billingAddress, cartItems, totalPrice]);

  useEffect(() => {
    if (userInfo) {
      setPhone(`254${userInfo.phone.slice(1, 10)}`);
    }
  }, [userInfo]);

  return (
    <div className="container">
      <div className="row d-flex justify-content-center mb-3">
        <div className="col-sm-6 col-md-8 col-lg-5 shadow-lg my-3">
          <form className="mb-3 pay-form-cont">
            {loading ? (
              <div className="d-flex justify-content-center mt-3 mx-3">
                <div class="spinner-border text-success" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : error ? (
              <div className="mt-3">
                <Message variant="alert-danger">{error}</Message>
              </div>
            ) : (
              success && (
                <div className="mt-3">
                  <Message variant="alert-success text-success">
                    Please check your phone...
                  </Message>
                </div>
              )
            )}
            <h6 className="text-center mt-3">Make Payment</h6>
            <div className="pay-form">
              <div className="pay-form-left">
                <h6>Mpesa Phone No.</h6>
                <input
                  type="text"
                  className="form-control"
                  placeholder="254740924507"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <div className="pt-2">
                  <h6>Pay KES {cartTotals}</h6>
                </div>
                <div className="my-3">
                  {success ? (
                    <>
                      <p className="redirect-p mb-3">
                        Please click verify payment once you have paid...
                      </p>
                      <button
                        className="btn reset-btn"
                        style={{ width: "100%" }}
                        onClick={verifyHandler}
                      >
                        Verify Payment
                      </button>
                    </>
                  ) : (
                    <button
                      className="btn reset-btn"
                      style={{ width: "100%" }}
                      onClick={mpesaPayHandler}
                    >
                      Pay Order
                    </button>
                  )}
                </div>
              </div>
              <div className="pay-form-right">
                <img src={mpesa} alt="" />
              </div>
            </div>
            <p>
              On clicking pay, an mpesa prompt will be sent to your mobile phone
              requesting you to enter your mpesa pin. Enter your pin to
              authorize the transaction. Finally, you will be directed to a
              payment verification page.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
