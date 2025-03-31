import { useState } from "react";
import ItemList from "./ItemList";

const ResturantCategory = ({data , showItems , setshowIndex })=>{
   console.log(data)
   const handleClick = ()=>{
    setshowIndex();
   }
   
    return (
        
        <div>
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-2xl hover:cursor-pointer" onClick={handleClick}>
                <span className="font-bold text-lg" >
                    {data.title} ({data.itemCards.length})
                </span>
                <span> 🔽</span>
                <div>
                    {showItems && <ItemList items={data.itemCards} />}
                </div>
            </div>
        </div>
    )
}
export default ResturantCategory;