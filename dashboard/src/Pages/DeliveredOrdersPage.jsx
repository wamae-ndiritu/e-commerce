import React from "react";
import Footer from "../Components/Footer";
import DeliveredOrders from "../Components/Orders/DeliveredOrders";
import Sidebar from "../Components/Sidebar";
import TopHeader from "../Components/TopHeader";

const DeliveredOrdersPage = () => {
  return (
    <>
      <TopHeader />
      <div className="main-flex">
        <div className="flex-sidebar">
          <Sidebar />
        </div>
        <div className="flex-main">
          <DeliveredOrders />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default DeliveredOrdersPage;
