const express = require("express");
const { Transaction } = require("../../../../Models/TransactionModel");

const callBackRouter = express.Router();

callBackRouter.post("/", async (req, res) => {
  const result = req.body.Body.stkCallback.CallbackMetadata;

  console.log(req.body);

  console.log(result);

  const amountPaid = result.Item[0].Value;

  const mpesaReceiptNumber = result.Item[1].Value;

  const TransactionDate = result.Item[3].Value;

  const formattedDate = (TransactionDate) => {
    const date = TransactionDate.toString();

    const TransactionYear = date.slice(0, 4);
    const TransactionMonth = date.slice(4, 6);
    const Transactiondate = date.slice(6, 8);
    const TransactionHour = date.slice(8, 10);
    const TransactionMin = date.slice(10, 12);

    const formattedTransactionDate =
      Transactiondate +
      "/" +
      TransactionMonth +
      "/" +
      TransactionYear +
      " " +
      TransactionHour +
      ":" +
      TransactionMin;

    return formattedTransactionDate;
  };

  const transactionDate = formattedDate(TransactionDate);

  const PhoneNumber = result.Item[4].Value;
  const formattedStringifiedPhoneNo = PhoneNumber.toString().replace(
    "254",
    "0"
  );
  const phoneNo = Number(formattedStringifiedPhoneNo);

  console.log("Awaiting to be saved in the database");
  console.log(amountPaid, mpesaReceiptNumber, transactionDate, phoneNo);

  const mpesaCodeExists = await Transaction.findOne({ mpesaReceiptNumber });

  if (mpesaCodeExists) {
    res.status(400);
    throw new Error("Invalid Mpesa Code");
  } else {
    const payment = await new Transaction({
      transactionDate,
      mpesaReceiptNumber,
      amountPaid,
      phoneNo,
    });
    if (payment) {
      const savedPayment = await payment.save();
      res.status(201).json(savedPayment);
      console.log(savedPayment);
    } else {
      res.status(400);
      throw new Error("Invalid Transaction");
    }
  }
});

module.exports = { callBackRouter };
