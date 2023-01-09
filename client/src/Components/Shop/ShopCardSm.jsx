import React from "react";
import { Link } from "react-router-dom";

const ShopCardSm = ({ product }) => {
  const { _id, productImages: cover, productName, price } = product;

  return (
    <div className="shop-product shadow-sm" style={{ margin: "1px" }}>
      <Link to={`/products/${_id}`} className="img related-product-img">
        <img src={cover[0]} alt="" />
      </Link>
      <div className="product-details mt-3">
        <Link to={`/products/${_id}`}>
          <h3>{productName}</h3>
        </Link>
        <div className="price">
          <h4>KES {price}.00 </h4>
          <button className="d-flex justify-content-center align-items-center">
            <i className="fa fa-cart-plus"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopCardSm;
