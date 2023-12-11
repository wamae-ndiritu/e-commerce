import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router";
import CartSection from "../Components/Cart/CartSection";
import CartSummary from "../Components/Cart/CartSummary";
import RecentProduct from "../Components/Cart/RecentProduct";
// import { useGlobalContext } from "../contextAPI/context";
// import DiscountData from "../data/DiscountData";
import { addToCart } from "../Redux/Actions/cartActions";
import { createOrder } from "../Redux/Actions/orderActions";
import { getSimilarProducts } from "../Redux/Actions/productActions";

const CartPage = () => {
  // const {
  //   state: { cartItems },
  // } = useGlobalContext();

  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();

  const id = params.id;

  const cart = useSelector((state) => state.cart);
  const { cartItems, billingAddress } = cart;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const cartTotals = cartItems
    .reduce((itemA, itemB) => itemA + itemB.qty * itemB.price, 0)
    .toFixed(2);

  const totalPrice = Number(Math.round(cartTotals));

  const handleCheckout = () => {
    if (userInfo) {
      navigate("/checkout");
    } else {
      navigate("/login?redirect=checkout");
    }
  };

  const handleContinueShopping = (e) => {
    e.preventDefault();
    const orderItems = cartItems;
    dispatch(createOrder(orderItems, billingAddress, totalPrice));
  };

  useEffect(() => {
    if (id) {
      dispatch(addToCart(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (params.id) {
      dispatch(getSimilarProducts(id));
    }
  }, [dispatch, params, id]);

  const productSimilar = useSelector((state) => state.productSimilar);
  const { products } = productSimilar;
  return (
    <div>
      <div className="cont d-flex mt-3 row">
        {cartItems?.length >= 1 ? (
          <>
            <div className="col-md-8 col-lg-8">
              <CartSection />
            </div>
            <div className="col-md-4 col-lg-4 big-summary-sect">
              <div className="summary-section">
                <div>
                  <CartSummary />
                </div>
                <button
                  type="button"
                  className="cart-btn mb-3"
                  style={{ width: "100%" }}
                  onClick={handleContinueShopping}
                >
                  Continue Shopping
                </button>
                <button
                  type="button"
                  className="cart-btn mb-3"
                  style={{ width: "100%", backgroundColor: "navy" }}
                  onClick={handleCheckout}
                >
                  Checkout
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="col-md-8 col-lg-8 shadow-sm">
            <p style={{ color: "red" }}>Your Cart is empty!</p>
          </div>
        )}
      </div>
      <div className="cont mt-3 mb-3">
        <div className="row">
          <div className="col-md-8 col-lg-8">
            <RecentProduct products={products} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
