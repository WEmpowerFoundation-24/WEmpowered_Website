const mongoose = require("mongoose")
const Schema  = mongoose.Schema
const contactusSchema = new Schema({
    name:{
        type:String,
        require:true,
    },
    email:{
        type: String,
        require: true,
        unique: true,
    },
    phoneNo:{
        type:Number,
        require:true,
        unique:true,
    },
    findUs:{
        type:String,
        require:true,
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
    whenContacted: Date,
    LastContacted: Date,
    },{timestamps:true})
    const Contactus = mongoose.model("Contactus", contactusSchema)
    module.exports = Contactus;
