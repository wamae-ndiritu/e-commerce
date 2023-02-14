import React from "react";

const ShopCard = ({ product }) => {
  const { cover, name, price, description } = product;
  return (
    <div style={{ width: "100%" }}>
      <div className="shop-product">
        <div className="img">
          <span className="discount">40% Off</span>
          <div className="img-cont">
            <img src={cover} alt="" />
          </div>
          <div className="product-like">
            <label>0</label> <br />
            <i className="fa fa-heart-o"></i>
          </div>
        </div>
        <div className="product-details">
          <h3>{name}</h3>
          <div className="rate">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
          </div>
          <div className="price">
            <h4>KES {price}.00 </h4>
          </div>
          <div className="description">
            <p>{description}</p>
          </div>
        </div>
        <button type="button" className="shop-product-cart-btn">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ShopCard;
