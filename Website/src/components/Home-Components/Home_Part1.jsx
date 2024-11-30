
import {DownArrow,Text} from "/src/components/Home-Components/HomePart1_Component"
export default function Home_Part1() {
  return (
    <>
      {/* Home part-1 */}
      <div className="bg-Class-student w-auto h-screen bg-cover bg-no-repeat">
        <div className="h-screen w-auto bg-black opacity-70 top-0 bg-auto bg-no-repeat"></div>
      </div>
      <div className="flex flex-col absolute justify-between items-center top-[30%] sm:top-[35%]">
        <Text />
        <DownArrow/>
      </div>
    </>
  );
}
