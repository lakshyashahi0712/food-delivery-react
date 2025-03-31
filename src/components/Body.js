import ResturantCard , {withPromotedLabel} from "./ResturantCard";
import resList from "../utils/mockData";
import { useState,useEffect , useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {

    const [listofResturants, setlistofResturants] = useState([]);
    const [filteredResturant, setfilteredResturant] = useState([]);
    const [searchText,setsearchText] = useState("");
    const onlineStatus = useOnlineStatus();
    const ResturantCardPromoted = withPromotedLabel(ResturantCard)
    useEffect(()=>{
        fetchData();
    },[])
    const fetchData = async () =>{
        const data = await fetch(
            "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6565704&lng=77.3685477&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        console.log(json);
        setlistofResturants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle.restaurants);
        setfilteredResturant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle.restaurants);
    }
    if(listofResturants.length === 0){
        return <Shimmer/>
    }


    
    if(onlineStatus === false) return <h1>You are offline</h1>

    const {setuserName , loggedInUser} = useContext(UserContext)
    
    return(
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input  type="text" className="search-box border border-solid border-black" value={searchText} onChange={(e)=>{
                        setsearchText(e.target.value)
                    }}  />
                    <button className="m-4 px-4 py-1.3 bg-green-500 rounded-lg" onClick={()=>{
                        const filteredResturant = listofResturants.filter(
                        (res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setfilteredResturant(filteredResturant);
                        console.log(searchText)
                    }}>Search</button>
                   
                </div>
                <div className="p-4 m-8">
                    <label className="pr-2">Username :</label>
                    <input className="border border-black border-solid pl-2" value={loggedInUser} onChange={(e)=> setuserName (e.target.value)}/>
                </div>
                <div className="flex items-center m-4 p-4">
                <button className="bg-green-400 px-2 rounded-lg" onClick={()=>{
                    const filteredList = listofResturants.filter(
                        (res)=>res.info.avgRating>4.3);
                        setfilteredResturant(filteredList)
                        console.log(filteredList)
                }}>Top rated Resturants</button>
                </div>
            </div>
            
            <div className="flex flex-wrap">
                {filteredResturant.map((resturant) =>(
                   <Link key={resturant.info.id} to={"/resturant/" + resturant.info.id}> <ResturantCard  resData={resturant} /></Link>
                ))}
            </div>
        </div>
        
    )
}
export default Body;