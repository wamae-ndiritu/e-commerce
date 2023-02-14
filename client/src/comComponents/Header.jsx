import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { useGlobalContext } from "../contextAPI/context";

const Header = () => {
  const [isViewSearchInput, setIsViewSearchInput] = useState(false);

  window.addEventListener("scroll", function () {
    const activeHeader = document.querySelector("#header");
    activeHeader?.classList.toggle("active-header", window.scrollY > 100);
  });
  // const {
  //   state: { cartItems },
  // } = useGlobalContext();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  return (
    <div className="head">
      <div className="top-header">
        <p className="head-email">
          <i className="fa fa-envelope-o"></i> info@shangiliawholesalers.co.ke
        </p>
        <p className="head-contact-1">
          <i className="fa fa-phone"></i> +254793844124
        </p>
        <p className="head-contact-2">
          <i className="fa fa-phone"></i> +254740924507
        </p>
        <p style={{ color: "#fff" }} className="head-help">
          <Link to="/help/center">
            <i className="fa fa-question-circle-o"></i> Help Center
          </Link>
        </p>
      </div>
      <div className="logo-row" id="header">
        {isViewSearchInput ? (
          <form>
            <div className="search-input-cont mobile-search">
              <input
                type="text"
                className="search-input form-control"
                placeholder="Search your product here..."
              />
              <button className="search-btn" type="button">
                <i className="fa fa-search" aria-hidden="true"></i>
              </button>
            </div>
          </form>
        ) : (
          <>
            <h1 className="logo-header">
              <Link to="/">Shangilia Wholesalers Ltd</Link>
            </h1>
            <div className="big-search-cont">
              <div className="search-input-cont">
                <input
                  type="text"
                  className="search-input form-control"
                  placeholder="Search your product here..."
                />
                <button className="search-btn" type="button">
                  <i className="fa fa-search" aria-hidden="true"></i>
                </button>
              </div>
            </div>
            <div className="right-header">
              <p className="cart-p-cont">
                <Link to="/cart">
                  <i className="fa fa-cart-plus cart-icon"></i>{" "}
                  <span className="icon-text">Cart</span>
                </Link>
                {cartItems.length >= 1 && (
                  <span className="cart-badge">{cartItems.length}</span>
                )}
              </p>
              <p className="mobile-hide">
                <Link to="/account">
                  <i className="fa fa-user-o"></i>{" "}
                  <span className="icon-text">Account</span>
                </Link>
              </p>
              <p className="mobile-hide">
                <Link to="/wishlist">
                  <i className="fa fa-heart-o"></i>{" "}
                  <span className="icon-text">Wishlist</span>
                </Link>
              </p>
              <p
                onClick={() => setIsViewSearchInput(!isViewSearchInput)}
                className="small-header-icon"
              >
                <i
                  className="fa fa-search"
                  aria-hidden="true"
                  style={{ fontSize: "20px" }}
                ></i>
              </p>
              <p className="small-header-icon">
                <i
                  className="fa fa-bars"
                  aria-hidden="true"
                  style={{ fontSize: "20px" }}
                ></i>
              </p>
            </div>
          </>
        )}
      </div>
      <div className="navbar-row shadow-sm">
        <div className="navbar-right">
          <p>
            <span className="fa fa-building-o"></span> Categories{" "}
            <i className="fa fa-chevron-down"></i>
          </p>
        </div>
        <ul className="main-menu">
          <li>Delivery</li>
          <li>
            Orders <i className="fa fa-chevron-down"></i>
          </li>
          <li>
            About Us <i className="fa fa-chevron-down"></i>
          </li>
          <li>
            <Link to="/FAQs">FAQs</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
