
const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const router = express.Router();

// ===== File Upload Setup =====
const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file) => cb(null, Date.now() + "_" + file.originalname),
});
const upload = multer({ storage });

router.post("/uploads", upload.single("file"), (req, res) => {
  if (!req.file) return res.status(400).send("No file uploaded.");
  res.json({ filename: req.file.filename, path: `/uploads/${req.file.filename}` });
});

// ===== Invoice Export (mock) =====
const sampleInvoices = [
  { id: 1, amount: 500.25 },
  { id: 2, amount: 249.99 },
  { id: 3, amount: 103.75 }
];

router.get("/invoices/export/:format", (req, res) => {
  const { format } = req.params;
  if (format === "json") {
    res.setHeader("Content-Disposition", "attachment; filename=invoices.json");
    res.json(sampleInvoices);
  } else if (format === "csv") {
    const csv = sampleInvoices.map(i => `${i.id},${i.amount}`).join("\n");
    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment; filename=invoices.csv");
    res.send("id,amount\n" + csv);
  } else {
    res.status(400).send("Unsupported export format.");
  }
});

module.exports = router;
