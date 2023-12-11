import React from "react";
import Products from "../Components/products/Products";
import Sidebar from "../Components/Sidebar";
import TopHeader from "../Components/TopHeader";

const ProductsPage = () => {
  return (
    <>
      <TopHeader />
      <div className="main-flex">
        <div className="flex-sidebar">
          <Sidebar />
        </div>
        <div className="flex-main">
          <Products />
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
