const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { connectDatabase } = require("./config/MongoDB");
const { userRouter } = require("./Routes/userRouter");
const { productRouter } = require("./Routes/productRouter");
const bodyParser = require("body-parser");
const { errorHandler } = require("./Middlewares/Error");
const { orderRouter } = require("./Routes/orderRouter");
// const { mpesaRouter } = require("./Routes/paymentRoutes/mpesa/routes/mpesa");
const {
  verificationRouter,
} = require("./Routes/paymentRoutes/mpesa/routes/verificationRoute");
const {
  callBackRouter,
} = require("./Routes/paymentRoutes/mpesa/routes/callbackUrl");
const { mpesaRouter } = require("./Routes/paymentRoutes/mpesa/routes/mpesa");
const { transactionRouter } = require("./Routes/transactionRoute");
const {
  callbackErrorRouter,
} = require("./Routes/paymentRoutes/mpesa/routes/callbackErrors");
// const { orderRouter } = require("./Routes/orderRouter");

dotenv.config();
connectDatabase();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// Error Middlewares
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

// API CALLS
app.use("/api/user", userRouter);
app.use("/api/orders", orderRouter);
app.use("/api/products", productRouter);

// PAYMENTS API CALLS
app.use("/api/payment", mpesaRouter);
app.use("/api/verify-payment", verificationRouter);
app.use("/api/transactions", transactionRouter);
app.use("/api/confirmation", callBackRouter);
app.use("api/stkRequest", callbackErrorRouter);

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
