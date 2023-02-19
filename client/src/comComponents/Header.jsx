import React from "react";
// import $ from "jquery";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { categories } from "../Components/Banner/categoryData";
// import { useGlobalContext } from "../contextAPI/context";

const Header = () => {
  const [isViewSearchInput, setIsViewSearchInput] = useState(false);
  const [isViewCategories, setIsViewCategories] = useState(false);
  const [isViewMobileLinks, setIsViewMobileLinks] = useState(false);

  window.addEventListener("scroll", function () {
    const activeHeader = document.querySelector("#header");
    activeHeader?.classList.toggle("active-header", window.scrollY > 10);
  });

  const expandCategories = () => {
    setIsViewCategories(!isViewCategories);
  };

  const toggleMobileLinks = () => {
    setIsViewMobileLinks(!isViewMobileLinks);
    if (window.scrollY === 0) {
      console.log(window.scrollY);
      const activeHeader = document.querySelector("#header");
      activeHeader?.classList.toggle("active-header");
    }
  };

  // useEffect(() => {
  //   var $el = $(".category").clone();
  //   console.log($el);

  //   $("#append-categories").append($el);
  //   const displayCategoriesBtn = document.querySelector(".category");
  //   displayCategoriesBtn.classList.add(".hover-categories");
  // }, []);
  // const newCat = document.querySelector(".category");
  // console.log(newCat);
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
      <div id="header">
        {isViewSearchInput ? (
          <div className="logo-row">
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
          </div>
        ) : (
          <div className="logo-row">
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
                <i className="fa fa-search" aria-hidden="true"></i>
              </p>
              <p className="small-header-icon" onClick={toggleMobileLinks}>
                <i
                  className={isViewMobileLinks ? `fa fa-times` : `fa fa-bars`}
                  aria-hidden="true"
                ></i>
              </p>
              {isViewMobileLinks && (
                <div className="mobile-links">
                  <ul className="mobile-links-ul">
                    <li className="link-1" onClick={expandCategories}>
                      Categories <i className="fa fa-chevron-down"></i>
                      {isViewCategories && (
                        <ul className="hidden-categories">
                          {categories.map((value, index) => {
                            return (
                              <li className="box c-flex link" key={index}>
                                <img src={value.cateImg} alt="" />
                                <span>{value.cateName}</span>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </li>
                    <li className="link">Delivery</li>
                    <li className="link">
                      Orders <i className="fa fa-chevron-down"></i>
                    </li>
                    <li className="link">
                      About Us <i className="fa fa-chevron-down"></i>
                    </li>
                    <li className="link">
                      <Link to="/FAQs">FAQs</Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      <div className="navbar-row shadow-sm">
        <div className="navbar-right">
          <p id="append-categories">
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
