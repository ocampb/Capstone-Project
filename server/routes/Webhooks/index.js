const express = require("express");
const verifyWebhook = require("./verifyWebhook");

const router = express.Router();

router.post("/", verifyWebhook, (req, res) => {
  const { payload } = req.body;
  // todo: check if webhook has authorized email
  res.sendStatus(200);
});

module.exports = router;
