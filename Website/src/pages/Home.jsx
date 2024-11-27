import Navbar from "../components/Navbar";
import Vector1 from "../assets/Home_Assets/Vector-1.png";
import Vector2 from "../assets/Home_Assets/Vector-2.png";
import Vector3 from "../assets/Home_Assets/Vector.png";
import Arrow from "../assets/Home_Assets/Circle_Arrow.png";
import Star from "../assets/Home_Assets/Pink Star.png";
import Classroom1 from "../assets/Home_Assets/Classroom-1.png";
import Classroom2 from "../assets/Home_Assets/Classroom-2.png";
import Book_Open from "../assets/Home_Assets/Book_Open.png";
import Mission_Star from "../assets/Home_Assets/Mission_Star.png";
import Navigation from "../assets/Home_Assets/Navigation.png";
import Linkedin from "../assets/Home_Assets/Linkedin.png";
import Facebook from "../assets/Home_Assets/facebook.png";
import Twitter from "../assets/Home_Assets/Twitter.png";
import ArrowGo from "../assets/Home_Assets/Arrow_Go.png";

export default function Home() {
  return (
    <>
      {/* Home page-1 */}
      <>
        <div className="relative">
          {/* Home part-1 */}
          <div className="bg-Class-student w-screen h-[860px]">
            <div className="h-[860px] w-screen bg-black opacity-70 top-0"></div>
          </div>
          <div className="flex flex-col justify-between items-between absolute top-0">
            <Navbar />
            <div className="flex px-28 justify-between items-center p-36 ">
              <div className="h-[268px] w-[2px] bg-white border-2"></div>
              <div className="text-white px-8 ">
                <div className="text-6xl font-Gilroy-700 pr-40 mb-2 tracking-[0.04em]">
                  Empowerment Through Unity
                </div>
                <div className="flex justify-start items-center">
                  <div className="text-6xl font-Gilroy-700 pr-8 tracking-[0.04em]">
                    and Opportunity
                  </div>
                  <div className="flex-col justify-start items-start">
                    <img src={Vector3} alt="star" />
                    <img src={Vector1} alt="star" className="self-end ml-6" />
                    <img src={Vector2} alt="star" />
                  </div>
                </div>
                <div className="text-xl font-Gilroy-400 mr-80 pr-96 mt-1">
                  Breaking Barriers for Women and Children to Build a Future of
                  Equality and Resilience
                </div>
              </div>
            </div>
            <div className="mx-auto mt-24">
              <a href="">
                <img src={Arrow} alt="down arrow" className="h-14 w-14" />
              </a>
            </div>
          </div>
        </div>
      </>

      {/* Home page-2 */}
      <>
        <div className="bg-[#791975]">
          <div className="flex justify-between items-center mx-auto px-24 py-28">
            <div className="flex flex-col pr-20 text-white">
              <div className="mb-8 ml-10">
                <p className="font-Gilroy-700 text-6xl">10,000</p>
                <p className="text-base font-Gilroy-400 pr-12">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
                  eveniet nemo
                </p>
              </div>
              <div className="border-2 bg-white opacity-20"></div>
            </div>
            <div className="flex flex-col pr-20 text-white">
              <div className="mb-8 ml-10">
                <p className="font-Gilroy-700 text-6xl">12 Lakhs</p>
                <p className="text-base font-Gilroy-400 pr-12">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
                  eveniet nemo
                </p>
              </div>
              <div className="border-2 bg-white"></div>
            </div>
            <div className="flex flex-col text-white">
              <div className="mb-8 ml-10">
                <p className="font-Gilroy-700 text-6xl">4,300</p>
                <p className="text-base font-Gilroy-400 pr-12">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
                  eveniet nemo
                </p>
              </div>
              <div className="border-2 bg-white opacity-20"></div>
            </div>
          </div>
        </div>
      </>

      {/* Home page-3 */}
      <>
        <div className="flex py-20 px-28 justify-start flex-col mb-20">
          <div className="flex justify-start items-center mb-6">
            <div className="border-2 border-[#791975] w-[215px] h-0"></div>
            <div className="font-Gilroy-700 font-black text-xl tracking-[0.04em] pl-8 text-[#791975]">
              Who Are We?
            </div>
          </div>

          <div className="flex justify-center relative">
            <div className="pr-72">
              <div className="font-Gilroy-700 text-6xl tracking-[0.04em] mb-10 pr-16 text-wrap leading-[75px]">
                Empowering Mothers and Children for a{" "}
                <span className="text-[#791975]">
                  Resilient, Inclusive Future
                </span>
              </div>
              <div className="font-Gilroy-400 text-lg text-wrap pr-80">
                <p className="mb-10 pr-20">
                  WEmpower Foundation was created to combat misogyny and support
                  women facing challenges like domestic violence, low-wage jobs,
                  and limited autonomy in Masjid Moth. Many mothers struggle to
                  advocate for their children’s education due to long work hours
                  and limited resources, often leading to school withdrawals due
                  to poverty or gender bias.
                </p>
                <p className="pr-12">
                  Our programs provide mothers and children with resources,
                  leadership skills, and advocacy tools, strengthening family
                  bonds and promoting gender equality. Together, we envision a
                  future where both mothers and children have the resources and
                  opportunities to thrive.
                </p>
              </div>
            </div>

            <div>
              <img
                src={Star}
                alt="pink start"
                className=" w-80 absolute right-64 top-6"
              />
              <img
                src={Classroom2}
                alt="Classroom2"
                className="absolute w-80 right-16 top-[-50px]"
              />
              <img
                src={Classroom1}
                alt="Classroom1"
                className="absolute w-80 top-60 right-56"
              />
            </div>
          </div>
        </div>
      </>

      {/* Home Page-4 */}
      <>
        <div className="relative">
          <div className="bg-Group-Picnic w-screen h-[400px]">
            <div className="h-[400px] w-screen bg-black opacity-50 top-0"></div>
          </div>
          <div className="absolute top-0">
            <div className="flex items-center px-32 py-[122px]">
              <div className="border-white w-[460px] border-2 self-start mt-8"></div>
              <div className="flex flex-col text-white ml-8 pr-4">
                <h1 className="font-Gilroy-700 text-6xl tracking-[0.04em] pt-4">
                  Our Vision
                </h1>
                <p className="font-Gilroy-500 text-2xl pt-4 ">
                  One day every child & mother will lead each other to be
                  empowered
                </p>
              </div>
            </div>
          </div>
        </div>
      </>

      {/* Home Page-5 */}
      <>
        <div className="flex flex-col items-center py-32 bg-[#791975] text-white">
          <div className="flex mb-12">
            <div className="flex flex-col items-end mr-6">
              <h1 className="font-Gilroy-700 text-6xl mb-4">Our Mission</h1>
              <p className="font-Gilroy-500 text-2xl leading-[39px] text-right">
                To develop and implement a comprehensive curriculum that equips
                mothers
                <div>
                  with the digital, financial, numerical, literacy, and
                  social-emotional skills
                </div>{" "}
                necessary for financial self-sufficiency.
              </p>
            </div>
            <div className="border-2 w-[412px] h-0 px-52 mt-8"></div>
          </div>
          <div className="flex px-28">
            <div className="bg-[#6D1769] flex flex-col py-14 basis-2/3 px-1 rounded-xl">
              <img
                src={Book_Open}
                alt="Open book"
                className="w-12 ml-10 mb-6"
              />
              <p className="text-justify text-xl px-10">
                To develop and implement a comprehensive curriculum that equips
                mothers with the digital, financial, and numerical literacy, and
                social-emotional skills necessary for financial
                self-sufficiency.
              </p>
            </div>

            <div className="bg-[#6D1769] flex flex-col py-14 mx-6 basis-2/3 px-1 rounded-xl">
              <img
                src={Navigation}
                alt="Open book"
                className="w-12 ml-10 mb-6"
              />
              <p className="text-justify text-xl px-10">
                To foster leadership skills and gender equality in students
                enabling them to actively participate in society and advocate
                for positive change.
              </p>
            </div>

            <div className="bg-[#6D1769] flex flex-col py-14 basis-2/3 px-1 rounded-xl">
              <img
                src={Mission_Star}
                alt="Open book"
                className="w-12 ml-10 mb-6"
              />
              <p className="text-justify text-xl px-10">
                To deepen the mother-child relationship, empowering mothers’
                active involvement in their child’s education as well as
                children learn to support and respect their mother’s resilience.
              </p>
            </div>
          </div>
        </div>
      </>

      {/* Home Page-6 */}
      <>
        <div className="flex py-20 px-28 justify-start flex-col mb-10">
          <div className="flex justify-start items-center mb-6">
            <div className="border-2 border-[#03C1AB] w-[132px] h-0"></div>
            <div className="font-Gilroy-700 font-black text-xl tracking-[0.04em] pl-4 text-[#03C1AB]">
              Our Team
            </div>
          </div>
          <div className="text-6xl font-Gilroy-700 tracking-[0.04em] mb-4">
            Meet Our Team
          </div>
          <div className="mt-12">
            <div className="flex">
              <div className="bg-Working_site_img h-[530px] relative w-screen group">
                <div className="absolute bottom-10 left-7 text-white group-hover:hidden">
                  <div className="border-2 border-white w-[54px] mb-2"></div>
                  <h2 className="font-Gilroy-600 text-2xl">LOREM IPSUM</h2>
                  <p className="font-Gilroy-400 text-base">Co-Founder</p>
                </div>
                <div>
                  <div className="hidden h-[530px] bg-black opacity-70 group-hover:flex"></div>
                  <div className="hidden text-white absolute top-0 flex-col group-hover:flex px-8 py-14">
                    <h2 className="font-Gilroy-700 text-2xl">LOREM IPSUM</h2>
                    <h3 className="font-Gilroy-400 text-base mb-6">
                      Co-Founder
                    </h3>
                    <p className="font-Gilroy-400 text-base text-justify">
                      Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit,
                      Sed Do Eiusmod. Lorem Ipsum Dolor Sit Amet, Consectetur
                      Adipiscing Elit, Sed Do Eiusmod. Lorem Ipsum Dolor Sit
                      Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod. Lorem
                      Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do
                      Eiusmod. Lorem Ipsum Dolor Sit Amet, Consectetur
                      Adipiscing Elit, Sed Do Eiusmod. Lorem Ipsum Dolor Sit
                      Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod. Lorem
                      Ipsum Dolor Sit Amet, Consectetur
                    </p>
                    <div className="flex mt-6 self-center">
                      <img src={Linkedin} alt="Linkedin" />
                      <img src={Facebook} alt="facebook" className="mx-4" />
                      <img src={Twitter} alt="Twitter" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-Working_site_img h-[530px] relative w-screen group mx-10">
                <div className="absolute bottom-10 left-7 text-white group-hover:hidden">
                  <div className="border-2 border-white w-[54px] mb-2"></div>
                  <h2 className="font-Gilroy-600 text-2xl">LOREM IPSUM</h2>
                  <p className="font-Gilroy-400 text-base">Co-Founder</p>
                </div>
                <div>
                  <div className="hidden h-[530px] bg-black opacity-70 group-hover:flex"></div>
                  <div className="hidden text-white absolute top-0 flex-col group-hover:flex px-8 py-14">
                    <h2 className="font-Gilroy-700 text-2xl">LOREM IPSUM</h2>
                    <h3 className="font-Gilroy-400 text-base mb-6">
                      Co-Founder
                    </h3>
                    <p className="font-Gilroy-400 text-base text-justify">
                      Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit,
                      Sed Do Eiusmod. Lorem Ipsum Dolor Sit Amet, Consectetur
                      Adipiscing Elit, Sed Do Eiusmod. Lorem Ipsum Dolor Sit
                      Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod. Lorem
                      Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do
                      Eiusmod. Lorem Ipsum Dolor Sit Amet, Consectetur
                      Adipiscing Elit, Sed Do Eiusmod. Lorem Ipsum Dolor Sit
                      Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod. Lorem
                      Ipsum Dolor Sit Amet, Consectetur
                    </p>
                    <div className="flex mt-6 self-center">
                      <img src={Linkedin} alt="Linkedin" />
                      <img src={Facebook} alt="facebook" className="mx-4" />
                      <img src={Twitter} alt="Twitter" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-Working_site_img h-[530px] relative w-screen group">
                <div className="absolute bottom-10 left-7 text-white group-hover:hidden">
                  <div className="border-2 border-white w-[54px] mb-2"></div>
                  <h2 className="font-Gilroy-600 text-2xl">LOREM IPSUM</h2>
                  <p className="font-Gilroy-400 text-base">Co-Founder</p>
                </div>
                <div>
                  <div className="hidden h-[530px] bg-black opacity-70 group-hover:flex"></div>
                  <div className="hidden text-white absolute top-0 flex-col group-hover:flex px-8 py-14">
                    <h2 className="font-Gilroy-700 text-2xl">LOREM IPSUM</h2>
                    <h3 className="font-Gilroy-400 text-base mb-6">
                      Co-Founder
                    </h3>
                    <p className="font-Gilroy-400 text-base text-justify">
                      Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit,
                      Sed Do Eiusmod. Lorem Ipsum Dolor Sit Amet, Consectetur
                      Adipiscing Elit, Sed Do Eiusmod. Lorem Ipsum Dolor Sit
                      Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod. Lorem
                      Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do
                      Eiusmod. Lorem Ipsum Dolor Sit Amet, Consectetur
                      Adipiscing Elit, Sed Do Eiusmod. Lorem Ipsum Dolor Sit
                      Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod. Lorem
                      Ipsum Dolor Sit Amet, Consectetur
                    </p>
                    <div className="flex mt-6 self-center">
                      <img src={Linkedin} alt="Linkedin" />
                      <img src={Facebook} alt="facebook" className="mx-4" />
                      <img src={Twitter} alt="Twitter" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>

      {/* Footer */}
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
                <input type="text" placeholder="Get Newsletters" className="w-48 h-12 rounded-l-lg placeholder:pl-4 placeholder:text-sm placeholder:font-Gilroy-400 placeholder:text-[#0A142F]"/>
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
    </>
  );
}
