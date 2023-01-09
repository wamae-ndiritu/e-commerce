const express = require("express");
const asyncHandler = require("express-async-handler");
const { Transaction } = require("../../../../Models/TransactionModel");
const { Order } = require("../../../../Models/orderModel");
const { protect } = require("../../../../Middlewares/authMiddleware");

const verificationRouter = express.Router();

verificationRouter.post(
  "/mpesa-code-verification",
  asyncHandler(async (req, res) => {
    const mpesaReceiptNumber = req.body.mpesaCode;
    const amountPaid = Number(req.body.amountPaid);
    const transaction = await Transaction.findOne({
      mpesaReceiptNumber: mpesaReceiptNumber,
      amountPaid,
    });

    if (transaction) {
      res.json(transaction);
      console.log(transaction);
    } else {
      res.status(401).json({ message: "Invalid Mpesa Code" });
      // throw new Error("Invalid Mpesa Code");
    }
  })
);

verificationRouter.put(
  "/:id/orderIsPaid",
  asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id);

    if (order) {
      order.isPaid = true;
      order.paidAt = Date.now();
      order.paymentResult = {
        id: req.body.id,
        status: req.body.status,
        update_time: req.body.update_time,
        email_address: req.body.email_address,
      };

      const updatedOrder = await order.save();
      res.json(updatedOrder);
    } else {
      res.status(404).json({ message: "Order not found" });
      // throw new Error("Order Not Found");
    }
  })
);

module.exports = { verificationRouter };
