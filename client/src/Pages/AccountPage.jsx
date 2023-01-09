import React from "react";
import { Link } from "react-router-dom";

const AccountPage = () => {
  return (
    <div className="cotainer">
      <div className="row d-flex justify-content-center my-5">
        <div className="col-md-5 col-lg-5 col-10 col-md-4 col-lg-4 shadow-lg acc-flex py-3 mb-4">
          <p>Already a user?</p>
          <Link to="/login" className="acc-link-btn">
            <button className="account-btn">Login</button>
          </Link>
          <p>Don't have an Account?</p>
          <Link to="/register" className="acc-link-btn">
            <button className="account-btn account-btn-red mb-5">
              Register
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
