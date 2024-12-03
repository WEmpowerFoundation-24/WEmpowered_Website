import Star from "/src/assets/Home_Assets/Pink Star.png";
import Classroom1 from "/src/assets/Home_Assets/Classroom-1.png";
import Classroom2 from "/src/assets/Home_Assets/Classroom-2.png";
export default function Home_Part3() {
  return (
    <>
        <div className="flex py-20 px-28 justify-start flex-col mb-20" id="about">
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
  )
}
