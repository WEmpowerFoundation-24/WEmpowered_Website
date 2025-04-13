import { useLocation, useNavigate } from "react-router-dom";
import { navlink } from "/src/utils/NavList";

export default function List() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (e, link) => {
    e.preventDefault();
  
    if (link.id === "newsletter") {
      navigate("/#/newsletter#newsletter");
      return;
    }
  
    const el = document.getElementById(link.id);
    if (location.pathname === "/") {
      if (el) {
        // Scroll and update the URL hash manually
        el.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", `#${link.id}`);
      }
    } else {
      navigate(`/#${link.id}`);
    }
  };

  return (
    <>
      {navlink.map((link) => (
        <li key={link.id}>
          <a
            href={`/#${link.id}`}
            onClick={(e) => handleClick(e, link)}
            className="hover:text-white cursor-pointer text-lg font-Gilroy-500 hover:font-bold"
          >
            {link.title}
          </a>
        </li>
      ))}
    </>
  );
}
