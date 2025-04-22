require("dotenv").config();
const express = require("express");
const { Sequelize, DataTypes } = require("sequelize");
const app = express();
app.use(express.json());

const sequelize = new Sequelize(process.env.POSTGRES_URI);

const User = sequelize.define("User", {
  username: DataTypes.STRING,
  role: DataTypes.STRING,
});

const Invoice = sequelize.define("Invoice", {
  amount: DataTypes.FLOAT,
});

app.get("/api/stats/overview", async (req, res) => {
  const invoiceCount = await Invoice.count();
  const totalAmount = await Invoice.sum("amount");
  const userRoles = await User.findAll({
    attributes: ["role", [sequelize.fn("COUNT", sequelize.col("role")), "count"]],
    group: ["role"]
  });

  res.json({
    invoiceCount,
    totalAmount,
    userRoles: userRoles.map(u => ({ role: u.role, count: u.dataValues.count }))
  });
});

app.listen(5000, () => console.log("📊 Analytics API on port 5000"));
