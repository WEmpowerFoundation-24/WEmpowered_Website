import {ContactUsText,Form,GoogleMap} from "./HomePart10Components/index"
const Home_Part10 = () => {
  return (
    <div className="bg-Contact_US px-6 sm:px-12 md:px-20 lg:px-28 pt-12 sm:pt-16 lg:pt-24" id="contact">
      <div className="flex flex-col lg:flex-row bg-white p-6 sm:px-10 sm:py-8 lg:px-14 lg:py-20 gap-6">
        <Form />
        <GoogleMap />
      </div>
      {/* contact us bottom text */}
      <ContactUsText />
    </div>
  );
};

export default Home_Part10;


