import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";
import { listOrders } from "../../Redux/Actions/orderActions";
import Message from "../../utilities/Message";

const Orders = () => {
  const dispatch = useDispatch();

  const orderList = useSelector((state) => state.orderList);
  const { loading, error, orders } = orderList;

  useEffect(() => {
    dispatch(listOrders());
  }, [dispatch]);

  return (
    <div className="container">
      <div className="shadow-lg my-3 all-products-cont">
        <div className="my-3 d-flex order-row-header">
          <div className="order-row-left">
            <h5>Orders</h5>
          </div>
          <div className="order-row-right">
            <div className="input-group row-right-1">
              <input
                type="text"
                className="form-control"
                placeholder="search order by username or email"
              />
              <button className="btn btn-warning input-group-text">
                <SearchIcon />
              </button>
            </div>
            <div className="order-filter-cont">
              <h6>Price</h6>
              <select className="form-select">
                <option selected>--Default--</option>
                <option>Low to High</option>
                <option>High to Low</option>
              </select>
            </div>
            <div className="order-filter-cont">
              <h6>Time</h6>
              <select className="form-select">
                <option selected>--Default--</option>
                <option>Newest to Oldest</option>
                <option>Oldest to Newest</option>
              </select>
            </div>
          </div>
        </div>
        <div className="row all-products-header">
          <div className="col-1">
            <h6>User</h6>
          </div>
          <div className="col-3">
            <h6>Email</h6>
          </div>
          <div className="col-2">
            <h6>Amount</h6>
          </div>
          <div className="col-1">
            <h6>Status</h6>
          </div>
          <div className="col-1">
            <h6>Delivery</h6>
          </div>
          <div className="col-2">
            <h6>Date</h6>
          </div>
          <div className="col-2">
            <h6>Actions</h6>
          </div>
        </div>
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
        {orders?.map((order) => {
          return (
            <div
              className="row d-flex align-items-center all-prod-row"
              key={order._id}
            >
              <div className="col-1">
                <h6>{order.billingAddress.firstName}</h6>
              </div>
              <div className="col-3">
                <h6>{order?.user?.email}</h6>
              </div>
              <div className="col-2">
                <p className="">KES {order?.totalPrice}</p>
              </div>
              <div className="col-1">
                {order?.isPaid ? (
                  <p className="text-sucess">Paid</p>
                ) : (
                  <p className="text-danger">Not Paid</p>
                )}
              </div>
              <div className="col-1">
                {order?.isDelivered ? (
                  <p className="text-success">Yes</p>
                ) : (
                  <p className="text-danger">No</p>
                )}
              </div>
              <div className="col-2 text-success">
                <p>12th Dec 2022</p>
              </div>
              <div className="col-2 actions-icons-cont">
                <div className="actions-icons">
                  <Link to={`/order/${order?._id}`}>
                    <VisibilityIcon className="text-info" />
                  </Link>
                </div>
                <div className="actions-icons">
                  <DeleteIcon className="text-danger" />
                </div>
              </div>
            </div>
          );
        })}
        <div className="row pagination-row">
          <div className="col-4 d-flex my-3 pagination">
            <button>Prev</button>
            <button className="pagination-active bg-warning">1</button>
            <button>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
