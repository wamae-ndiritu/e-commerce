import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const checkWindowWidth = () => {
  if (window.innerWidth <= 438) {
    return 2;
  } else {
    return 5;
  }
};

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="next">
        <i className="fa fa-angle-right"></i>
      </button>
    </div>
  );
};
const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="prev">
        <i className="fa fa-angle-left"></i>
      </button>
    </div>
  );
};
const FlashCard = ({ productItems }) => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    slidesToShow: checkWindowWidth(),
    slidesToScroll: checkWindowWidth(),
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      <Slider {...settings}>
        {productItems.map((productItems) => {
          return (
            <div className="card-padding">
              <div className="product mtop">
                <div className="img">
                  <span className="discount">{productItems.discount}% Off</span>
                  <img src={productItems.cover} alt="" />
                  <div className="product-like">
                    <label>{count}</label> <br />
                    <i className="fa fa-heart-o" onClick={increment}></i>
                  </div>
                </div>
                <div className="product-details">
                  <h3>{productItems.name}</h3>
                  <div className="rate">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <div className="price">
                    <h4>${productItems.price}.00 </h4>
                    <button>
                      <i className="fa fa-cart-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
};

export default FlashCard;
