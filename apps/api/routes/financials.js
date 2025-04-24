const express = require("express");
const router = express.Router();
const data = require("../mock_data/financials.json");

router.get("/", (_, res) => res.json(data));

module.exports = router;
