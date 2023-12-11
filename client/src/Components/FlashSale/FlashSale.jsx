import React from "react";
import { useSelector } from "react-redux";
import FlashCard from "./FlashCard";

const FlashSale = () => {
  const productSimilar = useSelector((state) => state.productSimilar);
  const { products: similarProducts } = productSimilar;
  return (
    <div className="container-fluid mt-3 mb-5">
      <div className="title-bar">
        <h2>Flash Sale!</h2>
        <h2 className="view-all">
          View All <i className="fa fa-chevron-down"></i>
        </h2>
      </div>
      <FlashCard productItems={similarProducts} />
    </div>
  );
};

export default FlashSale;
