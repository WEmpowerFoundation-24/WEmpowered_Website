/* eslint-disable react/prop-types */
const ContactInfo = ({ image, text, context }) => {
  return (
    <div className="flex gap-2 sm:gap-4 items-center">
      <img src={image} alt={text} className="h-6 sm:h-7" />
      <div>
        <p className="text-sm sm:text-base">{text}</p>
        <div className="text-sm sm:text-base text-[#FF695D] break-all sm:text-nowrap">{context}</div>
      </div>
    </div>
  );
};
export default ContactInfo;

