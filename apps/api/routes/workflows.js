const express = require("express");
const router = express.Router();

router.get("/", (_, res) => {
  res.json([
    { id: 1, name: "Agreement Approval", steps: 5, status: "Active" },
    { id: 2, name: "Invoice Certification", steps: 3, status: "Planned" },
    { id: 3, name: "Performance Reconciliation", steps: 4, status: "Archived" }
  ]);
});

module.exports = router;
