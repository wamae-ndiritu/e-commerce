const express = require("express");
const { stkPush } = require("../controllers/mpesaController");
const { token } = require("../controllers/mpesaController");
const { mpesaPassword } = require("../controllers/mpesaController");
const { protect } = require("../../../../Middlewares/authMiddleware");

const mpesaRouter = express.Router();

mpesaRouter.get("/password", mpesaPassword);
mpesaRouter.get("/token", token);
mpesaRouter.post("/stk/push", protect, token, stkPush);

module.exports = { mpesaRouter };
