import { useState } from "react";
import {LOGO_URL} from "../utils/constants"
import { Link } from "react-router-dom";
import useOnlineStatus from "./useOnlineStatus";

const HeaderComponent = ()=>{
    let [loginState,setLoginState] =useState(false)
    const onlineStatus = useOnlineStatus();
    return (
    //<div className="bg-amber-100 flex justify-between shadow-2xl">
    //     <div className="w-28">
    //         <img className="" src={LOGO_URL}/>
    //     </div>
    //     <div className="items-center">
    //         <ul className="flex py-8 gap-6 text-2xl items-center">
    //             <li>Online Status: {onlineStatus?"🟢":"🔴"}</li>
    //             <li><Link to="/">Home</Link></li>
    //             <li><Link to="/about">About</Link></li>
    //             <li><Link to="/contact">Contact</Link></li>
    //             <li><Link>Cart</Link></li>
    //             <button className="w-25 rounded-l py-2 drop-shadow-xl" onClick={()=>{
    //                 setLoginState(!loginState)
    //             }} style={loginState?{backgroundColor: "green"}:{backgroundColor: "rgb(201, 198, 198)"}}>{loginState?"Logout":"Login"}</button>
    //         </ul>
    //     </div>
    // </div>
    <header className="bg-white shadow-md sticky top-0 z-50">
    <div className="container mx-auto flex justify-between items-center p-4">
    <img className="h-12 w-12 object-contain" src={LOGO_URL} alt="Restaurant Logo" />

      {/* Navigation Links */}
      <nav className="space-x-6 hidden md:flex">
        <Link to="/" className="text-gray-700 hover:text-gray-900">Home</Link>
        <Link to="/about" className="text-gray-700 hover:text-gray-900">About</Link>
        <Link to="/contact" className="text-gray-700 hover:text-gray-900">Contact</Link>
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