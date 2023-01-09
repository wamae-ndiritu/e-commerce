import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import mpesa from "../Images/mpesa.png";
import { verifyPayment } from "../Redux/Actions/paymentActions";
import Message from "../utilities/Message";

const PaymentVerificationPage = () => {
  const dispatch = useDispatch();

  const [mpesaCode, setMpesaCode] = useState("");

  const paymentVerification = useSelector((state) => state.paymentVerification);
  const { loading, error, success } = paymentVerification;

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const amountPaid = cartItems
    .reduce((itemA, itemB) => itemA + itemB.qty * itemB.price, 0)
    .toFixed(2);

  useEffect(() => {
    if (success) {
      console.log("Payment verified successfully");
    }
  }, [success]);

  const handlePaymentVerification = (e) => {
    e.preventDefault();
    dispatch(verifyPayment(mpesaCode, amountPaid));
  };

  return (
    <div className="container">
      <div className="row d-flex justify-content-center mb-3">
        <div className="col-sm-6 col-md-8 col-lg-5 shadow-lg my-3">
          {loading ? (
            <div className="d-flex justify-content-center mt-3 mx-3">
              <div class="spinner-border text-success" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            error && (
              <div className="mt-3">
                <Message variant="alert-danger">{error}</Message>
              </div>
            )
          )}
          <form className="mb-3 pay-form-cont">
            <h6 className="text-center mt-3">Verify Payment</h6>
            <div className="pay-form">
              <div className="pay-form-left">
                <h6>Mpesa Code</h6>
                <input
                  type="text"
                  className="form-control"
                  placeholder="QLA1U9ZHSR"
                  onChange={(e) => setMpesaCode(e.target.value)}
                />
                <div className="my-3">
                  <button
                    className="btn reset-btn"
                    style={{ width: "100%" }}
                    onClick={handlePaymentVerification}
                  >
                    Verify
                  </button>
                </div>
              </div>
              <div className="pay-form-right">
                <img src={mpesa} alt="" />
              </div>
            </div>
            <p>
              Enter the mpesa code in the mpesa confirmation message you
              received after making your payment. If you have not yet received,
              please wait before continuing.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentVerificationPage;
