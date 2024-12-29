
import { TeamCard,Heading } from "./HomePart6Components";
export default function Home_Part6() {
  return (
    <>
        <div className="flex py-20 px-6 ss:px-16 sm:px-24 xl:px-28 justify-start flex-col mb-10" id="team">
          <Heading/>
          <div className="mt-12">
            <div className="flex flex-wrap justify-center gap-10">
              <TeamCard/>
              <TeamCard/>
              <TeamCard/>
            </div>
          </div>
        </div>
      </>
  )
}
