const express = require("express")
const router = express.Router();
const {contactus} = require("../controllers/Emails");
router.post("/contactUs",contactus)

module.exports = router;