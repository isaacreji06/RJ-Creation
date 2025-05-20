import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
function Navbar() {
  const navigate=useNavigate()
  return (
    <div className="flex justify-center items-center gap-12 py-1 bg-red-500">
        <div onClick={()=>{
          navigate("/")
        }}
          className="px-4 py-2 flex rounded-md hover:bg-white text-white font-orbitron hover:text-red-500 transition-colors duration-300 cursor-pointer"
        >
          <FaHome size={24} />
        <h1 className="text-xl font-bold pl-2">Home</h1>
        </div>
        <div
          className="px-4 py-2 rounded-md hover:bg-white text-white font-orbitron hover:text-red-500 transition-colors duration-300 cursor-pointer"
        >
        <h1 className="text-xl font-bold">Services</h1>
        </div>
        <div
          className="px-4 py-2 rounded-md hover:bg-white text-white font-orbitron hover:text-red-500 transition-colors duration-300 cursor-pointer"
        >
        <h1 className="text-xl font-bold">Infrastructure</h1>
        </div>
        <div
          className="px-4 py-2 rounded-md hover:bg-white text-white font-orbitron hover:text-red-500 transition-colors duration-300 cursor-pointer"
        >
        <h1 className="text-xl font-bold">Products</h1>
        </div>
        <div
          className="px-4 py-2 rounded-md hover:bg-white text-white font-orbitron hover:text-red-500 transition-colors duration-300 cursor-pointer"
        >
        <h1 className="text-xl font-bold">Contact Us</h1>
        </div>
        
        <div onClick={()=>{
          navigate("/about")
        }}
          className="px-4 py-2 rounded-md hover:bg-white text-white font-orbitron hover:text-red-500 transition-colors duration-300 cursor-pointer"
        >
         <h1 className="text-xl font-bold">About Us</h1>
        </div>
    </div>
  );
}

export default Navbar;
