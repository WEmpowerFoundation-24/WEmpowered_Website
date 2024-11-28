import Linkedin from "/src/assets/Home_Assets/Linkedin.png";
import Facebook from "/src/assets/Home_Assets/facebook.png";
import Twitter from "/src/assets/Home_Assets/Twitter.png";
import ArrowGo from "/src/assets/Home_Assets/Arrow_Go.png";
export default function Footer() {
  return (
    <>
    <div className="bg-[#0C101A] px-48 py-20 flex flex-col">
      <div className="flex justify-between text-white">
        <div className="flex flex-col justify-between">
          <p className="font-Gilroy-700 text-xl mb-6">WEmpower</p>
          <p className="font-Gilroy-600 text-xl my-4">+918492394939</p>
          <p className="font-Gilroy-400 text-base">support@wempower.co</p>
        </div>
        <div className="flex flex-col justify-between">
          <p className="mr-60 font-Gilroy-600 text-lg">Quick Links</p>
          <div className="flex mt-[-8px] justify-between opacity-65 font-Gilroy-400 text-base">
            <p>Home</p>
            <p className="pr-8">Our Team</p>
          </div>
          <div className="flex justify-between opacity-65 font-Gilroy-400 text-base">
            <p>About Us</p>
            <p>Our RoadMap</p>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="font-Gilroy-600 text-lg">Subscribe</p>
          <div className="flex mt-6">
            <input type="text" placeholder="Get Newsletters" className="w-48 h-12 rounded-l-lg placeholder:pl-4 placeholder:text-sm placeholder:font-Gilroy-400 placeholder:text-[#0A142F] focus:outline-none"/>
            <span className="w-12 h-12 rounded-r-lg bg-[#03C1A8] flex items-center justify-center"><img src={ArrowGo} alt="Arrow go" /></span>
          </div>
        </div>
      </div>
      <hr className="opacity-20 border-1 mb-8 mt-16" />
      <div className="flex text-white justify-between">
        <div className="flex">
          <img src={Linkedin} alt="linkedin" />
          <img src={Facebook} alt="facebook" className="mx-4" />
          <img src={Twitter} alt="twitter" />
        </div>
        <div className="font-Gilroy-400 text-base">
          © 2024 WEmpower. All rights reserved
        </div>
      </div>
    </div>
  </>
  )
}
