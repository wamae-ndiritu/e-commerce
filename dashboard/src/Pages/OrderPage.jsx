import React from "react";
import Footer from "../Components/Footer";
import Order from "../Components/Orders/Order";
import Sidebar from "../Components/Sidebar";
import TopHeader from "../Components/TopHeader";

const OrderPage = () => {
  return (
    <>
      <TopHeader />
      <div className="main-flex">
        <div className="flex-sidebar">
          <Sidebar />
        </div>
        <div className="flex-main">
          <Order />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default OrderPage;
