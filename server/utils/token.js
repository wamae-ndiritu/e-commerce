const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, "wamae", {
    expiresIn: 3600,
  });
};

module.exports = { generateToken };
