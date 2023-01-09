import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="row pb-3 mx-2">
        <div className="col-sm-6 col-md-5 col-lg-5">
          <h1>Shangilia Wholesalers</h1>
          <p>
            Shangilia Wholesalers is a country-wide distributor in Kenya who
            focusses on quality products for Retailers and Consumers. Our prices
            are in wholesale and therefore we guarantee you to save more when
            you buy more with us. We ensure that our customers are satisfied to
            their expectations.
          </p>
          <h3 className="d-flex align-items-center">
            <div className="footer-socials-1">
              <i className="fa fa-map-marker"></i>
            </div>
            Location
          </h3>
          <p>Off Kikuyu Road, Kikuyu Town</p>
          <p>Kiambu</p>
          <h3 className="d-flex align-items-center">
            <div className="footer-socials-1">
              <i className="fa fa-phone" style={{ fontSize: "12px" }}></i>
            </div>
            24/7 Support
          </h3>
          <div className="d-flex">
            <h5>+254740924507</h5>
            <h5>+254793844124</h5>
          </div>
        </div>
        <div className="col-sm-6 col-md-2 col-lg-2">
          <h3>Links</h3>
          <ul>
            <li>About Us</li>
            <li>Help</li>
            <li>FAQs</li>
            <li>Contacts</li>
            <li>My Wishlist</li>
            <li>Track you Order</li>
          </ul>
        </div>
        <div className="col-sm-6 col-md-2 col-lg-2">
          <h3>Free Delivery</h3>
          <ul>
            <li>Nairobi</li>
            <li>Kiambu</li>
            <li>Nakuru</li>
          </ul>
        </div>
        <div className="col-sm-6 col-md-3 col-lg-3">
          <h3>Follow Us</h3>
          <div className="d-flex">
            <div className="footer-socials">
              <i className="fa fa-whatsapp"></i>
            </div>
            <div className="footer-socials">
              <i className="fa fa-facebook"></i>
            </div>
            <div className="footer-socials">
              <i className="fa fa-instagram"></i>
            </div>
            <div className="footer-socials">
              <i className="fa fa-linkedin"></i>
            </div>
          </div>
          <h3 className="d-flex align-items-center mt-3">
            <div className="footer-socials-1">
              <i className="fa fa-envelope-o"></i>
            </div>
            Subscribe to News
          </h3>
          <div className="subscribe">
            <input type="text" placeholder="wamaejoseph392@gmail.com" />
            <button type="button">
              <i className="fa fa-share-square-o"></i>
            </button>
          </div>
          <p className="mt-3">&copy; Shangilia Wholesalers 2022</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
