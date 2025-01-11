const nodemailer = require("nodemailer");
const dotenv = require("dotenv")
dotenv.config()
// Create a transporter object using Gmail
const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 465,
  secure: true, // true for port 465, false for other ports
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Async function to send an email
const contactusReceivingEmail = async (email) => {
  try {
    // Validate environment variables
    if (!process.env.EMAIL || !process.env.EMAIL_PASSWORD) {
      throw new Error("Email credentials are missing in environment variables.");
    }

    // Send mail with defined transport object
    const info = await transporter.sendMail({
      from: process.env.EMAIL, // sender address
      to: email, // use the passed email parameter as the recipient
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>", // html body 
    }); 
  } catch (error) {
    console.error("Error sending email (contactusReceivingEmail):", error.message);
  }
};

module.exports = {contactusReceivingEmail};