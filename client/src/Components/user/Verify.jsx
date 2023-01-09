import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Message from "../../comComponents/Message";
import { verifyOtp } from "../../Redux/Actions/userActions";

const Verify = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [otp, setOtp] = useState("");
  const [isViewInfo, setIsViewInfo] = useState(true);
  const [info, setInfo] = useState(
    "Please check your email, we have sent you a verification code."
  );

  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo } = userRegister;

  const userId = userInfo?._id;

  const userVerification = useSelector((state) => state.userVerification);
  const { loading, error, success } = userVerification;

  const handleOTP = (e) => {
    setOtp(e.target.value);
  };

  const handleResendOTP = () => {
    setInfo("We have resent the verification code...");
    setIsViewInfo(true);
    console.log("You want to resend password");
  };

  const handleSubmit = () => {
    setIsViewInfo(false);
    if (otp === "") {
      setInfo("Enter code");
      setIsViewInfo(true);
    } else {
      dispatch(verifyOtp(otp, userId));
    }
  };

  useEffect(() => {
    if (success) {
      console.log("Logged in successfuly");
      navigate("/");
    }
  });

  return (
    <div className="container d-flex justify-content-center">
      <div className="login-cont col-lg-5 col-md-6 col-sm-6 col-10 shadow-lg">
        {isViewInfo && (
          <p className="text-center alert alert-warning mx-3 mt-3 otp-info">
            {info}
          </p>
        )}
        <div className="d-flex justify-content-center mt-3">
          {loading ? (
            <div class="spinner-border text-warning" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          ) : (
            error && (
              <div className="d-flex justify-content-center">
                <Message variant="alert-warning">{error}</Message>
              </div>
            )
          )}
        </div>
        <h4 className="text-center h4 mb-3 mt-3">Enter Verification Code</h4>
        <div className="input-cont mb-3">
          <input
            className="input"
            type="email"
            placeholder=""
            name="username"
            value={otp}
            onChange={handleOTP}
          />
        </div>
        <button className="account-btn sign-btn" onClick={handleSubmit}>
          Submit
        </button>
        <p className="redirect-p mb-3">
          Didn't receive code?{" "}
          <Link className="redirect-link" onClick={handleResendOTP}>
            Resend
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Verify;
