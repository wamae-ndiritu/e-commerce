import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../Redux/Actions/userActions";
import Toast from "../../utilities/Toast";

const Login = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  console.log(loading);

  const [isViewPassword, setIsViewPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleTogglePassword = () => {
    setIsViewPassword(!isViewPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if ((email && password) !== "") {
      dispatch(login(email, password));
    }
  };

  useEffect(() => {
    if (userInfo) {
      console.log(userInfo);
      navigate("/");
    } else {
      navigate("/login");
    }
  }, [userInfo, navigate]);

  return (
    <div className="container d-flex justify-content-center">
      <Toast />
      <div className="login-cont col-lg-5 col-md-6 col-sm-6 col-10 shadow-lg">
        {loading ? (
          <div className="d-flex justify-content-center mt-3 mx-3">
            <div class="spinner-border text-success" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          error && (
            <div className="d-flex justify-content-center mt-3 mx-3">
              <div
                className="alert alert-danger text-center"
                style={{ width: "100%", marginBottom: "-10px" }}
              >
                {error}
              </div>
            </div>
          )
        )}
        <h4 className="text-center h4 mt-3">Login</h4>
        <form onSubmit={handleSubmit}>
          <div className="input-cont mb-3">
            <i class="fa fa-user-circle" aria-hidden="true"></i>
            <input
              type="email"
              placeholder="wamaejoseph392@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-cont input-pass mb-3">
            <i class="fa fa-lock" aria-hidden="true"></i>
            <input
              type={isViewPassword ? `text` : `password`}
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <i
              class="fa fa-eye"
              aria-hidden="true"
              onClick={handleTogglePassword}
            ></i>
          </div>
          <div className="d-flex justify-content-center">
            <button className="sign-btn btn btn-primary mb-3">Sign In</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
