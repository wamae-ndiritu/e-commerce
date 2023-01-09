import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../contextAPI/context";
import { listProducts } from "../../Redux/Actions/productActions";
import Message from "../../utilities/Message";

const ShopSection = () => {
  const { addToCart } = useGlobalContext();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  const productList = useSelector((state) => state.productList);
  const { products: list, loading, error } = productList;

  useEffect(() => {
    if (list) {
      console.log(list?.products);
    }
  }, [list]);

  return (
    <div className="cont row shadow-sm">
      {loading ? (
        <div className="d-flex justify-content-center mt-3 mx-3">
          <div class="spinner-border text-success" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        error && (
          <div className="mt-3">
            <Message variant="alert-danger">{error}</Message>
          </div>
        )
      )}
      {list?.products?.map((product) => {
        const { productImages, productName, price, _id } = product;
        return (
          <Link
            to={`/products/${_id}`}
            className="shop-product shop-hover col-6 col-sm-4 col-md-4 col-lg-3"
            key={_id}
          >
            <div>
              <div className="img">
                <span className="discount">40% Off</span>
                <div className="img-cont">
                  <img src={productImages[0]} alt="" />
                </div>
                <div className="product-like">
                  <label>0</label> <br />
                  <i className="fa fa-heart-o"></i>
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
                  <h4>${price}.00 </h4>
                </div>
                <div className="description">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quis lobortis consequat eu, quam etiam at quis ut convallis.
                  </p>
                </div>
              </div>
              <button
                type="button"
                className="shop-product-cart-btn"
                onClick={() => addToCart(_id)}
              >
                Add to Cart
              </button>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ShopSection;
