import React from "react";
import FlashCard from "./FlashCard";
import Data from "../../data/Data";

const FlashSale = () => {
  const { productItems } = Data;
  return (
    <div className="cont mt-3 mb-5">
      <div className="title-bar">
        <h2>Flash Sale!</h2>
        <h2 className="view-all">
          View All <i className="fa fa-chevron-down"></i>
        </h2>
      </div>
      <FlashCard productItems={productItems} />
    </div>
  );
};

export default FlashSale;
