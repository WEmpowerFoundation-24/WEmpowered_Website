import { WhoWeAre, Heading, Paragraph, Images } from "./HomePart3Component";

export default function Home_Part3() {
  return (
    <>
      <div
        className="flex flex-col py-6 px-4 xxxs:py-8 xxxs:px-6 md:py-12 md:px-16 lg:py-20 lg:px-28 mb-8 lg:mb-20"
        id="about"
      >
        <WhoWeAre />
        <div className="flex flex-col lg:flex-row justify-center items-start relative">
          <div className="lg:pr-20">
            <Heading />
            <Paragraph />
          </div>
          <Images />
        </div>
      </div>
    </>
  );
}
