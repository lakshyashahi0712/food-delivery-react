import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useResturantMenu from "../utils/useResturantMenu";
import ResturantCategory from "./ResturantCategory";


const ResturantMenu = () => {


    const { resId } = useParams()

    const resInfo = useResturantMenu(resId)

    const [showIndex,setshowIndex] = useState(null);

    if (resInfo === null) return (<Shimmer />)
    const { name, cuisines, cloudinaryImageId, costForTwoMessage } = resInfo.cards[2].card.card.info;

    const itemCard = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards || [];

    //console.log(resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

    const categories = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c.card.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    console.log(categories)
    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-3xl">{name}</h1>
            <h3 className="font-bold text-lg">{cuisines.join(",")} - {costForTwoMessage}</h3>
            {categories.map((category , index) => (
                <ResturantCategory key={category.card.card.title} data={category?.card?.card} showItems={index === showIndex ? true:false} 
                setshowIndex={()=>setshowIndex(index)}
                />
            ))}

        </div>
    )
}
export default ResturantMenu;