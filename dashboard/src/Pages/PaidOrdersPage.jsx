import React from "react";
import Footer from "../Components/Footer";
import PaidOrders from "../Components/Orders/PaidOrders";
import Sidebar from "../Components/Sidebar";
import TopHeader from "../Components/TopHeader";

const PaidOrdersPage = () => {
  return (
    <>
      <TopHeader />
      <div className="main-flex">
        <div className="flex-sidebar">
          <Sidebar />
        </div>
        <div className="flex-main">
          <PaidOrders />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default PaidOrdersPage;
