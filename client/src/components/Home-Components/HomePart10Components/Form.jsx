import { FormHeading,InputField,Options,Submit,ContactInfo} from "./subcomponents"
import phone from "/src/assets/Home_Assets/Phone.png"
import mail from "/src/assets/Home_Assets/Mail.png"
import { useState } from "react";
import {useEmailStore} from "/src/store/emailsStore.js";
const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [findUs,setFindUs] = useState("");
  const {contactus,isLoading,messageSent,error} = useEmailStore();
  const handleSubmit = async (e) => {
    e.preventDefault();

    if(phoneNo.length!==10 || phoneNo.length>10 || isNaN(phoneNo))
    {
      throw new Error("Phone number must be exactly 10");
    }
    
    try{
      await contactus(email,name,phoneNo,findUs);
      if(messageSent){
        setName("");
        setEmail("");
        setPhoneNo("");
        setFindUs("");
      }
    }catch(e){
      alert(e)
      if(error) alert(error)
    }
  };
  return (
    <>
     <div className="mr-20">
          <FormHeading/>
          {/* form data */}
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <InputField type="text" placeholder="Name" Required={true} value={name} setValue={setName}/>
            <InputField type="email" placeholder="Email" Required={false} value={email} setValue={setEmail}/>
            <InputField type="number" placeholder="Phone number" Required={true} value={phoneNo} setValue={setPhoneNo}/>
            <Options value={findUs} setValue={setFindUs}/>
            <Submit LoaderData = {isLoading}/>
          </form>
          {/* phone number and email */}
          <div className="flex gap-12 text-sm font mt-14">
            <ContactInfo image={phone} text="PHONE" context="8492394939"/>
            <ContactInfo image={mail} text="EMAIL" context="wempower.foundation2024@gmail.com"/>
          </div>
        </div> 
    </>
  )
}


export default Form
