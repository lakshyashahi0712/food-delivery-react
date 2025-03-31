import { useDispatch } from "react-redux"
import { addItem } from "../utils/cartSlice"
import { CDN_URL } from "../utils/constants"
const ItemList = ({ items }) => {

    const dispatch = useDispatch()
    const handleAddItem = (item)=>{
        //dispatch action
        dispatch(addItem(item))
    }
    
    return (
        <div>
            {items.map((item) => (
                <div key={item.card.info.id} className="p-2 m-2 border-b-2 border-black text-left flex justify-between">
                    <div className="w-9/12">
                        <img className="w-24 h-24 rounded-lg object-cover" src={CDN_URL + item.card.info.imageId} />
                        <div className="py-2">
                            <span className="font-bold">{item.card.info.name}</span>
                            <span> - ₹ {item.card.info.defaultPrice ? item.card.info.defaultPrice / 100 : item.card.info.price / 100}</span>
                        </div>
                        <p className="text-sm">{item.card.info.description}</p>
                    </div>
                    <div className="w-3/12 p-4">
                        <div className="absolute">
                            <button className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg" onClick={()=>handleAddItem(item)}>
                                Add +
                            </button>

                        </div>
                    </div>
                </div>


            ))}
        </div>
    )
}
export default ItemList