import Heading from "./Heading"
import Newsletter_Data from "./Newsletter-Data"

const NewsletterPage = () => {
  return (
    <>
    <div id="newsletter" className="bg-orange-100">
      <Heading />
      <div className="mb-15">
      <Newsletter_Data />
      </div>
    </div>
    </>

  )
}

export default NewsletterPage