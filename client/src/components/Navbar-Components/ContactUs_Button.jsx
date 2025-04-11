/* eslint-disable react/prop-types */
export default function ContactUs_Button({ style }) {
  const handleClick = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      // fallback if the section doesn't exist (e.g., on different route)
      window.location.href = "/#contact";
    }
  };

  return (
    <button className={style} onClick={handleClick}>
      Contact Us
    </button>
  );
}
