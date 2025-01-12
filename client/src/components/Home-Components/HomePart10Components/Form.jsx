import { FormHeading,InputField,Options,Submit,ContactInfo} from "./subcomponents"
import phone from "/src/assets/Home_Assets/Phone.png"
import mail from "/src/assets/Home_Assets/Mail.png"
import { useState } from "react";
import {useEmailStore} from "/src/store/emailsStore.js";
const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [findUs, setFindUs] = useState("");
  const { contactus, isLoading, messageSent, error } = useEmailStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (phoneNo.length !== 10 || isNaN(phoneNo)) {
      alert("Phone number must be exactly 10 digits");
      return;
    }
    try {
      await contactus(email, name, phoneNo, findUs);
      if (messageSent) {
        alert("Message sent successfully");
        setName("");
        setEmail("");
        setPhoneNo("");
        setFindUs("");
      }
    } catch (e) {
      alert(error || e.message);
    }
  };

  return (
    <div className="w-full lg:w-1/2">
      <FormHeading />
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <InputField type="text" placeholder="Name" Required={true} value={name} setValue={setName} />
        <InputField type="email" placeholder="Email" value={email} setValue={setEmail} />
        <InputField type="number" placeholder="Phone number" Required={true} value={phoneNo} setValue={setPhoneNo} />
        <Options value={findUs} setValue={setFindUs} />
        <Submit LoaderData={isLoading} />
      </form>
      <div className="flex flex-wrap gap-6 mt-8">
        <ContactInfo image={phone} text="PHONE" context="8492394939" />
        <ContactInfo image={mail} text="EMAIL" context="wempower.foundation2024@gmail.com" />
      </div>
    </div>
  );
};
export default Form;
