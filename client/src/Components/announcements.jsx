import React from "react";

const Announcements = () => {
  return (
    <div className="container-fluid mt-3 mb-3">
      <div className="announcement-cont">
        <div className="announcement-left">
          <img src="./images/announcement/banner.jpg" alt="" />
        </div>
        <div className="announcement-right">
          <img src="./images/announcement/cont-oil.jpg" alt="" />
          <h1>Buy in Wholesale, Enjoy Big Discounts</h1>
          <div className="discount-box">
            <p>50% OFF</p>
          </div>
          <button className="announcement-btn">Buy Now</button>
          <p>www.rozzette.com</p>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
