import React from "react";
import UserClass from "./UserClass";

// const About =()=>{
//     return (
//         <div>
//             <h1>This is my About</h1>
//             <UserClass name="Remesh" place="India" age="20"/>
//         </div>
        
//     )
// }

class About extends React.Component{
    constructor(){
        super()
        console.log("Parent Constructor called")
    }
    render(){
        console.log("parent render called");
        return(
            <div>
                <UserClass name="Remesh" place="India" age="20"/>
                <UserClass name="Ajay" place="India" age="22"/>
            </div>
        )
        
    }
}
export default About;