
import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import BodyComponent from "./components/BodyComponent";
// fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.01020&lng=76.97010&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
// .then((response)=>response.json())
// .then((data)=>{
//     console.log(data)
//     restaurants = data.data.cards.filter((item)=>item.card.card.id=="top_brands_for_you")[0].card.card.gridElements.infoWithStyle.restaurants
//     console.log(restaurants);
// })





const AppLayout = ()=>{
    return (
    <div className="applayout">
            <HeaderComponent/>
            <BodyComponent/>
        </div>
    );}
const app = ReactDOM.createRoot(document.getElementById("root"));
app.render(<AppLayout/>)
