import React from "react";
import { Link } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";

const PaidOrders = () => {
  return (
    <div className="container">
      <div className="shadow-lg my-3 all-products-cont">
        <div className="float-right">
          <button
            className="btn btn-main"
            style={{ backgroundColor: "red", width: "20%" }}
          >
            Get Not Paid Orders
          </button>
        </div>
        <div className="my-3 d-flex order-row-header">
          <div className="order-row-left">
            <h5>Paid Orders</h5>
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
            <h6>User</h6>
          </div>
          <div className="col-3">
            <h6>Email</h6>
          </div>
          <div className="col-2">
            <h6>Amount</h6>
          </div>
          <div className="col-1">
            <h6>Status</h6>
          </div>
          <div className="col-1">
            <h6>Delivery</h6>
          </div>
          <div className="col-2">
            <h6>Date</h6>
          </div>
          <div className="col-2">
            <h6>Actions</h6>
          </div>
        </div>
        <div className="row d-flex align-items-center all-prod-row">
          <div className="col-1">
            <h6>Wamae</h6>
          </div>
          <div className="col-3">
            <h6>wamaejoseph392@gmail.com</h6>
          </div>
          <div className="col-2">
            <p className="">KES 200 OOO</p>
          </div>
          <div className="col-1 text-danger">
            <p>Paid</p>
          </div>
          <div className="col-1 text-danger">
            <p>Yes</p>
          </div>
          <div className="col-2 text-success">
            <p>12th Dec 2022</p>
          </div>
          <div className="col-2 actions-icons-cont">
            <div className="actions-icons">
              <Link to="/order/1">
                <VisibilityIcon className="text-info" />
              </Link>
            </div>
            <div className="actions-icons">
              <DeleteIcon className="text-danger" />
            </div>
          </div>
        </div>
        <div className="row d-flex align-items-center all-prod-row">
          <div className="col-1">
            <h6>Admin</h6>
          </div>
          <div className="col-3">
            <h6>ndirituwamae@students.uonbi.ac.ke</h6>
          </div>
          <div className="col-2">
            <p className="">KES 2 OOO</p>
          </div>
          <div className="col-1 text-danger">
            <p>Paid</p>
          </div>
          <div className="col-1 text-danger">
            <p>No</p>
          </div>
          <div className="col-2 text-success">
            <p>12th Dec 2022</p>
          </div>
          <div className="col-2 actions-icons-cont">
            <div className="actions-icons">
              <Link to="/order/1">
                <VisibilityIcon className="text-info" />
              </Link>
            </div>
            <div className="actions-icons">
              <DeleteIcon className="text-danger" />
            </div>
          </div>
        </div>
        <div className="row d-flex align-items-center all-prod-row">
          <div className="col-1">
            <h6>Wamae</h6>
          </div>
          <div className="col-3">
            <h6>wamaejoseph392@gmail.com</h6>
          </div>
          <div className="col-2">
            <p className="">KES 200 OOO</p>
          </div>
          <div className="col-1 text-danger">
            <p>Paid</p>
          </div>
          <div className="col-1 text-danger">
            <p>Yes</p>
          </div>
          <div className="col-2 text-success">
            <p>12th Dec 2022</p>
          </div>
          <div className="col-2 actions-icons-cont">
            <div className="actions-icons">
              <Link to="/order/1">
                <VisibilityIcon className="text-info" />
              </Link>
            </div>
            <div className="actions-icons">
              <DeleteIcon className="text-danger" />
            </div>
          </div>
        </div>
        <div className="row d-flex align-items-center all-prod-row">
          <div className="col-1">
            <h6>Admin</h6>
          </div>
          <div className="col-3">
            <h6>ndirituwamae@students.uonbi.ac.ke</h6>
          </div>
          <div className="col-2">
            <p className="">KES 2 OOO</p>
          </div>
          <div className="col-1 text-danger">
            <p>Paid</p>
          </div>
          <div className="col-1 text-danger">
            <p>No</p>
          </div>
          <div className="col-2 text-success">
            <p>12th Dec 2022</p>
          </div>
          <div className="col-2 actions-icons-cont">
            <div className="actions-icons">
              <Link to="/order/1">
                <VisibilityIcon className="text-info" />
              </Link>
            </div>
            <div className="actions-icons">
              <DeleteIcon className="text-danger" />
            </div>
          </div>
        </div>
        <div className="row d-flex align-items-center all-prod-row">
          <div className="col-1">
            <h6>Wamae</h6>
          </div>
          <div className="col-3">
            <h6>wamaejoseph392@gmail.com</h6>
          </div>
          <div className="col-2">
            <p className="">KES 200 OOO</p>
          </div>
          <div className="col-1 text-danger">
            <p>Paid</p>
          </div>
          <div className="col-1 text-danger">
            <p>Yes</p>
          </div>
          <div className="col-2 text-success">
            <p>12th Dec 2022</p>
          </div>
          <div className="col-2 actions-icons-cont">
            <div className="actions-icons">
              <Link to="/order/1">
                <VisibilityIcon className="text-info" />
              </Link>
            </div>
            <div className="actions-icons">
              <DeleteIcon className="text-danger" />
            </div>
          </div>
        </div>
        <div className="row d-flex align-items-center all-prod-row">
          <div className="col-1">
            <h6>Admin</h6>
          </div>
          <div className="col-3">
            <h6>ndirituwamae@students.uonbi.ac.ke</h6>
          </div>
          <div className="col-2">
            <p className="">KES 2 OOO</p>
          </div>
          <div className="col-1 text-danger">
            <p>Paid</p>
          </div>
          <div className="col-1 text-danger">
            <p>No</p>
          </div>
          <div className="col-2 text-success">
            <p>12th Dec 2022</p>
          </div>
          <div className="col-2 actions-icons-cont">
            <div className="actions-icons">
              <Link to="/order/1">
                <VisibilityIcon className="text-info" />
              </Link>
            </div>
            <div className="actions-icons">
              <DeleteIcon className="text-danger" />
            </div>
          </div>
        </div>
        <div className="row d-flex align-items-center all-prod-row">
          <div className="col-1">
            <h6>Wamae</h6>
          </div>
          <div className="col-3">
            <h6>wamaejoseph392@gmail.com</h6>
          </div>
          <div className="col-2">
            <p className="">KES 200 OOO</p>
          </div>
          <div className="col-1 text-danger">
            <p>Paid</p>
          </div>
          <div className="col-1 text-danger">
            <p>Yes</p>
          </div>
          <div className="col-2 text-success">
            <p>12th Dec 2022</p>
          </div>
          <div className="col-2 actions-icons-cont">
            <div className="actions-icons">
              <Link to="/order/1">
                <VisibilityIcon className="text-info" />
              </Link>
            </div>
            <div className="actions-icons">
              <DeleteIcon className="text-danger" />
            </div>
          </div>
        </div>
        <div className="row d-flex align-items-center all-prod-row">
          <div className="col-1">
            <h6>Admin</h6>
          </div>
          <div className="col-3">
            <h6>ndirituwamae@students.uonbi.ac.ke</h6>
          </div>
          <div className="col-2">
            <p className="">KES 2 OOO</p>
          </div>
          <div className="col-1 text-danger">
            <p>Paid</p>
          </div>
          <div className="col-1 text-danger">
            <p>No</p>
          </div>
          <div className="col-2 text-success">
            <p>12th Dec 2022</p>
          </div>
          <div className="col-2 actions-icons-cont">
            <div className="actions-icons">
              <Link to="/order/1">
                <VisibilityIcon className="text-info" />
              </Link>
            </div>
            <div className="actions-icons">
              <DeleteIcon className="text-danger" />
            </div>
          </div>
        </div>
        <div className="row d-flex align-items-center all-prod-row">
          <div className="col-1">
            <h6>Wamae</h6>
          </div>
          <div className="col-3">
            <h6>wamaejoseph392@gmail.com</h6>
          </div>
          <div className="col-2">
            <p className="">KES 200 OOO</p>
          </div>
          <div className="col-1 text-danger">
            <p>Paid</p>
          </div>
          <div className="col-1 text-danger">
            <p>Yes</p>
          </div>
          <div className="col-2 text-success">
            <p>12th Dec 2022</p>
          </div>
          <div className="col-2 actions-icons-cont">
            <div className="actions-icons">
              <Link to="/order/1">
                <VisibilityIcon className="text-info" />
              </Link>
            </div>
            <div className="actions-icons">
              <DeleteIcon className="text-danger" />
            </div>
          </div>
        </div>
        <div className="row d-flex align-items-center all-prod-row">
          <div className="col-1">
            <h6>Admin</h6>
          </div>
          <div className="col-3">
            <h6>ndirituwamae@students.uonbi.ac.ke</h6>
          </div>
          <div className="col-2">
            <p className="">KES 2 OOO</p>
          </div>
          <div className="col-1 text-danger">
            <p>Paid</p>
          </div>
          <div className="col-1 text-danger">
            <p>Yes</p>
          </div>
          <div className="col-2 text-success">
            <p>12th Dec 2022</p>
          </div>
          <div className="col-2 actions-icons-cont">
            <div className="actions-icons">
              <Link to="/order/1">
                <VisibilityIcon className="text-info" />
              </Link>
            </div>
            <div className="actions-icons">
              <DeleteIcon className="text-danger" />
            </div>
          </div>
        </div>
        <div className="row pagination-row">
          <div className="col-4 d-flex my-3 pagination">
            <button>Prev</button>
            <button className="pagination-active bg-warning">1</button>
            <button>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaidOrders;
