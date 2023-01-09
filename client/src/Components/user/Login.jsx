import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../Redux/Actions/userActions";
import Message from "../../comComponents/Message";
import "./user.css";
import { useEffect } from "react";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const redirectTo = location.search.split("redirect=")[1];

  const [isViewPassword, setIsViewPassword] = useState(false);
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });
  const [validationError, setValidationError] = useState("");
  const [isValidationError, setIsValidationError] = useState(false);

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleTogglePassword = () => {
    setIsViewPassword(!isViewPassword);
  };

  const handleLogin = () => {
    setIsValidationError(false);
    if (details.email === "") {
      setIsValidationError(true);
      setValidationError("Email required!");
    } else if (details.password === "") {
      setIsValidationError(true);
      setValidationError("Password is required!");
    } else {
      dispatch(login(details));
    }
  };

  useEffect(() => {
    if (userInfo) {
      navigate("/user/profile");
    }
  });

  useEffect(() => {
    if (userInfo && redirectTo === "checkout") {
      navigate("/checkout");
    }
  }, [userInfo, redirectTo, navigate]);
  return (
    <div className="container d-flex justify-content-center">
      <div className="login-cont col-lg-5 col-md-6 col-sm-6 col-12 shadow-lg">
        <div className="d-flex justify-content-center mt-3">
          {isValidationError ? (
            <div className="d-flex justify-content-center">
              <Message variant="alert-warning">{validationError}</Message>
            </div>
          ) : loading ? (
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
        <h4 className="text-center h4 mt-3">Login</h4>
        <div className="input-cont mb-3">
          <i class="fa fa-user-circle" aria-hidden="true"></i>
          <input
            type="email"
            placeholder="wamaejoseph392@gmail.com"
            name="email"
            value={details.email}
            onChange={handleChange}
          />
        </div>
        <div className="input-cont input-pass mb-3">
          <i class="fa fa-lock" aria-hidden="true"></i>
          <input
            type={isViewPassword ? `text` : `password`}
            placeholder="password"
            name="password"
            value={details.password}
            onChange={handleChange}
          />
          <i
            class="fa fa-eye"
            aria-hidden="true"
            onClick={handleTogglePassword}
          ></i>
        </div>
        <button className="account-btn sign-btn" onClick={handleLogin}>
          Login
        </button>
        <p className="redirect-p">
          Don't have account?{" "}
          <Link to="/register" className="redirect-link">
            Register
          </Link>
        </p>
        <p className="redirect-p mb-3">
          <Link to="/user/forgot/password" className="redirect-link">
            Forgot password
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
