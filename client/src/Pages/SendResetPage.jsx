import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Message from "../comComponents/Message";
import { forgotPass } from "../Redux/Actions/userActions";

const SendResetPage = () => {
  const dispatch = useDispatch();

  const passwordForgot = useSelector((state) => state.passwordForgot);
  const { loading, error, success } = passwordForgot;

  const [email, setEmail] = useState("");
  const [valError, setValError] = useState("");
  const [isValError, setIsValError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email !== "") {
      dispatch(forgotPass(email));
    } else {
      setIsValError(true);
      setValError("Please enter your email address");
    }
  };

  useEffect(() => {
    if (success) {
      setIsValError(true);
      setValError(
        "Please check your Email, we have sent you a link to reset your password!"
      );
    }
  }, [success]);
  return (
    <div className="container">
      <div className="row d-flex justify-content-center my-3">
        <form
          className="col-lg-5 col-md-6 col-sm-6 col-10 shadow-lg reset-email"
          onSubmit={handleSubmit}
        >
          {isValError ? (
            <div className="d-flex justify-content-center">
              <Message variant="alert-warning">{valError}</Message>
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
          <p>Please enter your email to reset you password</p>
          <div className="reset-email-cont mb-3">
            <input
              placeholder="wamaejoseph392@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <button
              className="btn reset-btn"
              style={{ width: "50%" }}
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SendResetPage;
