import { Link } from "react-router-dom"
import logo from "../assets/logo.png"
import {FaSearch} from "react-icons/fa"

export default function Navbar() {
  return (
    <nav className="flex justify-between py-4">
      
        <Link to={`/`} className="flex items-center lg:gap-6 md:gap-4 gap-2">
          <img src={logo} alt="logo" className="md:w-12 w-8 md:h-12 h-8"/>
          <h1 className=" text-lg font-bold hidden md:block">MovieBox</h1>
      </Link>
      
      <label htmlFor="search" className="relative flex items-center lg:gap-6 gap-4 xl:w-[500px] lg:w-[400px] md:w-[300px] w-[200px] h-9 md:text-base text-sm">
        <input
          name="search"
          placeholder="What do you want to watch?"
          type="text"
          className="bg-transparent border border-white pl-2.5 py-1.5 w-full rounded-md" />
        <FaSearch className="absolute right-[10px]"/>
      </label>
      
      <div className="flex items-center lg:gap-6 md:gap-4 gap-2">
        <h1 className="text-base font-bold md:block hidden">Sign in</h1>
          <p className="bg-[#BE123C] flex items-center justify-center w-9 h-9 p-2.5 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-6 h-6">
  <path d="M3.59998 8.40001C3.59998 7.73727 4.13723 7.20001 4.79998 7.20001H19.2C19.8627 7.20001 20.4 7.73727 20.4 8.40001C20.4 9.06275 19.8627 9.60001 19.2 9.60001H4.79998C4.13723 9.60001 3.59998 9.06275 3.59998 8.40001Z" fill="white"/>
  <path d="M3.59998 15.6C3.59998 14.9373 4.13723 14.4 4.79998 14.4H19.2C19.8627 14.4 20.4 14.9373 20.4 15.6C20.4 16.2628 19.8627 16.8 19.2 16.8H4.79998C4.13723 16.8 3.59998 16.2628 3.59998 15.6Z" fill="white"/>
</svg></p>
        </div>
      </nav>
    
  )
}
