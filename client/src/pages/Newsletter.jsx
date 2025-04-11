import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Home_Part1 } from "../components/Home-Components";
import NewsletterPage from "../components/Newsletter-Components/Newsletter-Page";

export default function Newsletters() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#newsletter") {
      const el = document.getElementById("newsletter");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div>
      <div className="relative">
        <Home_Part1 />
      </div>
      <NewsletterPage />
    </div>
  );
}
