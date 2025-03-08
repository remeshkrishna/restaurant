import { IMG_URL } from "../utils/constants";
import { useState } from "react";
import { addItem} from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const CategoryItem = ({item, setClickIndex , showCard})=>{
    let dispatch =useDispatch();

    const handleClick =()=>{
        setClickIndex()
    }
    
    const addToCart = (item)=>{
        dispatch(addItem(item))
    }

     return (
        <li className="bg-gray-100 w-6/12 mx-auto my-2  rounded-xl" key={item.card.card.categoryId}>
                <div className="flex justify-between p-2" onClick={handleClick}>
                    <h2  className="font-bold text-xl mx-4">{item.card.card.title+"("+item.card.card.itemCards.length+")"}</h2>
                    <h2 className="mr-4">⬇️</h2>
                </div>
                <ul className="bg-white shadow-2xl rounded-b-sm">{item.card.card.itemCards.map((food)=>{
                   
                    return showCard && <li className="mt-2 mb-2 border-b-gray-300 border-b-1" key={food.card.info.id}>
                                <div className="flex justify-between gap-3 mr-2 items-center">
                                    <div className="flex flex-col text-left ml-6 gap-2 w-2/3">
                                        <span className="font-bold break-words">{food.card.info.name}</span>
                                        <span className="text-green-700 font-semibold">
                                        ⭐ {food.card.info.ratings?.aggregatedRating?.rating}
                                        </span>
                                        <span>Rs. {(food.card.info.price || food.card.info.defaultPrice) / 100}</span>
                                        <span className="text-gray-500 font-sans break-words">{food.card.info.description}</span>
                                    </div>
                                    <div className="relative w-40 h-32 p-2">
                                        <img className="w-full h-full object-cover rounded-2xl" src={IMG_URL + food.card.info.imageId} alt={food.card.info.name} />
                                        <button 
                                        className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition"
                                        onClick={()=>addToCart(food)}
                                        >
                                        Add +
                                        </button>
                                    </div>
                                </div>
                                
                            </li>
                })}</ul>
        </li>
    )
}

export default CategoryItem;
