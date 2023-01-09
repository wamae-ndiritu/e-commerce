const express = require("express");
const asyncHandler = require("express-async-handler");
const { protect, admin } = require("../Middlewares/authMiddleware");
const { Order } = require("../Models/orderModel");

const orderRouter = express.Router();

// CREATE ORDER
orderRouter.post(
  "/",
  protect,
  asyncHandler(async (req, res) => {
    const {
      orderItems,
      billingAddress,
      paymentMethod,
      totalPrice,
      deliveryMethod,
    } = req.body;

    console.log(req.body);

    if (orderItems && orderItems.length === 0) {
      res.status(400).json({ message: "No order items" });
    } else {
      const order = new Order({
        orderItems,
        user: req.user._id,
        billingAddress,
        paymentMethod,
        totalPrice,
        deliveryMethod,
      });

      const createOrder = await order.save();
      res.status(201).json(createOrder);
    }
  })
);

// USER ORDERS
orderRouter.get(
  "/",
  protect,
  asyncHandler(async (req, res) => {
    const order = await Order.find({ user: req.user._id }).sort({ _id: -1 });
    res.json(order);
  })
);

// USER GET ORDER BY ID
orderRouter.get(
  "/:id",
  protect,
  asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id).populate(
      "user",
      "name email"
    );

    if (order) {
      res.json(order);
    } else {
      res.status(404).json({ message: "Order not found" });
    }
  })
);

// ADMIN GET ALL ORDERS
orderRouter.get(
  "/all/orders",
  protect,
  admin,
  asyncHandler(async (req, res) => {
    const orders = await Order.find({})
      .sort({ _id: -1 })
      .populate("user", "id name email");
    res.json(orders);
  })
);

// ADMIN GET USER ORDERS
orderRouter.get(
  "/user/:id",
  protect,
  admin,
  asyncHandler(async (req, res) => {
    const orders = await Order.findById(req.params.id).sort({ _id: -1 });
    res.json(orders);
  })
);

module.exports = { orderRouter };
