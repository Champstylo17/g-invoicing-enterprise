const express = require("express");
const router = express.Router();

router.get("/", (_, res) => {
  res.json({
    gitBranch: "main",
    lastDeployed: "2025-04-22T10:00:00Z",
    status: "Healthy",
    checks: {
      frontend: "✅",
      backend: "✅",
      database: "✅"
    }
  });
});

module.exports = router;
