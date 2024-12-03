import TextBox from "./HomePart2Component/TextBox.jsx"
export default function Home_Part2() {
  return (
    <>
    <div className="bg-[#791975]">
      <div className="flex flex-col gap-y-16 md:flex-row md:gap-x-10 justify-between items-center mx-auto px-10 py-24 sm:py-20 xl:px-24 xl:py-28">
        <TextBox heading={"10,000"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,eveniet nemo"}/>
        <TextBox heading={"12 Lakhs"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,eveniet nemo"}/>
        <TextBox heading={"4,300"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,eveniet nemo"}/>
      </div>
    </div>
  </>
  )
}
