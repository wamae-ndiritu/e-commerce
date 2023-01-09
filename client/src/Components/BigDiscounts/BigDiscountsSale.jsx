import React from "react";
import Discountcard from "./DiscountCard";

const BigDiscountsSale = () => {
  return (
    <div className="cont mt-3 mb-5">
      <div className="title-bar">
        <h2>Big Discounts Deals!</h2>
        <h2 className="view-all">
          View All <i className="fa fa-chevron-down"></i>
        </h2>
      </div>
      <Discountcard />
    </div>
  );
};

export default BigDiscountsSale;
