import React from "react";
import { useSelector } from "react-redux";
import { useGlobalContext } from "../../contextAPI/context";
import ShopCard from "../Shop/ShopCard";
import ShopCardSm from "../Shop/ShopCardSm";

const RecentProduct = ({ products }) => {
  // const {
  //   state: { cartItems },
  // } = useGlobalContext();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  return (
    <div className="mx-3">
      <div className="row">
        <h3 className="shadow-lg mb-2 rec-header">Viewed Products</h3>
      </div>
      <div className="row">
        {products?.slice(0, 6).map((product, index) => {
          return (
            <div
              className="col-6 col-sm-4 col-md-3 col-lg-3  mb-3 product-2"
              key={index}
            >
              <ShopCardSm product={product} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentProduct;
