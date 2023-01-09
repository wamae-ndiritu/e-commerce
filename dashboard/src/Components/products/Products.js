import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";
import { listProducts } from "../../Redux/Actions/productActions";
import Message from "../../utilities/Message";

const Products = () => {
  const dispatch = useDispatch();

  const productsList = useSelector((state) => state.productsList);
  const { loading, error, products } = productsList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className="container">
      <div className="shadow-lg my-3 all-products-cont">
        <div className="my-3 d-flex order-row-header">
          <div className="order-row-left">
            <h5>Products</h5>
          </div>
          <div className="order-row-right">
            <div className="input-group row-right-1">
              <input
                type="text"
                className="form-control"
                placeholder="search order by username or email"
              />
              <button className="btn btn-warning input-group-text">
                <SearchIcon />
              </button>
            </div>
            <div className="order-filter-cont">
              <h6>Price</h6>
              <select className="form-select">
                <option selected>--Default--</option>
                <option>Low to High</option>
                <option>High to Low</option>
              </select>
            </div>
            <div className="order-filter-cont">
              <h6>Time</h6>
              <select className="form-select">
                <option selected>--Default--</option>
                <option>Newest to Oldest</option>
                <option>Oldest to Newest</option>
              </select>
            </div>
          </div>
        </div>
        <div className="row all-products-header">
          <div className="col-1">
            <h6>Product</h6>
          </div>
          <div className="col-3">
            <h6>Product Title</h6>
          </div>
          <div className="col-2">
            <h6>Quantity</h6>
          </div>
          <div className="col-2">
            <h6>Price</h6>
          </div>
          <div className="col-2">
            <h6>Type</h6>
          </div>
          <div className="col-2">
            <h6>Actions</h6>
          </div>
        </div>
        {loading ? (
          <div className="d-flex justify-content-center mt-3 mx-3">
            <div class="spinner-border text-success" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          error && <Message variant="alert-danger">{error}</Message>
        )}
        {products?.map((product) => {
          const {
            _id,
            productName,
            productImages,
            price,
            quantity,
            variation,
          } = product;

          return (
            <div
              className="row d-flex align-items-center all-prod-row"
              key={_id}
            >
              <div className="col-1">
                <div className="all-product-img-cont">
                  <img src={productImages[0]} alt="" />
                </div>
              </div>
              <div className="col-3">{productName}</div>
              <div className="col-2">{quantity}</div>
              <div className="col-2 text-danger">KES {price}</div>
              <div className="col-2 text-success">{variation}</div>
              <div className="col-2 actions-icons-cont">
                <div className="actions-icons">
                  <Link to={`/product/${_id}`}>
                    <VisibilityIcon className="text-info" />
                  </Link>
                </div>
                <div className="actions-icons">
                  <Link to={`/product/edit/${_id}`}>
                    <EditIcon className="text-success" />
                  </Link>
                </div>
                <div className="actions-icons">
                  <DeleteIcon className="text-danger" />
                </div>
              </div>
            </div>
          );
        })}
        <div className="row pagination-row">
          <div className="col-4 d-flex my-3 pagination">
            <button>Prev</button>
            <button className="pagination-active">1</button>
            <button>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
