import React from "react";
import Footer from "../Components/Footer";
import NewOrders from "../Components/Orders/NewOrders";
import Sidebar from "../Components/Sidebar";
import TopHeader from "../Components/TopHeader";

const NewOrdersPage = () => {
  return (
    <>
      <TopHeader />
      <div className="main-flex">
        <div className="flex-sidebar">
          <Sidebar />
        </div>
        <div className="flex-main">
          <NewOrders />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default NewOrdersPage;
