import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "./useRestaurantMenu";
import useOnlineStatus from "./useOnlineStatus";

const RestaurantMenu = ()=>{
    const {resId} = useParams()
    const resInfo = useRestaurantMenu(resId);
    
    const onlineStatus = useOnlineStatus();
    if(!onlineStatus){
        return <h1>Looks like you are offline!!! please check internet connection</h1>
    }

    if(resInfo.length === 0 ){
        return <Shimmer/>
    }
    return (
        <div>
            <h1>{resInfo[2].card.card.info.name}</h1>
            <h2>Menu</h2>
            <ul>
                {resInfo[4]?.groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards.map((item)=><li key={item.card.info.id}>{item.card.info.name+' - '+item.card.info.price}</li>)}
            </ul>
        </div>
    )
}

export default RestaurantMenu;