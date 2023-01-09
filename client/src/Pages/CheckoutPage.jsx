import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import mpesa from "../Images/mpesa.png";
import {
  saveBillingAddress,
  savePaymentMethod,
} from "../Redux/Actions/cartActions";
import { createOrder } from "../Redux/Actions/orderActions";

const CheckoutPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    county: "",
    postalCode: "",
  });
  const [isChecked, setIsChecked] = useState(false);
  const [isPaymentChecked, setIsPaymentChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [deliveryMethod, setDeliveryMethod] = useState("");

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const cartTotals = cartItems
    .reduce((itemA, itemB) => itemA + itemB.qty * itemB.price, 0)
    .toFixed(2);

  const totalPrice = Number(Math.round(cartTotals));

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleBillingAddress = () => {
    setIsChecked(!isChecked);
  };

  const handlePaymentMethod = () => {
    setIsPaymentChecked(!isPaymentChecked);
  };

  useEffect(() => {
    if (userInfo) {
      setEmail(userInfo.email);
      setPhone(userInfo.phone);
    }
  });

  const handlePlaceOrder = () => {
    if (userInfo) {
      if (
        (inputs.firstName &&
          inputs.lastName &&
          inputs.address &&
          inputs.city &&
          inputs.county &&
          inputs.postalCode) !== ""
      ) {
        const address = inputs.address;
        const city = inputs.city;
        const county = inputs.county;
        const postalCode = inputs.postalCode;
        const firstName = inputs.firstName;
        const lastName = inputs.lastName;
        if (isChecked) {
          dispatch(
            saveBillingAddress({
              firstName,
              lastName,
              email,
              phone,
              address,
              city,
              county,
              postalCode,
            })
          );
        }
        if (isPaymentChecked) {
          dispatch(savePaymentMethod(paymentMethod));
        }

        navigate("/checkout/payment");
      }
    }
  };
  return (
    <div className="container">
      <div className="checkout-wrapper my-3">
        <div className="checkout-left shadow-sm">
          <h6 className="text-center checkout-title">Billing Details</h6>
          <div className="checkout-details">
            <div className="mb-3 d-flex">
              <div className="name-1">
                <h6>First Name</h6>
                <input
                  type="text"
                  className="form-control"
                  name="firstName"
                  value={inputs.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="name-1">
                <h6>Last Name</h6>
                <input
                  type="text"
                  className="form-control"
                  name="lastName"
                  value={inputs.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mb-3">
              <h6>Email</h6>
              <input
                type="email"
                className="form-control"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <h6>Phone</h6>
              <input
                type="text"
                className="form-control"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <h6>Street Address</h6>
              <input
                type="text"
                className="form-control"
                placeholder="House Number and Street Name"
                name="address"
                value={inputs.address}
                onChange={handleChange}
              />
              <input
                type="text"
                className="form-control mt-3"
                placeholder="Apartment, suit, unit(optional)"
              />
            </div>
            <div className="mb-3">
              <h6>Town/City</h6>
              <input
                type="text"
                className="form-control"
                name="city"
                value={inputs.city}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <h6>State/County</h6>
              <input
                type="text"
                className="form-control"
                name="county"
                value={inputs.county}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <h6>Postalcode/Zip</h6>
              <input
                type="text"
                className="form-control"
                name="postalCode"
                value={inputs.postalCode}
                onChange={handleChange}
              />
            </div>
            <div className="radio-container d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                onChange={handleBillingAddress}
              />
              <p className="px-3 form-check-label">
                Save Billing address for future transactions
              </p>
            </div>
          </div>
        </div>
        <div className="checkout-right shadow-sm">
          <h6 className="text-center checkout-title">Your Order</h6>
          <div className="checkout-order">
            <div className="checkout-order-header">
              <h6 className="order-left">Products</h6>
              <h6 className="order-qty">Qty</h6>
              <h6 className="order-price">Price</h6>
              <h6 className="order-right">Subtotals (KES)</h6>
            </div>
            {cartItems?.map((item) => {
              const { product, productName, productImages, qty, price } = item;
              return (
                <div className="checkout-order-item" key={product}>
                  <div className="order-image-cont">
                    <img src={productImages[0]} alt={productName.slice(0, 5)} />
                  </div>
                  <p>{productName}</p>
                  <h6 className="order-qty">{qty}</h6>
                  <h6 className="order-price">{price}</h6>
                  <h6>{qty * price}</h6>
                </div>
              );
            })}
            <div className="checkout-order-subtotals">
              <h6 className="order-left">Totals</h6>
              <h6 className="order-right">{cartTotals}</h6>
            </div>
          </div>
          <div className="mb-3">
            <h6>Method of Delievery</h6>
            <div className="radio-container d-flex">
              <input
                className="form-check-input"
                type="radio"
                name="delivery"
                value="door-to-door"
                onChange={(e) => setDeliveryMethod(e.target.value)}
              />
              <p className="px-3 form-check-label">Door to door delivery</p>
            </div>
            <div className="radio-container d-flex">
              <input
                className="form-check-input"
                type="radio"
                name="delivery"
                value="pick-up-shop"
                onChange={(e) => setDeliveryMethod(e.target.value)}
              />
              <p className="px-3 form-check-label">
                Collect from our Pick up shops
              </p>
            </div>
          </div>
          <div className="mb-3">
            <h6>Payment Method</h6>
            <div className="radio-container d-flex align-items-center">
              <input
                className="form-check-input"
                type="radio"
                name="payment"
                value="lipa-na-mpesa"
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <div className="payment-img">
                <img src={mpesa} alt="" />
              </div>
            </div>
            <div className="radio-container d-flex">
              <input
                className="form-check-input"
                type="radio"
                name="payment"
                value="pay-on-delivery"
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <p className="px-3 form-check-label">Pay on delivery</p>
            </div>
          </div>
          <div className="radio-container d-flex mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              onChange={handlePaymentMethod}
            />
            <p className="px-3 form-check-label">
              Save payment method for future use
            </p>
          </div>
          <button className="btn reset-btn" onClick={handlePlaceOrder}>
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
