import { Route, Routes } from "react-router-dom"
import Header from "./Components/Header"
import LandingPage from "./Components/LandingPage"
import Navbar from "./Components/Navbar"
import AboutUs from "./Components/AboutUs"

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </div>
  )
}

export default App