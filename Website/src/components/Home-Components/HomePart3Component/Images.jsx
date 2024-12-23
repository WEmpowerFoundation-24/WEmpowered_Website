<<<<<<< HEAD
import Star from "/src/assets/Home_Assets/Pink Star.png";
import Classroom1 from "/src/assets/Home_Assets/Classroom-1.png";
import Classroom2 from "/src/assets/Home_Assets/Classroom-2.png";

export default function Images() {
  return (
    <div className="relative flex flex-col items-center justify-center lg:justify-start lg:items-start lg:block w-full min-h-[400px]">
      {/* Star Image */}
      <img
        src={Star}
        alt="Pink Star"
        className="w-32  lg:w-64 xl:w-80 lg:absolute lg:right-60 lg:top-20 hidden xl:block"
      />

      {/* Classroom2 Image */}
      <img
        src={Classroom2}
        alt="Classroom2"
        className="w-32  lg:w-64 xl:w-80 lg:absolute lg:right-16 lg:top-[-50px] hidden xl:block"
      />

      {/* Classroom1 Image */}
      <img
        src={Classroom1}
        alt="Classroom1"
        className="w-32  lg:w-64 xl:w-80 lg:absolute lg:right-56 lg:top-60 hidden xl:block"
      />
    </div>
=======
import img from "/src/assets/Home_Assets/img.png"
export default function Images() {
  return (
    <>
      <div className="hidden lg-xl:flex lg-xl:w-[1600px] xl:w-[2000px] mx-6">
            <img src={img} className="" />
      </div>
    </>
>>>>>>> 229bd76 (done changes)
  );
}


