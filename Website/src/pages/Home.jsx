import Navbar from "../components/Navbar";
import Vector1 from "../assets/Home_Assets/Vector-1.png";
import Vector2 from "../assets/Home_Assets/Vector-2.png";
import Vector3 from "../assets/Home_Assets/Vector.png";
import Arrow from "../assets/Home_Assets/Circle_Arrow.png";
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
            <div className="text-white font-Gilroy  px-8">
              <div className="text-7xl font-black pr-52 mb-2">
                Empowerment Through Unity
              </div>
              <div className="flex justify-start items-center">
                <div className="text-7xl font-black pr-8">and Opportunity</div>
                <div className="flex-col justify-start items-start">
                  <img src={Vector3} alt="star" />
                  <img src={Vector1} alt="star" className="self-end ml-6" />
                  <img src={Vector2} alt="star" />
                </div>
              </div>
              <div className="text-xl font-normal mr-80 pr-96 mt-4">
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
          <div className="flex flex-col pr-20 text-white font-Gilroy">
            <div className="mb-8 ml-10">
              <p className="font-bold text-6xl">10,000</p>
              <p className="text-base font-extralight pr-12">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
                eveniet nemo
              </p>
            </div>
            <div className="border-2 bg-white opacity-20"></div>
          </div>
          <div className="flex flex-col pr-20 text-white font-Gilroy">
            <div className="mb-8 ml-10">
              <p className="font-bold text-6xl">12 Lakhs</p>
              <p className="text-base font-extralight pr-12">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
                eveniet nemo
              </p>
            </div>
            <div className="border-2 bg-white"></div>
          </div>
          <div className="flex flex-col text-white font-Gilroy">
            <div className="mb-8 ml-10">
              <p className="font-bold text-6xl">4,300</p>
              <p className="text-base font-extralight pr-12">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
                eveniet nemo
              </p>
            </div>
            <div className="border-2 bg-white opacity-20"></div>
          </div>
        </div>
      </div>

    </>
  );
}
