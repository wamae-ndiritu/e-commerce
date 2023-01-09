import React from "react";
import SliderData from "../../data/SliderData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Corousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px", color: "#fff" }}>{dots}</ul>;
    },
  };
  return (
    <div className="slider">
      <Slider {...settings} className="mx-3">
        {SliderData.map((value, index) => {
          return (
            <>
              <div className="slider-wrapper" key={index}>
                <div className="slider-left">
                  <h1>{value.title}</h1>
                  <p>{value.desc}</p>
                  <button>Visit Collections</button>
                </div>
                <div className="slider-right">
                  <img src={value.cover} alt="" />
                </div>
              </div>
            </>
          );
        })}
      </Slider>
    </div>
  );
};

export default Corousel;
