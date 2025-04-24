const express = require("express");
const router = express.Router();
const data = require("../mock_data/tools.json");
const auth = require("../middleware/auth");

router.get("/", auth, (_, res) => res.json(data));

module.exports = router;
