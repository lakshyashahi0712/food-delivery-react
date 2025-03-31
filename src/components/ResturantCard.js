import { CDN_URL } from "../utils/constants"

const ResturantCard = (props) =>{
    const {resData} = props

    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo} = resData?.info
    return(
        <div className="p-4 m-4 w-[250px] bg-gray-200 rounded-lg hover:bg-gray-300">
            <img className="rounded-2xl" src={CDN_URL+cloudinaryImageId} ></img>
            <div className="res-content">
            <h3 className="font-bold py-1.5 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{resData.info.sla.deliveryTime} Minutes</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            </div>
        </div>
    )
}

export const withPromotedLabel = (ResturantCard)=>{ //This will not work bcz api has removed it
    return ()=>{
        return(
            <div>
                <label>
                    Promoted
                </label>
                <ResturantCard />
            </div>
        )
    }

}
export default ResturantCard;