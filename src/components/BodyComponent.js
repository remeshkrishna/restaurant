import restaurants from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
//import restaurants from "../utils/mockData";
import { useState , useEffect} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const BodyComponent =  ()=>{
    let [resData,setResData] = useState([]);
    let [filteredResData,setFilteredResData] = useState([]);
    const [searchQuery,setSearchQuery] = useState("");
    
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
    const searchHandler = ()=>{
        let filtered = resData?.filter((item)=>item.info.name.toLowerCase().includes(searchQuery.toLowerCase()))
        setFilteredResData(filtered)
        }

    //conditional rendering
    if(resData.length==0){
        return <Shimmer/>
    }
    return (
    <div className="body">
        <div className="filter-container">
            <div className="container mx-auto p-4 flex justify-center">
                <input
                    type="text"
                    placeholder="Search restaurants..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full md:w-1/2 p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 transition"
                    onClick={searchHandler}
                >
                Search
                </button>
                <button className="mx-2 px-4 py-2 bg-yellow-300 text-black rounded-lg hover:bg-blue-600 transition" onClick={topRatedFilter}>Top Rated Restaurants</button>
            </div>
            
        </div>
        <div className="flex flex-wrap  gap-4">
            {filteredResData.map((rest)=> <Link className="ml-4" key={rest.info.id} to={'restaurants/'+rest.info.id}><RestaurantCard  props={rest.info}/></Link> )}
        </div>
    </div>
);}

export default BodyComponent;