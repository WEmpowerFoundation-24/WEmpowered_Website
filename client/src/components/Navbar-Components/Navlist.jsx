import { useState } from "react";
import ContactUs from "./ContactUs_Button";
import List from "./List.jsx";
import humburger from "/src/assets/NavBar/Humburger_icon.png"
import Cross from "/src/assets/NavBar/Cross_icon.png"
export default function Navlist() {
  let[toggle,setToggle]= useState(false);
  return (
    <>
      <div className="flex md:gap-x-6 lg:gap-x-11 max-sm:py-6">
        <div className="hidden justify-between items-center md:flex md:gap-x-6 lg:gap-x-11 list-none">
          <List />
        </div>
        <ContactUs style={"hidden bg-white text-black rounded-lg font-Gilroy-500 sm:flex sm:py-3 sm:px-6 sm:text-base"}/>
        <div className={`md:hidden flex justify-center items-center ${toggle?"ml-4 sm:ml-44":"ml-8"}`}>
          <img src={toggle?Cross:humburger} alt={toggle?"Humburger":"Cross"} className={`${toggle?"w-4 right-6":"w-12"} cursor-pointer z-10 absolute`} onClick={()=>{setToggle(!toggle)}}/>
          <div className={`absolute top-6 right-0 bg-black list-none flex-col justify-evenly pt-16 px-8 pb-6 text-nowrap rounded-lg gap-y-3 ${toggle?"flex":"hidden"}`}>
            <List/>
            <ContactUs style={"flex bg-white text-black rounded-lg font-Gilroy-500 py-2 pl-4 w-28 text-sm sm:hidden"}/>
          </div>
        </div>
      </div>
    </>
  );
}
