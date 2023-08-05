const express = require("express");
const axios = require("axios");
const dotenv = require("dotenv");
const datetime = require("node-datetime");
const protect = require("../../../../Middlewares/authMiddleware");

dotenv.config();

const passKey = process.env.PASS_KEY;
const till_no = process.env.TILL_NO;
const consumerKey = process.env.CONSUMER_KEY;
const consumerSec = process.env.CONSUMER_SECRET;
const BusinessShortCode = process.env.BUSINESS_SHORT_CODE;
const URL = process.env.SERVER_URL;

const newPassword = () => {
  const date = datetime.create();

  const formatted = date.format("YmdHMS");

  const passString = BusinessShortCode + passKey + formatted;

  const base64EencodedPassword = Buffer.from(passString).toString("base64");

  return base64EencodedPassword;
};

exports.mpesaPassword = (req, res) => {
  res.send(newPassword());
};

exports.token = (req, res, next) => {
  //ACCESS_TOKEN

  const url =
    "https://api.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials";
  // ?grant_type=client_credentials
  const auth =
    "Basic " + Buffer.from(consumerKey + ":" + consumerSec).toString("base64");

  const headers = {
    Authorization: auth,
  };

  axios
    .get(url, {
      headers,
    })
    .then((response) => {
      // console.log(response);
      let token = response.data.access_token;
      console.log(`token is ${token}`);
      req.access_token = token;
      next();
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ message: "Invalid request" });
    });
  // req.access_token = "AkZ6tTm7YiTiKxtj7w5MgxHBbrCH";
  // next();
};

exports.stkPush = (req, res) => {
  let token = req.access_token;

  // console.log(req.body);
  // console.log(`token as in stkPush ${token}`);

  const { amountPayable, phoneNo } = req.body;

  // console.log(`amountPayable: ${amountPayable}, phoneNo: ${phoneNo}`);

  const phone = Number(phoneNo);
  const totalPrice = Number(amountPayable);
  const headers = {
    Authorization: "Bearer " + token,
  };

  const dateNow = datetime.create();
  const timestamp = dateNow.format("YmdHMS");

  const callbackUrl = "https://shangilia-server.onrender.com/api/confirmation/";

  const stkUrl = "https://api.safaricom.co.ke/mpesa/stkpush/v1/processrequest";
  let data = {
    BusinessShortCode: BusinessShortCode,
    Password: newPassword(),
    Timestamp: timestamp,
    TransactionType: "CustomerBuyGoodsOnline",
    Amount: totalPrice,
    PartyA: phone,
    PartyB: till_no,
    PhoneNumber: phone,
    CallBackURL: callbackUrl,
    AccountReference: "Nelite IT Solutions",
    TransactionDesc: "Nelite IT Solutions",
  };

  // console.log(data);

  axios
    .post(stkUrl, data, { headers: headers })
    .then((response) => res.send(response.data))
    .catch((error) => {
      res.status(400).json({ message: "An error occurred" });
      console.log(error);
    });
};
