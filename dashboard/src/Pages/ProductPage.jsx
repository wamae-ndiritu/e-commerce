import React from "react";
import Footer from "../Components/Footer";
import Product from "../Components/products/Product";
import Sidebar from "../Components/Sidebar";
import TopHeader from "../Components/TopHeader";

const ProductPage = () => {
  return (
    <>
      <TopHeader />
      <div className="main-flex">
        <div className="flex-sidebar">
          <Sidebar />
        </div>
        <div className="flex-main">
          <Product />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default ProductPage;
