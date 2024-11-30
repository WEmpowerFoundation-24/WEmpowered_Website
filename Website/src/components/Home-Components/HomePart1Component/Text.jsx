import Heading from "./Heading";
import SubHeading from "./SubHeading";
export default function Text() {
  return (
    <>
      <div className="flex justify-between items-center px-4 pl-8 ss:px-10 s:px-6 s:mx-4 sm:px-16 md:px-4 md-lg:px-16 xl:px-28 2xl:px-36">
        <div className="w-[2px] bg-white border-2 h-[230px] xxxs:h-[200px] s:h-[220px] sm:h-[200px] xl:h-[268px]"></div>
        <div className="text-white pl-2 xxs:pl-4 xl:pl-10 ">
          <Heading/>
          <SubHeading />
        </div>
      </div>
    </>
  );
}
