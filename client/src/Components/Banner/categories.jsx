import React from "react";
import { categories } from "./categoryData";

const Categories = () => {
  return (
    <>
      <div className="category">
        {categories.map((value, index) => {
          return (
            <div className="box c-flex" key={index}>
              <img src={value.cateImg} alt="" />
              <span>{value.cateName}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Categories;
