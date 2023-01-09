import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import raha from "../../Images/raha.jpg";
import { getOrderDetails } from "../../Redux/Actions/orderActions";

const Order = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const orderId = params.id;

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order } = orderDetails;

  useEffect(() => {
    dispatch(getOrderDetails(orderId));
  }, [dispatch, orderId]);

  console.log(order);
  return (
    <div className="container mb-3">
      <div className="my-3 order-info shadow-lg ">
        <div className="order-info-cont mb-3 alert alert-success">
          <div className="center">
            <div className="icon-cont"></div>
            <div className="order-user-info">
              <h5>Customer</h5>
              <h6>Wamae</h6>
              <h6>Wamaejoseph392@gmail.com</h6>
            </div>
          </div>
          <div className="center">
            <div className="icon-cont"></div>
            <div className="order-user-info">
              <h5>Order Info</h5>
              <h6>Payment</h6>
              <h6>Paid</h6>
            </div>
          </div>
          <div className="center">
            <div className="icon-cont"></div>
            <div className="order-user-info">
              <h5>Deliver to</h5>
              <h6>Address</h6>
              <h6>City</h6>
            </div>
          </div>
        </div>
        <div className="orderDetailsInfoCont mb-3">
          <div className="orderDetail-1">
            <div className="orderInfo-title">
              <div className="orderTitle">
                <h6>Product</h6>
              </div>
              <div className="orderDetailsTitle">
                <h6>Description</h6>
              </div>
              <div className="orderQtyTitle">
                <h6>Qty</h6>
              </div>
              <div className="orderPriceTitle">
                <h6>Price</h6>
              </div>
              <div className="orderTotalsTitle">
                <h6>Totals</h6>
              </div>
            </div>
            {order?.orderItems?.map((orderItem) => {
              return (
                <div className="orderDetailsFlex" key={orderItem._id}>
                  <div className="orderImgCont">
                    <img
                      src={orderItem?.productImages}
                      alt={orderItem?.productName}
                    />
                  </div>
                  <div className="orderDetailsCont">
                    <h6>{orderItem?.productName}</h6>
                    {orderItem?.quantities?.map((quantity, index) => {
                      return <p>{quantity}</p>;
                    })}
                  </div>
                  <div className="orderQtyCont">
                    <p>{orderItem?.qty}</p>
                  </div>
                  <div className="orderPriceCont">
                    <h6>KES {orderItem?.price}</h6>
                  </div>
                  <div className="orderTotalCont">
                    <h6>KES {orderItem?.qty * orderItem?.price}</h6>
                  </div>
                </div>
              );
            })}
            <div className="row my-3 payment-flex">
              <div className="col-3">
                {order?.isPaid ? (
                  <div className="payment-box alert alert-info">
                    <h6 className="text-success">Payment Done</h6>
                  </div>
                ) : (
                  <div className="payment-box alert alert-danger">
                    <h6 className="text-success">Not Paid</h6>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="orderDetailSummary">
            <table className="table table-bordered mb-3">
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
            <div className="mb-3 alert alert-info d-flex justify-content-center">
              <button className="btn btn-success">Mark as Delivered</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
