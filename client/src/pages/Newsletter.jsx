import { Home_Part1 } from "../components/Home-Components";
import NewsletterPage from "../components/Newsletter-Components/Newsletter-Page";

export default function Newsletters (){
    return (
        <div>
            <div className="relative">
                <Home_Part1 />
            </div>
            <NewsletterPage />
        </div>
        
    )
}