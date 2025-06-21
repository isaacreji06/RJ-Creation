import { useNavigate } from "react-router-dom";
import { FaHome, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

function Navbar() {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { path: "/", label: "Home", icon: <FaHome size={20} /> },
    { path: "/about", label: "About Us" },
    { path: "/services", label: "Services" },
    { path: "/infrastructure", label: "Infrastructure" },
    { path: "/products", label: "Products" },
    {path:"/career" ,label:"Career"},
    { path: "/contact", label: "Contact Us" },
  ];

  return (
    <nav className="bg-red-500 relative">
      <div className="hidden lg:flex justify-center items-center gap-4 xl:gap-8 py-1 px-4">
        {navItems.map((item) => (
          <div
            key={item.path}
            onClick={() => handleNavigation(item.path)}
            className="px-3 xl:px-4 py-2 flex items-center rounded-md hover:bg-white text-white font-orbitron hover:text-red-500 transition-colors duration-300 cursor-pointer"
          >
            {item.icon && <span className="mr-2">{item.icon}</span>}
            <h1 className="text-lg xl:text-xl font-bold">{item.label}</h1>
          </div>
        ))}
      </div>
      <div className="hidden md:flex lg:hidden justify-center items-center gap-2 py-1 px-2">
        {navItems.map((item) => (
          <div
            key={item.path}
            onClick={() => handleNavigation(item.path)}
            className="px-2 py-2 flex items-center rounded-md hover:bg-white text-white font-orbitron hover:text-red-500 transition-colors duration-300 cursor-pointer"
          >
            {item.icon && <span className="mr-1">{item.icon}</span>}
            <h1 className="text-sm font-bold">{item.label}</h1>
          </div>
        ))}
      </div>
      <div className="md:hidden flex justify-between items-center py-3 px-4">
        <div
          onClick={() => handleNavigation("/")}
          className="flex items-center text-white font-orbitron cursor-pointer"
        >
          <FaHome size={20} />
          <h1 className="text-lg font-bold ml-2">RJ Creation</h1>
        </div>
        
        <button
          onClick={toggleMobileMenu}
          className="text-white hover:text-gray-200 transition-colors duration-300 p-1"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-red-500 border-t border-red-400 shadow-lg z-50">
          <div className="flex flex-col">
            {navItems.slice(1).map((item) => (
              <div
                key={item.path}
                onClick={() => handleNavigation(item.path)}
                className="px-4 py-3 hover:bg-red-600 text-white font-orbitron hover:text-gray-100 transition-colors duration-300 cursor-pointer border-b border-red-400 last:border-b-0"
              >
                <h1 className="text-lg font-bold">{item.label}</h1>
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;