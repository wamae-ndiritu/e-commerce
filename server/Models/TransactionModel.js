const mongoose = require("mongoose");

const TransactionSchema = mongoose.Schema(
  {
    transactionDate: {
      type: String,
      required: true,
    },
    mpesaReceiptNumber: {
      type: String,
      required: true,
    },
    amountPaid: {
      type: String,
      required: true,
    },
    phoneNo: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Transaction = mongoose.model("Transaction", TransactionSchema);

module.exports = { Transaction };
