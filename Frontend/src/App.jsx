import { Route, Routes } from "react-router-dom"
import Header from "./Components/Header"
import LandingPage from "./Components/LandingPage"
import Navbar from "./Components/Navbar"
import AboutUs from "./Components/AboutUs"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Footer from "./Components/Footer"
import ServicesPage from "./Components/ServicesPage"
import Infrastructure from "./Components/Infrastructure"
import ProductsPage from "./Components/ProductsPage"
import { Rotate3D } from "lucide-react"
import ContactUs from "./Components/ContactUsPage"

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="infrastructure" element={<Infrastructure />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App