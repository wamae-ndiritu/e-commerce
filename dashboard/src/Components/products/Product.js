import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
// import raha from "../../Images/raha.jpg";
import { getProductDetails } from "../../Redux/Actions/productActions";
const Product = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const productId = params.id;

  const productDetails = useSelector((state) => state.productDetails);
  const { product } = productDetails;

  // const {
  //   _id,
  //   productName,
  //   productImages,
  //   categories,
  //   variation,
  //   brands,
  //   quantitites,
  //   price,
  //   suppliers,
  //   description,
  // } = product;

  // console.log(product);

  useEffect(() => {
    dispatch(getProductDetails(productId));
  }, [dispatch, productId]);

  return (
    <div className="container">
      <div
        className="mt-3 mb-5 shadow-lg"
        style={{ backgroundColor: "#fff", padding: "20px" }}
      >
        <div className="page-header-btn-cont mb-3">
          <div className="btn-item-1">
            <Link to="/products">
              <button
                className="btn btn-main"
                style={{ backgroundColor: "red" }}
              >
                Back to Products
              </button>
            </Link>
          </div>
          <h4 className="text-center mt-3">Product</h4>
          <div className="btn-item-2">
            <Link to="/product/new">
              <button className="btn btn-main">New Product</button>
            </Link>
          </div>
        </div>
        <div className="productContainer">
          <div className="productInfo">
            <div className="productInfo-1">
              <div className="productImg">
                <img src={product?.productImages[0]} alt="" />
              </div>
            </div>
            <div className="productInfo-2">
              <h6>{product?.productName}</h6>
              <p className="text-warning">KES {product?.price}</p>
              {product?.quantitites?.map((quantity, index) => {
                return <p key={index}>{quantity}</p>;
              })}
              <div className="category-badge">
                <h6>{product?.variation}</h6>
              </div>
              <div>
                <h5>Brands</h5>
                <div className="productBrands">
                  {product?.brands?.map((brand, index) => {
                    return <h6 key={index}>{brand}</h6>;
                  })}
                </div>
              </div>
              <div className="mb-3">
                <h6>Categories</h6>
                <select className="form-select">
                  <option selected>--select category--</option>
                  {product?.categories.map((category, index) => {
                    return <option key={index}>{category}</option>;
                  })}
                </select>
              </div>
              <div>
                <h5>Suppliers</h5>
                <div className="productBrands">
                  {product?.suppliers?.map((supplier, index) => {
                    return <h6 key={index}>{supplier}</h6>;
                  })}
                </div>
              </div>
              <div className="mb-5">
                <h6>Other descriptions</h6>
                <p>{product?.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
