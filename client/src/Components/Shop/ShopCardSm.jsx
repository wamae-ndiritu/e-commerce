import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Toast from "../../utilities/Toast";
import { addToCart } from "../../Redux/Actions/cartActions";

const ToastObjects = {
  pauseOnFocusLoss: false,
  draggable: false,
  pauseOnHover: false,
  autoClose: 2000,
};

const ShopCardSm = ({ product }) => {
  const dispatch = useDispatch();
  const { _id, productImages: cover, productName, price } = product;

  const addItemToCart = (id) => {
    dispatch(addToCart(id));
    toast.success("Item added to Cart", ToastObjects);
  };

  return (
    <div className="shop-product" style={{ margin: "1px" }}>
      <Toast />
      <Link to={`/products/${_id}`} className="img related-product-img">
        <img src={cover[0]} alt="" />
      </Link>
      <div className="product-details mt-3">
        <Link to={`/products/${_id}`}>
          <h3>{productName}</h3>
        </Link>
        <div className="price">
          <h4>KES {price}.00 </h4>
          <button
            className="d-flex justify-content-center align-items-center"
            onClick={() => addItemToCart(_id)}
          >
            <i className="fa fa-cart-plus"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopCardSm;
