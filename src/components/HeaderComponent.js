import { useContext, useState } from "react";
import {LOGO_URL} from "../utils/constants"
import { Link } from "react-router-dom";
import useOnlineStatus from "./useOnlineStatus";
import RestContext from "../utils/restContext";


const HeaderComponent = ()=>{
    let [loginState,setLoginState] =useState(false)
    let {allData,setNewFilterData} = useContext(RestContext);

    return (
    <header className="bg-white shadow-md sticky top-0 z-50">
    <div className="container mx-auto flex justify-between items-center p-4">
    <img className="h-12 w-12 object-contain" src={LOGO_URL} alt="Restaurant Logo" />

      {/* Navigation Links */}
      <nav className="space-x-6 hidden md:flex">
        <Link to="/" className="text-gray-700 hover:text-gray-900" onClick={()=>{
            setNewFilterData(allData)
            
        }}>Home</Link>
        <Link to="/about" className="text-gray-700 hover:text-gray-900">About</Link>
        <Link to="/contact" className="text-gray-700 hover:text-gray-900">Contact</Link>
        <Link to="/cart" className="text-gray-700 hover:text-gray-900">Cart</Link>
      </nav>

      {/* Login Button */}
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        onClick={()=>{
                setLoginState(!loginState)
            }} style={loginState?{backgroundColor: "green"}:{backgroundColor: "oklch(0.623 0.214 259.815)"}}
      >{loginState?"Logout":"Login"}</button>
    </div>
  </header> 
)
}

export default HeaderComponent;