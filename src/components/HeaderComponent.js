import { useState } from "react";
import {LOGO_URL} from "../utils/constants"

const HeaderComponent = ()=>{
    let [loginState,setLoginState] =useState(false)
    return (<div className="header">
        <div className="logo-container">
            <img className="logo" src={LOGO_URL}/>
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
                <button onClick={()=>{
                    setLoginState(!loginState)
                }} style={loginState?{backgroundColor: "green"}:{backgroundColor: "rgb(201, 198, 198)"}}>{loginState?"Logout":"Login"}</button>
            </ul>
        </div>
    </div>)
}

export default HeaderComponent;