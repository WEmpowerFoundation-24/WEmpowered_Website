const mongoose = require("mongoose");
const connectDB = async()=>{
    try{
        const conn = await mongoose.connect('mongodb+srv://Wempower9023sfjbjf:sjhdbhjcsbdchsjdcvsjvcvacjhc@cluster0.h2e9uwo.mongodb.net/email')
        console.log(`MongoDB connected: ${conn.connection.host}`);
    }catch(error){
        console.log("MongoDB connection error: ",error.message)
        process.exit(1);
    }
}
module.exports = connectDB;