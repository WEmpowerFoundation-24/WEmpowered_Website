import Vector1 from "/src/assets/Home_Assets/Vector-1.png";
import Vector2 from "/src/assets/Home_Assets/Vector-2.png";
import Vector3 from "/src/assets/Home_Assets/Vector.png";
import Arrow from "/src/assets/Home_Assets/Circle_Arrow.png";
export default function Home_Part1() {
  return (
    <>
      {/* Home part-1 */}
      <div className="bg-Class-student w-screen h-screen bg-auto bg-no-repeat">
        <div className="h-screen w-screen bg-black opacity-70 top-0 bg-auto bg-no-repeat"></div>
      </div>
      <div className="flex flex-col absolute top-40 justify-center items-center">
        <div className="flex px-32 justify-between items-center p-36 ">
          <div className="h-[268px] w-[2px] bg-white border-2"></div>
          <div className="text-white pl-10 ">
            <div className="text-7xl font-Gilroy-700 mb-2">
              Empowerment Through Unity
            </div>
            <div className="flex justify-start items-center">
              <div className="text-7xl font-Gilroy-700 pr-8">
                and Opportunity
              </div>
              <div className="flex-col justify-start items-start">
                <img src={Vector3} alt="star" />
                <img src={Vector1} alt="star" className="self-end ml-6" />
                <img src={Vector2} alt="star" />
              </div>
            </div>
            <div className="text-xl font-Gilroy-400 mr-72 mt-1">
              Breaking Barriers for Women and Children to Build a
              <div>Future of Equality and Resilience</div>
            </div>
          </div>
        </div>
        <div className="self-center mt-12">
          <a href="">
            <img src={Arrow} alt="down arrow" className="h-14 w-14 ml-60" />
          </a>
        </div>
      </div>
    </>
  );
}
