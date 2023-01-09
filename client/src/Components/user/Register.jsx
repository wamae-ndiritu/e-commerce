import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./user.css";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../comComponents/Message";
import { registerUser } from "../../Redux/Actions/userActions";
import { useEffect } from "react";

const Register = () => {
  const [isValidationError, setIsValidationError] = useState(false);
  const [validationError, setValidationError] = useState({});
  const [isViewPassword, setIsViewPassword] = useState(false);
  const [isViewPassword2, setIsViewPassword2] = useState(false);
  const [details, setDetails] = useState({
    username: "",
    email: "",
    phone: "",
    password_1: "",
    password_2: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, success, error } = userRegister;

  const handleTogglePassword = (type) => {
    if (type === "password_1") {
      setIsViewPassword(!isViewPassword);
    } else if (type === "password_2") {
      setIsViewPassword2(!isViewPassword2);
    }
  };

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (isValidationError) {
      setIsValidationError(!isValidationError);
    }
    if (
      details.username === "" ||
      details.email === "" ||
      details.phone === "" ||
      details.password_1 === "" ||
      details.password_2 === ""
    ) {
      setIsValidationError(true);
      setValidationError({ message: "Please fill all the fields below" });
    } else {
      if (details.password_1.length >= 8) {
        if (details.password_1 === details.password_2) {
          dispatch(registerUser(details));
        } else {
          setIsValidationError(true);
          setValidationError({ message: "Passwords do not match!" });
        }
      } else {
        setIsValidationError(true);
        setValidationError({
          message: "Passwords must atleast be 8 characters",
        });
      }
    }
  };

  useEffect(() => {
    if (error) {
      setDetails({
        username: "",
        email: "",
        phone: "",
        password_1: "",
        password_2: "",
      });
    }
    if (success) {
      console.log("User registered successfully!");
      navigate("/user/verify/one-time-password");
    }
  }, [success]);

  return (
    <div className="container d-flex justify-content-center">
      <div className="login-cont col-lg-5 col-md-6 col-sm-6 col-12 shadow-lg">
        <div className="d-flex justify-content-center mt-3">
          {isValidationError ? (
            <div className="d-flex justify-content-center">
              <Message variant="alert-warning">
                {validationError.message}
              </Message>
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
        <h4 className="text-center h4 mt-3 mb-3">Register</h4>
        <div className="input-cont mb-3">
          <i class="fa fa-user-circle" aria-hidden="true"></i>
          <input
            className="input"
            type="email"
            placeholder="Username"
            name="username"
            value={details.username}
            onChange={handleChange}
          />
        </div>
        <div className="input-cont mb-3">
          <i class="fa fa-user-circle" aria-hidden="true"></i>
          <input
            className="input"
            type="email"
            placeholder="Email"
            name="email"
            value={details.email}
            onChange={handleChange}
          />
        </div>
        <div className="input-cont mb-3">
          <i class="fa fa-phone" aria-hidden="true"></i>
          <input
            className="input"
            type="text"
            placeholder="Phone No"
            name="phone"
            value={details.phone}
            onChange={handleChange}
          />
        </div>
        <div className="input-cont input-pass mb-3">
          <i class="fa fa-lock" aria-hidden="true"></i>
          <input
            className="input"
            type={isViewPassword ? `text` : `password`}
            placeholder="Password"
            name="password_1"
            value={details.password_1}
            onChange={handleChange}
          />
          <i
            class="fa fa-eye"
            aria-hidden="true"
            onClick={() => handleTogglePassword("password_1")}
          ></i>
        </div>
        <div className="input-cont input-pass mb-3">
          <i class="fa fa-lock" aria-hidden="true"></i>
          <input
            className="input"
            type={isViewPassword2 ? `text` : `password`}
            placeholder="Confirm Password"
            name="password_2"
            value={details.password_2}
            onChange={handleChange}
          />
          <i
            class="fa fa-eye"
            aria-hidden="true"
            onClick={() => handleTogglePassword("password_2")}
          ></i>
        </div>
        <button className="account-btn sign-btn" onClick={handleRegister}>
          Register
        </button>
        <p className="redirect-p mb-3">
          Already have account?{" "}
          <Link to="/login" className="redirect-link">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
