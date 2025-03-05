import { IMG_URL, STAR_IMG_URL } from "../utils/constants";

const RestaurantCard = (obj)=>{
    props=obj.props
    return (
        <div className="restaurant-card">
            <div className="hotel-image">
                <img src={IMG_URL+props.cloudinaryImageId} />
            </div>
            <h3>{props.name}</h3>
            <div className="rating-container">
                <img src={STAR_IMG_URL}/>
                <span>{props.avgRating}</span>
                <span>{props.sla?props.sla.slaString:""}</span>
            </div>
            <div className="cuisine">{props.cuisines?props.cuisines.join(','):""}</div>
            <div className="place">{props.areaName}</div>
        </div>
    )
}

export default RestaurantCard;