const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ message: "Access denied. No token provided." });
  }

  try {
    // Expected format: "Bearer <token>"
    const tokenPart = token.startsWith("Bearer ") ? token.slice(7, token.length).trimLeft() : token;

    const decoded = jwt.verify(tokenPart, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Token expired. Please login again." });
    }
    return res.status(400).json({ message: "Invalid token." });
  }
};

module.exports = authMiddleware;
