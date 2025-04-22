const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const { DB_ENGINE, MONGO_URI, POSTGRES_URI, JWT_SECRET, JWT_EXPIRY } = process.env;

// ----- DB Setup -----
let db = {};
if (DB_ENGINE === "mongo") {
  const mongoose = require("mongoose");
  mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  const userSchema = new mongoose.Schema({ username: String, password: String, role: String });
  const invoiceSchema = new mongoose.Schema({ amount: Number });
  db.User = mongoose.model("User", userSchema);
  db.Invoice = mongoose.model("Invoice", invoiceSchema);
} else if (DB_ENGINE === "postgres") {
  const { Sequelize, DataTypes } = require("sequelize");
  const sequelize = new Sequelize(POSTGRES_URI);
  db.User = sequelize.define("User", {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING
  });
  db.Invoice = sequelize.define("Invoice", {
    amount: DataTypes.FLOAT
  });
  sequelize.sync();
}

// ----- JWT Middleware -----
function authenticateToken(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Unauthorized" });
  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ error: "Forbidden" });
    req.user = user;
    next();
  });
}

function authorizeRoles(...roles) {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ error: "Forbidden" });
    }
    next();
  };
}

// ----- Routes -----
app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await db.User.findOne({ where: { username, password } }).catch(() => null);
  if (!user) return res.status(401).json({ error: "Invalid credentials" });

  const token = jwt.sign({ username, role: user.role }, JWT_SECRET, { expiresIn: JWT_EXPIRY });
  res.json({ token, role: user.role });
});

app.get("/api/invoices", authenticateToken, async (req, res) => {
  const invoices = await db.Invoice.findAll ? await db.Invoice.findAll() : await db.Invoice.find();
  res.json(invoices);
});

app.post("/api/invoices", authenticateToken, authorizeRoles("admin", "approver"), async (req, res) => {
  const newInvoice = await db.Invoice.create ? await db.Invoice.create(req.body) : await new db.Invoice(req.body).save();
  res.status(201).json(newInvoice);
});

app.listen(5000, () => console.log("Universal backend running at http://localhost:5000"));
