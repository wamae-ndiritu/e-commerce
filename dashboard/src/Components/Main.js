import React from "react";
import image from "../Images/best-selling.jpg";
import BarGraph from "./Widgets/BarGraph";
// import BarGraph2 from "./Widgets/BarGraph2";
import LineGraph from "./Widgets/LineGraph";
import soko from "../Images/soko.jpg";
import exe from "../Images/exe.jpg";
import kabras from "../Images/kabras.jpg";
// import sufuria from "../Images/sufuria.jpg";
import rina from "../Images/rina.jpg";
import menengai from "../Images/menengai.jpg";
// import raha from "../Images/raha.jpg";
import LatestOrder from "./Orders/LatestOrders";
import LatestTransactions from "./Transactions/LatestTransactions";

const products = [
  {
    id: 0,
    name: "Soko Maize Floor",
    amount: 100000,
    image: soko,
  },
  {
    id: 1,
    name: "Kabras Best Sugar",
    amount: 98000,
    image: kabras,
  },
  {
    id: 2,
    name: "Rina Cooking Oil",
    amount: 70000,
    image: rina,
  },
  {
    id: 3,
    name: "Menengai Bar Soap",
    amount: 55000,
    image: menengai,
  },
  {
    id: 4,
    name: "Exe Wheat Floor",
    amount: 30000,
    image: exe,
  },
];

const Main = () => {
  return (
    <div className="m-3">
      <div className="row">
        <div className="col-6">
          <div className="card">
            <h5 className="h5 text-center">Site Perfomance</h5>
            <LineGraph />
          </div>
        </div>
        <div className="col-6">
          <div className="card">
            <h5 className="h5 text-center">Sales Statistics</h5>
            <BarGraph />
          </div>
        </div>
      </div>
      <div className="my-3 row-flex">
        <div className="row-flex-left">
          <div className="card best-selling-card">
            <div className="title">
              <img src={image} alt="icon" className="img-icon" />
              <h4 className="h4">Best Selling Products & Categories</h4>
            </div>
            <div className="row mx-3">
              <div className="col-6">
                <div className="">
                  <div className="best-category">
                    <div className="best-category-icon">
                      <i class="fa fa-cutlery" aria-hidden="true"></i>
                    </div>
                    <h6 className="h6">Utensils</h6>
                    <p>KES 50 000</p>
                  </div>
                  <div className="best-category">
                    <div className="best-category-icon">
                      <i class="fa fa-pencil" aria-hidden="true"></i>
                    </div>
                    <h6 className="h6">Stationary</h6>
                    <p>KES 33 000</p>
                  </div>
                  <div className="best-category">
                    <div className="best-category-icon">
                      <i class="fa fa-stethoscope" aria-hidden="true"></i>
                    </div>
                    <h6 className="h6">Medical</h6>
                    <p>KES 32 000</p>
                  </div>
                  <div className="best-category">
                    <div className="best-category-icon">
                      <i class="fa fa-futbol-o" aria-hidden="true"></i>
                    </div>
                    <h6 className="h6">Sports</h6>
                    <p>KES 6 550</p>
                  </div>
                  <div className="best-category">
                    <div className="best-category-icon">
                      <i class="fa fa-coffee" aria-hidden="true"></i>
                    </div>
                    <h6 className="h6">Beverages</h6>
                    <p>KES 5 000</p>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="">
                  {products.map((product) => {
                    const { id, name, amount, image } = product;
                    return (
                      <div className="best-selling-product" key={id}>
                        <div className="best-selling-product-img">
                          <img src={image} alt={name} />
                        </div>
                        <div className="product-info">
                          <h6 className="h6">{name}</h6>
                          <p>KES {amount}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row row-flex-right">
          <div className="col-6">
            <div className="card stat-card">
              <div className="stat-icon">
                <i class="fa fa-usd" aria-hidden="true"></i>
              </div>
              <h3 className="h3">Total Sales</h3>
              <div className="stat-value-flex">
                <h4 className="h4">KES 40 000</h4>
                <p>
                  <span className="increase">
                    +18% <i class="fa fa-arrow-up" aria-hidden="true"></i>
                  </span>
                  compared to last month
                </p>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="card stat-card">
              <div className="stat-icon">
                <i class="fa fa-shopping-basket" aria-hidden="true"></i>
              </div>
              <h3 className="h3">Total Products</h3>
              <div className="stat-value-flex">
                <h4 className="h4">1000</h4>
              </div>
            </div>
          </div>
          <div className="col-12 mt-3">
            <div className="card stat-card">
              <div className="stat-icon">
                <i class="fa fa-shopping-bag" aria-hidden="true"></i>
              </div>
              <h3 className="h3">Total Orders</h3>
              <div className="stat-value-flex">
                <h4 className="h4">159</h4>
                <p>
                  <span className="decrease">
                    -18% <i class="fa fa-arrow-down" aria-hidden="true"></i>
                  </span>
                  compared to last month
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="row my-3">
        <div className="col-4">
          <div className="card">
            <PieChart />
          </div>
        </div>
        <div className="col-4">
          <div className="card">
            <BarGraph />
          </div>
        </div>
        <div className="col-4">
          <div className="card"></div>
        </div>
      </div> */}
      <div className="row mb-3">
        <div className="col-8">
          <div className="card">
            <LatestOrder />
          </div>
        </div>
        <div className="col-4">
          <div className="card">
            <LatestTransactions />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
