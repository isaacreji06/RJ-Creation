import { Link } from "react-router-dom"
import logo from "../assets/logo.png"
function Header() {
  return (
    <div className="flex items-center gap-10 pt-6 pl-6 pb-5 bg-blue-900">
  <Link to="/">
  <img 
    src={logo} 
    alt="RJ Creation Logo"
    className="h-45 w-auto"
  />
  </Link>
  
  <h1 className="font-orbitron font-semibold text-[60px] text-white">
    RJ CREATION
  </h1>
</div>
  )
}

export default Header