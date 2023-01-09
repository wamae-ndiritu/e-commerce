import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchIcon from "@mui/icons-material/Search";
import Message from "../../utilities/Message";
import { listTransactions } from "../../Redux/Actions/transactionActions";

const Transactions = () => {
  const dispatch = useDispatch();

  const transactionList = useSelector((state) => state.transactionList);
  const { loading, error, transactions } = transactionList;

  useEffect(() => {
    dispatch(listTransactions());
  }, [dispatch]);

  useEffect(() => {
    if (transactions) {
      console.log(transactions);
    }
  }, [transactions]);
  return (
    <div className="container">
      <div className="shadow-lg my-3 all-products-cont">
        <div className="my-3 d-flex order-row-header">
          <div className="order-row-left">
            <h5>Transactions</h5>
          </div>
          <div className="order-row-right">
            <div className="input-group row-right-1">
              <input
                type="text"
                className="form-control"
                placeholder="Search transaction using Mpesa Code..."
              />
              <button className="btn btn-warning input-group-text">
                <SearchIcon />
              </button>
            </div>
            <div className="order-filter-cont">
              <h6>Amount</h6>
              <select className="form-select">
                <option selected>--Default--</option>
                <option>Low to High</option>
                <option>High to Low</option>
              </select>
            </div>
          </div>
        </div>
        <div className="row all-products-header">
          <div className="col-2">
            <h6>Mpesa Receipt No</h6>
          </div>
          <div className="col-2">
            <h6>Phone No</h6>
          </div>
          <div className="col-2">
            <h6>Amount</h6>
          </div>
          <div className="col-3">
            <h6>Date</h6>
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
        {transactions?.map((transaction) => {
          const {
            _id,
            mpesaReceiptNumber: mpesaCode,
            amountPaid: amount,
            phoneNo,
            transactionDate: date,
          } = transaction;

          return (
            <div
              className="row d-flex align-items-center all-prod-row all-trans"
              key={_id}
            >
              <div className="col-2">
                <h6>{mpesaCode}</h6>
              </div>
              <div className="col-2">
                <h6>0{phoneNo}</h6>
              </div>
              <div className="col-2 text-success">
                <h6>KES {amount}</h6>
              </div>
              <div className="col-3 text-success">
                <h6>{date}</h6>
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

export default Transactions;
