import { Home_Part10, Home_Part7, Home_Part9 } from "../components/Home-Components";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  Home_Part1,
  Home_Part2_SGDs,
  Home_Part3,
  Home_Part4,
  Home_Part5,
} from "/src/components/Home-Components";

export default function Home() {
  const location = useLocation();
  useEffect(() => {
    if (!location.hash) return;

    const id = location.hash.replace("#", "");

    // Scroll immediately or after slight delay if element not found yet
    const scrollToSection = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else {
        // Retry in case DOM isn't ready
        setTimeout(() => {
          const retryEl = document.getElementById(id);
          if (retryEl) {
            retryEl.scrollIntoView({ behavior: "smooth" });
          }
        }, 300);
      }
    };

    scrollToSection();
  }, [location]);

  return (
    <div id="home">
      {/* Home page-1 */}
      <div className="relative">
        <Home_Part1 />
      </div>
      {/* Home page-2 */}
      <Home_Part2_SGDs/>
      {/* Home page-3 */}
      <Home_Part3 />
      {/* Home Page-4 */}
      <Home_Part4 />
      {/* Home Page-5 */}
      <Home_Part5 />
      {/* Home Page-6 */}
      {/* <Home_Part6 /> */}
      {/* Home Page-7 */}
      <Home_Part7/>
      {/* Home Page-8 */}
      {/* <Home_Part8/> */}
      {/* Home Page-9 */}
      <Home_Part9/>
      {/* Home Page-10 */}
      <Home_Part10/>
    </div>
  );
}
