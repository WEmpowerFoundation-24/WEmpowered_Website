export default function textBox({heading,text}) {
  return (
    <>
       <div className="flex flex-col text-white">
          <div className="mb-4 xl:mb-8 xs:ml-6">
            <p className="font-Gilroy-700 text-3xl md:text-4xl lg:text-5xl lg-xl:text-6xl">{heading}</p>
            <p className="text-sm font-Gilroy-400 md:text-sm lg:text-base pr-12">
              {text}
            </p>
          </div>
          <div className="border-2 bg-white opacity-20"></div>
        </div>
    </>
  )
}
