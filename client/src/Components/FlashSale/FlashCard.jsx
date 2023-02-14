import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";

const checkWindowWidth = () => {
  if (window.innerWidth <= 438) {
    return 2;
  } else {
    return 6;
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
const FlashCard = () => {
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

  const productSimilar = useSelector((state) => state.productSimilar);
  const { products: similarProducts } = productSimilar;

  return (
    <>
      <Slider {...settings} style={{ backgroundColor: "red" }}>
        {similarProducts?.map((product) => {
          const { _id, productImages, productName, price } = product;
          return (
            <div key={_id}>
              <div className="product mtop card-padding">
                <div className="img">
                  <span className="discount">30% Off</span>
                  <img src={productImages[0]} alt="" />
                  <div className="product-like">
                    <label>{count}</label> <br />
                    <i className="fa fa-heart-o" onClick={increment}></i>
                  </div>
                </div>
                <div className="product-details">
                  <h3>{productName}</h3>
                  <div className="rate">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <div className="price">
                    <h4>Ksh {price}.00 </h4>
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
