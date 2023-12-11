import React from "react";
import HomePage from "./Pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import AddProductPage from "./Pages/AddProductPage";
import ProductsPage from "./Pages/ProductsPage";
import ProductPage from "./Pages/ProductPage";
import EditProductPage from "./Pages/EditProductPage";
import OrdersPage from "./Pages/OrdersPage";
import NewOrdersPage from "./Pages/NewOrdersPage";
import DeliveredOrdersPage from "./Pages/DeliveredOrdersPage";
import PaidOrdersPage from "./Pages/PaidOrdersPage";
import OrderPage from "./Pages/OrderPage";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import TransactionPage from "./Pages/TransactionsPage";
import Dashboard from "./admin";

function App() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const AuthLayout = () => {
    if (userInfo) {
      const isAdmin = userInfo.isAdmin;
      return isAdmin ? <Outlet /> : null; // or loading indicator, etc...
    }
    return <Navigate to={"/login"} replace />;
  };
  return (
    <Router>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/" element={<HomePage />} exact />
          <Route path="/product/new" element={<AddProductPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/product/edit/:id" element={<EditProductPage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/orders/new" element={<NewOrdersPage />} />
          <Route path="/order/:id" element={<OrderPage />} />
          <Route path="/orders/delivered" element={<DeliveredOrdersPage />} />
          <Route path="/orders/paid" element={<PaidOrdersPage />} />
          <Route path="/transactions" element={<TransactionPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
