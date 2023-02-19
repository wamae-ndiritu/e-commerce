import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getSimilarProducts } from "../../Redux/Actions/productActions";
import { useDispatch, useSelector } from "react-redux";

const checkWindowWidth = () => {
  if (window.innerWidth <= 768) {
    if (window.innerWidth <= 534) {
      return 2;
    } else {
      return 4;
    }
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

  const similarProductId = "639a36d50938388a2d818d2a";

  const productSimilar = useSelector((state) => state.productSimilar);
  const { products: similarProducts } = productSimilar;

  useEffect(() => {
    dispatch(getSimilarProducts(similarProductId));
  }, [dispatch, similarProductId]);
  return (
    <>
      <Slider {...settings} className="color-3">
        {similarProducts?.map((product) => {
          const { _id, productImages, productName } = product;
          return (
            <div key={_id}>
              <div className="product card-padding" style={{ padding: "10px" }}>
                <div className="img">
                  <img src={productImages[0]} alt="" width="100%" />
                </div>
                <h4>{productName}</h4>
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
};

export default Discountcard;
