import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getSimilarProducts } from "../../Redux/Actions/productActions";
import { useDispatch, useSelector } from "react-redux";

const checkWindowWidth = () => {
  if (window.innerWidth <= 438) {
    return 2;
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

  const dispatch = useDispatch();

  const similarProductId = "639e411ba6dc47023b0f837b";

  const productSimilar = useSelector((state) => state.productSimilar);
  const { products: similarProducts } = productSimilar;

  useEffect(() => {
    dispatch(getSimilarProducts(similarProductId));
  }, [dispatch]);
  return (
    <>
      <Slider {...settings} className="color-3">
        {similarProducts?.map((product) => {
          const { _id, productImages, productName, price } = product;
          return (
            <>
              <div
                className="box product card-padding"
                key={_id}
                style={{ padding: "10px" }}
              >
                <div className="img">
                  <img src={productImages[0]} alt="" width="100%" />
                </div>
                <h4>{productName}</h4>
                <span>{price}</span>
              </div>
            </>
          );
        })}
      </Slider>
    </>
  );
};

export default Discountcard;
