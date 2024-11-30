import Vector1 from "src/assets/Home_Assets/HomePart1/Vector-1.png";
import Vector2 from "src/assets/Home_Assets/HomePart1/Vector-2.png";
import Vector3 from "src/assets/Home_Assets/HomePart1/Vector.png";
export default function Heading() {
  return (
    <>
      <div className="heading mb-0 md:mb-2">Empowerment <span className="text-nowrap">Through Unity</span></div>
      <div className="flex flex-col justify-start">
        <div className="heading flex flex-col xxxs:flex-row">
          and&nbsp;
          <div className=" flex pr-4 xl:pr-8 ">
           Opportunity
            <div className="flex flex-col justify-start items-start pt-2 ml-2 xxxxs:ml-4 ss:pt-0">
              <img src={Vector3} alt="star" className="w-2 ss:w-3 md:w-4" />
              <img src={Vector1} alt="star" className="self-end ml-2 w-2 ss:w-3 ss:ml-4 md:w-4" />
              <img src={Vector2} alt="star" className="w-2 ss:w-3 md:w-4" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
