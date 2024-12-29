import { Background } from "./HomePart4Components";

export default function Home_Part4() {
  return (
    <>
        <div className="relative">
          <Background/>
          <div className="absolute top-0 flex">
            <div className="flex py-36 px-5 s:px-20 gap-5 lg-xl:px-32 lg-xl:py-[122px] 4xl:ml-52">
              <div className="hidden s:flex border-white s:w-[250px] lg-xl:w-[460px] border-2 self-start s:mt-4 lg-xl:mt-8"></div>
              <div className="flex flex-col text-white xl:pr-4">
                <h1 className="font-Gilroy-700 text-4xl md-lg:text-5xl lg-xl:text-6xl lg-xl:tracking-[0.04em] lg-xl:pt-4">
                  Our Vision
                </h1>
                <p className="font-Gilroy-500 text-xl lg-xl:text-2xl pt-4 ">
                  One day every child & mother will lead each other to be
                  empowered
                </p>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}
