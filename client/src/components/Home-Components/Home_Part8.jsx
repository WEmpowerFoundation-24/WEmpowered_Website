import { ImageGallery,Heading } from "./HomePart8Components";
export default function Home_Part8() {
  return (
    <div className="px-4">
      <div className="flex pt-6 ss:px-16 sm:px-24 xl:px-28 justify-start flex-col mt-10" id="team">
        <Heading/>
      </div>
      <div className="ss:pl-10 sm:pl-14 ">
        <ImageGallery />
        </div>
    </div>
  )
}