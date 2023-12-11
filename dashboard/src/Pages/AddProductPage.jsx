import React from "react";
import Footer from "../Components/Footer";
import AddProduct from "../Components/products/AddProduct";
import Sidebar from "../Components/Sidebar";
import TopHeader from "../Components/TopHeader";

const AddProductPage = () => {
  return (
    <>
      <TopHeader />
      <div className="main-flex">
        <div className="flex-sidebar">
          <Sidebar />
        </div>
        <div className="flex-main">
          <AddProduct />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default AddProductPage;
