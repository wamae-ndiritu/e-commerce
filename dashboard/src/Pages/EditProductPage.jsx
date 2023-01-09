import React from "react";
import Footer from "../Components/Footer";
import EditProduct from "../Components/products/EditProduct";
import Sidebar from "../Components/Sidebar";
import TopHeader from "../Components/TopHeader";

const EditProductPage = () => {
  return (
    <>
      <TopHeader />
      <div className="main-flex">
        <div className="flex-sidebar">
          <Sidebar />
        </div>
        <div className="flex-main">
          <EditProduct />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default EditProductPage;
