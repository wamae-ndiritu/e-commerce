import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../comComponents/Message";
import { resetPassword } from "../../Redux/Actions/userActions";
import { useEffect } from "react";

const ResetPassword = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  // const params = useParams();

  // const id = params.id.toString();

  const passwordReset = useSelector((state) => state.passwordReset);
  const { loading, error, success } = passwordReset;

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [valError, setValError] = useState("");
  const [isValError, setIsValError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsValError(false);
    if (newPassword === confirmPassword) {
      dispatch(resetPassword("6381f753ce511a963fa6e77e", newPassword));
    } else {
      setIsValError(true);
      setValError("Passwords do not match!");
    }
  };

  useEffect(() => {
    if (success) {
      navigate("/login");
    }
  }, [success, navigate]);

  return (
    <div className="container">
      <div className="row d-flex justify-content-center my-3">
        <div className="col-lg-5 col-md-6 col-sm-6 col-10 shadow-lg reset-cont">
          <div className="d-flex justify-content-center mt-3">
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
          </div>
          <form onSubmit={handleSubmit}>
            <h5>Reset Password</h5>
            <div class="mb-3">
              <div for="password1" class="form-label">
                New Password
              </div>
              <input
                type="password"
                class="form-control"
                id="password1"
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <div class="mb-3">
              <label for="password2" class="form-label">
                Confirm New Password
              </label>
              <input
                type="password"
                class="form-control"
                id="password2"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div class="mb-3">
              <button type="submit" className="btn reset-btn">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
