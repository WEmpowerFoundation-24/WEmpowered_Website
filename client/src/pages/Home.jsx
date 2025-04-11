import { Home_Part10, Home_Part7, Home_Part8, Home_Part9 } from "../components/Home-Components";
import {
  Home_Part1,
  Home_Part2,
  Home_Part2_SGDs,
  Home_Part3,
  Home_Part4,
  Home_Part5,
  Home_Part6,
} from "/src/components/Home-Components";

export default function Home() {
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
