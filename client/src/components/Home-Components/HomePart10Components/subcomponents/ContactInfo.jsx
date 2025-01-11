/* eslint-disable react/prop-types */
const ContactInfo = ({image,text,context}) => {
  return (
    <>
      <div className="flex gap-4">
        <img src={image} alt="Phone" className="h-7" />
        <div>
          <p>{text}</p>
          <p className="text-[#FF695D]">{context}</p>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
