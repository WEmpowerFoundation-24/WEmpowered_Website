const { contactusReceivingEmail } = require("../nodemailer/contactus")
const Contactus = require("../models/contactUs")
const contactus = async (req, res) => {
    const { name, email, phoneNo, findUs, question } = req.body;
    try {
        const userContacted = await Contactus.findOne({ email, phoneNo })
        if (userContacted) {
            await Contactus.findOneAndUpdate({ email },
                {
                    $addToSet: {
                        QuestionAsked: {
                            question
                        }
                    }
                }
            )
        } else if (!userContacted) {
            const newContact = new Contactus({
                name,
                email,
                phoneNo,
                findUs,
                QuestionAsked: [
                    {
                        question
                    }
                ],
            })
            await newContact.save()
        }
        const emailResult = await contactusReceivingEmail(email);

        if (emailResult?.error) {
            return res.status(500).json({ message: "Failed to send confirmation email" });
        }
        return res.status(200).json({ message: "Email sent successfully" })
    } catch (error) {
        console.error("Server error in contactus handler:", error.message);
        return res.status(500).json({ message: error.message });
    }
}
module.exports = { contactus };