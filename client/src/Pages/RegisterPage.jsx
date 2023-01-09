import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Register from "../Components/user/Register";
import { registerUser } from "../Redux/Actions/userActions";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_2, setPassword_2] = useState("");

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const {loading, success, error} = userRegister;

  const handleRegister = () => {
    console.log("Loading click...");
    if (username && email && password && password_2) {
      if (password === password_2) {
        dispatch(registerUser(username, email, password));
      }
    }
  };

  return (
    // <div className="container my-3">
    //   <div className="row d-flex justify-content-center my-3">
    //     <div className="col-10 col-md-5 col-lg-5 shadow-lg account-flex">
    //         <div className="d-flex justify-content-center mb-3">
    //       {loading ?
    //         <div class="spinner-border text-warning" role="status">
    //             <span class="visually-hidden">Loading...</span>
    //         </div>
    //         : error && <p className="text-center">{error}</p>
    //       }
    //       </div> 
    //       <h2 className="account-title">Register</h2>
    //       <label>First Name/Username</label>
    //       <input
    //         type="text"
    //         id="name"
    //         onChange={(e) => setUsername(e.target.value)}
    //       />
    //       <label>Email</label>
    //       <input
    //         type="email"
    //         id="email"
    //         onChange={(e) => setEmail(e.target.value)}
    //       />
    //       <label>Password</label>
    //       <input
    //         type="password"
    //         id="password-1"
    //         onChange={(e) => setPassword(e.target.value)}
    //       />
    //       <label>Confirm Password</label>
    //       <input
    //         type="password"
    //         id="password-2"
    //         onChange={(e) => setPassword_2(e.target.value)}
    //       />
    //       <div className="checkbox-cont my-2">
    //         <input type="checkbox" className="checkbox" id="checkbox" />
    //         <label htmlFor="checkbox">Check Password</label>
    //       </div>
    //       <button className="account-btn" onClick={handleRegister}>
    //         Register
    //       </button>
    //       <p className="redirect-p">
    //         Already have account?{" "}
    //         <Link to="/login" className="redirect-link">
    //           Login
    //         </Link>
    //       </p>
    //     </div>
    //   </div>
    //   </div>
    <Register />
  );
};

export default RegisterPage;
