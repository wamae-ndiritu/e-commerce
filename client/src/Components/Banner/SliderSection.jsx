import React from "react";
import Categories from "./categories";
import Corousel from "./Corousel";

const SliderSection = () => {
  return (
    <div className="container-fluid">
      <div className="slider-flex">
        <div className="slider-flex-1">
          <Categories />
        </div>
        <Corousel />
      </div>
    </div>
  );
};

export default SliderSection;
