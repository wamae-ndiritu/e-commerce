import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
// import cover from "../Images/Unga.png";
import { useParams } from "react-router";
// import DiscountData from "../data/DiscountData";
import ShopCardSm from "../Components/Shop/ShopCardSm";
// import Data from "../data/Data";
import {
  getProductDetails,
  getSimilarProducts,
} from "../Redux/Actions/productActions";

const ProductPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    dispatch(getProductDetails(id));
    dispatch(getSimilarProducts(id));
  }, [id, dispatch]);

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const productSimilar = useSelector((state) => state.productSimilar);
  const { products: similarProducts } = productSimilar;

  const handleCart = () => {
    navigate(`/cart/${id}`);
  };

  useEffect(() => {
    if (loading) {
      console.log("Product loading");
    } else if (error) {
      console.log("There is an error");
    } else if (product) {
      console.log(product);
    }
  }, [product, error, loading]);

  return (
    <div className="cont">
      <div className="row my-3 d-flex justify-content-center">
        <div className="col-sm-8 col-md-11 col-lg-8 shadow-1 product-detail-cont">
          <div className="main-item-cont">
            <div className="detail-img-cont">
              <div className="image-container">
                <img
                  src={product?.productImages[0]}
                  alt={product?.productName}
                />
              </div>
              <div className="category-badge-1">
                <h6>{product?.variation}!</h6>
              </div>
            </div>
            <div className="detail-info">
              <h3>{product?.productName}</h3>
              <div className="flex-details">
                <p className="loss-leader">
                  KES 500 <span>40% OFF</span>
                </p>
                <h5>KES {product?.price}</h5>
              </div>
              {product?.variation && (
                <div className="category-badge">
                  <h6>{product?.variation}!</h6>
                </div>
              )}
              <p>
                Quatinty <span>{product?.quantities[0]}</span>
              </p>
              <p>{product?.description}</p>
              <button
                className="cart-btn product-page-btn"
                onClick={handleCart}
              >
                Add To Cart
              </button>
            </div>
          </div>
          <div className="mt-3 lower-row">
            <h6>Product Specification</h6>
            <div className="specification-cont">
              <p>SKU: {product?._id}</p>
              <p>Stock Number</p>
            </div>
          </div>
          <div className="mt-3 lower-row">
            <h6>Other Features</h6>
            <div className="specification-cont">
              <ul>
                <li>Good quality</li>
                <li>Best selling product</li>
                <li>Free deliery for qty more than a bundle</li>
                <li>Free gift</li>
              </ul>
            </div>
          </div>
          <div className="row related-products">
            <h6>Related products</h6>
            {similarProducts?.map((product) => {
              return (
                <div
                  className="col-6 col-md-4 col-lg-4 shadow-sm"
                  key={product._id}
                >
                  <div>
                    <ShopCardSm product={product} style={{ width: "100%" }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-sm-3 col-md-2 col-lg-3 shadow-lg product-navigation">
          <p>Navigation section</p>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
