const express = require("express");
const app = express();
const cors = require("cors");
const nodemailer = require('nodemailer')
const port = 3000;

app.use(cors());

 app.get("/send-Email",(req,res)=>{
    res.send("hello");
 })
 app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);
 })