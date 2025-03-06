import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constants"
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = ()=>{

    const [menuData, setMenuData] = useState([])
    const {resId} = useParams()

    const getMenu = async()=>{
        let resp = await fetch(MENU_URL+resId);
        let data = await resp.json()
        setMenuData(data.data.cards)
        
    }
    useEffect(()=>{
        getMenu();
    },[])
    if(menuData.length === 0 ){
        return <Shimmer/>
    }
    return (
        <div>
            <h1>{menuData[2].card.card.info.name}</h1>
            <h2>Menu</h2>
            <ul>
                {menuData[4]?.groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards.map((item)=><li key={item.card.info.id}>{item.card.info.name+' - '+item.card.info.price}</li>)}
            </ul>
        </div>
    )
}

export default RestaurantMenu;