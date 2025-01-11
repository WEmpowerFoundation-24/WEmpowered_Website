const {contactusReceivingEmail} = require("../nodemailer/contactus")
const contactus = async(req,res)=>{
    const {name,email,phoneNo,findUs} = req.body;
    console.log(findUs+" "+name+" "+email+" "+phoneNo);
    try{
        await contactusReceivingEmail(email); // Correct spelling
        res.status(200).json({message:"Email sent successfully"})
    }catch(error){
        console.log(error)
    }
}
module.exports = {contactus};