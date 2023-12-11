import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import mpesa from "../Images/mpesa.png";
import { getOrderDetails } from "../Redux/Actions/orderActions";

const OrderPage = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const orderId = params.id;

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order } = orderDetails;

  console.log(order);

  useEffect(() => {
    dispatch(getOrderDetails(orderId));
  }, [dispatch, orderId]);

  return (
    <div className="container mt-4">
      <div className="row  order-detail">
        <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
          <div className="row">
            <div className="col-md-3 center">
              <div className="alert-success order-box">
                <i className="fas fa-user"></i>
              </div>
            </div>
            <div className="col-md-9 center">
              <h5>
                <strong>Customer</strong>
              </h5>
              <p>
                {order?.billingAddress.firstName}{" "}
                {order?.billingAddress.lastName}
              </p>
              <p>
                <a href={`mailto:${order?.billingAddress.email}`}>
                  {order?.billingAddress.email}
                </a>
              </p>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
          <div className="row">
            <div className="col-md-3 center">
              <div className="alert-success order-box">
                <i className="fas fa-truck-moving"></i>
              </div>
            </div>
            <div className="col-md-9 center">
              <h5>
                <strong>Order info</strong>
              </h5>
              <p>Billing to: {order?.billingAddress.county}, Kenya</p>
              <div className="order-pay-method">
                <p>Payment:</p>{" "}
                {order?.paymentMethod === "Lipa Na Mpesa" ? (
                  <img src={mpesa} alt="" style={{ marginBottom: "4px" }} />
                ) : (
                  <div>Other Methods</div>
                )}
              </div>
              {order?.isPaid ? (
                <div className="bg-info p-2 col-8 d-flex justify-content-center align-items-center">
                  <p className="text-white text-center text-sm-start">
                    Paid on
                  </p>
                </div>
              ) : (
                <div className="bg-danger p-2 col-8 d-flex justify-content-center align-items-center">
                  <p className="text-white text-center text-sm-start">
                    Not Paid
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* 3 */}
        <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
          <div className="row">
            <div className="col-md-3 center">
              <div className="alert-success order-box">
                <i className="fas fa-map-marker-alt"></i>
              </div>
            </div>
            <div className="col-md-9 center">
              <h5>
                <strong>Deliver to</strong>
              </h5>
              <p>
                Address: {""}
                {order?.billingAddress.city}, {order?.billingAddress.address},{" "}
                {order?.billingAddress.postalCode}, {""}{" "}
                {order?.billingAddress.county}
              </p>
              <div className="bg-info p-2 col-8">
                <p className="text-white text-center text-sm-start">
                  Delivered on {/* {moment(order.deliveredAt).calendar()} */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row order-products justify-content-between">
        <div className="col-lg-8">
          {order?.orderItems.map((orderItem) => {
            const { productName, productImages, product, price, qty } =
              orderItem;
            return (
              <div className="order-product row" key={product}>
                <div className="col-md-3 col-6">
                  <img src={productImages} alt="" />
                </div>
                <div
                  className="col-md-5 col-6 d-flex align-items-center justify-content-center"
                  style={{ flexDirection: "column" }}
                >
                  <Link to={`/products/${product}`} className="mb-2">
                    <h6>{productName}</h6>
                  </Link>
                </div>
                <div className="mt-3 mt-md-0 col-md-2 col-6  d-flex align-items-center flex-column justify-content-center ">
                  <h4>QUANTITY</h4>
                  <h6>{qty}</h6>
                </div>
                <div className="mt-3 mt-md-0 col-md-2 col-6 align-items-end  d-flex flex-column justify-content-center ">
                  <h4>SUBTOTAL</h4>
                  <h6>Ksh {qty * price}</h6>
                </div>
              </div>
            );
          })}
        </div>
        {/* total */}
        <div className="col-lg-3 d-flex align-items-end flex-column mt-5 subtotal-order">
          <table className="table table-bordered">
            <tbody>
              <tr>
                <td>
                  <strong>Products</strong>
                </td>
                <td>Ksh {order?.totalPrice}</td>
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
                <td>Ksh {order?.totalPrice}</td>
              </tr>
            </tbody>
          </table>
          {order?.isPaid !== true && (
            <div
              className="bg-danger p-2 col-12 d-flex justify-content-center"
              style={{ marginTop: "5px", marginBottom: "10px" }}
            >
              <p
                className="text-white text-center text-sm-start d-flex justify-content-center align-items-center"
                style={{ fontSize: "18px", margin: "0 auto" }}
              >
                Pay Order {order?.totalPrice}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
