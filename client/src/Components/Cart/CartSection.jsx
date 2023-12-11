import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
// import {reducer, initialState} from "../../store/Reducers"
// import { useGlobalContext } from "../../contextAPI/context";
import {
  // changeCartItemQty,
  addToCart,
  clearCart,
  removefromcart,
  decreaseCartQty,
} from "../../Redux/Actions/cartActions";

const CartSection = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  // const [state, dispatch] = useReducer(reducer, initialState);
  // const {
  //   state: { cartItems },
  //   handleCartQty,
  //   removeFromCart,
  //   clearCart,
  // } = useGlobalContext();

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  console.log(cartItems);

  const handleRemoveCartItem = (id) => {
    dispatch(removefromcart(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleCartQty = (id) => {
    dispatch(addToCart(id));
  };

  const handleDecreaseQty = (id, qty) => {
    if (qty <= 1) {
      dispatch(removefromcart(id));
    } else {
      dispatch(decreaseCartQty(id));
    }
  };

  window.addEventListener("resize", () => {
    setScreenWidth(window.innerWidth);
  });

  return (
    <div className="">
      <div className="shadow-1 cart-header">
        <h3>
          Cart ({cartItems?.length}) {screenWidth}
        </h3>
        <p className="clear-cart" onClick={handleClearCart}>
          Clear Cart
        </p>
      </div>
      {cartItems?.map((cartItem) => {
        const { product, productName, price, productImages, qty } = cartItem;
        return (
          <div className="shadow-1 cart-item-cont" key={product}>
            <div className="cart-item">
              <Link to={`/products/${product}`} className="cart-img">
                <img
                  src={productImages ? productImages[0] : ``}
                  alt={productName}
                />
              </Link>
              <div></div>
              <h3 className="mobile-cart-item-name">{productName}</h3>
              <h4>KES {price}</h4>
            </div>
            <div className="cart-flex mt-3">
              <div
                className="cart-left"
                onClick={() => handleRemoveCartItem(product)}
              >
                <div className="delete-btn">
                  <DeleteIcon />
                </div>
                <p className="delete-text">Remove</p>
              </div>
              <div className="cart-right">
                <div
                  className="qty-btn"
                  onClick={() => handleDecreaseQty(product, qty)}
                >
                  <RemoveIcon />
                </div>
                <p className="qty">{qty}</p>
                <div className="qty-btn" onClick={() => handleCartQty(product)}>
                  <AddIcon />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartSection;
