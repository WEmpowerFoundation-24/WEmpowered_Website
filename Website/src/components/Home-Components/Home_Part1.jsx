import {
  DownArrow,
  Text,
} from "/src/components/Home-Components/HomePart1Component/index.js";
export default function Home_Part1() {
  return (
    <>
      {/* Home part-1 */}
      <div className="bg-Class-student w-auto h-screen bg-cover bg-no-repeat">
        <div className="h-screen w-auto bg-black opacity-70 top-0 bg-auto bg-no-repeat"></div>
      </div>
      <div className="absolute top-0">
        <div className="flex flex-col justify-center items-center">
          <div className="my-40 forheight"></div>
          <Text />
          <DownArrow />
        </div>
      </div>
    </>
  );
}
