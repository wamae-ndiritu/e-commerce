import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const checkWindowWidth = () => {
  if (window.innerWidth <= 768) {
    if (window.innerWidth <= 534) {
      return 3;
    } else {
      return 4;
    }
  } else {
    return 6;
  }
};

const BigCategories = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: checkWindowWidth(),
    slidesToScroll: checkWindowWidth(),
    autoplay: true,
  };
  return (
    <div className="container-fluid mt-3">
      <div className="title-bar" style={{ backgroundColor: "#000" }}>
        <h2>All Deals</h2>
      </div>
      <div>
        <Slider {...settings} style={{ width: "100%" }}>
          <div className="color-1 cat-product d-flex flex-column justify-content-center align-items-center mx-3">
            <div className="img">
              <img src="./images/SlideCard/slide-1.png" alt="" />
            </div>
            <h4>Watches</h4>
          </div>
          <div className="color-2 cat-product d-flex flex-column justify-content-center align-items-center mx-3">
            <div className="img">
              <img src="./images/SlideCard/slide-2.png" alt="" />
            </div>
            <h4>Shoes</h4>
          </div>
          <div className="color-3 cat-product d-flex flex-column justify-content-center align-items-center mx-3">
            <div className="img">
              <img src="./images/SlideCard/slide-3.png" alt="" />
            </div>
            <h4>Jackets</h4>
          </div>
          <div className="color-1 cat-product d-flex flex-column justify-content-center align-items-center mx-3">
            <div className="img">
              <img src="./images/SlideCard/slide-4.png" alt="" />
            </div>
            <h4>Bags</h4>
          </div>
          <div className="color-3 cat-product d-flex flex-column justify-content-center align-items-center mx-3">
            <div className="img">
              <img src="./images/SlideCard/slide-2.png" alt="" />
            </div>
            <h4>Shoes</h4>
          </div>
          <div className="color-1 cat-product d-flex flex-column justify-content-center align-items-center mx-3">
            <div className="img">
              <img src="./images/SlideCard/slide-4.png" alt="" />
            </div>
            <h4>Bags</h4>
          </div>
          <div className="color-2 cat-product d-flex flex-column justify-content-center align-items-center mx-3">
            <div className="img">
              <img src="./images/SlideCard/slide-3.png" alt="" />
            </div>
            <h4>Jackets</h4>
          </div>

          {/* */}
        </Slider>
      </div>
    </div>
  );
};

export default BigCategories;
