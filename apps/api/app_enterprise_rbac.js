const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { v4: uuidv4 } = require("uuid");

const app = express();
app.use(cors());
app.use(bodyParser.json());

let users = {
  admin: { password: "admin123", role: "admin" },
  manager: { password: "manager123", role: "approver" },
  viewer: { password: "viewer123", role: "viewer" }
};

let tokens = {};
let invoices = [
  { id: 101, amount: 249.99 },
  { id: 102, amount: 480.5 },
  { id: 103, amount: 133.75 }
];
let agreements = [
  { id: 1, title: "Defense Funding Agreement" },
  { id: 2, title: "Civil Agency Support" },
  { id: 3, title: "Federal Shared Services" }
];

// Auth Middleware
function tokenRequired(req, res, next) {
  const token = req.headers.authorization?.replace("Bearer ", "");
  const user = tokens[token];
  if (!user) return res.status(401).json({ error: "Unauthorized" });
  req.user = user;
  next();
}

// Role Middleware
function roleRequired(...allowedRoles) {
  return (req, res, next) => {
    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ error: "Forbidden" });
    }
    next();
  };
}

app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  const user = users[username];
  if (user && user.password === password) {
    const token = uuidv4();
    tokens[token] = { username, role: user.role };
    return res.json({ token, role: user.role });
  }
  return res.status(401).json({ error: "Invalid credentials" });
});

app.get("/api/invoices", tokenRequired, (req, res) => {
  res.json(invoices);
});

app.post("/api/invoices", tokenRequired, roleRequired("admin", "approver"), (req, res) => {
  const newId = Math.max(...invoices.map(i => i.id)) + 1;
  invoices.push({ id: newId, amount: req.body.amount });
  res.status(201).json({ status: "created" });
});

app.put("/api/invoices/:id", tokenRequired, roleRequired("admin", "approver"), (req, res) => {
  const id = parseInt(req.params.id);
  const invoice = invoices.find(i => i.id === id);
  if (!invoice) return res.status(404).json({ error: "Invoice not found" });
  invoice.amount = req.body.amount;
  res.json({ status: "updated" });
});

app.delete("/api/invoices/:id", tokenRequired, roleRequired("admin"), (req, res) => {
  const id = parseInt(req.params.id);
  invoices = invoices.filter(i => i.id !== id);
  res.json({ status: "deleted" });
});

app.get("/api/agreements", tokenRequired, (req, res) => {
  res.json(agreements);
});

app.get("/api/users", tokenRequired, roleRequired("admin"), (req, res) => {
  const userList = Object.entries(users).map(([username, info]) => ({
    username,
    role: info.role
  }));
  res.json(userList);
});

app.listen(5000, () => console.log("RBAC API running on http://localhost:5000"));
