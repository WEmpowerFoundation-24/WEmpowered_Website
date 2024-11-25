import Navbar from "../components/Navbar";
import Vector1 from "../assets/Home_Assets/Vector-1.png";
import Vector2 from "../assets/Home_Assets/Vector-2.png";
import Vector3 from "../assets/Home_Assets/Vector.png";
import Arrow from "../assets/Home_Assets/Circle_Arrow.png";
import Star from "../assets/Home_Assets/Pink Star.png";
import Classroom1 from "../assets/Home_Assets/Classroom-1.png";
import Classroom2 from "../assets/Home_Assets/Classroom-2.png";
export default function Home() {
  return (
    <>
      {/* Home page-1 */}
      <div className="relative">
        {/* Home part-1 */}
        <div className="bg-Class-student w-screen h-screen">
          <div className="h-screen w-screen bg-black opacity-70 top-0"></div>
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
      {/* Home page-2 */}
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

      {/* Home page-3 */}
      <div className="flex py-20 px-28 justify-start flex-col mb-6 pb-24 pr-24">
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

      {/* Home Page-4 */}
      <div className="relative">
        <div className="bg-Group-Picnic w-screen h-96">
          <div className="h-96 w-screen bg-black opacity-50 top-0"></div>
        </div>
        <div className="absolute top-0">
         <div className="flex items-center px-32 py-28">
          <div className="border-white w-[460px] border-2 self-start mt-10"></div>
          <div className="flex flex-col text-white ml-8 pr-4 mt-1">
            <h1 className="font-Gilroy-700 text-6xl tracking-[0.04em] pt-4">Our Vision</h1>
            <p className="font-Gilroy-500 text-2xl pt-4 ">One day every child & mother will lead each other to be empowered</p>
          </div>
         </div>
        </div>
      </div>
    </>
  );
}
