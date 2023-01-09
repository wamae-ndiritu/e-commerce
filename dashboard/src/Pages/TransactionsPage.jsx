import React from "react";
import Footer from "../Components/Footer";
import Sidebar from "../Components/Sidebar";
import TopHeader from "../Components/TopHeader";
import Transactions from "../Components/Transactions/transactions";

const TransactionPage = () => {
  return (
    <>
      <TopHeader />
      <div className="main-flex">
        <div className="flex-sidebar">
          <Sidebar />
        </div>
        <div className="flex-main">
          <Transactions />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default TransactionPage;
