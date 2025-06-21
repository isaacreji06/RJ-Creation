import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import LandingPage from "./Components/LandingPage";
import Navbar from "./Components/Navbar";
import AboutUs from "./Components/AboutUs";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./Components/Footer";
import ServicesPage from "./Components/ServicesPage";
import Infrastructure from "./Components/Infrastructure";
import ProductsPage from "./Components/ProductsPage";
import ContactUs from "./Components/ContactUsPage";
import Career from "./Components/Career";
import AdminCareerPanel from "./Components/AdminCareerPanel";
import SigninPage from "./Components/SigninPage";
import ProtectedRoute from "./Components/ProtectedRoute";
import RedirectIfAuthenticated from "./RedirectIfAuthenticated";
import { AuthProvider } from "./AuthContext";

function App() {
  return (
    <AuthProvider>
      <div>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/infrastructure" element={<Infrastructure />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/career" element={<Career />} />
          <Route
            path="/login"
            element={
              <RedirectIfAuthenticated>
                <SigninPage />
              </RedirectIfAuthenticated>
            }
          />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminCareerPanel />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
