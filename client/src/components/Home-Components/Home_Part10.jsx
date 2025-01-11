import {ContactUsText,Form,GoogleMap} from "./HomePart10Components/index"
const Home_Part10 = () => {
  return (
    <div className="bg-Contact_US px-28 pt-24" id="contact">
      <div className="flex bg-white px-14 pt-20 pb-12">
        <Form />
        <GoogleMap />
      </div>
      {/* contact us bottom text */}
       <ContactUsText/>
    </div>
  )
}

export default Home_Part10
