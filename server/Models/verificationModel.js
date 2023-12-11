const mongoose = require("mongoose");

const verificationSchema = mongoose.Schema(
  {
    userId: {
      type: String,
    },
    OTP: {
      type: String,
    },
    createdAt: {
      type: Date,
    },
    expiresAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

const userVerification = mongoose.model("userVerification", verificationSchema);

module.exports = { userVerification };
