import Gender_Equality from "/src/assets/Home_Assets/HomePart2/Gender_Equality.jpg"
import Partnerships from "/src/assets/Home_Assets/HomePart2/Partnerships.jpg"
import Quality_Education from "/src/assets/Home_Assets/HomePart2/Quality_Education.jpg"
import Reduced_Inequalities from "/src/assets/Home_Assets/HomePart2/Reduced_Inequalities.jpg"
import SDGs from "./HomePart2Component/SDGs"
const Home_Part2_SGDs = () => {
  return (
    <div className="bg-[#FFEEFA] flex gap-10 py-14 px-10 justify-center flex-wrap">
      <SDGs image={Quality_Education}/>
      <SDGs image={Gender_Equality}/>
      <SDGs image={Reduced_Inequalities}/>
      <SDGs image={Partnerships}/>
    </div>
  )
}

export default Home_Part2_SGDs
