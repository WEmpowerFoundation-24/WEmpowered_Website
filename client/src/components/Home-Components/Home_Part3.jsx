import { WhoWeAre, Heading, Paragraph, Images } from "./HomePart3Component";

export default function Home_Part3() {
  return (
    <>
      <div
        className="flex flex-col py-6 px-4 xxxs:py-6 xxxs:px-6 md:py-12 md:px-16 lg:pt-20 lg:px-15 mb-6 xl:mb-20 3xl:mb-36"
        id="about"
      >
        <WhoWeAre />
        <>
          <div className="flex flex-col lg:flex-row justify-between items-start relative">
            <div className="flex-3/4 xl:w-3/4 pr-4 xl:pr-8">
              <Heading />
              <Paragraph />
            </div>
            {/* Right Section (Image) */}
            <div className="w-2/5 3xl:w-[600px] 4xl:w-[400px]">
              <Images />
            </div>
          </div>
        </>
      </div>
    </>
  );
}
