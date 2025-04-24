const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

const users = [
  { id: 1, username: "admin", password: "secret", role: "admin" },
  { id: 2, username: "analyst", password: "pass123", role: "user" }
];

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (!user) return res.status(401).send("Invalid credentials");

  const token = jwt.sign(
    { id: user.id, username: user.username, role: user.role },
    process.env.JWT_SECRET || "supersecretkey",
    { expiresIn: "1h" }
  );

  res.json({ token });
});

module.exports = router;
