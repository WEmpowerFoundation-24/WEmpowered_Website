import Arrow from "/src/assets/Home_Assets/HomePart1/Circle_Arrow.png";

export default function DownArrow() {
  return (
    <>
      <div className="self-center mt-[80%] xxxs:mt-[75%] xs:mt-[65%] ss:mt-[50%] s:mt-[45%] sm:mt-[35%] md-lg:mt-[30%] lg-xl:mt-[25%] mx-auto s:ml-[50%] sm:ml-[50%] md:ml-[55%] md-lg:ml-[58%] xl:ml-[38%] xl:mt-[15.5%] 2xl:ml-[40%]">
        <a href="">
          <img src={Arrow} alt="down arrow" className="h-14 w-14 mx-auto xl:ml-60" />
        </a>
      </div>
    </>
  );
}
