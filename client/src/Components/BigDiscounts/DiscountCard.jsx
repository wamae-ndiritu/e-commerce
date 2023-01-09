import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Discountdata from "../../data/DiscountData";

const checkWindowWidth = () => {
  if (window.innerWidth <= 438) {
    return 3;
  } else {
    return 6;
  }
};

const Discountcard = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: checkWindowWidth(),
    slidesToScroll: checkWindowWidth(),
    autoplay: true,
  };
  return (
    <>
      <Slider {...settings}>
        {Discountdata.map((value, index) => {
          return (
            <>
              <div className="box product" key={index}>
                <div className="img">
                  <img src={value.cover} alt="" width="100%" />
                </div>
                <h4>{value.name}</h4>
                <span>{value.price}</span>
              </div>
            </>
          );
        })}
      </Slider>
    </>
  );
};

export default Discountcard;
