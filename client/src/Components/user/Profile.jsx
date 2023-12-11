import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Toast from "../../utilities/Toast";
import moment from "moment";
import { listUserOrders } from "../../Redux/Actions/orderActions";
import { Link } from "react-router-dom";
import { logout } from "../../Redux/Actions/userActions";

const ToastObjects = {
  pauseOnFocusLoss: false,
  draggable: false,
  pauseOnHover: false,
  autoClose: 2000,
};

const Profile = () => {
  const dispatch = useDispatch();
  const [showEdit, setShowEdit] = useState(false);
  const [showAccount, setShowAccount] = useState(true);
  const [showOrders, setShowOrders] = useState(false);
  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    password_1: "",
  });

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userOrders = useSelector((state) => state.userOrders);
  const { orders } = userOrders;

  console.log(orders);

  const handleTabs = (type) => {
    if (type === "orders") {
      setShowOrders(!showOrders);
      setShowAccount(false);
    }
  };

  const handleChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (userInfo) {
      setUserDetails(userInfo);
    }
  }, [userInfo]);

  useEffect(() => {
    toast.success("Welcome to your profile", ToastObjects);
  }, []);

  useEffect(() => {
    dispatch(listUserOrders());
  }, [dispatch]);

  return (
    <div className="container d-flex justify-content-center">
      <Toast />
      <div className="profile-row my-3">
        <div className="profile-col-1">
          <div className="profile-tab">
            <i class="fa fa-user-o" aria-hidden="true"></i>
            <h6>My Account</h6>
          </div>
          <div className="profile-tab" onClick={() => handleTabs("orders")}>
            <i class="fa fa-cart-plus" aria-hidden="true"></i>
            <h6>Orders</h6>
            <span className="order-badge">{orders?.length}</span>
          </div>
          <div className="profile-tab">
            <i class="fa fa-truck" aria-hidden="true"></i>
            <h6>Deliveries</h6>
          </div>
          <div className="profile-tab">
            <i class="fa fa-heart-o" aria-hidden="true"></i>
            <h6>Wishlist</h6>
          </div>
          <div className="profile-tab" onClick={() => dispatch(logout())}>
            <i class="fa fa-sign-out" aria-hidden="true"></i>
            <h6>Logout</h6>
          </div>
        </div>
        <div className="profile-col-2">
          {showAccount && (
            <>
              <div className="account">
                <h6 className="ac-title">My Account</h6>
                <div className="my-account">
                  <div className="profile-icon">
                    <div className="prof-img-cont">
                      <img
                        src="https://avatars.githubusercontent.com/u/97445820?v=4"
                        alt=""
                      />
                    </div>
                    {showEdit ? (
                      <div
                        className="edit-profile"
                        onClick={() => setShowEdit(!showEdit)}
                      >
                        Home
                      </div>
                    ) : (
                      <div
                        className="edit-profile"
                        onClick={() => setShowEdit(!showEdit)}
                      >
                        Edit <i className="fa fa-pencil" aria-hidden="true"></i>
                      </div>
                    )}
                  </div>
                  {showEdit ? (
                    <div className="account-info">
                      <div className="update-input">
                        <h6 className="update-input-label">Username</h6>
                        <input
                          type="text"
                          name="username"
                          value={userDetails.username}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="update-input">
                        <h6 className="update-input-label">Email</h6>
                        <input
                          type="email"
                          name="email"
                          value={userDetails.email}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="update-input">
                        <h6 className="update-input-label">Phone</h6>
                        <input
                          type="text"
                          name="phone"
                          value={userDetails.phone}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="update-input">
                        <h6 className="update-input-label">Password</h6>
                        <input
                          type="password"
                          name="password"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="update-input">
                        <h6 className="update-input-label">Confirm Password</h6>
                        <input
                          type="password"
                          name="password_1"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="update-input">
                        <button className="update-btn">Update</button>
                      </div>
                    </div>
                  ) : (
                    <div className="account-info">
                      <div className="account-text-1">
                        <div className="account-text">
                          <i class="fa fa-user-o" aria-hidden="true"></i>
                          <h6>{userDetails.username}</h6>
                        </div>
                        <div className="account-text">
                          <i class="fa fa-phone" aria-hidden="true"></i>
                          <h6>{userDetails.phone}</h6>
                        </div>
                      </div>

                      <div className="account-text">
                        <i class="fa fa-envelope-o" aria-hidden="true"></i>
                        <h6>{userDetails.email}</h6>
                      </div>
                      <div className="account-text">
                        <i class="fa fa-calendar-plus-o" aria-hidden="true"></i>
                        <h6>
                          Joined {moment(userInfo.createdAt).format("LL")}
                        </h6>
                      </div>
                      <div className="acc-sub-title">Physical Address</div>
                      <div className="acc-address">
                        <i class="fa fa-map-marker" aria-hidden="true"></i>{" "}
                        address
                        <h6>128-30123</h6>
                        <h6>Nairobi, Kenya</h6>
                        <i
                          class="fa fa-street-view"
                          aria-hidden="true"
                        ></i>{" "}
                        street/road/city
                        <h6>Off Ngong' Road</h6>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </>
          )}
          {showOrders && (
            <div className="account">
              <h6 className="ac-title">Orders</h6>
              {orders?.map((order) => {
                const { _id, totalPrice, isPaid } = order;
                return (
                  <Link
                    to={`/order/${_id}`}
                    className="profile-tab user-order-list"
                    key={_id}
                  >
                    <h6>
                      <Link to={`/order/${_id}`}>{_id}</Link>
                    </h6>

                    <p className="user-order-price text-info">
                      KES{totalPrice}
                    </p>
                    {isPaid ? (
                      <p className="text-success">Paid</p>
                    ) : (
                      <p className="text-danger">Not Paid</p>
                    )}
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
