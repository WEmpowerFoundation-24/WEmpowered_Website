<<<<<<< HEAD
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
=======
import { WhoWeAre , Heading,Paragraph,Images} from "./HomePart3Component";
export default function Home_Part3() {
  return (
    <>
      <div className="flex justify-start flex-col lg-xl:py-20 xl:py-28  lg-xl:px-20 xl:px-28" id="about">
        <WhoWeAre />
        <div className="flex">
          <div className="flex flex-col">
            <Heading/>
            <Paragraph/>
          </div>
          <Images/>
>>>>>>> 229bd76 (done changes)
        </div>
      </div>
    </>
  );
}
