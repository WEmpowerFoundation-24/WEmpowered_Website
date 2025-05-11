const mongoose = require("mongoose")
const validator = require('validator');
const Schema  = mongoose.Schema
const allowedDomains = ['gmail.com', 'yahoo.com', 'myorg.org'];
const contactusSchema = new Schema({
    name:{
        type:String,
        required: [true, 'Name is required'],
    },
    email:{
        type: String,
        required: [true, 'Email is required'],
        unique: [true,"Email is already in use"],
        validate: [validator.isEmail, 'Invalid email format']
    },
    phoneNo:{
        type:Number,
        required: [true, 'Phone Number is required'],
        unique:[true,"Phone number is already in use"],
    },
    findUs:{
        type:String,
        required: [true, 'Choose where you find us'],
    },
    QuestionAsked:[
        {
            question: String,
            time: {
                type: Date,
                default: Date.now,
            }
            
        }
    ],
    },{timestamps:true})
    const Contactus = mongoose.model("Contactus", contactusSchema)
    module.exports = Contactus;
