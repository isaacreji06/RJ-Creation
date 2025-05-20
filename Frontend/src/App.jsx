import { Route, Routes } from "react-router-dom"
import Header from "./Components/Header"
import LandingPage from "./Components/LandingPage"
import Navbar from "./Components/Navbar"
import AboutUs from "./Components/AboutUs"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Footer from "./Components/Footer"

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App