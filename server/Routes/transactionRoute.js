const express = require("express");
const expressAsyncHandler = require("express-async-handler");
const { admin } = require("../Middlewares/authMiddleware");
const { protect } = require("../Middlewares/authMiddleware");
const { Transaction } = require("../Models/TransactionModel");

const transactionRouter = express.Router();

//LIST ALL TRANSACTIONS
transactionRouter.get(
  "/all",
  protect,
  admin,
  expressAsyncHandler(async (req, res) => {
    const transactions = await Transaction.find({});
    res.json(transactions);
    console.log(transactions);
  })
);

module.exports = { transactionRouter };
