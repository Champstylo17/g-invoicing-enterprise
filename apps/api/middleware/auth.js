const jwt = require("jsonwebtoken");

function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ error: "Unauthorized" });

  const token = authHeader.split(" ")[1];
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET || "secretkey");
    req.user = payload;
    next();
  } catch (err) {
    res.status(403).json({ error: "Forbidden" });
  }
}

module.exports = authMiddleware;
