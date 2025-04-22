require("dotenv").config();
const { DB_ENGINE, MONGO_URI, POSTGRES_URI } = process.env;

async function seedMongo() {
  const mongoose = require("mongoose");
  await mongoose.connect(MONGO_URI);
  const User = mongoose.model("User", new mongoose.Schema({
    username: String, password: String, role: String
  }));
  const Invoice = mongoose.model("Invoice", new mongoose.Schema({ amount: Number }));

  await User.deleteMany({});
  await Invoice.deleteMany({});

  await User.insertMany([
    { username: "admin", password: "admin123", role: "admin" },
    { username: "manager", password: "manager123", role: "approver" },
    { username: "viewer", password: "viewer123", role: "viewer" }
  ]);

  await Invoice.insertMany([
    { amount: 200.50 },
    { amount: 475.00 },
    { amount: 999.99 }
  ]);

  console.log("✅ MongoDB seeded successfully.");
  process.exit();
}

async function seedPostgres() {
  const { Sequelize, DataTypes } = require("sequelize");
  const sequelize = new Sequelize(POSTGRES_URI);

  const User = sequelize.define("User", {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING
  });
  const Invoice = sequelize.define("Invoice", {
    amount: DataTypes.FLOAT
  });

  await sequelize.sync({ force: true });

  await User.bulkCreate([
    { username: "admin", password: "admin123", role: "admin" },
    { username: "manager", password: "manager123", role: "approver" },
    { username: "viewer", password: "viewer123", role: "viewer" }
  ]);

  await Invoice.bulkCreate([
    { amount: 200.50 },
    { amount: 475.00 },
    { amount: 999.99 }
  ]);

  console.log("✅ PostgreSQL seeded successfully.");
  process.exit();
}

if (DB_ENGINE === "mongo") seedMongo();
else if (DB_ENGINE === "postgres") seedPostgres();
else console.error("❌ Unsupported DB_ENGINE in .env");
