import React from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import Header from "./comComponents/Header";
import "./index.css";
import "./responsive.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomePage from "./Pages/HomePage";
import Footer from "./comComponents/Footer";
import CartPage from "./Pages/CartPage";
import RegisterPage from "./Pages/RegisterPage";
import LoginPage from "./Pages/LoginPage";
import WishlistPage from "./Pages/WishlistPage";
import AccountPage from "./Pages/AccountPage";
import ProductPage from "./Pages/ProductPage";
import VerifyUserPage from "./Pages/VerifyUserPage";
import ProfilePage from "./Pages/ProfilePage";
import ScrollToTop from "./utilities/ScroolToTop";
import ResetPassPage from "./Pages/ResetPassPage";
import SendResetPage from "./Pages/SendResetPage";
import CheckoutPage from "./Pages/CheckoutPage";
import PaymentPage from "./Pages/PaymentPage";
import PaymentVerificationPage from "./Pages/PaymentVerificationPage";
import OrderPage from "./Pages/OrderPage";

function App() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const AuthLayout = () => {
    if (userInfo) {
      return <Outlet />; // or loading indicator, etc...
    } else {
      return <Navigate to={"/login"} replace />;
    }
  };
  return (
    <Router>
      <ScrollToTop />
      <Header />

      <Routes id="body">
        <Route element={<AuthLayout />}>
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/checkout/payment" element={<PaymentPage />} />
          <Route
            path="/checkout/payment/verification"
            element={<PaymentVerificationPage />}
          />
          <Route path="/user/profile" element={<ProfilePage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/order/:id" element={<OrderPage />} />
        </Route>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/cart/:id" element={<CartPage />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/user/forgot/password" element={<SendResetPage />} />
        <Route path="/:id/reset/password" element={<ResetPassPage />} />
        <Route
          path="/user/verify/one-time-password"
          element={<VerifyUserPage />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
