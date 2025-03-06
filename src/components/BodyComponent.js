import restaurants from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
//import restaurants from "../utils/mockData";
import { useState , useEffect} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const BodyComponent =  ()=>{
    let [resData,setResData] = useState([]);
    let [filteredResData,setFilteredResData] = useState([]);
    // let [searchData,setSearchData] = useState("");
    const fetchData = async ()=>{
        const resp = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.01020&lng=76.97010&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const respJson = await resp.json();
        //optional chaining if there is no data, instaed of error it will return undefined
        restaurants = respJson?.data?.cards?.filter((item)=>item?.card?.card?.id=="top_brands_for_you")[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        setResData(restaurants);
        setFilteredResData(restaurants);
    }
    useEffect(()=>{
        fetchData();
    },[])

    let topRatedFilter = ()=>{
        let filtered = resData.filter((item)=>item.info.avgRating>4.5);
        setFilteredResData(filtered);
        }
    
    searchHandler = ()=>{
        let searchText = document.getElementById("search-box").value;
        let filtered = resData.filter((item)=>item.info.name.toLowerCase().includes(searchText.toLowerCase()))
        setFilteredResData(filtered)

    }

    //conditional rendering
    if(resData.length==0){
        return <Shimmer/>
    }
    return (
    <div className="body">
        <div className="filter-container">
            <div className="search-container">
                <input type="text" id="search-box"/>
                <button onClick={searchHandler}>Search</button>
            </div>
            <button className="filter-btn" onClick={topRatedFilter}>Top Rated Restaurants</button>
        </div>
        <div className="restaurant-card-container">
            {filteredResData.map((rest)=> <Link key={rest.info.id} to={'restaurants/'+rest.info.id}><RestaurantCard  props={rest.info}/></Link> )}
        </div>
    </div>
);}

export default BodyComponent;