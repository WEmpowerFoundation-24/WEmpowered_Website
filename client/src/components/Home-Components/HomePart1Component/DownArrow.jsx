import Arrow from "/src/assets/Home_Assets/HomePart1/Circle_Arrow.png";

export default function DownArrow() {
  return (
    <>
      <div className="self-center md:ml-[22%] md-lg:ml-[20%] lg:ml-[28%] lg-xl:ml-[30%] xl:ml-[1%] 2xl:mx-[25%] 3xl:mx-[70%] 4xl:ml-[80%]">
        <a href="#about">
          <img src={Arrow} alt="down arrow" className="h-14 w-14 mx-auto xl:ml-60" />
        </a>
      </div>
    </>
  );
}
