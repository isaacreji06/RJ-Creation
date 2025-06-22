import { Link } from "react-router-dom"
import logo from "../assets/Logo.png"

function Header() {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:gap-10 gap-4 pt-4 sm:pt-6 pl-4 sm:pl-6 pb-4 sm:pb-5 bg-blue-900 font-serif">
      <Link to="/" className="shrink-0">
        <img 
          src={logo} 
          alt="RJ Creation Logo"
          className="h-12 sm:h-16 md:h-20 lg:h-24 w-auto"
        />
      </Link>
      
      <h1 className="text-center sm:text-left">
        <span className="font-bankgothic font-medium text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          RJ C
        </span>
        <span className="font-bankgothic font-medium text-white text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
          REATION
        </span>
      </h1>
    </div>
  )
}

export default Header
