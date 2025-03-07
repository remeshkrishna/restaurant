import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "./useRestaurantMenu";
import useOnlineStatus from "./useOnlineStatus";

import { useState } from "react";
import CategoryItem from "./CategoryItem";

const RestaurantMenu = ()=>{
    const {resId} = useParams()
    const resInfo = useRestaurantMenu(resId);
    const [clickIndex,setClickIndex] = useState(null)
    
    
    const onlineStatus = useOnlineStatus();
    if(!onlineStatus){
        return <h1>Looks like you are offline!!! please check internet connection</h1>
    }

    if(resInfo.length === 0 ){
        return <Shimmer/>
    }
    let items = resInfo[4]?.groupedCard.cardGroupMap.REGULAR.cards.filter((item)=>item?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    console.log(items)

    

    return (
        <div className="text-center">
            <h1 className="font-bold text-3xl mt-4">{resInfo[2].card.card.info.name}</h1>
            
            <ul className="mt-4">
                {items.map((it,index)=><CategoryItem 
                    key={it.card.card.categoryId}
                    item={it} 
                    setClickIndex={()=>{
                        if(clickIndex!=index){
                            return setClickIndex(index)
                        }
                        else{
                            return setClickIndex(null)
                        }
                    }}
                    showCard = {clickIndex===index?true:false}
                    />)}
            </ul>
        </div>
    )
}

export default RestaurantMenu;