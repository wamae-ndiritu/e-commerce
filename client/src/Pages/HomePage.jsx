import React from "react";
import BigCategories from "../Components/BigCategories/Categories";
import BigDiscountsSale from "../Components/BigDiscounts/BigDiscountsSale";
import FlashSale from "../Components/FlashSale/FlashSale";
import SliderSection from "../Components/Banner/SliderSection";
import Shop from "../Components/Shop/Shop";
import Announcements from "../Components/announcements";
import PaymentBanner from "../Components/paymentBanner";
// import Footer from "../comComponents/Footer";

const HomePage = () => {
  return (
    <div>
      <SliderSection />
      <BigCategories />
      <FlashSale />
      <BigDiscountsSale />
      <Shop />
      <Announcements />
      <PaymentBanner />
    </div>
  );
};

export default HomePage;
