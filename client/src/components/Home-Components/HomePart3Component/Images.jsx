import classroom_img from "/src/assets/Home_Assets/classroom_star.png";

export default function Images() {
  return (
    <div className="relative hidden xl:flex xl:justify-start xl:items-start w-full">
      {/* Star Image */}
      <img
        src={classroom_img}
        alt="classroom_img"
        className="w-full hidden xl:w-120  xl:w-160 xl:absolute xl:right-70 xl:block"
      />
    </div>
  );
}



