const express = require("express");

const callbackErrorRouter = express.Router();

callbackErrorRouter.post("/desc", (req, res) => {
  const ResultDesc = req.body.ResultDesc;
  if (ResultDesc === "DS timeout user cannot be reached") {
    res.status(400).json({ message: "Connection timeout!" });
  } else if (ResultDesc === "Request cancelled by user") {
    res.status(400).json({ message: "Request Cancelled!" });
  }
});

module.exports = { callbackErrorRouter };
