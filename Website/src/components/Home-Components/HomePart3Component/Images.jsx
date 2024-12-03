import Star from "/src/assets/Home_Assets/Pink Star.png";
import Classroom1 from "/src/assets/Home_Assets/Classroom-1.png";
import Classroom2 from "/src/assets/Home_Assets/Classroom-2.png";
export default function Images() {
  return (
    <>
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
    </>
  );
}
