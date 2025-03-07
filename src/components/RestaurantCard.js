import { Link } from "react-router-dom";
import { IMG_URL, STAR_IMG_URL } from "../utils/constants";

const RestaurantCard = (obj)=>{
    props=obj.props
    return (
        // <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        //     <div className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8">
        //         <img src={IMG_URL+props.cloudinaryImageId} />
        //     </div>
        //     <h3 className="mt-4 text-sm text-gray-700">{props.name}</h3>
        //     <div className="max-w-1">
        //         <img src={STAR_IMG_URL}/>
        //         <span>{props.avgRating}</span>
        //         <span>{props.sla?props.sla.slaString:""}</span>
        //     </div>
        //     <div className="cuisine">{props.cuisines?props.cuisines.join(','):""}</div>
        //     <div className="place">{props.areaName}</div>
        // </div>



            // <div className=" bg-blue-100 rounded-lg aspect-square">
            //         <img
            //         alt={IMG_URL+props.cloudinaryImageId}
            //         src={IMG_URL+props.cloudinaryImageId}
            //         className="aspect-square w-66 mx-2 my-2 rounded-lg bg-gray-200 object-cover group-hover:opacity-75 l:aspect-7/8"
            //         />
            //         <h2 className="mt-4 text-sm font-medium text-center">{props.name}</h2>
            //         <span className="mx-4 text-center flex"><img className="w-10 rounded-2xl" src={STAR_IMG_URL}/>{props.avgRating} {props.sla?props.sla.slaString:""}</span>
            //         <p className="mt-1 mx-4 text-sm font-medium text-gray-900">{props.cuisines?props.cuisines.map((item)=><li>{item}</li>):""}</p>
            //         <p className="mt-1 mx-4 mb-2 text-lg font-medium text-gray-900">{props.areaName}</p>
            //     </div>

            <div className="w-60 h-80 flex flex-col rounded-2xl overflow-hidden shadow-lg bg-white p-4 transition-transform transform hover:scale-105">
      <img className="w-full h-32 object-cover rounded-xl" src={IMG_URL + props.cloudinaryImageId} alt={props.name} />
      <div className="p-4 flex-1 flex flex-col justify-between overflow-hidden">
        <h2 className="text-xl font-semibold text-gray-800 truncate">{props.name}</h2>
        <p className="text-gray-600 h-14 overflow-hidden text-ellipsis line-clamp-2">{props.cuisines ? props.cuisines.join(', ') : ""}</p>
        <div className="flex justify-between items-center mt-2">
          <span className="text-yellow-500 font-bold">⭐ {props.avgRating}</span>
          <span className="text-green-600 font-semibold">{props.sla ? props.sla.slaString : ""}</span>
        </div>
        <p className="text-sm text-gray-500 h-6 truncate w-full whitespace-nowrap">📍 {props.areaName}</p>
      </div>
    </div>
    )
}

export default RestaurantCard;