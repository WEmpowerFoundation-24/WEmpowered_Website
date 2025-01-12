const express = require("express");
const dotenv = require("dotenv")
const EmailRoutes = require("./routes/EmailRoutes")
const connectDB = require("./db/connectDB")
const cors = require("cors")
dotenv.config();
const app = express();
const port = 3000;
app.use(cors({origin:"https://wempowered.onrender.com",credentials:true}));
app.use(express.json()); // allow use to parse the content in req.body

app.use("/emails", EmailRoutes);

app.listen(port,()=>{
   // connectDB();
    console.log(`Server is listening on port ${port}`);
 }) 