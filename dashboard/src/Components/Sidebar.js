import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import HouseIcon from "@mui/icons-material/House";
import SettingsIcon from "@mui/icons-material/Settings";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import LogoutIcon from "@mui/icons-material/Logout";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import CloseIcon from "@mui/icons-material/Close";
import { logout } from "../Redux/Actions/userActions";

const Sidebar = () => {
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };
  return (
    <div>
      <div className="main-sidebar shadow-lg">
        <div className="side-header">
          <div className="side-logo-cont">
            <h3>Ecommerce</h3>
            <CloseIcon className="close-icon" />
          </div>
          <div className="hr"></div>
        </div>
        <div className="side-link">
          <div className="link-title">
            <h6 className="side-link-text">Dashboard</h6>
          </div>
          <ul className="link-list">
            <li>
              <div className="side-icons">
                <HouseIcon className="nav-icon" />
              </div>
              <Link to="/">Home</Link>
            </li>
            <li>
              <div className="side-icons">
                <AnalyticsIcon className="nav-icon" />
              </div>
              <Link to="/">Analytics</Link>
            </li>
          </ul>
        </div>
        <div className="side-link">
          <div className="link-title">
            <h6 className="side-link-text">Sales</h6>
          </div>
          <ul className="link-list">
            <li>
              <div className="side-icons">
                <AddShoppingCartIcon className="nav-icon" />
              </div>
              <Link to="/orders/new">New Orders</Link>
            </li>
            <li>
              <div className="side-icons">
                <MonetizationOnIcon className="nav-icon" />
              </div>
              <Link to="/orders">All Orders</Link>
            </li>
            <li>
              <div className="side-icons">
                <LocalShippingIcon className="nav-icon" />
              </div>
              <Link to="/orders/delivered">Delivered</Link>
            </li>
            <li>
              <div className="side-icons">
                <MonetizationOnIcon className="nav-icon" />
              </div>
              <Link to="/orders/paid">Paid</Link>
            </li>
          </ul>
        </div>
        <div className="side-link">
          <div className="link-title">
            <h6 className="side-link-text">Products</h6>
          </div>
          <ul className="link-list">
            <li>
              <div className="side-icons">
                <ShoppingBagIcon className="nav-icon" />
              </div>
              <Link to="/product/new">New Product</Link>
            </li>
            <li>
              <div className="side-icons">
                <ShoppingBasketIcon className="nav-icon" />
              </div>
              <Link to="/products">All Products</Link>
            </li>
          </ul>
        </div>
        <div className="side-link">
          <div className="link-title">
            <h6 className="side-link-text">Transactions</h6>
          </div>
          <ul className="link-list">
            <li>
              <div className="side-icons">
                <MonetizationOnIcon className="nav-icon" />
              </div>
              <Link to="/transactions">All Transactions</Link>
            </li>
          </ul>
        </div>
        <div className="side-link">
          <div className="link-title">
            <h6 className="side-link-text">Useful Links</h6>
          </div>
          <ul className="link-list">
            <li>
              <div className="side-icons">
                <FormatListBulletedIcon className="nav-icon" />
              </div>
              <Link to="/">Categories</Link>
            </li>
            <li>
              <div className="side-icons">
                <NotificationsNoneIcon className="nav-icon" />
              </div>
              <Link to="/">Notifications</Link>
            </li>
            <li>
              <div className="side-icons">
                <SettingsIcon className="nav-icon" />
              </div>
              <Link to="/">Settings</Link>
            </li>
            <li onClick={handleLogout}>
              <div className="side-icons">
                <LogoutIcon className="nav-icon" />
              </div>
              Logout
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
