const express = require("express")
const router = express.Router();
const {contactus} = require("../controllers/Emails");
router.post("/contactUs",contactus)
router.get("/",(req,res)=>{
    res.send("Hello World")
})

module.exports = router;