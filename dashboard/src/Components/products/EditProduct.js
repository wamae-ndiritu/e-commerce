import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getProductDetails } from "../../Redux/Actions/productActions";

const EditProduct = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const productId = params.id;

  const productDetails = useSelector((state) => state.productDetails);
  const { product } = productDetails;

  useEffect(() => {
    dispatch(getProductDetails(productId));
  }, [dispatch, productId]);

  useEffect(() => {
    if (product) {
      console.log(product);
    }
  }, [product]);

  return (
    <div className="container">
      <div className="mt-3 mb-5">
        <div className="product-form-cont shadow-lg">
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
            <h4 className="text-center mt-3">Edit Product</h4>
            <div className="btn-item-2">
              <Link to="/product/1">
                <button className="btn btn-main">View Product</button>
              </Link>
            </div>
          </div>
          <form className="add-form">
            <div className="add-form-1">
              <div className="mb-3">
                <h6>Product Title</h6>
                <input
                  type="text"
                  className="form-control"
                  placeholder="New Product title"
                />
              </div>
              <div className="mb-3">
                <h6>Categories</h6>
                <input
                  type="text"
                  className="form-control"
                  placeholder="floor,sugar,utensils, etc."
                />
              </div>
              <div className="mb-3">
                <h6>Quantity</h6>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Bundle,12 pcs packet, etc."
                />
              </div>
              <div className="mb-3">
                <h6>Brand</h6>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Raha Premium,Soko Ugali,Kafagara,etc"
                />
              </div>
              <div className="mb-3">
                <h6>Suppliers</h6>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Menengai Distributors,Sony Max,etc."
                />
              </div>
              <div className="mb-3">
                <h6>Images</h6>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Please don't type here"
                />
              </div>
            </div>
            <div className="add-form-2">
              <div className="mb-3">
                <h6>Price</h6>
                <input
                  type="text"
                  className="form-control"
                  placeholder="10 000"
                />
              </div>
              <div className="mb-3">
                <h6>Product Variation</h6>
                <select className="form-control">
                  <option>Wholesale</option>
                  <option>Retail</option>
                </select>
              </div>
              <div className="mb-3">
                <h6>Product Image</h6>
                <input type="file" className="form-control" />
              </div>
              <div className="mb-3">
                <h6>Description</h6>
                <textarea
                  type="text"
                  className="form-control"
                  rows="5"
                  placeholder="Type your product description here..."
                ></textarea>
              </div>
              <div className="mb-3">
                <button className="btn btn-main">Publish</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
