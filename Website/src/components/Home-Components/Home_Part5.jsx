import Book_Open from "/src/assets/Home_Assets/Book_Open.png";
import Mission_Star from "/src/assets/Home_Assets/Mission_Star.png";
import Navigation from "/src/assets/Home_Assets/Navigation.png";
export default function Home_Part5() {
  return (
    <>
      <div className="flex flex-col items-center py-32 bg-[#791975] text-white">
        <div className="flex mb-12">
          <div className="flex flex-col items-end mr-6">
            <h1 className="font-Gilroy-700 text-6xl mb-4">Our Mission</h1>
            <p className="font-Gilroy-500 text-2xl leading-[39px] text-right">
              To develop and implement a comprehensive curriculum that equips
              mothers
              <span className="block">
                with the digital, financial, numerical, literacy, and
                social-emotional skills
              </span>
              necessary for financial self-sufficiency.
            </p>
          </div>
          <div className="border-2 w-[412px] h-0 px-52 mt-8"></div>
        </div>
        <div className="flex px-28">
          <div className="bg-[#6D1769] flex flex-col py-14 basis-2/3 px-1 rounded-xl">
            <img src={Book_Open} alt="Open book" className="w-12 ml-10 mb-6" />
            <p className="text-justify text-xl px-10">
              To develop and implement a comprehensive curriculum that equips
              mothers with the digital, financial, and numerical literacy, and
              social-emotional skills necessary for financial self-sufficiency.
            </p>
          </div>

          <div className="bg-[#6D1769] flex flex-col py-14 mx-6 basis-2/3 px-1 rounded-xl">
            <img src={Navigation} alt="Open book" className="w-12 ml-10 mb-6" />
            <p className="text-justify text-xl px-10">
              To foster leadership skills and gender equality in students
              enabling them to actively participate in society and advocate for
              positive change.
            </p>
          </div>

          <div className="bg-[#6D1769] flex flex-col py-14 basis-2/3 px-1 rounded-xl">
            <img
              src={Mission_Star}
              alt="Open book"
              className="w-12 ml-10 mb-6"
            />
            <p className="text-justify text-xl px-10">
              To deepen the mother-child relationship, empowering mothers’
              active involvement in their child’s education as well as children
              learn to support and respect their mother’s resilience.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
