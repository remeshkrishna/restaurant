import { useState } from "react";
import {LOGO_URL} from "../utils/constants"
import { Link } from "react-router-dom";

const HeaderComponent = ()=>{
    let [loginState,setLoginState] =useState(false)
    return (<div className="header">
        <div className="logo-container">
            <img className="logo" src={LOGO_URL}/>
        </div>
        <div className="nav-items">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link>Cart</Link></li>
                <button onClick={()=>{
                    setLoginState(!loginState)
                }} style={loginState?{backgroundColor: "green"}:{backgroundColor: "rgb(201, 198, 198)"}}>{loginState?"Logout":"Login"}</button>
            </ul>
        </div>
    </div>)
}

export default HeaderComponent;