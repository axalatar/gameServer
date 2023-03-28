const express = require('express');
const router = express.Router();
const createAccount = require("./account/create")
const getAccountToken = require("./account/token")

router.post("/", (req, res) => {
  switch(req.headers.action) {
    case "create":
      createAccount(req, res);
      break
    case "token":
      getAccountToken(req, res);
      break
    default:
      res.status(400).send("Unknown/missing 'action' in header");
    }
});

module.exports = router;