const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.cookies.authToken;

    if (!token) {
      return res
        .status(401)
        .json({ message: "Unauthorized: No token provided" });
    }

    // Verify token
    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET); // Using secret key
    } catch (error) {
      return res.status(401).json({
        message:
          error.name === "TokenExpiredError"
            ? "Unauthorized: Token expired, please login again"
            : "Unauthorized: Invalid token",
      });
    }

    // Attach user info to request object
    req.user = { id: decoded.id };

    next();
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = authMiddleware;
