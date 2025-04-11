import Roadmap from "/src/assets/Home_Assets/Roadmap.png";

export default function Images() {
  return (
    <div className="relative flex justify-center items-center w-full h-full px-1 sm:mx-0 my-7">
      <img
        src={Roadmap}
        alt="roadmap image"
        className=" max-w-[95%] sm:max-w-[80%] md:max-w-[90%] lg:max-w-[90%] xl:max-w-[90%]"
      />
    </div>
  );
}
