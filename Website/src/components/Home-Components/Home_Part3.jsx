import { WhoWeAre, Heading, Paragraph, Images } from "./HomePart3Component";
export default function Home_Part3() {
  return (
    <>
      <div className="flex justify-start flex-col py-10 px-4 xl:py-20 xl:px-28 xl:mb-20" id="about">
        <WhoWeAre />

        <div className="flex justify-center relative">
          <div className="pr-72">
            {/* <Heading /> */}
            {/* <Paragraph /> */}
          </div>
          {/* <Images /> */}
        </div>
      </div>
    </>
  );
}
