import RestaurantCard from "./RestaurantCard";
import restaurants from "../utils/mockData";
import { useState } from "react";

const BodyComponent = ()=>{
    let [resData,setResData] = useState(restaurants);
    return (
    <div className="body">
        <div className="filter-container">
            <button className="filter-btn" onClick={()=>{
                filteredResData = resData.filter((item)=>item.info.avgRating>4);
                setResData(filteredResData);
                }}>Top Rated Restaurants</button>
        </div>
        <div className="restaurant-card-container">
            {resData.map((rest)=> <RestaurantCard key={rest.info.id} props={rest.info}/> )}
        </div>
    </div>
);}

export default BodyComponent;