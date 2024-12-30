import { ImageGallery,Heading } from "./HomePart8Components";
export default function Home_Part8() {
  return (
    <>
      <div className="flex  pt-6 ss:px-16 sm:px-24 xl:px-28 justify-start flex-col mt-10" id="team">
        <Heading/>
      </div>
      <div className="pl-20 ml-3 ">
        <ImageGallery />
        </div>
    </>
  )
}