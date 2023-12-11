const express = require("express");
const dotenv = require("dotenv");
const asyncHandler = require("express-async-handler");
const nodemailer = require("nodemailer");
const smtpTranspoter = require("nodemailer-smtp-transport");
const otpGenerator = require("otp-generator");
const bcrypt = require("bcrypt");
const { userVerification } = require("../Models/verificationModel");
const { User } = require("../Models/userModel");
const { generateToken } = require("../utils/token");
const { protect } = require("../Middlewares/authMiddleware");

const CLIENT_URL = process.env.CLIENT_URL;

const userRouter = express.Router();
dotenv.config();

// create mail transporter
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.AUTH_EMAIL,
    pass: process.env.AUTH_PASS,
  },
});

// TESTING THE TRANSPORTER
transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready for sending mails");
    console.log(success);
  }
});

// SEND MAIL
const sendVerificationEmail = async ({ _id, email }) => {
  //const uniqueString = v4() + _id;

  const OTP = otpGenerator.generate(6, {
    lowerCaseAlphabets: false,
    upperCaseAlphabets: false,
    specialChars: false,
    // specialChars: false,
  });

  // console.log(OTP);
  //mail options var const let

  const mailOptions = {
    from: process.env.AUTH_EMAIL,
    to: email,
    subject: "Verification Code",
    html: `<p>Your verification code is <h4>${OTP}</h4>.</p>`,
  };

  //hashing the unique string
  const salt = 10;
  const hashedOTP = await bcrypt.hash(OTP, salt);
  console.log(`HashedOTP: ${hashedOTP}`);
  console.log(hashedOTP);

  const newVerification = new userVerification({
    userId: _id,
    OTP: hashedOTP,
    createdAt: Date.now(),
    expiresAt: Date.now() + 600000,
  });

  const savedVerification = await newVerification.save();

  if (savedVerification) {
    await transporter.sendMail(mailOptions);
  }
};

const sendPasswordResetMail = async ({ id, username, email }) => {
  console.log(email);
  const mailOptions = {
    from: process.env.AUTH_EMAIL,
    to: email,
    subject: "Reset Password",
    html: `<p>Hi <h5>${username}</h5>, A request to reset your password was made. Please <a href="${CLIENT_URL}/${id}/reset/password">Click here</a> to reset. If it wasn't you, you can ignore this </p> `,
  };

  await transporter.sendMail(mailOptions);
};

// REGISTER

userRouter.post(
  "/register",
  asyncHandler(async (req, res) => {
    const password = req.body.password_1;
    const { username, email, phone } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
      res.status(400).send({ message: "User already exist" });
      // throw new Error("User already exists");
    } else {
      const salt = 10;
      const hashPassword = await bcrypt.hash(password, salt);
      if (hashPassword) {
        const user = new User({
          username,
          email,
          phone,
          password: hashPassword,
          isVerified: false,
        });
        if (user) {
          const result = await user.save();
          res.status(201).json({
            _id: result._id,
            username: result.username,
            email: result.email,
          });
          sendVerificationEmail(result);
        } else {
          res.status(400);
          throw new Error("Invalid User Data");
        }
      } else {
        res.status(500);
        throw new Error("Internal server error");
      }
    }
  })
);

// VERIFYING EMAIL

userRouter.post(
  "/verify/otp",
  asyncHandler(async (req, res) => {
    const { userId, otp } = req.body;
    console.log(req.body);

    const unverifiedUser = await userVerification.findOne({ userId });

    if (unverifiedUser) {
      const expiryDate = unverifiedUser.expiresAt;
      // check whether the OTP has expired
      if (expiryDate < Date.now()) {
        // OTP expired

        const deleteUserVerification = await userVerification.deleteOne({
          userId,
        });

        const deleteUnverifiedUser = await User.deleteOne({ _id: userId });

        if (deleteUserVerification && deleteUnverifiedUser) {
          res.status(400).send({ message: "OTP expired, Please try again" });
        }
      } else {
        const compareOTP = await bcrypt.compare(otp, unverifiedUser.OTP);

        if (compareOTP) {
          const updateUser = await User.updateOne(
            { _id: userId },
            { isVerified: true }
          );

          if (updateUser) {
            const deleteUserVerification = await userVerification.deleteOne({
              userId,
            });

            if (deleteUserVerification) {
              const verifiedUser = await User.findOne({ _id: userId });
              if (verifiedUser) {
                res.json({
                  _id: verifiedUser._id,
                  username: verifiedUser.username,
                  email: verifiedUser.email,
                  phone: verifiedUser.phone,
                  isAdmin: verifiedUser.isAdmin,
                  isVerified: verifiedUser.isVerified,
                  token: generateToken(verifiedUser._id),
                });
              }
            }
          }
        }
      }
    } else {
      res.status(500).send({ message: "Something went wrong" });
    }
  })
);

// LOGIN

userRouter.post(
  "/login",
  asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user) {
      if (user.isVerified) {
        const comparePassword = await bcrypt.compare(password, user.password);

        if (comparePassword) {
          res.status(200);
          res.json({
            _id: user._id,
            username: user.username,
            email: user.email,
            phone: user.phone,
            isAdmin: user.isAdmin,
            isVerified: user.isVerified,
            token: generateToken(user._id),
            createdAt: user.createdAt,
          });
        } else {
          res.status(400).send({ message: "Invalid Password!" });
        }
      } else {
        res.status(403).send({
          message: "Email not verified... Please check your email and verify!",
        });
      }
    } else {
      res.status(404).send({ message: "Email does not exist!" });
    }
  })
);

// FORGOT PASSWORD
userRouter.post(
  "/forgot/password",
  asyncHandler(async (req, res) => {
    const email = req.body.email;

    console.log(email);

    const user = await User.findOne({ email });

    if (user) {
      sendPasswordResetMail(user);
      res.status(201).json({ message: "Reset Email sent" });
    } else {
      res.status(404).json({ message: "Account does not exist!" });
    }
  })
);

// UPDATE PASSWORD
userRouter.post("/update/:id/password", async (req, res) => {
  const { password } = req.body;
  const id = req.params.id;

  const user = await User.findById(id);

  if (user) {
    const hashRounds = 10;
    const hashedPassword = await bcrypt.hash(password, hashRounds);

    if (hashedPassword) {
      user.password = hashedPassword;

      const updatedUser = await user.save();

      if (updatedUser) {
        res.status(200).json(updatedUser);
      }
    }
  } else {
    res.status(400).json({ message: "Invalid request!" });
  }
});

// UPDATE PROFILE
userRouter.put(
  "/profile",
  protect,
  asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);

    if (user) {
      const pass = req.body.password;
      const saltRounds = 10;
      const hashPassword = await bcrypt.hash(pass, saltRounds);

      user.name = req.user.name || user.name;
      user.password = hashPassword || user.password;

      const updatedUser = await user.save();

      res.json(updatedUser);
    } else {
      res.status(404);
      throw new Error("User not found");
    }
  })
);

module.exports = { userRouter };
