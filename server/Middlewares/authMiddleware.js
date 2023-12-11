const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const { User } = require("../Models/userModel");

exports.protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token, "wamae");

      req.user = await User.findById(decoded.id);
      next();
    } catch (error) {
      console.error(error);
      res.status(401).json({ message: "Not authorized, token failed" });
      throw new Error("Not authorized, token failed");
    }
  }
  if (!token) {
    console.log("No token found");
    res.status(401).json({ message: "Not authorized, no token" });
    throw new Error("Not authorized, no token");
  }
});

exports.admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error("Not authorized as an Admin");
  }
};
