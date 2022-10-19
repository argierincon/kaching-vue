const jwt = require("jsonwebtoken");

const verifyToken = (token) => {
  const [, payload] = token.split(".");
  const decodedToken = atob(payload);
  return JSON.parse(decodedToken);
};

module.exports = {
  verifyToken,
};
