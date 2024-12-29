import Book_Open from "/src/assets/Home_Assets/Book_Open.png";
import Mission_Star from "/src/assets/Home_Assets/Mission_Star.png";
import Navigation from "/src/assets/Home_Assets/Navigation.png";
import {MissionCard,Heading} from "./HomePart5Components/index"
export default function Home_Part5() {
  return (
    <>
      <div className="flex flex-col py-28 bg-[#FFEEFA] text-white px-5 s:px-20 items-center">
        <div className="flex mb-12 3xl:w-[1500px]">
          <Heading/>
          <div className="hidden xl:flex border-2 border-[#8B4A88] h-0 xl:px-52 mt-8 w-[412px]"></div>
        </div>
        <div className="flex justify-center flex-row flex-wrap gap-10 ">
          <MissionCard mission_icon={Book_Open}/>
          <MissionCard mission_icon={Navigation}/>
          <MissionCard mission_icon={Mission_Star}/>
        </div>
      </div>
    </>
  );
}
