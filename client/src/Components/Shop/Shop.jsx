import React from "react";
import ShopSection from "./ShopSection";
import DiscountData from "../../data/DiscountData";

const Shop = () => {
  return (
    <div className="container-fluid mt-3">
      <div className="title-bar mb-3">
        <h2>Deals in Wholesale/Retail Price</h2>
        <h2 className="view-all">
          View All <i className="fa fa-chevron-down"></i>
        </h2>
      </div>
      <div className="shop-cont">
        <div className="shop-left">
          <div className="cat-cont">
            <h1>
              Shop | <span>Price</span>
            </h1>
            <div className="cat-btn">Wholesale</div>
            <div className="cat-btn">Retail</div>
            <div className="cat-btn">All</div>
          </div>
        </div>
        <div className="shop-right">
          <ShopSection products={DiscountData} />
        </div>
      </div>
    </div>
  );
};

export default Shop;
