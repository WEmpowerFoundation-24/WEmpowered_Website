import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';
export default function App() {
  return (
    <>
    <Router>
      {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      {/* <Footer/> */}
    </Router>
    </>
  )
}
