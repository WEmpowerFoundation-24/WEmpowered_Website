import Linkedin from "/src/assets/Home_Assets/Linkedin.png";
import Facebook from "/src/assets/Home_Assets/facebook.png";
import Twitter from "/src/assets/Home_Assets/Twitter.png";
const TeamCard = () => {
  return (
    <div className={`bg-Working_site_img h-[530px] relative w-screen group rounded bg-no-repeat bg-cover xs:w-96`}>
      <div className="absolute bottom-10 left-7 text-white group-hover:hidden">
        <div className="border-2 border-white w-[54px] mb-2"></div>
        <h2 className="font-Gilroy-600 text-2xl">LOREM IPSUM</h2>
        <p className="font-Gilroy-400 text-base">Co-Founder</p>
      </div>
      <div>
        <div className="hidden h-[530px] bg-black opacity-70 group-hover:flex"></div>
        <div className="hidden text-white absolute top-0 flex-col group-hover:flex px-8 py-10 xs:py-14">
          <h2 className="font-Gilroy-700 xxxxs:text-2xl">LOREM IPSUM</h2>
          <h3 className="font-Gilroy-400 text-base mb-3 2xl:mb-6">Co-Founder</h3>
          <p className="font-Gilroy-400 text-xs xxs:text-base text-justify">
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do
            Eiusmod. Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit,
            Sed Do Eiusmod. Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing
            Elit, Sed Do Eiusmod. Lorem Ipsum Dolor Sit Amet, Consectetur
            Adipiscing Elit, Sed Do Eiusmod. Lorem Ipsum Dolor Sit Amet,
            Consectetur Adipiscing Elit, Sed Do Eiusmod. Lorem Ipsum Dolor Sit
            Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod. Lorem Ipsum Dolor
            Sit Amet, Consectetur
          </p>
          <div className="flex justify-center mt-6">
            <img src={Linkedin} alt="Linkedin" />
            <img src={Facebook} alt="facebook" className="mx-4" />
            <img src={Twitter} alt="Twitter" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
