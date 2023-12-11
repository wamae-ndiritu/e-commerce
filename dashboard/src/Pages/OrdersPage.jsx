import React from "react";
import Orders from "../Components/Orders/Orders";
import Sidebar from "../Components/Sidebar";
import TopHeader from "../Components/TopHeader";

const OrdersPage = () => {
  return (
    <>
      <TopHeader />
      <div className="main-flex">
        <div className="flex-sidebar">
          <Sidebar />
        </div>
        <div className="flex-main">
          <Orders />
        </div>
      </div>
    </>
  );
};

export default OrdersPage;
