const express = require("express");
const router = express.Router();
const data = require("../mock_data/integration.json");

router.get("/", (_, res) => res.json(data));

module.exports = router;
