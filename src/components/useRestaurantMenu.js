import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constants";
const useRestaurantMenu = (resId)=>{
    const [menuData, setMenuData] = useState([])
    
    const getMenu = async ()=>{
        let resp = await fetch(MENU_URL+resId);
        let data = await resp.json()
        console.log(data)
        setMenuData(data.data.cards)    
    }
    
    useEffect(()=>{
        getMenu();
    },[])

    return menuData;
}

export default useRestaurantMenu;