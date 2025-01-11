/* eslint-disable react/prop-types */
import { useRef } from "react";
export default function ContactUs_Button({style}) {
  const link = useRef();
  const handleClick = ()=>{
    link.current.click();
  }
  return (
    <>
    <a href="#contact" className="hidden" ref={link}></a>
    <button className={style} onClick={handleClick}>
      Contact Us
    </button>
    </>
  );
}
